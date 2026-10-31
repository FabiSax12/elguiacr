// Cloudflare Worker for the only dynamic route of the site: POST /api/contact.
// Everything else is served from `dist/` by the static assets binding (see `run_worker_first` in wrangler.jsonc).
import { locales } from '../src/i18n/config';
import { contactMethodIds, interestIds, timingIds, timingIdsWithDate, zoneIds, type InterestId } from '../src/data/contactForm';
import { privacyUpdated } from '../src/data/site';
import { es } from '../src/i18n/es';
import { buildLeadEmailHtml } from './leadEmail';
import type { Submission } from './types';

interface Env {
  CONTACT_FROM: string;
  CONTACT_TO: string;
  RESEND_API_KEY: string;
  TURNSTILE_SECRET_KEY: string;
  // Comma-separated hostnames allowed to produce a token. Unset skips the hostname check.
  TURNSTILE_HOSTNAMES?: string;
}

type ErrorCode = 'validation' | 'captcha' | 'send';

const MAX_BODY_BYTES = 20_000;
const MAX_WHAT = 2000;
const MAX_FIELD = 200;
const TURNSTILE_ACTION = 'contact';
const TURNSTILE_URL = 'https://challenges.cloudflare.com/turnstile/v0/siteverify';
const RESEND_URL = 'https://api.resend.com/emails';

const segmentLabels: Record<string, string> = {
  ...Object.fromEntries(Object.entries(es.audiences.items).map(([id, item]) => [id, item.segment])),
  other: es.contact.otherOption,
};

const json = (body: { ok: true } | { ok: false; error: ErrorCode | 'not_found' | 'method_not_allowed' }, status = 200, headers: HeadersInit = {}) =>
  Response.json(body, { status, headers: { 'Cache-Control': 'no-store', ...headers } });

const fail = (error: ErrorCode, status: number) => json({ ok: false, error }, status);

function text(value: unknown, max: number): string | undefined {
  if (typeof value !== 'string') return undefined;
  const trimmed = value.trim();
  return trimmed.length > 0 && trimmed.length <= max ? trimmed : undefined;
}

function choice<T extends string>(value: unknown, ids: readonly T[]): T | undefined {
  return ids.find((id) => id === value);
}

// Returns undefined for anything the form could not have produced, so a client bug and a hand-made request both end up as a 400.
function parse(body: Record<string, unknown>): Submission | undefined {
  // Consent is mandatory and must be explicit: anything other than a literal `true` is rejected.
  if (body.consent !== true) return undefined;

  const segment = choice(body.segment, Object.keys(segmentLabels));
  const method = choice(body.method, contactMethodIds);
  const name = text(body.name, MAX_FIELD);
  const what = text(body.what, MAX_WHAT);
  if (!segment || !method || !name || !what) return undefined;

  const phone = text(body.phone, MAX_FIELD);
  const email = text(body.email, 254);
  if (method === 'whatsapp' && !(phone && /^\+?[\d\s().-]{6,30}$/.test(phone) && phone.replace(/\D/g, '').length >= 6)) return undefined;
  if (method === 'email' && !(email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email))) return undefined;

  const rawInterests = body.interests ?? [];
  if (!Array.isArray(rawInterests) || rawInterests.length > interestIds.length) return undefined;
  const interests = rawInterests.map((id) => choice(id, interestIds));
  if (interests.some((id) => !id)) return undefined;

  const people = body.people === undefined || body.people === '' || body.people === null ? undefined : Number(body.people);
  if (people !== undefined && !(Number.isInteger(people) && people >= 1 && people <= 100_000)) return undefined;

  const timing = body.timing === undefined || body.timing === '' ? undefined : choice(body.timing, timingIds);
  const zone = body.zone === undefined || body.zone === '' ? undefined : choice(body.zone, zoneIds);
  if ((body.timing !== undefined && body.timing !== '' && !timing) || (body.zone !== undefined && body.zone !== '' && !zone)) return undefined;

  // Optional free text that is too long is a malformed request, not something to truncate silently.
  const optionalText = (value: unknown) => (value === undefined || value === '' || value === null ? { ok: true, value: undefined } : { ok: text(value, MAX_FIELD) !== undefined, value: text(value, MAX_FIELD) });
  const date = optionalText(body.date);
  const zoneName = optionalText(body.zoneName);
  if (!date.ok || !zoneName.ok) return undefined;

  return {
    locale: choice(body.locale, locales) ?? 'es',
    segment,
    name,
    method,
    phone: method === 'whatsapp' ? phone : undefined,
    email: method === 'email' ? email : undefined,
    what,
    interests: [...new Set(interests as InterestId[])],
    people,
    timing,
    date: timing && timingIdsWithDate.some((id) => id === timing) ? date.value : undefined,
    zone,
    zoneName: zone === 'yes' ? zoneName.value : undefined,
  };
}

async function passesTurnstile(token: unknown, secret: string, ip: string | null, hostnames: string | undefined): Promise<boolean> {
  if (typeof token !== 'string' || !token || token.length > 2048) return false;
  const form = new FormData();
  form.append('secret', secret);
  form.append('response', token);
  if (ip) form.append('remoteip', ip);
  try {
    const response = await fetch(TURNSTILE_URL, { method: 'POST', body: form, signal: AbortSignal.timeout(8000) });
    const outcome = (await response.json()) as { success?: boolean; action?: string; hostname?: string; 'error-codes'?: string[] };
    const allowed = (hostnames ?? '').split(',').map((hostname) => hostname.trim()).filter(Boolean);
    const passed = outcome.success === true
      && outcome.action === TURNSTILE_ACTION
      && (allowed.length === 0 || (typeof outcome.hostname === 'string' && allowed.includes(outcome.hostname)));
    // Never log the token or the secret: the codes, action and hostname are enough to tell what failed.
    if (!passed) console.warn('turnstile rejected', JSON.stringify({ codes: outcome['error-codes'], action: outcome.action, hostname: outcome.hostname }));
    return passed;
  } catch (error) {
    console.warn('turnstile verification failed', error instanceof Error ? error.name : 'unknown');
    return false;
  }
}

// The plain-text alternative: nothing from the visitor is ever interpreted as markup here, so there is nothing to escape.
function buildEmail(data: Submission, submittedAt: Date) {
  const { contact } = es;
  const line = (label: string, value: string | undefined) => (value ? `${label}: ${value}` : undefined);
  const timing = data.timing ? [contact.timings[data.timing], data.date].filter(Boolean).join(' · ') : undefined;
  const zone = data.zone ? [contact.zones[data.zone], data.zoneName].filter(Boolean).join(' · ') : undefined;
  const contactValue = data.method === 'whatsapp' ? data.phone : data.email;

  const body = [
    'Nueva consulta desde elguiacr.com',
    '',
    line('Para quién', segmentLabels[data.segment]),
    line('Nombre', data.name),
    line('Contacto preferido', `${contact.methods[data.method]} · ${contactValue}`),
    '',
    contact.whatLabel,
    data.what,
    '',
    line('Intereses', data.interests.map((id) => contact.interests[id]).join(', ')),
    line('Personas', data.people?.toString()),
    line('Cuándo', timing),
    line('Zona', zone),
    line('Idioma del sitio', data.locale),
    '',
    // Evidence of the consent (Ley 8968, art. 5.2): the policy version the visitor accepted and when.
    line('Consentimiento', `aceptó la política de privacidad (versión ${privacyUpdated}) el ${submittedAt.toISOString()}`),
  ]
    .filter((entry) => entry !== undefined)
    .join('\n');

  const oneLine = (value: string) => value.replace(/\s+/g, ' ');
  return { subject: `Nueva consulta de ${oneLine(data.name)} (${segmentLabels[data.segment]})`, body };
}

async function sendEmail(data: Submission, env: Env): Promise<boolean> {
  const submittedAt = new Date();
  const { subject, body } = buildEmail(data, submittedAt);
  // A template bug must not lose the lead: without the HTML the plain-text alternative still goes out.
  let html: string | undefined;
  try {
    html = buildLeadEmailHtml(data, { subject, submittedAt });
  } catch (error) {
    console.warn('lead email template failed', error instanceof Error ? error.name : 'unknown');
  }
  try {
    const response = await fetch(RESEND_URL, {
      method: 'POST',
      headers: { Authorization: `Bearer ${env.RESEND_API_KEY}`, 'Content-Type': 'application/json' },
      body: JSON.stringify({
        from: env.CONTACT_FROM,
        to: [env.CONTACT_TO],
        subject,
        ...(html ? { html } : {}),
        text: body,
        ...(data.email ? { reply_to: data.email } : {}),
      }),
      signal: AbortSignal.timeout(10_000),
    });
    if (!response.ok) {
      // Resend answers { name, message } (e.g. "validation_error", "The domain is not verified"). No secret in there.
      const detail = (await response.json().catch(() => ({}))) as { name?: string; message?: string };
      console.warn('resend rejected', JSON.stringify({ status: response.status, name: detail.name, message: detail.message }));
    }
    return response.ok;
  } catch (error) {
    console.warn('resend request failed', error instanceof Error ? error.name : 'unknown');
    return false;
  }
}

async function handleContact(request: Request, env: Env): Promise<Response> {
  const raw = await request.text();
  if (raw.length > MAX_BODY_BYTES) return fail('validation', 400);

  let body: unknown;
  try {
    body = JSON.parse(raw);
  } catch {
    return fail('validation', 400);
  }
  if (typeof body !== 'object' || body === null || Array.isArray(body)) return fail('validation', 400);
  const fields = body as Record<string, unknown>;

  // Honeypot: real visitors never see this field. Answer like a success so bots learn nothing.
  if (typeof fields.website === 'string' && fields.website.trim() !== '') return json({ ok: true });

  const submission = parse(fields);
  if (!submission) return fail('validation', 400);

  if (!(await passesTurnstile(fields.turnstileToken, env.TURNSTILE_SECRET_KEY, request.headers.get('CF-Connecting-IP'), env.TURNSTILE_HOSTNAMES))) return fail('captcha', 400);

  return (await sendEmail(submission, env)) ? json({ ok: true }) : fail('send', 502);
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    const { pathname } = new URL(request.url);
    if (pathname !== '/api/contact' && pathname !== '/api/contact/') return json({ ok: false, error: 'not_found' }, 404);
    if (request.method !== 'POST') return json({ ok: false, error: 'method_not_allowed' }, 405, { Allow: 'POST' });
    return handleContact(request, env);
  },
};

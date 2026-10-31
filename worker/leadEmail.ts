// HTML email sent to the business inbox for every contact form submission (design reference: src/assets/lead-email.preview.html).
// Every value that comes from the visitor goes through `escapeHtml`, and links are built only from validated data.
import { localeMeta } from '../src/i18n/config';
import { privacyUpdated } from '../src/data/site';
import { es } from '../src/i18n/es';
import { logoSrc, waveSrc } from './leadEmailAssets';
import type { Submission } from './types';

const entities: Record<string, string> = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' };

export const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => entities[char]);

// Escape first, then turn the line breaks into <br>, so the visitor's markup never survives.
const multiline = (value: string) => escapeHtml(value).replace(/\r\n|\r|\n/g, '<br>');

const sans = "font-family:'Source Sans 3', 'Segoe UI', Helvetica, Arial, sans-serif;";
const serif = "font-family:Alegreya, Georgia, 'Times New Roman', serif;";
const sectionLabelStyle = `${sans}font-size:12px;line-height:16px;font-weight:700;letter-spacing:1.6px;text-transform:uppercase;color:#1F5C46;`;
const preheaderFiller = '&nbsp;&zwnj;'.repeat(40);
const replySubject = encodeURIComponent('Tu consulta en El Guía CR');

const sectionLabel = (text: string) => `<div style="${sectionLabelStyle}">${escapeHtml(text)}</div>`;
const goldRule = (paddingTop: number) =>
  `<div style="padding-top:${paddingTop}px;"><table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr><td height="2" style="height:2px;font-size:0;line-height:0;background:#E0A632;" bgcolor="#E0A632">&nbsp;</td></tr></table></div>`;

const timestamp = new Intl.DateTimeFormat('es-CR', { dateStyle: 'long', timeStyle: 'short', timeZone: 'America/Costa_Rica' });

// The audience label and its one-word goal ("Locales", "Descubrir"); "other" has no goal.
function audience(segment: string): { label: string; word?: string } {
  const items: Record<string, { segment: string; word: string } | undefined> = es.audiences.items;
  const item = items[segment];
  return item ? { label: item.segment, word: item.word } : { label: es.contact.otherOption };
}

// Digits with the country code first when it is known: "+" or "00" prefixes are dropped, and an 8-digit number
// without either is a local Costa Rican one. `international` is false when the country code can't be known.
function normalizePhone(phone: string) {
  const raw = phone.replace(/\D/g, '');
  if (phone.trim().startsWith('+')) return { digits: raw, international: true };
  if (raw.startsWith('00')) return { digits: raw.slice(2), international: true };
  if (raw.length === 8) return { digits: `506${raw}`, international: true };
  return { digits: raw, international: false };
}

function contactLinks(data: Submission) {
  const { contact } = es;
  if (data.method === 'whatsapp' && data.phone) {
    const phone = data.phone;
    const display = escapeHtml(phone);
    const { digits, international } = normalizePhone(phone);
    const tel = `tel:${international ? '+' : ''}${digits}`;
    return {
      value: `<a href="${escapeHtml(tel)}" style="color:#17362D;text-decoration:underline;">${display}</a>`,
      button: `https://wa.me/${digits}`,
      method: contact.methods.whatsapp,
    };
  }
  const email = data.email ?? '';
  // The "@" is valid in a mailto address; keeping it readable is friendlier to every client.
  const mailto = `mailto:${encodeURIComponent(email).replace('%40', '@')}?subject=${replySubject}`;
  return {
    value: `<a href="${escapeHtml(mailto)}" style="color:#17362D;text-decoration:underline;">${escapeHtml(email)}</a>`,
    button: mailto,
    method: contact.methods.email,
  };
}

export function buildLeadEmailHtml(data: Submission, options: { subject: string; submittedAt: Date }): string {
  const { contact } = es;
  const { label: segmentLabel, word } = audience(data.segment);
  const firstName = data.name.split(/\s+/)[0] ?? data.name;
  const first = escapeHtml(firstName);
  const submittedAt = timestamp.format(options.submittedAt);
  const links = contactLinks(data);

  const preheader = [data.name, segmentLabel, data.people ? `${data.people} ${data.people === 1 ? 'persona' : 'personas'}` : undefined, data.date]
    .filter(Boolean)
    .join(' · ');

  const eyebrow = ['Nueva consulta', segmentLabel, word].filter(Boolean).join(' · ');
  const timing = data.timing ? [contact.timings[data.timing], data.date].filter(Boolean).join(' · ') : undefined;
  const zone = data.zone ? [contact.zones[data.zone], data.zoneName].filter(Boolean).join(' · ') : undefined;

  const rows: Array<[string, string | undefined]> = [
    ['Para quién', `${escapeHtml(segmentLabel)}${word ? ` <span style="color:#1F5C46;font-weight:400;">· ${escapeHtml(word)}</span>` : ''}`],
    ['Personas', data.people === undefined ? undefined : String(data.people)],
    ['Cuándo', timing ? escapeHtml(timing) : undefined],
    ['Zona', zone ? escapeHtml(zone) : undefined],
    ['Responder en', `${escapeHtml(localeMeta[data.locale].name)} <span style="color:#1F5C46;font-weight:400;">· idioma del sitio</span>`],
  ];
  const separator = '<tr><td colspan="2" height="2" style="height:2px;font-size:0;line-height:0;background:#FFF7E8;" bgcolor="#FFF7E8">&nbsp;</td></tr>';
  const knownRows = rows
    .filter((row): row is [string, string] => row[1] !== undefined)
    .map(
      ([label, value]) => `
    <tr>
      <td class="stack" width="150" valign="top" style="width:150px;padding:14px 20px 0 20px;${sans}font-size:12px;line-height:20px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#1F5C46;">${escapeHtml(label)}</td>
      <td class="stack" valign="top" style="padding:12px 20px 14px 20px;${sans}font-size:17px;line-height:24px;font-weight:500;color:#17362D;">${value}</td>
    </tr>
    ${separator}`,
    )
    .join('');

  const chip = (text: string) =>
    `<span style="display:inline-block;margin:0 8px 8px 0;padding:7px 14px;background:#F3EAD8;${sans}font-size:15px;line-height:20px;font-weight:500;color:#17362D;mso-padding-alt:7px 14px;">${escapeHtml(text)}</span>`;
  const interestsBlock = data.interests.length
    ? `
    <tr><td class="px" style="padding:28px 40px 0 40px;">
      ${sectionLabel('Intereses')}
      <div style="padding-top:12px;font-size:0;line-height:0;">
        ${data.interests.map((id) => chip(contact.interests[id])).join('')}
      </div>
    </td></tr>
`
    : '';

  const replyNote = data.email ? ` Si respondes a este correo, tu respuesta llega directo a ${first}.` : '';

  return `<!doctype html>
<html lang="es" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="x-apple-disable-message-reformatting">
<meta name="color-scheme" content="light">
<meta name="supported-color-schemes" content="light">
<title>${escapeHtml(options.subject)}</title>
<!--[if mso]><noscript><xml><o:OfficeDocumentSettings><o:PixelsPerInch>96</o:PixelsPerInch></o:OfficeDocumentSettings></xml></noscript><![endif]-->
<link href="https://fonts.googleapis.com/css2?family=Alegreya:ital,wght@0,600;0,700;1,600&family=Source+Sans+3:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
  body { margin:0; padding:0; width:100%; background:#F3EAD8; -webkit-text-size-adjust:100%; -ms-text-size-adjust:100%; }
  table { border-collapse:collapse; mso-table-lspace:0; mso-table-rspace:0; }
  img { border:0; outline:none; text-decoration:none; -ms-interpolation-mode:bicubic; }
  a { color:inherit; }
  @media only screen and (max-width:620px) {
    .container { width:100% !important; }
    .px { padding-left:24px !important; padding-right:24px !important; }
    .stack { display:block !important; width:100% !important; box-sizing:border-box; }
    .h1 { font-size:32px !important; line-height:38px !important; }
    .logo { width:160px !important; height:auto !important; }
  }
</style>
</head>
<body style="margin:0;padding:0;background:#F3EAD8;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;font-size:1px;line-height:1px;color:#F3EAD8;">${escapeHtml(preheader)}${preheaderFiller}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3EAD8" style="background:#F3EAD8;">
<tr><td align="center" style="padding:28px 12px;">

  <!--[if mso]><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
  <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">

    <!-- Encabezado -->
    <tr><td class="px" bgcolor="#17362D" style="background:#17362D;padding:36px 40px 0 40px;">
      <img class="logo" src="${logoSrc}" width="190" alt="El Guía CR" style="display:block;width:190px;height:auto;">
      <div style="padding-top:36px;${sans}font-size:12px;line-height:16px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#E0A632;">${escapeHtml(eyebrow)}</div>
      <h1 class="h1" style="margin:10px 0 0 0;${serif}font-size:40px;line-height:46px;font-weight:700;color:#FFF7E8;">${escapeHtml(data.name)}</h1>
      <div style="padding-top:10px;${sans}font-size:16px;line-height:24px;color:#FFF7E8;">Dejó una consulta en elguiacr.com<br><span style="font-weight:500;">${escapeHtml(submittedAt)}</span></div>
    </td></tr>
    <tr><td bgcolor="#17362D" style="background:#17362D;padding:18px 0 0 0;font-size:0;line-height:0;">
      <img src="${waveSrc}" width="600" alt="" style="display:block;width:100%;max-width:600px;height:auto;">
    </td></tr>

    <!-- Cuerpo -->
    <tr><td bgcolor="#FFF7E8" style="background:#FFF7E8;">
      <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">

        <tr><td class="px" style="padding:40px 40px 0 40px;">
          ${sectionLabel(contact.whatLabel)}
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;"><tr>
            <td width="5" style="width:5px;background:#E0A632;font-size:0;line-height:0;" bgcolor="#E0A632">&nbsp;</td>
            <td bgcolor="#F3EAD8" style="background:#F3EAD8;padding:22px 24px;color:#17362D;${serif}font-size:26px;line-height:34px;font-style:italic;font-weight:600;">${multiline(data.what)}</td>
          </tr></table>
        </td></tr>

        <tr><td class="px" style="padding:36px 40px 0 40px;">
          ${sectionLabel('Lo que sabemos')}
          ${goldRule(10)}
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3EAD8" style="margin-top:14px;background:#F3EAD8;">${knownRows}</table>
        </td></tr>
        ${interestsBlock}
        <tr><td class="px" style="padding:36px 40px 0 40px;">
          ${sectionLabel(`Cómo contactar a ${firstName}`)}
          ${goldRule(10)}
          <div style="padding-top:18px;${sans}font-size:15px;line-height:22px;color:#1F5C46;">${escapeHtml(`Contacto preferido: ${links.method}`)}</div>
          <div style="padding-top:2px;${sans}font-size:22px;line-height:30px;font-weight:600;color:#17362D;word-break:break-all;">${links.value}</div>
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:20px;"><tr>
            <td bgcolor="#1F5C46" style="background:#1F5C46;padding:15px 28px;">
              <a href="${escapeHtml(links.button)}" style="${sans}font-size:16px;line-height:20px;font-weight:600;color:#FFF7E8;text-decoration:none;display:inline-block;">Responder a ${first}&nbsp;&rarr;</a>
            </td>
          </tr></table>
        </td></tr>

        <tr><td class="px" style="padding:40px 40px 40px 40px;">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0"><tr>
            <td width="5" style="width:5px;background:#E0A632;font-size:0;line-height:0;" bgcolor="#E0A632">&nbsp;</td>
            <td bgcolor="#F3EAD8" style="background:#F3EAD8;padding:16px 20px;${sans}font-size:14px;line-height:21px;color:#17362D;">
              <strong style="font-weight:700;">Consentimiento registrado.</strong> ${first} aceptó la política de privacidad (versión ${escapeHtml(privacyUpdated)}) el ${escapeHtml(submittedAt)} (${escapeHtml(options.submittedAt.toISOString())}).
            </td>
          </tr></table>
        </td></tr>

      </table>
    </td></tr>

    <!-- Pie -->
    <tr><td class="px" bgcolor="#17362D" style="background:#17362D;padding:28px 40px;">
      <div style="${serif}font-size:20px;line-height:26px;font-style:italic;font-weight:600;color:#E0A632;">${escapeHtml(es.footer.tagline)}</div>
      <div style="padding-top:10px;${sans}font-size:13px;line-height:20px;color:#FFF7E8;">Mensaje automático del formulario de elguiacr.com.${replyNote}</div>
    </td></tr>

  </table>
  <!--[if mso]></td></tr></table><![endif]-->

</td></tr>
</table>
</body>
</html>
`;
}

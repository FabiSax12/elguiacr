// Confirmation email sent to a visitor who chose email as their contact method, after their inquiry reached the inbox.
// The subject is fixed copy and the visitor's free-text message is never echoed back; the only visitor value in the
// HTML is the first name, which goes through `escapeHtml`.
import { SITE_URL } from '../src/i18n/config';
import { getWhatsappUrl } from '../src/data/site';
import { useTranslations } from '../src/i18n/utils';
import { waveSrc } from './leadEmailAssets';
import { emailHead, escapeHtml, logoSrc, preheaderFiller, sans, serif } from './leadEmail';
import type { Submission } from './types';

// Stricter than the form's check: an address this plain is safe to put in a `to` field untouched.
const PLAIN_EMAIL = /^[\w.+'-]+@[\w-]+(\.[\w-]+)+$/;

// Anyone can put any address in the form, so the greeting only echoes something that looks like a first name:
// letters, marks, apostrophes and hyphens. Anything else (links, long tokens) falls back to the bare greeting.
const FIRST_NAME = /^[\p{L}\p{M}'’-]{1,30}$/u;

export function canAutoReply(data: Submission): data is Submission & { email: string } {
  return data.method === 'email' && data.email !== undefined && PLAIN_EMAIL.test(data.email);
}

export function buildAutoReply(data: Submission & { email: string }): { subject: string; html: string; text: string } {
  const { autoReply: copy, act, footer } = useTranslations(data.locale);
  const firstToken = data.name.split(/\s+/)[0] ?? '';
  const firstName = FIRST_NAME.test(firstToken) ? ` ${firstToken}` : '';
  const whatsappUrl = getWhatsappUrl(act.whatsappMessage);
  const greeting = `${copy.greeting}${firstName},`;

  const text = [
    greeting,
    '',
    copy.text,
    '',
    copy.whatsappLead,
    whatsappUrl,
    '',
    copy.replyNote,
    '',
    `${footer.tagline} · ${SITE_URL}`,
    copy.automatic,
  ].join('\n');

  const html = `<!doctype html>
<html lang="${data.locale}" xmlns="http://www.w3.org/1999/xhtml" xmlns:v="urn:schemas-microsoft-com:vml" xmlns:o="urn:schemas-microsoft-com:office:office">
${emailHead(copy.subject)}<body style="margin:0;padding:0;background:#F3EAD8;">
<div style="display:none;max-height:0;overflow:hidden;opacity:0;mso-hide:all;font-size:1px;line-height:1px;color:#F3EAD8;">${escapeHtml(copy.preheader)}${preheaderFiller}</div>

<table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" bgcolor="#F3EAD8" style="background:#F3EAD8;">
<tr><td align="center" style="padding:28px 12px;">

  <!--[if mso]><table role="presentation" width="600" align="center" cellpadding="0" cellspacing="0" border="0"><tr><td><![endif]-->
  <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:600px;">

    <tr><td class="px" bgcolor="#17362D" style="background:#17362D;padding:36px 40px 0 40px;">
      <img class="logo" src="${logoSrc}" width="190" height="85" alt="El Guía CR" style="display:block;width:190px;height:auto;${sans}font-size:22px;line-height:26px;font-weight:700;color:#FFF7E8;">
      <div style="padding-top:36px;${sans}font-size:12px;line-height:16px;font-weight:700;letter-spacing:1.4px;text-transform:uppercase;color:#E0A632;">${escapeHtml(copy.eyebrow)}</div>
      <h1 class="h1" style="margin:10px 0 0 0;${serif}font-size:40px;line-height:46px;font-weight:700;color:#FFF7E8;">${escapeHtml(copy.heading)}</h1>
    </td></tr>
    <tr><td bgcolor="#17362D" style="background:#17362D;padding:18px 0 0 0;font-size:0;line-height:0;">
      <img src="${waveSrc}" width="600" alt="" style="display:block;width:100%;max-width:600px;height:auto;">
    </td></tr>

    <tr><td class="px" bgcolor="#FFF7E8" style="background:#FFF7E8;padding:40px 40px 40px 40px;">
      <div style="${serif}font-size:26px;line-height:34px;font-style:italic;font-weight:600;color:#17362D;">${escapeHtml(greeting)}</div>
      <div style="padding-top:14px;${sans}font-size:17px;line-height:26px;color:#17362D;">${escapeHtml(copy.text)}</div>
      <div style="padding-top:28px;${sans}font-size:15px;line-height:22px;color:#1F5C46;">${escapeHtml(copy.whatsappLead)}</div>
      <table role="presentation" cellpadding="0" cellspacing="0" border="0" style="margin-top:14px;"><tr>
        <td bgcolor="#1F5C46" style="background:#1F5C46;padding:15px 28px;">
          <a href="${escapeHtml(whatsappUrl)}" style="${sans}font-size:16px;line-height:20px;font-weight:600;color:#FFF7E8;text-decoration:none;display:inline-block;">${escapeHtml(act.whatsappCta)}&nbsp;&rarr;</a>
        </td>
      </tr></table>
      <div style="padding-top:28px;${sans}font-size:14px;line-height:21px;color:#17362D;">${escapeHtml(copy.replyNote)}</div>
    </td></tr>

    <tr><td class="px" bgcolor="#17362D" style="background:#17362D;padding:28px 40px;">
      <div style="${serif}font-size:20px;line-height:26px;font-style:italic;font-weight:600;color:#E0A632;">${escapeHtml(footer.tagline)}</div>
      <div style="padding-top:10px;${sans}font-size:13px;line-height:20px;color:#FFF7E8;">${escapeHtml(copy.automatic)}</div>
    </td></tr>

  </table>
  <!--[if mso]></td></tr></table><![endif]-->

</td></tr>
</table>
</body>
</html>
`;

  return { subject: copy.subject, html, text };
}

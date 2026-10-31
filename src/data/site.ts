// Business facts shared by the footer, the head metadata, the web manifest and the JSON-LD.
// Only facts confirmed by the client belong here: no street address, hours, prices or ratings.
export const siteName = 'El Guía CR';
export const siteShortName = 'El Guía';

export const contactEmail = 'contact@elguiacr.com';
// E.164 without the plus sign, as wa.me expects it.
export const whatsappNumber = '50685878863';
export const instagramUrl = 'https://instagram.com/elguia.cr';

// Ciudad Quesada is the district seat of the San Carlos canton; schema.org has no canton field.
export const businessLocality = 'Ciudad Quesada';
export const businessRegion = 'Alajuela';
export const businessCountryCode = 'CR';

// Data controller shown on the privacy page (Ley 8968, art. 5.1 h: identity and address of the responsable).
// TODO(client): fill these in. The privacy page must not go to main until they are set, because the law
// requires telling people who holds their data and where. Unset fields are left out of the page.
export const dataController: { legalName?: string; idNumber?: string; address?: string } = {
  legalName: undefined,
  idNumber: undefined,
  address: undefined,
};

// ISO date of the current privacy policy text. It is shown on the page and stored with each consent as its version.
export const privacyUpdated = '2026-10-30';
// TODO(client): confirm retention period. 24 months after the last contact is our proposal.
export const privacyRetentionMonths = 24;
export const prodhabUrl = 'https://www.prodhab.go.cr';

// Mirrors of the `verde-oscuro` and `crema-luminoso` tokens in global.css, for places CSS cannot reach
// (theme-color meta, web manifest, generated icons).
export const brandColors = {
  theme: '#17362d',
  background: '#fff7e8',
} as const;

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

// Mirrors of the `verde-oscuro` and `crema-luminoso` tokens in global.css, for places CSS cannot reach
// (theme-color meta, web manifest, generated icons).
export const brandColors = {
  theme: '#17362d',
  background: '#fff7e8',
} as const;

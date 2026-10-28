// Attribution for stock photos in src/assets. Unsplash asks for credit with
// UTM-tagged links to the photographer and the photo page. Entries with a
// `license` (Creative Commons) also need a visible credit where they render.

export interface PhotoCredit {
  file: string;
  author: string;
  authorUrl: string;
  photoUrl: string;
  source: 'Unsplash' | 'Wikimedia Commons';
  license?: string;
  licenseUrl?: string;
}

export const photoCredits: PhotoCredit[] = [
  { file: 'team-cooking-outdoors.webp', author: 'Richard Saunders', authorUrl: 'https://unsplash.com/@rdsaunders?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/group-of-men-preparing-food-outdoors-ewCWcCM8e28?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'river-rope-swing.webp', author: 'Michael Oxendine', authorUrl: 'https://unsplash.com/@oxendine_?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/people-running-on-river-during-daytime-hXsf7cgz8vo?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'team-game-field.webp', author: 'Pierre Vaucher', authorUrl: 'https://unsplash.com/@princlili?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/children-playing-tug-of-war-in-a-grassy-field-LazgZx2HvB0?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'forest-trail-guide.webp', author: 'sayan Nath', authorUrl: 'https://unsplash.com/@hiresayan?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/person-pointing-on-rocky-forest-trail-n-zS5ix1as0?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'santa-teresa-surf.webp', author: 'Luis Desiro', authorUrl: 'https://unsplash.com/@luisdesiro?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/a-group-of-people-carrying-surfboards-into-the-ocean-ETpRDkTI9tY?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'manuel-antonio-coast.webp', author: 'Atanas Malamov', authorUrl: 'https://unsplash.com/@atanasmalamov?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/green-trees-beside-blue-sea-xGhaXZtQb1s?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'friends-hike-laughing.webp', author: 'Felix Rostig', authorUrl: 'https://unsplash.com/@felixrstg?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/low-angle-photography-of-two-men-playing-beside-two-women-UmV2wr-Vbq8?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'farmer-pasture.webp', author: 'Rebecca Ritchie', authorUrl: 'https://unsplash.com/@rebeccaritchie?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/man-wearing-gray-long-sleeved-shirt-on-green-grass-field-NWrp3FK68yE?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'coffee-harvest.webp', author: 'Candes J', authorUrl: 'https://unsplash.com/@candesjaramillo?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/farmer-holding-bucket-of-ripe-coffee-cherries-we5u09a0AxA?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'team-hike-ridge.webp', author: 'MChe Lee', authorUrl: 'https://unsplash.com/@mclee?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/people-standing-on-rock-during-daytime-nTs56fr_71o?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'forest-clearing-retreat.webp', author: 'Margo Evardson', authorUrl: 'https://unsplash.com/@stadinstudio?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/silhouetted-figures-gather-in-a-sun-dappled-forest-clearing-sfDLrGeM8H8?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'coffee-cherries.webp', author: 'Juliana Barquero', authorUrl: 'https://unsplash.com/@juliebaa?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/red-round-fruits-in-tilt-shift-lens-FpsB7Jo8nHk?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'corcovado-coast.webp', author: 'José R.', authorUrl: 'https://commons.wikimedia.org/wiki/File:Parque_Nacional_Corcovado.JPG', photoUrl: 'https://commons.wikimedia.org/wiki/File:Parque_Nacional_Corcovado.JPG', source: 'Wikimedia Commons', license: 'CC BY 3.0', licenseUrl: 'https://creativecommons.org/licenses/by/3.0/' },
  { file: 'forest-rest-group.webp', author: 'Yegor Makarenko', authorUrl: 'https://unsplash.com/@photochel228?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/group-of-people-resting-in-forest-072CM1nnj1c?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'griddle-cooking.webp', author: 'Kris Tian', authorUrl: 'https://unsplash.com/@kris_tian?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/a-woman-preparing-food-on-a-large-griddle-p99EOQqHsiU?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'shared-table.webp', author: 'Israel Caballero', authorUrl: 'https://unsplash.com/@isracab?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/a-table-topped-with-lots-of-plates-of-food-TH6YmxEsv24?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'limon-sign.webp', author: 'Filiz Elaerts', authorUrl: 'https://unsplash.com/@filizelaerts?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/colorful-limon-sign-stands-in-a-park-setting-GhCy7182_vw?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
  { file: 'river-rafting.webp', author: 'Outward Bound Costa Rica', authorUrl: 'https://unsplash.com/@outwardboundcr?utm_source=elguiacr&utm_medium=referral', photoUrl: 'https://unsplash.com/photos/a-group-of-people-riding-a-raft-down-a-river-a9VTq7HvSdg?utm_source=elguiacr&utm_medium=referral', source: 'Unsplash' },
];

export function getPhotoCredit(file: string): PhotoCredit {
  const credit = photoCredits.find((entry) => entry.file === file);
  if (!credit) throw new Error(`No photo credit registered for ${file}`);
  return credit;
}

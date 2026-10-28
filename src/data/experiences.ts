import arenal from '../assets/arenal.webp';
import monteverde from '../assets/monteverde.webp';
import rioCeleste from '../assets/rio-celeste.webp';
import tortuguero from '../assets/tortuguero.webp';
import coffeeHarvest from '../assets/coffee-harvest.webp';
import teamHikeRidge from '../assets/team-hike-ridge.webp';
import forestClearingRetreat from '../assets/forest-clearing-retreat.webp';
import sharedTable from '../assets/shared-table.webp';
import limonSign from '../assets/limon-sign.webp';
import riverRafting from '../assets/river-rafting.webp';
import type { Locale } from '../i18n/config';
import { useTranslations } from '../i18n/utils';
import type { AudienceId } from './audiences';
import { getContactPath } from './routes';

export const categoryIds = ['nature', 'adventure', 'culture', 'gastronomy', 'wellness', 'coffee', 'celebrations', 'teambuilding', 'learning'] as const;
export type CategoryId = (typeof categoryIds)[number];

export type Localized = Record<Locale, string>;

export const categoryLabels: Record<CategoryId, Localized> = {
  nature: { es: 'Naturaleza y vida silvestre', en: 'Nature & wildlife' },
  adventure: { es: 'Aventura', en: 'Adventure' },
  culture: { es: 'Cultura y comunidades', en: 'Culture & communities' },
  gastronomy: { es: 'Gastronomía', en: 'Food & cooking' },
  wellness: { es: 'Bienestar', en: 'Well-being' },
  coffee: { es: 'Café, cacao y fincas', en: 'Coffee, cacao & farms' },
  celebrations: { es: 'Celebraciones', en: 'Celebrations' },
  teambuilding: { es: 'Team building', en: 'Team building' },
  learning: { es: 'Aprendizaje de campo', en: 'Field learning' },
};

interface ExperienceImage {
  asset: ImageMetadata;
  alt: Localized;
}

interface ExperienceSource {
  id: string;
  category: CategoryId;
  // The first audience is the one preselected in the contact form.
  audiences: AudienceId[];
  title: Localized;
  description: Localized;
  duration: Localized;
  image?: ExperienceImage;
  photoNote: Localized;
}

// Presets are inspiration, not fixed packages: no prices and no named partners on purpose.
const experiences: ExperienceSource[] = [
  {
    id: 'tortuguero-canals',
    category: 'nature',
    audiences: ['travelers'],
    title: { es: 'Canales y selva del Caribe', en: 'Caribbean canals and rainforest' },
    description: {
      es: 'Recorridos en bote por los canales de Tortuguero, con un guía naturalista que lee la selva por ti. En temporada, la anidación de tortugas marinas cambia el plan.',
      en: 'Boat rides through the Tortuguero canals with a naturalist guide who reads the rainforest for you. In season, sea turtle nesting changes the plan.',
    },
    duration: { es: '2 a 3 días', en: '2 to 3 days' },
    image: { asset: tortuguero, alt: { es: 'Tortugas recién nacidas avanzando sobre la arena oscura', en: 'Newly hatched turtles crawling across dark sand' } },
    photoNote: { es: '[FOTO: bote recorriendo un canal al amanecer.]', en: '[PHOTO: a boat travelling a canal at sunrise.]' },
  },
  {
    id: 'celeste-day',
    category: 'nature',
    audiences: ['locals', 'travelers'],
    title: { es: 'Un día de bosque lluvioso en Río Celeste', en: 'A rainforest day at Río Celeste' },
    description: {
      es: 'Sendero, catarata y nacientes del río turquesa, con horarios pensados para evitar las horas más llenas. Ideal para quien quiere conocer su país sin prisas.',
      en: 'Trail, waterfall and the springs of the turquoise river, timed to avoid the busiest hours. A good fit if you want to see the country without rushing.',
    },
    duration: { es: '1 día', en: '1 day' },
    image: { asset: rioCeleste, alt: { es: 'Catarata de Río Celeste cayendo a una poza turquesa rodeada de bosque', en: 'Río Celeste waterfall dropping into a turquoise pool ringed by forest' } },
    photoNote: { es: '[FOTO: persona observando la catarata desde el mirador.]', en: '[PHOTO: someone watching the waterfall from the viewpoint.]' },
  },
  {
    id: 'arenal-river-farm',
    category: 'adventure',
    audiences: ['travelers', 'companies'],
    title: { es: 'Río, finca y volcán en La Fortuna', en: 'River, farm and volcano in La Fortuna' },
    description: {
      es: 'Un día que mezcla actividad en el río, una visita a una finca de la zona y tiempo para descansar frente al Arenal. Se ajusta al nivel de energía del grupo.',
      en: 'A day that mixes river activity, a visit to a local farm and time to unwind in front of Arenal. It adapts to the energy level of the group.',
    },
    duration: { es: '1 día', en: '1 day' },
    image: { asset: arenal, alt: { es: 'Volcán Arenal con cielo despejado y flores en primer plano', en: 'Arenal volcano under a clear sky with flowers in the foreground' } },
    photoNote: { es: '[FOTO: grupo en una finca con el Arenal al fondo.]', en: '[PHOTO: a group on a farm with Arenal in the background.]' },
  },
  {
    id: 'cloud-forest-field',
    category: 'learning',
    audiences: ['education'],
    title: { es: 'Bosque nuboso como aula de campo', en: 'The cloud forest as a field classroom' },
    description: {
      es: 'Observación, toma de datos y conversación con un especialista en Monteverde, armadas alrededor del programa del curso y de los objetivos de aprendizaje.',
      en: 'Observation, data collection and conversation with a specialist in Monteverde, built around the course syllabus and the learning goals.',
    },
    duration: { es: '1 a 2 días', en: '1 to 2 days' },
    image: { asset: monteverde, alt: { es: 'Persona caminando sobre un puente colgante en el bosque nuboso de Monteverde', en: 'Person walking along a hanging bridge in the Monteverde cloud forest' } },
    photoNote: { es: '[FOTO: estudiantes en un puente colgante dentro de la niebla.]', en: '[PHOTO: students on a hanging bridge in the mist.]' },
  },
  {
    id: 'coffee-cacao-farm',
    category: 'coffee',
    audiences: ['locals', 'travelers'],
    title: { es: 'De la planta a la taza: café y cacao', en: 'From plant to cup: coffee and cacao' },
    description: {
      es: 'Una mañana en una finca con su productor: cómo se cultiva, se procesa y se prepara, con degustación incluida en el plan que diseñemos.',
      en: 'A morning on a farm with the grower: how it is cultivated, processed and prepared, with a tasting built into the plan we design.',
    },
    duration: { es: 'Medio día', en: 'Half a day' },
    image: { asset: coffeeHarvest, alt: { es: 'Manos de un productor sosteniendo un balde lleno de granos de café maduros', en: 'A grower\'s hands holding a bucket full of ripe coffee cherries' } },
    photoNote: { es: '[FOTO: grupo recorriendo un beneficio de café con su productor.]', en: '[PHOTO: a group touring a coffee mill with the grower.]' },
  },
  {
    id: 'home-kitchen',
    category: 'gastronomy',
    audiences: ['travelers', 'education'],
    title: { es: 'Cocinar con una familia anfitriona', en: 'Cooking with a host family' },
    description: {
      es: 'Mercado, fogón y mesa compartida con una familia local. Una forma de entender la cocina costarricense desde quienes la cocinan a diario.',
      en: 'Market, stove and a shared table with a local family. A way to understand Costa Rican food from the people who cook it every day.',
    },
    duration: { es: 'Medio día', en: 'Half a day' },
    image: { asset: sharedTable, alt: { es: 'Mesa servida con muchos platos de comida casera: huevos, frijoles, aguacate y ensaladas', en: 'A table laid with many plates of home cooking: eggs, beans, avocado and salads' } },
    photoNote: { es: '[FOTO: cocinera preparando el almuerzo para un grupo.]', en: '[PHOTO: a cook preparing lunch for a group.]' },
  },
  {
    id: 'farm-challenge',
    category: 'teambuilding',
    audiences: ['companies'],
    title: { es: 'Reto de equipo en una finca', en: 'Team challenge on a farm' },
    description: {
      es: 'Dinámicas al aire libre pensadas desde el objetivo del equipo: integrar un grupo nuevo, destrabar la comunicación o simplemente conocerse fuera de la oficina.',
      en: 'Outdoor activities shaped around the team\'s goal: bringing a new group together, loosening up communication or simply getting to know each other away from the office.',
    },
    duration: { es: 'Medio día a 1 día', en: 'Half a day to 1 day' },
    image: { asset: teamHikeRidge, alt: { es: 'Equipo con camisetas iguales subiendo un cerro entre la niebla', en: 'A team in matching shirts hiking up a misty hillside' } },
    photoNote: { es: '[FOTO: equipo resolviendo un reto en una finca, sin poses.]', en: '[PHOTO: a team solving a challenge on a farm, no posing.]' },
  },
  {
    id: 'reset-retreat',
    category: 'wellness',
    audiences: ['companies', 'locals'],
    title: { es: 'Pausa de bienestar y desconexión', en: 'A well-being pause to switch off' },
    description: {
      es: 'Un retiro tranquilo con movimiento suave, naturaleza y espacios de silencio o de trabajo, según lo que necesite el grupo.',
      en: 'A calm retreat with gentle movement, nature and room for quiet or for work, depending on what the group needs.',
    },
    duration: { es: '1 a 2 días', en: '1 to 2 days' },
    image: { asset: forestClearingRetreat, alt: { es: 'Grupo reunido en un claro del bosque, con el sol de la tarde colándose entre los árboles', en: 'A group gathered in a forest clearing as late sunlight filters through the trees' } },
    photoNote: { es: '[FOTO: grupo en una sesión al aire libre frente al bosque.]', en: '[PHOTO: a group in an outdoor session facing the forest.]' },
  },
  {
    id: 'birthday-river',
    category: 'celebrations',
    audiences: ['locals'],
    title: { es: 'Un cumpleaños que no es otra cena', en: 'A birthday that isn\'t another dinner' },
    description: {
      es: 'Celebrar en un río, una finca o una playa, con comida, actividades y logística resueltas para que quien cumple años también disfrute.',
      en: 'Celebrate at a river, a farm or a beach, with food, activities and logistics sorted so the person with the birthday gets to enjoy it too.',
    },
    duration: { es: '1 día', en: '1 day' },
    image: { asset: riverRafting, alt: { es: 'Grupo con cascos y chalecos salvavidas remando en una balsa por los rápidos de un río', en: 'A group in helmets and life jackets paddling a raft through river rapids' } },
    photoNote: { es: '[FOTO: familia celebrando junto a un río.]', en: '[PHOTO: a family celebrating beside a river.]' },
  },
  {
    id: 'caribbean-community',
    category: 'culture',
    audiences: ['education', 'travelers'],
    title: { es: 'Cultura afrocaribeña del Caribe Sur', en: 'Afro-Caribbean culture in the South Caribbean' },
    description: {
      es: 'Cocina, cacao y conversaciones con personas de la comunidad para conocer la historia y la vida cotidiana del Caribe Sur.',
      en: 'Food, cacao and conversations with people from the community to learn about the history and everyday life of the South Caribbean.',
    },
    duration: { es: '2 días', en: '2 days' },
    image: { asset: limonSign, alt: { es: 'Letras de colores que forman la palabra Limón en un parque con árboles', en: 'Colorful letters spelling Limón in a tree-lined park' } },
    photoNote: { es: '[FOTO: cocinera preparando rice and beans con coco para un grupo.]', en: '[PHOTO: a cook preparing rice and beans with coconut for a group.]' },
  },
];

export interface Experience {
  id: string;
  category: CategoryId;
  categoryLabel: string;
  title: string;
  description: string;
  duration: string;
  audiences: { id: AudienceId; label: string }[];
  image?: { src: string; width: number; height: number; alt: string };
  photoNote: string;
  contactHref: string;
}

export function getExperiences(locale: Locale, audience?: AudienceId): Experience[] {
  const { audiences } = useTranslations(locale);
  return experiences
    .filter((item) => !audience || item.audiences.includes(audience))
    .map((item) => ({
      id: item.id,
      category: item.category,
      categoryLabel: categoryLabels[item.category][locale],
      title: item.title[locale],
      description: item.description[locale],
      duration: item.duration[locale],
      audiences: item.audiences.map((id) => ({ id, label: audiences.items[id].segment })),
      image: item.image && { src: item.image.asset.src, width: item.image.asset.width, height: item.image.asset.height, alt: item.image.alt[locale] },
      photoNote: item.photoNote[locale],
      contactHref: getContactPath(locale, item.audiences[0]),
    }));
}

export function getCategories(locale: Locale) {
  return categoryIds.map((id) => ({ id, label: categoryLabels[id][locale] }));
}


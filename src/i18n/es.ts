import type { PlaceholderPageText } from './ui';
import type { AudienceId, AudienceText } from '../data/audiences';
import type { PillarId, PillarText, StepId, StepText, StoryId, StoryText } from '../data/content';
import type { LandingPageKey, LegalPageKey, NavPageKey, PlaceholderPageKey } from '../data/routes';
import type { SpotId, SpotText } from '../data/spots';

const navLinks: Record<NavPageKey, string> = {
  home: 'Inicio',
  experiences: 'Experiencias',
  destinations: 'Destinos',
  transport: 'Transporte y rutas',
  about: 'Nosotros',
  blog: 'Blog / Guía de Costa Rica',
  faq: 'FAQ',
};

const legalLinks: Record<LegalPageKey, string> = {
  privacy: 'Privacidad',
  terms: 'Términos y condiciones',
  cookies: 'Cookies',
  cancellations: 'Cancelaciones',
};

const pages: Record<PlaceholderPageKey, PlaceholderPageText> = {
  experiences: {
    title: 'Tours y experiencias a medida en Costa Rica | El Guía CR',
    description: 'Ideas de tours y experiencias en Costa Rica: Tortuguero, Arenal, Monteverde, fincas de café y cocina local. Las adaptamos a tu grupo, tu ritmo y tu presupuesto.',
    heading: 'Experiencias en Costa Rica diseñadas a tu medida',
    intro: 'Cada experiencia que armamos parte de una conversación contigo, no de un catálogo. Puedes pedirnos algo completamente a tu medida; los ejemplos de esta página son una inspiración, no paquetes cerrados.',
  },
  destinations: {
    title: 'Destinos · El Guía CR',
    description: 'Destinos de Costa Rica que conocemos de cerca: qué ofrece cada uno y para quién funciona.',
    heading: 'Destinos',
    intro: 'Pronto vas a encontrar aquí una guía de cada destino: qué ofrece, cuándo conviene ir y para quién funciona. Mientras tanto, puedes explorar el mapa de la página de inicio o escribirnos.',
  },
  transport: {
    title: 'Transporte y rutas · El Guía CR',
    description: 'Cómo moverte por Costa Rica: tiempos, rutas y opciones de transporte entre destinos.',
    heading: 'Transporte y rutas',
    intro: 'Estamos armando una guía práctica para moverte por Costa Rica: tiempos reales, rutas y opciones de transporte entre destinos. Si necesitas ayuda con la logística de tu viaje, cuéntanos y la coordinamos contigo.',
  },
  about: {
    title: 'Nosotros · El Guía CR',
    description: 'Quién está detrás de El Guía CR y cómo trabajamos.',
    heading: 'Nosotros',
    intro: 'Esta página contará con más detalle quiénes somos y cómo trabajamos. Por ahora, puedes conocer a Bernald, el fundador, en la página de inicio.',
  },
  blog: {
    title: 'Blog / Guía de Costa Rica · El Guía CR',
    description: 'Artículos y guías prácticas para conocer Costa Rica con criterio.',
    heading: 'Blog / Guía de Costa Rica',
    intro: 'Aún no hay artículos publicados. Estamos preparando guías prácticas para conocer Costa Rica con criterio. Si hay algo que quieras saber, escríbenos y lo tomamos en cuenta.',
  },
  faq: {
    title: 'Preguntas frecuentes · El Guía CR',
    description: 'Respuestas a las preguntas más comunes sobre cómo trabaja El Guía CR.',
    heading: 'Preguntas frecuentes',
    intro: 'Estamos reuniendo las preguntas más comunes sobre cómo trabajamos. Mientras tanto, si tienes una duda, cuéntanos y te respondemos personalmente.',
  },
  privacy: {
    title: 'Privacidad · El Guía CR',
    description: 'Política de privacidad de El Guía CR.',
    heading: 'Privacidad',
    intro: 'Aquí publicaremos cómo usamos y protegemos tus datos. Por ahora, solo los usamos para responder a tu consulta.',
  },
  terms: {
    title: 'Términos y condiciones · El Guía CR',
    description: 'Términos y condiciones de El Guía CR.',
    heading: 'Términos y condiciones',
    intro: 'Aquí publicaremos las condiciones para contratar y disfrutar nuestras experiencias.',
  },
  cookies: {
    title: 'Cookies · El Guía CR',
    description: 'Política de cookies de El Guía CR.',
    heading: 'Cookies',
    intro: 'Aquí explicaremos qué cookies usa este sitio y para qué.',
  },
  cancellations: {
    title: 'Cancelaciones · El Guía CR',
    description: 'Política de cancelaciones de El Guía CR.',
    heading: 'Cancelaciones',
    intro: 'Aquí publicaremos las condiciones de cambios y cancelaciones de nuestras experiencias.',
  },
};

const audienceItems: Record<AudienceId, AudienceText> = {
  travelers: { segment: 'Viajeros', word: 'Vivir', description: 'Viajes hechos a tu ritmo, presupuesto e intereses, coordinados de principio a fin.', cta: 'Quiero mi viaje a medida', alt: 'Cocinera con delantal anaranjado doblando una tortilla sobre un comal grande' },
  locals: { segment: 'Locales', word: 'Descubrir', description: 'Escapadas, celebraciones y planes para ver tu propio país con otros ojos.', cta: 'Quiero algo diferente', alt: 'Persona lanzándose desde un columpio de cuerda a un río en medio del bosque, con más gente bañándose' },
  companies: { segment: 'Empresas', word: 'Conectar', description: 'Integración, bienestar, reconocimiento o retiros, diseñados a partir del objetivo del equipo.', cta: 'Hablemos de tu equipo', alt: 'Grupo jalando juntos en un juego de equipo sobre un campo de zacate, en un día soleado' },
  education: { segment: 'Educación', word: 'Aprender', description: 'Giras construidas desde el curso, la carrera y los objetivos de aprendizaje.', cta: 'Planear una gira', alt: 'Guía con sombrero señalando hacia las copas de los árboles en un sendero rocoso, con dos caminantes detrás' },
};

const pillars: Record<PillarId, PillarText> = {
  knowledge: { title: 'Conocimiento local', text: 'Lugares, temporadas, logística y cuándo hace falta un especialista.' },
  allies: { title: 'Red de aliados', text: 'Gente y negocios que conocemos y en los que confiamos.' },
  judgment: { title: 'Criterio', text: 'Si El Guía lo recomienda, hay una razón. Y sabemos cuándo no.' },
  contact: { title: 'Un solo punto de contacto', text: 'Antes, durante y después. Los cambios los resolvemos nosotros.' },
};

const steps: Record<StepId, StepText> = {
  understand: { title: 'Entendemos', text: 'Un formulario corto y una conversación. Para quién es, qué buscas, ritmo, fechas, restricciones.' },
  design: { title: 'Diseñamos', text: 'Una propuesta que combina lugares conocidos y otros menos obvios, siempre alrededor del propósito.' },
  coordinate: { title: 'Coordinamos', text: 'Aliados, disponibilidad, transporte y tiempos. Un solo contacto en vez de diez.' },
  accompany: { title: 'Acompañamos', text: 'Antes, durante y después. Si algo cambia, lo resolvemos sin pasarte el caos.' },
};

const storyItems: Record<StoryId, StoryText> = {
  criteria: { note: '[REEL 9:16: Bernald frente a cámara explicando cuándo conviene ir a Río Celeste y cuándo no.]', kicker: 'El Guía te cuenta', title: 'Criterio, no catálogo' },
  team: { alt: 'Cuatro amigos con mochilas riéndose durante una caminata entre montañas rocosas', kicker: 'Empresas', title: 'Un equipo que se conoce afuera de la oficina' },
  network: { note: '[REEL 9:16: visita a una finca aliada en La Fortuna; quiénes son, qué ofrecen, para quién funciona.]', kicker: 'El Guía descubre', title: 'La red, de cerca' },
  objective: { note: '[REEL 9:16: de la necesidad a la solución. Una gira académica, del brief del profesor al día en campo.]', kicker: 'Así se diseñó', title: 'Del objetivo a la experiencia' },
  classroom: { alt: 'Grupo de jóvenes descansando sobre troncos en medio del bosque', kicker: 'Educación', title: 'Aprender también pasa fuera del aula' },
  experience: { note: '[REEL 9:16: casi sin diálogo. Amanecer en el río, café, risas, agua. Solo sonido ambiente.]', kicker: 'Vívelo', title: 'Solo la experiencia' },
};

const spots: Record<SpotId, SpotText> = {
  rincon: { short: 'Rincón de la Vieja', name: 'Rincón de la Vieja', region: 'Guanacaste', desc: 'Volcán activo con fumarolas, pailas de barro y bosque seco tropical. Buen escenario para caminatas y para aprender geología en campo.', photoNote: '[FOTO: grupo caminando junto a las pailas de barro con un guía naturalista.]' },
  celeste: { short: 'Río Celeste', name: 'Río Celeste · Tenorio', region: 'Guanacaste · Alajuela', desc: 'El río de agua turquesa dentro del Parque Nacional Volcán Tenorio. Sendero de bosque lluvioso con catarata y nacientes.', alt: 'Catarata de Río Celeste cayendo a una poza turquesa rodeada de bosque', photoNote: '[FOTO: persona observando la catarata desde el mirador, de espaldas.]' },
  arenal: { short: 'La Fortuna · Arenal', name: 'La Fortuna y el Volcán Arenal', region: 'Zona Norte · Alajuela', desc: 'Volcán, aguas termales, ríos, lago y fincas. Una base fácil para combinar actividad, descanso y cultura local en pocos kilómetros.', alt: 'Volcán Arenal con cielo despejado y flores en primer plano', photoNote: '[FOTO: familia en una finca de la zona norte con el Arenal al fondo.]' },
  monteverde: { short: 'Monteverde', name: 'Monteverde', region: 'Puntarenas · Cordillera de Tilarán', desc: 'Bosque nuboso, puentes colgantes y una comunidad con larga tradición en conservación e investigación.', alt: 'Persona caminando sobre un puente colgante en el bosque nuboso de Monteverde', photoNote: '[FOTO: estudiantes en un puente colgante dentro de la niebla.]' },
  tortuguero: { short: 'Tortuguero', name: 'Tortuguero', region: 'Caribe Norte · Limón', desc: 'Canales, selva del Caribe y anidación de tortugas marinas en temporada. Se llega en bote o avioneta, así que la logística importa.', alt: 'Tortugas recién nacidas avanzando sobre la arena oscura', photoNote: '[FOTO: bote recorriendo un canal al amanecer.]' },
  tamarindo: { short: 'Costa de Guanacaste', name: 'Costa de Guanacaste', region: 'Pacífico Norte', desc: 'Playas, atardeceres y una temporada seca marcada. Funciona para descansar, para el surf y para retiros de equipo.', photoNote: '[FOTO: equipo en una sesión de trabajo al aire libre frente al mar.]' },
  santateresa: { short: 'Santa Teresa', name: 'Santa Teresa · Península de Nicoya', region: 'Puntarenas', desc: 'Pueblo costero al sur de la península, con surf, ritmo lento y caminos de tierra entre playas.', alt: 'Surfistas con sus tablas entrando al mar desde una playa de piedras bordeada de palmeras', photoNote: '[FOTO: tabla de surf apoyada en una cerca, luz de tarde.]' },
  sanjose: { short: 'San José', name: 'San José y el Valle Central', region: 'Valle Central', desc: 'Museos, mercados y cafetales a menos de una hora. La puerta de entrada para la mayoría de visitantes y una sede natural para empresas e instituciones.', alt: 'Granos de café maduros, rojos y verdes, en la rama de un cafeto', photoNote: '[FOTO: grupo recorriendo un beneficio de café con su productor.]' },
  manuel: { short: 'Manuel Antonio', name: 'Manuel Antonio', region: 'Pacífico Central · Quepos', desc: 'Un parque nacional pequeño donde el bosque llega hasta la playa. De los más visitados del país: elegir hora y guía hace la diferencia.', alt: 'Vista aérea de una punta cubierta de bosque entre dos bahías de agua turquesa', photoNote: '[FOTO: guía mostrando fauna por telescopio a una familia.]' },
  uvita: { short: 'Uvita · Marino Ballena', name: 'Uvita · Parque Nacional Marino Ballena', region: 'Pacífico Sur', desc: 'La punta con forma de cola de ballena y temporadas de avistamiento de ballenas jorobadas.', photoNote: '[FOTO: bote pequeño con biólogo marino explicando a un grupo.]' },
  osa: { short: 'Osa · Corcovado', name: 'Península de Osa · Corcovado', region: 'Pacífico Sur · Puntarenas', desc: 'De las zonas con mayor biodiversidad del país. Remota: pide guía certificado, buena planificación y tiempo.', alt: 'Playa de arena oscura con rocas y palmeras al borde de la selva en el Parque Nacional Corcovado', photoNote: '[FOTO: grupo cruzando un río en la península con su guía.]' },
  puertoviejo: { short: 'Caribe Sur', name: 'Puerto Viejo · Caribe Sur', region: 'Limón', desc: 'Cultura afrocaribeña, cocina propia, cacao y playas del sur del Caribe.', photoNote: '[FOTO: cocinera preparando rice and beans con coco para un grupo.]' },
};

export const es = {
  meta: {
    title: 'Experiencias y viajes a medida en Costa Rica | El Guía CR',
    description: 'Experiencias en Costa Rica diseñadas y coordinadas para viajeros, locales, empresas y giras educativas. Te responde una persona en menos de un día hábil.',
    // Alt text of the default share image (src/assets/rio-celeste.webp).
    imageAlt: 'Catarata de Río Celeste cayendo a una poza turquesa rodeada de bosque',
  },
  nav: {
    ariaLabel: 'Principal',
    homeLabel: 'El Guía CR, inicio',
    links: navLinks,
    cta: 'Cuéntanos qué estás buscando',
    languageLabel: 'Idioma',
    menuLabel: 'Menú',
    menuOpen: 'Abrir menú',
    menuClose: 'Cerrar menú',
  },
  hero: {
    eyebrow: 'elguiacr.com · Diseño y coordinación de experiencias en Costa Rica',
    titleBefore: 'Experiencias diseñadas con',
    titleEmphasis: 'propósito',
    titleAfter: 'en Costa Rica.',
    intro: 'Tú nos cuentas qué quieres vivir, aprender o lograr en Costa Rica. El Guía se encarga de conectar las piezas: lugares, personas, aliados y logística.',
    primaryCta: 'Cuéntanos qué estás buscando',
    secondaryCta: 'Explora Costa Rica',
    segments: 'Viajeros · Locales · Empresas · Educación',
    videoLabel: 'Video hero · loop 15 s',
    videoNote: '[VIDEO: cortes de 2–3 s sin audio. Manos tostando café en una finca, un grupo cruzando un puente colgante en bosque nuboso, estudiantes midiendo un río con un especialista. Gente haciendo, no posando.]',
    photoLabel: 'Foto',
    photoNoteMain: '[FOTO: Bernald conversando con un anfitrión local en su finca, luz de tarde.]',
    photoAltSecondary: 'Grupo picando hierbas frescas juntos para preparar una comida al aire libre',
  },
  manifesto: {
    eyebrow: '01 · Qué hacemos',
    statementBefore: 'No armamos tours sueltos. Primero entendemos qué quieres vivir, descubrir, aprender o lograr; después conectamos',
    statementEmphasis: 'las personas, los lugares y los aliados',
    statementAfter: 'que lo hacen posible.',
    pillars,
  },
  audiences: {
    eyebrow: '02 · Para quién',
    title: 'Una marca, cuatro puertas de entrada.',
    intro: 'Lo que cambia es el objetivo. La forma de trabajar es la misma: escuchar, diseñar, coordinar.',
    learnMore: 'Saber más',
    items: audienceItems,
  },
  how: {
    eyebrow: '03 · Cómo funciona',
    title: 'Tú no tienes que diseñar nada. Para eso estamos.',
    steps,
  },
  founder: {
    title: 'La persona detrás de El Guía',
    photoAlt: 'Bernald Ramirez en un mirador frente a una catarata, rodeado de bosque',
    role: 'Fundador · El Guía',
    name: 'Bernald Ramirez',
    bio1: 'Bernald es el fundador de El Guía CR y quien está detrás del diseño de cada experiencia. Su formación en turismo, su trabajo como guía y su interés por la naturaleza lo han llevado a conocer Costa Rica no solo como destino, sino a través de sus personas, historias, comunidades y formas de vivirla.',
    bio2: 'El Guía CR nace de esa curiosidad por descubrir, aprender y conectar: escuchar lo que cada persona o grupo necesita y encontrar la mejor manera de convertirlo en una experiencia con sentido.',
    quote: 'Para Bernald, conocer Costa Rica nunca se trata solamente de llegar a un lugar, sino de entender qué hay detrás de él y con quién vale la pena compartirlo.',
    cta: 'Habla con Bernald',
  },
  destinations: {
    eyebrow: '04 · Destinos',
    title: 'Costa Rica, punto por punto.',
    intro: 'Algunos de los lugares más visitados y queridos del país. Toca un punto: te contamos qué tiene y para quién funciona.',
    idealFor: 'Funciona para:',
    photoCredit: 'Foto',
    pick: 'Me interesa este destino',
    footnote: 'El mapa es un punto de partida. La experiencia se diseña alrededor de lo que tú buscas, no al revés.',
  },
  map: {
    ariaLabel: 'Mapa de Costa Rica por provincias con destinos destacados',
    lakeArenal: 'Laguna de Arenal',
    nicaragua: 'NICARAGUA',
    caribbean: 'MAR CARIBE',
    pacific: 'OCÉANO PACÍFICO',
    panama: 'PANAMÁ',
  },
  spots,
  stories: {
    eyebrow: '05 · Historias',
    title: 'Mejor verlo que contarlo.',
    intro: 'Sigue bajando: las historias pasan de lado. Experiencias reales, aliados y el detrás de cámaras.',
    regionLabel: 'Historias en video',
    closingTitle: '¿La próxima historia es la suya?',
    closingCta: 'Cuéntanos qué estás buscando',
    items: storyItems,
  },
  values: {
    photoAlt: 'Un finquero señalando sus potreros, con pacas de heno en el campo',
    eyebrow: '06 · Lo que nos importa',
    quote: '“Premium no significa lujo. Significa más personalización, cuidado, calidad, coordinación y atención.”',
    text: 'Trabajamos con personas, lugares y especialistas que conocemos y en los que confiamos. Si hay que sumar lujo o especialización, se suma; no es requisito.',
  },
  contact: {
    eyebrow: '07 · Empecemos',
    title: 'Cuéntanos qué estás buscando.',
    intro: 'No hace falta tener todo claro. Con esto arrancamos una conversación; presupuesto y detalles los vemos después, con calma.',
    steps: [
      { lead: 'Te escribimos.', rest: 'Una persona, no un bot, en menos de un día hábil.' },
      { lead: 'Conversamos.', rest: 'Entendemos el propósito, el grupo y el contexto.' },
      { lead: 'Te enviamos una propuesta', rest: 'diseñada para ti.' },
    ],
    whoFor: '¿Para quién estás buscando esta experiencia?',
    otherOption: 'Otro',
    nameLabel: 'Nombre',
    namePlaceholder: 'Tu nombre',
    contactLabel: 'WhatsApp o correo',
    contactPlaceholder: 'Por dónde te escribimos',
    whatLabel: '¿Qué quieres vivir, descubrir, aprender o lograr?',
    whatPlaceholder: 'Ej.: celebrar los 15 años de la empresa con algo que no sea otra cena; una gira de biología para 30 estudiantes; nuestro primer viaje a Costa Rica, sin prisas.',
    destinationPicked: 'Destino que te llamó la atención:',
    destinationRemove: 'Quitar',
    peopleLabel: '¿Cuántas personas?',
    peoplePlaceholder: 'Aprox.',
    dateLabel: 'Fecha aproximada',
    datePlaceholder: 'Ej.: marzo 2027',
    extraLabel: '¿Algo más que debamos saber?',
    optional: '(opcional)',
    extraPlaceholder: 'Restricciones, ideas, lo que se te ocurra.',
    submit: 'Quiero que El Guía me contacte',
    privacy: 'Usamos tus datos solo para responderte.',
    privacyLink: 'Privacidad',
    sentTitle: 'Listo. Ya estamos en eso.',
    sentText: 'Recibimos tu mensaje. Una persona de El Guía te va a escribir para conversar. Mientras tanto, no tienes que hacer nada más.',
    sentReset: 'Enviar otra consulta',
  },
  footer: {
    tagline: 'Experiencias diseñadas con propósito.',
    exploreHeading: 'Explorar',
    legalHeading: 'Legal',
    legalLinks,
    servicesHeading: 'Servicios',
    servicesLinks: {
      customTrips: 'Viajes personalizados',
      localExperiences: 'Experiencias para locales',
      teamBuilding: 'Team building',
      educationalTrips: 'Giras educativas',
    } satisfies Record<LandingPageKey, string>,
    contactHeading: 'Contacto',
    instagramLabel: 'Instagram @elguia.cr',
    madeIn: 'Hecho en Costa Rica',
  },
  act: {
    title: 'Tu próxima experiencia empieza con una conversación.',
    text: 'Cuéntanos qué estás buscando. Una persona de El Guía te responde.',
    whatsappCta: 'Escríbenos por WhatsApp',
    whatsappMessage: 'Hola, estoy interesado/a en una experiencia con El Guía CR. ¿Me pueden ayudar?',
  },
  experiencesPage: {
    eyebrow: 'Experiencias',
    tailoredTitle: 'Lo que imaginas, diseñado a tu medida.',
    tailoredText: 'No hay un menú del que tengas que elegir. Cuéntanos para quién es, qué quieren vivir y cuánto tiempo tienen, y armamos algo pensado para ustedes. Las ideas de más abajo son solo un punto de partida.',
    tailoredCta: 'Diseñemos algo juntos',
    examplesEyebrow: 'Ideas para inspirarte',
    examplesTitle: 'Ejemplos de lo que podemos diseñar.',
    examplesIntro: 'No son paquetes cerrados: los combinamos, los cambiamos o los descartamos según lo que busques.',
    filterLabel: 'Filtrar por categoría',
    filterAll: 'Todas',
    durationLabel: 'Duración aprox.',
    forLabel: 'Para',
    photoPending: 'Foto pendiente',
    audiencesEyebrow: 'Según quién viaja',
    audiencesTitle: 'Guías para cada tipo de grupo.',
    audiencesIntro: 'Si ya sabes quién eres en esta historia, estas páginas te cuentan cómo trabajamos con cada grupo.',
  },
  landing: {
    howHeading: 'Cómo trabajamos',
    faqHeading: 'Preguntas frecuentes',
    allExperiences: 'Ver todas las experiencias',
  },
  placeholder: {
    eyebrow: 'Próximamente',
    homeLink: 'Volver al inicio',
    legalNote: 'El texto legal definitivo está pendiente de revisión.',
  },
  notFound: {
    title: 'Página no encontrada | El Guía CR',
    description: 'La página que buscas no existe o cambió de lugar.',
    eyebrow: 'Error 404',
    heading: 'Este camino no lleva a ningún lado',
    intro: 'La página que buscas no existe o cambió de lugar. Vuelve al inicio o escríbenos y te ayudamos a encontrar lo que necesitas.',
  },
  pages,
};

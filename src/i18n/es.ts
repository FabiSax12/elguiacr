import type { AudienceId, AudienceText } from '../data/audiences';
import type { NavLinkKey, PillarId, PillarText, StepId, StepText, StoryId, StoryText } from '../data/content';
import type { SpotId, SpotText } from '../data/spots';

const navLinks: Record<NavLinkKey, string> = {
  audiences: 'Para quién',
  how: 'Cómo funciona',
  founder: 'El Guía',
  destinations: 'Destinos',
  stories: 'Historias',
};

const audienceItems: Record<AudienceId, AudienceText> = {
  travelers: { segment: 'Viajeros', word: 'Vivir', description: 'Viajes hechos a su ritmo, presupuesto e intereses, coordinados de principio a fin.', cta: 'Diseñen mi viaje', photoNote: '[FOTO: pareja de viajeros aprendiendo a hacer tortillas con una familia en San Carlos.]' },
  locals: { segment: 'Locales', word: 'Descubrir', description: 'Escapadas, celebraciones y planes para ver su propio país con otros ojos.', cta: 'Quiero algo diferente', photoNote: '[FOTO: familia tica celebrando un cumpleaños en un río de la Zona Norte.]' },
  companies: { segment: 'Empresas', word: 'Conectar', description: 'Integración, bienestar, reconocimiento o retiros, diseñados a partir del objetivo del equipo.', cta: 'Hablemos de su equipo', photoNote: '[FOTO: equipo resolviendo un reto en una finca, sin poses.]' },
  education: { segment: 'Educación', word: 'Aprender', description: 'Giras construidas desde el curso, la carrera y los objetivos de aprendizaje.', cta: 'Planear una gira', photoNote: '[FOTO: estudiantes universitarios tomando muestras con un biólogo en bosque nuboso.]' },
};

const pillars: Record<PillarId, PillarText> = {
  knowledge: { title: 'Conocimiento local', text: 'Lugares, temporadas, logística y cuándo hace falta un especialista.' },
  allies: { title: 'Red de aliados', text: 'Gente y negocios que conocemos y en los que confiamos.' },
  judgment: { title: 'Criterio', text: 'Si El Guía lo recomienda, hay una razón. Y sabemos cuándo no.' },
  contact: { title: 'Un solo punto de contacto', text: 'Antes, durante y después. Los cambios los resolvemos nosotros.' },
};

const steps: Record<StepId, StepText> = {
  understand: { title: 'Entendemos', text: 'Un formulario corto y una conversación. Para quién es, qué buscan, ritmo, fechas, restricciones.' },
  design: { title: 'Diseñamos', text: 'Una propuesta que combina lugares conocidos y otros menos obvios, siempre alrededor del propósito.' },
  coordinate: { title: 'Coordinamos', text: 'Aliados, disponibilidad, transporte y tiempos. Un solo contacto en vez de diez.' },
  accompany: { title: 'Acompañamos', text: 'Antes, durante y después. Si algo cambia, lo resolvemos sin trasladarle el caos.' },
};

const storyItems: Record<StoryId, StoryText> = {
  criteria: { note: '[REEL 9:16: Bernald frente a cámara explicando cuándo conviene ir a Río Celeste y cuándo no.]', kicker: 'El Guía le cuenta', title: 'Criterio, no catálogo' },
  team: { note: '[FOTO horizontal: grupo de una empresa terminando una caminata, riendo, sudados, nadie posando.]', kicker: 'Empresas', title: 'Un equipo que se conoce afuera de la oficina' },
  network: { note: '[REEL 9:16: visita a una finca aliada en La Fortuna; quiénes son, qué ofrecen, para quién funciona.]', kicker: 'El Guía descubre', title: 'La red, de cerca' },
  objective: { note: '[REEL 9:16: de la necesidad a la solución. Una gira académica, del brief del profesor al día en campo.]', kicker: 'Así se diseñó', title: 'Del objetivo a la experiencia' },
  classroom: { note: '[FOTO horizontal: estudiantes de colegio con una cocinera del Caribe Sur preparando pan bon.]', kicker: 'Educación', title: 'Aprender también pasa fuera del aula' },
  experience: { note: '[REEL 9:16: casi sin diálogo. Amanecer en el río, café, risas, agua. Solo sonido ambiente.]', kicker: 'Vívalo', title: 'Solo la experiencia' },
};

const spots: Record<SpotId, SpotText> = {
  rincon: { short: 'Rincón de la Vieja', name: 'Rincón de la Vieja', region: 'Guanacaste', desc: 'Volcán activo con fumarolas, pailas de barro y bosque seco tropical. Buen escenario para caminatas y para aprender geología en campo.', photoNote: '[FOTO: grupo caminando junto a las pailas de barro con un guía naturalista.]' },
  celeste: { short: 'Río Celeste', name: 'Río Celeste · Tenorio', region: 'Guanacaste · Alajuela', desc: 'El río de agua turquesa dentro del Parque Nacional Volcán Tenorio. Sendero de bosque lluvioso con catarata y nacientes.', alt: 'Catarata de Río Celeste cayendo a una poza turquesa rodeada de bosque', photoNote: '[FOTO: persona observando la catarata desde el mirador, de espaldas.]' },
  arenal: { short: 'La Fortuna · Arenal', name: 'La Fortuna y el Volcán Arenal', region: 'Zona Norte · Alajuela', desc: 'Volcán, aguas termales, ríos, lago y fincas. Una base fácil para combinar actividad, descanso y cultura local en pocos kilómetros.', alt: 'Volcán Arenal con cielo despejado y flores en primer plano', photoNote: '[FOTO: familia en una finca de la zona norte con el Arenal al fondo.]' },
  monteverde: { short: 'Monteverde', name: 'Monteverde', region: 'Puntarenas · Cordillera de Tilarán', desc: 'Bosque nuboso, puentes colgantes y una comunidad con larga tradición en conservación e investigación.', alt: 'Persona caminando sobre un puente colgante en el bosque nuboso de Monteverde', photoNote: '[FOTO: estudiantes en un puente colgante dentro de la niebla.]' },
  tortuguero: { short: 'Tortuguero', name: 'Tortuguero', region: 'Caribe Norte · Limón', desc: 'Canales, selva del Caribe y anidación de tortugas marinas en temporada. Se llega en bote o avioneta, así que la logística importa.', alt: 'Tortugas recién nacidas avanzando sobre la arena oscura', photoNote: '[FOTO: bote recorriendo un canal al amanecer.]' },
  tamarindo: { short: 'Costa de Guanacaste', name: 'Costa de Guanacaste', region: 'Pacífico Norte', desc: 'Playas, atardeceres y una temporada seca marcada. Funciona para descansar, para el surf y para retiros de equipo.', photoNote: '[FOTO: equipo en una sesión de trabajo al aire libre frente al mar.]' },
  santateresa: { short: 'Santa Teresa', name: 'Santa Teresa · Península de Nicoya', region: 'Puntarenas', desc: 'Pueblo costero al sur de la península, con surf, ritmo lento y caminos de tierra entre playas.', photoNote: '[FOTO: tabla de surf apoyada en una cerca, luz de tarde.]' },
  sanjose: { short: 'San José', name: 'San José y el Valle Central', region: 'Valle Central', desc: 'Museos, mercados y cafetales a menos de una hora. La puerta de entrada para la mayoría de visitantes y una sede natural para empresas e instituciones.', photoNote: '[FOTO: grupo recorriendo un beneficio de café con su productor.]' },
  manuel: { short: 'Manuel Antonio', name: 'Manuel Antonio', region: 'Pacífico Central · Quepos', desc: 'Un parque nacional pequeño donde el bosque llega hasta la playa. De los más visitados del país: elegir hora y guía hace la diferencia.', photoNote: '[FOTO: guía mostrando fauna por telescopio a una familia.]' },
  uvita: { short: 'Uvita · Marino Ballena', name: 'Uvita · Parque Nacional Marino Ballena', region: 'Pacífico Sur', desc: 'La punta con forma de cola de ballena y temporadas de avistamiento de ballenas jorobadas.', photoNote: '[FOTO: bote pequeño con biólogo marino explicando a un grupo.]' },
  osa: { short: 'Osa · Corcovado', name: 'Península de Osa · Corcovado', region: 'Pacífico Sur · Puntarenas', desc: 'De las zonas con mayor biodiversidad del país. Remota: pide guía certificado, buena planificación y tiempo.', photoNote: '[FOTO: grupo cruzando un río en la península con su guía.]' },
  puertoviejo: { short: 'Caribe Sur', name: 'Puerto Viejo · Caribe Sur', region: 'Limón', desc: 'Cultura afrocaribeña, cocina propia, cacao y playas del sur del Caribe.', photoNote: '[FOTO: cocinera preparando rice and beans con coco para un grupo.]' },
};

export const es = {
  meta: {
    title: 'El Guía CR · Experiencias diseñadas con propósito',
    description: 'elguiacr.com · Diseño y coordinación de experiencias en Costa Rica. Viajeros, locales, empresas y educación.',
  },
  nav: {
    ariaLabel: 'Principal',
    homeLabel: 'El Guía CR, inicio',
    links: navLinks,
    cta: 'Cuéntenos qué necesita',
    languageLabel: 'Idioma',
  },
  hero: {
    eyebrow: 'elguiacr.com · Diseño y coordinación de experiencias en Costa Rica',
    titleBefore: 'Experiencias diseñadas con',
    titleEmphasis: 'propósito.',
    intro: 'Usted nos cuenta qué quiere vivir, aprender o lograr en Costa Rica. El Guía se encarga de conectar las piezas: lugares, personas, aliados y logística.',
    primaryCta: 'Cuéntenos qué tiene en mente',
    secondaryCta: 'Ver cómo funciona',
    segments: 'Viajeros · Locales · Empresas · Educación',
    videoLabel: 'Video hero · loop 15 s',
    videoNote: '[VIDEO: cortes de 2–3 s sin audio. Manos tostando café en una finca, un grupo cruzando un puente colgante en bosque nuboso, estudiantes midiendo un río con un especialista. Gente haciendo, no posando.]',
    photoLabel: 'Foto',
    photoNoteMain: '[FOTO: Bernald conversando con un anfitrión local en su finca, luz de tarde.]',
    photoNoteSecondary: '[FOTO: equipo de trabajo cocinando juntos.]',
  },
  manifesto: {
    eyebrow: '01 · Qué hacemos',
    statementBefore: 'No armamos tours sueltos. Primero entendemos qué quiere vivir, descubrir, aprender o lograr; después conectamos',
    statementEmphasis: 'las personas, los lugares y los aliados',
    statementAfter: 'que lo hacen posible.',
    pillars,
  },
  audiences: {
    eyebrow: '02 · Para quién',
    title: 'Una marca, cuatro puertas de entrada.',
    intro: 'Lo que cambia es el objetivo. La forma de trabajar es la misma: escuchar, diseñar, coordinar.',
    items: audienceItems,
  },
  how: {
    eyebrow: '03 · Cómo funciona',
    title: 'Usted no tiene que diseñar nada. Para eso estamos.',
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
    cta: 'Hable con Bernald',
  },
  destinations: {
    eyebrow: '04 · Destinos',
    title: 'Costa Rica, punto por punto.',
    intro: 'Algunos de los lugares más visitados y queridos del país. Toque un punto: le contamos qué tiene y para quién funciona.',
    idealFor: 'Funciona para:',
    pick: 'Me interesa este destino',
    footnote: 'El mapa es un punto de partida. La experiencia se diseña alrededor de lo que usted busca, no al revés.',
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
    intro: 'Siga bajando: las historias pasan de lado. Experiencias reales, aliados y el detrás de cámaras.',
    regionLabel: 'Historias en video',
    closingTitle: '¿La próxima historia es la suya?',
    closingCta: 'Cuéntenos qué tiene en mente',
    items: storyItems,
  },
  values: {
    photoNote: '[FOTO horizontal: un anfitrión recibiendo a un grupo en la entrada de su finca. Documental, luz natural, nadie mirando a cámara.]',
    eyebrow: '06 · Lo que nos importa',
    quote: '“Premium no significa lujo. Significa más personalización, cuidado, calidad, coordinación y atención.”',
    text: 'Trabajamos con personas, lugares y especialistas que conocemos y en los que confiamos. Si hay que sumar lujo o especialización, se suma; no es requisito.',
  },
  contact: {
    eyebrow: '07 · Empecemos',
    title: 'Cuéntenos qué tiene en mente.',
    intro: 'No hace falta tener todo claro. Con esto arrancamos una conversación; presupuesto y detalles los vemos después, con calma.',
    steps: [
      { lead: 'Le escribimos.', rest: 'Una persona, no un bot. [TIEMPO DE RESPUESTA]' },
      { lead: 'Conversamos.', rest: 'Entendemos el propósito, el grupo y el contexto.' },
      { lead: 'Le enviamos una propuesta', rest: 'diseñada para usted.' },
    ],
    whoFor: '¿Para quién es?',
    nameLabel: 'Nombre',
    namePlaceholder: 'Su nombre',
    contactLabel: 'WhatsApp o correo',
    contactPlaceholder: 'Por dónde le escribimos',
    whatLabel: '¿Qué quiere vivir, descubrir, aprender o lograr?',
    whatPlaceholder: 'Ej.: celebrar los 15 años de la empresa con algo que no sea otra cena; una gira de biología para 30 estudiantes; nuestro primer viaje a Costa Rica, sin prisas.',
    destinationPicked: 'Destino que le llamó la atención:',
    destinationRemove: 'Quitar',
    peopleLabel: '¿Cuántas personas?',
    peoplePlaceholder: 'Aprox.',
    dateLabel: 'Fecha aproximada',
    datePlaceholder: 'Ej.: marzo 2027',
    extraLabel: '¿Algo más que debamos saber?',
    optional: '(opcional)',
    extraPlaceholder: 'Restricciones, ideas, lo que se le ocurra.',
    submit: 'Quiero que El Guía me contacte',
    privacy: 'Usamos sus datos solo para responderte.',
    privacyLink: 'Privacidad',
    sentTitle: 'Listo. Ya estamos en eso.',
    sentText: 'Recibimos su mensaje. Una persona de El Guía le va a escribir para conversar. Mientras tanto, no tiene que hacer nada más.',
    sentReset: 'Enviar otra consulta',
  },
  footer: {
    tagline: 'Experiencias diseñadas con propósito.',
    exploreHeading: 'Explorar',
    legal: 'FAQ · Privacidad · Condiciones',
    how: 'Cómo funciona',
    destinations: 'Destinos',
    contactHeading: 'Contacto',
    madeIn: 'Hecho en Costa Rica',
  },
};

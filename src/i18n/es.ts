import type { PlaceholderPageText } from './ui';
import type { AudienceId, AudienceText } from '../data/audiences';
import type { ContactMethodId, InterestId, TimingId, ZoneId } from '../data/contactForm';
import type { PillarId, PillarText, StepId, StepText, StoryId, StoryText } from '../data/content';
import type { LandingPageKey, LegalPageKey, NavPageKey, PlaceholderPageKey } from '../data/routes';
import type { PrivacySectionId, PrivacySectionText } from '../data/privacy';
import { privacyRetentionMonths } from '../data/site';
import type { SpotId, SpotText } from '../data/spots';

const navLinks: Record<NavPageKey, string> = {
  home: 'Inicio',
  experiences: 'Experiencias',
  destinations: 'Destinos',
  transport: 'Transporte y rutas',
  about: 'Nosotros',
  blog: 'Blog',
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
  travelers: { segment: 'Viajeros', word: 'Vivir', description: 'Viajes diseñados alrededor de tus intereses, tu ritmo y la forma en que quieres conocer Costa Rica.', cta: 'Diseñar mi viaje', alt: 'Cocinera con delantal anaranjado doblando una tortilla sobre un comal grande' },
  locals: { segment: 'Locales', word: 'Descubrir', description: 'Escapadas, celebraciones y experiencias para redescubrir Costa Rica con otros ojos.', cta: 'Quiero algo diferente', alt: 'Persona lanzándose desde un columpio de cuerda a un río en medio del bosque, con más gente bañándose' },
  companies: { segment: 'Empresas', word: 'Conectar', description: 'Experiencias de integración, bienestar y conexión diseñadas alrededor de los objetivos de cada equipo.', cta: 'Hablemos de tu equipo', alt: 'Grupo jalando juntos en un juego de equipo sobre un campo de zacate, en un día soleado' },
  education: { segment: 'Educación', word: 'Aprender', description: 'Giras diseñadas a partir del curso, la carrera y los objetivos de aprendizaje.', cta: 'Planear una gira', alt: 'Guía con sombrero señalando hacia las copas de los árboles en un sendero rocoso, con dos caminantes detrás' },
};

const pillars: Record<PillarId, PillarText> = {
  knowledge: { title: 'Conocimiento local', text: 'Destinos, temporadas y logística para saber qué funciona y cuándo.' },
  allies: { title: 'Red de aliados', text: 'Personas, proyectos y negocios que conocemos y en los que confiamos.' },
  judgment: { title: 'Criterio', text: 'Cada recomendación responde a una razón y a lo que mejor encaja contigo.' },
  contact: { title: 'Un solo punto de contacto', text: 'Coordinamos la experiencia y te acompañamos antes, durante y después.' },
};

const steps: Record<StepId, StepText> = {
  understand: { title: 'Entendemos', text: 'Nos cuentas qué buscas, para quién es y qué tienes en mente. Nosotros haremos las preguntas correctas para entenderlo mejor.' },
  design: { title: 'Diseñamos', text: 'Seleccionamos lugares, experiencias y opciones que realmente tengan sentido para lo que quieres vivir o lograr.' },
  coordinate: { title: 'Coordinamos', text: 'Organizamos proveedores, disponibilidad y logística para que todo funcione como una sola experiencia.' },
  accompany: { title: 'Acompañamos', text: 'Antes, durante y después, estamos disponibles para orientarte y ayudarte cuando lo necesites.' },
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
  uvita: { short: 'Uvita · Marino Ballena', name: 'Uvita · Parque Nacional Marino Ballena', region: 'Pacífico Sur', desc: 'Playas, selva costera y vida marina, con temporadas de avistamiento de ballenas jorobadas.', photoNote: '[FOTO: bote pequeño con biólogo marino explicando a un grupo.]' },
  osa: { short: 'Osa · Corcovado', name: 'Península de Osa · Corcovado', region: 'Pacífico Sur · Puntarenas', desc: 'Uno de los lugares con mayor biodiversidad de Costa Rica. Es remoto, requiere planificación y vale la pena recorrerlo con un buen guía.', alt: 'Playa de arena oscura con rocas y palmeras al borde de la selva en el Parque Nacional Corcovado', photoNote: '[FOTO: grupo cruzando un río en la península con su guía.]' },
  puertoviejo: { short: 'Caribe Sur', name: 'Puerto Viejo · Caribe Sur', region: 'Limón', desc: 'Cultura afrocaribeña, cocina propia, cacao y playas del sur del Caribe.', photoNote: '[FOTO: cocinera preparando rice and beans con coco para un grupo.]' },
};

const methods: Record<ContactMethodId, string> = {
  whatsapp: 'WhatsApp',
  email: 'Correo electrónico',
};

const interests: Record<InterestId, string> = {
  nature: 'Naturaleza y vida silvestre',
  adventure: 'Aventura',
  culture: 'Cultura y comunidades',
  food: 'Gastronomía',
  wellness: 'Bienestar y relajación',
  rural: 'Experiencias rurales y de finca',
  learning: 'Aprendizaje y educación',
  celebrations: 'Celebraciones y experiencias especiales',
};

const timings: Record<TimingId, string> = {
  fixed: 'Tengo una fecha definida',
  approximate: 'Tengo una fecha aproximada',
  flexible: 'Mis fechas son flexibles',
  unknown: 'Todavía no lo sé',
};

const zones: Record<ZoneId, string> = {
  yes: 'Sí',
  open: 'Estoy abierto a recomendaciones',
  unknown: 'Todavía no lo sé',
};

const privacySections: Record<PrivacySectionId, PrivacySectionText> = {
  controller: {
    heading: 'Quién es el responsable',
    blocks: [
      { p: 'El responsable de tus datos es El Guía CR. Así puedes identificarnos y escribirnos:' },
      { p: 'Para cualquier consulta sobre tus datos, o para ejercer tus derechos, escríbenos a {email}.' },
    ],
  },
  data: {
    heading: 'Qué datos pedimos y cuáles son obligatorios',
    blocks: [
      { p: 'Cuando envías el formulario, tus datos pasan a formar parte de una base de datos de consultas de El Guía CR: el buzón {email} y las conversaciones que siguen después, por correo o por WhatsApp.' },
      { p: 'Estos datos son obligatorios, porque sin ellos no podemos responderte:' },
      { list: ['para quién es la experiencia;', 'tu nombre;', 'tu mensaje;', 'cómo prefieres que te contactemos y el dato para hacerlo: un número de WhatsApp o un correo electrónico;', 'tu autorización, que das marcando la casilla del formulario.'] },
      { p: 'Estos son opcionales: tus intereses, cuántas personas participarían, la fecha aproximada y la zona de Costa Rica que tienes en mente. Si los dejas en blanco te respondemos igual, pero con menos información para ajustar la primera propuesta.' },
      { p: 'Si no das los datos obligatorios, el formulario no se envía y no podemos responder tu consulta.' },
      { p: 'Además guardamos la fecha y la hora en que aceptaste esta política, su versión y el idioma del sitio.' },
    ],
  },
  purposes: {
    heading: 'Para qué usamos tus datos',
    blocks: [
      { p: 'Usamos tus datos solo para:' },
      { list: ['responder tu consulta y preparar una cotización o un itinerario;', 'guardar el registro de la conversación y de la autorización que diste;', 'prevenir abusos del formulario, con la verificación de Turnstile y un campo trampa para robots.'] },
      { p: 'El tratamiento consiste en recibir tu consulta, guardarla, leerla, responderla y, cuando termina el plazo de conservación, borrarla o anonimizarla.' },
      { p: 'No usamos tus datos para mercadeo ni boletines, no hacemos perfiles y no tomamos decisiones automatizadas sobre ti, salvo la verificación contra robots. Si algún día queremos usarlos para otra cosa, te pedimos tu autorización antes.' },
    ],
  },
  recipients: {
    heading: 'Quién recibe tus datos',
    blocks: [
      { p: 'Dentro de El Guía CR, tus datos los consulta solo el equipo que atiende las consultas. Para que el formulario funcione usamos estos proveedores, que los procesan por encargo nuestro:' },
      { list: ['Cloudflare: aloja el sitio, hace la verificación Turnstile y ejecuta el servicio que recibe el formulario.', 'Resend: envía tu consulta por correo a nuestro buzón.', 'Hostinger: aloja el buzón {email}, donde llega tu consulta.', 'WhatsApp (Meta): solo si eliges que te contactemos por WhatsApp, porque la conversación pasa por su servicio.'] },
      { p: 'Estos proveedores pueden procesar datos fuera de Costa Rica, por ejemplo en Estados Unidos. Al marcar la casilla del formulario nos autorizas a enviarles tus datos para eso.' },
      { p: 'No vendemos tus datos, no los compartimos con nadie más y no los usamos para mercadeo.' },
    ],
  },
  retention: {
    heading: 'Cuánto tiempo los guardamos',
    blocks: [
      { p: `Guardamos tu consulta mientras la necesitemos para responderte y hasta ${privacyRetentionMonths} meses después del último contacto. Pasado ese plazo la borramos o la anonimizamos, salvo que una ley nos obligue a conservarla más tiempo.` },
      { p: 'Si quieres que la borremos antes, puedes pedirlo en cualquier momento.' },
    ],
  },
  sensitive: {
    heading: 'Datos sensibles',
    blocks: [
      { p: 'Para responder tu consulta no necesitamos datos sensibles, y nadie está obligado a darlos. Por favor no los escribas en el mensaje: datos de salud (incluidas alergias o discapacidad), religión, origen étnico, vida sexual, opiniones políticas o situación socioeconómica.' },
      { p: 'Si para organizar tu experiencia con seguridad necesitamos saber algo de eso, te lo preguntamos más adelante, por contacto directo y solo lo estrictamente necesario. Si ya lo incluiste en un mensaje, puedes pedirnos que lo borremos.' },
    ],
  },
  rights: {
    heading: 'Tus derechos y cómo ejercerlos',
    blocks: [
      { p: 'La Ley 8968 te da derecho a:' },
      { list: ['acceder a tus datos y saber cómo los usamos;', 'rectificarlos o actualizarlos si están incorrectos o desactualizados;', 'pedir que los borremos (cancelación);', 'consentir o negarte a que se divulguen o se transfieran, y revocar en cualquier momento la autorización que diste.'] },
      { p: 'Para ejercerlos, escríbenos a {email} y cuéntanos qué quieres hacer. Es gratis. Podemos pedirte que confirmes que eres la persona titular de los datos, para no entregárselos a alguien más.' },
      { p: 'Te respondemos en un máximo de 5 días hábiles. Si revocas tu autorización, también la aplicamos en ese plazo; la revocatoria no afecta lo que hicimos antes de recibirla. Puedes pedir acceso a tus datos cuando quieras, pero no más de una vez cada 6 meses.' },
      { p: 'Si no te respondemos o no estás de acuerdo con la respuesta, puedes presentar una denuncia ante la PRODHAB, la Agencia de Protección de Datos de los Habitantes: {prodhab}.' },
    ],
  },
  security: {
    heading: 'Seguridad e incidentes',
    blocks: [
      { p: 'Protegemos tus datos con medidas razonables: el sitio usa conexión cifrada (HTTPS) y tu consulta va directo del formulario a nuestro buzón, sin que la guardemos en ninguna otra base de datos propia. Los proveedores que la procesan pueden conservar sus propios registros técnicos.' },
      { p: 'Si ocurre un incidente de seguridad que afecte tus datos, te avisamos en un máximo de 5 días hábiles. El aviso explica qué pasó, qué datos se afectaron y qué medidas tomamos.' },
    ],
  },
  cookies: {
    heading: 'Cookies y verificación contra robots',
    blocks: [
      { p: 'Este sitio no usa cookies de análisis ni de publicidad. El formulario usa Cloudflare Turnstile, que revisa señales técnicas de tu navegador, como la dirección IP, para distinguir a las personas de los robots. Turnstile se carga cuando te acercas al formulario o empiezas a usarlo, y no agregamos esa información a tu consulta.' },
      { p: 'Más detalle en la {cookies}. Si algún día agregamos herramientas de análisis, actualizaremos esta política y la de cookies antes de activarlas.' },
    ],
  },
  minors: {
    heading: 'Menores de edad',
    blocks: [
      { p: 'El formulario es para personas adultas. Si consultas por un menor, escríbenos tú, como madre, padre o persona encargada, y no incluyas más datos del menor que los necesarios para armar la propuesta, como su edad.' },
    ],
  },
  changes: {
    heading: 'Cambios en esta política',
    blocks: [
      { p: 'Si cambiamos esta política, publicamos la nueva versión en esta página con su fecha de actualización. Si el cambio afecta para qué usamos tus datos, te pedimos tu autorización otra vez antes de aplicarlo.' },
    ],
  },
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
    titleLead: 'Experiencias diseñadas',
    titleBefore: 'con',
    titleEmphasis: 'propósito',
    titleAfter: 'en',
    titleCountry: 'Costa Rica',
    intro: 'Tú nos cuentas qué quieres vivir, aprender o lograr en Costa Rica. El Guía se encarga de conectar las piezas.',
    primaryCta: 'Cuéntanos qué estás buscando',
    secondaryCta: 'Explora Costa Rica',
    segments: 'Viajeros · Locales · Empresas · Educación',
  },
  manifesto: {
    eyebrow: '01 · Qué hacemos',
    statement: 'No empezamos por un catálogo. Empezamos por entender qué quieres vivir, descubrir, aprender o lograr.',
    secondBefore: 'Después conectamos',
    secondEmphasis: 'conocimiento, lugares y personas',
    secondAfter: 'para darle forma a una experiencia que tenga sentido para ti.',
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
    title: 'No tienes que tenerlo todo claro. Para eso estamos.',
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
    listLabel: 'Destinos del mapa',
    photoCredit: 'Foto',
    pick: 'Me interesa',
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
    eyebrow: '04 · Historias',
    title: 'Mejor verlo que contarlo.',
    intro: 'Sigue bajando: las historias pasan de lado. Experiencias reales, aliados y el detrás de cámaras.',
    regionLabel: 'Historias en video',
    closingTitle: '¿La próxima historia es la suya?',
    closingCta: 'Cuéntanos qué estás buscando',
    items: storyItems,
  },
  values: {
    photoAlt: 'Un finquero señalando sus potreros, con pacas de heno en el campo',
    eyebrow: '05 · Lo que nos importa',
    headline: 'No recomendamos algo solo porque sea popular.',
    text: 'Buscamos lugares, personas y experiencias que realmente valgan la pena conocer. Queremos saber qué hacen bien, para quién funcionan y cuándo tiene sentido recomendarlos.',
    closingLead: 'Conocer antes de recomendar.',
    closingText: 'Esa es parte importante de cómo trabaja El Guía.',
  },
  contact: {
    eyebrow: '06 · Empecemos',
    title: 'Cuéntanos qué estás buscando.',
    intro: 'No necesitas tener todo definido. Cuéntanos la idea y empezamos desde ahí. Los detalles los podemos ir viendo juntos.',
    steps: [
      { lead: 'Te contactamos.', rest: 'Te respondemos personalmente para conocer un poco mejor lo que buscas.' },
      { lead: 'Conversamos.', rest: 'Entendemos la idea, el contexto y lo que esperas de la experiencia.' },
      { lead: 'Le damos forma.', rest: 'A partir de ahí podemos preparar una propuesta pensada para ti.' },
    ],
    whoFor: '¿Para quién estás buscando esta experiencia?',
    otherOption: 'Otro',
    nameLabel: '¿Cómo te llamas?',
    namePlaceholder: 'Tu nombre',
    methodLabel: '¿Cómo prefieres que te contactemos?',
    methods,
    phoneLabel: 'Número de teléfono',
    emailLabel: 'Correo electrónico',
    whatLabel: '¿Qué quieres vivir, descubrir, aprender o lograr?',
    whatHelp: 'Cuéntanos tu idea con tus propias palabras, aunque todavía no tengas todos los detalles. Si hay algo importante, como las edades o una ocasión especial, inclúyelo aquí.',
    whatSensitive: 'No incluyas datos sensibles, como salud, alergias o religión. Si necesitamos alguno para tu seguridad, te lo pedimos más adelante, solo lo estrictamente necesario y por contacto directo.',
    whatPlaceholder: 'Ej.: celebrar los 15 años de la empresa con algo que no sea otra cena; una gira de biología para 30 estudiantes; nuestro primer viaje a Costa Rica, sin prisas.',
    detailsTitle: '¿Nos das un poco más de contexto?',
    detailsHint: 'Todo es opcional, pero nos ayuda a llegar con una mejor primera propuesta.',
    interestsLabel: '¿Qué tipo de experiencias te interesan?',
    interestsHint: 'Puedes elegir más de una.',
    interests,
    peopleLabel: '¿Cuántas personas participarían?',
    peoplePlaceholder: 'Un aproximado está bien',
    timingLabel: '¿Cuándo te gustaría hacerlo?',
    timings,
    dateLabel: 'Fecha o periodo aproximado',
    datePlaceholder: 'Ej.: marzo 2027',
    zoneLabel: '¿Hay alguna zona de Costa Rica que tengas en mente?',
    zones,
    zoneNameLabel: '¿Cuál?',
    zoneNamePlaceholder: 'La Fortuna, Monteverde, Guanacaste...',
    errorChoice: 'Elige una opción.',
    errorField: 'Completa este campo.',
    errorEmail: 'Escribe un correo válido.',
    errorSend: 'No pudimos enviar tu mensaje. Inténtalo de nuevo o escríbenos directamente:',
    errorConsent: 'Marca esta casilla para enviar tu consulta.',
    errorCaptcha: 'No pudimos verificar que eres una persona. Inténtalo de nuevo en unos segundos.',
    sending: 'Enviando…',
    submit: 'Quiero que El Guía me contacte',
    consentLead: 'He leído la',
    consentLink: 'política de privacidad',
    consentRest: 'y autorizo a El Guía CR a usar mis datos para responder esta consulta, y a que los procesen proveedores que pueden estar fuera de Costa Rica.',
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
  privacy: {
    title: 'Política de privacidad y datos personales | El Guía CR',
    description: 'Qué datos personales recibe El Guía CR cuando nos escribes, para qué los usamos, quién los procesa, cuánto los guardamos y cómo ejercer tus derechos (Ley 8968).',
    heading: 'Política de privacidad',
    intro: 'Aquí explicamos qué datos tuyos recibimos cuando nos escribes desde elguiacr.com, para qué los usamos y cómo puedes ejercer tus derechos. Nos guiamos por la Ley 8968, de Protección de la Persona frente al tratamiento de sus datos personales.',
    updatedLabel: 'Última actualización',
    tocLabel: 'En esta página',
    controllerLabels: { brand: 'Nombre comercial', legalName: 'Nombre o razón social', idNumber: 'Cédula', address: 'Dirección', email: 'Correo' },
    links: { cookies: 'página de cookies' },
    sections: privacySections,
  },
  pages,
};

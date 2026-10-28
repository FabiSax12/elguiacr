import type { Locale } from '../i18n/config';
import type { AudienceId } from './audiences';
import type { LandingPageKey } from './routes';

export const landingPageKeyByAudience: Record<AudienceId, LandingPageKey> = {
  travelers: 'customTrips',
  locals: 'localExperiences',
  companies: 'teamBuilding',
  education: 'educationalTrips',
};

export interface LandingText {
  // SEO: title up to 60 characters, description up to 155.
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string[];
  designHeading: string;
  design: { title: string; text: string }[];
  // One line per step: understand, design, coordinate.
  how: [string, string, string];
  examplesHeading: string;
  examplesIntro: string;
  faq: { question: string; answer: string }[];
  ctaTitle: string;
  ctaText: string;
}

const travelers: Record<Locale, LandingText> = {
  es: {
    title: 'Viajes personalizados a Costa Rica | El Guía CR',
    description: 'Armamos tu viaje a Costa Rica a tu ritmo y presupuesto: itinerario, tours en La Fortuna y transporte coordinados con un solo contacto.',
    eyebrow: 'Para viajeros',
    h1: 'Viajes personalizados en Costa Rica, hechos a tu ritmo',
    intro: [
      'Un viaje a Costa Rica se puede armar de mil maneras, y muchos itinerarios genéricos terminan pareciéndose entre sí. En El Guía CR partimos de otra pregunta: qué quieres vivir, con quién viajas y qué ritmo y presupuesto tienes en mente.',
      'Con eso diseñamos un itinerario a tu medida y lo coordinamos contigo: tours en La Fortuna, estancias en fincas, transporte entre destinos y esos tiempos de traslado que casi nadie calcula bien al planear solo.',
    ],
    designHeading: 'Qué diseñamos para tu viaje',
    design: [
      { title: 'Un itinerario con criterio', text: 'Cuántos días en cada lugar, en qué orden y con qué margen para descansar. Nos adaptamos a tu ritmo, no al revés.' },
      { title: 'Tours y actividades que encajan', text: 'Tours en La Fortuna y en otros destinos, combinando lugares conocidos con otros menos obvios que sí valen la pena.' },
      { title: 'Transporte y traslados', text: 'Tiempos reales entre destinos y opciones de transporte que tengan sentido para tu grupo y tu presupuesto.' },
      { title: 'Un solo punto de contacto', text: 'Una persona que conoce tu plan y lo ajusta si algo cambia, antes y durante el viaje.' },
    ],
    how: [
      'Nos cuentas fechas, grupo, ritmo y qué te gustaría vivir, en un formulario corto y una conversación.',
      'Armamos una propuesta de itinerario con lugares, actividades y tiempos, y la afinamos contigo.',
      'Coordinamos con aliados, transporte y reservas, y seguimos disponibles mientras viajas.',
    ],
    examplesHeading: 'Ideas para tu viaje',
    examplesIntro: 'Son puntos de partida. Los combinamos, los cambiamos o los descartamos según lo que busques.',
    faq: [
      { question: '¿Es un viaje privado o un tour en grupo?', answer: 'Diseñamos el viaje para tu grupo: pareja, familia o amigos. Si te interesa compartir alguna actividad con otras personas, lo conversamos y vemos qué opciones hay.' },
      { question: '¿Puedo pedir solo una parte, como tours en La Fortuna o el transporte?', answer: 'Sí. Puedes pedirnos el viaje completo o solo la parte que te cuesta organizar. Cuéntanos qué tienes resuelto y nos concentramos en lo demás.' },
      { question: '¿Con cuánta anticipación debería escribirles?', answer: 'Mientras antes, más opciones hay, sobre todo en temporada alta o con fechas fijas. Aun así, si tu viaje está cerca, escríbenos y te decimos qué es posible.' },
      { question: '¿Cuánto cuesta un viaje personalizado?', answer: 'Depende del grupo, las fechas y lo que incluya el plan. Después de conversar contigo te enviamos una propuesta con el detalle para que decidas con claridad.' },
    ],
    ctaTitle: 'Cuéntanos cómo imaginas tu viaje.',
    ctaText: 'No hace falta tener todo claro. Con unas pocas respuestas empezamos a armar la propuesta.',
  },
  en: {
    title: 'Custom Trips to Costa Rica, Planned for You | El Guía CR',
    description: 'We plan your Costa Rica trip around your pace and budget: itinerary, La Fortuna tours and transport, all coordinated through one contact.',
    eyebrow: 'For travelers',
    h1: 'Custom trips to Costa Rica, built around your pace',
    intro: [
      'There are a thousand ways to put together a trip to Costa Rica, and plenty of generic itineraries end up looking the same. At El Guía CR we start from different questions: what do you want to experience, who is traveling with you, and what pace and budget do you have in mind?',
      'From there we design an itinerary around you and coordinate it with you: La Fortuna tours, farm stays, transport between destinations, and the travel times that are easy to underestimate when you plan alone.',
    ],
    designHeading: 'What we design for your trip',
    design: [
      { title: 'An itinerary with judgment', text: 'How many days in each place, in what order, and how much room to rest. We adapt to your pace, not the other way around.' },
      { title: 'Tours and activities that fit', text: 'Tours in La Fortuna and elsewhere, mixing well-known places with lesser-known ones that are worth the detour.' },
      { title: 'Transport and transfers', text: 'Realistic travel times between destinations and transport options that make sense for your group and budget.' },
      { title: 'One point of contact', text: 'One person who knows your plan and adjusts it if something changes, before and during the trip.' },
    ],
    how: [
      'You tell us your dates, group, pace and what you would like to experience, through a short form and a conversation.',
      'We put together an itinerary proposal with places, activities and timing, and refine it with you.',
      'We coordinate partners, transport and bookings, and stay available while you travel.',
    ],
    examplesHeading: 'Ideas for your trip',
    examplesIntro: 'These are starting points. We combine them, change them or drop them depending on what you are after.',
    faq: [
      { question: 'Is it a private trip or a group tour?', answer: 'We design the trip for your own group: a couple, a family or friends. If you like the idea of sharing an activity with other travelers, tell us and we will look at the options.' },
      { question: 'Can I ask for just one part, like La Fortuna tours or transport?', answer: 'Yes. You can ask for the whole trip or only the part you find hard to organize. Tell us what you already have sorted and we will focus on the rest.' },
      { question: 'How far ahead should I get in touch?', answer: 'The earlier the better, especially in high season or with fixed dates. Even so, if your trip is close, write to us and we will tell you what is possible.' },
      { question: 'How much does a custom trip cost?', answer: 'It depends on the group, the dates and what the plan includes. After talking with you we send a proposal with the details so you can decide with a clear picture.' },
    ],
    ctaTitle: 'Tell us how you picture your trip.',
    ctaText: 'You do not need to have it all figured out. A few answers are enough to start building a proposal.',
  },
};

const locals: Record<Locale, LandingText> = {
  es: {
    title: 'Experiencias para locales en Costa Rica | El Guía CR',
    description: 'Actividades diferentes en Costa Rica para ticos y residentes: escapadas, celebraciones y planes de fin de semana con la logística resuelta.',
    eyebrow: 'Para locales',
    h1: 'Actividades diferentes en Costa Rica para ver tu país con otros ojos',
    intro: [
      'Vivir en Costa Rica no siempre significa conocerla. Muchas veces el fin de semana se va entre los mismos planes de siempre, y los lugares más interesantes quedan para después porque organizar todo da pereza.',
      'En El Guía CR diseñamos planes para quienes ya viven aquí: escapadas, celebraciones y días de campo que se sienten distintos, con la logística resuelta para que tú solo tengas que disfrutar.',
    ],
    designHeading: 'Planes que podemos armar para ti',
    design: [
      { title: 'Escapadas de un día o de fin de semana', text: 'Un río, una finca, un volcán o un pueblo costero, con tiempos de manejo razonables desde donde vives.' },
      { title: 'Celebraciones con otro sabor', text: 'Cumpleaños, aniversarios o reuniones de familia lejos del restaurante de siempre.' },
      { title: 'Lugares que no son los de siempre', text: 'Fincas, comunidades y rincones que conocemos de cerca, además de los destinos clásicos.' },
      { title: 'Todo resuelto de antemano', text: 'Comida, actividades, horarios y transporte si lo necesitas. Tu grupo llega y disfruta.' },
    ],
    how: [
      'Nos cuentas quiénes van, qué quieren celebrar o descubrir y desde dónde salen.',
      'Te proponemos un plan con lugar, actividades y horarios que encajen con tu grupo.',
      'Coordinamos con los aliados locales y dejamos todo listo para el día del plan.',
    ],
    examplesHeading: 'Ideas para tu próximo plan',
    examplesIntro: 'Algunos ejemplos de lo que podemos armar. Cualquiera se puede ajustar al tamaño y a la edad de tu grupo.',
    faq: [
      { question: '¿Qué hacer en Costa Rica el fin de semana si quiero algo distinto?', answer: 'Depende de cuánto quieras manejar y qué tipo de plan te atrae. Cuéntanos de dónde sales, con quién vas y qué te gustaría vivir, y te proponemos opciones realistas.' },
      { question: '¿Organizan planes para grupos pequeños o familias?', answer: 'Sí. Diseñamos planes para grupos de distintos tamaños, desde una pareja hasta una reunión familiar grande. Lo importante es que el plan se ajuste a quienes van.' },
      { question: '¿Puedo pedir algo solo para un día?', answer: 'Claro. Muchos planes son de un día o de medio día. También armamos escapadas de más de un día si lo prefieres.' },
      { question: '¿Cómo funciona el precio?', answer: 'Después de conversar contigo te enviamos una propuesta con lo que incluye el plan. Así ves el detalle antes de decidir.' },
    ],
    ctaTitle: 'Cuéntanos qué plan tienes en mente.',
    ctaText: 'Dinos con quién vas y qué quieren vivir. Nosotros armamos el resto.',
  },
  en: {
    title: 'Experiences for Locals in Costa Rica | El Guía CR',
    description: 'Different things to do in Costa Rica for locals and residents: getaways, celebrations and weekend plans with the logistics handled.',
    eyebrow: 'For locals',
    h1: 'Different things to do in Costa Rica, for people who already live here',
    intro: [
      'Living in Costa Rica does not always mean knowing it. Weekends tend to fill up with the same plans as always, and the more interesting places get pushed back because organizing everything feels like a chore.',
      'At El Guía CR we design plans for people who already live here: getaways, celebrations and field days that feel different, with the logistics sorted so all you have to do is enjoy it.',
    ],
    designHeading: 'Plans we can put together for you',
    design: [
      { title: 'Day trips and weekend getaways', text: 'A river, a farm, a volcano or a coastal town, with driving times that make sense from where you live.' },
      { title: 'Celebrations with a different flavor', text: 'Birthdays, anniversaries or family reunions away from the usual restaurant.' },
      { title: 'Places beyond the usual ones', text: 'Farms, communities and corners we know first-hand, alongside the classic destinations.' },
      { title: 'Everything sorted in advance', text: 'Food, activities, schedules and transport if you need it. Your group shows up and enjoys.' },
    ],
    how: [
      'You tell us who is coming, what you want to celebrate or discover, and where you are leaving from.',
      'We propose a plan with a place, activities and a schedule that fit your group.',
      'We coordinate with local partners and have everything ready for the day.',
    ],
    examplesHeading: 'Ideas for your next plan',
    examplesIntro: 'A few examples of what we can put together. Any of them can be adjusted to the size and age of your group.',
    faq: [
      { question: 'What can I do in Costa Rica this weekend if I want something different?', answer: 'It depends on how far you want to drive and what kind of plan appeals to you. Tell us where you are leaving from, who is coming and what you would like to experience, and we will suggest realistic options.' },
      { question: 'Do you organize plans for small groups or families?', answer: 'Yes. We design plans for groups of different sizes, from a couple to a big family get-together. What matters is that the plan fits the people going.' },
      { question: 'Can I ask for something for just one day?', answer: 'Of course. Many plans are a full day or half a day. We can also build getaways that last longer if you prefer.' },
      { question: 'How does pricing work?', answer: 'After talking with you we send a proposal that lays out what the plan includes, so you see the details before deciding.' },
    ],
    ctaTitle: 'Tell us what you have in mind.',
    ctaText: 'Let us know who is coming and what you want to do. We will build the rest.',
  },
};

const companies: Record<Locale, LandingText> = {
  es: {
    title: 'Team building en Costa Rica a medida | El Guía CR',
    description: 'Team building y actividades para empresas en Costa Rica, diseñadas desde el objetivo de tu equipo. También retiros corporativos.',
    eyebrow: 'Para empresas',
    h1: 'Team building y actividades para empresas en Costa Rica',
    intro: [
      'Un buen día de equipo no empieza con una actividad, sino con una pregunta: ¿qué necesita este grupo? Puede ser integrar a gente nueva, reconocer un año difícil, desconectarse o pensar la estrategia con calma.',
      'En El Guía CR diseñamos team building y retiros corporativos en Costa Rica a partir de ese objetivo, y nos encargamos de la coordinación para que tú no tengas que perseguir proveedores.',
    ],
    designHeading: 'Qué podemos diseñar para tu equipo',
    design: [
      { title: 'Actividades de integración', text: 'Retos y dinámicas al aire libre, en una finca, un río o un bosque, ajustadas al tamaño y la energía del grupo.' },
      { title: 'Retiros corporativos', text: 'Uno o varios días con espacios de trabajo y espacios de descanso, en el destino que mejor encaje con tu objetivo.' },
      { title: 'Bienestar y reconocimiento', text: 'Experiencias para agradecer, desconectar o celebrar un logro del equipo sin que parezca otro evento más.' },
      { title: 'Logística de principio a fin', text: 'Lugar, alimentación, actividades y transporte coordinados con un único contacto.' },
    ],
    how: [
      'Nos cuentas el objetivo, el tamaño del grupo, las fechas y cualquier restricción o sensibilidad del equipo.',
      'Te presentamos una propuesta con actividades, lugar y tiempos, alineada con lo que quieren lograr.',
      'Coordinamos aliados, transporte y detalles, y nos mantenemos disponibles el día de la actividad.',
    ],
    examplesHeading: 'Ejemplos para equipos',
    examplesIntro: 'Ideas para inspirarte. El diseño final parte siempre del objetivo de tu equipo.',
    faq: [
      { question: '¿Pueden adaptar la actividad a un grupo grande o con distintos niveles físicos?', answer: 'Sí. Diseñamos con el grupo real en mente, incluidas diferencias de edad, condición física y restricciones. Cuéntanos cómo es tu equipo y lo tomamos en cuenta.' },
      { question: '¿Solo hacen team building o también retiros de varios días?', answer: 'Hacemos ambos. Puede ser un día de integración cerca de San José o un retiro de varios días en otro destino, según lo que necesiten.' },
      { question: '¿Pueden encargarse del transporte y la alimentación?', answer: 'Sí, coordinamos esas partes con aliados locales para que tengas un solo contacto. Lo definimos en la propuesta.' },
      { question: '¿Cómo se define el presupuesto?', answer: 'Lo conversamos al inicio y la propuesta se ajusta a ese marco. Así vemos juntos qué entra y qué no antes de decidir.' },
    ],
    ctaTitle: 'Hablemos de tu equipo.',
    ctaText: 'Cuéntanos el objetivo y el tamaño del grupo. Te respondemos con una propuesta pensada para ustedes.',
  },
  en: {
    title: 'Team Building in Costa Rica, Made to Measure | El Guía CR',
    description: 'Team building and corporate retreats in Costa Rica designed around your team\'s goal, with logistics handled by a single contact.',
    eyebrow: 'For companies',
    h1: 'Team building and corporate activities in Costa Rica',
    intro: [
      'A good team day does not start with an activity. It starts with a question: what does this group need? It could be bringing new people in, recognizing a hard year, switching off or thinking through strategy without distractions.',
      'At El Guía CR we design team building and corporate retreats in Costa Rica around that goal, and we handle the coordination so you do not have to chase suppliers.',
    ],
    designHeading: 'What we can design for your team',
    design: [
      { title: 'Team integration activities', text: 'Outdoor challenges and group activities on a farm, at a river or in the forest, matched to the size and energy of your group.' },
      { title: 'Corporate retreats', text: 'One or several days with room for work and room to rest, in the destination that best fits your goal.' },
      { title: 'Well-being and recognition', text: 'Experiences to say thanks, unwind or celebrate a team win without feeling like just another event.' },
      { title: 'Logistics from start to finish', text: 'Venue, meals, activities and transport coordinated through a single contact.' },
    ],
    how: [
      'You tell us the goal, group size, dates and any restrictions or sensitivities on the team.',
      'We present a proposal with activities, venue and timing that lines up with what you want to achieve.',
      'We coordinate partners, transport and details, and stay available on the day.',
    ],
    examplesHeading: 'Examples for teams',
    examplesIntro: 'Ideas to get you started. The final design always starts from your team\'s goal.',
    faq: [
      { question: 'Can you adapt the activity to a large group or mixed fitness levels?', answer: 'Yes. We design for the real group, including differences in age, fitness and restrictions. Tell us what your team is like and we will build that in.' },
      { question: 'Do you only do team building, or multi-day retreats as well?', answer: 'Both. It can be a single integration day near San José or a multi-day retreat in another destination, depending on what you need.' },
      { question: 'Can you take care of transport and meals?', answer: 'Yes. We coordinate those pieces with local partners so you have one contact. We spell it out in the proposal.' },
      { question: 'How is the budget set?', answer: 'We talk it through at the start and the proposal is built within that frame, so we can see together what is in and what is not before you decide.' },
    ],
    ctaTitle: 'Let\'s talk about your team.',
    ctaText: 'Tell us the goal and the size of the group. We will reply with a proposal built for you.',
  },
};

const education: Record<Locale, LandingText> = {
  es: {
    title: 'Giras educativas en Costa Rica | El Guía CR',
    description: 'Giras educativas y académicas en Costa Rica diseñadas desde tu curso y tus objetivos de aprendizaje, con logística coordinada.',
    eyebrow: 'Para educación',
    h1: 'Giras educativas y académicas en Costa Rica, diseñadas desde tu curso',
    intro: [
      'Una gira educativa funciona cuando está conectada con lo que se enseña en el aula. Por eso no partimos de un catálogo de destinos, sino del curso, la carrera y lo que quieres que el grupo aprenda.',
      'En El Guía CR diseñamos giras académicas en Costa Rica para colegios, universidades y programas de formación, y coordinamos la logística para que el equipo docente se concentre en enseñar.',
    ],
    designHeading: 'Qué diseñamos para tu gira',
    design: [
      { title: 'Objetivos de aprendizaje primero', text: 'Revisamos contigo el programa del curso y elegimos lugares y actividades que lo refuercen.' },
      { title: 'Aprendizaje de campo', text: 'Observación, toma de datos y conversación con especialistas, de biología y geología a cultura y comunidades.' },
      { title: 'Trabajo con cada nivel', text: 'Giras para colegios, universidades o grupos de formación, con ritmo y contenido acordes a la edad.' },
      { title: 'Logística pensada para grupos', text: 'Transporte, alimentación, horarios y apoyo coordinados con un solo contacto, antes y durante la gira.' },
    ],
    how: [
      'Nos cuentas el curso o la carrera, el nivel, el tamaño del grupo y lo que quieren aprender.',
      'Diseñamos un itinerario de campo con actividades y tiempos ligados a los objetivos.',
      'Coordinamos transporte, especialistas y detalles prácticos, y acompañamos durante la gira.',
    ],
    examplesHeading: 'Ejemplos para giras educativas',
    examplesIntro: 'Ideas de partida. Cada gira se ajusta al curso, a la edad y a los objetivos de quien la solicita.',
    faq: [
      { question: '¿Pueden diseñar una gira a partir del programa de nuestro curso?', answer: 'Sí, es justamente como trabajamos. Compártenos los objetivos y el contenido y proponemos lugares y actividades alineados.' },
      { question: '¿Trabajan con colegios y con universidades?', answer: 'Sí. El nivel cambia el ritmo, el contenido y las medidas de cuidado, y lo tomamos en cuenta al diseñar.' },
      { question: '¿Se encargan del transporte y la alimentación del grupo?', answer: 'Los coordinamos con aliados locales como parte de la propuesta, para que el equipo docente tenga un solo contacto.' },
      { question: '¿Con cuánta anticipación conviene solicitar una gira?', answer: 'Mientras antes, mejor, porque hay que alinear calendario académico, disponibilidad y presupuesto. Si tu fecha está cerca, escríbenos y vemos qué se puede hacer.' },
    ],
    ctaTitle: 'Planeemos tu próxima gira.',
    ctaText: 'Cuéntanos el curso, el nivel y lo que quieres que aprenda el grupo. Armamos una propuesta contigo.',
  },
  en: {
    title: 'Educational Trips in Costa Rica | El Guía CR',
    description: 'Educational trips and field trips in Costa Rica designed around your course and learning goals, with the logistics coordinated.',
    eyebrow: 'For education',
    h1: 'Educational travel and field trips in Costa Rica, built around your course',
    intro: [
      'A field trip works best when it connects to what is taught in the classroom. That is why we do not start from a catalog of destinations. We start from the course, the degree and what you want the group to learn.',
      'At El Guía CR we design educational trips in Costa Rica for schools, universities and training programs, and we coordinate the logistics so teaching staff can focus on teaching.',
    ],
    designHeading: 'What we design for your trip',
    design: [
      { title: 'Learning goals first', text: 'We go through the course syllabus with you and choose places and activities that reinforce it.' },
      { title: 'Hands-on fieldwork', text: 'Observation, data collection and conversations with specialists, from biology and geology to culture and communities.' },
      { title: 'Work with every level', text: 'Trips for schools, universities or training groups, with a pace and content that suit the age of the students.' },
      { title: 'Logistics built for groups', text: 'Transport, meals, schedules and support coordinated through one contact, before and during the trip.' },
    ],
    how: [
      'You tell us the course or degree, the level, the group size and what you want students to learn.',
      'We design a field itinerary with activities and timing tied to your objectives.',
      'We coordinate transport, specialists and practical details, and support you during the trip.',
    ],
    examplesHeading: 'Examples for field trips',
    examplesIntro: 'Starting ideas. Each trip is adjusted to the course, the age group and the goals of whoever requests it.',
    faq: [
      { question: 'Can you design a trip around our course syllabus?', answer: 'Yes, that is exactly how we work. Share the objectives and content with us and we will propose places and activities that line up.' },
      { question: 'Do you work with schools as well as universities?', answer: 'Yes. The level changes the pace, the content and the care measures, and we factor that in when designing.' },
      { question: 'Do you handle group transport and meals?', answer: 'We coordinate them with local partners as part of the proposal, so teaching staff have one contact.' },
      { question: 'How far ahead should we request a trip?', answer: 'The earlier the better, since the academic calendar, availability and budget all have to line up. If your date is close, write to us and we will see what is possible.' },
    ],
    ctaTitle: 'Let\'s plan your next trip.',
    ctaText: 'Tell us the course, the level and what you want the group to learn. We will build a proposal with you.',
  },
};

export const landings: Record<AudienceId, Record<Locale, LandingText>> = { travelers, locals, companies, education };

export function getLanding(audience: AudienceId, locale: Locale): LandingText {
  return landings[audience][locale];
}


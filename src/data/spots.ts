import type { ImageMetadata } from 'astro';
import rioCeleste from '../assets/rio-celeste.webp';
import arenal from '../assets/arenal.webp';
import monteverde from '../assets/monteverde.webp';
import tortuguero from '../assets/tortuguero.webp';

export interface Spot {
  id: string;
  short: string;
  name: string;
  region: string;
  x: number;
  y: number;
  desc: string;
  ideal: string;
  photoNote: string;
  image?: ImageMetadata;
  alt?: string;
  position?: string;
}

export const DEFAULT_SPOT_ID = 'arenal';

export const spots: Spot[] = [
  { id: 'rincon', short: 'Rincón de la Vieja', name: 'Rincón de la Vieja', region: 'Guanacaste', x: 17.7, y: 13.1, desc: 'Volcán activo con fumarolas, pailas de barro y bosque seco tropical. Buen escenario para caminatas y para aprender geología en campo.', ideal: 'Viajeros · Educación', photoNote: '[FOTO: grupo caminando junto a las pailas de barro con un guía naturalista.]' },
  { id: 'celeste', image: rioCeleste, alt: 'Catarata de Río Celeste cayendo a una poza turquesa rodeada de bosque', position: '50% 45%', short: 'Río Celeste', name: 'Río Celeste · Tenorio', region: 'Guanacaste · Alajuela', x: 28.3, y: 16.2, desc: 'El río de agua turquesa dentro del Parque Nacional Volcán Tenorio. Sendero de bosque lluvioso con catarata y nacientes.', ideal: 'Viajeros · Locales', photoNote: '[FOTO: persona observando la catarata desde el mirador, de espaldas.]' },
  { id: 'arenal', image: arenal, alt: 'Volcán Arenal con cielo despejado y flores en primer plano', position: '55% 45%', short: 'La Fortuna · Arenal', name: 'La Fortuna y el Volcán Arenal', region: 'Zona Norte · Alajuela', x: 38.3, y: 23.5, desc: 'Volcán, aguas termales, ríos, lago y fincas. Una base fácil para combinar actividad, descanso y cultura local en pocos kilómetros.', ideal: 'Viajeros · Locales · Empresas', photoNote: '[FOTO: familia en una finca de la zona norte con el Arenal al fondo.]' },
  { id: 'monteverde', image: monteverde, alt: 'Persona caminando sobre un puente colgante en el bosque nuboso de Monteverde', position: '50% 50%', short: 'Monteverde', name: 'Monteverde', region: 'Puntarenas · Cordillera de Tilarán', x: 33.3, y: 28.8, desc: 'Bosque nuboso, puentes colgantes y una comunidad con larga tradición en conservación e investigación.', ideal: 'Educación · Viajeros', photoNote: '[FOTO: estudiantes en un puente colgante dentro de la niebla.]' },
  { id: 'tortuguero', image: tortuguero, alt: 'Tortugas recién nacidas avanzando sobre la arena oscura', position: '45% 55%', short: 'Tortuguero', name: 'Tortuguero', region: 'Caribe Norte · Limón', x: 71.6, y: 21.3, desc: 'Canales, selva del Caribe y anidación de tortugas marinas en temporada. Se llega en bote o avioneta, así que la logística importa.', ideal: 'Viajeros · Educación', photoNote: '[FOTO: bote recorriendo un canal al amanecer.]' },
  { id: 'tamarindo', short: 'Costa de Guanacaste', name: 'Costa de Guanacaste', region: 'Pacífico Norte', x: 3.3, y: 28.8, desc: 'Playas, atardeceres y una temporada seca marcada. Funciona para descansar, para el surf y para retiros de equipo.', ideal: 'Viajeros · Empresas', photoNote: '[FOTO: equipo en una sesión de trabajo al aire libre frente al mar.]' },
  { id: 'santateresa', short: 'Santa Teresa', name: 'Santa Teresa · Península de Nicoya', region: 'Puntarenas', x: 23.0, y: 49.2, desc: 'Pueblo costero al sur de la península, con surf, ritmo lento y caminos de tierra entre playas.', ideal: 'Viajeros · Locales', photoNote: '[FOTO: tabla de surf apoyada en una cerca, luz de tarde.]' },
  { id: 'sanjose', short: 'San José', name: 'San José y el Valle Central', region: 'Valle Central', x: 55.1, y: 40.4, desc: 'Museos, mercados y cafetales a menos de una hora. La puerta de entrada para la mayoría de visitantes y una sede natural para empresas e instituciones.', ideal: 'Empresas · Educación', photoNote: '[FOTO: grupo recorriendo un beneficio de café con su productor.]' },
  { id: 'manuel', short: 'Manuel Antonio', name: 'Manuel Antonio', region: 'Pacífico Central · Quepos', x: 52.9, y: 57.4, desc: 'Un parque nacional pequeño donde el bosque llega hasta la playa. De los más visitados del país: elegir hora y guía hace la diferencia.', ideal: 'Viajeros · Locales', photoNote: '[FOTO: guía mostrando fauna por telescopio a una familia.]' },
  { id: 'uvita', short: 'Uvita · Marino Ballena', name: 'Uvita · Parque Nacional Marino Ballena', region: 'Pacífico Sur', x: 65.1, y: 64.9, desc: 'La punta con forma de cola de ballena y temporadas de avistamiento de ballenas jorobadas.', ideal: 'Viajeros · Educación', photoNote: '[FOTO: bote pequeño con biólogo marino explicando a un grupo.]' },
  { id: 'osa', short: 'Osa · Corcovado', name: 'Península de Osa · Corcovado', region: 'Pacífico Sur · Puntarenas', x: 72.2, y: 83.7, desc: 'De las zonas con mayor biodiversidad del país. Remota: pide guía certificado, buena planificación y tiempo.', ideal: 'Educación · Viajeros', photoNote: '[FOTO: grupo cruzando un río en la península con su guía.]' },
  { id: 'puertoviejo', short: 'Caribe Sur', name: 'Puerto Viejo · Caribe Sur', region: 'Limón', x: 94.0, y: 49.2, desc: 'Cultura afrocaribeña, cocina propia, cacao y playas del sur del Caribe.', ideal: 'Viajeros · Locales', photoNote: '[FOTO: cocinera preparando rice and beans con coco para un grupo.]' },
];

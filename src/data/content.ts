export const navLinks = [
  { href: '#para-quien', label: 'Para quién' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#fundador', label: 'El Guía' },
  { href: '#destinos', label: 'Destinos' },
  { href: '#historias', label: 'Historias' },
];

export const tickerWords = ['Vivir', 'Descubrir', 'Conectar', 'Aprender'];

export const pillars = [
  { symbol: '+', title: 'Conocimiento local', text: 'Lugares, temporadas, logística y cuándo hace falta un especialista.' },
  { symbol: '+', title: 'Red de aliados', text: 'Gente y negocios que conocemos y en los que confiamos.' },
  { symbol: '+', title: 'Criterio', text: 'Si El Guía lo recomienda, hay una razón. Y sabemos cuándo no.' },
  { symbol: '=', title: 'Un solo punto de contacto', text: 'Antes, durante y después. Los cambios los resolvemos nosotros.' },
];

export const steps = [
  { number: '01', title: 'Entendemos', text: 'Un formulario corto y una conversación. Para quién es, qué buscan, ritmo, fechas, restricciones.' },
  { number: '02', title: 'Diseñamos', text: 'Una propuesta que combina lugares conocidos y otros menos obvios, siempre alrededor del propósito.' },
  { number: '03', title: 'Coordinamos', text: 'Aliados, disponibilidad, transporte y tiempos. Un solo contacto en vez de diez.' },
  { number: '04', title: 'Acompañamos', text: 'Antes, durante y después. Si algo cambia, lo resolvemos sin trasladarle el caos.' },
];

export interface Story {
  format: 'reel' | 'photo';
  background: string;
  color?: string;
  note: string;
  kicker: string;
  title: string;
}

export const stories: Story[] = [
  { format: 'reel', background: '#1f5c46', note: '[REEL 9:16: Bernald frente a cámara explicando cuándo conviene ir a Río Celeste y cuándo no.]', kicker: 'El Guía le cuenta', title: 'Criterio, no catálogo' },
  { format: 'photo', background: '#e0a632', color: '#17362d', note: '[FOTO horizontal: grupo de una empresa terminando una caminata, riendo, sudados, nadie posando.]', kicker: 'Empresas', title: 'Un equipo que se conoce afuera de la oficina' },
  { format: 'reel', background: '#24473c', note: '[REEL 9:16: visita a una finca aliada en La Fortuna; quiénes son, qué ofrecen, para quién funciona.]', kicker: 'El Guía descubre', title: 'La red, de cerca' },
  { format: 'reel', background: '#1f5c46', note: '[REEL 9:16: de la necesidad a la solución. Una gira académica, del brief del profesor al día en campo.]', kicker: 'Así se diseñó', title: 'Del objetivo a la experiencia' },
  { format: 'photo', background: '#f3ead8', color: '#17362d', note: '[FOTO horizontal: estudiantes de colegio con una cocinera del Caribe Sur preparando pan bon.]', kicker: 'Educación', title: 'Aprender también pasa fuera del aula' },
  { format: 'reel', background: '#24473c', note: '[REEL 9:16: casi sin diálogo. Amanecer en el río, café, risas, agua. Solo sonido ambiente.]', kicker: 'Vívalo', title: 'Solo la experiencia' },
];

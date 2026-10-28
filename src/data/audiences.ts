export interface Audience {
  segment: string;
  word: string;
  description: string;
  cta: string;
  photoNote: string;
  photoBg: string;
  photoNoteColor: string;
  headBg: string;
  headColor: string;
  wordColor: string;
  headBorder: string;
  segmentWeight: number;
}

export const audiences: Audience[] = [
  { segment: 'Viajeros', word: 'Vivir', description: 'Viajes hechos a su ritmo, presupuesto e intereses, coordinados de principio a fin.', cta: 'Diseñen mi viaje', photoNote: '[FOTO: pareja de viajeros aprendiendo a hacer tortillas con una familia en San Carlos.]', photoBg: '#1f5c46', photoNoteColor: '#fff7e8', headBg: '#1f5c46', headColor: '#fff7e8', wordColor: '#e0a632', headBorder: 'rgba(255,247,232,.25)', segmentWeight: 600 },
  { segment: 'Locales', word: 'Descubrir', description: 'Escapadas, celebraciones y planes para ver su propio país con otros ojos.', cta: 'Quiero algo diferente', photoNote: '[FOTO: familia tica celebrando un cumpleaños en un río de la Zona Norte.]', photoBg: '#24473c', photoNoteColor: '#fff7e8', headBg: '#17362d', headColor: '#fff7e8', wordColor: '#e0a632', headBorder: 'rgba(255,247,232,.25)', segmentWeight: 600 },
  { segment: 'Empresas', word: 'Conectar', description: 'Integración, bienestar, reconocimiento o retiros, diseñados a partir del objetivo del equipo.', cta: 'Hablemos de su equipo', photoNote: '[FOTO: equipo resolviendo un reto en una finca, sin poses.]', photoBg: '#4f634c', photoNoteColor: '#fff7e8', headBg: '#667d63', headColor: '#fff7e8', wordColor: '#fff7e8', headBorder: 'rgba(255,247,232,.25)', segmentWeight: 700 },
  { segment: 'Educación', word: 'Aprender', description: 'Giras construidas desde el curso, la carrera y los objetivos de aprendizaje.', cta: 'Planear una gira', photoNote: '[FOTO: estudiantes universitarios tomando muestras con un biólogo en bosque nuboso.]', photoBg: '#c48e22', photoNoteColor: '#17362d', headBg: '#e0a632', headColor: '#17362d', wordColor: '#17362d', headBorder: 'rgba(23,54,45,.25)', segmentWeight: 600 },
];

export const segments = audiences.map((audience) => audience.segment);

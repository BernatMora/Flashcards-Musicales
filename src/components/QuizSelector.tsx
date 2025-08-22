import { QuestionGroup } from '../types/music';

// GRUPOS DE NÚMEROS ROMANOS → ACORDES
const progressionDirectGroups: QuestionGroup[] = [
  {
    id: 'basic-ii-v-i',
    name: 'ii-V-I Básico',
    description: 'Progresiones ii-V-I en todas las tonalidades mayores y menores',
    category: 'progression-direct',
    totalQuestions: 15,
    questions: [
      {
        id: 'ii-v-i-c-1',
        type: 'progression-direct',
        question: 'iim7 - V7 - Imaj7 en C',
        answer: 'Dm7 - G7 - Cmaj7',
        options: ['Dm7 - G7 - Cmaj7', 'Em7 - A7 - Dmaj7', 'Am7 - D7 - Gmaj7', 'Fm7 - Bb7 - Ebmaj7'],
        explanation: 'En la tonalidad de C mayor, el ii grado es Dm7, el V grado es G7, y el I grado es Cmaj7.',
        data: { key: 'C', romanNumerals: ['iim7', 'V7', 'Imaj7'] }
      },
      {
        id: 'ii-v-i-f-1',
        type: 'progression-direct',
        question: 'iim7 - V7 - Imaj7 en F',
        answer: 'Gm7 - C7 - Fmaj7',
        options: ['Gm7 - C7 - Fmaj7', 'Am7 - D7 - Gmaj7', 'Dm7 - G7 - Cmaj7', 'Bm7 - E7 - Amaj7'],
        explanation: 'En la tonalidad de F mayor, el ii grado es Gm7, el V grado es C7, y el I grado es Fmaj7.',
        data: { key: 'F', romanNumerals: ['iim7', 'V7', 'Imaj7'] }
      }
    ]
  }
];

// GRUPOS DE ACORDES → ANÁLISIS  
const progressionInverseGroups: QuestionGroup[] = [
  {
    id: 'identify-ii-v-i',
    name: 'Identificar ii-V-I',
    description: 'Identifica progresiones ii-V-I mayores y menores en diferentes tonalidades',
    category: 'progression-inverse',
    totalQuestions: 15,
    questions: [
      {
        id: 'identify-ii-v-i-c-1',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nDm7 - G7 - Cmaj7',
        answer: 'ii-V-I en C',
        options: ['ii-V-I en C', 'iii-VI-ii en F', 'vi-ii-V en Bb', 'i-IV-VII en Am'],
        explanation: 'Dm7 - G7 - Cmaj7 es una progresión ii-V-I en la tonalidad de C mayor.',
        data: { key: 'C', chords: ['Dm7', 'G7', 'Cmaj7'], romanNumerals: ['ii-V-I'] }
      }
    ]
  }
];

// GRUPOS DE ESCALAS Y MODOS
const scaleModeGroups: QuestionGroup[] = [
  {
    id: 'church-modes',
    name: 'Modos Eclesiásticos',
    description: 'Los 7 modos tradicionales derivados de la escala mayor',
    category: 'scale-mode',
    totalQuestions: 14,
    questions: [
      {
        id: 'mode-ionian-c-1',
        type: 'scale-mode',
        question: '¿Qué modo se usa sobre Cmaj7?',
        answer: 'C Jónico (Mayor)',
        options: ['C Jónico (Mayor)', 'C Dórico', 'C Lidio', 'C Mixolidio'],
        explanation: 'Sobre Cmaj7 se usa el modo C Jónico (escala mayor). Es el primer modo de la escala mayor.',
        data: { scale: 'C Ionian', chord: 'Cmaj7' }
      }
    ]
  }
];

// EXPORTAR TODOS LOS GRUPOS
export const questionGroups: QuestionGroup[] = [
  ...progressionDirectGroups,
  ...progressionInverseGroups,
  ...scaleModeGroups
];

// FUNCIÓN PARA OBTENER ESTADÍSTICAS
export function getCategoryStats() {
  const stats = {
    'progression-direct': { groups: 0, questions: 0 },
    'progression-inverse': { groups: 0, questions: 0 },
    'scale-mode': { groups: 0, questions: 0 }
  };

  questionGroups.forEach(group => {
    if (stats[group.category]) {
      stats[group.category].groups++;
      stats[group.category].questions += group.totalQuestions;
    }
  });

  return stats;
}

export default getCategoryStats
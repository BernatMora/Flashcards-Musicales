import { QuestionGroup } from '../types/music';

// GRUPOS DE NÚMEROS ROMANOS → ACORDES
const progressionDirectGroups: QuestionGroup[] = [
  {
    id: 'basic-ii-v-i',
    name: 'ii-V-I Básico',
    description: 'Progresiones ii-V-I en todas las tonalidades mayores y menores',
    category: 'progression-direct',
    totalQuestions: 5,
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
      },
      {
        id: 'ii-v-i-bb-1',
        type: 'progression-direct',
        question: 'iim7 - V7 - Imaj7 en Bb',
        answer: 'Cm7 - F7 - Bbmaj7',
        options: ['Cm7 - F7 - Bbmaj7', 'Dm7 - G7 - Cmaj7', 'Em7 - A7 - Dmaj7', 'Gm7 - C7 - Fmaj7'],
        explanation: 'En la tonalidad de Bb mayor, el ii grado es Cm7, el V grado es F7, y el I grado es Bbmaj7.',
        data: { key: 'Bb', romanNumerals: ['iim7', 'V7', 'Imaj7'] }
      },
      {
        id: 'ii-v-i-g-1',
        type: 'progression-direct',
        question: 'iim7 - V7 - Imaj7 en G',
        answer: 'Am7 - D7 - Gmaj7',
        options: ['Am7 - D7 - Gmaj7', 'Bm7 - E7 - Amaj7', 'Cm7 - F7 - Bbmaj7', 'Dm7 - G7 - Cmaj7'],
        explanation: 'En la tonalidad de G mayor, el ii grado es Am7, el V grado es D7, y el I grado es Gmaj7.',
        data: { key: 'G', romanNumerals: ['iim7', 'V7', 'Imaj7'] }
      },
      {
        id: 'ii-v-i-d-1',
        type: 'progression-direct',
        question: 'iim7 - V7 - Imaj7 en D',
        answer: 'Em7 - A7 - Dmaj7',
        options: ['Em7 - A7 - Dmaj7', 'F#m7 - B7 - Emaj7', 'Am7 - D7 - Gmaj7', 'Gm7 - C7 - Fmaj7'],
        explanation: 'En la tonalidad de D mayor, el ii grado es Em7, el V grado es A7, y el I grado es Dmaj7.',
        data: { key: 'D', romanNumerals: ['iim7', 'V7', 'Imaj7'] }
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
    totalQuestions: 5,
    questions: [
      {
        id: 'identify-ii-v-i-c-1',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nDm7 - G7 - Cmaj7',
        answer: 'ii-V-I en C',
        options: ['ii-V-I en C', 'iii-VI-ii en F', 'vi-ii-V en Bb', 'i-IV-VII en Am'],
        explanation: 'Dm7 - G7 - Cmaj7 es una progresión ii-V-I en la tonalidad de C mayor. Dm7 es el ii grado, G7 es el V grado, y Cmaj7 es el I grado.',
        data: { key: 'C', chords: ['Dm7', 'G7', 'Cmaj7'], romanNumerals: ['ii-V-I'] }
      },
      {
        id: 'identify-ii-v-i-f-1',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nGm7 - C7 - Fmaj7',
        answer: 'ii-V-I en F',
        options: ['ii-V-I en F', 'iii-VI-ii en Bb', 'vi-ii-V en Eb', 'i-IV-VII en Dm'],
        explanation: 'Gm7 - C7 - Fmaj7 es una progresión ii-V-I en la tonalidad de F mayor.',
        data: { key: 'F', chords: ['Gm7', 'C7', 'Fmaj7'], romanNumerals: ['ii-V-I'] }
      },
      {
        id: 'identify-ii-v-i-bb-1',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nCm7 - F7 - Bbmaj7',
        answer: 'ii-V-I en Bb',
        options: ['ii-V-I en Bb', 'iii-VI-ii en Eb', 'vi-ii-V en Ab', 'i-IV-VII en Gm'],
        explanation: 'Cm7 - F7 - Bbmaj7 es una progresión ii-V-I en la tonalidad de Bb mayor.',
        data: { key: 'Bb', chords: ['Cm7', 'F7', 'Bbmaj7'], romanNumerals: ['ii-V-I'] }
      },
      {
        id: 'identify-ii-v-i-g-1',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nAm7 - D7 - Gmaj7',
        answer: 'ii-V-I en G',
        options: ['ii-V-I en G', 'iii-VI-ii en C', 'vi-ii-V en F', 'i-IV-VII en Em'],
        explanation: 'Am7 - D7 - Gmaj7 es una progresión ii-V-I en la tonalidad de G mayor.',
        data: { key: 'G', chords: ['Am7', 'D7', 'Gmaj7'], romanNumerals: ['ii-V-I'] }
      },
      {
        id: 'identify-ii-v-i-d-1',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nEm7 - A7 - Dmaj7',
        answer: 'ii-V-I en D',
        options: ['ii-V-I en D', 'iii-VI-ii en G', 'vi-ii-V en C', 'i-IV-VII en Bm'],
        explanation: 'Em7 - A7 - Dmaj7 es una progresión ii-V-I en la tonalidad de D mayor.',
        data: { key: 'D', chords: ['Em7', 'A7', 'Dmaj7'], romanNumerals: ['ii-V-I'] }
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
    totalQuestions: 5,
    questions: [
      {
        id: 'mode-ionian-c-1',
        type: 'scale-mode',
        question: '¿Qué modo se usa sobre Cmaj7?',
        answer: 'C Jónico (Mayor)',
        options: ['C Jónico (Mayor)', 'C Dórico', 'C Lidio', 'C Mixolidio'],
        explanation: 'Sobre Cmaj7 se usa el modo C Jónico (escala mayor). Es el primer modo de la escala mayor.',
        data: { scale: 'C Ionian', chord: 'Cmaj7' }
      },
      {
        id: 'mode-dorian-d-1',
        type: 'scale-mode',
        question: '¿Qué modo se usa sobre Dm7?',
        answer: 'D Dórico',
        options: ['D Dórico', 'D Menor Natural', 'D Frigio', 'D Lidio'],
        explanation: 'Sobre Dm7 se usa el modo D Dórico. Es el segundo modo de la escala mayor de C.',
        data: { scale: 'D Dorian', chord: 'Dm7' }
      },
      {
        id: 'mode-phrygian-e-1',
        type: 'scale-mode',
        question: '¿Qué modo se usa sobre Em7?',
        answer: 'E Frigio',
        options: ['E Frigio', 'E Menor Natural', 'E Dórico', 'E Locrio'],
        explanation: 'Sobre Em7 se usa el modo E Frigio. Es el tercer modo de la escala mayor de C.',
        data: { scale: 'E Phrygian', chord: 'Em7' }
      },
      {
        id: 'mode-lydian-f-1',
        type: 'scale-mode',
        question: '¿Qué modo se usa sobre Fmaj7?',
        answer: 'F Lidio',
        options: ['F Lidio', 'F Mayor', 'F Mixolidio', 'F Dórico'],
        explanation: 'Sobre Fmaj7 se usa el modo F Lidio. Es el cuarto modo de la escala mayor de C.',
        data: { scale: 'F Lydian', chord: 'Fmaj7' }
      },
      {
        id: 'mode-mixolydian-g-1',
        type: 'scale-mode',
        question: '¿Qué modo se usa sobre G7?',
        answer: 'G Mixolidio',
        options: ['G Mixolidio', 'G Mayor', 'G Dórico', 'G Lidio'],
        explanation: 'Sobre G7 se usa el modo G Mixolidio. Es el quinto modo de la escala mayor de C.',
        data: { scale: 'G Mixolydian', chord: 'G7' }
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
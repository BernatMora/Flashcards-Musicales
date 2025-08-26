import { QuestionGroup } from '../types/music';

// Grupo básico de progresiones directas
const basicProgressionGroup: QuestionGroup = {
  id: 'basic-progressions',
  name: 'Progresiones Básicas',
  description: 'Convierte números romanos en acordes reales',
  category: 'progression-direct',
  totalQuestions: 3,
  questions: [
    {
      id: 'basic-1',
      type: 'progression-direct',
      question: 'ii-V-I en Do mayor',
      answer: 'Dm7 - G7 - Cmaj7',
      options: ['Dm7 - G7 - Cmaj7', 'Em7 - A7 - Dmaj7', 'Am7 - D7 - Gmaj7', 'Gm7 - C7 - Fmaj7'],
      explanation: 'En Do mayor: ii = Dm7, V = G7, I = Cmaj7',
      data: { key: 'C' }
    },
    {
      id: 'basic-2',
      type: 'progression-direct',
      question: 'I-vi-IV-V en Sol mayor',
      answer: 'G - Em - C - D',
      options: ['G - Em - C - D', 'C - Am - F - G', 'D - Bm - G - A', 'F - Dm - Bb - C'],
      explanation: 'En Sol mayor: I = G, vi = Em, IV = C, V = D',
      data: { key: 'G' }
    },
    {
      id: 'basic-3',
      type: 'progression-direct',
      question: 'vi-IV-I-V en Fa mayor',
      answer: 'Dm - Bb - F - C',
      options: ['Dm - Bb - F - C', 'Am - F - C - G', 'Em - C - G - D', 'Bm - G - D - A'],
      explanation: 'En Fa mayor: vi = Dm, IV = Bb, I = F, V = C',
      data: { key: 'F' }
    }
  ]
};

// Grupo básico de progresiones inversas
const inverseProgressionGroup: QuestionGroup = {
  id: 'inverse-progressions',
  name: 'Identificar Progresiones',
  description: 'Identifica la progresión a partir de los acordes',
  category: 'progression-inverse',
  totalQuestions: 3,
  questions: [
    {
      id: 'inverse-1',
      type: 'progression-inverse',
      question: 'Dm7 - G7 - Cmaj7',
      answer: 'ii-V-I en Do mayor',
      options: ['ii-V-I en Do mayor', 'vi-ii-V en Fa mayor', 'iii-VI-I en Bb mayor', 'i-IV-VII en Re menor'],
      explanation: 'Dm7-G7-Cmaj7 es el clásico ii-V-I en Do mayor',
      data: { key: 'C' }
    },
    {
      id: 'inverse-2',
      type: 'progression-inverse',
      question: 'Am - F - C - G',
      answer: 'vi-IV-I-V en Do mayor',
      options: ['vi-IV-I-V en Do mayor', 'i-bVI-bIII-bVII en La menor', 'ii-bVII-IV-I en Sol mayor', 'iii-I-V-ii en Fa mayor'],
      explanation: 'Am-F-C-G es la progresión vi-IV-I-V en Do mayor, muy común en pop',
      data: { key: 'C' }
    },
    {
      id: 'inverse-3',
      type: 'progression-inverse',
      question: 'G - Em - C - D',
      answer: 'I-vi-IV-V en Sol mayor',
      options: ['I-vi-IV-V en Sol mayor', 'V-iii-bVII-I en Do mayor', 'IV-ii-bVII-III en Re mayor', 'bVII-v-II-VI en La mayor'],
      explanation: 'G-Em-C-D es la progresión I-vi-IV-V en Sol mayor',
      data: { key: 'G' }
    }
  ]
};

// Grupo básico de escalas y modos
const scaleModeGroup: QuestionGroup = {
  id: 'scale-modes',
  name: 'Escalas y Modos',
  description: 'Relaciona escalas con acordes',
  category: 'scale-mode',
  totalQuestions: 3,
  questions: [
    {
      id: 'scale-1',
      type: 'scale-mode',
      question: '¿Qué escala funciona sobre Dm7?',
      answer: 'Re dórico',
      options: ['Re dórico', 'Re menor natural', 'Re menor armónica', 'Re frigio'],
      explanation: 'Re dórico es perfecto para Dm7, especialmente en contextos modales',
      data: { chord: 'Dm7' }
    },
    {
      id: 'scale-2',
      type: 'scale-mode',
      question: '¿Qué modo se usa sobre G7?',
      answer: 'Sol mixolidio',
      options: ['Sol mixolidio', 'Sol mayor', 'Sol dórico', 'Sol lidio'],
      explanation: 'Sol mixolidio es ideal para G7, especialmente en progresiones ii-V-I',
      data: { chord: 'G7' }
    },
    {
      id: 'scale-3',
      type: 'scale-mode',
      question: '¿Qué modo evita notas evitadas en Fmaj7?',
      answer: 'Fa lidio',
      options: ['Fa lidio', 'Fa jónico', 'Fa mixolidio', 'Fa dórico'],
      explanation: 'Fa lidio evita el Bb (nota evitada) usando Si natural',
      data: { chord: 'Fmaj7' }
    }
  ]
};

// Exportar todos los grupos
export const questionGroups: QuestionGroup[] = [
  basicProgressionGroup,
  inverseProgressionGroup,
  scaleModeGroup
];
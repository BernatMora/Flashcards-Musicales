import { QuestionGroup, FlashCard } from '../types/music';
import { progressions, scales } from './musicData';

// Función para generar opciones incorrectas
function generateWrongOptions(correctAnswer: string, allOptions: string[], count: number = 2): string[] {
  const available = allOptions.filter(opt => opt !== correctAnswer);
  const wrong: string[] = [];
  
  while (wrong.length < count && available.length > 0) {
    const randomIndex = Math.floor(Math.random() * available.length);
    wrong.push(available[randomIndex]);
    available.splice(randomIndex, 1);
  }
  
  return wrong;
}

// Función para mezclar opciones
function shuffleOptions(correct: string, wrong: string[]): string[] {
  const all = [correct, ...wrong];
  for (let i = all.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [all[i], all[j]] = [all[j], all[i]];
  }
  return all;
}

// GRUPOS DE PROGRESIONES DIRECTAS (Números Romanos → Acordes)
const progressionDirectGroups: QuestionGroup[] = [
  {
    id: 'ii-V-I-basic',
    name: 'ii-V-I Básico',
    description: 'Progresiones ii-V-I en tonalidades mayores principales',
    category: 'progression-direct',
    totalQuestions: 15,
    questions: [
      // C, F, G, Bb, D, A, E, Ab, Db, Gb, B, Eb, F#, C#, G#
      ...['C', 'F', 'G', 'Bb', 'D', 'A', 'E', 'Ab', 'Db', 'Gb', 'B', 'Eb', 'F#', 'C#', 'G#'].slice(0, 15).map((key, index) => {
        const prog = progressions.find(p => p.key === key && p.name.includes('ii-V-I'));
        if (!prog) return null;
        
        const allAnswers = progressions.filter(p => p.name.includes('ii-V-I')).map(p => p.chords.join(' - '));
        const wrongOptions = generateWrongOptions(prog.chords.join(' - '), allAnswers);
        const options = shuffleOptions(prog.chords.join(' - '), wrongOptions);
        
        return {
          id: `ii-V-I-${key}-${index}`,
          type: 'progression-direct' as const,
          question: `${prog.romanNumerals.join('-')} en ${key}`,
          answer: prog.chords.join(' - '),
          options,
          explanation: `En la tonalidad de ${key}, la progresión ii-V-I corresponde a los acordes ${prog.chords.join(' - ')}. Esta es la progresión más importante del jazz, donde ii es la subdominante menor, V es la dominante y I es la tónica.`,
          data: prog
        };
      }).filter(Boolean) as FlashCard[]
    ]
  },
  
  {
    id: 'I-vi-IV-V-group',
    name: 'I-vi-IV-V (Círculo de Quintas)',
    description: 'Progresión clásica del círculo de quintas en diferentes tonalidades',
    category: 'progression-direct',
    totalQuestions: 12,
    questions: [
      ...['C', 'G', 'F', 'D', 'A', 'E', 'B', 'Bb', 'Eb', 'Ab', 'Db', 'Gb'].map((key, index) => {
        const chords = {
          'C': ['Cmaj7', 'Am7', 'Fmaj7', 'G7'],
          'G': ['Gmaj7', 'Em7', 'Cmaj7', 'D7'],
          'F': ['Fmaj7', 'Dm7', 'Bbmaj7', 'C7'],
          'D': ['Dmaj7', 'Bm7', 'Gmaj7', 'A7'],
          'A': ['Amaj7', 'F#m7', 'Dmaj7', 'E7'],
          'E': ['Emaj7', 'C#m7', 'Amaj7', 'B7'],
          'B': ['Bmaj7', 'G#m7', 'Emaj7', 'F#7'],
          'Bb': ['Bbmaj7', 'Gm7', 'Ebmaj7', 'F7'],
          'Eb': ['Ebmaj7', 'Cm7', 'Abmaj7', 'Bb7'],
          'Ab': ['Abmaj7', 'Fm7', 'Dbmaj7', 'Eb7'],
          'Db': ['Dbmaj7', 'Bbm7', 'Gbmaj7', 'Ab7'],
          'Gb': ['Gbmaj7', 'Ebm7', 'Bmaj7', 'Db7']
        }[key] || ['Cmaj7', 'Am7', 'Fmaj7', 'G7'];
        
        const allAnswers = Object.values({
          'C': ['Cmaj7', 'Am7', 'Fmaj7', 'G7'],
          'G': ['Gmaj7', 'Em7', 'Cmaj7', 'D7'],
          'F': ['Fmaj7', 'Dm7', 'Bbmaj7', 'C7'],
          'D': ['Dmaj7', 'Bm7', 'Gmaj7', 'A7']
        }).map(c => c.join(' - '));
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `I-vi-IV-V-${key}-${index}`,
          type: 'progression-direct' as const,
          question: `I-vi-IV-V en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `En ${key}, I-vi-IV-V son ${chords.join(' - ')}. Esta progresión sigue el círculo de quintas descendente: I (tónica) → vi (relativo menor) → IV (subdominante) → V (dominante). Es muy común en pop, rock y jazz.`,
          data: { key, chords, romanNumerals: ['I', 'vi', 'IV', 'V'] }
        };
      })
    ]
  },

  {
    id: 'secondary-dominants',
    name: 'Dominantes Secundarios',
    description: 'Progresiones con dominantes secundarios V7/x',
    category: 'progression-direct',
    totalQuestions: 15,
    questions: [
      // V7/ii en diferentes tonalidades
      ...['C', 'F', 'G', 'Bb', 'D'].map((key, index) => {
        const chords = {
          'C': ['Cmaj7', 'A7', 'Dm7', 'G7'],
          'F': ['Fmaj7', 'D7', 'Gm7', 'C7'],
          'G': ['Gmaj7', 'E7', 'Am7', 'D7'],
          'Bb': ['Bbmaj7', 'G7', 'Cm7', 'F7'],
          'D': ['Dmaj7', 'B7', 'Em7', 'A7']
        }[key] || ['Cmaj7', 'A7', 'Dm7', 'G7'];
        
        const allAnswers = [
          'Cmaj7 - A7 - Dm7 - G7',
          'Fmaj7 - D7 - Gm7 - C7',
          'Gmaj7 - E7 - Am7 - D7',
          'Dm7 - G7 - Em7 - A7',
          'Am7 - D7 - Gmaj7 - C7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `V7-ii-${key}-${index}`,
          type: 'progression-direct' as const,
          question: `I-V7/ii-ii-V en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `En ${key}: I-V7/ii-ii-V son ${chords.join(' - ')}. El segundo acorde es un dominante secundario (V7/ii) que resuelve al ii grado. Esto crea más tensión y movimiento armónico que usar simplemente vi7.`,
          data: { key, chords, romanNumerals: ['I', 'V7/ii', 'ii', 'V'] }
        };
      }),
      
      // V7/vi en diferentes tonalidades
      ...['C', 'F', 'G', 'Bb', 'D'].map((key, index) => {
        const chords = {
          'C': ['Cmaj7', 'E7', 'Am7', 'Dm7'],
          'F': ['Fmaj7', 'A7', 'Dm7', 'Gm7'],
          'G': ['Gmaj7', 'B7', 'Em7', 'Am7'],
          'Bb': ['Bbmaj7', 'D7', 'Gm7', 'Cm7'],
          'D': ['Dmaj7', 'F#7', 'Bm7', 'Em7']
        }[key] || ['Cmaj7', 'E7', 'Am7', 'Dm7'];
        
        const allAnswers = [
          'Cmaj7 - E7 - Am7 - Dm7',
          'Fmaj7 - A7 - Dm7 - Gm7',
          'Gmaj7 - B7 - Em7 - Am7',
          'Bbmaj7 - D7 - Gm7 - Cm7',
          'Dmaj7 - F#7 - Bm7 - Em7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `V7-vi-${key}-${index + 5}`,
          type: 'progression-direct' as const,
          question: `I-V7/vi-vi-ii en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `En ${key}: I-V7/vi-vi-ii son ${chords.join(' - ')}. El E7 es V7/vi (dominante secundario del vi grado) que resuelve a Am7. Esto toniciza temporalmente el vi grado, creando una modulación momentánea.`,
          data: { key, chords, romanNumerals: ['I', 'V7/vi', 'vi', 'ii'] }
        };
      }),
      
      // Círculo de quintas con dominantes secundarios
      ...['C', 'F', 'G', 'Bb', 'D'].map((key, index) => {
        const chords = {
          'C': ['Cmaj7', 'B7', 'Em7', 'A7', 'Dm7', 'G7'],
          'F': ['Fmaj7', 'E7', 'Am7', 'D7', 'Gm7', 'C7'],
          'G': ['Gmaj7', 'F#7', 'Bm7', 'E7', 'Am7', 'D7'],
          'Bb': ['Bbmaj7', 'A7', 'Dm7', 'G7', 'Cm7', 'F7'],
          'D': ['Dmaj7', 'C#7', 'F#m7', 'B7', 'Em7', 'A7']
        }[key] || ['Cmaj7', 'B7', 'Em7', 'A7', 'Dm7', 'G7'];
        
        const allAnswers = [
          'Cmaj7 - B7 - Em7 - A7 - Dm7 - G7',
          'Fmaj7 - E7 - Am7 - D7 - Gm7 - C7',
          'Gmaj7 - F#7 - Bm7 - E7 - Am7 - D7',
          'Bbmaj7 - A7 - Dm7 - G7 - Cm7 - F7',
          'Dmaj7 - C#7 - F#m7 - B7 - Em7 - A7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `circle-fifths-${key}-${index + 10}`,
          type: 'progression-direct' as const,
          question: `Círculo de quintas con dominantes secundarios en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `En ${key}: ${chords.join(' - ')}. Esta progresión usa el círculo de quintas con dominantes secundarios: I-V7/iii-iii-V7/vi-vi-V7/ii-ii-V. Cada dominante secundario toniciza temporalmente el acorde siguiente, creando un movimiento armónico muy fluido.`,
          data: { key, chords, romanNumerals: ['I', 'V7/iii', 'iii', 'V7/vi', 'vi', 'V7/ii', 'ii', 'V'] }
        };
      })
    ]
  }
];

// GRUPOS DE PROGRESIONES INVERSAS (Acordes → Análisis)
const progressionInverseGroups: QuestionGroup[] = [
  {
    id: 'identify-ii-V-I',
    name: 'Identificar ii-V-I',
    description: 'Identifica progresiones ii-V-I y sus tonalidades',
    category: 'progression-inverse',
    totalQuestions: 15,
    questions: [
      ...['C', 'F', 'G', 'Bb', 'D', 'A', 'E', 'Ab', 'Db', 'Gb', 'B', 'Eb', 'F#', 'C#', 'G#'].slice(0, 15).map((key, index) => {
        const chords = {
          'C': ['Dm7', 'G7', 'Cmaj7'],
          'F': ['Gm7', 'C7', 'Fmaj7'],
          'G': ['Am7', 'D7', 'Gmaj7'],
          'Bb': ['Cm7', 'F7', 'Bbmaj7'],
          'D': ['Em7', 'A7', 'Dmaj7'],
          'A': ['Bm7', 'E7', 'Amaj7'],
          'E': ['F#m7', 'B7', 'Emaj7'],
          'Ab': ['Bbm7', 'Eb7', 'Abmaj7'],
          'Db': ['Ebm7', 'Ab7', 'Dbmaj7'],
          'Gb': ['Abm7', 'Db7', 'Gbmaj7'],
          'B': ['C#m7', 'F#7', 'Bmaj7'],
          'Eb': ['Fm7', 'Bb7', 'Ebmaj7'],
          'F#': ['G#m7', 'C#7', 'F#maj7'],
          'C#': ['D#m7', 'G#7', 'C#maj7'],
          'G#': ['A#m7', 'D#7', 'G#maj7']
        }[key] || ['Dm7', 'G7', 'Cmaj7'];
        
        const correctAnswer = `ii-V-I en ${key}`;
        const allAnswers = [
          'ii-V-I en C', 'ii-V-I en F', 'ii-V-I en G', 'ii-V-I en Bb',
          'I-vi-IV-V en C', 'I-vi-IV-V en F', 'vi-ii-V-I en C',
          'iii-VI-ii-V en G', 'I-VI-ii-V en F'
        ];
        
        const wrongOptions = generateWrongOptions(correctAnswer, allAnswers);
        const options = shuffleOptions(correctAnswer, wrongOptions);
        
        return {
          id: `identify-ii-V-I-${key}-${index}`,
          type: 'progression-inverse' as const,
          question: `¿Qué progresión representan estos acordes?\n${chords.join(' - ')}`,
          answer: correctAnswer,
          options,
          explanation: `Los acordes ${chords.join(' - ')} forman una progresión ii-V-I en ${key}. Esta es la progresión fundamental del jazz: ${chords[0]} (ii grado, subdominante menor) → ${chords[1]} (V grado, dominante) → ${chords[2]} (I grado, tónica). El movimiento de fundamentales es por quintas descendentes.`,
          data: { key, chords, romanNumerals: ['ii', 'V', 'I'] }
        };
      })
    ]
  },

  {
    id: 'identify-key-centers',
    name: 'Identificar Centros Tonales',
    description: 'Identifica la tonalidad de progresiones complejas',
    category: 'progression-inverse',
    totalQuestions: 12,
    questions: [
      ...['C', 'F', 'G', 'Bb', 'D', 'A', 'E', 'Ab', 'Db', 'Gb', 'B', 'Eb'].map((key, index) => {
        const chords = {
          'C': ['Cmaj7', 'A7', 'Dm7', 'G7', 'Em7', 'Am7'],
          'F': ['Fmaj7', 'D7', 'Gm7', 'C7', 'Am7', 'Dm7'],
          'G': ['Gmaj7', 'E7', 'Am7', 'D7', 'Bm7', 'Em7'],
          'Bb': ['Bbmaj7', 'G7', 'Cm7', 'F7', 'Dm7', 'Gm7'],
          'D': ['Dmaj7', 'B7', 'Em7', 'A7', 'F#m7', 'Bm7'],
          'A': ['Amaj7', 'F#7', 'Bm7', 'E7', 'C#m7', 'F#m7'],
          'E': ['Emaj7', 'C#7', 'F#m7', 'B7', 'G#m7', 'C#m7'],
          'Ab': ['Abmaj7', 'F7', 'Bbm7', 'Eb7', 'Cm7', 'Fm7'],
          'Db': ['Dbmaj7', 'Bb7', 'Ebm7', 'Ab7', 'Fm7', 'Bbm7'],
          'Gb': ['Gbmaj7', 'Eb7', 'Abm7', 'Db7', 'Bbm7', 'Ebm7'],
          'B': ['Bmaj7', 'G#7', 'C#m7', 'F#7', 'D#m7', 'G#m7'],
          'Eb': ['Ebmaj7', 'C7', 'Fm7', 'Bb7', 'Gm7', 'Cm7']
        }[key] || ['Cmaj7', 'A7', 'Dm7', 'G7', 'Em7', 'Am7'];
        
        const allKeys = ['C', 'F', 'G', 'Bb', 'D', 'A', 'E', 'Ab', 'Db', 'Gb', 'B', 'Eb'];
        const wrongOptions = generateWrongOptions(key, allKeys);
        const options = shuffleOptions(key, wrongOptions);
        
        return {
          id: `identify-key-${key}-${index}`,
          type: 'progression-inverse' as const,
          question: `¿En qué tonalidad está esta progresión?\n${chords.join(' - ')}`,
          answer: key,
          options,
          explanation: `Esta progresión está en ${key}. Análisis: ${chords[0]} (I, tónica) → ${chords[1]} (V7/ii, dominante secundario) → ${chords[2]} (ii, subdominante menor) → ${chords[3]} (V, dominante) → ${chords[4]} (iii, mediante) → ${chords[5]} (vi, relativo menor). El centro tonal se establece por el acorde de tónica ${chords[0]} y se confirma con la cadencia ii-V.`,
          data: { key, chords, romanNumerals: ['I', 'V7/ii', 'ii', 'V', 'iii', 'vi'] }
        };
      })
    ]
  }
];

// MÁS GRUPOS DE PROGRESIONES INVERSAS
const moreProgressionInverseGroups: QuestionGroup[] = [
  {
    id: 'identify-blues-progressions',
    name: 'Identificar Progresiones de Blues',
    description: 'Reconocer diferentes tipos de blues y sus variaciones',
    category: 'progression-inverse',
    totalQuestions: 12,
    questions: [
      {
        id: 'identify-traditional-blues-c',
        type: 'progression-inverse',
        question: '¿Qué tipo de progresión representan estos acordes?\nC7 - F7 - C7 - G7 - F7 - C7',
        answer: 'Blues tradicional en C',
        options: shuffleOptions('Blues tradicional en C', ['Jazz blues en C', 'Rock progression en C']),
        explanation: 'C7-F7-C7-G7-F7-C7 es un blues tradicional en C. Estructura típica: I7-IV7-I7-V7-IV7-I7. Todos los acordes son dominantes, característica fundamental del blues que crea la tensión y el color típico del género.',
        data: { key: 'C', style: 'traditional-blues' }
      },
      {
        id: 'identify-jazz-blues-f',
        type: 'progression-inverse',
        question: '¿Qué tipo de progresión representan estos acordes?\nF7 - D7 - Gm7 - C7 - Bb7 - F7',
        answer: 'Jazz blues en F',
        options: shuffleOptions('Jazz blues en F', ['Blues tradicional en F', 'ii-V-I en F']),
        explanation: 'F7-D7-Gm7-C7-Bb7-F7 es un jazz blues en F. Incorpora D7 (VI7 = V7/ii - dominante secundario) y Gm7-C7 (ii-V), añadiendo sofisticación armónica al blues tradicional.',
        data: { key: 'F', style: 'jazz-blues' }
      },
      {
        id: 'identify-minor-blues-am',
        type: 'progression-inverse',
        question: '¿Qué tipo de progresión representan estos acordes?\nAm7 - Dm7 - Am7 - E7',
        answer: 'Blues menor en Am',
        options: shuffleOptions('Blues menor en Am', ['ii-V-I en C', 'Progresión modal']),
        explanation: 'Am7-Dm7-Am7-E7 es un blues menor en Am. Estructura im7-ivm7-im7-V7. El contraste entre acordes menores (Am7, Dm7) y el dominante mayor (E7) crea la tensión característica del blues menor.',
        data: { key: 'Am', style: 'minor-blues' }
      },
      {
        id: 'identify-chicago-blues-g',
        type: 'progression-inverse',
        question: '¿Qué estilo de blues representan estos acordes?\nG7 - C7 - G7 - E7 - Am7 - D7',
        answer: 'Chicago blues en G',
        options: shuffleOptions('Chicago blues en G', ['Blues tradicional en G', 'Jazz blues en G']),
        explanation: 'G7-C7-G7-E7-Am7-D7 es Chicago blues en G. Incorpora E7 (VI7 = V7/ii) y Am7-D7 (ii-V), combinando elementos del blues tradicional con influencias jazz. Típico del estilo Chicago con instrumentos eléctricos.',
        data: { key: 'G', style: 'chicago-blues' }
      },
      {
        id: 'identify-bebop-blues-bb',
        type: 'progression-inverse',
        question: '¿Qué estilo avanzado representan estos acordes?\nBb7 - G7 - Cm7 - F7 - Dm7 - G7 - Cm7 - F7',
        answer: 'Bebop blues en Bb',
        options: shuffleOptions('Bebop blues en Bb', ['Jazz blues en Bb', 'Blues tradicional en Bb']),
        explanation: 'Esta progresión es bebop blues en Bb. Incorpora múltiples ii-V-I (Cm7-F7), dominantes secundarios (G7) y movimiento armónico constante. El Dm7 (iiim7) añade color típico del bebop.',
        data: { key: 'Bb', style: 'bebop-blues' }
      },
      {
        id: 'identify-country-blues-e',
        type: 'progression-inverse',
        question: '¿Qué estilo de blues representan estos acordes?\nE - A - E - B - A - E',
        answer: 'Country blues en E',
        options: shuffleOptions('Country blues en E', ['Blues tradicional en E', 'Rock progression en E']),
        explanation: 'E-A-E-B-A-E es country blues en E. Usa tríadas simples (E, A, B) en lugar de acordes dominantes (E7, A7, B7). Crea un sonido más directo y folk, típico del country blues y música americana tradicional.',
        data: { key: 'E', style: 'country-blues' }
      },
      {
        id: 'identify-modern-blues-c',
        type: 'progression-inverse',
        question: '¿Qué estilo moderno representan estos acordes?\nC7 - Db7 - F7 - Gb7 - C7 - A7 - Dm7 - Db7',
        answer: 'Blues moderno con sustituciones en C',
        options: shuffleOptions('Blues moderno con sustituciones en C', ['Jazz blues en C', 'Blues tradicional en C']),
        explanation: 'Esta progresión es blues moderno en C con sustituciones tritónicas: Db7 (bII7 = sustituto de G7), Gb7 (bV7 = sustituto de C7). Las sustituciones crean movimiento cromático y sofisticación típica del jazz moderno.',
        data: { key: 'C', style: 'modern-blues' }
      },
      {
        id: 'identify-swing-blues-f',
        type: 'progression-inverse',
        question: '¿Qué estilo de la era swing representan estos acordes?\nF7 - Bb7 - Bo7 - F7 - Gm7 - C7',
        answer: 'Swing blues en F',
        options: shuffleOptions('Swing blues en F', ['Jazz blues en F', 'Bebop blues en F']),
        explanation: 'F7-Bb7-Bo7-F7-Gm7-C7 es swing blues en F. Incorpora Bo7 (#IVo7 - disminuido cromático) que conecta Bb7 con F7, y ii-V (Gm7-C7). Típico del swing de los años 30-40, combina blues con sofisticación big band.',
        data: { key: 'F', style: 'swing-blues' }
      },
      {
        id: 'identify-texas-blues-a',
        type: 'progression-inverse',
        question: '¿Qué estilo regional representan estos acordes?\nA7 - D7 - A7 - E7 - E7 - A7 - A7',
        answer: 'Texas blues en A',
        options: shuffleOptions('Texas blues en A', ['Blues tradicional en A', 'Shuffle blues en A']),
        explanation: 'A7-D7-A7-E7-E7-A7-A7 es Texas blues en A. Se caracteriza por V7-V7 en compases 9-10 (en lugar de V7-IV7) y final I7-I7 sin turnaround. Crea una sensación más reposada, típico del estilo Texas con guitarras eléctricas.',
        data: { key: 'A', style: 'texas-blues' }
      },
      {
        id: 'identify-minor-blues-extended-dm',
        type: 'progression-inverse',
        question: '¿Qué tipo de blues menor representan estos acordes?\nDm7 - Gm7 - Dm7 - A7 - Gm7 - Dm7',
        answer: 'Blues menor extendido en Dm',
        options: shuffleOptions('Blues menor extendido en Dm', ['ii-V-I en F', 'Progresión modal en Dm']),
        explanation: 'Dm7-Gm7-Dm7-A7-Gm7-Dm7 es blues menor extendido en Dm. Mantiene la estructura de 12 compases pero con acordes menores: im7-ivm7-im7-V7-ivm7-im7. Más melancólico que el blues mayor, común en jazz latino y bossa nova.',
        data: { key: 'Dm', style: 'minor-blues-extended' }
      },
      {
        id: 'identify-modal-minor-blues-em',
        type: 'progression-inverse',
        question: '¿Qué estilo modal representan estos acordes?\nEm7 - D7 - A7 - Em7',
        answer: 'Blues menor modal en Em',
        options: shuffleOptions('Blues menor modal en Em', ['Blues menor tradicional', 'Progresión dórica']),
        explanation: 'Em7-D7-A7-Em7 es blues menor modal en Em. Combina elementos del blues (Em7-A7) con modalidad (D7 = bVII7). El D7 es prestado del modo menor, creando un sonido más moderno y abierto que el blues menor tradicional.',
        data: { key: 'Em', style: 'modal-minor-blues' }
      },
      {
        id: 'identify-jazz-minor-blues-am',
        type: 'progression-inverse',
        question: '¿Qué estilo sofisticado representan estos acordes?\nAm(maj7) - Dm7 - E7alt - Am(maj7)',
        answer: 'Jazz blues menor en Am',
        options: shuffleOptions('Jazz blues menor en Am', ['Blues menor tradicional', 'ii-V-I menor']),
        explanation: 'Am(maj7)-Dm7-E7alt-Am(maj7) es jazz blues menor en Am. Usa Am(maj7) (menor con séptima mayor) y E7alt (dominante alterado). La sofisticación armónica con extensiones y alteraciones es típica del jazz moderno y contemporáneo.',
        data: { key: 'Am', style: 'jazz-minor-blues' }
      }
    ]
  },

  {
    id: 'identify-modal-progressions',
    name: 'Identificar Progresiones Modales',
    description: 'Reconocer modos y sus progresiones características',
    category: 'progression-inverse',
    totalQuestions: 12,
    questions: [
      {
        id: 'identify-dorian-vamp-d',
        type: 'progression-inverse',
        question: '¿Qué modo representan estos acordes?\nDm7 - Gmaj7 - Dm7 - Gmaj7',
        answer: 'D Dórico',
        options: shuffleOptions('D Dórico', ['D Menor Natural', 'G Mayor']),
        explanation: 'Dm7-Gmaj7 es un vamp dórico en D. El Gmaj7 (IVmaj7) es la característica distintiva del dórico, diferenciándolo del menor natural que tendría Gm7. El IV mayor es la nota característica del modo dórico.',
        data: { mode: 'D Dorian', type: 'modal-vamp' }
      },
      {
        id: 'identify-mixolydian-vamp-g',
        type: 'progression-inverse',
        question: '¿Qué modo representan estos acordes?\nG7 - Fmaj7 - G7 - Fmaj7',
        answer: 'G Mixolidio',
        options: shuffleOptions('G Mixolidio', ['G Mayor', 'F Mayor']),
        explanation: 'G7-Fmaj7 es un vamp mixolidio en G. El Fmaj7 (bVIImaj7) es la característica distintiva del mixolidio. El bVII mayor es la nota característica que diferencia el mixolidio del mayor natural.',
        data: { mode: 'G Mixolydian', type: 'modal-vamp' }
      },
      {
        id: 'identify-phrygian-vamp-e',
        type: 'progression-inverse',
        question: '¿Qué modo representan estos acordes?\nEm7 - Fmaj7 - Em7 - Fmaj7',
        answer: 'E Frigio',
        options: shuffleOptions('E Frigio', ['E Menor Natural', 'F Mayor']),
        explanation: 'Em7-Fmaj7 es un vamp frigio en E. El Fmaj7 (bIImaj7) es la característica distintiva del frigio. El semitono E-F crea la tensión típica frigia, común en música española y flamenca.',
        data: { mode: 'E Phrygian', type: 'modal-vamp' }
      },
      {
        id: 'identify-lydian-vamp-f',
        type: 'progression-inverse',
        question: '¿Qué modo representan estos acordes?\nFmaj7 - Gmaj7 - Fmaj7 - Gmaj7',
        answer: 'F Lidio',
        options: shuffleOptions('F Lidio', ['F Mayor', 'G Mayor']),
        explanation: 'Fmaj7-Gmaj7 es un vamp lidio en F. El Gmaj7 (IImaj7) es característico del lidio. El II mayor surge de la cuarta aumentada (#4) característica del modo lidio, creando un sonido "flotante".',
        data: { mode: 'F Lydian', type: 'modal-vamp' }
      },
      {
        id: 'identify-aeolian-modal-fm',
        type: 'progression-inverse',
        question: '¿Qué modo representan estos acordes?\nF#m7 - Emaj7 - Dmaj7 - Emaj7',
        answer: 'F# Eólico (Menor Natural)',
        options: shuffleOptions('F# Eólico (Menor Natural)', ['F# Dórico', 'E Mayor']),
        explanation: 'F#m7-Emaj7-Dmaj7-Emaj7 es eólico modal en F#m. Evita el V mayor (C#7) para mantener el carácter modal. El bVI (Dmaj7) y bVII (Emaj7) son característicos del menor natural, creando sonoridad medieval/folk.',
        data: { mode: 'F# Aeolian', type: 'modal-progression' }
      },
      {
        id: 'identify-dorian-extended-a',
        type: 'progression-inverse',
        question: '¿Qué modo extendido representan estos acordes?\nAm7 - Dmaj7 - Gmaj7 - Am7',
        answer: 'A Dórico extendido',
        options: shuffleOptions('A Dórico extendido', ['A Menor Natural', 'D Mayor']),
        explanation: 'Am7-Dmaj7-Gmaj7-Am7 es dórico extendido en A. Incorpora tanto el IV mayor (Dmaj7 - característica dórica) como el bVII mayor (Gmaj7), creando un sonido modal rico que combina elementos dóricos y eólicos.',
        data: { mode: 'A Dorian Extended', type: 'modal-progression' }
      },
      {
        id: 'identify-mixolydian-extended-c',
        type: 'progression-inverse',
        question: '¿Qué modo extendido representan estos acordes?\nC7 - Bbmaj7 - Fmaj7 - C7',
        answer: 'C Mixolidio extendido',
        options: shuffleOptions('C Mixolidio extendido', ['C Mayor', 'Bb Mayor']),
        explanation: 'C7-Bbmaj7-Fmaj7-C7 es mixolidio extendido en C. Combina la séptima menor característica (Bb = bVII) con el IV mayor (F), creando un sonido que mezcla elementos del mayor y del dominante.',
        data: { mode: 'C Mixolydian Extended', type: 'modal-progression' }
      },
      {
        id: 'identify-phrygian-flamenco-a',
        type: 'progression-inverse',
        question: '¿Qué estilo modal representan estos acordes?\nAm - Bb - C - Bb',
        answer: 'A Frigio (Flamenco)',
        options: shuffleOptions('A Frigio (Flamenco)', ['A Menor Natural', 'Bb Mayor']),
        explanation: 'Am-Bb-C-Bb es frigio flamenco en A. El movimiento bII-bIII-bII (Bb-C-Bb) con el semitono característico A-Bb crea la cadencia frigia fundamental en flamenco y música española.',
        data: { mode: 'A Phrygian', style: 'flamenco' }
      },
      {
        id: 'identify-dorian-rock-e',
        type: 'progression-inverse',
        question: '¿Qué modo rock representan estos acordes?\nEm7 - D7 - Amaj7 - Em7',
        answer: 'E Dórico (Rock)',
        options: shuffleOptions('E Dórico (Rock)', ['E Menor Natural', 'A Mayor']),
        explanation: 'Em7-D7-Amaj7-Em7 es dórico rock en E. Combina el IV mayor dórico (Amaj7) con el bVII del menor natural (D7). Esta hibridación modal es común en rock progresivo, creando sonoridad modal con movimiento dinámico.',
        data: { mode: 'E Dorian', style: 'rock' }
      },
      {
        id: 'identify-mixolydian-funk-a',
        type: 'progression-inverse',
        question: '¿Qué modo funk representan estos acordes?\nA7 - G7 - A7 - G7',
        answer: 'A Mixolidio (Funk)',
        options: shuffleOptions('A Mixolidio (Funk)', ['A Mayor', 'G Mayor']),
        explanation: 'A7-G7-A7-G7 es mixolidio funk en A. El movimiento I7-bVII7 es fundamental en funk. Ambos acordes dominantes crean tensión constante, típico del funk de James Brown y Parliament-Funkadelic.',
        data: { mode: 'A Mixolydian', style: 'funk' }
      },
      {
        id: 'identify-lydian-jazz-bb',
        type: 'progression-inverse',
        question: '¿Qué modo jazz representan estos acordes?\nBbmaj7#11 - Cmaj7 - Bbmaj7#11 - Cmaj7',
        answer: 'Bb Lidio (Jazz)',
        options: shuffleOptions('Bb Lidio (Jazz)', ['Bb Mayor', 'C Mayor']),
        explanation: 'Bbmaj7#11-Cmaj7 es lidio jazz en Bb. El #11 (E natural) es la característica del lidio. Usado en jazz modal y música de Bill Evans, creando un sonido "flotante" y sofisticado típico del jazz moderno.',
        data: { mode: 'Bb Lydian', style: 'jazz' }
      },
      {
        id: 'identify-mixolydian-blues-d',
        type: 'progression-inverse',
        question: '¿Qué modo blues representan estos acordes?\nD7 - G7 - C7 - D7',
        answer: 'D Mixolidio (Blues)',
        options: shuffleOptions('D Mixolidio (Blues)', ['D Mayor', 'Blues tradicional en D']),
        explanation: 'D7-G7-C7-D7 es mixolidio blues en D. Combina elementos del blues (I7-IV7) con la característica mixolidia (bVII7 = C7). Común en rock sureño y blues-rock, más modal que el blues tradicional.',
        data: { mode: 'D Mixolydian', style: 'blues' }
      }
    ]
  },

  {
    id: 'identify-rock-pop-progressions',
    name: 'Identificar Progresiones Rock/Pop',
    description: 'Reconocer progresiones populares en rock y pop',
    category: 'progression-inverse',
    totalQuestions: 10,
    questions: [
      {
        id: 'identify-vi-IV-I-V-C',
        type: 'progression-inverse',
        question: '¿Qué progresión pop representan estos acordes?\nAm - F - C - G',
        answer: 'vi-IV-I-V en C (Pop Ballad)',
        options: shuffleOptions('vi-IV-I-V en C (Pop Ballad)', ['I-V-vi-IV en C', 'ii-V-I en C']),
        explanation: 'Am-F-C-G es vi-IV-I-V en C, conocida como "pop ballad progression". Crea un arco emocional desde la melancolía (vi) hacia la resolución (I-V). Extremadamente popular en baladas pop desde los años 50.',
        data: { key: 'C', style: 'pop-ballad' }
      },
      {
        id: 'identify-I-V-vi-IV-C',
        type: 'progression-inverse',
        question: '¿Qué progresión pop representan estos acordes?\nC - G - Am - F',
        answer: 'I-V-vi-IV en C (Pop Progression)',
        options: shuffleOptions('I-V-vi-IV en C (Pop Progression)', ['vi-IV-I-V en C', 'I-vi-IV-V en C']),
        explanation: 'C-G-Am-F es I-V-vi-IV en C, la famosa "progresión de los cuatro acordes". Aparece en miles de canciones pop. El movimiento I-V crea impulso, vi-IV añade color emocional.',
        data: { key: 'C', style: 'pop-progression' }
      },
      {
        id: 'identify-I-bVII-IV-I-C',
        type: 'progression-inverse',
        question: '¿Qué progresión rock representan estos acordes?\nC - Bb - F - C',
        answer: 'I-bVII-IV-I en C (Rock Progression)',
        options: shuffleOptions('I-bVII-IV-I en C (Rock Progression)', ['I-V-IV-I en C', 'I-vi-IV-I en C']),
        explanation: 'C-Bb-F-C es I-bVII-IV-I en C. El Bb (bVII) es prestado del modo menor, creando el sonido "duro" característico del rock. Común en rock clásico, hard rock y metal.',
        data: { key: 'C', style: 'rock-progression' }
      },
      {
        id: 'identify-vi-IV-I-V-G',
        type: 'progression-inverse',
        question: '¿Qué progresión representan estos acordes?\nEm - C - G - D',
        answer: 'vi-IV-I-V en G (Pop Ballad)',
        options: shuffleOptions('vi-IV-I-V en G (Pop Ballad)', ['ii-V-I en G', 'I-V-vi-IV en G']),
        explanation: 'Em-C-G-D es vi-IV-I-V en G. G mayor es muy popular por su comodidad en guitarra. Esta progresión aparece en innumerables canciones desde "Let It Be" hasta hits modernos.',
        data: { key: 'G', style: 'pop-ballad' }
      },
      {
        id: 'identify-I-V-vi-IV-G',
        type: 'progression-inverse',
        question: '¿Qué progresión representan estos acordes?\nG - D - Em - C',
        answer: 'I-V-vi-IV en G (Pop Progression)',
        options: shuffleOptions('I-V-vi-IV en G (Pop Progression)', ['vi-IV-I-V en G', 'I-vi-ii-V en G']),
        explanation: 'G-D-Em-C es I-V-vi-IV en G. Esta secuencia en G es extremadamente común en música popular y rock. La facilidad de ejecución en guitarra la ha convertido en una de las más usadas en la historia del pop.',
        data: { key: 'G', style: 'pop-progression' }
      },
      {
        id: 'identify-I-bVII-IV-I-G',
        type: 'progression-inverse',
        question: '¿Qué progresión rock representan estos acordes?\nG - F - C - G',
        answer: 'I-bVII-IV-I en G (Rock Progression)',
        options: shuffleOptions('I-bVII-IV-I en G (Rock Progression)', ['I-V-IV-I en G', 'I-vi-IV-I en G']),
        explanation: 'G-F-C-G es I-bVII-IV-I en G. El F mayor (bVII) es prestado del modo menor paralelo (Gm). Fundamental en rock clásico, aparece en canciones de The Beatles, Rolling Stones y muchas bandas de rock.',
        data: { key: 'G', style: 'rock-progression' }
      },
      {
        id: 'identify-vi-IV-I-V-F',
        type: 'progression-inverse',
        question: '¿Qué progresión representan estos acordes?\nDm - Bb - F - C',
        answer: 'vi-IV-I-V en F (Pop Ballad)',
        options: shuffleOptions('vi-IV-I-V en F (Pop Ballad)', ['ii-V-I en F', 'I-V-vi-IV en F']),
        explanation: 'Dm-Bb-F-C es vi-IV-I-V en F. F mayor es común en música pop y R&B. Esta progresión crea un arco emocional perfecto: melancolía (vi), elevación (IV-I), tensión para repetir (V).',
        data: { key: 'F', style: 'pop-ballad' }
      },
      {
        id: 'identify-I-V-vi-IV-F',
        type: 'progression-inverse',
        question: '¿Qué progresión representan estos acordes?\nF - C - Dm - Bb',
        answer: 'I-V-vi-IV en F (Pop Progression)',
        options: shuffleOptions('I-V-vi-IV en F (Pop Progression)', ['vi-IV-I-V en F', 'I-vi-ii-V en F']),
        explanation: 'F-C-Dm-Bb es I-V-vi-IV en F. F mayor es muy usada en baladas y música soul. Esta progresión aparece desde Motown hasta pop contemporáneo, creando un sonido cálido y familiar.',
        data: { key: 'F', style: 'pop-progression' }
      },
      {
        id: 'identify-vi-IV-I-V-D',
        type: 'progression-inverse',
        question: '¿Qué progresión representan estos acordes?\nBm - G - D - A',
        answer: 'vi-IV-I-V en D (Pop Ballad)',
        options: shuffleOptions('vi-IV-I-V en D (Pop Ballad)', ['ii-V-I en D', 'I-V-vi-IV en D']),
        explanation: 'Bm-G-D-A es vi-IV-I-V en D. D mayor es excelente para guitarra y violín. Esta progresión aparece frecuentemente en música folk, country y pop-rock, creando un sonido brillante y optimista.',
        data: { key: 'D', style: 'pop-ballad' }
      },
      {
        id: 'identify-I-V-vi-IV-D',
        type: 'progression-inverse',
        question: '¿Qué progresión representan estos acordes?\nD - A - Bm - G',
        answer: 'I-V-vi-IV en D (Pop Progression)',
        options: shuffleOptions('I-V-vi-IV en D (Pop Progression)', ['vi-IV-I-V en D', 'I-vi-ii-V en D']),
        explanation: 'D-A-Bm-G es I-V-vi-IV en D. D mayor es muy popular en música country y folk-rock. Esta progresión crea un sonido abierto y optimista, común en canciones de artistas como John Denver y música country moderna.',
        data: { key: 'D', style: 'pop-progression' }
      }
    ]
  }
];

// GRUPOS DE ESCALAS Y MODOS
const scaleModeGroups: QuestionGroup[] = [
  {
    id: 'church-modes',
    name: 'Modos Eclesiásticos',
    description: 'Los 7 modos de la escala mayor y sus aplicaciones',
    category: 'scale-mode',
    totalQuestions: 14,
    questions: [
      // Modo → Acorde (7 preguntas)
      ...scales.filter(s => ['c-major', 'd-dorian', 'e-phrygian', 'f-lydian', 'g-mixolydian', 'a-minor', 'b-locrian'].includes(s.id)).map((scale, index) => {
        const allConnections = [
          'Cmaj7 (I grado)', 'Dm7 (ii grado)', 'Em7 (iii grado)', 'Fmaj7 (IV grado)',
          'G7 (V grado)', 'Am7 (vi grado)', 'Bm7b5 (vii grado)', 'C7#11', 'G7alt'
        ];
        const wrongOptions = generateWrongOptions(scale.chordConnection!, allConnections);
        const options = shuffleOptions(scale.chordConnection!, wrongOptions);
        
        return {
          id: `mode-to-chord-${scale.id}-${index}`,
          type: 'scale-mode' as const,
          question: `¿Sobre qué acorde se usa la escala ${scale.name}?`,
          answer: scale.chordConnection!,
          options,
          explanation: `La escala ${scale.name} se usa sobre ${scale.chordConnection}. Como ${scale.mode}, contiene las notas ${scale.notes.join(' - ')}. Esta escala es el ${index + 1}° modo de la escala mayor de C, y su sonoridad característica viene de su patrón específico de tonos y semitonos.`,
          data: scale
        };
      }),
      
      // Acorde → Modo (7 preguntas)
      ...scales.filter(s => ['c-major', 'd-dorian', 'e-phrygian', 'f-lydian', 'g-mixolydian', 'a-minor', 'b-locrian'].includes(s.id)).map((scale, index) => {
        const allScaleNames = scales.filter(s => ['c-major', 'd-dorian', 'e-phrygian', 'f-lydian', 'g-mixolydian', 'a-minor', 'b-locrian'].includes(s.id)).map(s => s.name);
        const wrongOptions = generateWrongOptions(scale.name, allScaleNames);
        const options = shuffleOptions(scale.name, wrongOptions);
        
        return {
          id: `chord-to-mode-${scale.id}-${index + 7}`,
          type: 'scale-mode' as const,
          question: `¿Qué escala/modo se usa sobre ${scale.chordConnection}?`,
          answer: scale.name,
          options,
          explanation: `Sobre ${scale.chordConnection} se usa ${scale.name} (${scale.mode}). Esta escala contiene las notas ${scale.notes.join(' - ')}. Es el ${index + 1}° modo de C mayor, y su característica distintiva es ${getModeCharacteristic(scale.mode!)}.`,
          data: scale
        };
      })
    ]
  },

  {
    id: 'jazz-scales',
    name: 'Escalas de Jazz',
    description: 'Escalas bebop, alteradas y simétricas para jazz',
    category: 'scale-mode',
    totalQuestions: 15,
    questions: [
      // Escalas bebop
      ...scales.filter(s => s.id.includes('bebop')).map((scale, index) => {
        const allConnections = [
          'Cmaj7 (bebop)', 'G7 (bebop)', 'Dm7 (bebop)', 'C7#11', 'G7alt',
          'Am7 (vi grado)', 'Fmaj7 (IV grado)', 'Em7 (iii grado)'
        ];
        const wrongOptions = generateWrongOptions(scale.chordConnection!, allConnections);
        const options = shuffleOptions(scale.chordConnection!, wrongOptions);
        
        return {
          id: `bebop-scale-${scale.id}-${index}`,
          type: 'scale-mode' as const,
          question: `¿Sobre qué contexto armónico se usa ${scale.name}?`,
          answer: scale.chordConnection!,
          options,
          explanation: `${scale.name} se usa sobre ${scale.chordConnection}. Esta escala bebop de 8 notas (${scale.notes.join(' - ')}) incluye una nota cromática adicional que permite crear líneas melódicas que caen en tiempos fuertes sobre notas del acorde. Es fundamental en el vocabulario del jazz bebop.`,
          data: scale
        };
      }),
      
      // Escalas alteradas
      ...scales.filter(s => ['g-altered', 'c-lydian-dominant', 'a-phrygian-dominant'].includes(s.id)).map((scale, index) => {
        const allScaleNames = [
          'G Alterada (Super Locrio)', 'C Lidio Dominante', 'A Frigio Dominante',
          'C Mayor (Jónico)', 'D Dórico', 'G Mixolidio', 'A Menor (Eólico)'
        ];
        const wrongOptions = generateWrongOptions(scale.name, allScaleNames);
        const options = shuffleOptions(scale.name, wrongOptions);
        
        return {
          id: `altered-scale-${scale.id}-${index + 3}`,
          type: 'scale-mode' as const,
          question: `¿Qué escala contiene estas notas?\n${scale.notes.join(' - ')}`,
          answer: scale.name,
          options,
          explanation: `Las notas ${scale.notes.join(' - ')} corresponden a ${scale.name}. Se usa sobre ${scale.chordConnection}. Esta escala contiene múltiples alteraciones que crean tensiones específicas: ${getScaleAlterations(scale.name)}.`,
          data: scale
        };
      }),
      
      // Escalas simétricas
      ...scales.filter(s => ['c-whole-tone', 'c-diminished-hw', 'c-diminished-wh'].includes(s.id)).map((scale, index) => {
        const allConnections = ['C7#11, Caug', 'C7alt, Cdim7', 'Cdim7, Co7', 'G7alt', 'C7#11', 'Acordes disminuidos'];
        const wrongOptions = generateWrongOptions(scale.chordConnection!, allConnections);
        const options = shuffleOptions(scale.chordConnection!, wrongOptions);
        
        return {
          id: `symmetric-scale-${scale.id}-${index + 6}`,
          type: 'scale-mode' as const,
          question: `¿En qué contexto armónico se usa ${scale.name}?`,
          answer: scale.chordConnection!,
          options,
          explanation: `${scale.name} se usa sobre ${scale.chordConnection}. Esta escala simétrica (${scale.notes.join(' - ')}) tiene un patrón regular de intervalos que se repite. ${getSymmetricScaleExplanation(scale.name)}.`,
          data: scale
        };
      }),
      
      // Escalas étnicas
      ...scales.filter(s => ['c-hungarian-minor', 'c-japanese-hirajoshi', 'c-arabic-maqam'].includes(s.id)).map((scale, index) => {
        const allScaleNames = [
          'C Húngara Menor', 'C Japonesa (Hirajoshi)', 'C Árabe (Hijaz)',
          'C Mayor (Jónico)', 'A Menor (Eólico)', 'C Cromática'
        ];
        const wrongOptions = generateWrongOptions(scale.name, allScaleNames);
        const options = shuffleOptions(scale.name, wrongOptions);
        
        return {
          id: `ethnic-scale-${scale.id}-${index + 9}`,
          type: 'scale-mode' as const,
          question: `¿Qué escala étnica contiene estas notas?\n${scale.notes.join(' - ')}`,
          answer: scale.name,
          options,
          explanation: `Las notas ${scale.notes.join(' - ')} corresponden a ${scale.name}. ${getEthnicScaleExplanation(scale.name)}. Su sonoridad característica viene de sus intervalos únicos y su uso en la música tradicional.`,
          data: scale
        };
      })
    ]
  }
];

// NUEVOS GRUPOS DE PROGRESIONES DE BLUES
const bluesProgressionGroups: QuestionGroup[] = [
  {
    id: 'blues-12-bar',
    name: 'Blues de 12 Compases',
    description: 'Estructura básica del blues de 12 compases en diferentes tonalidades',
    category: 'progression-direct',
    totalQuestions: 15,
    questions: [
      ...['C', 'G', 'F', 'Bb', 'E', 'A', 'D'].map((key, index) => {
        const chords = {
          'C': ['C7', 'C7', 'C7', 'C7', 'F7', 'F7', 'C7', 'C7', 'G7', 'F7', 'C7', 'G7'],
          'G': ['G7', 'G7', 'G7', 'G7', 'C7', 'C7', 'G7', 'G7', 'D7', 'C7', 'G7', 'D7'],
          'F': ['F7', 'F7', 'F7', 'F7', 'Bb7', 'Bb7', 'F7', 'F7', 'C7', 'Bb7', 'F7', 'C7'],
          'Bb': ['Bb7', 'Bb7', 'Bb7', 'Bb7', 'Eb7', 'Eb7', 'Bb7', 'Bb7', 'F7', 'Eb7', 'Bb7', 'F7'],
          'E': ['E7', 'E7', 'E7', 'E7', 'A7', 'A7', 'E7', 'E7', 'B7', 'A7', 'E7', 'B7'],
          'A': ['A7', 'A7', 'A7', 'A7', 'D7', 'D7', 'A7', 'A7', 'E7', 'D7', 'A7', 'E7'],
          'D': ['D7', 'D7', 'D7', 'D7', 'G7', 'G7', 'D7', 'D7', 'A7', 'G7', 'D7', 'A7']
        }[key] || ['C7', 'C7', 'C7', 'C7', 'F7', 'F7', 'C7', 'C7', 'G7', 'F7', 'C7', 'G7'];
        
        const allAnswers = [
          'C7 - C7 - C7 - C7 - F7 - F7 - C7 - C7 - G7 - F7 - C7 - G7',
          'G7 - G7 - G7 - G7 - C7 - C7 - G7 - G7 - D7 - C7 - G7 - D7',
          'F7 - F7 - F7 - F7 - Bb7 - Bb7 - F7 - F7 - C7 - Bb7 - F7 - C7',
          'Bb7 - Bb7 - Bb7 - Bb7 - Eb7 - Eb7 - Bb7 - Bb7 - F7 - Eb7 - Bb7 - F7',
          'E7 - E7 - E7 - E7 - A7 - A7 - E7 - E7 - B7 - A7 - E7 - B7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `blues-12-bar-${key}-${index}`,
          type: 'progression-direct' as const,
          question: `Blues de 12 compases en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `El blues de 12 compases en ${key} sigue la estructura clásica: 4 compases de I7 (${chords[0]}) - 2 compases de IV7 (${chords[4]}) - 2 compases de I7 - 1 compás de V7 (${chords[8]}) - 1 compás de IV7 - 2 compases de I7. Esta es la forma más básica y fundamental del blues, donde todos los acordes son dominantes (7ª menor) para crear la sonoridad característica del blues. La progresión se basa en los grados I-IV-V de la escala mayor, pero usando acordes dominantes en lugar de los acordes diatónicos tradicionales.`,
          data: { key, chords, romanNumerals: ['I7', 'I7', 'I7', 'I7', 'IV7', 'IV7', 'I7', 'I7', 'V7', 'IV7', 'I7', 'V7'] }
        };
      }),
      
      // Jazz blues
      ...['C', 'F', 'Bb', 'G', 'D', 'A', 'E', 'Ab'].map((key, index) => {
        const chords = {
          'C': ['C7', 'A7', 'Dm7', 'G7', 'F7', 'F7', 'C7', 'A7', 'Dm7', 'G7', 'C7', 'Dm7', 'G7'],
          'F': ['F7', 'D7', 'Gm7', 'C7', 'Bb7', 'Bb7', 'F7', 'D7', 'Gm7', 'C7', 'F7', 'Gm7', 'C7'],
          'Bb': ['Bb7', 'G7', 'Cm7', 'F7', 'Eb7', 'Eb7', 'Bb7', 'G7', 'Cm7', 'F7', 'Bb7', 'Cm7', 'F7'],
          'G': ['G7', 'E7', 'Am7', 'D7', 'C7', 'C7', 'G7', 'E7', 'Am7', 'D7', 'G7', 'Am7', 'D7'],
          'D': ['D7', 'B7', 'Em7', 'A7', 'G7', 'G7', 'D7', 'B7', 'Em7', 'A7', 'D7', 'Em7', 'A7'],
          'A': ['A7', 'F#7', 'Bm7', 'E7', 'D7', 'D7', 'A7', 'F#7', 'Bm7', 'E7', 'A7', 'Bm7', 'E7'],
          'E': ['E7', 'C#7', 'F#m7', 'B7', 'A7', 'A7', 'E7', 'C#7', 'F#m7', 'B7', 'E7', 'F#m7', 'B7'],
          'Ab': ['Ab7', 'F7', 'Bbm7', 'Eb7', 'Db7', 'Db7', 'Ab7', 'F7', 'Bbm7', 'Eb7', 'Ab7', 'Bbm7', 'Eb7']
        }[key] || ['C7', 'A7', 'Dm7', 'G7', 'F7', 'F7', 'C7', 'A7', 'Dm7', 'G7', 'C7', 'Dm7', 'G7'];
        
        const allAnswers = [
          'C7 - A7 - Dm7 - G7 - F7 - F7 - C7 - A7 - Dm7 - G7 - C7 - Dm7 - G7',
          'F7 - D7 - Gm7 - C7 - Bb7 - Bb7 - F7 - D7 - Gm7 - C7 - F7 - Gm7 - C7',
          'Bb7 - G7 - Cm7 - F7 - Eb7 - Eb7 - Bb7 - G7 - Cm7 - F7 - Bb7 - Cm7 - F7',
          'G7 - E7 - Am7 - D7 - C7 - C7 - G7 - E7 - Am7 - D7 - G7 - Am7 - D7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `jazz-blues-${key}-${index + 7}`,
          type: 'progression-direct' as const,
          question: `Jazz blues en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `El jazz blues en ${key} es una sofisticación del blues básico que incorpora elementos del jazz: I7 (${chords[0]}) - VI7 (${chords[1]}, dominante secundario V7/ii) - ii7 (${chords[2]}) - V7 (${chords[3]}) - IV7 (${chords[4]}) - IV7 - I7 - VI7 - ii7 - V7 - I7 - ii7 - V7. Esta versión sustituye algunos acordes del blues básico con progresiones ii-V-I típicas del jazz, creando un movimiento armónico más sofisticado. El VI7 funciona como dominante secundario del ii grado, y las progresiones ii-V crean cadencias que dan más fluidez armónica que el blues tradicional.`,
          data: { key, chords, romanNumerals: ['I7', 'VI7', 'ii7', 'V7', 'IV7', 'IV7', 'I7', 'VI7', 'ii7', 'V7', 'I7', 'ii7', 'V7'] }
        };
      })
    ]
  }
];

// GRUPOS DE PROGRESIONES MODALES
const modalProgressionGroups: QuestionGroup[] = [
  {
    id: 'modal-progressions',
    name: 'Progresiones Modales',
    description: 'Vamps y progresiones características de los modos dórico, mixolidio y frigio',
    category: 'progression-direct',
    totalQuestions: 12,
    questions: [
      // Dórico
      ...['D', 'A', 'E', 'G'].map((key, index) => {
        const chords = {
          'D': ['Dm7', 'Gmaj7'],
          'A': ['Am7', 'Dmaj7'],
          'E': ['Em7', 'Amaj7'],
          'G': ['Gm7', 'Cmaj7']
        }[key] || ['Dm7', 'Gmaj7'];
        
        const allAnswers = [
          'Dm7 - Gmaj7', 'Am7 - Dmaj7', 'Em7 - Amaj7', 'Gm7 - Cmaj7',
          'Cm7 - Fmaj7', 'Fm7 - Bbmaj7', 'Bm7 - Emaj7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `dorian-vamp-${key}-${index}`,
          type: 'progression-direct' as const,
          question: `Vamp dórico en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `El vamp dórico en ${key} utiliza los acordes ${chords.join(' - ')}. En el modo dórico, el acorde característico es el IV mayor (${chords[1]}) que contrasta con el i menor (${chords[0]}). Esta progresión im7-IVmaj7 es típica del modo dórico y se encuentra en temas como "So What" de Miles Davis. El modo dórico es el segundo modo de la escala mayor, y su característica distintiva es la 6ª mayor que le da un color menor pero luminoso. La progresión crea una sonoridad modal estable que evita las cadencias tradicionales V-I del sistema tonal.`,
          data: { key: `${key} Dorian`, chords, romanNumerals: ['im7', 'IVmaj7'] }
        };
      }),
      
      // Mixolidio
      ...['G', 'D', 'A', 'C'].map((key, index) => {
        const chords = {
          'G': ['G7', 'Fmaj7'],
          'D': ['D7', 'Cmaj7'],
          'A': ['A7', 'Gmaj7'],
          'C': ['C7', 'Bbmaj7']
        }[key] || ['G7', 'Fmaj7'];
        
        const allAnswers = [
          'G7 - Fmaj7', 'D7 - Cmaj7', 'A7 - Gmaj7', 'C7 - Bbmaj7',
          'E7 - Dmaj7', 'B7 - Amaj7', 'F7 - Ebmaj7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `mixolydian-vamp-${key}-${index + 4}`,
          type: 'progression-direct' as const,
          question: `Vamp mixolidio en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `El vamp mixolidio en ${key} utiliza ${chords.join(' - ')}. El modo mixolidio se caracteriza por su 7ª menor, lo que hace que el acorde de tónica sea dominante (I7 = ${chords[0]}) en lugar de mayor. El bVII mayor (${chords[1]}) es el acorde característico del mixolidio y crea una sonoridad relajada típica del rock, funk y música modal. Esta progresión I7-bVIImaj7 evita la resolución tradicional del acorde dominante, manteniéndose en el centro tonal mixolidio. Es común en temas como "The Chicken" de Jaco Pastorius y mucha música de los años 70.`,
          data: { key: `${key} Mixolydian`, chords, romanNumerals: ['I7', 'bVIImaj7'] }
        };
      }),
      
      // Frigio
      ...['E', 'A', 'B', 'F#'].map((key, index) => {
        const chords = {
          'E': ['Em7', 'Fmaj7'],
          'A': ['Am7', 'Bbmaj7'],
          'B': ['Bm7', 'Cmaj7'],
          'F#': ['F#m7', 'Gmaj7']
        }[key] || ['Em7', 'Fmaj7'];
        
        const allAnswers = [
          'Em7 - Fmaj7', 'Am7 - Bbmaj7', 'Bm7 - Cmaj7', 'F#m7 - Gmaj7',
          'Dm7 - Ebmaj7', 'Gm7 - Abmaj7', 'Cm7 - Dbmaj7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `phrygian-vamp-${key}-${index + 8}`,
          type: 'progression-direct' as const,
          question: `Vamp frigio en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `El vamp frigio en ${key} utiliza ${chords.join(' - ')}. El modo frigio se caracteriza por su 2ª menor, creando una sonoridad oscura y exótica. El bII mayor (${chords[1]}) es el acorde característico del frigio y crea un movimiento semitonal muy distintivo desde la tónica menor (${chords[0]}). Esta progresión im7-bIImaj7 es típica del flamenco, música española y metal moderno. El frigio es el tercer modo de la escala mayor y su sonoridad evoca música del Medio Oriente y España. La progresión crea una tensión constante que nunca resuelve de manera tradicional.`,
          data: { key: `${key} Phrygian`, chords, romanNumerals: ['im7', 'bIImaj7'] }
        };
      })
    ]
  }
];

// GRUPOS DE ROCK/POP
const rockPopProgressionGroups: QuestionGroup[] = [
  {
    id: 'pop-progressions',
    name: 'Progresiones de Pop/Rock',
    description: 'Las progresiones más comunes en música popular: vi-IV-I-V, I-V-vi-IV',
    category: 'progression-direct',
    totalQuestions: 15,
    questions: [
      // vi-IV-I-V (Pop ballad)
      ...['C', 'G', 'F', 'D', 'A', 'E', 'Bb', 'Eb'].map((key, index) => {
        const chords = {
          'C': ['Am', 'F', 'C', 'G'],
          'G': ['Em', 'C', 'G', 'D'],
          'F': ['Dm', 'Bb', 'F', 'C'],
          'D': ['Bm', 'G', 'D', 'A'],
          'A': ['F#m', 'D', 'A', 'E'],
          'E': ['C#m', 'A', 'E', 'B'],
          'Bb': ['Gm', 'Eb', 'Bb', 'F'],
          'Eb': ['Cm', 'Ab', 'Eb', 'Bb']
        }[key] || ['Am', 'F', 'C', 'G'];
        
        const allAnswers = [
          'Am - F - C - G', 'Em - C - G - D', 'Dm - Bb - F - C', 'Bm - G - D - A',
          'F#m - D - A - E', 'C#m - A - E - B', 'Gm - Eb - Bb - F', 'Cm - Ab - Eb - Bb'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `pop-ballad-${key}-${index}`,
          type: 'progression-direct' as const,
          question: `vi-IV-I-V en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `La progresión vi-IV-I-V en ${key} es ${chords.join(' - ')}. Esta es una de las progresiones más populares en la música occidental, especialmente en baladas pop y rock. La secuencia vi (${chords[0]}, relativo menor) - IV (${chords[1]}, subdominante) - I (${chords[2]}, tónica) - V (${chords[3]}, dominante) crea un movimiento emocional muy efectivo: comienza con melancolía (vi), pasa por estabilidad (IV), llega al hogar (I) y crea expectativa (V). Se encuentra en miles de canciones como "Don't Stop Believin'" de Journey, "Someone Like You" de Adele, y muchas más. Su popularidad se debe a que combina elementos menores y mayores de manera muy natural.`,
          data: { key, chords, romanNumerals: ['vi', 'IV', 'I', 'V'] }
        };
      }),
      
      // I-V-vi-IV
      ...['C', 'G', 'F', 'D', 'A', 'E', 'Bb'].map((key, index) => {
        const chords = {
          'C': ['C', 'G', 'Am', 'F'],
          'G': ['G', 'D', 'Em', 'C'],
          'F': ['F', 'C', 'Dm', 'Bb'],
          'D': ['D', 'A', 'Bm', 'G'],
          'A': ['A', 'E', 'F#m', 'D'],
          'E': ['E', 'B', 'C#m', 'A'],
          'Bb': ['Bb', 'F', 'Gm', 'Eb']
        }[key] || ['C', 'G', 'Am', 'F'];
        
        const allAnswers = [
          'C - G - Am - F', 'G - D - Em - C', 'F - C - Dm - Bb', 'D - A - Bm - G',
          'A - E - F#m - D', 'E - B - C#m - A', 'Bb - F - Gm - Eb'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `pop-progression-${key}-${index + 8}`,
          type: 'progression-direct' as const,
          question: `I-V-vi-IV en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `La progresión I-V-vi-IV en ${key} es ${chords.join(' - ')}. Esta progresión es extremadamente común en música pop, rock y country. La secuencia I (${chords[0]}, tónica) - V (${chords[1]}, dominante) - vi (${chords[2]}, relativo menor) - IV (${chords[3]}, subdominante) crea un ciclo armónico muy satisfactorio que puede repetirse indefinidamente. Comienza con estabilidad (I), crea tensión (V), introduce melancolía (vi) y prepara el retorno (IV). Se encuentra en canciones como "Let It Be" de The Beatles, "Don't Stop Me Now" de Queen, y "With or Without You" de U2. Su efectividad radica en el equilibrio perfecto entre tensión y relajación.`,
          data: { key, chords, romanNumerals: ['I', 'V', 'vi', 'IV'] }
        };
      })
    ]
  }
];

// GRUPOS DE CADENCIAS CLÁSICAS
const classicalCadenceGroups: QuestionGroup[] = [
  {
    id: 'classical-cadences',
    name: 'Cadencias Clásicas',
    description: 'Cadencias fundamentales de la música clásica: auténtica, plagal, rota, frigia',
    category: 'progression-direct',
    totalQuestions: 12,
    questions: [
      // Cadencias auténticas
      ...['C', 'G', 'F', 'D'].map((key, index) => {
        const chords = {
          'C': ['G', 'C'],
          'G': ['D', 'G'],
          'F': ['C', 'F'],
          'D': ['A', 'D']
        }[key] || ['G', 'C'];
        
        const allAnswers = ['G - C', 'D - G', 'C - F', 'A - D', 'E - A', 'B - E', 'F - Bb'];
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `authentic-cadence-${key}-${index}`,
          type: 'progression-direct' as const,
          question: `Cadencia auténtica en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `La cadencia auténtica en ${key} es V-I: ${chords.join(' - ')}. Esta es la cadencia más fuerte y definitiva de la música tonal occidental. El movimiento V-I (${chords[0]} → ${chords[1]}) crea la máxima sensación de resolución debido al movimiento de la sensible (7º grado) hacia la tónica y la quinta del dominante hacia la fundamental de la tónica. Es la base del sistema tonal y se encuentra en prácticamente toda la música clásica, desde Bach hasta Brahms. La cadencia auténtica perfecta requiere que ambos acordes estén en posición fundamental y que la melodía vaya de la sensible a la tónica. Es el equivalente musical de un punto final en una oración.`,
          data: { key, chords, romanNumerals: ['V', 'I'] }
        };
      }),
      
      // Cadencias plagales
      ...['C', 'G', 'F', 'D'].map((key, index) => {
        const chords = {
          'C': ['F', 'C'],
          'G': ['C', 'G'],
          'F': ['Bb', 'F'],
          'D': ['G', 'D']
        }[key] || ['F', 'C'];
        
        const allAnswers = ['F - C', 'C - G', 'Bb - F', 'G - D', 'D - A', 'A - E', 'Eb - Bb'];
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `plagal-cadence-${key}-${index + 4}`,
          type: 'progression-direct' as const,
          question: `Cadencia plagal en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `La cadencia plagal en ${key} es IV-I: ${chords.join(' - ')}. También conocida como "cadencia del Amén" por su uso frecuente en música religiosa, especialmente al final de himnos. El movimiento IV-I (${chords[0]} → ${chords[1]}) es más suave que la cadencia auténtica, ya que no contiene la sensible. En su lugar, el movimiento característico es del 6º grado (que baja al 5º) y del 4º grado (que baja al 3º). Esta cadencia tiene un carácter más modal y arcaico, y se asocia con música sacra y folk. Es menos conclusiva que la cadencia auténtica pero igualmente satisfactoria, creando una sensación de paz y resolución tranquila.`,
          data: { key, chords, romanNumerals: ['IV', 'I'] }
        };
      }),
      
      // Cadencias rotas
      ...['C', 'G', 'F', 'D'].map((key, index) => {
        const chords = {
          'C': ['G', 'Am'],
          'G': ['D', 'Em'],
          'F': ['C', 'Dm'],
          'D': ['A', 'Bm']
        }[key] || ['G', 'Am'];
        
        const allAnswers = ['G - Am', 'D - Em', 'C - Dm', 'A - Bm', 'E - F#m', 'B - C#m', 'F - Gm'];
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `deceptive-cadence-${key}-${index + 8}`,
          type: 'progression-direct' as const,
          question: `Cadencia rota en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `La cadencia rota en ${key} es V-vi: ${chords.join(' - ')}. Esta cadencia "engaña" al oído porque después de escuchar el dominante (${chords[0]}), esperamos la resolución a la tónica (I), pero en su lugar va al vi grado (${chords[1]}). Es una técnica compositiva muy efectiva para extender una frase musical y crear sorpresa. El vi grado comparte dos notas con el I (la 3ª y 5ª del vi son la 1ª y 3ª del I), por lo que la resolución es parcialmente satisfactoria pero deja una sensación de continuidad. Se usa frecuentemente en música clásica y popular para evitar finales prematuros y mantener el interés musical. Bach la usaba magistralmente en sus corales.`,
          data: { key, chords, romanNumerals: ['V', 'vi'] }
        };
      })
    ]
  }
];

// GRUPOS DE ARMONÍA AVANZADA
const advancedHarmonyGroups: QuestionGroup[] = [
  {
    id: 'advanced-harmony',
    name: 'Armonía Avanzada',
    description: 'Intercambio modal, sustituciones tritónicas, mediante cromáticas',
    category: 'progression-direct',
    totalQuestions: 15,
    questions: [
      // Intercambio modal
      ...['C', 'G', 'F', 'D', 'A'].map((key, index) => {
        const chords = {
          'C': ['Cmaj7', 'Abmaj7', 'Bb7', 'Cmaj7'],
          'G': ['Gmaj7', 'Ebmaj7', 'F7', 'Gmaj7'],
          'F': ['Fmaj7', 'Dbmaj7', 'Eb7', 'Fmaj7'],
          'D': ['Dmaj7', 'Bbmaj7', 'C7', 'Dmaj7'],
          'A': ['Amaj7', 'Fmaj7', 'G7', 'Amaj7']
        }[key] || ['Cmaj7', 'Abmaj7', 'Bb7', 'Cmaj7'];
        
        const allAnswers = [
          'Cmaj7 - Abmaj7 - Bb7 - Cmaj7',
          'Gmaj7 - Ebmaj7 - F7 - Gmaj7',
          'Fmaj7 - Dbmaj7 - Eb7 - Fmaj7',
          'Dmaj7 - Bbmaj7 - C7 - Dmaj7',
          'Amaj7 - Fmaj7 - G7 - Amaj7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `modal-interchange-${key}-${index}`,
          type: 'progression-direct' as const,
          question: `Intercambio modal I-bVI-bVII-I en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `El intercambio modal en ${key} utiliza ${chords.join(' - ')}. Esta progresión toma acordes prestados del modo menor paralelo: I (${chords[0]}, tónica mayor) - bVI (${chords[1]}, prestado del menor) - bVII (${chords[2]}, prestado del menor) - I (${chords[3]}, vuelta a la tónica). El bVI y bVII son acordes que no existen en la escala mayor natural de ${key}, sino que provienen de ${key} menor. Esta técnica, llamada intercambio modal o acordes prestados, enriquece enormemente el vocabulario armónico y se usa extensivamente en música popular desde los Beatles hasta el jazz moderno. Los acordes prestados aportan colores armónicos únicos y permiten modulaciones suaves entre modos mayor y menor.`,
          data: { key, chords, romanNumerals: ['Imaj7', 'bVImaj7', 'bVII7', 'Imaj7'] }
        };
      }),
      
      // Sustituciones tritónicas
      ...['C', 'F', 'G', 'Bb', 'D'].map((key, index) => {
        const chords = {
          'C': ['Dm7', 'Db7', 'Cmaj7'],
          'F': ['Gm7', 'Gb7', 'Fmaj7'],
          'G': ['Am7', 'Ab7', 'Gmaj7'],
          'Bb': ['Cm7', 'B7', 'Bbmaj7'],
          'D': ['Em7', 'Eb7', 'Dmaj7']
        }[key] || ['Dm7', 'Db7', 'Cmaj7'];
        
        const allAnswers = [
          'Dm7 - Db7 - Cmaj7',
          'Gm7 - Gb7 - Fmaj7',
          'Am7 - Ab7 - Gmaj7',
          'Cm7 - B7 - Bbmaj7',
          'Em7 - Eb7 - Dmaj7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `tritone-substitution-${key}-${index + 5}`,
          type: 'progression-direct' as const,
          question: `ii-bII-I (sustitución tritónica) en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `La sustitución tritónica en ${key} es ${chords.join(' - ')}. En lugar del dominante natural (G7 en C), se usa ${chords[1]} que está a un tritono de distancia. La sustitución tritónica funciona porque ambos acordes comparten las mismas tensiones críticas: la 3ª y 7ª del dominante original se convierten en la 7ª y 3ª del sustituto. Por ejemplo, en C: G7 tiene B (3ª) y F (7ª), mientras que Db7 tiene F (3ª) y B (7ª). Esta sustitución crea un movimiento cromático descendente en el bajo (D-Db-C) que es muy elegante. Es fundamental en el jazz moderno y permite rearmonizaciones sofisticadas. El efecto es más suave que el dominante original pero igualmente funcional.`,
          data: { key, chords, romanNumerals: ['iim7', 'bII7', 'Imaj7'] }
        };
      }),
      
      // Mediante cromáticas
      ...['C', 'G', 'F', 'D', 'A'].map((key, index) => {
        const chords = {
          'C': ['Cmaj7', 'Ebmaj7', 'Cmaj7'],
          'G': ['Gmaj7', 'Bbmaj7', 'Gmaj7'],
          'F': ['Fmaj7', 'Abmaj7', 'Fmaj7'],
          'D': ['Dmaj7', 'Fmaj7', 'Dmaj7'],
          'A': ['Amaj7', 'Cmaj7', 'Amaj7']
        }[key] || ['Cmaj7', 'Ebmaj7', 'Cmaj7'];
        
        const allAnswers = [
          'Cmaj7 - Ebmaj7 - Cmaj7',
          'Gmaj7 - Bbmaj7 - Gmaj7',
          'Fmaj7 - Abmaj7 - Fmaj7',
          'Dmaj7 - Fmaj7 - Dmaj7',
          'Amaj7 - Cmaj7 - Amaj7'
        ];
        
        const wrongOptions = generateWrongOptions(chords.join(' - '), allAnswers);
        const options = shuffleOptions(chords.join(' - '), wrongOptions);
        
        return {
          id: `chromatic-mediant-${key}-${index + 10}`,
          type: 'progression-direct' as const,
          question: `Mediante cromática I-bIII-I en ${key}`,
          answer: chords.join(' - '),
          options,
          explanation: `La mediante cromática en ${key} es ${chords.join(' - ')}. Esta progresión utiliza el bIII (${chords[1]}) como acorde de paso entre dos acordes de tónica. La mediante cromática es una relación armónica donde los acordes están separados por una tercera menor y comparten una nota común. En este caso, ${chords[0]} y ${chords[1]} comparten la nota G (5ª de C y 3ª de Eb). Esta técnica crea un efecto de color armónico muy distintivo, usado frecuentemente por compositores románticos como Schubert y Chopin, y también en música popular moderna. El movimiento cromático en el bajo (C-Eb-C) y la nota común crean una sonoridad rica y expresiva que expande el vocabulario armónico tradicional.`,
          data: { key, chords, romanNumerals: ['Imaj7', 'bIIImaj7', 'Imaj7'] }
        };
      })
    ]
  }
];

// NUEVOS GRUPOS DE ESCALAS MENORES
const minorScaleGroups: QuestionGroup[] = [
  {
    id: 'minor-scales-modes',
    name: 'Escalas Menores y sus Modos',
    description: 'Escalas menor natural, armónica, melódica y todos sus modos',
    category: 'scale-mode',
    totalQuestions: 15,
    questions: [
      // Menor natural y sus modos
      ...scales.filter(s => ['a-natural-minor', 'b-locrian', 'c-ionian'].includes(s.id)).map((scale, index) => {
        const allConnections = [
          'Am7, Am6 (vi grado de C mayor)', 'Bm7b5 (vii grado de C mayor)', 'Cmaj7 (I grado)',
          'Dm7 (ii grado)', 'Em7 (iii grado)', 'Fmaj7 (IV grado)', 'G7 (V grado)'
        ];
        const wrongOptions = generateWrongOptions(scale.chordConnection!, allConnections);
        const options = shuffleOptions(scale.chordConnection!, wrongOptions);
        
        return {
          id: `minor-natural-${scale.id}-${index}`,
          type: 'scale-mode' as const,
          question: `¿Sobre qué contexto armónico se usa ${scale.name}?`,
          answer: scale.chordConnection!,
          options,
          explanation: `${scale.name} se usa sobre ${scale.chordConnection}. Esta escala (${scale.notes.join(' - ')}) es parte del sistema modal derivado de la escala mayor. ${scale.mode ? `Como modo ${scale.mode}, ` : ''}su característica distintiva es ${getMinorScaleCharacteristic(scale.name)}. En el contexto de la escala mayor de C, cada modo tiene su función específica y color armónico único, siendo fundamental para entender tanto la música clásica como el jazz modal.`,
          data: scale
        };
      }),
      
      // Menor armónica y sus modos
      ...scales.filter(s => ['a-harmonic-minor', 'e-phrygian-dominant', 'c-ionian-sharp5'].includes(s.id)).map((scale, index) => {
        const allConnections = [
          'Am(maj7), E7alt', 'E7b9 (V de Am armónica)', 'Cmaj7#5',
          'Dm7#11', 'Fmaj7#11#9', 'G#dim7'
        ];
        const wrongOptions = generateWrongOptions(scale.chordConnection!, allConnections);
        const options = shuffleOptions(scale.chordConnection!, wrongOptions);
        
        return {
          id: `harmonic-minor-${scale.id}-${index + 3}`,
          type: 'scale-mode' as const,
          question: `¿En qué contexto armónico se usa ${scale.name}?`,
          answer: scale.chordConnection!,
          options,
          explanation: `${scale.name} se usa sobre ${scale.chordConnection}. Esta escala (${scale.notes.join(' - ')}) pertenece al sistema de la menor armónica, caracterizado por el intervalo de segunda aumentada entre el 6º y 7º grados. ${scale.mode ? `El modo ${scale.mode} ` : ''}${getHarmonicMinorExplanation(scale.name)}. La menor armónica es fundamental en música clásica, flamenco y jazz, proporcionando el dominante mayor (V7) en tonalidades menores.`,
          data: scale
        };
      }),
      
      // Menor melódica y sus modos
      ...scales.filter(s => ['a-melodic-minor', 'c-lydian-augmented', 'd-lydian-dominant', 'gs-super-locrian'].includes(s.id)).map((scale, index) => {
        const allConnections = [
          'Am(maj7), mM7', 'Cmaj7#5#11', 'D7#11', 'G#7alt'
        ];
        const wrongOptions = generateWrongOptions(scale.chordConnection!, allConnections);
        const options = shuffleOptions(scale.chordConnection!, wrongOptions);
        
        return {
          id: `melodic-minor-${scale.id}-${index + 6}`,
          type: 'scale-mode' as const,
          question: `¿Qué escala se usa sobre ${scale.chordConnection}?`,
          answer: scale.name,
          options: shuffleOptions(scale.name, generateWrongOptions(scale.name, scales.filter(s => s.id.includes('melodic') || s.id.includes('lydian') || s.id.includes('super')).map(s => s.name))),
          explanation: `Sobre ${scale.chordConnection} se usa ${scale.name}. Esta escala (${scale.notes.join(' - ')}) es parte del sistema de menor melódica, que ${getMelodicMinorExplanation(scale.name)}. La menor melódica y sus modos son fundamentales en jazz moderno, proporcionando sonoridades sofisticadas para acordes alterados y extensiones complejas.`,
          data: scale
        };
      }),
      
      // Identificar escalas por notas
      ...scales.filter(s => ['a-harmonic-minor', 'a-melodic-minor', 'e-phrygian-dominant', 'd-lydian-dominant'].includes(s.id)).map((scale, index) => {
        const allScaleNames = [
          'A Menor Armónica', 'A Menor Melódica', 'E Frigio Dominante', 'D Lidio Dominante',
          'A Menor Natural', 'C Mayor', 'G Mixolidio'
        ];
        const wrongOptions = generateWrongOptions(scale.name, allScaleNames);
        const options = shuffleOptions(scale.name, wrongOptions);
        
        return {
          id: `identify-minor-scale-${scale.id}-${index + 10}`,
          type: 'scale-mode' as const,
          question: `¿Qué escala contiene estas notas?\n${scale.notes.join(' - ')}`,
          answer: scale.name,
          options,
          explanation: `Las notas ${scale.notes.join(' - ')} corresponden a ${scale.name}. ${getScaleIdentificationExplanation(scale.name, scale.notes)}. Esta escala es fundamental para entender la armonía menor avanzada y se usa extensivamente en ${getStyleContext(scale.name)}.`,
          data: scale
        };
      }),
      
      // Pregunta adicional sobre características modales
      {
        id: 'minor-scale-theory-15',
        type: 'scale-mode' as const,
        question: '¿Cuál es la principal diferencia entre la escala menor natural y la menor armónica?',
        answer: 'La menor armónica tiene la 7ª mayor, creando el intervalo de 2ª aumentada',
        options: [
          'La menor armónica tiene la 7ª mayor, creando el intervalo de 2ª aumentada',
          'La menor armónica tiene la 6ª mayor en lugar de menor',
          'La menor armónica tiene la 4ª aumentada como característica principal'
        ],
        explanation: 'La diferencia fundamental entre la menor natural y la menor armónica es el 7º grado: la menor natural tiene 7ª menor (G en A menor) mientras que la menor armónica tiene 7ª mayor (G# en A menor). Esto crea el característico intervalo de segunda aumentada entre el 6º y 7º grados (F-G#), que le da su sonoridad exótica. Esta 7ª mayor permite formar el acorde de dominante mayor (E7 en A menor) que resuelve fuertemente a la tónica menor, algo imposible con la menor natural que solo produce un dominante menor (Em7).',
        data: { concept: 'minor-scale-theory' }
      }
    ]
  }
];

// GRUPOS DE ESCALAS PENTATÓNICAS
const pentatonicScaleGroups: QuestionGroup[] = [
  {
    id: 'pentatonic-scales',
    name: 'Escalas Pentatónicas',
    description: 'Pentatónicas mayor, menor y blues en todas las tonalidades',
    category: 'scale-mode',
    totalQuestions: 15,
    questions: [
      // Pentatónicas mayores
      ...scales.filter(s => s.id.includes('pentatonic-major')).slice(0, 5).map((scale, index) => {
        const allConnections = [
          'Cmaj7, C6', 'Gmaj7, G6', 'Dmaj7, D6', 'Amaj7, A6', 'Emaj7, E6',
          'Fmaj7, F6', 'Bbmaj7, Bb6', 'Ebmaj7, Eb6'
        ];
        const wrongOptions = generateWrongOptions(scale.chordConnection!, allConnections);
        const options = shuffleOptions(scale.chordConnection!, wrongOptions);
        
        return {
          id: `pentatonic-major-${scale.id}-${index}`,
          type: 'scale-mode' as const,
          question: `¿Sobre qué acordes se usa ${scale.name}?`,
          answer: scale.chordConnection!,
          options,
          explanation: `${scale.name} se usa sobre ${scale.chordConnection}. Esta escala pentatónica (${scale.notes.join(' - ')}) elimina los semitonos de la escala mayor, creando una sonoridad abierta y consonante. Las pentatónicas mayores son perfectas para improvisación sobre acordes mayores porque evitan las notas que podrían crear disonancias (4ª y 7ª mayor). Se usan extensivamente en rock, blues, country, música asiática y prácticamente todos los estilos musicales. Su simplicidad las hace ideales para principiantes, pero su expresividad las mantiene relevantes en todos los niveles musicales.`,
          data: scale
        };
      }),
      
      // Pentatónicas menores
      ...scales.filter(s => s.id.includes('pentatonic-minor')).slice(0, 5).map((scale, index) => {
        const allConnections = [
          'Am7, Am6', 'Em7, Em6', 'Bm7, Bm6', 'F#m7, F#m6', 'C#m7, C#m6',
          'Dm7, Dm6', 'Gm7, Gm6', 'Cm7, Cm6'
        ];
        const wrongOptions = generateWrongOptions(scale.chordConnection!, allConnections);
        const options = shuffleOptions(scale.chordConnection!, wrongOptions);
        
        return {
          id: `pentatonic-minor-${scale.id}-${index + 5}`,
          type: 'scale-mode' as const,
          question: `¿En qué contexto armónico se usa ${scale.name}?`,
          answer: scale.chordConnection!,
          options,
          explanation: `${scale.name} se usa sobre ${scale.chordConnection}. Esta escala (${scale.notes.join(' - ')}) es la relativa menor de la pentatónica mayor, eliminando la 2ª y 6ª de la escala menor natural. Es fundamental en blues, rock, jazz y música folk. Su sonoridad melancólica pero accesible la hace perfecta para expresar emociones profundas sin complejidad técnica. Guitarristas como B.B. King, Eric Clapton y Jimmy Page la han usado como base de su vocabulario improvisatorio. La ausencia de semitonos la hace muy segura para la improvisación.`,
          data: scale
        };
      }),
      
      // Pentatónicas blues
      ...scales.filter(s => s.id.includes('pentatonic-blues')).slice(0, 5).map((scale, index) => {
        const allConnections = [
          'C7, blues en C', 'G7, blues en G', 'F7, blues en F', 'Bb7, blues en Bb', 'E7, blues en E'
        ];
        const wrongOptions = generateWrongOptions(scale.chordConnection!, allConnections);
        const options = shuffleOptions(scale.chordConnection!, wrongOptions);
        
        return {
          id: `pentatonic-blues-${scale.id}-${index + 10}`,
          type: 'scale-mode' as const,
          question: `¿Qué escala contiene estas notas?\n${scale.notes.join(' - ')}`,
          answer: scale.name,
          options: shuffleOptions(scale.name, generateWrongOptions(scale.name, scales.filter(s => s.id.includes('blues') || s.id.includes('pentatonic')).map(s => s.name))),
          explanation: `Las notas ${scale.notes.join(' - ')} corresponden a ${scale.name}. Esta escala añade la "blue note" (b5 o #4) a la pentatónica menor, creando la escala de 6 notas más característica del blues. La blue note (${scale.notes[3]}) es la que da el color distintivo del blues, creando tensión contra la quinta justa. Esta escala es la base del blues, rock, jazz y R&B. Su poder expresivo viene de la tensión entre las notas "seguras" de la pentatónica y la disonancia controlada de la blue note.`,
          data: scale
        };
      })
    ]
  }
];

// Funciones auxiliares para explicaciones
function getModeCharacteristic(mode: string): string {
  const characteristics = {
    'Ionian': 'su sonoridad mayor brillante y estable',
    'Dorian': 'su 6ª mayor que le da un color menor pero luminoso',
    'Phrygian': 'su 2ª menor que crea una sonoridad oscura y exótica',
    'Lydian': 'su 4ª aumentada que le da un color etéreo y suspendido',
    'Mixolydian': 'su 7ª menor que crea una sonoridad dominante relajada',
    'Aeolian': 'su sonoridad menor natural y melancólica',
    'Locrian': 'su 5ª disminuida que lo hace muy inestable y disonante'
  };
  return characteristics[mode] || 'sus intervalos característicos';
}

function getScaleAlterations(scaleName: string): string {
  if (scaleName.includes('Alterada')) {
    return 'b9, #9, #11, b13 - todas las tensiones alteradas posibles';
  }
  if (scaleName.includes('Lidio Dominante')) {
    return '#11 sobre un acorde dominante, combinando el color lidio con la función dominante';
  }
  if (scaleName.includes('Frigio Dominante')) {
    return 'b9 y 3ª mayor, típico del flamenco y música del Medio Oriente';
  }
  return 'alteraciones específicas que definen su sonoridad';
}

function getSymmetricScaleExplanation(scaleName: string): string {
  if (scaleName.includes('Tonos Enteros')) {
    return 'Cada nota está separada por un tono entero, creando una sonoridad flotante sin centro tonal definido';
  }
  if (scaleName.includes('Tono-Semitono')) {
    return 'Alterna tonos y semitonos, usada sobre acordes dominantes alterados';
  }
  if (scaleName.includes('Semitono-Tono')) {
    return 'Alterna semitonos y tonos, usada sobre acordes disminuidos';
  }
  return 'Su patrón simétrico crea sonoridades únicas';
}

function getEthnicScaleExplanation(scaleName: string): string {
  if (scaleName.includes('Húngara')) {
    return 'Usada en música húngara y gitana, con su característica 4ª aumentada y 7ª mayor';
  }
  if (scaleName.includes('Japonesa')) {
    return 'Escala pentatónica tradicional japonesa, evita semitonos para crear serenidad';
  }
  if (scaleName.includes('Árabe')) {
    return 'Maqam Hijaz, fundamental en música árabe y del Medio Oriente, con su 2ª menor y 3ª mayor';
  }
  return 'Escala tradicional con intervalos característicos de su cultura de origen';
}

export const questionGroups: QuestionGroup[] = [
  ...progressionDirectGroups,
  ...progressionInverseGroups,
  ...moreProgressionInverseGroups,
  ...scaleModeGroups,
  // Añadir todos los nuevos grupos
  ...bluesProgressionGroups,
  ...modalProgressionGroups,
  ...rockPopProgressionGroups,
  ...classicalCadenceGroups,
  ...advancedHarmonyGroups,
  ...minorScaleGroups,
  ...pentatonicScaleGroups
];

// Funciones auxiliares para explicaciones detalladas
function getMinorScaleCharacteristic(scaleName: string): string {
  if (scaleName.includes('Menor Natural') || scaleName.includes('Eólico')) {
    return 'su sonoridad menor melancólica con todos los intervalos naturales';
  }
  if (scaleName.includes('Locrio')) {
    return 'su 5ª disminuida que lo hace muy inestable y disonante, usado raramente como centro tonal';
  }
  if (scaleName.includes('Jónico') || scaleName.includes('Mayor')) {
    return 'su sonoridad mayor brillante y estable, siendo el modo más consonante';
  }
  return 'sus intervalos característicos que definen su color modal único';
}

function getHarmonicMinorExplanation(scaleName: string): string {
  if (scaleName.includes('Menor Armónica')) {
    return 'es la escala menor con 7ª mayor, creando el dominante mayor necesario para cadencias fuertes en menor';
  }
  if (scaleName.includes('Frigio Dominante')) {
    return 'combina la 2ª menor del frigio con la 3ª mayor, típico del flamenco y música del Medio Oriente';
  }
  if (scaleName.includes('Jónico #5')) {
    return 'tiene la 5ª aumentada que crea una sonoridad mayor pero con tensión armónica';
  }
  return 'aporta colores armónicos únicos derivados de la menor armónica';
}

function getMelodicMinorExplanation(scaleName: string): string {
  if (scaleName.includes('Menor Melódica')) {
    return 'tiene 6ª y 7ª mayores, eliminando el intervalo de 2ª aumentada de la menor armónica';
  }
  if (scaleName.includes('Lidio Aumentado')) {
    return 'combina la 4ª aumentada del lidio con la 5ª aumentada, creando una sonoridad muy etérea';
  }
  if (scaleName.includes('Lidio Dominante')) {
    return 'tiene 4ª aumentada sobre un acorde dominante, muy usado en jazz para V7#11';
  }
  if (scaleName.includes('Super Locrio') || scaleName.includes('Alterada')) {
    return 'contiene todas las alteraciones posibles (b9, #9, #11, b13), perfecta para acordes dominantes alterados';
  }
  return 'proporciona sonoridades sofisticadas para armonía jazz avanzada';
}

function getScaleIdentificationExplanation(scaleName: string, notes: string[]): string {
  if (scaleName.includes('Menor Armónica')) {
    return `La característica clave es el intervalo de 2ª aumentada entre ${notes[5]} y ${notes[6]}, típico de la menor armónica`;
  }
  if (scaleName.includes('Menor Melódica')) {
    return `Se distingue por tener 6ª y 7ª mayores (${notes[5]} y ${notes[6]}), a diferencia de la menor natural`;
  }
  if (scaleName.includes('Frigio Dominante')) {
    return `La combinación de 2ª menor (${notes[1]}) y 3ª mayor (${notes[2]}) es característica del frigio dominante`;
  }
  if (scaleName.includes('Lidio Dominante')) {
    return `La 4ª aumentada (${notes[3]}) y 7ª menor (${notes[6]}) definen el lidio dominante`;
  }
  return 'Sus intervalos característicos la distinguen de otras escalas menores';
}

function getStyleContext(scaleName: string): string {
  if (scaleName.includes('Menor Armónica')) {
    return 'música clásica, flamenco, tango y jazz tradicional';
  }
  if (scaleName.includes('Menor Melódica')) {
    return 'jazz moderno, música clásica del s.XIX y composición contemporánea';
  }
  if (scaleName.includes('Frigio Dominante')) {
    return 'flamenco, música árabe, metal progresivo y jazz fusion';
  }
  if (scaleName.includes('Lidio Dominante')) {
    return 'jazz moderno, fusion y música de los años 70';
  }
  return 'diversos estilos musicales según su sonoridad característica';
}

export default getStyleContext
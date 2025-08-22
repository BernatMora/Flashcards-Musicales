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

// ESCALAS Y MODOS
const scaleGroups: QuestionGroup[] = [
  {
    id: 'church-modes',
    name: 'Modos Eclesiásticos',
    description: 'Los 7 modos tradicionales y sus características',
    category: 'scale-mode',
    totalQuestions: 14,
    questions: [
      {
        id: 'mode-ionian-c',
        type: 'scale-mode',
        question: '¿Qué modo representa la escala C-D-E-F-G-A-B?',
        answer: 'C Jónico (Mayor)',
        options: shuffleOptions('C Jónico (Mayor)', ['C Lidio', 'C Mixolidio']),
        explanation: 'C-D-E-F-G-A-B es C Jónico (modo mayor). Es el primer modo de la escala mayor, con la estructura T-T-S-T-T-T-S. Es el modo más consonante y estable, base de la música tonal occidental.',
        data: { mode: 'Ionian', key: 'C' }
      },
      {
        id: 'mode-dorian-d',
        type: 'scale-mode',
        question: '¿Qué modo representa la escala D-E-F-G-A-B-C?',
        answer: 'D Dórico',
        options: shuffleOptions('D Dórico', ['D Menor Natural', 'D Frigio']),
        explanation: 'D-E-F-G-A-B-C es D Dórico. Segundo modo de C mayor, con estructura T-S-T-T-T-S-T. Se caracteriza por la sexta mayor (B) que lo diferencia del menor natural. Usado en jazz modal, rock progresivo y música celta.',
        data: { mode: 'Dorian', key: 'D' }
      },
      {
        id: 'mode-phrygian-e',
        type: 'scale-mode',
        question: '¿Qué modo representa la escala E-F-G-A-B-C-D?',
        answer: 'E Frigio',
        options: shuffleOptions('E Frigio', ['E Menor Natural', 'E Locrio']),
        explanation: 'E-F-G-A-B-C-D es E Frigio. Tercer modo de C mayor, con estructura S-T-T-T-S-T-T. Se caracteriza por la segunda menor (F) que crea su sonoridad exótica. Fundamental en música española, flamenca y del Medio Oriente.',
        data: { mode: 'Phrygian', key: 'E' }
      },
      {
        id: 'mode-lydian-f',
        type: 'scale-mode',
        question: '¿Qué modo representa la escala F-G-A-B-C-D-E?',
        answer: 'F Lidio',
        options: shuffleOptions('F Lidio', ['F Mayor', 'F Mixolidio']),
        explanation: 'F-G-A-B-C-D-E es F Lidio. Cuarto modo de C mayor, con estructura T-T-T-S-T-T-S. Se caracteriza por la cuarta aumentada (B) que le da su sonoridad "flotante". Usado en jazz modal, música de películas y new age.',
        data: { mode: 'Lydian', key: 'F' }
      },
      {
        id: 'mode-mixolydian-g',
        type: 'scale-mode',
        question: '¿Qué modo representa la escala G-A-B-C-D-E-F?',
        answer: 'G Mixolidio',
        options: shuffleOptions('G Mixolidio', ['G Mayor', 'G Dórico']),
        explanation: 'G-A-B-C-D-E-F es G Mixolidio. Quinto modo de C mayor, con estructura T-T-S-T-T-S-T. Se caracteriza por la séptima menor (F) que le da su sonoridad "bluesy". Fundamental en blues, rock, funk y jazz.',
        data: { mode: 'Mixolydian', key: 'G' }
      },
      {
        id: 'mode-aeolian-a',
        type: 'scale-mode',
        question: '¿Qué modo representa la escala A-B-C-D-E-F-G?',
        answer: 'A Eólico (Menor Natural)',
        options: shuffleOptions('A Eólico (Menor Natural)', ['A Dórico', 'A Frigio']),
        explanation: 'A-B-C-D-E-F-G es A Eólico (menor natural). Sexto modo de C mayor, con estructura T-S-T-T-S-T-T. Es el modo menor más común, base de la música menor occidental. Usado en todos los géneros para expresar melancolía y drama.',
        data: { mode: 'Aeolian', key: 'A' }
      },
      {
        id: 'mode-locrian-b',
        type: 'scale-mode',
        question: '¿Qué modo representa la escala B-C-D-E-F-G-A?',
        answer: 'B Locrio',
        options: shuffleOptions('B Locrio', ['B Frigio', 'B Menor Natural']),
        explanation: 'B-C-D-E-F-G-A es B Locrio. Séptimo modo de C mayor, con estructura S-T-T-S-T-T-T. Se caracteriza por la quinta disminuida (F) que lo hace muy inestable. Raramente usado como centro tonal, más común como color armónico.',
        data: { mode: 'Locrian', key: 'B' }
      },
      {
        id: 'chord-connection-dorian',
        type: 'scale-mode',
        question: '¿Sobre qué acorde se usa típicamente el modo Dórico?',
        answer: 'Acordes menores con séptima (m7)',
        options: shuffleOptions('Acordes menores con séptima (m7)', ['Acordes mayores (maj7)', 'Acordes dominantes (7)']),
        explanation: 'El modo Dórico se usa sobre acordes menores con séptima (m7). Su estructura con sexta mayor lo hace perfecto para acordes como Dm7, Am7, etc. La sexta mayor (característica dórica) añade brillo al sonido menor básico.',
        data: { mode: 'Dorian', application: 'chord-connection' }
      },
      {
        id: 'chord-connection-mixolydian',
        type: 'scale-mode',
        question: '¿Sobre qué acorde se usa típicamente el modo Mixolidio?',
        answer: 'Acordes dominantes (7)',
        options: shuffleOptions('Acordes dominantes (7)', ['Acordes mayores (maj7)', 'Acordes menores (m7)']),
        explanation: 'El modo Mixolidio se usa sobre acordes dominantes (7). Su séptima menor característica coincide perfectamente con la séptima menor del acorde dominante. Es fundamental para improvisar sobre G7, C7, D7, etc.',
        data: { mode: 'Mixolydian', application: 'chord-connection' }
      },
      {
        id: 'chord-connection-lydian',
        type: 'scale-mode',
        question: '¿Sobre qué acorde se usa típicamente el modo Lidio?',
        answer: 'Acordes mayores con séptima (maj7)',
        options: shuffleOptions('Acordes mayores con séptima (maj7)', ['Acordes dominantes (7)', 'Acordes menores (m7)']),
        explanation: 'El modo Lidio se usa sobre acordes mayores con séptima (maj7). Su cuarta aumentada característica añade color y tensión al acorde mayor. Especialmente efectivo sobre acordes como Fmaj7, Cmaj7#11, etc.',
        data: { mode: 'Lydian', application: 'chord-connection' }
      },
      {
        id: 'chord-connection-phrygian',
        type: 'scale-mode',
        question: '¿Sobre qué acorde se usa típicamente el modo Frigio?',
        answer: 'Acordes menores con séptima (m7) y dominantes con b9',
        options: shuffleOptions('Acordes menores con séptima (m7) y dominantes con b9', ['Acordes mayores (maj7)', 'Acordes disminuidos']),
        explanation: 'El modo Frigio se usa sobre acordes menores (m7) y dominantes con b9. Su segunda menor característica crea la tensión b9 sobre dominantes. Fundamental en flamenco (E7b9) y música española.',
        data: { mode: 'Phrygian', application: 'chord-connection' }
      },
      {
        id: 'chord-connection-locrian',
        type: 'scale-mode',
        question: '¿Sobre qué acorde se usa típicamente el modo Locrio?',
        answer: 'Acordes menores con séptima y quinta disminuida (m7b5)',
        options: shuffleOptions('Acordes menores con séptima y quinta disminuida (m7b5)', ['Acordes menores (m7)', 'Acordes dominantes (7)']),
        explanation: 'El modo Locrio se usa sobre acordes m7b5. Su quinta disminuida característica coincide con la quinta disminuida del acorde. Común en progresiones ii-V-I menores, donde el ii grado es m7b5.',
        data: { mode: 'Locrian', application: 'chord-connection' }
      },
      {
        id: 'mode-characteristic-note-1',
        type: 'scale-mode',
        question: '¿Cuál es la nota característica del modo Dórico?',
        answer: 'Sexta mayor',
        options: shuffleOptions('Sexta mayor', ['Cuarta aumentada', 'Séptima menor']),
        explanation: 'La nota característica del modo Dórico es la sexta mayor. Esta nota lo diferencia del menor natural (que tiene sexta menor) y le da su sonoridad distintiva, más brillante que el menor natural pero menos que el mayor.',
        data: { mode: 'Dorian', concept: 'characteristic-note' }
      },
      {
        id: 'mode-characteristic-note-2',
        type: 'scale-mode',
        question: '¿Cuál es la nota característica del modo Frigio?',
        answer: 'Segunda menor',
        options: shuffleOptions('Segunda menor', ['Sexta menor', 'Quinta disminuida']),
        explanation: 'La nota característica del modo Frigio es la segunda menor. Este semitono entre la tónica y la segunda crea la tensión y exotismo típicos del frigio, fundamental en música española, árabe y del Medio Oriente.',
        data: { mode: 'Phrygian', concept: 'characteristic-note' }
      }
    ]
  },

  {
    id: 'minor-scales-modes',
    name: 'Escalas Menores y sus Modos',
    description: 'Menor natural, armónica, melódica y todos sus modos derivados',
    category: 'scale-mode',
    totalQuestions: 15,
    questions: [
      {
        id: 'natural-minor-a',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala A Menor Natural?',
        answer: 'A-B-C-D-E-F-G',
        options: shuffleOptions('A-B-C-D-E-F-G', ['A-B-C-D-E-F#-G', 'A-B-C-D-E-F-G#']),
        explanation: 'A Menor Natural: A-B-C-D-E-F-G. Es el modo Eólico, con estructura T-S-T-T-S-T-T. Es la escala menor más básica y común, relativa de C mayor. Usada en todos los géneros musicales para expresar melancolía, drama y emociones profundas.',
        data: { scale: 'Natural Minor', key: 'A' }
      },
      {
        id: 'harmonic-minor-a',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala A Menor Armónica?',
        answer: 'A-B-C-D-E-F-G#',
        options: shuffleOptions('A-B-C-D-E-F-G#', ['A-B-C-D-E-F-G', 'A-B-C-D-E-F#-G#']),
        explanation: 'A Menor Armónica: A-B-C-D-E-F-G#. Se caracteriza por el séptimo grado elevado (G#) que crea el intervalo de segunda aumentada F-G#. Genera el acorde dominante E7, permitiendo la cadencia V-i. Común en música clásica, flamenca y metal.',
        data: { scale: 'Harmonic Minor', key: 'A' }
      },
      {
        id: 'melodic-minor-a',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala A Menor Melódica (ascendente)?',
        answer: 'A-B-C-D-E-F#-G#',
        options: shuffleOptions('A-B-C-D-E-F#-G#', ['A-B-C-D-E-F-G', 'A-B-C-D-E-F-G#']),
        explanation: 'A Menor Melódica ascendente: A-B-C-D-E-F#-G#. Eleva los grados 6º y 7º para evitar la segunda aumentada de la armónica. En jazz se usa igual ascendente y descendente. Genera acordes como Am(maj7) y es fundamental en jazz moderno.',
        data: { scale: 'Melodic Minor', key: 'A' }
      },
      {
        id: 'phrygian-dominant-e',
        type: 'scale-mode',
        question: '¿Qué escala/modo representa E-F-G#-A-B-C-D?',
        answer: 'E Frigio Dominante',
        options: shuffleOptions('E Frigio Dominante', ['E Frigio', 'E Mixolidio']),
        explanation: 'E-F-G#-A-B-C-D es E Frigio Dominante (5º modo de A menor armónica). Combina la segunda menor del frigio (F) con la tercera mayor (G#). Fundamental en flamenco y música española, usado sobre acordes E7b9.',
        data: { mode: 'Phrygian Dominant', key: 'E', parent: 'A Harmonic Minor' }
      },
      {
        id: 'lydian-augmented-c',
        type: 'scale-mode',
        question: '¿Qué escala/modo representa C-D-E-F#-G#-A-B?',
        answer: 'C Lidio Aumentado',
        options: shuffleOptions('C Lidio Aumentado', ['C Lidio', 'C Mayor']),
        explanation: 'C-D-E-F#-G#-A-B es C Lidio Aumentado (3º modo de A menor melódica). Combina la cuarta aumentada del lidio (F#) con la quinta aumentada (G#). Usado sobre acordes Cmaj7#5#11 en jazz moderno y música contemporánea.',
        data: { mode: 'Lydian Augmented', key: 'C', parent: 'A Melodic Minor' }
      },
      {
        id: 'lydian-dominant-d',
        type: 'scale-mode',
        question: '¿Qué escala/modo representa D-E-F#-G#-A-B-C?',
        answer: 'D Lidio Dominante',
        options: shuffleOptions('D Lidio Dominante', ['D Mixolidio', 'D Lidio']),
        explanation: 'D-E-F#-G#-A-B-C es D Lidio Dominante (4º modo de A menor melódica). Combina la cuarta aumentada del lidio (G#) con la séptima menor del mixolidio (C). Usado sobre acordes D7#11 en jazz y fusion.',
        data: { mode: 'Lydian Dominant', key: 'D', parent: 'A Melodic Minor' }
      },
      {
        id: 'super-locrian-g',
        type: 'scale-mode',
        question: '¿Qué escala/modo representa G#-A-B-C-D-E-F#?',
        answer: 'G# Super Locrio (Alterada)',
        options: shuffleOptions('G# Super Locrio (Alterada)', ['G# Locrio', 'G# Frigio']),
        explanation: 'G#-A-B-C-D-E-F# es G# Super Locrio o Alterada (7º modo de A menor melódica). Contiene todas las alteraciones posibles: b9, #9, #11, b13. Fundamental para improvisar sobre acordes dominantes alterados (G#7alt).',
        data: { mode: 'Super Locrian', key: 'G#', parent: 'A Melodic Minor' }
      },
      {
        id: 'dorian-b2-b',
        type: 'scale-mode',
        question: '¿Qué escala/modo representa B-C-D-E-F#-G#-A?',
        answer: 'B Dórico b2',
        options: shuffleOptions('B Dórico b2', ['B Dórico', 'B Frigio']),
        explanation: 'B-C-D-E-F#-G#-A es B Dórico b2 (2º modo de A menor melódica). Combina la sexta mayor del dórico (G#) con la segunda menor del frigio (C). Usado sobre acordes Bm7b9 en contextos jazzísticos modernos.',
        data: { mode: 'Dorian b2', key: 'B', parent: 'A Melodic Minor' }
      },
      {
        id: 'mixolydian-b6-e',
        type: 'scale-mode',
        question: '¿Qué escala/modo representa E-F#-G#-A-B-C-D?',
        answer: 'E Mixolidio b6',
        options: shuffleOptions('E Mixolidio b6', ['E Mixolidio', 'E Dórico']),
        explanation: 'E-F#-G#-A-B-C-D es E Mixolidio b6 (5º modo de A menor melódica). Combina la séptima menor del mixolidio (D) con la sexta menor (C). Usado sobre acordes E7b13 en jazz y música contemporánea.',
        data: { mode: 'Mixolydian b6', key: 'E', parent: 'A Melodic Minor' }
      },
      {
        id: 'locrian-nat2-f',
        type: 'scale-mode',
        question: '¿Qué escala/modo representa F#-G#-A-B-C-D-E?',
        answer: 'F# Locrio ♮2',
        options: shuffleOptions('F# Locrio ♮2', ['F# Locrio', 'F# Frigio']),
        explanation: 'F#-G#-A-B-C-D-E es F# Locrio ♮2 (6º modo de A menor melódica). Combina la quinta disminuida del locrio (C) con la segunda mayor (G#). Usado sobre acordes F#m7b5 con segunda natural en jazz moderno.',
        data: { mode: 'Locrian ♮2', key: 'F#', parent: 'A Melodic Minor' }
      },
      {
        id: 'chord-connection-harmonic-minor',
        type: 'scale-mode',
        question: '¿Sobre qué acordes se usa la escala Menor Armónica?',
        answer: 'Am(maj7) y E7alt',
        options: shuffleOptions('Am(maj7) y E7alt', ['Am7 y E7', 'Amaj7 y Em7']),
        explanation: 'La escala Menor Armónica se usa sobre Am(maj7) (acorde menor con séptima mayor) y E7alt (dominante alterado). El G# crea la séptima mayor en Am(maj7) y las tensiones alteradas en E7alt. Fundamental en progresiones V-i menores.',
        data: { scale: 'Harmonic Minor', application: 'chord-connection' }
      },
      {
        id: 'chord-connection-melodic-minor',
        type: 'scale-mode',
        question: '¿Sobre qué acorde se usa principalmente la escala Menor Melódica?',
        answer: 'Am(maj7)',
        options: shuffleOptions('Am(maj7)', ['Am7', 'Amaj7']),
        explanation: 'La escala Menor Melódica se usa principalmente sobre Am(maj7). El F# y G# crean la sexta mayor y séptima mayor características. En jazz moderno es fundamental para acordes menores con séptima mayor y sus extensiones (Am(maj9), etc.).',
        data: { scale: 'Melodic Minor', application: 'chord-connection' }
      },
      {
        id: 'harmonic-minor-interval',
        type: 'scale-mode',
        question: '¿Qué intervalo característico tiene la escala Menor Armónica?',
        answer: 'Segunda aumentada (entre 6º y 7º grado)',
        options: shuffleOptions('Segunda aumentada (entre 6º y 7º grado)', ['Cuarta aumentada', 'Quinta disminuida']),
        explanation: 'La escala Menor Armónica tiene una segunda aumentada entre el 6º y 7º grado (F-G# en A menor armónica). Este intervalo de 3 semitonos crea su sonoridad exótica y característica, común en música del Medio Oriente y flamenca.',
        data: { scale: 'Harmonic Minor', concept: 'characteristic-interval' }
      },
      {
        id: 'melodic-minor-difference',
        type: 'scale-mode',
        question: '¿Qué diferencia la escala Menor Melódica de la Natural?',
        answer: 'Sexta y séptima elevadas',
        options: shuffleOptions('Sexta y séptima elevadas', ['Solo séptima elevada', 'Solo sexta elevada']),
        explanation: 'La escala Menor Melódica se diferencia de la Natural por tener la sexta y séptima elevadas (F# y G# en A menor melódica vs F y G en A menor natural). Esto elimina la segunda aumentada de la armónica y crea un sonido más suave.',
        data: { scale: 'Melodic Minor', concept: 'difference' }
      },
      {
        id: 'minor-scales-usage',
        type: 'scale-mode',
        question: '¿Cuál es el uso principal de cada escala menor?',
        answer: 'Natural: melodías, Armónica: cadencias V-i, Melódica: jazz moderno',
        options: shuffleOptions('Natural: melodías, Armónica: cadencias V-i, Melódica: jazz moderno', ['Todas iguales', 'Solo diferencias teóricas']),
        explanation: 'Cada escala menor tiene usos específicos: Natural para melodías y armonía básica, Armónica para crear cadencias V-i fuertes (con dominante mayor), Melódica para jazz moderno y armonía sofisticada. Cada una aporta colores y posibilidades diferentes.',
        data: { concept: 'minor-scales-usage' }
      }
    ]
  },

  {
    id: 'pentatonic-scales',
    name: 'Escalas Pentatónicas',
    description: 'Pentatónicas mayor, menor y blues en diferentes tonalidades',
    category: 'scale-mode',
    totalQuestions: 12,
    questions: [
      {
        id: 'pentatonic-major-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la Pentatónica Mayor de C?',
        answer: 'C-D-E-G-A',
        options: shuffleOptions('C-D-E-G-A', ['C-D-F-G-A', 'C-E-F-G-B']),
        explanation: 'C Pentatónica Mayor: C-D-E-G-A. Se forma eliminando los semitonos de la escala mayor (F y B). Estructura: T-T-T+S-T-T+S. Es la escala de 5 notas más universal, presente en todas las culturas musicales del mundo.',
        data: { scale: 'Pentatonic Major', key: 'C' }
      },
      {
        id: 'pentatonic-minor-a',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la Pentatónica Menor de A?',
        answer: 'A-C-D-E-G',
        options: shuffleOptions('A-C-D-E-G', ['A-B-D-E-G', 'A-C-D-F-G']),
        explanation: 'A Pentatónica Menor: A-C-D-E-G. Es la relativa menor de C pentatónica mayor. Estructura: T+S-T-T-T+S-T. Fundamental en blues, rock, folk y música tradicional de muchas culturas. Muy fácil de improvisar y memorizar.',
        data: { scale: 'Pentatonic Minor', key: 'A' }
      },
      {
        id: 'pentatonic-blues-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la Pentatónica Blues de C?',
        answer: 'C-Eb-F-Gb-G-Bb',
        options: shuffleOptions('C-Eb-F-Gb-G-Bb', ['C-D-Eb-F-G-Bb', 'C-Eb-F-G-A-Bb']),
        explanation: 'C Pentatónica Blues: C-Eb-F-Gb-G-Bb. Añade la "blue note" (Gb - quinta disminuida) a la pentatónica menor. Esta nota crea la tensión y el color característicos del blues. Fundamental en blues, jazz, rock y R&B.',
        data: { scale: 'Pentatonic Blues', key: 'C' }
      },
      {
        id: 'pentatonic-major-g',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la Pentatónica Mayor de G?',
        answer: 'G-A-B-D-E',
        options: shuffleOptions('G-A-B-D-E', ['G-A-C-D-E', 'G-B-C-D-F']),
        explanation: 'G Pentatónica Mayor: G-A-B-D-E. Elimina C y F# de G mayor. Muy común en música folk, country y rock. G mayor es especialmente popular en guitarra, haciendo esta pentatónica muy accesible para guitarristas.',
        data: { scale: 'Pentatonic Major', key: 'G' }
      },
      {
        id: 'pentatonic-minor-e',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la Pentatónica Menor de E?',
        answer: 'E-G-A-B-D',
        options: shuffleOptions('E-G-A-B-D', ['E-F#-A-B-D', 'E-G-A-C-D']),
        explanation: 'E Pentatónica Menor: E-G-A-B-D. Relativa menor de G pentatónica mayor. E menor es muy natural en guitarra, haciendo esta escala fundamental en rock, blues y metal. Usada por guitarristas como Jimmy Page y Eric Clapton.',
        data: { scale: 'Pentatonic Minor', key: 'E' }
      },
      {
        id: 'pentatonic-relationship',
        type: 'scale-mode',
        question: '¿Qué relación existe entre C Pentatónica Mayor y A Pentatónica Menor?',
        answer: 'Son relativas (mismas notas, diferente centro tonal)',
        options: shuffleOptions('Son relativas (mismas notas, diferente centro tonal)', ['Son completamente diferentes', 'Solo comparten algunas notas']),
        explanation: 'C Pentatónica Mayor (C-D-E-G-A) y A Pentatónica Menor (A-C-D-E-G) son relativas: contienen exactamente las mismas notas pero con diferente centro tonal. Esta relación permite usar ambas escalas sobre los mismos acordes con diferentes colores.',
        data: { concept: 'relative-pentatonics' }
      },
      {
        id: 'blue-note-function',
        type: 'scale-mode',
        question: '¿Qué función cumple la "blue note" en la Pentatónica Blues?',
        answer: 'Añade tensión y color blues (quinta disminuida)',
        options: shuffleOptions('Añade tensión y color blues (quinta disminuida)', ['Es solo decorativa', 'Cambia la tonalidad']),
        explanation: 'La "blue note" (quinta disminuida) añade la tensión y el color característicos del blues. En C blues es Gb, creando un tritono con C que genera inestabilidad. Esta nota se puede "doblar" hacia la quinta justa, técnica fundamental en guitarra blues.',
        data: { concept: 'blue-note-function' }
      },
      {
        id: 'pentatonic-universality',
        type: 'scale-mode',
        question: '¿Por qué las escalas pentatónicas son universales?',
        answer: 'Evitan semitonos, creando sonoridades consonantes',
        options: shuffleOptions('Evitan semitonos, creando sonoridades consonantes', ['Son más fáciles de tocar', 'Tienen menos notas']),
        explanation: 'Las pentatónicas son universales porque evitan los semitonos, eliminando las disonancias más fuertes. Esto las hace consonantes en cualquier contexto y explica su presencia en todas las culturas musicales: china, africana, celta, nativa americana, etc.',
        data: { concept: 'pentatonic-universality' }
      },
      {
        id: 'pentatonic-modes',
        type: 'scale-mode',
        question: '¿Cuántos modos tiene la escala pentatónica?',
        answer: '5 modos (uno desde cada nota)',
        options: shuffleOptions('5 modos (uno desde cada nota)', ['3 modos', '7 modos']),
        explanation: 'La escala pentatónica tiene 5 modos, uno comenzando desde cada nota. Por ejemplo, de C pentatónica mayor: C mayor, D menor, E menor, G mayor, A menor. Cada modo tiene su propio carácter y aplicación musical específica.',
        data: { concept: 'pentatonic-modes' }
      },
      {
        id: 'pentatonic-guitar-patterns',
        type: 'scale-mode',
        question: '¿Por qué las pentatónicas son tan populares en guitarra?',
        answer: 'Patrones simétricos y técnicas expresivas (bending)',
        options: shuffleOptions('Patrones simétricos y técnicas expresivas (bending)', ['Son más fáciles de memorizar', 'Suenan mejor en guitarra']),
        explanation: 'Las pentatónicas son populares en guitarra por sus patrones simétricos en el diapasón y porque permiten técnicas expresivas como bending, vibrato y slides. La ausencia de semitonos hace que cualquier nota "doblada" suene bien.',
        data: { concept: 'pentatonic-guitar' }
      },
      {
        id: 'pentatonic-jazz-usage',
        type: 'scale-mode',
        question: '¿Cómo se usan las pentatónicas en jazz?',
        answer: 'Para crear líneas simples sobre armonía compleja',
        options: shuffleOptions('Para crear líneas simples sobre armonía compleja', ['Solo en blues jazz', 'No se usan en jazz']),
        explanation: 'En jazz, las pentatónicas se usan para crear líneas melódicas simples y directas sobre armonía compleja. Músicos como McCoy Tyner y Herbie Hancock las usan para contrastar con la sofisticación armónica, creando un efecto de simplicidad elegante.',
        data: { concept: 'pentatonic-jazz' }
      },
      {
        id: 'pentatonic-world-music',
        type: 'scale-mode',
        question: '¿En qué músicas tradicionales son fundamentales las pentatónicas?',
        answer: 'China, Japón, África, Escocia, Nativa Americana',
        options: shuffleOptions('China, Japón, África, Escocia, Nativa Americana', ['Solo música occidental', 'Solo música asiática']),
        explanation: 'Las pentatónicas son fundamentales en múltiples tradiciones: música china (gong, shang, jue, zhi, yu), japonesa (gagaku), africana (mbira), escocesa (gaitas), nativa americana (flautas), y muchas otras. Su universalidad demuestra principios acústicos fundamentales.',
        data: { concept: 'pentatonic-world-music' }
      }
    ]
  },

  {
    id: 'ethnic-scales',
    name: 'Escalas Étnicas',
    description: 'Escalas de diferentes tradiciones musicales del mundo',
    category: 'scale-mode',
    totalQuestions: 12,
    questions: [
      {
        id: 'hungarian-minor-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Húngara Menor?',
        answer: 'C-D-Eb-F#-G-Ab-B',
        options: shuffleOptions('C-D-Eb-F#-G-Ab-B', ['C-D-Eb-F-G-Ab-B', 'C-Db-Eb-F#-G-Ab-B']),
        explanation: 'C Húngara Menor: C-D-Eb-F#-G-Ab-B. Combina elementos de menor natural con cuarta aumentada (F#) y séptima mayor (B). Crea dos segundas aumentadas (Eb-F# y Ab-B), dándole su sonoridad exótica característica. Usada en música húngara, gitana y metal.',
        data: { scale: 'Hungarian Minor', key: 'C', origin: 'Hungary' }
      },
      {
        id: 'arabic-hijaz-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Árabe (Hijaz)?',
        answer: 'C-Db-E-F-G-Ab-B',
        options: shuffleOptions('C-Db-E-F-G-Ab-B', ['C-D-E-F-G-A-B', 'C-Db-Eb-F-G-Ab-Bb']),
        explanation: 'C Árabe (Hijaz): C-Db-E-F-G-Ab-B. Caracterizada por la segunda aumentada Db-E y Ab-B. Es fundamental en música árabe, turca y del Medio Oriente. El nombre "Hijaz" se refiere a la región de Arabia Saudí, cuna de esta escala.',
        data: { scale: 'Arabic Hijaz', key: 'C', origin: 'Middle East' }
      },
      {
        id: 'japanese-hirajoshi-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Japonesa (Hirajoshi)?',
        answer: 'C-Db-F-G-Ab',
        options: shuffleOptions('C-Db-F-G-Ab', ['C-D-F-G-A', 'C-Db-E-G-Ab']),
        explanation: 'C Japonesa (Hirajoshi): C-Db-F-G-Ab. Escala pentatónica tradicional japonesa con intervalos únicos. Usada en música tradicional japonesa (gagaku, shamisen) y adoptada por compositores occidentales como Debussy para crear atmósferas orientales.',
        data: { scale: 'Japanese Hirajoshi', key: 'C', origin: 'Japan' }
      },
      {
        id: 'gypsy-major-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Gitana Mayor?',
        answer: 'C-Db-E-F-G-Ab-B',
        options: shuffleOptions('C-Db-E-F-G-Ab-B', ['C-D-E-F-G-A-B', 'C-Db-Eb-F-G-Ab-Bb']),
        explanation: 'C Gitana Mayor: C-Db-E-F-G-Ab-B. Similar al Hijaz árabe, con dos segundas aumentadas (Db-E y Ab-B). Fundamental en música gitana, flamenca y del este de Europa. Crea una sonoridad exótica y apasionada típica de estas tradiciones.',
        data: { scale: 'Gypsy Major', key: 'C', origin: 'Roma/Gypsy' }
      },
      {
        id: 'indian-raga-bhairav-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas del Raga Bhairav en C?',
        answer: 'C-Db-E-F-G-Ab-B',
        options: shuffleOptions('C-Db-E-F-G-Ab-B', ['C-D-E-F-G-A-B', 'C-Db-Eb-F-G-Ab-Bb']),
        explanation: 'Raga Bhairav en C: C-Db-E-F-G-Ab-B. Uno de los ragas más importantes de la música clásica india, asociado con la mañana temprana y sentimientos de devoción. Sus segundas aumentadas crean la sonoridad característica de la música india.',
        data: { scale: 'Indian Raga Bhairav', key: 'C', origin: 'India' }
      },
      {
        id: 'flamenco-phrygian-e',
        type: 'scale-mode',
        question: '¿Qué escala se usa típicamente en flamenco sobre E7?',
        answer: 'E Frigio Dominante (E-F-G#-A-B-C-D)',
        options: shuffleOptions('E Frigio Dominante (E-F-G#-A-B-C-D)', ['E Frigio Natural', 'E Mixolidio']),
        explanation: 'En flamenco se usa E Frigio Dominante sobre E7: E-F-G#-A-B-C-D. Combina la segunda menor del frigio (F) con la tercera mayor (G#), creando el sonido característico del flamenco. Es el 5º modo de A menor armónica.',
        data: { scale: 'Flamenco Phrygian', key: 'E', origin: 'Spain' }
      },
      {
        id: 'chinese-pentatonic-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la Pentatónica China tradicional en C?',
        answer: 'C-D-E-G-A (Gong-Shang-Jue-Zhi-Yu)',
        options: shuffleOptions('C-D-E-G-A (Gong-Shang-Jue-Zhi-Yu)', ['C-D-F-G-A', 'C-Db-F-G-Ab']),
        explanation: 'Pentatónica China en C: C-D-E-G-A, conocida como Gong-Shang-Jue-Zhi-Yu. Es idéntica a la pentatónica mayor occidental pero con nombres y filosofía diferentes. Cada nota tiene significado cosmológico en la filosofía china tradicional.',
        data: { scale: 'Chinese Pentatonic', key: 'C', origin: 'China' }
      },
      {
        id: 'scottish-pentatonic-d',
        type: 'scale-mode',
        question: '¿Qué escala es característica de la música escocesa de gaitas?',
        answer: 'D Pentatónica Mayor (D-E-F#-A-B)',
        options: shuffleOptions('D Pentatónica Mayor (D-E-F#-A-B)', ['D Mayor completa', 'D Menor Natural']),
        explanation: 'La música escocesa de gaitas usa principalmente D Pentatónica Mayor: D-E-F#-A-B. Esta escala se adapta perfectamente a las limitaciones técnicas de la gaita escocesa y crea el sonido característico de la música celta.',
        data: { scale: 'Scottish Pentatonic', key: 'D', origin: 'Scotland' }
      },
      {
        id: 'klezmer-freygish-d',
        type: 'scale-mode',
        question: '¿Qué escala es fundamental en la música Klezmer?',
        answer: 'D Freygish (D-Eb-F#-G-A-Bb-C)',
        options: shuffleOptions('D Freygish (D-Eb-F#-G-A-Bb-C)', ['D Menor Natural', 'D Húngara Menor']),
        explanation: 'La música Klezmer usa D Freygish: D-Eb-F#-G-A-Bb-C. Es similar al frigio dominante pero con séptima menor. Crea la sonoridad característica de la música judía ashkenazi, expresando tanto alegría como melancolía.',
        data: { scale: 'Klezmer Freygish', key: 'D', origin: 'Jewish' }
      },
      {
        id: 'african-pentatonic-usage',
        type: 'scale-mode',
        question: '¿Cómo se usan las pentatónicas en la música africana tradicional?',
        answer: 'Con patrones rítmicos complejos y call-and-response',
        options: shuffleOptions('Con patrones rítmicos complejos y call-and-response', ['Solo melódicamente', 'Igual que en Occidente']),
        explanation: 'En música africana, las pentatónicas se combinan con patrones rítmicos complejos, polirritmia y estructuras call-and-response. Instrumentos como la mbira, kora y balafón usan escalas pentatónicas con técnicas específicamente africanas.',
        data: { concept: 'african-pentatonic-usage', origin: 'Africa' }
      },
      {
        id: 'middle-eastern-microtones',
        type: 'scale-mode',
        question: '¿Qué característica especial tienen las escalas del Medio Oriente?',
        answer: 'Usan microtonos (cuartos de tono)',
        options: shuffleOptions('Usan microtonos (cuartos de tono)', ['Solo usan semitonos', 'Son todas pentatónicas']),
        explanation: 'Las escalas del Medio Oriente (maqamat) usan microtonos o cuartos de tono, intervalos menores al semitono occidental. Esto crea inflexiones melódicas imposibles en el sistema temperado occidental, dando su sonoridad característica.',
        data: { concept: 'middle-eastern-microtones', origin: 'Middle East' }
      },
      {
        id: 'ethnic-scales-influence',
        type: 'scale-mode',
        question: '¿Cómo han influido las escalas étnicas en la música occidental?',
        answer: 'Inspiraron el impresionismo, jazz modal y world music',
        options: shuffleOptions('Inspiraron el impresionismo, jazz modal y world music', ['No han tenido influencia', 'Solo en música folclórica']),
        explanation: 'Las escalas étnicas han influido profundamente en la música occidental: Debussy usó escalas asiáticas, el jazz adoptó escalas africanas, el rock incorporó escalas del Medio Oriente, y la world music fusiona tradiciones globales.',
        data: { concept: 'ethnic-scales-influence' }
      }
    ]
  },

  {
    id: 'synthetic-scales',
    name: 'Escalas Sintéticas',
    description: 'Escalas artificiales y modernas: enigmática, napolitana, prometheus',
    category: 'scale-mode',
    totalQuestions: 10,
    questions: [
      {
        id: 'enigmatic-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Enigmática?',
        answer: 'C-Db-E-F#-G#-A#-B',
        options: shuffleOptions('C-Db-E-F#-G#-A#-B', ['C-D-E-F-G-A-B', 'C-Db-Eb-F-G-Ab-Bb']),
        explanation: 'C Enigmática: C-Db-E-F#-G#-A#-B. Creada por compositores del siglo XIX, contiene múltiples intervalos aumentados. Su sonoridad extremadamente cromática y exótica la hace ideal para crear atmósferas misteriosas en música impresionista y de películas.',
        data: { scale: 'Enigmatic', key: 'C', period: '19th century' }
      },
      {
        id: 'neapolitan-major-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Napolitana Mayor?',
        answer: 'C-Db-Eb-F-G-A-B',
        options: shuffleOptions('C-Db-Eb-F-G-A-B', ['C-D-E-F-G-A-B', 'C-Db-Eb-F-G-Ab-Bb']),
        explanation: 'C Napolitana Mayor: C-Db-Eb-F-G-A-B. Combina elementos del mayor con la segunda menor característica del acorde napolitano. Usada en música clásica romántica para crear colores armónicos exóticos y dramáticos.',
        data: { scale: 'Neapolitan Major', key: 'C', period: 'Romantic' }
      },
      {
        id: 'prometheus-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Prometheus?',
        answer: 'C-D-E-F#-A-Bb',
        options: shuffleOptions('C-D-E-F#-A-Bb', ['C-D-E-F-G-A', 'C-Db-E-F#-G#-Bb']),
        explanation: 'C Prometheus: C-D-E-F#-A-Bb. Creada por Scriabin, es una escala hexatónica (6 notas) basada en el acorde Prometheus (C7#11). Elimina la quinta justa y la séptima mayor, creando una sonoridad flotante y moderna.',
        data: { scale: 'Prometheus', key: 'C', composer: 'Scriabin' }
      },
      {
        id: 'double-harmonic-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Doble Armónica?',
        answer: 'C-Db-E-F-G-Ab-B',
        options: shuffleOptions('C-Db-E-F-G-Ab-B', ['C-D-E-F-G-A-B', 'C-Db-Eb-F-G-Ab-Bb']),
        explanation: 'C Doble Armónica: C-Db-E-F-G-Ab-B. Contiene dos segundas aumentadas (Db-E y Ab-B), de ahí su nombre. Es idéntica al Hijaz árabe y se usa en música bizantina, árabe y para crear efectos exóticos en música occidental.',
        data: { scale: 'Double Harmonic', key: 'C', origin: 'Byzantine' }
      },
      {
        id: 'leading-whole-tone-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Tonos Enteros con Sensible?',
        answer: 'C-D-E-F#-G#-Bb-B',
        options: shuffleOptions('C-D-E-F#-G#-Bb-B', ['C-D-E-F#-G#-Bb', 'C-D-E-F-G-A-B']),
        explanation: 'C Tonos Enteros con Sensible: C-D-E-F#-G#-Bb-B. Combina la escala de tonos enteros con una sensible (B) que resuelve a C. Usada por compositores impresionistas para mantener cierta direccionalidad tonal dentro del cromatismo.',
        data: { scale: 'Leading Whole Tone', key: 'C', period: 'Impressionist' }
      },
      {
        id: 'overtone-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C de Armónicos (Overtone)?',
        answer: 'C-D-E-F#-G-A-Bb',
        options: shuffleOptions('C-D-E-F#-G-A-Bb', ['C-D-E-F-G-A-B', 'C-D-E-F#-G#-A-B']),
        explanation: 'C Escala de Armónicos: C-D-E-F#-G-A-Bb. Basada en la serie armónica natural, combina elementos del lidio (F#) con el mixolidio (Bb). Usada en jazz moderno y música contemporánea para crear sonoridades naturales pero sofisticadas.',
        data: { scale: 'Overtone', key: 'C', basis: 'Harmonic Series' }
      },
      {
        id: 'tritone-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Tritono?',
        answer: 'C-Db-E-F-F#-A-Bb',
        options: shuffleOptions('C-Db-E-F-F#-A-Bb', ['C-D-E-F-G-A-B', 'C-Db-Eb-F-Gb-Ab-Bb']),
        explanation: 'C Escala Tritono: C-Db-E-F-F#-A-Bb. Contiene múltiples tritonos y semitonos, creando máxima tensión armónica. Usada en jazz moderno y música experimental para generar sonoridades extremadamente disonantes y modernas.',
        data: { scale: 'Tritone', key: 'C', characteristic: 'Maximum tension' }
      },
      {
        id: 'six-tone-symmetrical-c',
        type: 'scale-mode',
        question: '¿Cuáles son las notas de la escala C Simétrica de 6 Tonos?',
        answer: 'C-D-Eb-F#-G-A',
        options: shuffleOptions('C-D-Eb-F#-G-A', ['C-D-E-F#-G#-Bb', 'C-Db-E-F-G-Bb']),
        explanation: 'C Simétrica de 6 Tonos: C-D-Eb-F#-G-A. Alterna tonos y semitonos de manera simétrica. Usada en música atonal y serial del siglo XX, crea sonoridades que evitan cualquier centro tonal tradicional.',
        data: { scale: 'Six-Tone Symmetrical', key: 'C', period: '20th century' }
      },
      {
        id: 'synthetic-scales-purpose',
        type: 'scale-mode',
        question: '¿Cuál es el propósito principal de las escalas sintéticas?',
        answer: 'Expandir las posibilidades armónicas más allá del sistema tonal',
        options: shuffleOptions('Expandir las posibilidades armónicas más allá del sistema tonal', ['Reemplazar las escalas tradicionales', 'Solo crear efectos exóticos']),
        explanation: 'Las escalas sintéticas fueron creadas para expandir las posibilidades armónicas más allá del sistema tonal tradicional. Compositores como Scriabin, Debussy y Bartók las usaron para explorar nuevos colores sonoros y expresiones musicales.',
        data: { concept: 'synthetic-scales-purpose' }
      },
      {
        id: 'synthetic-scales-composers',
        type: 'scale-mode',
        question: '¿Qué compositores fueron pioneros en el uso de escalas sintéticas?',
        answer: 'Scriabin, Debussy, Bartók, Messiaen',
        options: shuffleOptions('Scriabin, Debussy, Bartók, Messiaen', ['Bach, Mozart, Beethoven', 'Solo compositores de jazz']),
        explanation: 'Los pioneros de las escalas sintéticas incluyen: Scriabin (Prometheus), Debussy (tonos enteros, pentatónicas asiáticas), Bartók (escalas folclóricas sintéticas), Messiaen (modos de transposición limitada). Revolucionaron la armonía del siglo XX.',
        data: { concept: 'synthetic-scales-composers' }
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
          explanation: `El blues de 12 compases en ${key} sigue la estructura clásica: 
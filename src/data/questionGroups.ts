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
        const allConnections = scales.filter(s => s.chordConnection).map(s => s.chordConnection!);
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
        const allConnections = scales.filter(s => s.chordConnection).map(s => s.chordConnection!);
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
        const allScaleNames = scales.filter(s => s.name.includes('Alterada') || s.name.includes('Lidio') || s.name.includes('Frigio')).map(s => s.name);
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
        const allScaleNames = scales.filter(s => s.name.includes('Húngara') || s.name.includes('Japonesa') || s.name.includes('Árabe')).map(s => s.name);
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
  ...scaleModeGroups
];
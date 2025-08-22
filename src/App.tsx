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

// PROGRESIONES INVERSAS (Acordes → Análisis)
const progressionInverseGroups: QuestionGroup[] = [
  {
    id: 'identify-ii-V-I',
    name: 'Identificar ii-V-I',
    description: 'Reconocer progresiones ii-V-I y su tonalidad',
    category: 'progression-inverse',
    totalQuestions: 15,
    questions: [
      {
        id: 'identify-ii-V-I-C',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nDm7 - G7 - Cmaj7',
        answer: 'ii-V-I en C',
        options: shuffleOptions('ii-V-I en C', ['vi-ii-V en G', 'iii-VI-ii en F']),
        explanation: 'Dm7-G7-Cmaj7 es un ii-V-I en C mayor. Dm7 es el ii grado (subdominante menor), G7 es el V grado (dominante), Cmaj7 es el I grado (tónica). Esta progresión fundamental del jazz crea movimiento por quintas descendentes (D→G→C).',
        data: { key: 'C', progression: 'ii-V-I' }
      },
      {
        id: 'identify-ii-V-I-F',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nGm7 - C7 - Fmaj7',
        answer: 'ii-V-I en F',
        options: shuffleOptions('ii-V-I en F', ['ii-V-I en Bb', 'vi-ii-V en C']),
        explanation: 'Gm7-C7-Fmaj7 es un ii-V-I en F mayor. El análisis funcional: Gm7 (ii - subdominante menor), C7 (V - dominante), Fmaj7 (I - tónica). F mayor es muy común en jazz por su comodidad para instrumentos de viento.',
        data: { key: 'F', progression: 'ii-V-I' }
      },
      {
        id: 'identify-ii-V-I-Bb',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nCm7 - F7 - Bbmaj7',
        answer: 'ii-V-I en Bb',
        options: shuffleOptions('ii-V-I en Bb', ['ii-V-I en Eb', 'iii-VI-ii en F']),
        explanation: 'Cm7-F7-Bbmaj7 es un ii-V-I en Bb mayor. Cm7 (ii grado), F7 (V grado), Bbmaj7 (I grado). Bb mayor es una tonalidad favorita en jazz, especialmente para saxofones y trompetas, por su sonoridad cálida y facilidad técnica.',
        data: { key: 'Bb', progression: 'ii-V-I' }
      },
      {
        id: 'identify-ii-V-I-Eb',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nFm7 - Bb7 - Ebmaj7',
        answer: 'ii-V-I en Eb',
        options: shuffleOptions('ii-V-I en Eb', ['ii-V-I en Ab', 'vi-ii-V en Bb']),
        explanation: 'Fm7-Bb7-Ebmaj7 es un ii-V-I en Eb mayor. Eb mayor (3 bemoles) es común en jazz y música clásica. El movimiento armónico Fm7→Bb7→Ebmaj7 crea la resolución característica del ii-V-I con quintas descendentes.',
        data: { key: 'Eb', progression: 'ii-V-I' }
      },
      {
        id: 'identify-ii-V-I-Ab',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nBbm7 - Eb7 - Abmaj7',
        answer: 'ii-V-I en Ab',
        options: shuffleOptions('ii-V-I en Ab', ['ii-V-I en Db', 'iii-VI-ii en Eb']),
        explanation: 'Bbm7-Eb7-Abmaj7 es un ii-V-I en Ab mayor. Ab mayor (4 bemoles) aparece en baladas de jazz y música romántica. Esta tonalidad tiene una sonoridad particularmente cálida y expresiva, favorita de compositores como Chopin.',
        data: { key: 'Ab', progression: 'ii-V-I' }
      },
      {
        id: 'identify-ii-V-I-Db',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nEbm7 - Ab7 - Dbmaj7',
        answer: 'ii-V-I en Db',
        options: shuffleOptions('ii-V-I en Db', ['ii-V-I en Gb', 'vi-ii-V en Ab']),
        explanation: 'Ebm7-Ab7-Dbmaj7 es un ii-V-I en Db mayor. Db mayor (5 bemoles) es menos común pero aparece en standards como "Body and Soul". Su sonoridad es muy rica y expresiva, típica de baladas sofisticadas.',
        data: { key: 'Db', progression: 'ii-V-I' }
      },
      {
        id: 'identify-ii-V-I-G',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nAm7 - D7 - Gmaj7',
        answer: 'ii-V-I en G',
        options: shuffleOptions('ii-V-I en G', ['ii-V-I en D', 'vi-ii-V en D']),
        explanation: 'Am7-D7-Gmaj7 es un ii-V-I en G mayor. G mayor es fundamental en jazz y música popular. Su sonoridad brillante y la facilidad de ejecución en guitarra la han convertido en una de las tonalidades más usadas en música occidental.',
        data: { key: 'G', progression: 'ii-V-I' }
      },
      {
        id: 'identify-ii-V-I-D',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nEm7 - A7 - Dmaj7',
        answer: 'ii-V-I en D',
        options: shuffleOptions('ii-V-I en D', ['ii-V-I en A', 'iii-VI-ii en A']),
        explanation: 'Em7-A7-Dmaj7 es un ii-V-I en D mayor. D mayor es excelente para instrumentos de cuerda y aparece frecuentemente en música clásica y folk. Su sonoridad clara y brillante la hace ideal para música alegre y optimista.',
        data: { key: 'D', progression: 'ii-V-I' }
      },
      {
        id: 'identify-ii-V-I-A',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nBm7 - E7 - Amaj7',
        answer: 'ii-V-I en A',
        options: shuffleOptions('ii-V-I en A', ['ii-V-I en E', 'vi-ii-V en E']),
        explanation: 'Bm7-E7-Amaj7 es un ii-V-I en A mayor. A mayor es muy cómoda para guitarra y piano, común en jazz y música popular. Su sonoridad natural y accesible la convierte en una tonalidad favorita para músicos de todos los niveles.',
        data: { key: 'A', progression: 'ii-V-I' }
      },
      {
        id: 'identify-ii-V-I-E',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nF#m7 - B7 - Emaj7',
        answer: 'ii-V-I en E',
        options: shuffleOptions('ii-V-I en E', ['ii-V-I en B', 'iii-VI-ii en B']),
        explanation: 'F#m7-B7-Emaj7 es un ii-V-I en E mayor. E mayor es natural para guitarra y aparece en muchos standards de jazz. Su sonoridad abierta y resonante la hace ideal para música que busca un carácter brillante y energético.',
        data: { key: 'E', progression: 'ii-V-I' }
      },
      {
        id: 'identify-ii-V-I-minor-Am',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nBm7b5 - E7 - Am7',
        answer: 'ii-V-i en Am',
        options: shuffleOptions('ii-V-i en Am', ['ii-V-I en C', 'iii-VI-ii en C']),
        explanation: 'Bm7b5-E7-Am7 es un ii-V-i en A menor. Bm7b5 (ii grado con quinta disminuida), E7 (V dominante), Am7 (i menor). El contraste entre el dominante mayor y la resolución menor crea la tensión característica de las progresiones menores.',
        data: { key: 'Am', progression: 'ii-V-i minor' }
      },
      {
        id: 'identify-ii-V-I-minor-Dm',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nEm7b5 - A7 - Dm7',
        answer: 'ii-V-i en Dm',
        options: shuffleOptions('ii-V-i en Dm', ['ii-V-I en F', 'vi-ii-V en F']),
        explanation: 'Em7b5-A7-Dm7 es un ii-V-i en D menor. D menor es muy expresiva y melancólica. El A7 puede incluir b9 (Bb) para mayor tensión, creando el sonido flamenco característico. Esta progresión es común en bossa nova y jazz latino.',
        data: { key: 'Dm', progression: 'ii-V-i minor' }
      },
      {
        id: 'identify-ii-V-I-minor-Em',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nF#m7b5 - B7 - Em7',
        answer: 'ii-V-i en Em',
        options: shuffleOptions('ii-V-i en Em', ['ii-V-I en G', 'iii-VI-ii en G']),
        explanation: 'F#m7b5-B7-Em7 es un ii-V-i en E menor. E menor es muy natural para guitarra y aparece frecuentemente en bossa nova y jazz. Su sonoridad melancólica pero accesible la convierte en una tonalidad favorita para baladas menores.',
        data: { key: 'Em', progression: 'ii-V-i minor' }
      },
      {
        id: 'identify-ii-V-I-minor-Gm',
        type: 'progression-inverse',
        question: '¿Qué progresión y tonalidad representan estos acordes?\nAm7b5 - D7 - Gm7',
        answer: 'ii-V-i en Gm',
        options: shuffleOptions('ii-V-i en Gm', ['ii-V-I en Bb', 'vi-ii-V en Bb']),
        explanation: 'Am7b5-D7-Gm7 es un ii-V-i en G menor. G menor tiene una sonoridad particularmente dramática y expresiva. Mozart la llamó la tonalidad más patética, y es común en música clásica y jazz para expresar emociones profundas.',
        data: { key: 'Gm', progression: 'ii-V-i minor' }
      }
    ]
  },

  {
    id: 'identify-tonal-centers',
    name: 'Identificar Centros Tonales',
    description: 'Reconocer la tonalidad en progresiones complejas',
    category: 'progression-inverse',
    totalQuestions: 12,
    questions: [
      {
        id: 'identify-center-complex-1',
        type: 'progression-inverse',
        question: '¿En qué tonalidad está esta progresión?\nCmaj7 - A7 - Dm7 - G7',
        answer: 'C mayor',
        options: shuffleOptions('C mayor', ['F mayor', 'G mayor']),
        explanation: 'Esta progresión está en C mayor. Análisis: Cmaj7 (I), A7 (VI7 = V7/ii - dominante secundario), Dm7 (ii), G7 (V). El A7 es un dominante secundario que resuelve temporalmente al ii grado, pero el centro tonal permanece en C mayor.',
        data: { key: 'C', complexity: 'secondary-dominants' }
      },
      {
        id: 'identify-center-complex-2',
        type: 'progression-inverse',
        question: '¿En qué tonalidad está esta progresión?\nFmaj7 - D7 - Gm7 - C7',
        answer: 'F mayor',
        options: shuffleOptions('F mayor', ['Bb mayor', 'C mayor']),
        explanation: 'Esta progresión está en F mayor. Análisis: Fmaj7 (I), D7 (VI7 = V7/ii), Gm7 (ii), C7 (V). Aunque contiene un dominante secundario (D7), el centro tonal es claramente F mayor, con una progresión I-VI7-ii-V típica del jazz.',
        data: { key: 'F', complexity: 'secondary-dominants' }
      },
      {
        id: 'identify-center-complex-3',
        type: 'progression-inverse',
        question: '¿En qué tonalidad está esta progresión?\nGmaj7 - E7 - Am7 - D7',
        answer: 'G mayor',
        options: shuffleOptions('G mayor', ['C mayor', 'D mayor']),
        explanation: 'Esta progresión está en G mayor. Análisis: Gmaj7 (I), E7 (VI7 = V7/ii), Am7 (ii), D7 (V). El E7 es dominante secundario del ii grado (Am7). La progresión establece claramente G como centro tonal con la típica secuencia I-VI7-ii-V.',
        data: { key: 'G', complexity: 'secondary-dominants' }
      },
      {
        id: 'identify-center-modal-1',
        type: 'progression-inverse',
        question: '¿En qué tonalidad/modo está esta progresión?\nDm7 - Gmaj7 - Dm7 - Gmaj7',
        answer: 'D Dórico',
        options: shuffleOptions('D Dórico', ['G mayor', 'D menor natural']),
        explanation: 'Esta progresión está en D Dórico. Dm7 (im7), Gmaj7 (IVmaj7). El IV mayor (Gmaj7) es la característica distintiva del modo dórico, diferenciándolo del menor natural que tendría Gm7. El vamp im7-IVmaj7 es típicamente dórico.',
        data: { mode: 'D Dorian', complexity: 'modal' }
      },
      {
        id: 'identify-center-modal-2',
        type: 'progression-inverse',
        question: '¿En qué tonalidad/modo está esta progresión?\nG7 - Fmaj7 - G7 - Fmaj7',
        answer: 'G Mixolidio',
        options: shuffleOptions('G Mixolidio', ['F mayor', 'C mayor']),
        explanation: 'Esta progresión está en G Mixolidio. G7 (I7), Fmaj7 (bVIImaj7). El bVII mayor (Fmaj7) es la nota característica del modo mixolidio. El vamp I7-bVIImaj7 establece claramente el centro modal en G mixolidio.',
        data: { mode: 'G Mixolydian', complexity: 'modal' }
      },
      {
        id: 'identify-center-modal-3',
        type: 'progression-inverse',
        question: '¿En qué tonalidad/modo está esta progresión?\nEm7 - Fmaj7 - Em7 - Fmaj7',
        answer: 'E Frigio',
        options: shuffleOptions('E Frigio', ['F mayor', 'E menor natural']),
        explanation: 'Esta progresión está en E Frigio. Em7 (im7), Fmaj7 (bIImaj7). El bII mayor (Fmaj7) es la característica distintiva del modo frigio. El semitono entre E y F crea la tensión típica frigia, común en música española y flamenca.',
        data: { mode: 'E Phrygian', complexity: 'modal' }
      },
      {
        id: 'identify-center-blues-1',
        type: 'progression-inverse',
        question: '¿En qué tonalidad está este blues?\nC7 - F7 - C7 - G7',
        answer: 'C mayor (blues)',
        options: shuffleOptions('C mayor (blues)', ['F mayor', 'G mayor']),
        explanation: 'Este es un blues en C mayor. C7 (I7), F7 (IV7), C7 (I7), G7 (V7). La estructura I7-IV7-I7-V7 es típica del blues, donde todos los acordes son dominantes. C es claramente el centro tonal establecido por la progresión blues tradicional.',
        data: { key: 'C', style: 'blues' }
      },
      {
        id: 'identify-center-blues-2',
        type: 'progression-inverse',
        question: '¿En qué tonalidad está este blues menor?\nAm7 - Dm7 - Am7 - E7',
        answer: 'A menor (blues)',
        options: shuffleOptions('A menor (blues)', ['D menor', 'E mayor']),
        explanation: 'Este es un blues menor en A menor. Am7 (im7), Dm7 (ivm7), Am7 (im7), E7 (V7). La estructura im7-ivm7-im7-V7 es típica del blues menor, donde el contraste entre acordes menores y el dominante mayor crea la tensión característica.',
        data: { key: 'Am', style: 'minor-blues' }
      },
      {
        id: 'identify-center-substitution-1',
        type: 'progression-inverse',
        question: '¿En qué tonalidad está esta progresión con sustitución?\nDm7 - Db7 - Cmaj7',
        answer: 'C mayor',
        options: shuffleOptions('C mayor', ['Db mayor', 'F mayor']),
        explanation: 'Esta progresión está en C mayor con sustitución tritónica. Dm7 (ii), Db7 (bII7 - sustituto de G7), Cmaj7 (I). El Db7 es una sustitución tritónica del G7 original, creando movimiento cromático en el bajo pero manteniendo C como centro tonal.',
        data: { key: 'C', complexity: 'tritone-substitution' }
      },
      {
        id: 'identify-center-substitution-2',
        type: 'progression-inverse',
        question: '¿En qué tonalidad está esta progresión con sustituciones?\nFmaj7 - B7 - Bbmaj7 - Fmaj7',
        answer: 'F mayor',
        options: shuffleOptions('F mayor', ['Bb mayor', 'B mayor']),
        explanation: 'Esta progresión está en F mayor con sustituciones. Fmaj7 (I), B7 (bV7 - sustituto tritónico), Bbmaj7 (IV), Fmaj7 (I). El B7 sustituye al F7, creando una progresión I-bV7-IV-I con movimiento cromático pero centro tonal en F.',
        data: { key: 'F', complexity: 'tritone-substitution' }
      },
      {
        id: 'identify-center-interchange-1',
        type: 'progression-inverse',
        question: '¿En qué tonalidad está esta progresión con intercambio modal?\nCmaj7 - Abmaj7 - Bb7 - Cmaj7',
        answer: 'C mayor',
        options: shuffleOptions('C mayor', ['Ab mayor', 'Bb mayor']),
        explanation: 'Esta progresión está en C mayor con intercambio modal. Cmaj7 (I), Abmaj7 (bVI - prestado de Cm), Bb7 (bVII - prestado de Cm), Cmaj7 (I). Los acordes prestados del modo menor paralelo añaden color pero mantienen C como centro tonal.',
        data: { key: 'C', complexity: 'modal-interchange' }
      },
      {
        id: 'identify-center-interchange-2',
        type: 'progression-inverse',
        question: '¿En qué tonalidad está esta progresión con intercambio modal?\nGmaj7 - Ebmaj7 - F7 - Gmaj7',
        answer: 'G mayor',
        options: shuffleOptions('G mayor', ['Eb mayor', 'F mayor']),
        explanation: 'Esta progresión está en G mayor con intercambio modal. Gmaj7 (I), Ebmaj7 (bVI - prestado de Gm), F7 (bVII - prestado de Gm), Gmaj7 (I). El intercambio modal con el menor paralelo enriquece la armonía pero G permanece como centro tonal.',
        data: { key: 'G', complexity: 'modal-interchange' }
      }
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
          explanation: `La cadencia rota en ${key} es V-vi: ${chords.join(' - ')}. Esta cadencia "engaña" al oído porque después de escuchar el dominante (${chords[0
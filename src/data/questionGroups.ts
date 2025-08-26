import { QuestionGroup, FlashCard } from '../types/music';

// GRUPO 1: PROGRESIONES DIRECTAS - ANÁLISIS BÁSICO
const basicProgressionGroup: QuestionGroup = {
  id: 'basic-progressions',
  name: 'Fundamentos de Progresiones',
  description: 'Análisis básico de progresiones comunes en diferentes contextos',
  category: 'progression-direct',
  totalQuestions: 15,
  questions: [
    // Ejercicio 1: Contexto clásico
    {
      id: 'classical-cadence-1',
      type: 'progression-direct',
      question: 'En una sonata clásica en Do mayor, ¿qué acordes forman una cadencia auténtica?',
      answer: 'G7 - Cmaj7',
      options: ['G7 - Cmaj7', 'F - Cmaj7', 'Am - Cmaj7', 'Dm7 - G7'],
      explanation: 'La cadencia auténtica V-I es fundamental en el estilo clásico. G7 (dominante) resuelve a Cmaj7 (tónica) creando la tensión-resolución característica.',
      data: { key: 'C', style: 'classical', context: 'sonata' }
    },
    
    // Ejercicio 2: Contexto jazz con extensiones
    {
      id: 'jazz-ii-v-i-1',
      type: 'progression-direct',
      question: 'En un estándar de jazz en Bb, ¿cómo se armoniza típicamente ii-V-I con extensiones?',
      answer: 'Cm11 - F13 - Bbmaj9',
      options: ['Cm11 - F13 - Bbmaj9', 'Cm7 - F7 - Bbmaj7', 'Dm7 - G7 - Cmaj7', 'Gm7 - C7 - Fmaj7'],
      explanation: 'En jazz, el ii-V-I se enriquece con extensiones: Cm11 (ii), F13 (V) y Bbmaj9 (I). Estas tensiones añaden color armónico sin alterar la función básica.',
      data: { key: 'Bb', style: 'jazz', extensions: true }
    },

    // Ejercicio 3: Modal - Dórico
    {
      id: 'dorian-vamp-1',
      type: 'progression-direct',
      question: 'En una improvisación modal en Re dórico, ¿qué vamp de 2 acordes es más característico?',
      answer: 'Dm7 - Gmaj7',
      options: ['Dm7 - Gmaj7', 'Dm7 - Am7', 'Em7 - Am7', 'Dm7 - Bb7'],
      explanation: 'El vamp Dm7-Gmaj7 es típico del modo dórico. El Gmaj7 (IV mayor) es la nota característica que distingue el dórico del menor natural.',
      data: { key: 'D', mode: 'dorian', type: 'vamp' }
    },

    // Ejercicio 4: Blues con sustituciones
    {
      id: 'blues-substitution-1',
      type: 'progression-direct',
      question: 'En un blues en Mi con sustituciones jazz, ¿cómo se puede reemplazar el V7 del compás 9?',
      answer: 'Bb7 (sustitución tritónica)',
      options: ['Bb7 (sustitución tritónica)', 'B7 (dominante)', 'A7 (IV7)', 'F#7 (ii7)'],
      explanation: 'Bb7 es la sustitución tritónica de B7. Ambos acordes comparten el tritono (D#-A) pero Bb7 crea un movimiento cromático descendente más suave.',
      data: { key: 'E', style: 'blues', substitution: 'tritone' }
    },

    // Ejercicio 5: Progresión pop con intercambio modal
    {
      id: 'pop-modal-interchange-1',
      type: 'progression-direct',
      question: 'En una balada pop en La mayor, ¿qué acorde prestado del menor paralelo es más común en la progresión I-?-vi-IV?',
      answer: 'F (bVI)',
      options: ['F (bVI)', 'G (bVII)', 'D (IV)', 'C (bIII)'],
      explanation: 'El bVI (F en La mayor) es un acorde prestado del menor paralelo muy usado en pop. Crea una sonoridad melancólica característica en I-bVI-vi-IV.',
      data: { key: 'A', style: 'pop', technique: 'modal-interchange' }
    },

    // Ejercicio 6: Progresión en compás compuesto
    {
      id: 'compound-meter-1',
      type: 'progression-direct',
      question: 'En una balada irlandesa en 6/8 en Sol mayor, ¿qué progresión de 4 acordes es típica?',
      answer: 'G - Em - C - D',
      options: ['G - Em - C - D', 'G - Am - F - C', 'G - Bm - Em - Am', 'G - F - C - G'],
      explanation: 'I-vi-IV-V es una progresión clásica en música celta. En 6/8, cada acorde dura típicamente 2 tiempos (una negra con puntillo).',
      data: { key: 'G', meter: '6/8', style: 'celtic' }
    },

    // Ejercicio 7: Progresión con dominantes secundarios
    {
      id: 'secondary-dominants-1',
      type: 'progression-direct',
      question: 'En Do mayor, ¿qué dominante secundario precede típicamente al acorde de Am7?',
      answer: 'E7 (V7/vi)',
      options: ['E7 (V7/vi)', 'A7 (V7/ii)', 'B7 (V7/iii)', 'D7 (V7/V)'],
      explanation: 'E7 es el V7/vi (dominante del vi grado). La alteración G# crea una fuerte tendencia hacia Am7, intensificando la resolución.',
      data: { key: 'C', technique: 'secondary-dominant', target: 'vi' }
    },

    // Ejercicio 8: Progresión neosoul con acordes slash
    {
      id: 'neosoul-slash-1',
      type: 'progression-direct',
      question: 'En un groove neosoul en Fa mayor, ¿cómo se puede enriquecer el acorde de Bb con un bajo alternativo?',
      answer: 'Bb/D (primera inversión)',
      options: ['Bb/D (primera inversión)', 'Bb/F (segunda inversión)', 'Bb/A (bajo cromático)', 'Bb/C (cuarta suspendida)'],
      explanation: 'Bb/D crea una línea de bajo más melódica y suave. La primera inversión es común en neosoul para crear movimiento armónico fluido.',
      data: { key: 'F', style: 'neosoul', technique: 'slash-chords' }
    },

    // Ejercicio 9: Progresión flamenca
    {
      id: 'flamenco-progression-1',
      type: 'progression-direct',
      question: 'En el modo frigio de Mi (flamenco), ¿qué progresión de 4 acordes es más auténtica?',
      answer: 'Em - F - G - F',
      options: ['Em - F - G - F', 'Em - Am - B7 - Em', 'Em - C - G - D', 'Em - Dm - Am - Em'],
      explanation: 'Em-F-G-F es típica del flamenco. El F (bII) es característico del modo frigio, creando la sonoridad española distintiva.',
      data: { key: 'E', mode: 'phrygian', style: 'flamenco' }
    },

    // Ejercicio 10: Progresión con poliacordes
    {
      id: 'polychords-1',
      type: 'progression-direct',
      question: 'En jazz moderno, ¿cómo se puede representar un Cmaj7#11 usando poliacordes?',
      answer: 'D/C (tríada de Re sobre bajo de Do)',
      options: ['D/C (tríada de Re sobre bajo de Do)', 'G/C (tríada de Sol sobre bajo de Do)', 'F/C (tríada de Fa sobre bajo de Do)', 'A/C (tríada de La sobre bajo de Do)'],
      explanation: 'D/C crea un Cmaj7#11. La tríada de D (D-F#-A) sobre C produce las notas C-D-E-F#-G-A-B, formando Cmaj7 con #11.',
      data: { key: 'C', technique: 'polychords', extension: '#11' }
    },

    // Ejercicio 11: Progresión en métrica irregular
    {
      id: 'irregular-meter-1',
      type: 'progression-direct',
      question: 'En una composición en 7/8, ¿cómo se distribuyen típicamente 3 acordes en la métrica?',
      answer: '3+2+2 (largo-corto-corto)',
      options: ['3+2+2 (largo-corto-corto)', '2+2+3 (corto-corto-largo)', '4+3 (dos grupos)', '7 (un acorde por tiempo)'],
      explanation: 'La agrupación 3+2+2 es común en 7/8. Crea un patrón asimétrico que da carácter distintivo a la progresión armónica.',
      data: { meter: '7/8', grouping: '3+2+2', style: 'progressive' }
    },

    // Ejercicio 12: Progresión con acordes cuartales
    {
      id: 'quartal-harmony-1',
      type: 'progression-direct',
      question: 'En armonía cuartal, ¿cómo se construye un acorde sobre Do usando solo cuartas?',
      answer: 'C-F-Bb-Eb',
      options: ['C-F-Bb-Eb', 'C-E-G-B', 'C-D-E-F', 'C-G-D-A'],
      explanation: 'C-F-Bb-Eb son cuartas justas apiladas. Esta sonoridad es común en jazz moderno y música impresionista, evitando las terceras tradicionales.',
      data: { technique: 'quartal', root: 'C', intervals: 'perfect-fourths' }
    },

    // Ejercicio 13: Progresión con cromatismo
    {
      id: 'chromatic-progression-1',
      type: 'progression-direct',
      question: 'Para conectar Cmaj7 con Am7 cromáticamente, ¿qué acorde intermedio es más efectivo?',
      answer: 'C#dim7',
      options: ['C#dim7', 'Bm7b5', 'G#m7b5', 'F#7'],
      explanation: 'C#dim7 conecta cromáticamente C con Am. Funciona como acorde de paso, creando movimiento melódico suave en las voces internas.',
      data: { technique: 'chromatic-passing', from: 'Cmaj7', to: 'Am7' }
    },

    // Ejercicio 14: Progresión con rearmornización
    {
      id: 'reharmonization-1',
      type: 'progression-direct',
      question: 'Para rearmonizar "Autumn Leaves" en Bb, ¿qué sustitución moderna funciona en el compás 5 (Ebmaj7)?',
      answer: 'Ebmaj7#11',
      options: ['Ebmaj7#11', 'Eb6/9', 'Ebsus2', 'Eb/G'],
      explanation: 'Ebmaj7#11 añade sofisticación armónica manteniendo la función de subdominante. El #11 (A natural) crea tensión moderna sin alterar la melodía.',
      data: { song: 'autumn-leaves', key: 'Bb', technique: 'reharmonization' }
    },

    // Ejercicio 15: Progresión con modulación
    {
      id: 'modulation-1',
      type: 'progression-direct',
      question: 'Para modular de Do mayor a La mayor, ¿qué acorde pivote es más natural?',
      answer: 'E7 (V en La, iii7 en Do)',
      options: ['E7 (V en La, iii7 en Do)', 'F#m7 (vi en La, iv en Do)', 'A7 (I en La, VI en Do)', 'D7 (IV en La, II en Do)'],
      explanation: 'E7 funciona como dominante de La mayor y como iii7 alterado en Do mayor. Esta dualidad funcional facilita la modulación suave.',
      data: { from: 'C', to: 'A', technique: 'pivot-chord' }
    }
  ]
};

// GRUPO 2: PROGRESIONES INVERSAS - ANÁLISIS AVANZADO
const advancedProgressionGroup: QuestionGroup = {
  id: 'advanced-progressions',
  name: 'Análisis Armónico Avanzado',
  description: 'Identificación de progresiones complejas y análisis contextual',
  category: 'progression-inverse',
  totalQuestions: 15,
  questions: [
    // Ejercicio 1: Identificar estilo por progresión
    {
      id: 'style-identification-1',
      type: 'progression-inverse',
      question: '¿Qué estilo musical sugiere esta progresión?\nCmaj7 - A7 - Dm7 - G7 - Em7 - A7 - Dm7 - G7',
      answer: 'Jazz estándar (círculo de quintas)',
      options: ['Jazz estándar (círculo de quintas)', 'Blues tradicional', 'Pop contemporáneo', 'Música clásica'],
      explanation: 'Esta progresión sigue el círculo de quintas con dominantes secundarios (A7 = V7/ii), típico de los estándares de jazz de los años 30-40.',
      data: { style: 'jazz-standard', technique: 'circle-of-fifths' }
    },

    // Ejercicio 2: Identificar centro tonal ambiguo
    {
      id: 'tonal-center-ambiguous-1',
      type: 'progression-inverse',
      question: '¿Cuál es el centro tonal más probable?\nAm7 - D7 - Gmaj7 - Cmaj7 - F#m7b5 - B7 - Em7',
      answer: 'Em (menor relativo con tonicización de G)',
      options: ['G mayor', 'Em (menor relativo con tonicización de G)', 'C mayor', 'Am (modo dórico)'],
      explanation: 'Aunque comienza sugiriendo G mayor, la progresión F#m7b5-B7-Em7 (ii-V-i en Em) establece Em como centro tonal final.',
      data: { ambiguity: 'relative-major-minor', resolution: 'Em' }
    },

    // Ejercicio 3: Identificar técnica de composición
    {
      id: 'composition-technique-1',
      type: 'progression-inverse',
      question: '¿Qué técnica compositiva se usa aquí?\nCmaj7 - Dbmaj7 - Dmaj7 - Ebmaj7 - Emaj7',
      answer: 'Cromatismo paralelo (planing)',
      options: ['Cromatismo paralelo (planing)', 'Modulación por quintas', 'Intercambio modal', 'Sustitución tritónica'],
      explanation: 'Los acordes mayores se mueven cromáticamente manteniendo la misma estructura. Esta técnica (planing) es común en impresionismo y jazz moderno.',
      data: { technique: 'chromatic-planing', chord-type: 'major7' }
    },

    // Ejercicio 4: Identificar forma musical
    {
      id: 'musical-form-1',
      type: 'progression-inverse',
      question: '¿Qué forma musical sugiere esta estructura armónica?\nA: Cmaj7-Am7-F-G | B: Em7-A7-Dm7-G7 | A: Cmaj7-Am7-F-G | C: F-G-Em7-Am7-Dm7-G7-C',
      answer: 'AABA (forma de canción americana)',
      options: ['AABA (forma de canción americana)', 'Blues de 12 compases', 'Forma sonata', 'Forma rondó'],
      explanation: 'La estructura A-B-A-C con el puente (B) contrastante y la coda extendida (C) es típica de la forma AABA de los estándares americanos.',
      data: { form: 'AABA', style: 'american-songbook' }
    },

    // Ejercicio 5: Identificar época histórica
    {
      id: 'historical-period-1',
      type: 'progression-inverse',
      question: '¿A qué período histórico pertenece esta progresión?\nI - V6/4 - I6 - IV - I6/4 - V7 - I',
      answer: 'Barroco tardío (Bach)',
      options: ['Barroco tardío (Bach)', 'Clasicismo (Mozart)', 'Romanticismo (Chopin)', 'Impresionismo (Debussy)'],
      explanation: 'El uso sistemático de inversiones y la cadencia I6/4-V7-I es característico del estilo barroco tardío, especialmente en Bach.',
      data: { period: 'late-baroque', composer: 'Bach-style' }
    },

    // Ejercicio 6: Identificar función armónica compleja
    {
      id: 'complex-function-1',
      type: 'progression-inverse',
      question: '¿Qué función cumple el segundo acorde?\nCmaj7 - F#7 - G7 - Cmaj7',
      answer: 'Sustitución tritónica del V/V',
      options: ['Sustitución tritónica del V/V', 'Dominante secundario directo', 'Acorde napolitano', 'Sexta aumentada'],
      explanation: 'F#7 sustituye a C7 (V/V). Ambos comparten el tritono E-Bb y resuelven a G7, pero F#7 crea un movimiento cromático más suave.',
      data: { function: 'tritone-sub-of-V/V', resolution: 'G7' }
    },

    // Ejercicio 7: Identificar modalidad
    {
      id: 'modal-identification-1',
      type: 'progression-inverse',
      question: '¿Qué modo se establece?\nDm7 - Gm7 - Am7 - Dm7 - Bb - F - Dm7',
      answer: 'D dórico',
      options: ['D menor natural', 'D dórico', 'D frigio', 'G mayor'],
      explanation: 'La presencia de Bb (bVI) junto con Am7 (v7) confirma D dórico. En menor natural sería A7, en frigio sería Eb.',
      data: { mode: 'dorian', root: 'D', characteristic: 'natural-6' }
    },

    // Ejercicio 8: Identificar género específico
    {
      id: 'genre-identification-1',
      type: 'progression-inverse',
      question: '¿Qué género específico representa?\nEm - C - G - D - Em - C - B7 - Em',
      answer: 'Folk rock / Pop rock',
      options: ['Folk rock / Pop rock', 'Heavy metal', 'Jazz fusion', 'Música clásica'],
      explanation: 'La progresión vi-IV-I-V con resolución a Em es típica del folk/pop rock. El B7 como dominante confirma el centro en Em.',
      data: { genre: 'folk-rock', key: 'Em', pattern: 'vi-IV-I-V' }
    },

    // Ejercicio 9: Identificar técnica de rearmonización
    {
      id: 'reharmonization-technique-1',
      type: 'progression-inverse',
      question: '¿Qué técnica de rearmonización se aplicó?\nOriginal: C - F - G - C | Rearmonizada: C - Db7 - C/E - F - F#dim - G7 - C',
      answer: 'Sustitución tritónica + acordes de paso',
      options: ['Sustitución tritónica + acordes de paso', 'Solo intercambio modal', 'Modulación transitoria', 'Cromatismo descendente'],
      explanation: 'Db7 sustituye a G7, F#dim es acorde de paso entre F y G7, y C/E crea movimiento melódico en el bajo.',
      data: { technique: 'tritone-sub-plus-passing', original: 'C-F-G-C' }
    },

    // Ejercicio 10: Identificar estructura rítmica armónica
    {
      id: 'harmonic-rhythm-1',
      type: 'progression-inverse',
      question: '¿Qué ritmo armónico se establece?\nCompás 1: Cmaj7 | Compás 2: Am7 - Dm7 | Compás 3: G7 | Compás 4: Cmaj7',
      answer: 'Aceleración hacia la cadencia',
      options: ['Ritmo armónico constante', 'Aceleración hacia la cadencia', 'Desaceleración progresiva', 'Ritmo sincopado'],
      explanation: 'El ritmo se acelera en el compás 2 (dos acordes) creando momentum hacia la cadencia G7-Cmaj7, técnica común en jazz.',
      data: { pattern: 'acceleration-to-cadence', style: 'jazz' }
    },

    // Ejercicio 11: Identificar politonalidad
    {
      id: 'polytonality-1',
      type: 'progression-inverse',
      question: '¿Qué técnica avanzada se emplea?\nMano derecha: Cmaj7 - Fmaj7 - Cmaj7 | Mano izquierda: F# - B - F#',
      answer: 'Politonalidad (C mayor + F# mayor)',
      options: ['Politonalidad (C mayor + F# mayor)', 'Modulación cromática', 'Acordes alterados', 'Armonía cuartal'],
      explanation: 'Las dos manos establecen centros tonales diferentes simultáneamente: C mayor arriba y F# mayor abajo, creando politonalidad.',
      data: { technique: 'polytonality', keys: 'C-major + F#-major' }
    },

    // Ejercicio 12: Identificar cadencia específica
    {
      id: 'specific-cadence-1',
      type: 'progression-inverse',
      question: '¿Qué tipo de cadencia es?\nEn La menor: Dm/F - E7 - Am',
      answer: 'Cadencia frigia',
      options: ['Cadencia auténtica', 'Cadencia frigia', 'Cadencia plagal', 'Cadencia rota'],
      explanation: 'Dm/F-E7-Am es cadencia frigia: iv6-V-i. El Dm/F (iv en primera inversión) es característico de esta cadencia en menor.',
      data: { cadence: 'phrygian', key: 'Am', characteristic: 'iv6-V-i' }
    },

    // Ejercicio 13: Identificar secuencia armónica
    {
      id: 'harmonic-sequence-1',
      type: 'progression-inverse',
      question: '¿Qué tipo de secuencia se establece?\nCmaj7 - Am7 - Fmaj7 - Dm7 - Bbmaj7 - Gm7',
      answer: 'Secuencia descendente por terceras',
      options: ['Secuencia descendente por terceras', 'Círculo de quintas', 'Secuencia cromática', 'Progresión modal'],
      explanation: 'Cada par de acordes desciende una tercera: C-A, F-D, Bb-G. Es una secuencia común en música barroca y romántica.',
      data: { sequence: 'descending-thirds', pattern: 'major-minor-pairs' }
    },

    // Ejercicio 14: Identificar función de acorde aumentado
    {
      id: 'augmented-function-1',
      type: 'progression-inverse',
      question: '¿Qué función cumple el acorde aumentado?\nCmaj7 - Caug - F/A - Fm/Ab - Cmaj7',
      answer: 'Acorde de paso cromático',
      options: ['Dominante alterado', 'Acorde de paso cromático', 'Sustitución tritónica', 'Acorde napolitano'],
      explanation: 'Caug conecta cromáticamente Cmaj7 con F/A. La nota G# del Caug se mueve a A en F/A, creando movimiento melódico suave.',
      data: { function: 'chromatic-passing', movement: 'G-G#-A' }
    },

    // Ejercicio 15: Identificar modulación enarmónica
    {
      id: 'enharmonic-modulation-1',
      type: 'progression-inverse',
      question: '¿Qué técnica de modulación se usa?\nEbmaj7 - Bb7 - Ebmaj7 - C#dim7 - F#maj7 - C#7 - F#maj7',
      answer: 'Modulación enarmónica vía acorde disminuido',
      options: ['Modulación por acorde pivote', 'Modulación enarmónica vía acorde disminuido', 'Modulación cromática', 'Modulación por quinta'],
      explanation: 'C#dim7 funciona enarmónicamente como acorde común entre Eb mayor y F# mayor, facilitando la modulación entre tonalidades distantes.',
      data: { modulation: 'enharmonic-diminished', from: 'Eb', to: 'F#' }
    }
  ]
};

// GRUPO 3: ESCALAS MODALES - CONTEXTO PRÁCTICO
const modalScalesGroup: QuestionGroup = {
  id: 'modal-scales-practical',
  name: 'Escalas Modales en Contexto',
  description: 'Aplicación práctica de modos en diferentes situaciones musicales',
  category: 'scale-mode',
  totalQuestions: 14,
  questions: [
    // Ejercicio 1: Modo sobre acorde específico en contexto
    {
      id: 'dorian-over-chord-1',
      type: 'scale-mode',
      question: 'En "So What" de Miles Davis, ¿qué escala se usa sobre el Dm7 del compás 1-8?',
      answer: 'D dórico',
      options: ['D menor natural', 'D dórico', 'D menor armónica', 'D frigio'],
      explanation: 'En "So What", el Dm7 se toca con D dórico. La nota Bb (6ª mayor) es característica y crea la sonoridad modal distintiva de esta pieza.',
      data: { song: 'so-what', chord: 'Dm7', context: 'modal-jazz' }
    },

    // Ejercicio 2: Modo en música étnica
    {
      id: 'phrygian-flamenco-1',
      type: 'scale-mode',
      question: 'En flamenco por Soleá, ¿qué modo se usa tradicionalmente sobre el acorde de Em?',
      answer: 'E frigio (modo flamenco)',
      options: ['E menor natural', 'E frigio (modo flamenco)', 'E dórico', 'E menor armónica'],
      explanation: 'El modo frigio es fundamental en flamenco. La nota F (b2) crea la tensión característica española, especialmente en la cadencia F-Em.',
      data: { style: 'flamenco', palo: 'solea', characteristic: 'b2-interval' }
    },

    // Ejercicio 3: Modo en rock progresivo
    {
      id: 'mixolydian-rock-1',
      type: 'scale-mode',
      question: 'En "Fire on the Mountain" de Grateful Dead, ¿qué modo se usa sobre el riff principal en B?',
      answer: 'B mixolidio',
      options: ['B mayor', 'B mixolidio', 'B dórico', 'B menor'],
      explanation: 'B mixolidio se usa sobre el riff B-A-G. La nota A (b7) es característica del mixolidio y crea la sonoridad rock modal típica.',
      data: { song: 'fire-on-the-mountain', key: 'B', style: 'modal-rock' }
    },

    // Ejercicio 4: Modo en música celta
    {
      id: 'dorian-celtic-1',
      type: 'scale-mode',
      question: 'En una melodía irlandesa en Em con F# natural, ¿qué modo se está usando?',
      answer: 'E dórico',
      options: ['E menor natural', 'E dórico', 'E mixolidio', 'E jónico'],
      explanation: 'E dórico contiene F# (6ª mayor). Esta sonoridad es muy común en música celta, dando un carácter menos melancólico que el menor natural.',
      data: { style: 'irish-traditional', characteristic: 'natural-6', mood: 'bittersweet' }
    },

    // Ejercicio 5: Modo en jazz fusion
    {
      id: 'lydian-fusion-1',
      type: 'scale-mode',
      question: 'Sobre un acorde Fmaj7#11 en fusion, ¿qué escala proporciona la sonoridad más auténtica?',
      answer: 'F lidio',
      options: ['F mayor', 'F lidio', 'F mixolidio', 'F jónico'],
      explanation: 'F lidio contiene B natural (#11), que define el color del acorde Fmaj7#11. Es esencial en jazz fusion para esa sonoridad "flotante".',
      data: { style: 'jazz-fusion', chord: 'Fmaj7#11', characteristic: '#11-interval' }
    },

    // Ejercicio 6: Modo en música medieval
    {
      id: 'locrian-medieval-1',
      type: 'scale-mode',
      question: 'En música medieval, ¿qué modo se evitaba por su inestabilidad armónica?',
      answer: 'Locrio (diabolus in musica)',
      options: ['Frigio', 'Locrio (diabolus in musica)', 'Dórico', 'Mixolidio'],
      explanation: 'El modo locrio se evitaba por contener el tritono entre la tónica y la quinta (B-F). Era considerado "diabolus in musica" por su inestabilidad.',
      data: { period: 'medieval', reason: 'tritone-instability', nickname: 'diabolus-in-musica' }
    },

    // Ejercicio 7: Modo en bossa nova
    {
      id: 'ionian-bossa-1',
      type: 'scale-mode',
      question: 'En "Girl from Ipanema", ¿qué escala se usa sobre el Fmaj7 de los primeros compases?',
      answer: 'F jónico (mayor)',
      options: ['F jónico (mayor)', 'F lidio', 'F mixolidio', 'F dórico'],
      explanation: 'F jónico (escala mayor) se usa sobre Fmaj7 en bossa nova. Aunque simple, su aplicación rítmica y armónica crea la sofisticación del género.',
      data: { song: 'girl-from-ipanema', style: 'bossa-nova', context: 'tonic-major' }
    },

    // Ejercicio 8: Modo en música hindú
    {
      id: 'raga-bhairav-1',
      type: 'scale-mode',
      question: '¿Qué modo occidental se aproxima más al Raga Bhairav indio?',
      answer: 'Frigio dominante (5º modo de la menor armónica)',
      options: ['Frigio natural', 'Frigio dominante (5º modo de la menor armónica)', 'Dórico', 'Menor armónica'],
      explanation: 'El Raga Bhairav (C-Db-E-F-G-Ab-B) corresponde al frigio dominante occidental. La 3ª mayor (E) es característica distintiva.',
      data: { origin: 'indian-classical', raga: 'bhairav', western-equivalent: 'phrygian-dominant' }
    },

    // Ejercicio 9: Modo en música electrónica
    {
      id: 'aeolian-electronic-1',
      type: 'scale-mode',
      question: 'En música electrónica dark ambient, ¿qué modo crea la atmósfera más sombría?',
      answer: 'Eólico (menor natural)',
      options: ['Jónico', 'Dórico', 'Eólico (menor natural)', 'Locrio'],
      explanation: 'El modo eólico (menor natural) es preferido en dark ambient por su sonoridad melancólica y estable, ideal para texturas atmosféricas prolongadas.',
      data: { style: 'dark-ambient', mood: 'melancholic', stability: 'stable-minor' }
    },

    // Ejercicio 10: Modo en música brasileña
    {
      id: 'mixolydian-brazilian-1',
      type: 'scale-mode',
      question: 'En el choro brasileño, ¿qué modo se usa frecuentemente para crear tensión melódica?',
      answer: 'Mixolidio (con 7ª menor)',
      options: ['Mayor natural', 'Mixolidio (con 7ª menor)', 'Dórico', 'Lidio'],
      explanation: 'El mixolidio es común en choro. La 7ª menor crea tensión que resuelve elegantemente, característica del virtuosismo melódico del género.',
      data: { style: 'choro-brasileiro', function: 'melodic-tension', resolution: 'elegant' }
    },

    // Ejercicio 11: Modo en música sacra
    {
      id: 'dorian-sacred-1',
      type: 'scale-mode',
      question: 'En el canto gregoriano, ¿qué modo se asociaba con el carácter "serio y noble"?',
      answer: 'Dórico (primer modo auténtico)',
      options: ['Jónico', 'Dórico (primer modo auténtico)', 'Frigio', 'Lidio'],
      explanation: 'El modo dórico era considerado el más noble en música sacra medieval. Su equilibrio entre mayor y menor lo hacía ideal para textos solemnes.',
      data: { period: 'medieval', context: 'gregorian-chant', character: 'serious-noble' }
    },

    // Ejercicio 12: Modo en jazz moderno
    {
      id: 'altered-scale-1',
      type: 'scale-mode',
      question: 'Sobre un acorde G7alt, ¿qué escala proporciona todas las alteraciones disponibles?',
      answer: 'G alterada (7º modo de Ab menor melódica)',
      options: ['G mixolidio', 'G alterada (7º modo de Ab menor melódica)', 'G frigio dominante', 'G disminuida'],
      explanation: 'La escala alterada (G-Ab-Bb-B-Db-Eb-F) contiene todas las alteraciones: b9, #9, #11, b13. Es el 7º modo de Ab menor melódica.',
      data: { chord: 'G7alt', alterations: 'b9-#9-#11-b13', parent: 'Ab-melodic-minor' }
    },

    // Ejercicio 13: Modo en música folk
    {
      id: 'mixolydian-folk-1',
      type: 'scale-mode',
      question: 'En "Old Joe Clark" (fiddle tune), ¿qué modo crea el carácter "abierto" típico del bluegrass?',
      answer: 'A mixolidio',
      options: ['A mayor', 'A mixolidio', 'A dórico', 'A menor'],
      explanation: 'A mixolidio (con G natural) es típico en fiddle tunes. La 7ª menor crea el sonido "abierto" y rústico característico del bluegrass.',
      data: { style: 'bluegrass-fiddle', tune: 'old-joe-clark', character: 'open-rustic' }
    },

    // Ejercicio 14: Modo en música contemporánea
    {
      id: 'lydian-contemporary-1',
      type: 'scale-mode',
      question: 'En la música de Joe Satriani, ¿qué modo crea la sonoridad "etérea" en "Flying in a Blue Dream"?',
      answer: 'Lidio (#4)',
      options: ['Mayor natural', 'Lidio (#4)', 'Mixolidio', 'Dórico'],
      explanation: 'El modo lidio con su #4 característica crea una sonoridad "flotante" y etérea, muy usada por Satriani para efectos atmosféricos.',
      data: { artist: 'joe-satriani', song: 'flying-in-blue-dream', effect: 'ethereal-floating' }
    }
  ]
};

// GRUPO 4: ESCALAS ÉTNICAS Y EXÓTICAS
const ethnicScalesGroup: QuestionGroup = {
  id: 'ethnic-exotic-scales',
  name: 'Escalas Étnicas y Exóticas',
  description: 'Escalas de diferentes culturas y sus aplicaciones musicales',
  category: 'scale-mode',
  totalQuestions: 12,
  questions: [
    // Ejercicio 1: Escala japonesa en contexto
    {
      id: 'hirajoshi-context-1',
      type: 'scale-mode',
      question: 'En música de videojuegos con ambientación japonesa, ¿qué escala pentatónica crea la atmósfera más auténtica?',
      answer: 'Hirajoshi (C-Db-F-G-Ab)',
      options: ['Pentatónica menor', 'Hirajoshi (C-Db-F-G-Ab)', 'Pentatónica mayor', 'In Sen'],
      explanation: 'La escala Hirajoshi con sus semitonos característicos (C-Db y G-Ab) evoca inmediatamente la sonoridad japonesa tradicional.',
      data: { origin: 'japanese', context: 'video-game-music', intervals: 'characteristic-semitones' }
    },

    // Ejercicio 2: Escala árabe en contexto
    {
      id: 'hijaz-context-1',
      type: 'scale-mode',
      question: 'Para evocar el Medio Oriente en una composición, ¿qué escala contiene el intervalo aumentado característico?',
      answer: 'Hijaz (C-Db-E-F-G-Ab-B)',
      options: ['Frigio', 'Hijaz (C-Db-E-F-G-Ab-B)', 'Menor armónica', 'Doble armónica'],
      explanation: 'La escala Hijaz contiene el intervalo aumentado Db-E (segunda aumentada) que es característico de la música árabe y del Medio Oriente.',
      data: { origin: 'middle-eastern', characteristic: 'augmented-second', interval: 'Db-E' }
    },

    // Ejercicio 3: Escala húngara en contexto
    {
      id: 'hungarian-context-1',
      type: 'scale-mode',
      question: 'En las Rapsodias Húngaras de Liszt, ¿qué escala crea el carácter gitano distintivo?',
      answer: 'Húngara menor (C-D-Eb-F#-G-Ab-B)',
      options: ['Menor armónica', 'Húngara menor (C-D-Eb-F#-G-Ab-B)', 'Frigio dominante', 'Menor melódica'],
      explanation: 'La escala húngara menor con sus dos segundas aumentadas (Eb-F# y Ab-B) crea la sonoridad gitana característica de las rapsodias.',
      data: { composer: 'liszt', work: 'hungarian-rhapsodies', intervals: 'two-augmented-seconds' }
    },

    // Ejercicio 4: Escala india en contexto
    {
      id: 'raga-yaman-1',
      type: 'scale-mode',
      question: 'En música clásica india, ¿qué raga se toca tradicionalmente al atardecer?',
      answer: 'Raga Yaman (equivale a Lidio)',
      options: ['Raga Bhairav', 'Raga Yaman (equivale a Lidio)', 'Raga Kafi', 'Raga Bhairavi'],
      explanation: 'Raga Yaman (C-D-E-F#-G-A-B) se asocia con el atardecer. Su sonoridad brillante (equivale al modo lidio) evoca la transición día-noche.',
      data: { origin: 'indian-classical', time: 'evening', mood: 'bright-contemplative' }
    },

    // Ejercicio 5: Escala china en contexto
    {
      id: 'chinese-pentatonic-1',
      type: 'scale-mode',
      question: 'En música tradicional china, ¿qué escala pentatónica se usa más frecuentemente?',
      answer: 'Gong (C-D-E-G-A) - pentatónica mayor',
      options: ['Yu (pentatónica menor)', 'Gong (C-D-E-G-A) - pentatónica mayor', 'Zhi (modo sobre G)', 'Shang (modo sobre D)'],
      explanation: 'La escala Gong es la más fundamental en música china. Corresponde a la pentatónica mayor occidental y se considera la más equilibrada.',
      data: { origin: 'chinese-traditional', name: 'gong', balance: 'most-fundamental' }
    },

    // Ejercicio 6: Escala flamenca específica
    {
      id: 'flamenco-por-arriba-1',
      type: 'scale-mode',
      question: 'En flamenco "por arriba" (tonalidad de E), ¿qué escala se usa para falsetas melódicas?',
      answer: 'E frigio dominante (E-F-G#-A-B-C-D)',
      options: ['E frigio natural', 'E frigio dominante (E-F-G#-A-B-C-D)', 'E menor armónica', 'E menor natural'],
      explanation: 'El frigio dominante con su 3ª mayor (G#) es esencial en flamenco. Permite tanto acordes menores como el dominante B7.',
      data: { style: 'flamenco', position: 'por-arriba', key: 'E', function: 'melodic-falsetas' }
    },

    // Ejercicio 7: Escala persa en contexto
    {
      id: 'persian-dastgah-1',
      type: 'scale-mode',
      question: 'En música persa clásica, ¿qué dastgah se caracteriza por tener dos semitonos consecutivos?',
      answer: 'Dastgah-e Shur',
      options: ['Dastgah-e Mahur', 'Dastgah-e Shur', 'Dastgah-e Segah', 'Dastgah-e Chahargah'],
      explanation: 'Dastgah-e Shur contiene los semitonos consecutivos que crean la tensión melódica característica de la música persa clásica.',
      data: { origin: 'persian-classical', characteristic: 'consecutive-semitones', emotion: 'melancholic' }
    },

    // Ejercicio 8: Escala balcánica
    {
      id: 'balkan-scale-1',
      type: 'scale-mode',
      question: 'En música balcánica (Serbia, Bulgaria), ¿qué escala crea el carácter modal distintivo?',
      answer: 'Escala balcánica (C-Db-E-F-G-Ab-Bb)',
      options: ['Frigio', 'Escala balcánica (C-Db-E-F-G-Ab-Bb)', 'Menor armónica', 'Doble armónica'],
      explanation: 'La escala balcánica combina elementos del frigio y menor armónica, creando la sonoridad característica de los Balcanes.',
      data: { region: 'balkans', countries: 'serbia-bulgaria', character: 'modal-distinctive' }
    },

    // Ejercicio 9: Escala judía en contexto
    {
      id: 'jewish-freygish-1',
      type: 'scale-mode',
      question: 'En música klezmer, ¿qué escala se conoce como "Freygish" o "modo judío"?',
      answer: 'Frigio dominante (Ahava Rabbah)',
      options: ['Frigio natural', 'Frigio dominante (Ahava Rabbah)', 'Menor armónica', 'Doble armónica'],
      explanation: 'Freygish (frigio dominante) es fundamental en klezmer. Su nombre hebreo "Ahava Rabbah" significa "gran amor", reflejando su expresividad.',
      data: { style: 'klezmer', hebrew-name: 'ahava-rabbah', meaning: 'great-love' }
    },

    // Ejercicio 10: Escala turca en contexto
    {
      id: 'turkish-makam-1',
      type: 'scale-mode',
      question: 'En música turca clásica, ¿qué makam utiliza cuartos de tono?',
      answer: 'Makam Rast (con alteraciones microtonales)',
      options: ['Makam Hicaz', 'Makam Rast (con alteraciones microtonales)', 'Makam Nihavend', 'Makam Kurdili'],
      explanation: 'Makam Rast utiliza cuartos de tono específicos que no existen en el sistema temperado occidental, creando su sonoridad única.',
      data: { origin: 'turkish-classical', feature: 'quarter-tones', system: 'non-tempered' }
    },

    // Ejercicio 11: Escala africana en contexto
    {
      id: 'african-pentatonic-1',
      type: 'scale-mode',
      question: 'En música tradicional africana occidental, ¿qué escala pentatónica es más común?',
      answer: 'Pentatónica menor con blue note',
      options: ['Pentatónica mayor', 'Pentatónica menor con blue note', 'Pentatónica simétrica', 'Hexatónica'],
      explanation: 'La pentatónica menor con blue note (b5 añadida) es fundamental en África occidental y fue la base del desarrollo del blues americano.',
      data: { region: 'west-africa', influence: 'blues-development', note: 'blue-note-b5' }
    },

    // Ejercicio 12: Escala celta en contexto
    {
      id: 'celtic-modes-1',
      type: 'scale-mode',
      question: 'En música celta irlandesa, ¿qué modo se prefiere para melodías alegres de danza?',
      answer: 'Mixolidio (con 7ª menor)',
      options: ['Mayor natural', 'Mixolidio (con 7ª menor)', 'Dórico', 'Eólico'],
      explanation: 'El mixolidio es preferido en jigs y reels irlandeses. Su 7ª menor evita la tensión del sensible, creando un carácter más relajado y danzable.',
      data: { style: 'irish-traditional', dances: 'jigs-reels', character: 'relaxed-danceable' }
    }
  ]
};

// GRUPO 5: ESCALAS SINTÉTICAS Y MODERNAS
const syntheticScalesGroup: QuestionGroup = {
  id: 'synthetic-modern-scales',
  name: 'Escalas Sintéticas y Modernas',
  description: 'Escalas artificiales y construcciones teóricas avanzadas',
  category: 'scale-mode',
  totalQuestions: 10,
  questions: [
    // Ejercicio 1: Escala de tonos enteros en contexto
    {
      id: 'whole-tone-impressionist-1',
      type: 'scale-mode',
      question: 'En "Clair de Lune" de Debussy, ¿qué escala crea el efecto "flotante" característico?',
      answer: 'Escala de tonos enteros',
      options: ['Pentatónica', 'Escala de tonos enteros', 'Cromática', 'Octatónica'],
      explanation: 'La escala de tonos enteros (C-D-E-F#-G#-Bb) elimina los semitonos, creando la ambigüedad tonal "flotante" del impresionismo.',
      data: { composer: 'debussy', work: 'clair-de-lune', effect: 'floating-ambiguous' }
    },

    // Ejercicio 2: Escala octatónica en contexto
    {
      id: 'octatonic-stravinsky-1',
      type: 'scale-mode',
      question: 'En "La Consagración de la Primavera" de Stravinsky, ¿qué escala simétrica se usa para crear tensión?',
      answer: 'Octatónica (tono-semitono)',
      options: ['Cromática', 'Octatónica (tono-semitono)', 'Tonos enteros', 'Hexatónica'],
      explanation: 'La escala octatónica alterna tonos y semitonos, creando simetría y tensión. Stravinsky la usó extensivamente para efectos dramáticos.',
      data: { composer: 'stravinsky', work: 'rite-of-spring', pattern: 'tone-semitone-alternating' }
    },

    // Ejercicio 3: Escala enigmática en contexto
    {
      id: 'enigmatic-scale-1',
      type: 'scale-mode',
      question: 'La "Escala Enigmática" de Verdi (C-Db-E-F#-G#-A#-B) se caracteriza por:',
      answer: 'Tres tonos enteros consecutivos al inicio',
      options: ['Simetría perfecta', 'Tres tonos enteros consecutivos al inicio', 'Solo semitonos', 'Estructura pentatónica'],
      explanation: 'La escala enigmática tiene tres tonos enteros seguidos (C-D-E-F#), creando una sonoridad única que Verdi exploró en sus últimas obras.',
      data: { composer: 'verdi', characteristic: 'three-consecutive-whole-tones', period: 'late-romantic' }
    },

    // Ejercicio 4: Escala Prometheus en contexto
    {
      id: 'prometheus-scriabin-1',
      type: 'scale-mode',
      question: 'La escala "Prometheus" de Scriabin (C-D-E-F#-A-Bb) se basa en:',
      answer: 'Cuartas justas y tritono',
      options: ['Terceras apiladas', 'Cuartas justas y tritono', 'Quintas perfectas', 'Segundas menores'],
      explanation: 'La escala Prometheus se construye con cuartas (C-F#-Bb) y su tritono complementario, reflejando la armonía cuartal de Scriabin.',
      data: { composer: 'scriabin', construction: 'fourths-and-tritone', harmony: 'quartal' }
    },

    // Ejercicio 5: Escala bebop en contexto
    {
      id: 'bebop-scale-parker-1',
      type: 'scale-mode',
      question: 'En solos de Charlie Parker, ¿qué nota cromática se añade a la escala mayor para crear la "escala bebop mayor"?',
      answer: '#5 (sexta aumentada)',
      options: ['b3 (tercera menor)', '#5 (sexta aumentada)', 'b7 (séptima menor)', '#4 (cuarta aumentada)'],
      explanation: 'La escala bebop mayor añade #5 entre la 5ª y 6ª. Esto permite que las notas del acorde caigan en tiempos fuertes en frases de corcheas.',
      data: { artist: 'charlie-parker', addition: 'augmented-fifth', purpose: 'chord-tones-on-beats' }
    },

    // Ejercicio 6: Escala alterada en jazz moderno
    {
      id: 'altered-scale-modern-1',
      type: 'scale-mode',
      question: 'La escala alterada (7º modo de menor melódica) contiene todas estas alteraciones EXCEPTO:',
      answer: '11 natural',
      options: ['b9', '#9', '11 natural', 'b13'],
      explanation: 'La escala alterada contiene b9, #9, #11 y b13, pero NO la 11 natural. Es perfecta para acordes dominantes con máxima tensión.',
      data: { parent: 'melodic-minor-7th-mode', missing: 'natural-11', use: 'maximum-tension-dominants' }
    },

    // Ejercicio 7: Escala hexatónica en contexto
    {
      id: 'hexatonic-scale-1',
      type: 'scale-mode',
      question: 'Una escala hexatónica que combina dos tríadas aumentadas separadas por semitono se llama:',
      answer: 'Escala de tonos enteros aumentada',
      options: ['Escala blues', 'Escala de tonos enteros aumentada', 'Escala cromática', 'Escala pentatónica'],
      explanation: 'Esta escala hexatónica (6 notas) combina dos tríadas aumentadas: C-E-G# y Db-F-A, creando simetría y ambigüedad tonal.',
      data: { structure: 'two-augmented-triads', interval: 'semitone-apart', notes: 6 }
    },

    // Ejercicio 8: Escala napolitana en contexto
    {
      id: 'neapolitan-scale-1',
      type: 'scale-mode',
      question: 'La escala napolitana menor (C-Db-Eb-F-G-Ab-B) se caracteriza por:',
      answer: 'Séptima mayor con segundo grado bemol',
      options: ['Solo intervalos menores', 'Séptima mayor con segundo grado bemol', 'Simetría perfecta', 'Estructura pentatónica'],
      explanation: 'La escala napolitana menor combina la menor natural con séptima mayor y segundo grado bemol, creando una sonoridad exótica única.',
      data: { characteristic: 'major-7th-with-flat-2', origin: 'neapolitan-classical', sound: 'exotic' }
    },

    // Ejercicio 9: Escala por cuartas en contexto moderno
    {
      id: 'quartal-scale-modern-1',
      type: 'scale-mode',
      question: 'En jazz moderno, una escala construida enteramente por cuartas justas desde C sería:',
      answer: 'C-F-Bb-Eb-Ab-Db-Gb',
      options: ['C-E-G-B-D-F#-A', 'C-F-Bb-Eb-Ab-Db-Gb', 'C-D-E-F-G-A-B', 'C-Db-Eb-F-Gb-Ab-Bb'],
      explanation: 'Apilando cuartas justas desde C obtenemos C-F-Bb-Eb-Ab-Db-Gb. Esta construcción evita las terceras tradicionales, creando armonía cuartal.',
      data: { construction: 'stacked-perfect-fourths', harmony: 'quartal', avoids: 'traditional-thirds' }
    },

    // Ejercicio 10: Escala microtonal en contexto
    {
      id: 'microtonal-scale-1',
      type: 'scale-mode',
      question: 'En música espectral contemporánea, ¿qué escala se basa en la serie armónica natural?',
      answer: 'Escala de armónicos (overtone scale)',
      options: ['Escala cromática', 'Escala de armónicos (overtone scale)', 'Escala octatónica', 'Escala de tonos enteros'],
      explanation: 'La escala de armónicos usa las frecuencias de la serie armónica natural, incluyendo microtonos como el 7º armónico (Bb bemol).',
      data: { basis: 'natural-harmonic-series', includes: 'microtones', style: 'spectral-music' }
    }
  ]
};

export const questionGroups: QuestionGroup[] = [
  basicProgressionGroup,
  advancedProgressionGroup,
  modalScalesGroup,
  ethnicScalesGroup,
  syntheticScalesGroup
];
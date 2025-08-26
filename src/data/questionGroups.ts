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
      question: 'En el primer movimiento de una sonata de Mozart en Do mayor, ¿qué cadencia confirma la tonalidad en la exposición?',
      answer: 'G7 - Cmaj7',
      options: ['G7 - Cmaj7', 'F - Cmaj7', 'Am - Cmaj7', 'Dm7 - G7'],
      explanation: 'En el estilo clásico de Mozart, la cadencia auténtica V-I (G7-Cmaj7) es esencial para confirmar la tonalidad principal en la exposición de una sonata.',
      data: { key: 'C', style: 'classical', context: 'sonata' }
    },
    
    // Ejercicio 2: Contexto jazz con extensiones
    {
      id: 'jazz-ii-v-i-1',
      type: 'progression-direct',
      question: 'En "Autumn Leaves" (compás 5-7), ¿cómo se enriquece el ii-V-I en Bb con tensiones modernas?',
      answer: 'Cm11 - F13 - Bbmaj9',
      options: ['Cm11 - F13 - Bbmaj9', 'Cm7 - F7 - Bbmaj7', 'Dm7 - G7 - Cmaj7', 'Gm7 - C7 - Fmaj7'],
      explanation: 'En "Autumn Leaves", el ii-V-I se sofistica con Cm11 (añade 11ª), F13 (tensión 13ª) y Bbmaj9 (9ª mayor), creando el color jazz moderno.',
      data: { key: 'Bb', style: 'jazz', extensions: true }
    },

    // Ejercicio 3: Modal - Dórico
    {
      id: 'dorian-vamp-1',
      type: 'progression-direct',
      question: 'En "So What" de Miles Davis (sección A), ¿qué vamp modal define el carácter de la pieza?',
      answer: 'Dm7 - Gmaj7',
      options: ['Dm7 - Gmaj7', 'Dm7 - Am7', 'Em7 - Am7', 'Dm7 - Bb7'],
      explanation: 'En "So What", el vamp Dm7-Gmaj7 establece Re dórico. El Gmaj7 (IV mayor) con su Si natural es la nota característica que define este modo.',
      data: { key: 'D', mode: 'dorian', type: 'vamp' }
    },

    // Ejercicio 4: Blues con sustituciones
    {
      id: 'blues-substitution-1',
      type: 'progression-direct',
      question: 'En "Stormy Monday" (compás 9), ¿qué sustitución crea el movimiento cromático descendente característico?',
      answer: 'Bb7 (sustitución tritónica)',
      options: ['Bb7 (sustitución tritónica)', 'B7 (dominante)', 'A7 (IV7)', 'F#7 (ii7)'],
      explanation: 'En "Stormy Monday", Bb7 sustituye a B7 (ambos comparten el tritono D#-A), pero Bb7 crea el movimiento cromático Bb-A-G# típico del blues jazz.',
      data: { key: 'E', style: 'blues', substitution: 'tritone' }
    },

    // Ejercicio 5: Progresión pop con intercambio modal
    {
      id: 'pop-modal-interchange-1',
      type: 'progression-direct',
      question: 'En "Let It Be" de The Beatles (estrofa), ¿qué acorde prestado crea el efecto melancólico en la progresión?',
      answer: 'F (bVI)',
      options: ['F (bVI)', 'G (bVII)', 'D (IV)', 'C (bIII)'],
      explanation: 'En "Let It Be", el F (bVI en La mayor) es prestado del menor paralelo. Este acorde crea la sonoridad melancólica característica de las baladas pop.',
      data: { key: 'A', style: 'pop', technique: 'modal-interchange' }
    },

    // Ejercicio 6: Progresión en compás compuesto
    {
      id: 'compound-meter-1',
      type: 'progression-direct',
      question: 'En "Danny Boy" (compás 1-4), ¿qué progresión en 6/8 establece el carácter irlandés?',
      answer: 'G - Em - C - D',
      options: ['G - Em - C - D', 'G - Am - F - C', 'G - Bm - Em - Am', 'G - F - C - G'],
      explanation: 'En "Danny Boy", la progresión I-vi-IV-V (G-Em-C-D) en 6/8 crea el carácter irlandés. Cada acorde dura 2 tiempos (negra con puntillo).',
      data: { key: 'G', meter: '6/8', style: 'celtic' }
    },

    // Ejercicio 7: Progresión con dominantes secundarios
    {
      id: 'secondary-dominants-1',
      type: 'progression-direct',
      question: 'En "All The Things You Are" (compás 7), ¿qué dominante secundario intensifica la llegada a Am7?',
      answer: 'E7 (V7/vi)',
      options: ['E7 (V7/vi)', 'A7 (V7/ii)', 'B7 (V7/iii)', 'D7 (V7/V)'],
      explanation: 'En "All The Things You Are", E7 (V7/vi) con su G# crea una fuerte atracción hacia Am7, intensificando la resolución melódica y armónica.',
      data: { key: 'C', technique: 'secondary-dominant', target: 'vi' }
    },

    // Ejercicio 8: Progresión neosoul con acordes slash
    {
      id: 'neosoul-slash-1',
      type: 'progression-direct',
      question: 'En el estilo de D\'Angelo, ¿cómo se enriquece un acorde de Bb para crear movimiento melódico en el bajo?',
      answer: 'Bb/D (primera inversión)',
      options: ['Bb/D (primera inversión)', 'Bb/F (segunda inversión)', 'Bb/A (bajo cromático)', 'Bb/C (cuarta suspendida)'],
      explanation: 'En el neosoul de D\'Angelo, Bb/D crea líneas de bajo melódicas. La primera inversión genera movimiento fluido típico del género.',
      data: { key: 'F', style: 'neosoul', technique: 'slash-chords' }
    },

    // Ejercicio 9: Progresión flamenca
    {
      id: 'flamenco-progression-1',
      type: 'progression-direct',
      question: 'En una Soleá por bulerías, ¿qué progresión flamenca establece el compás de 12 tiempos?',
      answer: 'Em - F - G - F',
      options: ['Em - F - G - F', 'Em - Am - B7 - Em', 'Em - C - G - D', 'Em - Dm - Am - Em'],
      explanation: 'En Soleá por bulerías, Em-F-G-F establece el modo frigio. El F (bII) es esencial para la cadencia andaluza del flamenco.',
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
      answer: '
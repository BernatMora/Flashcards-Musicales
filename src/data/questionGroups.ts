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
      answer: 'Em (iii en Do, v en La)',
      options: ['Em (iii en Do, v en La)', 'F#m (iv en Do, vi en La)', 'G (V en Do, bVII en La)', 'Am (vi en Do, i en La)'],
      explanation: 'Em funciona como iii en Do mayor y v en La mayor. Esta dualidad funcional hace que sea un pivote natural para la modulación.',
      data: { fromKey: 'C', toKey: 'A', technique: 'pivot-chord' }
    }
  ]
};

// GRUPO 2: PROGRESIONES AVANZADAS - ANÁLISIS COMPLEJO
const advancedProgressionGroup: QuestionGroup = {
  id: 'advanced-progressions',
  name: 'Progresiones Avanzadas',
  description: 'Análisis de progresiones complejas con técnicas modernas',
  category: 'progression-direct',
  totalQuestions: 20,
  questions: [
    // Ejercicio 1: Progresión con cromatismo paralelo
    {
      id: 'chromatic-planing-1',
      type: 'progression-direct',
      question: 'En una progresión Cmaj7 - Bmaj7 - Bbmaj7 - Amaj7, ¿qué técnica compositiva se está empleando?',
      answer: 'Cromatismo paralelo (planing)',
      options: ['Cromatismo paralelo (planing)', 'Modulación por quintas', 'Intercambio modal', 'Sustitución tritónica'],
      explanation: 'Los acordes mayores se mueven cromáticamente manteniendo la misma estructura. Esta técnica (planing) es común en impresionismo y jazz moderno.',
      data: { technique: 'chromatic-planing', chordType: 'major7' }
    },

    // Ejercicio 2: Progresión con escalas sintéticas
    {
      id: 'synthetic-scales-1',
      type: 'progression-direct',
      question: 'Sobre un acorde C7alt, ¿qué escala sintética proporciona todas las alteraciones disponibles?',
      answer: 'Escala alterada (7º modo de Db melódica)',
      options: ['Escala alterada (7º modo de Db melódica)', 'Escala de tonos enteros', 'Escala disminuida', 'Escala cromática'],
      explanation: 'La escala alterada (C-Db-Eb-E-Gb-Ab-Bb) sobre C7alt proporciona b9, #9, #11, b13, creando máxima tensión armónica.',
      data: { chord: 'C7alt', scale: 'altered', mode: '7th-melodic-minor' }
    },

    // Ejercicio 3: Progresión con acordes híbridos
    {
      id: 'hybrid-chords-1',
      type: 'progression-direct',
      question: 'En la progresión Am(maj7) - Am7 - Am6 - Am, ¿qué efecto melódico se crea en la voz superior?',
      answer: 'Línea cromática descendente (G# - G - F# - E)',
      options: ['Línea cromática descendente (G# - G - F# - E)', 'Línea diatónica ascendente', 'Saltos de cuarta', 'Movimiento paralelo'],
      explanation: 'La progresión crea una línea cromática descendente en la voz superior: G# (maj7) - G (b7) - F# (6) - E (5), típica del jazz y bossa nova.',
      data: { technique: 'chromatic-voice-leading', direction: 'descending' }
    },

    // Ejercicio 4: Progresión con polirritmos
    {
      id: 'polyrhythm-1',
      type: 'progression-direct',
      question: 'En una progresión donde la armonía cambia cada 3 tiempos sobre un compás de 4/4, ¿qué efecto rítmico se produce?',
      answer: 'Polirritmo 3 contra 4',
      options: ['Polirritmo 3 contra 4', 'Síncopa simple', 'Hemiola', 'Contratiempo'],
      explanation: 'El cambio armónico cada 3 tiempos sobre 4/4 crea un polirritmo 3:4, generando tensión rítmica que se resuelve cada 12 tiempos.',
      data: { meter: '4/4', harmonic_rhythm: '3', technique: 'polyrhythm' }
    },

    // Ejercicio 5: Progresión con acordes de 6ª aumentada
    {
      id: 'augmented-sixth-1',
      type: 'progression-direct',
      question: 'En Do mayor, ¿qué acorde de 6ª aumentada alemana precede típicamente a la dominante?',
      answer: 'Ab-C-D-F# (6ª aumentada alemana)',
      options: ['Ab-C-D-F# (6ª aumentada alemana)', 'Ab-C-F# (6ª aumentada italiana)', 'Ab-C-Eb-F# (6ª aumentada francesa)', 'F-Ab-B-D (dominante de la dominante)'],
      explanation: 'La 6ª aumentada alemana (Ab-C-D-F#) en Do mayor resuelve a G7. El intervalo Ab-F# (6ª aumentada) crea fuerte atracción hacia G.',
      data: { key: 'C', type: 'german-augmented-sixth', resolution: 'V7' }
    },

    // Ejercicio 6: Progresión con escalas pentatónicas superpuestas
    {
      id: 'pentatonic-superimposition-1',
      type: 'progression-direct',
      question: 'Sobre Cmaj7, ¿qué pentatónica superpuesta crea el sonido #11?',
      answer: 'Pentatónica de D (D-E-F#-A-B)',
      options: ['Pentatónica de D (D-E-F#-A-B)', 'Pentatónica de G (G-A-B-D-E)', 'Pentatónica de F (F-G-A-C-D)', 'Pentatónica de A (A-B-C#-E-F#)'],
      explanation: 'La pentatónica de D sobre Cmaj7 aporta las notas D(9), E(3), F#(#11), A(6), B(7), creando un sonido lydio moderno.',
      data: { chord: 'Cmaj7', pentatonic: 'D', effect: 'lydian-sound' }
    },

    // Ejercicio 7: Progresión con acordes de paso cromáticos
    {
      id: 'chromatic-passing-chords-1',
      type: 'progression-direct',
      question: 'Entre Fmaj7 y Em7, ¿qué acorde de paso cromático es más efectivo?',
      answer: 'F#dim7',
      options: ['F#dim7', 'Fm7', 'E7', 'Bb7'],
      explanation: 'F#dim7 conecta cromáticamente Fmaj7 y Em7. Funciona como acorde de paso, creando movimiento melódico suave entre las fundamentales F y E.',
      data: { from: 'Fmaj7', to: 'Em7', passing_chord: 'F#dim7' }
    },

    // Ejercicio 8: Progresión con intercambio modal múltiple
    {
      id: 'multiple-modal-interchange-1',
      type: 'progression-direct',
      question: 'En Do mayor, la progresión C - Ab - Bb - F combina acordes de qué modos?',
      answer: 'Mayor natural y menor natural',
      options: ['Mayor natural y menor natural', 'Jónico y dórico', 'Mayor y frigio', 'Lidio y mixolidio'],
      explanation: 'C es del mayor natural, mientras Ab y Bb son prestados del menor natural (do menor). Esta combinación es común en el pop y rock.',
      data: { key: 'C', modes: ['major', 'natural-minor'], technique: 'modal-interchange' }
    },

    // Ejercicio 9: Progresión con acordes sus expandidos
    {
      id: 'expanded-sus-chords-1',
      type: 'progression-direct',
      question: 'Un acorde Csus2add9 contiene qué notas?',
      answer: 'C-D-G-D (octava superior)',
      options: ['C-D-G-D (octava superior)', 'C-D-F-G', 'C-E-F-G', 'C-D-E-G'],
      explanation: 'Csus2add9 combina la suspensión de 2ª (D) con la 9ª (D en octava superior), creando una sonoridad abierta y moderna.',
      data: { chord: 'Csus2add9', notes: ['C', 'D', 'G', 'D'], technique: 'suspended-extended' }
    },

    // Ejercicio 10: Progresión con escalas simétricas
    {
      id: 'symmetric-scales-1',
      type: 'progression-direct',
      question: 'Sobre C7, ¿qué escala simétrica alterna semitonos y tonos comenzando por semitono?',
      answer: 'Escala disminuida (semitono-tono)',
      options: ['Escala disminuida (semitono-tono)', 'Escala de tonos enteros', 'Escala cromática', 'Escala disminuida (tono-semitono)'],
      explanation: 'La escala disminuida semitono-tono (C-Db-Eb-E-F#-G-A-Bb) sobre C7 proporciona b9, #9, #11, 13, creando tensiones específicas.',
      data: { chord: 'C7', scale: 'diminished', pattern: 'half-whole' }
    },

    // Ejercicio 11: Progresión con voicings de cuartas
    {
      id: 'quartal-voicings-1',
      type: 'progression-direct',
      question: 'Para un Dm11, ¿cómo se distribuyen las notas en voicing cuartal desde el bajo?',
      answer: 'D-G-C-F (cuartas justas)',
      options: ['D-G-C-F (cuartas justas)', 'D-F-A-C (terceras)', 'D-A-E-B (quintas)', 'D-E-F-G (segundas)'],
      explanation: 'El voicing cuartal D-G-C-F para Dm11 apila cuartas justas, creando una sonoridad moderna sin las terceras tradicionales.',
      data: { chord: 'Dm11', voicing: 'quartal', intervals: 'perfect-fourths' }
    },

    // Ejercicio 12: Progresión con modulación enarmónica
    {
      id: 'enharmonic-modulation-1',
      type: 'progression-direct',
      question: 'Un acorde de 6ª aumentada alemana puede reinterpretarse enarmónicamente como qué tipo de acorde?',
      answer: 'Dominante con 7ª',
      options: ['Dominante con 7ª', 'Disminuido', 'Aumentado', 'Menor con 7ª'],
      explanation: 'La 6ª aumentada alemana (Ab-C-D-F#) se reinterpreta como G7 (G-B-D-F), permitiendo modulaciones enarmónicas inesperadas.',
      data: { original: 'german-augmented-sixth', reinterpretation: 'dominant-seventh' }
    },

    // Ejercicio 13: Progresión con acordes de aproximación
    {
      id: 'approach-chords-1',
      type: 'progression-direct',
      question: 'Para aproximarse a Am7 desde arriba y abajo cromáticamente, ¿qué acordes son efectivos?',
      answer: 'Bbm7 (desde arriba) y G#m7 (desde abajo)',
      options: ['Bbm7 (desde arriba) y G#m7 (desde abajo)', 'Bm7 y Gm7', 'A#m7 y Abm7', 'Cm7 y Fm7'],
      explanation: 'Bbm7 y G#m7 crean aproximación cromática a Am7. Esta técnica de "approach chords" es común en rearmonizaciones de jazz.',
      data: { target: 'Am7', approach_from_above: 'Bbm7', approach_from_below: 'G#m7' }
    },

    // Ejercicio 14: Progresión con escalas étnicas
    {
      id: 'ethnic-scales-1',
      type: 'progression-direct',
      question: 'La escala Raga Bhairav (C-Db-E-F-G-Ab-B) corresponde a qué modo occidental?',
      answer: 'Frigio dominante (5º modo de la menor armónica)',
      options: ['Frigio natural', 'Frigio dominante (5º modo de la menor armónica)', 'Dórico', 'Menor armónica'],
      explanation: 'El Raga Bhairav (C-Db-E-F-G-Ab-B) corresponde al frigio dominante occidental. La 3ª mayor (E) es característica distintiva.',
      data: { origin: 'indian-classical', raga: 'bhairav', westernEquivalent: 'phrygian-dominant' }
    },

    // Ejercicio 15: Progresión con acordes de cluster
    {
      id: 'cluster-chords-1',
      type: 'progression-direct',
      question: 'Un cluster de segundas C-D-E-F se puede analizar funcionalmente como qué tipo de acorde?',
      answer: 'Cmaj7add9sus4',
      options: ['Cmaj7add9sus4', 'C disminuido', 'C aumentado', 'C menor'],
      explanation: 'El cluster C-D-E-F contiene C(1), D(9), E(3), F(4), formando un Cmaj7add9sus4 con todas las tensiones adyacentes.',
      data: { cluster: 'C-D-E-F', analysis: 'Cmaj7add9sus4', technique: 'cluster-harmony' }
    },

    // Ejercicio 16: Progresión con poliacordes complejos
    {
      id: 'complex-polychords-1',
      type: 'progression-direct',
      question: 'El poliacorde F#/Bb crea qué sonoridad sobre un bajo de C?',
      answer: 'Cmaj7#11b5',
      options: ['Cmaj7#11b5', 'C7alt', 'Cm(maj7)', 'C diminuido'],
      explanation: 'F#/Bb sobre C produce C-E-Gb-A#-Bb-F#, creando un Cmaj7#11b5 con sonoridad muy disonante y moderna.',
      data: { polychord: 'F#/Bb', bass: 'C', resulting_chord: 'Cmaj7#11b5' }
    },

    // Ejercicio 17: Progresión con escalas microtonales
    {
      id: 'microtonal-scales-1',
      type: 'progression-direct',
      question: 'En música microtonal, ¿qué intervalo representa un cuarto de tono?',
      answer: '50 cents',
      options: ['25 cents', '50 cents', '75 cents', '100 cents'],
      explanation: 'Un cuarto de tono equivale a 50 cents (la mitad de un semitono). Esta división permite escalas con 24 notas por octava.',
      data: { interval: 'quarter-tone', cents: 50, system: 'microtonal' }
    },

    // Ejercicio 18: Progresión con acordes de Tristán
    {
      id: 'tristan-chord-1',
      type: 'progression-direct',
      question: 'El famoso "acorde de Tristán" (F-B-D#-G#) se puede analizar como qué función armónica?',
      answer: 'Dominante francesa de la dominante',
      options: ['Dominante francesa de la dominante', '6ª aumentada alemana', 'Acorde disminuido', 'Dominante alterada'],
      explanation: 'El acorde de Tristán funciona como dominante francesa de la dominante, con su característica 6ª aumentada y 4ª aumentada.',
      data: { chord: 'tristan-chord', notes: ['F', 'B', 'D#', 'G#'], function: 'french-augmented-sixth' }
    },

    // Ejercicio 19: Progresión con escalas de jazz moderno
    {
      id: 'modern-jazz-scales-1',
      type: 'progression-direct',
      question: 'Sobre Cmaj7#5, ¿qué escala proporciona la sonoridad augmented-lydian?',
      answer: 'Escala lydian augmented (3er modo de la menor melódica)',
      options: ['Escala lydian augmented (3er modo de la menor melódica)', 'Escala de tonos enteros', 'Escala alterada', 'Escala mixolidia'],
      explanation: 'La escala lydian augmented (C-D-E-F#-G#-A-B) sobre Cmaj7#5 combina la 4ª aumentada lydian con la 5ª aumentada.',
      data: { chord: 'Cmaj7#5', scale: 'lydian-augmented', mode: '3rd-melodic-minor' }
    },

    // Ejercicio 20: Progresión con técnicas de Messiaen
    {
      id: 'messiaen-techniques-1',
      type: 'progression-direct',
      question: 'Los "modos de transposición limitada" de Messiaen se caracterizan por qué propiedad?',
      answer: 'Simetría que limita sus transposiciones',
      options: ['Simetría que limita sus transposiciones', 'Uso exclusivo de tonos enteros', 'Basarse en la serie armónica', 'Evitar completamente los semitonos'],
      explanation: 'Los modos de Messiaen tienen simetría interna que limita sus transposiciones únicas. Por ejemplo, el modo 1 (tonos enteros) solo tiene 2 transposiciones.',
      data: { composer: 'messiaen', technique: 'limited-transposition-modes', characteristic: 'symmetry' }
    }
  ]
};

// GRUPO 3: PROGRESIONES ÉTNICAS Y TRADICIONALES
const ethnicProgressionGroup: QuestionGroup = {
  id: 'ethnic-progressions',
  name: 'Progresiones Étnicas y Tradicionales',
  description: 'Análisis de progresiones en diferentes tradiciones musicales del mundo',
  category: 'progression-direct',
  totalQuestions: 15,
  questions: [
    // Ejercicio 1: Música klezmer
    {
      id: 'klezmer-freygish-1',
      type: 'progression-direct',
      question: 'En música klezmer, ¿qué modo se conoce como "Freygish" y caracteriza las melodías nostálgicas?',
      answer: 'Frigio dominante (Ahava Rabbah)',
      options: ['Frigio natural', 'Frigio dominante (Ahava Rabbah)', 'Menor armónica', 'Doble armónica'],
      explanation: 'Freygish (frigio dominante) es fundamental en klezmer. Su nombre hebreo "Ahava Rabbah" significa "gran amor", reflejando su expresividad.',
      data: { style: 'klezmer', hebrewName: 'ahava-rabbah', meaning: 'great-love' }
    },

    // Ejercicio 2: Música árabe - Maqam
    {
      id: 'arabic-maqam-1',
      type: 'progression-direct',
      question: 'El Maqam Hijaz (D-Eb-F#-G-A-Bb-C) se caracteriza por qué intervalos distintivos?',
      answer: 'Segunda aumentada entre Eb-F# y Bb-C',
      options: ['Segunda aumentada entre Eb-F# y Bb-C', 'Cuartas justas consecutivas', 'Terceras menores exclusivamente', 'Quintas disminuidas'],
      explanation: 'El Maqam Hijaz contiene dos segundas aumentadas características (Eb-F# y Bb-C) que le dan su sonoridad oriental distintiva.',
      data: { origin: 'arabic', maqam: 'hijaz', characteristic: 'augmented-seconds' }
    },

    // Ejercicio 3: Música flamenca - Cadencia andaluza
    {
      id: 'flamenco-andalusian-1',
      type: 'progression-direct',
      question: 'La cadencia andaluza en Mi frigio (Em-F-G-F) se puede extender con qué acorde para mayor autenticidad?',
      answer: 'Am (iv)',
      options: ['Am (iv)', 'C (VI)', 'B7 (V7)', 'D (VII)'],
      explanation: 'La extensión Em-F-G-Am-F crea la cadencia andaluza completa. El Am (iv) añade profundidad modal antes del retorno a F.',
      data: { style: 'flamenco', key: 'E-phrygian', cadence: 'andalusian' }
    },

    // Ejercicio 4: Música celta - Mixolidio
    {
      id: 'celtic-mixolydian-1',
      type: 'progression-direct',
      question: 'En una jig irlandesa en Sol mixolidio, ¿qué progresión captura el carácter modal tradicional?',
      answer: 'G - F - C - G',
      options: ['G - F - C - G', 'G - Am - C - D', 'G - Em - Am - D', 'G - Bm - Em - C'],
      explanation: 'G-F-C-G en Sol mixolidio usa el F natural (b7) característico. Esta progresión I-bVII-IV-I es típica de la música celta.',
      data: { style: 'celtic', key: 'G-mixolydian', form: 'jig' }
    },

    // Ejercicio 5: Música balcánica - Compases irregulares
    {
      id: 'balkan-irregular-1',
      type: 'progression-direct',
      question: 'En un oro macedonio en 7/8, ¿cómo se agrupan típicamente los tiempos?',
      answer: '2+2+3 (rápido-rápido-lento)',
      options: ['2+2+3 (rápido-rápido-lento)', '3+2+2 (lento-rápido-rápido)', '4+3 (dos grupos)', '7 tiempos iguales'],
      explanation: 'El oro macedonio agrupa 7/8 como 2+2+3, creando el patrón rítmico característico "rápido-rápido-lento" de la música balcánica.',
      data: { style: 'balkan', dance: 'oro', meter: '7/8', grouping: '2+2+3' }
    },

    // Ejercicio 6: Música brasileña - Bossa nova
    {
      id: 'bossa-nova-1',
      type: 'progression-direct',
      question: 'En "Girl from Ipanema", ¿qué sustitución armónica enriquece el ii-V-I básico?',
      answer: 'Db7 (sustitución tritónica de G7)',
      options: ['Db7 (sustitución tritónica de G7)', 'F#m7b5 (ii relacionado)', 'Em7 (iii)', 'A7 (VI7)'],
      explanation: 'En bossa nova, Db7 sustituye a G7 creando el movimiento de bajo cromático descendente típico del estilo (Db-C).',
      data: { style: 'bossa-nova', song: 'girl-from-ipanema', technique: 'tritone-substitution' }
    },

    // Ejercicio 7: Música japonesa - Escalas pentatónicas
    {
      id: 'japanese-pentatonic-1',
      type: 'progression-direct',
      question: 'La escala In (C-Db-F-G-Ab) japonesa evita qué intervalos para mantener su carácter tradicional?',
      answer: 'Semitonos (evita E y B)',
      options: ['Semitonos (evita E y B)', 'Terceras mayores', 'Quintas justas', 'Cuartas justas'],
      explanation: 'La escala In evita los semitonos E y B, creando una pentatónica sin semitonos adyacentes, característica de la música japonesa tradicional.',
      data: { origin: 'japanese', scale: 'in', characteristic: 'no-semitones' }
    },

    // Ejercicio 8: Música india - Ragas
    {
      id: 'indian-raga-1',
      type: 'progression-direct',
      question: 'El Raga Yaman (C-D-E-F#-G-A-B) se caracteriza por qué nota alterada que lo distingue del mayor occidental?',
      answer: 'F# (4ª aumentada)',
      options: ['F# (4ª aumentada)', 'Bb (7ª menor)', 'Eb (3ª menor)', 'Ab (6ª menor)'],
      explanation: 'El Raga Yaman usa F# (tivra ma) como 4ª aumentada, similar al modo lidio occidental, pero con ornamentaciones y reglas melódicas específicas.',
      data: { origin: 'indian-classical', raga: 'yaman', characteristic: 'augmented-fourth' }
    },

    // Ejercicio 9: Música africana - Polirritmia
    {
      id: 'african-polyrhythm-1',
      type: 'progression-direct',
      question: 'En música africana occidental, ¿qué patrón rítmico de 3 contra 2 es fundamental?',
      answer: 'Hemiola (3 pulsos sobre 2 tiempos)',
      options: ['Hemiola (3 pulsos sobre 2 tiempos)', 'Síncopa simple', 'Contratiempo', 'Polirritmia 4:3'],
      explanation: 'La hemiola 3:2 es fundamental en música africana. Tres pulsos iguales se superponen a dos tiempos binarios, creando tensión rítmica.',
      data: { origin: 'west-african', technique: 'hemiola', ratio: '3:2' }
    },

    // Ejercicio 10: Música griega - Modos bizantinos
    {
      id: 'byzantine-modes-1',
      type: 'progression-direct',
      question: 'El modo Hijaz Kar (D-Eb-F#-G-A-Bb-C#) combina elementos de qué tradiciones?',
      answer: 'Bizantina y árabe',
      options: ['Bizantina y árabe', 'Griega y turca', 'Persa y armenia', 'Todas las anteriores'],
      explanation: 'El Hijaz Kar combina la tradición bizantina con influencias árabes, reflejando la historia multicultural de la música griega.',
      data: { origin: 'byzantine-greek', mode: 'hijaz-kar', influences: ['byzantine', 'arabic'] }
    },

    // Ejercicio 11: Música andina - Escalas pentatónicas
    {
      id: 'andean-pentatonic-1',
      type: 'progression-direct',
      question: 'En música andina, la escala pentatónica menor (A-C-D-E-G) se toca tradicionalmente en qué instrumentos?',
      answer: 'Quena y zampoña',
      options: ['Quena y zampoña', 'Guitarra y charango', 'Bombo y caja', 'Todos los anteriores'],
      explanation: 'La quena (flauta) y zampoña (flauta de pan) son instrumentos melódicos tradicionales que ejecutan las escalas pentatónicas andinas.',
      data: { origin: 'andean', scale: 'pentatonic-minor', instruments: ['quena', 'zampoña'] }
    },

    // Ejercicio 12: Música húngara - Escalas gitanas
    {
      id: 'hungarian-gypsy-1',
      type: 'progression-direct',
      question: 'La escala húngara (C-D-Eb-F#-G-Ab-B) se distingue por qué intervalos característicos?',
      answer: 'Dos segundas aumentadas (Eb-F# y Ab-B)',
      options: ['Dos segundas aumentadas (Eb-F# y Ab-B)', 'Tres terceras menores', 'Cuartas aumentadas consecutivas', 'Quintas disminuidas'],
      explanation: 'La escala húngara contiene dos segundas aumentadas que le dan su carácter gitano distintivo, similar al doble armónico.',
      data: { origin: 'hungarian-gypsy', characteristic: 'double-augmented-seconds' }
    },

    // Ejercicio 13: Música persa - Dastgah
    {
      id: 'persian-dastgah-1',
      type: 'progression-direct',
      question: 'El Dastgah Shur persa se caracteriza por qué microtonos específicos?',
      answer: 'Koron (bemol de cuarto de tono)',
      options: ['Koron (bemol de cuarto de tono)', 'Sori (sostenido de cuarto de tono)', 'Ambos koron y sori', 'No usa microtonos'],
      explanation: 'El Dastgah Shur usa koron, un bemol microtonal de aproximadamente 1/4 de tono, creando la expresividad característica persa.',
      data: { origin: 'persian', dastgah: 'shur', microtone: 'koron' }
    },

    // Ejercicio 14: Música turca - Makam
    {
      id: 'turkish-makam-1',
      type: 'progression-direct',
      question: 'El Makam Hicaz turco (D-Eb-F#-G-A-Bb-C) comparte características con qué modo occidental?',
      answer: 'Frigio dominante',
      options: ['Frigio natural', 'Frigio dominante', 'Menor armónica', 'Doble armónica'],
      explanation: 'El Makam Hicaz es equivalente al frigio dominante occidental, con la característica 3ª mayor (F#) sobre la base frigia.',
      data: { origin: 'turkish', makam: 'hicaz', western_equivalent: 'phrygian-dominant' }
    },

    // Ejercicio 15: Música china - Escalas pentatónicas
    {
      id: 'chinese-pentatonic-1',
      type: 'progression-direct',
      question: 'En música china tradicional, ¿qué escala pentatónica se considera la más fundamental?',
      answer: 'Gong (C-D-E-G-A)',
      options: ['Gong (C-D-E-G-A)', 'Shang (D-E-G-A-C)', 'Jue (E-G-A-C-D)', 'Zhi (G-A-C-D-E)'],
      explanation: 'La escala Gong es la pentatónica fundamental china, equivalente a la pentatónica mayor occidental, base del sistema musical tradicional.',
      data: { origin: 'chinese', scale: 'gong', equivalent: 'major-pentatonic' }
    }
  ]
};

// Export all question groups as an array
export const questionGroups = [
  basicProgressionGroup,
  inverseProgressionGroup,
  scaleModeGroup
];
  basicProgressionGroup,
export { basicProgressionGroup, inverseProgressionGroup, scaleModeGroup };
  ethnicProgressionGroup
];

// GRUPO 2: PROGRESIONES INVERSAS - IDENTIFICACIÓN
const inverseProgressionGroup: QuestionGroup = {
  id: 'inverse-progressions',
  name: 'Identificación de Progresiones',
  description: 'Identifica progresiones y tonalidades a partir de secuencias de acordes',
  category: 'progression-inverse',
  totalQuestions: 10,
  questions: [
    {
      id: 'identify-ii-v-i-1',
      type: 'progression-inverse',
      question: 'Dm7 - G7 - Cmaj7',
      answer: 'ii-V-I en Do mayor',
      options: ['ii-V-I en Do mayor', 'vi-ii-V en Fa mayor', 'iii-VI-I en Bb mayor', 'i-IV-VII en Re menor'],
      explanation: 'Dm7-G7-Cmaj7 es el clásico ii-V-I en Do mayor. Dm7 es el ii grado, G7 el V grado dominante, y Cmaj7 la tónica.',
      data: { key: 'C', progression: 'ii-V-I', function: 'cadential' }
    },
    {
      id: 'identify-vi-iv-i-v-1',
      type: 'progression-inverse',
      question: 'Am - F - C - G',
      answer: 'vi-IV-I-V en Do mayor',
      options: ['vi-IV-I-V en Do mayor', 'i-bVI-bIII-bVII en La menor', 'ii-bVII-IV-I en Sol mayor', 'iii-I-V-ii en Fa mayor'],
      explanation: 'Am-F-C-G es la progresión vi-IV-I-V en Do mayor, muy común en pop y rock. También conocida como "progresión pop".',
      data: { key: 'C', progression: 'vi-IV-I-V', style: 'pop' }
    },
    {
      id: 'identify-blues-1',
      type: 'progression-inverse',
      question: 'C7 - F7 - C7 - G7',
      answer: 'Blues de 12 compases en Do',
      options: ['Blues de 12 compases en Do', 'I-IV-I-V en Do mayor', 'Progresión modal en Do mixolidio', 'Cadencia plagal extendida'],
      explanation: 'C7-F7-C7-G7 son los primeros 4 compases del blues estándar de 12 compases en Do. Todos son acordes dominantes.',
      data: { key: 'C', form: '12-bar-blues', measures: '1-4' }
    },
    {
      id: 'identify-modal-1',
      type: 'progression-inverse',
      question: 'Em7 - Am7 - Em7 - Am7',
      answer: 'Vamp en Mi dórico',
      options: ['Vamp en Mi dórico', 'ii-v en La menor', 'iii-vi en Do mayor', 'i-iv en Mi menor'],
      explanation: 'Em7-Am7 es un vamp típico de Mi dórico. Am7 (IV grado) con su Do natural es la nota característica del modo dórico.',
      data: { key: 'E', mode: 'dorian', type: 'vamp' }
    },
    {
      id: 'identify-secondary-dominant-1',
      type: 'progression-inverse',
      question: 'Cmaj7 - E7 - Am7 - D7',
      answer: 'I - V7/vi - vi - V7/ii en Do mayor',
      options: ['I - V7/vi - vi - V7/ii en Do mayor', 'I - III7 - vi - II7 en Do mayor', 'Progresión cromática descendente', 'Modulación a La menor'],
      explanation: 'E7 es V7/vi (dominante secundario de Am), y D7 es V7/ii (dominante secundario que prepara Dm7). Secuencia de dominantes secundarios.',
      data: { key: 'C', technique: 'secondary-dominants', targets: ['vi', 'ii'] }
    },
    {
      id: 'identify-tritone-sub-1',
      type: 'progression-inverse',
      question: 'Dm7 - Db7 - Cmaj7',
      answer: 'ii - bII7 - I (sustitución tritónica)',
      options: ['ii - bII7 - I (sustitución tritónica)', 'ii - V7 - I normal', 'Modulación cromática', 'Progresión modal'],
      explanation: 'Db7 sustituye a G7 (sustitución tritónica). Ambos acordes comparten el mismo tritono (B-F), pero Db7 crea movimiento cromático.',
      data: { key: 'C', technique: 'tritone-substitution', original: 'G7', substitute: 'Db7' }
    },
    {
      id: 'identify-modal-interchange-1',
      type: 'progression-inverse',
      question: 'C - Ab - Bb - F',
      answer: 'I - bVI - bVII - IV (intercambio modal)',
      options: ['I - bVI - bVII - IV (intercambio modal)', 'I - VI - VII - IV mayor', 'Progresión en Do menor', 'Modulación a Fa mayor'],
      explanation: 'Ab y Bb son acordes prestados del menor paralelo (Do menor). Esta progresión combina mayor natural con menor natural.',
      data: { key: 'C', technique: 'modal-interchange', borrowed: ['bVI', 'bVII'] }
    },
    {
      id: 'identify-neapolitan-1',
      type: 'progression-inverse',
      question: 'Am - Bb - E7 - Am',
      answer: 'i - bII - V7 - i (sexta napolitana)',
      options: ['i - bII - V7 - i (sexta napolitana)', 'i - II - V7 - i normal', 'Progresión modal', 'Blues menor'],
      explanation: 'Bb es la sexta napolitana en La menor (bII grado). Crea una sonoridad clásica muy expresiva antes de la dominante.',
      data: { key: 'Am', technique: 'neapolitan-sixth', chord: 'Bb' }
    },
    {
      id: 'identify-augmented-sixth-1',
      type: 'progression-inverse',
      question: 'C - F/Ab - G7 - C',
      answer: 'I - It+6 - V7 - I (sexta aumentada italiana)',
      options: ['I - It+6 - V7 - I (sexta aumentada italiana)', 'I - iv6 - V7 - I', 'Progresión cromática', 'Modulación temporal'],
      explanation: 'F/Ab es la sexta aumentada italiana. El intervalo Ab-F# (sexta aumentada) resuelve expandiéndose a G.',
      data: { key: 'C', technique: 'italian-augmented-sixth', resolution: 'V7' }
    },
    {
      id: 'identify-circle-fifths-1',
      type: 'progression-inverse',
      question: 'Em7 - A7 - Dm7 - G7 - Cmaj7',
      answer: 'Círculo de quintas: iii - VI7 - ii - V7 - I',
      options: ['Círculo de quintas: iii - VI7 - ii - V7 - I', 'Progresión diatónica simple', 'Modulación a Em', 'Secuencia cromática'],
      explanation: 'Las fundamentales descienden por quintas: E-A-D-G-C. A7 es dominante secundario (V7/ii) que intensifica la progresión.',
      data: { key: 'C', technique: 'circle-of-fifths', pattern: 'descending-fifths' }
    }
  ]
};

// GRUPO 3: ESCALAS Y MODOS
const scaleModeGroup: QuestionGroup = {
  id: 'scale-modes',
  name: 'Escalas y Modos',
  description: 'Relaciona escalas con acordes y contextos armónicos',
  category: 'scale-mode',
  totalQuestions: 12,
  questions: [
    {
      id: 'dorian-chord-1',
      type: 'scale-mode',
      question: '¿Qué escala/modo funciona mejor sobre Dm7 en un contexto modal?',
      answer: 'Re dórico',
      options: ['Re dórico', 'Re menor natural', 'Re menor armónica', 'Re frigio'],
      explanation: 'Re dórico es perfecto para Dm7 modal. Su 6ª mayor (Si natural) crea el color característico del modo dórico.',
      data: { chord: 'Dm7', mode: 'dorian', characteristic: 'B natural' }
    },
    {
      id: 'mixolydian-chord-1',
      type: 'scale-mode',
      question: '¿Qué modo se usa típicamente sobre G7 en una progresión ii-V-I?',
      answer: 'Sol mixolidio',
      options: ['Sol mixolidio', 'Sol mayor', 'Sol dórico', 'Sol lidio'],
      explanation: 'Sol mixolidio (5º modo de Do mayor) es ideal para G7 en ii-V-I. Su 7ª menor (Fa) define el carácter dominante.',
      data: { chord: 'G7', mode: 'mixolydian', context: 'ii-V-I' }
    },
    {
      id: 'altered-scale-1',
      type: 'scale-mode',
      question: '¿Qué escala proporciona las tensiones alteradas para G7alt?',
      answer: 'Sol alterada (super locrio)',
      options: ['Sol alterada (super locrio)', 'Sol mixolidio b6', 'Sol frigio dominante', 'Sol disminuida'],
      explanation: 'La escala alterada (7º modo de la menor melódica) proporciona b9, #9, #11 y b13 para acordes dominantes alterados.',
      data: { chord: 'G7alt', scale: 'altered', tensions: ['b9', '#9', '#11', 'b13'] }
    },
    {
      id: 'lydian-chord-1',
      type: 'scale-mode',
      question: '¿Qué modo evita las notas evitadas en Fmaj7?',
      answer: 'Fa lidio',
      options: ['Fa lidio', 'Fa jónico', 'Fa mixolidio', 'Fa dórico'],
      explanation: 'Fa lidio evita el Bb (nota evitada en Fmaj7) usando Si natural (#11). Crea un sonido más abierto y moderno.',
      data: { chord: 'Fmaj7', mode: 'lydian', avoids: 'Bb', uses: 'B natural' }
    },
    {
      id: 'phrygian-chord-1',
      type: 'scale-mode',
      question: '¿Qué modo español se usa sobre Em en flamenco?',
      answer: 'Mi frigio',
      options: ['Mi frigio', 'Mi menor natural', 'Mi dórico', 'Mi menor armónica'],
      explanation: 'Mi frigio, con su 2ª menor (Fa), es fundamental en flamenco. Crea la sonoridad española característica.',
      data: { chord: 'Em', mode: 'phrygian', style: 'flamenco', characteristic: 'F natural' }
    },
    {
      id: 'locrian-chord-1',
      type: 'scale-mode',
      question: '¿Qué modo se usa sobre Bm7b5 en ii-V-i menor?',
      answer: 'Si locrio',
      options: ['Si locrio', 'Si frigio', 'Si menor natural', 'Si dórico'],
      explanation: 'Si locrio (7º modo de Do mayor) es perfecto para Bm7b5. Su 5ª disminuida (Fa) define el acorde semidisminuido.',
      data: { chord: 'Bm7b5', mode: 'locrian', context: 'ii-V-i minor' }
    },
    {
      id: 'harmonic-minor-1',
      type: 'scale-mode',
      question: '¿Qué escala se usa sobre E7 cuando resuelve a Am?',
      answer: 'Mi frigio dominante (5º modo de La menor armónica)',
      options: ['Mi frigio dominante (5º modo de La menor armónica)', 'Mi mixolidio', 'Mi alterada', 'Mi mayor'],
      explanation: 'El frigio dominante (5º modo de la menor armónica) es ideal para dominantes que resuelven a menor. Contiene la sensible (G#).',
      data: { chord: 'E7', scale: 'phrygian-dominant', resolution: 'Am', mode: '5th harmonic minor' }
    },
    {
      id: 'melodic-minor-modes-1',
      type: 'scale-mode',
      question: '¿Qué modo de la menor melódica se usa sobre Cmaj7#5?',
      answer: 'Do lidio aumentado (3er modo)',
      options: ['Do lidio aumentado (3er modo)', 'Do lidio', 'Do jónico #5', 'Do alterado'],
      explanation: 'El lidio aumentado (3er modo de la menor melódica) combina la 4ª aumentada lydian con la 5ª aumentada del acorde.',
      data: { chord: 'Cmaj7#5', mode: 'lydian-augmented', parent: '3rd melodic minor' }
    },
    {
      id: 'bebop-scales-1',
      type: 'scale-mode',
      question: '¿Qué nota cromática añade la escala bebop mayor a Do mayor?',
      answer: 'G# (entre G y A)',
      options: ['G# (entre G y A)', 'F# (entre F y G)', 'D# (entre D y E)', 'A# (entre A y B)'],
      explanation: 'La escala bebop mayor añade G# como nota de paso cromática, creando una escala de 8 notas ideal para líneas melódicas.',
      data: { scale: 'bebop-major', key: 'C', chromatic_note: 'G#', position: 'between G and A' }
    },
    {
      id: 'pentatonic-over-chords-1',
      type: 'scale-mode',
      question: '¿Qué pentatónica crea un sonido #11 sobre Cmaj7?',
      answer: 'Pentatónica de D (D-E-F#-A-B)',
      options: ['Pentatónica de D (D-E-F#-A-B)', 'Pentatónica de G (G-A-B-D-E)', 'Pentatónica de C (C-D-E-G-A)', 'Pentatónica de F (F-G-A-C-D)'],
      explanation: 'La pentatónica de D sobre Cmaj7 aporta F# como #11, creando un sonido lydio moderno muy usado en jazz contemporáneo.',
      data: { chord: 'Cmaj7', pentatonic: 'D', effect: '#11 lydian sound', notes: ['D', 'E', 'F#', 'A', 'B'] }
    },
    {
      id: 'symmetric-scales-1',
      type: 'scale-mode',
      question: '¿Qué escala simétrica se usa sobre C7 con tensiones b9 y #11?',
      answer: 'Escala disminuida (semitono-tono)',
      options: ['Escala disminuida (semitono-tono)', 'Escala de tonos enteros', 'Escala alterada', 'Escala cromática'],
      explanation: 'La escala disminuida semitono-tono proporciona b9, #11 y 13 natural, perfecta para acordes dominantes con estas tensiones específicas.',
      data: { chord: 'C7', scale: 'diminished half-whole', tensions: ['b9', '#11', '13'] }
    },
    {
      id: 'whole-tone-1',
      type: 'scale-mode',
      question: '¿Sobre qué tipo de acorde funciona mejor la escala de tonos enteros?',
      answer: 'Acordes dominantes con #11 y b13',
      options: ['Acordes dominantes con #11 y b13', 'Acordes mayores', 'Acordes menores', 'Acordes disminuidos'],
      explanation: 'La escala de tonos enteros es ideal para dominantes con #11 y b13. Su estructura simétrica crea una sonoridad suspendida única.',
      data: { scale: 'whole-tone', best_use: 'dominant chords', tensions: ['#11', 'b13'], character: 'suspended' }
    }
  ]
};
export { basicProgressionGroup, advancedProgressionGroup, ethnicProgressionGroup };
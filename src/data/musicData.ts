import { Progression, Scale } from '../types/music';

export const progressions: Progression[] = [
  // ii-V-I en todas las tonalidades
  {
    id: 'ii-V-I-C',
    key: 'C',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['Dm7', 'G7', 'Cmaj7'],
    name: 'ii-V-I in C'
  },
  {
    id: 'ii-V-I-Bb',
    key: 'Bb',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['Cm7', 'F7', 'Bbmaj7'],
    name: 'ii-V-I in Bb'
  },
  {
    id: 'ii-V-I-F',
    key: 'F',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['Gm7', 'C7', 'Fmaj7'],
    name: 'ii-V-I in F'
  },
  {
    id: 'ii-V-I-G',
    key: 'G',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['Am7', 'D7', 'Gmaj7'],
    name: 'ii-V-I in G'
  },
  {
    id: 'ii-V-I-D',
    key: 'D',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['Em7', 'A7', 'Dmaj7'],
    name: 'ii-V-I in D'
  },
  {
    id: 'ii-V-I-A',
    key: 'A',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['Bm7', 'E7', 'Amaj7'],
    name: 'ii-V-I in A'
  },
  {
    id: 'ii-V-I-E',
    key: 'E',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['F#m7', 'B7', 'Emaj7'],
    name: 'ii-V-I in E'
  },
  {
    id: 'ii-V-I-B',
    key: 'B',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['C#m7', 'F#7', 'Bmaj7'],
    name: 'ii-V-I in B'
  },
  {
    id: 'ii-V-I-Gb',
    key: 'Gb',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['Abm7', 'Db7', 'Gbmaj7'],
    name: 'ii-V-I in Gb'
  },
  {
    id: 'ii-V-I-Db',
    key: 'Db',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['Ebm7', 'Ab7', 'Dbmaj7'],
    name: 'ii-V-I in Db'
  },
  {
    id: 'ii-V-I-Ab',
    key: 'Ab',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['Bbm7', 'Eb7', 'Abmaj7'],
    name: 'ii-V-I in Ab'
  },
  {
    id: 'ii-V-I-Eb',
    key: 'Eb',
    romanNumerals: ['iim7', 'V7', 'Imaj7'],
    chords: ['Fm7', 'Bb7', 'Ebmaj7'],
    name: 'ii-V-I in Eb'
  },

  // I-vi-IV-V en diferentes tonalidades
  {
    id: 'I-vi-IV-V-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'vim7', 'IVmaj7', 'V7'],
    chords: ['Cmaj7', 'Am7', 'Fmaj7', 'G7'],
    name: 'I-vi-IV-V in C'
  },
  {
    id: 'I-vi-IV-V-G',
    key: 'G',
    romanNumerals: ['Imaj7', 'vim7', 'IVmaj7', 'V7'],
    chords: ['Gmaj7', 'Em7', 'Cmaj7', 'D7'],
    name: 'I-vi-IV-V in G'
  },
  {
    id: 'I-vi-IV-V-F',
    key: 'F',
    romanNumerals: ['Imaj7', 'vim7', 'IVmaj7', 'V7'],
    chords: ['Fmaj7', 'Dm7', 'Bbmaj7', 'C7'],
    name: 'I-vi-IV-V in F'
  },
  {
    id: 'I-vi-IV-V-D',
    key: 'D',
    romanNumerals: ['Imaj7', 'vim7', 'IVmaj7', 'V7'],
    chords: ['Dmaj7', 'Bm7', 'Gmaj7', 'A7'],
    name: 'I-vi-IV-V in D'
  },

  // vi-ii-V-I en diferentes tonalidades
  {
    id: 'vi-ii-V-I-C',
    key: 'C',
    romanNumerals: ['vim7', 'iim7', 'V7', 'Imaj7'],
    chords: ['Am7', 'Dm7', 'G7', 'Cmaj7'],
    name: 'vi-ii-V-I in C'
  },
  {
    id: 'vi-ii-V-I-F',
    key: 'F',
    romanNumerals: ['vim7', 'iim7', 'V7', 'Imaj7'],
    chords: ['Dm7', 'Gm7', 'C7', 'Fmaj7'],
    name: 'vi-ii-V-I in F'
  },
  {
    id: 'vi-ii-V-I-Bb',
    key: 'Bb',
    romanNumerals: ['vim7', 'iim7', 'V7', 'Imaj7'],
    chords: ['Gm7', 'Cm7', 'F7', 'Bbmaj7'],
    name: 'vi-ii-V-I in Bb'
  },

  // Progresiones menores
  {
    id: 'i-iv-V-i-Am',
    key: 'Am',
    romanNumerals: ['im7', 'ivm7', 'V7', 'im7'],
    chords: ['Am7', 'Dm7', 'E7', 'Am7'],
    name: 'i-iv-V-i in Am'
  },
  {
    id: 'i-iv-V-i-Dm',
    key: 'Dm',
    romanNumerals: ['im7', 'ivm7', 'V7', 'im7'],
    chords: ['Dm7', 'Gm7', 'A7', 'Dm7'],
    name: 'i-iv-V-i in Dm'
  },
  {
    id: 'i-iv-V-i-Em',
    key: 'Em',
    romanNumerals: ['im7', 'ivm7', 'V7', 'im7'],
    chords: ['Em7', 'Am7', 'B7', 'Em7'],
    name: 'i-iv-V-i in Em'
  },

  // Progresiones de jazz más complejas
  {
    id: 'I-VI-ii-V-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'VI7', 'iim7', 'V7'],
    chords: ['Cmaj7', 'A7', 'Dm7', 'G7'],
    name: 'I-VI-ii-V in C'
  },
  {
    id: 'iii-VI-ii-V-C',
    key: 'C',
    romanNumerals: ['iiim7', 'VI7', 'iim7', 'V7'],
    chords: ['Em7', 'A7', 'Dm7', 'G7'],
    name: 'iii-VI-ii-V in C'
  },
  {
    id: 'I-bVII-IV-I-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'bVII7', 'IVmaj7', 'Imaj7'],
    chords: ['Cmaj7', 'Bb7', 'Fmaj7', 'Cmaj7'],
    name: 'I-bVII-IV-I in C'
  },
  {
    id: 'ii-V-iii-vi-C',
    key: 'C',
    romanNumerals: ['iim7', 'V7', 'iiim7', 'vim7'],
    chords: ['Dm7', 'G7', 'Em7', 'Am7'],
    name: 'ii-V-iii-vi in C'
  },

  // Progresiones con sustituciones
  {
    id: 'ii-bII-I-C',
    key: 'C',
    romanNumerals: ['iim7', 'bII7', 'Imaj7'],
    chords: ['Dm7', 'Db7', 'Cmaj7'],
    name: 'ii-bII-I (tritone sub) in C'
  },
  {
    id: 'ii-V-I-vi-C',
    key: 'C',
    romanNumerals: ['iim7', 'V7', 'Imaj7', 'vim7'],
    chords: ['Dm7', 'G7', 'Cmaj7', 'Am7'],
    name: 'ii-V-I-vi in C'
  },

  // Progresiones modales
  {
    id: 'dorian-vamp-D',
    key: 'D Dorian',
    romanNumerals: ['im7', 'IVmaj7'],
    chords: ['Dm7', 'Gmaj7'],
    name: 'Dorian vamp in D'
  },
  {
    id: 'mixolydian-vamp-G',
    key: 'G Mixolydian',
    romanNumerals: ['I7', 'bVIImaj7'],
    chords: ['G7', 'Fmaj7'],
    name: 'Mixolydian vamp in G'
  },
  {
    id: 'phrygian-vamp-E',
    key: 'E Phrygian',
    romanNumerals: ['im7', 'bIImaj7'],
    chords: ['Em7', 'Fmaj7'],
    name: 'Phrygian vamp in E'
  },

  // Progresiones de blues
  {
    id: 'blues-basic-C',
    key: 'C',
    romanNumerals: ['I7', 'I7', 'I7', 'I7', 'IV7', 'IV7', 'I7', 'I7', 'V7', 'IV7', 'I7', 'V7'],
    chords: ['C7', 'C7', 'C7', 'C7', 'F7', 'F7', 'C7', 'C7', 'G7', 'F7', 'C7', 'G7'],
    name: '12-bar blues in C'
  },
  {
    id: 'blues-jazz-C',
    key: 'C',
    romanNumerals: ['I7', 'VI7', 'iim7', 'V7', 'IV7', 'IV7', 'I7', 'VI7', 'iim7', 'V7', 'I7', 'iim7', 'V7'],
    chords: ['C7', 'A7', 'Dm7', 'G7', 'F7', 'F7', 'C7', 'A7', 'Dm7', 'G7', 'C7', 'Dm7', 'G7'],
    name: 'Jazz blues in C'
  },

  // Progresiones de bossa nova
  {
    id: 'bossa-nova-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'vim7', 'iim7', 'V7'],
    chords: ['Cmaj7', 'Am7', 'Dm7', 'G7'],
    name: 'Bossa nova in C'
  },
  {
    id: 'girl-from-ipanema-F',
    key: 'F',
    romanNumerals: ['Imaj7', 'Imaj7', 'vim7', 'vim7', 'iim7', 'V7', 'vim7', 'vim7'],
    chords: ['Fmaj7', 'Fmaj7', 'Dm7', 'Dm7', 'Gm7', 'C7', 'Dm7', 'Dm7'],
    name: 'Girl from Ipanema style in F'
  },

  // Progresiones de rock/pop
  {
    id: 'pop-ballad-C',
    key: 'C',
    romanNumerals: ['vi', 'IV', 'I', 'V'],
    chords: ['Am', 'F', 'C', 'G'],
    name: 'Pop ballad (vi-IV-I-V) in C'
  },
  {
    id: 'pop-progression-G',
    key: 'G',
    romanNumerals: ['I', 'V', 'vi', 'IV'],
    chords: ['G', 'D', 'Em', 'C'],
    name: 'Pop progression (I-V-vi-IV) in G'
  },

  // ARMONÍA AVANZADA - Intercambio modal
  {
    id: 'modal-interchange-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'bVImaj7', 'bVII7', 'Imaj7'],
    chords: ['Cmaj7', 'Abmaj7', 'Bb7', 'Cmaj7'],
    name: 'Modal interchange in C'
  },
  {
    id: 'neapolitan-sixth-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'N6', 'V7', 'Imaj7'],
    chords: ['Cmaj7', 'Db/F', 'G7', 'Cmaj7'],
    name: 'Neapolitan sixth in C'
  },
  {
    id: 'augmented-sixth-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'It+6', 'V7', 'Imaj7'],
    chords: ['Cmaj7', 'Ab/F#', 'G7', 'Cmaj7'],
    name: 'Italian augmented sixth in C'
  },

  // Dominantes secundarios múltiples
  {
    id: 'secondary-dominants-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'V7/vi', 'vim7', 'V7/ii', 'iim7', 'V7', 'Imaj7'],
    chords: ['Cmaj7', 'E7', 'Am7', 'A7', 'Dm7', 'G7', 'Cmaj7'],
    name: 'Multiple secondary dominants in C'
  },
  {
    id: 'circle-of-fifths-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'V7/iii', 'iiim7', 'V7/vi', 'vim7', 'V7/ii', 'iim7', 'V7', 'Imaj7'],
    chords: ['Cmaj7', 'B7', 'Em7', 'E7', 'Am7', 'A7', 'Dm7', 'G7', 'Cmaj7'],
    name: 'Circle of fifths progression in C'
  },

  // Sustituciones avanzadas
  {
    id: 'tritone-substitution-chain-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'bII7', 'bV7', 'Imaj7'],
    chords: ['Cmaj7', 'Db7', 'Gb7', 'Cmaj7'],
    name: 'Tritone substitution chain in C'
  },
  {
    id: 'chromatic-mediant-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'bIIImaj7', 'Imaj7'],
    chords: ['Cmaj7', 'Ebmaj7', 'Cmaj7'],
    name: 'Chromatic mediant in C'
  },
  {
    id: 'common-tone-diminished-C',
    key: 'C',
    romanNumerals: ['Imaj7', '#Io7', 'iim7', 'V7'],
    chords: ['Cmaj7', 'C#o7', 'Dm7', 'G7'],
    name: 'Common tone diminished in C'
  },

  // Progresiones politonales
  {
    id: 'bitonality-C-Gb',
    key: 'C/Gb',
    romanNumerals: ['Imaj7', 'bVmaj7', 'Imaj7'],
    chords: ['Cmaj7', 'Gbmaj7', 'Cmaj7'],
    name: 'Bitonal progression C/Gb'
  },

  // Armonía cuartal
  {
    id: 'quartal-harmony-C',
    key: 'C',
    romanNumerals: ['Isus4', 'IVsus4', 'bVIIsus4', 'Isus4'],
    chords: ['Csus4', 'Fsus4', 'Bbsus4', 'Csus4'],
    name: 'Quartal harmony in C'
  },

  // Upper structure triads
  {
    id: 'upper-structures-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'V7(#11)', 'Imaj7'],
    chords: ['Cmaj7', 'G7/B', 'Cmaj7'],
    name: 'Upper structure triads in C'
  },

  // Progresiones atonales/seriales
  {
    id: 'twelve-tone-row',
    key: 'Atonal',
    romanNumerals: ['P0', 'I5', 'R7', 'RI2'],
    chords: ['C-Db-F-E', 'F-Gb-Bb-A', 'G-F#-D-Eb', 'Eb-D-G-F#'],
    name: '12-tone row transformations'
  },

  // Armonía extendida de jazz
  {
    id: 'extended-jazz-C',
    key: 'C',
    romanNumerals: ['Imaj9#11', 'vim11', 'iim9', 'V13alt'],
    chords: ['Cmaj9#11', 'Am11', 'Dm9', 'G13alt'],
    name: 'Extended jazz harmony in C'
  },
  {
    id: 'polychords-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'D/G', 'Imaj7'],
    chords: ['Cmaj7', 'D/G', 'Cmaj7'],
    name: 'Polychords in C'
  },

  // Progresiones modales avanzadas
  {
    id: 'lydian-chromatic-concept',
    key: 'C Lydian',
    romanNumerals: ['Imaj7#11', 'IImaj7#11', 'Imaj7#11'],
    chords: ['Cmaj7#11', 'Dmaj7#11', 'Cmaj7#11'],
    name: 'Lydian Chromatic Concept'
  },
  {
    id: 'symmetric-scales-progression',
    key: 'C',
    romanNumerals: ['C7alt', 'Db7alt', 'D7alt', 'Eb7alt'],
    chords: ['C7alt', 'Db7alt', 'D7alt', 'Eb7alt'],
    name: 'Symmetric diminished progression'
  }
];

export const scales: Scale[] = [
  // Modos de la escala mayor
  {
    id: 'c-major',
    name: 'C Mayor (Jónico)',
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    mode: 'Ionian',
    chordConnection: 'Cmaj7 (I grado)'
  },
  {
    id: 'd-dorian',
    name: 'D Dórico',
    notes: ['D', 'E', 'F', 'G', 'A', 'B', 'C'],
    mode: 'Dorian',
    chordConnection: 'Dm7 (ii grado)'
  },
  {
    id: 'e-phrygian',
    name: 'E Frigio',
    notes: ['E', 'F', 'G', 'A', 'B', 'C', 'D'],
    mode: 'Phrygian',
    chordConnection: 'Em7 (iii grado)'
  },
  {
    id: 'f-lydian',
    name: 'F Lidio',
    notes: ['F', 'G', 'A', 'B', 'C', 'D', 'E'],
    mode: 'Lydian',
    chordConnection: 'Fmaj7 (IV grado)'
  },
  {
    id: 'g-mixolydian',
    name: 'G Mixolidio',
    notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F'],
    mode: 'Mixolydian',
    chordConnection: 'G7 (V grado)'
  },
  {
    id: 'a-minor',
    name: 'A Menor (Eólico)',
    notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    mode: 'Aeolian',
    chordConnection: 'Am7 (vi grado)'
  },
  {
    id: 'b-locrian',
    name: 'B Locrio',
    notes: ['B', 'C', 'D', 'E', 'F', 'G', 'A'],
    mode: 'Locrian',
    chordConnection: 'Bm7b5 (vii grado)'
  },

  // Escalas menores
  {
    id: 'a-harmonic-minor',
    name: 'A Menor Armónica',
    notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G#'],
    chordConnection: 'Am(maj7), E7alt'
  },
  {
    id: 'a-melodic-minor',
    name: 'A Menor Melódica',
    notes: ['A', 'B', 'C', 'D', 'E', 'F#', 'G#'],
    chordConnection: 'Am(maj7), mM7'
  },

  // Escalas pentatónicas
  {
    id: 'c-pentatonic-major',
    name: 'C Pentatónica Mayor',
    notes: ['C', 'D', 'E', 'G', 'A'],
    chordConnection: 'Cmaj7, C6'
  },
  {
    id: 'a-pentatonic-minor',
    name: 'A Pentatónica Menor',
    notes: ['A', 'C', 'D', 'E', 'G'],
    chordConnection: 'Am7, Am6'
  },
  {
    id: 'g-pentatonic-blues',
    name: 'G Pentatónica Blues',
    notes: ['G', 'Bb', 'C', 'Db', 'D', 'F'],
    chordConnection: 'G7, blues en G'
  },

  // Escalas bebop
  {
    id: 'c-bebop-major',
    name: 'C Bebop Mayor',
    notes: ['C', 'D', 'E', 'F', 'G', 'G#', 'A', 'B'],
    chordConnection: 'Cmaj7 (bebop)'
  },
  {
    id: 'g-bebop-dominant',
    name: 'G Bebop Dominante',
    notes: ['G', 'A', 'B', 'C', 'D', 'E', 'F', 'F#'],
    chordConnection: 'G7 (bebop)'
  },
  {
    id: 'd-bebop-dorian',
    name: 'D Bebop Dórico',
    notes: ['D', 'E', 'F', 'F#', 'G', 'A', 'B', 'C'],
    chordConnection: 'Dm7 (bebop)'
  },

  // Escalas simétricas
  {
    id: 'c-whole-tone',
    name: 'C Tonos Enteros',
    notes: ['C', 'D', 'E', 'F#', 'G#', 'Bb'],
    chordConnection: 'C7#11, Caug'
  },
  {
    id: 'c-diminished-hw',
    name: 'C Disminuida (Tono-Semitono)',
    notes: ['C', 'D', 'Eb', 'F', 'Gb', 'Ab', 'A', 'B'],
    chordConnection: 'C7alt, Cdim7'
  },
  {
    id: 'c-diminished-wh',
    name: 'C Disminuida (Semitono-Tono)',
    notes: ['C', 'Db', 'Eb', 'E', 'Gb', 'G', 'A', 'Bb'],
    chordConnection: 'Cdim7, Co7'
  },

  // Escalas alteradas y exóticas
  {
    id: 'g-altered',
    name: 'G Alterada (Super Locrio)',
    notes: ['G', 'Ab', 'Bb', 'B', 'Db', 'Eb', 'F'],
    chordConnection: 'G7alt (b9, #9, #11, b13)'
  },
  {
    id: 'c-lydian-dominant',
    name: 'C Lidio Dominante',
    notes: ['C', 'D', 'E', 'F#', 'G', 'A', 'Bb'],
    chordConnection: 'C7#11'
  },
  {
    id: 'a-phrygian-dominant',
    name: 'A Frigio Dominante',
    notes: ['A', 'Bb', 'C#', 'D', 'E', 'F', 'G'],
    chordConnection: 'A7b9 (flamenco)'
  },

  // Escalas étnicas y modales
  {
    id: 'c-hungarian-minor',
    name: 'C Húngara Menor',
    notes: ['C', 'D', 'Eb', 'F#', 'G', 'Ab', 'B'],
    chordConnection: 'Cm(maj7), música húngara'
  },
  {
    id: 'c-japanese-hirajoshi',
    name: 'C Japonesa (Hirajoshi)',
    notes: ['C', 'Db', 'F', 'G', 'Ab'],
    chordConnection: 'Música japonesa tradicional'
  },
  {
    id: 'c-arabic-maqam',
    name: 'C Árabe (Hijaz)',
    notes: ['C', 'Db', 'E', 'F', 'G', 'Ab', 'B'],
    chordConnection: 'Música árabe y del Medio Oriente'
  },
  {
    id: 'c-gypsy',
    name: 'C Gitana',
    notes: ['C', 'Db', 'E', 'F', 'G', 'Ab', 'Bb'],
    chordConnection: 'Música gitana y flamenca'
  },

  // Escalas modernas y jazz
  {
    id: 'c-chromatic',
    name: 'C Cromática',
    notes: ['C', 'C#', 'D', 'D#', 'E', 'F', 'F#', 'G', 'G#', 'A', 'A#', 'B'],
    chordConnection: 'Pasajes cromáticos, jazz moderno'
  },
  {
    id: 'c-blues-major',
    name: 'C Blues Mayor',
    notes: ['C', 'D', 'Eb', 'E', 'G', 'A'],
    chordConnection: 'C7, blues mayor'
  },
  {
    id: 'c-blues-minor',
    name: 'C Blues Menor',
    notes: ['C', 'Eb', 'F', 'Gb', 'G', 'Bb'],
    chordConnection: 'Cm7, blues menor'
  },
  {
    id: 'c-neapolitan-minor',
    name: 'C Napolitana Menor',
    notes: ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'B'],
    chordConnection: 'Cm(maj7), música clásica'
  },
  {
    id: 'c-enigmatic',
    name: 'C Enigmática',
    notes: ['C', 'Db', 'E', 'F#', 'G#', 'A#', 'B'],
    chordConnection: 'Música impresionista'
  }
];

export const scaleCategories: ScaleCategory[] = [
  {
    id: 'modal',
    name: 'Modos de la Escala Mayor',
    description: 'Los 7 modos tradicionales derivados de la escala mayor',
    scales: scales.filter(s => ['c-major', 'd-dorian', 'e-phrygian', 'f-lydian', 'g-mixolydian', 'a-minor', 'b-locrian'].includes(s.id))
  },
  {
    id: 'minor-scales',
    name: 'Escalas Menores',
    description: 'Variaciones de la escala menor: armónica y melódica',
    scales: scales.filter(s => ['a-harmonic-minor', 'a-melodic-minor'].includes(s.id))
  },
  {
    id: 'pentatonic',
    name: 'Escalas Pentatónicas',
    description: 'Escalas de 5 notas: mayor, menor y blues',
    scales: scales.filter(s => ['c-pentatonic-major', 'a-pentatonic-minor', 'g-pentatonic-blues'].includes(s.id))
  },
  {
    id: 'bebop',
    name: 'Escalas Bebop',
    description: 'Escalas de 8 notas usadas en jazz bebop',
    scales: scales.filter(s => ['c-bebop-major', 'g-bebop-dominant', 'd-bebop-dorian'].includes(s.id))
  },
  {
    id: 'symmetric',
    name: 'Escalas Simétricas',
    description: 'Escalas con patrones simétricos: tonos enteros y disminuidas',
    scales: scales.filter(s => ['c-whole-tone', 'c-diminished-hw', 'c-diminished-wh'].includes(s.id))
  },
  {
    id: 'altered',
    name: 'Escalas Alteradas',
    description: 'Escalas con alteraciones para acordes dominantes y complejos',
    scales: scales.filter(s => ['g-altered', 'c-lydian-dominant', 'a-phrygian-dominant'].includes(s.id))
  },
  {
    id: 'ethnic',
    name: 'Escalas Étnicas',
    description: 'Escalas de diferentes tradiciones musicales del mundo',
    scales: scales.filter(s => ['c-hungarian-minor', 'c-japanese-hirajoshi', 'c-arabic-maqam', 'c-gypsy'].includes(s.id))
  },
  {
    id: 'modern',
    name: 'Escalas Modernas',
    description: 'Escalas usadas en jazz moderno y música contemporánea',
    scales: scales.filter(s => ['c-chromatic', 'c-blues-major', 'c-blues-minor', 'c-neapolitan-minor', 'c-enigmatic'].includes(s.id))
  }
];

export const keys = ['C', 'Db', 'D', 'Eb', 'E', 'F', 'Gb', 'G', 'Ab', 'A', 'Bb', 'B'];

export function generateProgression(key: string, romanNumerals: string[]): string[] {
  const majorScale = ['Imaj7', 'iim7', 'iiim7', 'IVmaj7', 'V7', 'vim7', 'viim7b5'];
  const chordTypes = ['maj7', 'm7', 'm7', 'maj7', '7', 'm7', 'm7b5'];
  
  const keyIndex = keys.indexOf(key);
  const notes = [];
  
  for (let i = 0; i < 7; i++) {
    notes.push(keys[(keyIndex + i * 7) % 12]);
  }
  
  return romanNumerals.map(roman => {
    const index = majorScale.findIndex(r => r.toLowerCase().replace(/[^ivx]/g, '') === roman.toLowerCase().replace(/[^ivx]/g, ''));
    if (index !== -1) {
      return notes[index] + chordTypes[index];
    }
    return roman;
  });
}
import { Progression, Scale } from '../types/music';

// NUEVAS PROGRESIONES DE BLUES
const bluesProgressions: Progression[] = [
  // 12-bar blues básico en diferentes tonalidades
  {
    id: 'blues-12-bar-C',
    key: 'C',
    romanNumerals: ['I7', 'I7', 'I7', 'I7', 'IV7', 'IV7', 'I7', 'I7', 'V7', 'IV7', 'I7', 'V7'],
    chords: ['C7', 'C7', 'C7', 'C7', 'F7', 'F7', 'C7', 'C7', 'G7', 'F7', 'C7', 'G7'],
    name: '12-bar blues in C'
  },
  {
    id: 'blues-12-bar-G',
    key: 'G',
    romanNumerals: ['I7', 'I7', 'I7', 'I7', 'IV7', 'IV7', 'I7', 'I7', 'V7', 'IV7', 'I7', 'V7'],
    chords: ['G7', 'G7', 'G7', 'G7', 'C7', 'C7', 'G7', 'G7', 'D7', 'C7', 'G7', 'D7'],
    name: '12-bar blues in G'
  },
  {
    id: 'blues-12-bar-F',
    key: 'F',
    romanNumerals: ['I7', 'I7', 'I7', 'I7', 'IV7', 'IV7', 'I7', 'I7', 'V7', 'IV7', 'I7', 'V7'],
    chords: ['F7', 'F7', 'F7', 'F7', 'Bb7', 'Bb7', 'F7', 'F7', 'C7', 'Bb7', 'F7', 'C7'],
    name: '12-bar blues in F'
  },
  {
    id: 'blues-12-bar-Bb',
    key: 'Bb',
    romanNumerals: ['I7', 'I7', 'I7', 'I7', 'IV7', 'IV7', 'I7', 'I7', 'V7', 'IV7', 'I7', 'V7'],
    chords: ['Bb7', 'Bb7', 'Bb7', 'Bb7', 'Eb7', 'Eb7', 'Bb7', 'Bb7', 'F7', 'Eb7', 'Bb7', 'F7'],
    name: '12-bar blues in Bb'
  },
  {
    id: 'blues-12-bar-E',
    key: 'E',
    romanNumerals: ['I7', 'I7', 'I7', 'I7', 'IV7', 'IV7', 'I7', 'I7', 'V7', 'IV7', 'I7', 'V7'],
    chords: ['E7', 'E7', 'E7', 'E7', 'A7', 'A7', 'E7', 'E7', 'B7', 'A7', 'E7', 'B7'],
    name: '12-bar blues in E'
  },

  // Jazz blues
  {
    id: 'jazz-blues-C',
    key: 'C',
    romanNumerals: ['I7', 'VI7', 'iim7', 'V7', 'IV7', 'IV7', 'I7', 'VI7', 'iim7', 'V7', 'I7', 'iim7', 'V7'],
    chords: ['C7', 'A7', 'Dm7', 'G7', 'F7', 'F7', 'C7', 'A7', 'Dm7', 'G7', 'C7', 'Dm7', 'G7'],
    name: 'Jazz blues in C'
  },
  {
    id: 'jazz-blues-F',
    key: 'F',
    romanNumerals: ['I7', 'VI7', 'iim7', 'V7', 'IV7', 'IV7', 'I7', 'VI7', 'iim7', 'V7', 'I7', 'iim7', 'V7'],
    chords: ['F7', 'D7', 'Gm7', 'C7', 'Bb7', 'Bb7', 'F7', 'D7', 'Gm7', 'C7', 'F7', 'Gm7', 'C7'],
    name: 'Jazz blues in F'
  },
  {
    id: 'jazz-blues-Bb',
    key: 'Bb',
    romanNumerals: ['I7', 'VI7', 'iim7', 'V7', 'IV7', 'IV7', 'I7', 'VI7', 'iim7', 'V7', 'I7', 'iim7', 'V7'],
    chords: ['Bb7', 'G7', 'Cm7', 'F7', 'Eb7', 'Eb7', 'Bb7', 'G7', 'Cm7', 'F7', 'Bb7', 'Cm7', 'F7'],
    name: 'Jazz blues in Bb'
  },

  // Minor blues
  {
    id: 'minor-blues-Am',
    key: 'Am',
    romanNumerals: ['im7', 'im7', 'im7', 'im7', 'ivm7', 'ivm7', 'im7', 'im7', 'V7', 'ivm7', 'im7', 'V7'],
    chords: ['Am7', 'Am7', 'Am7', 'Am7', 'Dm7', 'Dm7', 'Am7', 'Am7', 'E7', 'Dm7', 'Am7', 'E7'],
    name: 'Minor blues in Am'
  },
  {
    id: 'minor-blues-Em',
    key: 'Em',
    romanNumerals: ['im7', 'im7', 'im7', 'im7', 'ivm7', 'ivm7', 'im7', 'im7', 'V7', 'ivm7', 'im7', 'V7'],
    chords: ['Em7', 'Em7', 'Em7', 'Em7', 'Am7', 'Am7', 'Em7', 'Em7', 'B7', 'Am7', 'Em7', 'B7'],
    name: 'Minor blues in Em'
  },
  {
    id: 'minor-blues-Dm',
    key: 'Dm',
    romanNumerals: ['im7', 'im7', 'im7', 'im7', 'ivm7', 'ivm7', 'im7', 'im7', 'V7', 'ivm7', 'im7', 'V7'],
    chords: ['Dm7', 'Dm7', 'Dm7', 'Dm7', 'Gm7', 'Gm7', 'Dm7', 'Dm7', 'A7', 'Gm7', 'Dm7', 'A7'],
    name: 'Minor blues in Dm'
  }
];

// PROGRESIONES MODALES
const modalProgressions: Progression[] = [
  // Dórico
  {
    id: 'dorian-vamp-D',
    key: 'D Dorian',
    romanNumerals: ['im7', 'IVmaj7'],
    chords: ['Dm7', 'Gmaj7'],
    name: 'Dorian vamp in D'
  },
  {
    id: 'dorian-vamp-A',
    key: 'A Dorian',
    romanNumerals: ['im7', 'IVmaj7'],
    chords: ['Am7', 'Dmaj7'],
    name: 'Dorian vamp in A'
  },
  {
    id: 'dorian-extended-E',
    key: 'E Dorian',
    romanNumerals: ['im7', 'IVmaj7', 'bVIImaj7', 'im7'],
    chords: ['Em7', 'Amaj7', 'Dmaj7', 'Em7'],
    name: 'Extended Dorian in E'
  },

  // Mixolidio
  {
    id: 'mixolydian-vamp-G',
    key: 'G Mixolydian',
    romanNumerals: ['I7', 'bVIImaj7'],
    chords: ['G7', 'Fmaj7'],
    name: 'Mixolydian vamp in G'
  },
  {
    id: 'mixolydian-vamp-D',
    key: 'D Mixolydian',
    romanNumerals: ['I7', 'bVIImaj7'],
    chords: ['D7', 'Cmaj7'],
    name: 'Mixolydian vamp in D'
  },
  {
    id: 'mixolydian-extended-A',
    key: 'A Mixolydian',
    romanNumerals: ['I7', 'bVIImaj7', 'IVmaj7', 'I7'],
    chords: ['A7', 'Gmaj7', 'Dmaj7', 'A7'],
    name: 'Extended Mixolydian in A'
  },

  // Frigio
  {
    id: 'phrygian-vamp-E',
    key: 'E Phrygian',
    romanNumerals: ['im7', 'bIImaj7'],
    chords: ['Em7', 'Fmaj7'],
    name: 'Phrygian vamp in E'
  },
  {
    id: 'phrygian-vamp-A',
    key: 'A Phrygian',
    romanNumerals: ['im7', 'bIImaj7'],
    chords: ['Am7', 'Bbmaj7'],
    name: 'Phrygian vamp in A'
  },
  {
    id: 'phrygian-extended-B',
    key: 'B Phrygian',
    romanNumerals: ['im7', 'bIImaj7', 'bIIImaj7', 'im7'],
    chords: ['Bm7', 'Cmaj7', 'Dmaj7', 'Bm7'],
    name: 'Extended Phrygian in B'
  }
];

// PROGRESIONES DE ROCK/POP
const rockPopProgressions: Progression[] = [
  // vi-IV-I-V (Pop ballad)
  {
    id: 'pop-ballad-C',
    key: 'C',
    romanNumerals: ['vi', 'IV', 'I', 'V'],
    chords: ['Am', 'F', 'C', 'G'],
    name: 'Pop ballad (vi-IV-I-V) in C'
  },
  {
    id: 'pop-ballad-G',
    key: 'G',
    romanNumerals: ['vi', 'IV', 'I', 'V'],
    chords: ['Em', 'C', 'G', 'D'],
    name: 'Pop ballad (vi-IV-I-V) in G'
  },
  {
    id: 'pop-ballad-F',
    key: 'F',
    romanNumerals: ['vi', 'IV', 'I', 'V'],
    chords: ['Dm', 'Bb', 'F', 'C'],
    name: 'Pop ballad (vi-IV-I-V) in F'
  },
  {
    id: 'pop-ballad-D',
    key: 'D',
    romanNumerals: ['vi', 'IV', 'I', 'V'],
    chords: ['Bm', 'G', 'D', 'A'],
    name: 'Pop ballad (vi-IV-I-V) in D'
  },

  // I-V-vi-IV (Pop progression)
  {
    id: 'pop-progression-C',
    key: 'C',
    romanNumerals: ['I', 'V', 'vi', 'IV'],
    chords: ['C', 'G', 'Am', 'F'],
    name: 'Pop progression (I-V-vi-IV) in C'
  },
  {
    id: 'pop-progression-G',
    key: 'G',
    romanNumerals: ['I', 'V', 'vi', 'IV'],
    chords: ['G', 'D', 'Em', 'C'],
    name: 'Pop progression (I-V-vi-IV) in G'
  },
  {
    id: 'pop-progression-F',
    key: 'F',
    romanNumerals: ['I', 'V', 'vi', 'IV'],
    chords: ['F', 'C', 'Dm', 'Bb'],
    name: 'Pop progression (I-V-vi-IV) in F'
  },
  {
    id: 'pop-progression-D',
    key: 'D',
    romanNumerals: ['I', 'V', 'vi', 'IV'],
    chords: ['D', 'A', 'Bm', 'G'],
    name: 'Pop progression (I-V-vi-IV) in D'
  },

  // I-bVII-IV-I (Rock progression)
  {
    id: 'rock-progression-C',
    key: 'C',
    romanNumerals: ['I', 'bVII', 'IV', 'I'],
    chords: ['C', 'Bb', 'F', 'C'],
    name: 'Rock progression (I-bVII-IV-I) in C'
  },
  {
    id: 'rock-progression-G',
    key: 'G',
    romanNumerals: ['I', 'bVII', 'IV', 'I'],
    chords: ['G', 'F', 'C', 'G'],
    name: 'Rock progression (I-bVII-IV-I) in G'
  },
  {
    id: 'rock-progression-F',
    key: 'F',
    romanNumerals: ['I', 'bVII', 'IV', 'I'],
    chords: ['F', 'Eb', 'Bb', 'F'],
    name: 'Rock progression (I-bVII-IV-I) in F'
  }
];

// CADENCIAS CLÁSICAS
const classicalCadences: Progression[] = [
  // Cadencia auténtica
  {
    id: 'authentic-cadence-C',
    key: 'C',
    romanNumerals: ['V', 'I'],
    chords: ['G', 'C'],
    name: 'Authentic cadence in C'
  },
  {
    id: 'authentic-cadence-G',
    key: 'G',
    romanNumerals: ['V', 'I'],
    chords: ['D', 'G'],
    name: 'Authentic cadence in G'
  },
  {
    id: 'authentic-cadence-F',
    key: 'F',
    romanNumerals: ['V', 'I'],
    chords: ['C', 'F'],
    name: 'Authentic cadence in F'
  },

  // Cadencia plagal
  {
    id: 'plagal-cadence-C',
    key: 'C',
    romanNumerals: ['IV', 'I'],
    chords: ['F', 'C'],
    name: 'Plagal cadence in C'
  },
  {
    id: 'plagal-cadence-G',
    key: 'G',
    romanNumerals: ['IV', 'I'],
    chords: ['C', 'G'],
    name: 'Plagal cadence in G'
  },
  {
    id: 'plagal-cadence-F',
    key: 'F',
    romanNumerals: ['IV', 'I'],
    chords: ['Bb', 'F'],
    name: 'Plagal cadence in F'
  },

  // Cadencia rota
  {
    id: 'deceptive-cadence-C',
    key: 'C',
    romanNumerals: ['V', 'vi'],
    chords: ['G', 'Am'],
    name: 'Deceptive cadence in C'
  },
  {
    id: 'deceptive-cadence-G',
    key: 'G',
    romanNumerals: ['V', 'vi'],
    chords: ['D', 'Em'],
    name: 'Deceptive cadence in G'
  },
  {
    id: 'deceptive-cadence-F',
    key: 'F',
    romanNumerals: ['V', 'vi'],
    chords: ['C', 'Dm'],
    name: 'Deceptive cadence in F'
  },

  // Cadencia frigia
  {
    id: 'phrygian-cadence-Am',
    key: 'Am',
    romanNumerals: ['iv6', 'V'],
    chords: ['Dm/F', 'E'],
    name: 'Phrygian cadence in Am'
  },
  {
    id: 'phrygian-cadence-Em',
    key: 'Em',
    romanNumerals: ['iv6', 'V'],
    chords: ['Am/C', 'B'],
    name: 'Phrygian cadence in Em'
  },
  {
    id: 'phrygian-cadence-Dm',
    key: 'Dm',
    romanNumerals: ['iv6', 'V'],
    chords: ['Gm/Bb', 'A'],
    name: 'Phrygian cadence in Dm'
  }
];

// ARMONÍA AVANZADA
const advancedHarmonyProgressions: Progression[] = [
  // Intercambio modal
  {
    id: 'modal-interchange-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'bVImaj7', 'bVII7', 'Imaj7'],
    chords: ['Cmaj7', 'Abmaj7', 'Bb7', 'Cmaj7'],
    name: 'Modal interchange in C'
  },
  {
    id: 'modal-interchange-G',
    key: 'G',
    romanNumerals: ['Imaj7', 'bVImaj7', 'bVII7', 'Imaj7'],
    chords: ['Gmaj7', 'Ebmaj7', 'F7', 'Gmaj7'],
    name: 'Modal interchange in G'
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

  // Sustituciones tritónicas
  {
    id: 'tritone-substitution-C',
    key: 'C',
    romanNumerals: ['iim7', 'bII7', 'Imaj7'],
    chords: ['Dm7', 'Db7', 'Cmaj7'],
    name: 'Tritone substitution in C'
  },
  {
    id: 'tritone-chain-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'bII7', 'bV7', 'Imaj7'],
    chords: ['Cmaj7', 'Db7', 'Gb7', 'Cmaj7'],
    name: 'Tritone substitution chain in C'
  },

  // Mediante cromática
  {
    id: 'chromatic-mediant-C',
    key: 'C',
    romanNumerals: ['Imaj7', 'bIIImaj7', 'Imaj7'],
    chords: ['Cmaj7', 'Ebmaj7', 'Cmaj7'],
    name: 'Chromatic mediant in C'
  },
  {
    id: 'chromatic-mediant-G',
    key: 'G',
    romanNumerals: ['Imaj7', 'bIIImaj7', 'Imaj7'],
    chords: ['Gmaj7', 'Bbmaj7', 'Gmaj7'],
    name: 'Chromatic mediant in G'
  }
];

export const progressions: Progression[] = [
  // Progresiones originales (ii-V-I básicos)
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

  // Añadir todas las nuevas progresiones
  ...bluesProgressions,
  ...modalProgressions,
  ...rockPopProgressions,
  ...classicalCadences,
  ...advancedHarmonyProgressions,

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

// NUEVAS ESCALAS MENORES Y SUS MODOS
const minorScalesAndModes: Scale[] = [
  // Escala menor natural y sus modos
  {
    id: 'a-natural-minor',
    name: 'A Menor Natural (Eólico)',
    notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
    mode: 'Aeolian',
    chordConnection: 'Am7, Am6 (vi grado de C mayor)'
  },
  {
    id: 'b-locrian',
    name: 'B Locrio',
    notes: ['B', 'C', 'D', 'E', 'F', 'G', 'A'],
    mode: 'Locrian',
    chordConnection: 'Bm7b5 (vii grado de C mayor)'
  },
  {
    id: 'c-ionian',
    name: 'C Jónico (Mayor)',
    notes: ['C', 'D', 'E', 'F', 'G', 'A', 'B'],
    mode: 'Ionian',
    chordConnection: 'Cmaj7 (I grado)'
  },

  // Escala menor armónica y sus modos
  {
    id: 'a-harmonic-minor',
    name: 'A Menor Armónica',
    notes: ['A', 'B', 'C', 'D', 'E', 'F', 'G#'],
    chordConnection: 'Am(maj7), E7alt'
  },
  {
    id: 'b-locrian-nat6',
    name: 'B Locrio ♮6',
    notes: ['B', 'C', 'D', 'E', 'F', 'G', 'A'],
    mode: 'Locrian ♮6',
    chordConnection: 'Bm7b5 con 6ª natural'
  },
  {
    id: 'c-ionian-sharp5',
    name: 'C Jónico #5',
    notes: ['C', 'D', 'E', 'F', 'G#', 'A', 'B'],
    mode: 'Ionian #5',
    chordConnection: 'Cmaj7#5'
  },
  {
    id: 'd-dorian-sharp4',
    name: 'D Dórico #4',
    notes: ['D', 'E', 'F', 'G#', 'A', 'B', 'C'],
    mode: 'Dorian #4',
    chordConnection: 'Dm7#11'
  },
  {
    id: 'e-phrygian-dominant',
    name: 'E Frigio Dominante',
    notes: ['E', 'F', 'G#', 'A', 'B', 'C', 'D'],
    mode: 'Phrygian Dominant',
    chordConnection: 'E7b9 (V de Am armónica)'
  },
  {
    id: 'f-lydian-sharp2',
    name: 'F Lidio #2',
    notes: ['F', 'G#', 'A', 'B', 'C', 'D', 'E'],
    mode: 'Lydian #2',
    chordConnection: 'Fmaj7#11#9'
  },
  {
    id: 'gs-super-locrian-bb7',
    name: 'G# Super Locrio bb7',
    notes: ['G#', 'A', 'B', 'C', 'D', 'E', 'F'],
    mode: 'Super Locrian bb7',
    chordConnection: 'G#dim7'
  },

  // Escala menor melódica y sus modos
  {
    id: 'a-melodic-minor',
    name: 'A Menor Melódica',
    notes: ['A', 'B', 'C', 'D', 'E', 'F#', 'G#'],
    chordConnection: 'Am(maj7), mM7'
  },
  {
    id: 'b-dorian-b2',
    name: 'B Dórico b2 (Frigio #6)',
    notes: ['B', 'C', 'D', 'E', 'F#', 'G#', 'A'],
    mode: 'Dorian b2',
    chordConnection: 'Bm7b9'
  },
  {
    id: 'c-lydian-augmented',
    name: 'C Lidio Aumentado',
    notes: ['C', 'D', 'E', 'F#', 'G#', 'A', 'B'],
    mode: 'Lydian Augmented',
    chordConnection: 'Cmaj7#5#11'
  },
  {
    id: 'd-lydian-dominant',
    name: 'D Lidio Dominante',
    notes: ['D', 'E', 'F#', 'G#', 'A', 'B', 'C'],
    mode: 'Lydian Dominant',
    chordConnection: 'D7#11'
  },
  {
    id: 'e-mixolydian-b6',
    name: 'E Mixolidio b6',
    notes: ['E', 'F#', 'G#', 'A', 'B', 'C', 'D'],
    mode: 'Mixolydian b6',
    chordConnection: 'E7b13'
  },
  {
    id: 'fs-locrian-nat2',
    name: 'F# Locrio ♮2',
    notes: ['F#', 'G#', 'A', 'B', 'C', 'D', 'E'],
    mode: 'Locrian ♮2',
    chordConnection: 'F#m7b5'
  },
  {
    id: 'gs-super-locrian',
    name: 'G# Super Locrio (Alterada)',
    notes: ['G#', 'A', 'B', 'C', 'D', 'E', 'F#'],
    mode: 'Super Locrian',
    chordConnection: 'G#7alt'
  }
];

// ESCALAS PENTATÓNICAS EN TODAS LAS TONALIDADES
const pentatonicScales: Scale[] = [
  // Pentatónicas mayores
  {
    id: 'c-pentatonic-major',
    name: 'C Pentatónica Mayor',
    notes: ['C', 'D', 'E', 'G', 'A'],
    chordConnection: 'Cmaj7, C6'
  },
  {
    id: 'g-pentatonic-major',
    name: 'G Pentatónica Mayor',
    notes: ['G', 'A', 'B', 'D', 'E'],
    chordConnection: 'Gmaj7, G6'
  },
  {
    id: 'd-pentatonic-major',
    name: 'D Pentatónica Mayor',
    notes: ['D', 'E', 'F#', 'A', 'B'],
    chordConnection: 'Dmaj7, D6'
  },
  {
    id: 'a-pentatonic-major',
    name: 'A Pentatónica Mayor',
    notes: ['A', 'B', 'C#', 'E', 'F#'],
    chordConnection: 'Amaj7, A6'
  },
  {
    id: 'e-pentatonic-major',
    name: 'E Pentatónica Mayor',
    notes: ['E', 'F#', 'G#', 'B', 'C#'],
    chordConnection: 'Emaj7, E6'
  },
  {
    id: 'b-pentatonic-major',
    name: 'B Pentatónica Mayor',
    notes: ['B', 'C#', 'D#', 'F#', 'G#'],
    chordConnection: 'Bmaj7, B6'
  },
  {
    id: 'f-pentatonic-major',
    name: 'F Pentatónica Mayor',
    notes: ['F', 'G', 'A', 'C', 'D'],
    chordConnection: 'Fmaj7, F6'
  },
  {
    id: 'bb-pentatonic-major',
    name: 'Bb Pentatónica Mayor',
    notes: ['Bb', 'C', 'D', 'F', 'G'],
    chordConnection: 'Bbmaj7, Bb6'
  },
  {
    id: 'eb-pentatonic-major',
    name: 'Eb Pentatónica Mayor',
    notes: ['Eb', 'F', 'G', 'Bb', 'C'],
    chordConnection: 'Ebmaj7, Eb6'
  },
  {
    id: 'ab-pentatonic-major',
    name: 'Ab Pentatónica Mayor',
    notes: ['Ab', 'Bb', 'C', 'Eb', 'F'],
    chordConnection: 'Abmaj7, Ab6'
  },
  {
    id: 'db-pentatonic-major',
    name: 'Db Pentatónica Mayor',
    notes: ['Db', 'Eb', 'F', 'Ab', 'Bb'],
    chordConnection: 'Dbmaj7, Db6'
  },
  {
    id: 'gb-pentatonic-major',
    name: 'Gb Pentatónica Mayor',
    notes: ['Gb', 'Ab', 'Bb', 'Db', 'Eb'],
    chordConnection: 'Gbmaj7, Gb6'
  },

  // Pentatónicas menores
  {
    id: 'a-pentatonic-minor',
    name: 'A Pentatónica Menor',
    notes: ['A', 'C', 'D', 'E', 'G'],
    chordConnection: 'Am7, Am6'
  },
  {
    id: 'e-pentatonic-minor',
    name: 'E Pentatónica Menor',
    notes: ['E', 'G', 'A', 'B', 'D'],
    chordConnection: 'Em7, Em6'
  },
  {
    id: 'b-pentatonic-minor',
    name: 'B Pentatónica Menor',
    notes: ['B', 'D', 'E', 'F#', 'A'],
    chordConnection: 'Bm7, Bm6'
  },
  {
    id: 'fs-pentatonic-minor',
    name: 'F# Pentatónica Menor',
    notes: ['F#', 'A', 'B', 'C#', 'E'],
    chordConnection: 'F#m7, F#m6'
  },
  {
    id: 'cs-pentatonic-minor',
    name: 'C# Pentatónica Menor',
    notes: ['C#', 'E', 'F#', 'G#', 'B'],
    chordConnection: 'C#m7, C#m6'
  },
  {
    id: 'gs-pentatonic-minor',
    name: 'G# Pentatónica Menor',
    notes: ['G#', 'B', 'C#', 'D#', 'F#'],
    chordConnection: 'G#m7, G#m6'
  },
  {
    id: 'd-pentatonic-minor',
    name: 'D Pentatónica Menor',
    notes: ['D', 'F', 'G', 'A', 'C'],
    chordConnection: 'Dm7, Dm6'
  },
  {
    id: 'g-pentatonic-minor',
    name: 'G Pentatónica Menor',
    notes: ['G', 'Bb', 'C', 'D', 'F'],
    chordConnection: 'Gm7, Gm6'
  },
  {
    id: 'c-pentatonic-minor',
    name: 'C Pentatónica Menor',
    notes: ['C', 'Eb', 'F', 'G', 'Bb'],
    chordConnection: 'Cm7, Cm6'
  },
  {
    id: 'f-pentatonic-minor',
    name: 'F Pentatónica Menor',
    notes: ['F', 'Ab', 'Bb', 'C', 'Eb'],
    chordConnection: 'Fm7, Fm6'
  },
  {
    id: 'bb-pentatonic-minor',
    name: 'Bb Pentatónica Menor',
    notes: ['Bb', 'Db', 'Eb', 'F', 'Ab'],
    chordConnection: 'Bbm7, Bbm6'
  },
  {
    id: 'eb-pentatonic-minor',
    name: 'Eb Pentatónica Menor',
    notes: ['Eb', 'Gb', 'Ab', 'Bb', 'Db'],
    chordConnection: 'Ebm7, Ebm6'
  },

  // Pentatónicas blues
  {
    id: 'c-pentatonic-blues',
    name: 'C Pentatónica Blues',
    notes: ['C', 'Eb', 'F', 'Gb', 'G', 'Bb'],
    chordConnection: 'C7, blues en C'
  },
  {
    id: 'g-pentatonic-blues',
    name: 'G Pentatónica Blues',
    notes: ['G', 'Bb', 'C', 'Db', 'D', 'F'],
    chordConnection: 'G7, blues en G'
  },
  {
    id: 'f-pentatonic-blues',
    name: 'F Pentatónica Blues',
    notes: ['F', 'Ab', 'Bb', 'B', 'C', 'Eb'],
    chordConnection: 'F7, blues en F'
  },
  {
    id: 'bb-pentatonic-blues',
    name: 'Bb Pentatónica Blues',
    notes: ['Bb', 'Db', 'Eb', 'E', 'F', 'Ab'],
    chordConnection: 'Bb7, blues en Bb'
  },
  {
    id: 'e-pentatonic-blues',
    name: 'E Pentatónica Blues',
    notes: ['E', 'G', 'A', 'Bb', 'B', 'D'],
    chordConnection: 'E7, blues en E'
  },
  {
    id: 'a-pentatonic-blues',
    name: 'A Pentatónica Blues',
    notes: ['A', 'C', 'D', 'Eb', 'E', 'G'],
    chordConnection: 'A7, blues en A'
  }
];

// ESCALAS ÉTNICAS EXPANDIDAS
const ethnicScales: Scale[] = [
  // Escalas húngaras
  {
    id: 'c-hungarian-minor',
    name: 'C Húngara Menor',
    notes: ['C', 'D', 'Eb', 'F#', 'G', 'Ab', 'B'],
    chordConnection: 'Cm(maj7), música húngara'
  },
  {
    id: 'c-hungarian-major',
    name: 'C Húngara Mayor',
    notes: ['C', 'D#', 'E', 'F#', 'G', 'A', 'Bb'],
    chordConnection: 'Cmaj7, música húngara'
  },
  {
    id: 'd-hungarian-gypsy',
    name: 'D Húngara Gitana',
    notes: ['D', 'E', 'F', 'G#', 'A', 'Bb', 'C#'],
    chordConnection: 'Dm(maj7), música gitana'
  },

  // Escalas japonesas
  {
    id: 'c-japanese-hirajoshi',
    name: 'C Japonesa (Hirajoshi)',
    notes: ['C', 'Db', 'F', 'G', 'Ab'],
    chordConnection: 'Música japonesa tradicional'
  },
  {
    id: 'c-japanese-kumoi',
    name: 'C Japonesa (Kumoi)',
    notes: ['C', 'D', 'Eb', 'G', 'A'],
    chordConnection: 'Música japonesa tradicional'
  },
  {
    id: 'c-japanese-iwato',
    name: 'C Japonesa (Iwato)',
    notes: ['C', 'Db', 'F', 'Gb', 'Bb'],
    chordConnection: 'Música japonesa tradicional'
  },
  {
    id: 'c-japanese-in-sen',
    name: 'C Japonesa (In Sen)',
    notes: ['C', 'Db', 'F', 'G', 'Bb'],
    chordConnection: 'Música japonesa tradicional'
  },

  // Escalas árabes y del Medio Oriente
  {
    id: 'c-arabic-hijaz',
    name: 'C Árabe (Hijaz)',
    notes: ['C', 'Db', 'E', 'F', 'G', 'Ab', 'B'],
    chordConnection: 'Música árabe y del Medio Oriente'
  },
  {
    id: 'c-arabic-maqam-bayati',
    name: 'C Maqam Bayati',
    notes: ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'],
    chordConnection: 'Música árabe tradicional'
  },
  {
    id: 'c-arabic-maqam-kurd',
    name: 'C Maqam Kurd',
    notes: ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'Bb'],
    chordConnection: 'Música kurda y árabe'
  },
  {
    id: 'c-persian-dastgah',
    name: 'C Persa (Dastgah)',
    notes: ['C', 'Db', 'E', 'F', 'G', 'Ab', 'Bb'],
    chordConnection: 'Música persa tradicional'
  },

  // Escalas gitanas
  {
    id: 'c-gypsy-major',
    name: 'C Gitana Mayor',
    notes: ['C', 'Db', 'E', 'F', 'G', 'Ab', 'B'],
    chordConnection: 'Música gitana y flamenca'
  },
  {
    id: 'c-gypsy-minor',
    name: 'C Gitana Menor',
    notes: ['C', 'D', 'Eb', 'F#', 'G', 'Ab', 'Bb'],
    chordConnection: 'Música gitana y flamenca'
  },
  {
    id: 'e-flamenco-phrygian',
    name: 'E Flamenco (Frigio)',
    notes: ['E', 'F', 'G#', 'A', 'B', 'C', 'D'],
    chordConnection: 'Flamenco y música española'
  },

  // Escalas indias
  {
    id: 'c-indian-raga-bhairav',
    name: 'C Raga Bhairav',
    notes: ['C', 'Db', 'E', 'F', 'G', 'Ab', 'B'],
    chordConnection: 'Música clásica india'
  },
  {
    id: 'c-indian-raga-yaman',
    name: 'C Raga Yaman',
    notes: ['C', 'D', 'E', 'F#', 'G', 'A', 'B'],
    chordConnection: 'Música clásica india'
  },
  {
    id: 'c-indian-raga-kafi',
    name: 'C Raga Kafi',
    notes: ['C', 'D', 'Eb', 'F', 'G', 'A', 'Bb'],
    chordConnection: 'Música clásica india'
  }
];

// ESCALAS SINTÉTICAS Y MODERNAS
const syntheticScales: Scale[] = [
  // Escalas enigmáticas
  {
    id: 'c-enigmatic',
    name: 'C Enigmática',
    notes: ['C', 'Db', 'E', 'F#', 'G#', 'A#', 'B'],
    chordConnection: 'Música impresionista'
  },
  {
    id: 'c-enigmatic-minor',
    name: 'C Enigmática Menor',
    notes: ['C', 'Db', 'Eb', 'F#', 'G', 'A#', 'B'],
    chordConnection: 'Música impresionista moderna'
  },

  // Escalas napolitanas
  {
    id: 'c-neapolitan-major',
    name: 'C Napolitana Mayor',
    notes: ['C', 'Db', 'Eb', 'F', 'G', 'A', 'B'],
    chordConnection: 'Música clásica romántica'
  },
  {
    id: 'c-neapolitan-minor',
    name: 'C Napolitana Menor',
    notes: ['C', 'Db', 'Eb', 'F', 'G', 'Ab', 'B'],
    chordConnection: 'Cm(maj7), música clásica'
  },

  // Escalas Prometheus
  {
    id: 'c-prometheus',
    name: 'C Prometheus',
    notes: ['C', 'D', 'E', 'F#', 'A', 'Bb'],
    chordConnection: 'Música de Scriabin'
  },
  {
    id: 'c-prometheus-neapolitan',
    name: 'C Prometheus Napolitana',
    notes: ['C', 'Db', 'E', 'F#', 'A', 'Bb'],
    chordConnection: 'Música moderna del s.XX'
  },

  // Escalas sintéticas modernas
  {
    id: 'c-double-harmonic',
    name: 'C Doble Armónica',
    notes: ['C', 'Db', 'E', 'F', 'G', 'Ab', 'B'],
    chordConnection: 'Música bizantina y árabe'
  },
  {
    id: 'c-eight-tone-spanish',
    name: 'C Española de 8 Tonos',
    notes: ['C', 'Db', 'Eb', 'E', 'F', 'Gb', 'Ab', 'Bb'],
    chordConnection: 'Música española moderna'
  },
  {
    id: 'c-leading-whole-tone',
    name: 'C Tonos Enteros con Sensible',
    notes: ['C', 'D', 'E', 'F#', 'G#', 'Bb', 'B'],
    chordConnection: 'Jazz moderno y música impresionista'
  },
  {
    id: 'c-overtone',
    name: 'C Escala de Armónicos',
    notes: ['C', 'D', 'E', 'F#', 'G', 'A', 'Bb'],
    chordConnection: 'Basada en la serie armónica natural'
  },
  {
    id: 'c-six-tone-symmetrical',
    name: 'C Simétrica de 6 Tonos',
    notes: ['C', 'D', 'Eb', 'F#', 'G', 'A'],
    chordConnection: 'Música atonal y serial'
  },
  {
    id: 'c-tritone',
    name: 'C Tritono',
    notes: ['C', 'Db', 'E', 'F', 'F#', 'A', 'Bb'],
    chordConnection: 'Jazz moderno y música experimental'
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

  // Añadir todas las nuevas escalas
  ...minorScalesAndModes,
  ...pentatonicScales,
  ...ethnicScales,
  ...syntheticScales
];

// Actualizar categorías con las nuevas escalas
export const scaleCategories: ScaleCategory[] = [
  {
    id: 'modal',
    name: 'Modos de la Escala Mayor',
    description: 'Los 7 modos tradicionales derivados de la escala mayor',
    scales: scales.filter(s => ['c-major', 'd-dorian', 'e-phrygian', 'f-lydian', 'g-mixolydian', 'a-minor', 'b-locrian'].includes(s.id))
  },
  {
    id: 'minor-scales',
    name: 'Escalas Menores y sus Modos',
    description: 'Escalas menores: natural, armónica, melódica y todos sus modos',
    scales: scales.filter(s => 
      s.id.includes('harmonic-minor') || 
      s.id.includes('melodic-minor') ||
      s.id.includes('natural-minor') ||
      s.id.includes('locrian-nat') ||
      s.id.includes('ionian-sharp') ||
      s.id.includes('dorian-sharp') ||
      s.id.includes('phrygian-dominant') ||
      s.id.includes('lydian-sharp2') ||
      s.id.includes('super-locrian') ||
      s.id.includes('dorian-b2') ||
      s.id.includes('lydian-augmented') ||
      s.id.includes('lydian-dominant') ||
      s.id.includes('mixolydian-b6') ||
      s.id.includes('locrian-nat2')
    )
  },
  {
    id: 'pentatonic',
    name: 'Escalas Pentatónicas',
    description: 'Escalas de 5 notas: mayor, menor y blues en todas las tonalidades',
    scales: scales.filter(s => s.id.includes('pentatonic'))
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
    scales: scales.filter(s => 
      s.id.includes('hungarian') || 
      s.id.includes('japanese') || 
      s.id.includes('arabic') || 
      s.id.includes('gypsy') ||
      s.id.includes('flamenco') ||
      s.id.includes('indian') ||
      s.id.includes('persian')
    )
  },
  {
    id: 'synthetic',
    name: 'Escalas Sintéticas',
    description: 'Escalas artificiales y modernas: enigmática, napolitana, prometheus',
    scales: scales.filter(s => 
      s.id.includes('enigmatic') || 
      s.id.includes('neapolitan') || 
      s.id.includes('prometheus') ||
      s.id.includes('double-harmonic') ||
      s.id.includes('eight-tone') ||
      s.id.includes('leading-whole') ||
      s.id.includes('overtone') ||
      s.id.includes('six-tone') ||
      s.id.includes('tritone')
    )
  },
  {
    id: 'modern',
    name: 'Escalas Modernas',
    description: 'Escalas usadas en jazz moderno y música contemporánea',
    scales: scales.filter(s => ['c-chromatic', 'c-blues-major', 'c-blues-minor'].includes(s.id))
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
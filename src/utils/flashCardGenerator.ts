import { FlashCard } from '../types/music';
import { progressions, scales, keys, generateProgression, scaleCategories } from '../data/musicData';

// Función para generar opciones incorrectas para progresiones
function generateWrongProgressionOptions(correctAnswer: string, isChordProgression: boolean = true): string[] {
  const wrongOptions: string[] = [];
  
  if (isChordProgression) {
    // Para progresiones de acordes
    const allProgressions = progressions.map(p => p.chords.join(' - '));
    const availableWrong = allProgressions.filter(p => p !== correctAnswer);
    
    while (wrongOptions.length < 2 && availableWrong.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableWrong.length);
      const option = availableWrong[randomIndex];
      if (!wrongOptions.includes(option)) {
        wrongOptions.push(option);
      }
      availableWrong.splice(randomIndex, 1);
    }
  } else {
    // Para progresiones romanas
    const allRomanProgressions = progressions.map(p => `${p.romanNumerals.join('-')} en ${p.key}`);
    const availableWrong = allRomanProgressions.filter(p => p !== correctAnswer);
    
    while (wrongOptions.length < 2 && availableWrong.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableWrong.length);
      const option = availableWrong[randomIndex];
      if (!wrongOptions.includes(option)) {
        wrongOptions.push(option);
      }
      availableWrong.splice(randomIndex, 1);
    }
  }
  
  // Si no hay suficientes opciones, generar algunas genéricas
  while (wrongOptions.length < 2) {
    if (isChordProgression) {
      const genericOptions = [
        'Am7 - D7 - Gmaj7',
        'Em7 - A7 - Dmaj7',
        'Fm7 - Bb7 - Ebmaj7',
        'Bm7 - E7 - Amaj7',
        'Cm7 - F7 - Bbmaj7'
      ];
      const option = genericOptions[Math.floor(Math.random() * genericOptions.length)];
      if (!wrongOptions.includes(option) && option !== correctAnswer) {
        wrongOptions.push(option);
      }
    } else {
      const genericOptions = [
        'ii-V-I en G',
        'I-vi-IV-V en F',
        'vi-ii-V-I en D',
        'iii-VI-ii-V en A',
        'I-VI-ii-V en Bb'
      ];
      const option = genericOptions[Math.floor(Math.random() * genericOptions.length)];
      if (!wrongOptions.includes(option) && option !== correctAnswer) {
        wrongOptions.push(option);
      }
    }
  }
  
  return wrongOptions.slice(0, 2);
}

// Función para generar opciones incorrectas para escalas
function generateWrongScaleOptions(correctAnswer: string, questionType: 'scale-name' | 'chord-connection' | 'notes'): string[] {
  const wrongOptions: string[] = [];
  
  switch (questionType) {
    case 'scale-name':
      const allScaleNames = scales.map(s => s.name);
      const availableNames = allScaleNames.filter(name => name !== correctAnswer);
      
      while (wrongOptions.length < 2 && availableNames.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableNames.length);
        const option = availableNames[randomIndex];
        wrongOptions.push(option);
        availableNames.splice(randomIndex, 1);
      }
      break;
      
    case 'chord-connection':
      const allChordConnections = scales.map(s => s.chordConnection).filter(c => c && c !== correctAnswer);
      
      while (wrongOptions.length < 2 && allChordConnections.length > 0) {
        const randomIndex = Math.floor(Math.random() * allChordConnections.length);
        const option = allChordConnections[randomIndex];
        if (option && !wrongOptions.includes(option)) {
          wrongOptions.push(option);
        }
        allChordConnections.splice(randomIndex, 1);
      }
      break;
      
    case 'notes':
      const allNoteSequences = scales.map(s => s.notes.join(' - '));
      const availableSequences = allNoteSequences.filter(seq => seq !== correctAnswer);
      
      while (wrongOptions.length < 2 && availableSequences.length > 0) {
        const randomIndex = Math.floor(Math.random() * availableSequences.length);
        const option = availableSequences[randomIndex];
        wrongOptions.push(option);
        availableSequences.splice(randomIndex, 1);
      }
      break;
  }
  
  return wrongOptions.slice(0, 2);
}

// Función para mezclar opciones aleatoriamente
function shuffleOptions(correctAnswer: string, wrongOptions: string[]): string[] {
  const allOptions = [correctAnswer, ...wrongOptions];
  for (let i = allOptions.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [allOptions[i], allOptions[j]] = [allOptions[j], allOptions[i]];
  }
  return allOptions;
}

export function generateProgressionDirectCard(): FlashCard {
  const progression = progressions[Math.floor(Math.random() * progressions.length)];
  const wrongOptions = generateWrongProgressionOptions(progression.chords.join(' - '), true);
  const allOptions = shuffleOptions(progression.chords.join(' - '), wrongOptions);
  
  return {
    id: `direct-${Date.now()}`,
    type: 'progression-direct',
    question: `${progression.romanNumerals.join('-')} en ${progression.key}`,
    answer: progression.chords.join(' - '),
    options: allOptions,
    explanation: `En la tonalidad de ${progression.key}, los grados ${progression.romanNumerals.join('-')} corresponden a los acordes ${progression.chords.join(' - ')}.`,
    data: progression
  };
}

export function generateProgressionInverseCard(): FlashCard {
  const progression = progressions[Math.floor(Math.random() * progressions.length)];
  const correctAnswer = `${progression.romanNumerals.join('-')} en ${progression.key}`;
  const wrongOptions = generateWrongProgressionOptions(correctAnswer, false);
  const allOptions = shuffleOptions(correctAnswer, wrongOptions);
  
  return {
    id: `inverse-${Date.now()}`,
    type: 'progression-inverse',
    question: `¿Qué progresión y tonalidad representan estos acordes?\n${progression.chords.join(' - ')}`,
    answer: correctAnswer,
    options: allOptions,
    explanation: `Los acordes ${progression.chords.join(' - ')} forman una progresión ${progression.romanNumerals.join('-')} en la tonalidad de ${progression.key}.`,
    data: progression
  };
}

export function generateScaleModeCard(selectedScaleIds?: string[]): FlashCard {
  let availableScales = scales;
  
  if (selectedScaleIds && selectedScaleIds.length > 0) {
    availableScales = scales.filter(scale => selectedScaleIds.includes(scale.id));
  }
  
  if (availableScales.length === 0) {
    availableScales = scales; // Fallback si no hay escalas seleccionadas
  }
  
  const scale = availableScales[Math.floor(Math.random() * availableScales.length)];
  const questionType = Math.floor(Math.random() * 4); // 4 tipos diferentes de preguntas
  
  switch (questionType) {
    case 0: // Escala → Acorde
      const wrongChordOptions = generateWrongScaleOptions(scale.chordConnection || 'Contexto variado', 'chord-connection');
      const chordOptions = shuffleOptions(scale.chordConnection || 'Contexto variado', wrongChordOptions);
      
      return {
        id: `scale-chord-${Date.now()}`,
        type: 'scale-mode',
        question: `¿Sobre qué acorde se usa típicamente la escala ${scale.name}?`,
        answer: scale.chordConnection || 'Contexto variado',
        options: chordOptions,
        explanation: `La escala ${scale.name} se usa típicamente sobre ${scale.chordConnection}. Sus notas (${scale.notes.join(' - ')}) crean la sonoridad característica de este contexto armónico.`,
        data: scale
      };
    
    case 1: // Acorde → Escala
      const wrongScaleOptions = generateWrongScaleOptions(scale.name, 'scale-name');
      const scaleOptions = shuffleOptions(scale.name, wrongScaleOptions);
      
      return {
        id: `chord-scale-${Date.now()}`,
        type: 'scale-mode',
        question: `¿Qué escala se usa sobre ${scale.chordConnection}?`,
        answer: scale.name,
        options: scaleOptions,
        explanation: `Sobre ${scale.chordConnection} se usa la escala ${scale.name}. Esta escala contiene las notas: ${scale.notes.join(' - ')}.`,
        data: scale
      };
    
    case 2: // Notas de la escala
      const wrongNoteOptions = generateWrongScaleOptions(scale.notes.join(' - '), 'notes');
      const noteOptions = shuffleOptions(scale.notes.join(' - '), wrongNoteOptions);
      
      return {
        id: `scale-notes-${Date.now()}`,
        type: 'scale-mode',
        question: `¿Cuáles son las notas de la escala ${scale.name}?`,
        answer: scale.notes.join(' - '),
        options: noteOptions,
        explanation: `La escala ${scale.name} contiene las notas: ${scale.notes.join(' - ')}. Se usa típicamente sobre ${scale.chordConnection}.`,
        data: scale
      };
    
    case 3: // Identificar escala por notas
    default:
      const wrongIdentifyOptions = generateWrongScaleOptions(scale.name, 'scale-name');
      const identifyOptions = shuffleOptions(scale.name, wrongIdentifyOptions);
      
      return {
        id: `notes-scale-${Date.now()}`,
        type: 'scale-mode',
        question: `¿Qué escala contiene estas notas?\n${scale.notes.join(' - ')}`,
        answer: scale.name,
        options: identifyOptions,
        explanation: `Las notas ${scale.notes.join(' - ')} corresponden a la escala ${scale.name}. Esta escala se usa sobre ${scale.chordConnection}.`,
        data: scale
      };
  }
}

export function generateAdvancedProgressionCard(): FlashCard {
  const progression = progressions[Math.floor(Math.random() * progressions.length)];
  const questionTypes = [
    'direct', 'inverse', 'key-identification', 'function-analysis'
  ];
  const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
  
  switch (questionType) {
    case 'direct':
      const directWrongOptions = generateWrongProgressionOptions(progression.chords.join(' - '), true);
      const directOptions = shuffleOptions(progression.chords.join(' - '), directWrongOptions);
      
      return {
        id: `advanced-direct-${Date.now()}`,
        type: 'progression-direct',
        question: `${progression.romanNumerals.join(' - ')} en ${progression.key}`,
        answer: progression.chords.join(' - '),
        options: directOptions,
        explanation: `En la tonalidad de ${progression.key}, la progresión ${progression.romanNumerals.join(' - ')} corresponde a los acordes ${progression.chords.join(' - ')}.`,
        data: progression
      };
    
    case 'inverse':
      const inverseCorrectAnswer = `${progression.romanNumerals.join(' - ')} en ${progression.key}`;
      const inverseWrongOptions = generateWrongProgressionOptions(inverseCorrectAnswer, false);
      const inverseOptions = shuffleOptions(inverseCorrectAnswer, inverseWrongOptions);
      
      return {
        id: `advanced-inverse-${Date.now()}`,
        type: 'progression-inverse',
        question: `¿Qué progresión y tonalidad representan estos acordes?\n${progression.chords.join(' - ')}`,
        answer: inverseCorrectAnswer,
        options: inverseOptions,
        explanation: `Los acordes ${progression.chords.join(' - ')} forman la progresión ${progression.romanNumerals.join(' - ')} en la tonalidad de ${progression.key}.`,
        data: progression
      };
    
    case 'key-identification':
      const availableKeys = keys.filter(k => k !== progression.key);
      const wrongKeyOptions = [
        availableKeys[Math.floor(Math.random() * availableKeys.length)],
        availableKeys[Math.floor(Math.random() * availableKeys.length)]
      ].filter((key, index, arr) => arr.indexOf(key) === index).slice(0, 2);
      const keyOptions = shuffleOptions(progression.key, wrongKeyOptions);
      
      return {
        id: `key-id-${Date.now()}`,
        type: 'progression-inverse',
        question: `¿En qué tonalidad está esta progresión?\n${progression.chords.join(' - ')}`,
        answer: progression.key,
        options: keyOptions,
        explanation: `Esta progresión está en ${progression.key}. Los acordes ${progression.chords.join(' - ')} corresponden a los grados ${progression.romanNumerals.join(' - ')} en esta tonalidad.`,
        data: progression
      };
    
    case 'function-analysis':
    default:
      const firstChord = progression.chords[0];
      const firstRoman = progression.romanNumerals[0];
      const allRomanNumerals = ['Imaj7', 'iim7', 'iiim7', 'IVmaj7', 'V7', 'vim7', 'viim7b5', 'I7', 'ii7', 'iii7', 'IV7', 'vi7', 'vii7'];
      const wrongRomanOptions = allRomanNumerals.filter(r => r !== firstRoman).slice(0, 2);
      const romanOptions = shuffleOptions(firstRoman, wrongRomanOptions);
      
      return {
        id: `function-${Date.now()}`,
        type: 'progression-direct',
        question: `¿Qué función armónica tiene ${firstChord} en la tonalidad de ${progression.key}?`,
        answer: firstRoman,
        options: romanOptions,
        explanation: `En la tonalidad de ${progression.key}, el acorde ${firstChord} cumple la función de ${firstRoman}. Forma parte de la progresión ${progression.romanNumerals.join(' - ')}.`,
        data: progression
      };
  }
}

export function generateFlashCard(
  type: 'progression-direct' | 'progression-inverse' | 'scale-mode',
  selectedScaleIds?: string[]
): FlashCard {
  // Añadir variedad usando diferentes generadores
  const useAdvanced = Math.random() > 0.3; // 70% probabilidad de usar ejercicios avanzados
  
  switch (type) {
    case 'progression-direct':
      return useAdvanced ? generateAdvancedProgressionCard() : generateProgressionDirectCard();
    case 'progression-inverse':
      return useAdvanced ? generateAdvancedProgressionCard() : generateProgressionInverseCard();
    case 'scale-mode':
      return generateScaleModeCard(selectedScaleIds);
    default:
      return generateProgressionDirectCard();
  }
}
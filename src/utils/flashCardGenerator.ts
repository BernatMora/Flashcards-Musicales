import { FlashCard } from '../types/music';
import { progressions, scales, keys, generateProgression, scaleCategories } from '../data/musicData';

export function generateProgressionDirectCard(): FlashCard {
  const progression = progressions[Math.floor(Math.random() * progressions.length)];
  
  return {
    id: `direct-${Date.now()}`,
    type: 'progression-direct',
    question: `${progression.romanNumerals.join('-')} en ${progression.key}`,
    answer: progression.chords.join(' - '),
    explanation: `En la tonalidad de ${progression.key}, los grados ${progression.romanNumerals.join('-')} corresponden a los acordes ${progression.chords.join(' - ')}.`,
    data: progression
  };
}

export function generateProgressionInverseCard(): FlashCard {
  const progression = progressions[Math.floor(Math.random() * progressions.length)];
  
  return {
    id: `inverse-${Date.now()}`,
    type: 'progression-inverse',
    question: `¿Qué progresión y tonalidad representan estos acordes?\n${progression.chords.join(' - ')}`,
    answer: `${progression.romanNumerals.join('-')} en ${progression.key}`,
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
      return {
        id: `scale-chord-${Date.now()}`,
        type: 'scale-mode',
        question: `¿Sobre qué acorde se usa típicamente la escala ${scale.name}?`,
        answer: scale.chordConnection || 'Contexto variado',
        explanation: `La escala ${scale.name} se usa típicamente sobre ${scale.chordConnection}. Sus notas (${scale.notes.join(' - ')}) crean la sonoridad característica de este contexto armónico.`,
        data: scale
      };
    
    case 1: // Acorde → Escala
      return {
        id: `chord-scale-${Date.now()}`,
        type: 'scale-mode',
        question: `¿Qué escala se usa sobre ${scale.chordConnection}?`,
        answer: scale.name,
        explanation: `Sobre ${scale.chordConnection} se usa la escala ${scale.name}. Esta escala contiene las notas: ${scale.notes.join(' - ')}.`,
        data: scale
      };
    
    case 2: // Notas de la escala
      return {
        id: `scale-notes-${Date.now()}`,
        type: 'scale-mode',
        question: `¿Cuáles son las notas de la escala ${scale.name}?`,
        answer: scale.notes.join(' - '),
        explanation: `La escala ${scale.name} contiene las notas: ${scale.notes.join(' - ')}. Se usa típicamente sobre ${scale.chordConnection}.`,
        data: scale
      };
    
    case 3: // Identificar escala por notas
    default:
      return {
        id: `notes-scale-${Date.now()}`,
        type: 'scale-mode',
        question: `¿Qué escala contiene estas notas?\n${scale.notes.join(' - ')}`,
        answer: scale.name,
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
      return {
        id: `advanced-direct-${Date.now()}`,
        type: 'progression-direct',
        question: `${progression.romanNumerals.join(' - ')} en ${progression.key}`,
        answer: progression.chords.join(' - '),
        explanation: `En la tonalidad de ${progression.key}, la progresión ${progression.romanNumerals.join(' - ')} corresponde a los acordes ${progression.chords.join(' - ')}.`,
        data: progression
      };
    
    case 'inverse':
      return {
        id: `advanced-inverse-${Date.now()}`,
        type: 'progression-inverse',
        question: `¿Qué progresión y tonalidad representan estos acordes?\n${progression.chords.join(' - ')}`,
        answer: `${progression.romanNumerals.join(' - ')} en ${progression.key}`,
        explanation: `Los acordes ${progression.chords.join(' - ')} forman la progresión ${progression.romanNumerals.join(' - ')} en la tonalidad de ${progression.key}.`,
        data: progression
      };
    
    case 'key-identification':
      return {
        id: `key-id-${Date.now()}`,
        type: 'progression-inverse',
        question: `¿En qué tonalidad está esta progresión?\n${progression.chords.join(' - ')}`,
        answer: progression.key,
        explanation: `Esta progresión está en ${progression.key}. Los acordes ${progression.chords.join(' - ')} corresponden a los grados ${progression.romanNumerals.join(' - ')} en esta tonalidad.`,
        data: progression
      };
    
    case 'function-analysis':
    default:
      const firstChord = progression.chords[0];
      const firstRoman = progression.romanNumerals[0];
      return {
        id: `function-${Date.now()}`,
        type: 'progression-direct',
        question: `¿Qué función armónica tiene ${firstChord} en la tonalidad de ${progression.key}?`,
        answer: firstRoman,
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
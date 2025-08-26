import { FlashCard } from '../types/music';
import { questionGroups } from '../data/questionGroups';

// Esta función ya no se necesita con el nuevo sistema de grupos predefinidos
// Mantener solo para compatibilidad con código existente

export function generateFlashCard(
  type: 'progression-direct' | 'progression-inverse' | 'scale-mode',
  selectedScaleIds?: string[]
): FlashCard {
  // Buscar un grupo del tipo solicitado
  const availableGroups = questionGroups.filter(group => group.category === type);
  
  if (availableGroups.length === 0) {
    // Fallback - crear una pregunta básica
    return {
      id: `fallback-${Date.now()}`,
      type: type,
      question: 'Pregunta de ejemplo',
      answer: 'Respuesta de ejemplo',
      explanation: 'Esta es una pregunta de ejemplo.',
      data: {}
    };
  }
  
  // Tomar el primer grupo disponible y una pregunta aleatoria
  const group = availableGroups[0];
  const randomIndex = Math.floor(Math.random() * group.questions.length);
  
  return group.questions[randomIndex];
}

// Funciones específicas mantenidas para compatibilidad
export function generateProgressionDirectCard(): FlashCard {
  return generateFlashCard('progression-direct');
}

export function generateProgressionInverseCard(): FlashCard {
  return generateFlashCard('progression-inverse');
}

export function generateScaleModeCard(selectedScaleIds?: string[]): FlashCard {
  return generateFlashCard('scale-mode', selectedScaleIds);
}

export function generateAdvancedProgressionCard(): FlashCard {
  return generateFlashCard('progression-inverse');
}
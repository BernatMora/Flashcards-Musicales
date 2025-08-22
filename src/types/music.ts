export interface Chord {
  roman: string;
  name: string;
  key: string;
}

export interface Progression {
  id: string;
  key: string;
  romanNumerals: string[];
  chords: string[];
  name: string;
}

export interface Scale {
  id: string;
  name: string;
  notes: string[];
  mode?: string;
  chordConnection?: string;
}

export interface FlashCard {
  id: string;
  type: 'progression-direct' | 'progression-inverse' | 'scale-mode';
  question: string;
  answer: string;
  explanation: string;
  options?: string[];
  data: any;
  category?: string;
}

export interface QuizResult {
  correct: boolean;
  userAnswer: string;
  correctAnswer: string;
  explanation: string;
}

export interface ScaleCategory {
  id: string;
  name: string;
  description: string;
  scales: Scale[];
}

export interface QuizSettings {
  type: 'progression-direct' | 'progression-inverse' | 'scale-mode';
  selectedCategories?: string[];
  selectedScales?: string[];
}
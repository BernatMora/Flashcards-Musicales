import React, { useState } from 'react';
import QuizSelector from './components/QuizSelector';
import GroupSelector from './components/GroupSelector';
import FlashCard from './components/FlashCard';
import ScoreDisplay from './components/ScoreDisplay';
import QuizProgress from './components/QuizProgress';
import ScaleSelector from './components/ScaleSelector';
import { FlashCard as FlashCardType, QuizResult, QuestionGroup, QuizProgress as QuizProgressType } from './types/music';
import { questionGroups } from './data/questionGroups';

type AppState = 'menu' | 'group-selection' | 'scale-selection' | 'quiz';

export default function App() {
  const [state, setState] = useState<AppState>('menu');
  const [selectedType, setSelectedType] = useState<'progression-direct' | 'progression-inverse' | 'scale-mode'>('progression-direct');
  const [selectedGroup, setSelectedGroup] = useState<QuestionGroup | null>(null);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedScales, setSelectedScales] = useState<string[]>([]);
  const [currentCard, setCurrentCard] = useState<FlashCardType | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const [progress, setProgress] = useState<QuizProgressType | null>(null);

  const handleSelectQuiz = (type: 'progression-direct' | 'progression-inverse' | 'scale-mode', withSettings?: boolean) => {
    setSelectedType(type);
    if (type === 'scale-mode' && withSettings) {
      setState('scale-selection');
    } else {
      setState('group-selection');
    }
  };

  const handleSelectGroup = (group: QuestionGroup) => {
    setSelectedGroup(group);
    
    // Inicializar progreso
    const newProgress: QuizProgressType = {
      groupId: group.id,
      completedQuestions: [],
      currentIndex: 0,
      score: { correct: 0, total: 0 },
      streak: 0
    };
    setProgress(newProgress);
    
    // Obtener primera pregunta
    if (group.questions.length > 0) {
      setCurrentCard(group.questions[0]);
      setState('quiz');
    }
  };

  const handleStartScaleQuiz = () => {
    if (selectedScales.length === 0) return;
    
    // Para escalas, crear un grupo temporal
    const scaleGroup: QuestionGroup = {
      id: 'custom-scales',
      name: 'Escalas Seleccionadas',
      description: `${selectedScales.length} escalas seleccionadas`,
      category: 'scale-mode',
      questions: [], // Se generarán dinámicamente
      totalQuestions: 20
    };
    
    handleSelectGroup(scaleGroup);
  };

  const handleAnswer = (result: QuizResult) => {
    const newScore = {
      correct: score.correct + (result.correct ? 1 : 0),
      total: score.total + 1
    };
    setScore(newScore);
    
    const newStreak = result.correct ? streak + 1 : 0;
    setStreak(newStreak);
    
    if (progress && selectedGroup) {
      const newProgress = {
        ...progress,
        completedQuestions: [...progress.completedQuestions, currentCard?.id || ''],
        score: newScore,
        streak: newStreak
      };
      setProgress(newProgress);
    }
  };

  const handleNext = () => {
    if (!selectedGroup || !progress) return;
    
    const nextIndex = progress.currentIndex + 1;
    
    if (nextIndex < selectedGroup.questions.length) {
      setCurrentCard(selectedGroup.questions[nextIndex]);
      setProgress({
        ...progress,
        currentIndex: nextIndex
      });
    } else {
      // Quiz completado
      setState('menu');
      resetQuiz();
    }
  };

  const resetQuiz = () => {
    setCurrentCard(null);
    setScore({ correct: 0, total: 0 });
    setStreak(0);
    setProgress(null);
    setSelectedGroup(null);
    setSelectedCategories([]);
    setSelectedScales([]);
  };

  const handleBack = () => {
    if (state === 'group-selection' || state === 'scale-selection') {
      setState('menu');
    } else if (state === 'quiz') {
      setState('group-selection');
      resetQuiz();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="container mx-auto px-4 py-8">
        {state === 'menu' && (
          <QuizSelector onSelectQuiz={handleSelectQuiz} />
        )}
        
        {state === 'group-selection' && (
          <GroupSelector
            selectedType={selectedType}
            onSelectGroup={handleSelectGroup}
            onBack={handleBack}
          />
        )}
        
        {state === 'scale-selection' && (
          <ScaleSelector
            selectedCategories={selectedCategories}
            selectedScales={selectedScales}
            onCategoriesChange={setSelectedCategories}
            onScalesChange={setSelectedScales}
            onStartQuiz={handleStartScaleQuiz}
          />
        )}
        
        {state === 'quiz' && currentCard && selectedGroup && progress && (
          <div className="space-y-6">
            <QuizProgress progress={progress} group={selectedGroup} />
            <FlashCard
              card={currentCard}
              onAnswer={handleAnswer}
              onNext={handleNext}
            />
          </div>
        )}
      </div>
    </div>
  );
}
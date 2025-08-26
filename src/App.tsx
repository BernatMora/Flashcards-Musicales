import React, { useState } from 'react';
import QuizSelector from './components/QuizSelector';
import GroupSelector from './components/GroupSelector';
import FlashCard from './components/FlashCard';
import QuizProgress from './components/QuizProgress';
import ScoreDisplay from './components/ScoreDisplay';
import { FlashCard as FlashCardType, QuizResult, QuestionGroup, QuizProgress as QuizProgressType } from './types/music';
import { questionGroups } from './data/questionGroups';

type AppState = 'menu' | 'group-selection' | 'quiz';

export default function App() {
  const [currentState, setCurrentState] = useState<AppState>('menu');
  const [selectedType, setSelectedType] = useState<'progression-direct' | 'progression-inverse' | 'scale-mode' | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<QuestionGroup | null>(null);
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const [progress, setProgress] = useState<QuizProgressType | null>(null);

  const handleSelectQuizType = (type: 'progression-direct' | 'progression-inverse' | 'scale-mode') => {
    setSelectedType(type);
    setCurrentState('group-selection');
  };

  const handleSelectGroup = (group: QuestionGroup) => {
    setSelectedGroup(group);
    setCurrentCardIndex(0);
    setScore({ correct: 0, total: 0 });
    setStreak(0);
    setProgress({
      groupId: group.id,
      completedQuestions: [],
      currentIndex: 0,
      score: { correct: 0, total: 0 },
      streak: 0
    });
    setCurrentState('quiz');
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
      const currentQuestion = selectedGroup.questions[currentCardIndex];
      const updatedProgress: QuizProgressType = {
        ...progress,
        completedQuestions: [...progress.completedQuestions, currentQuestion.id],
        score: newScore,
        streak: newStreak
      };
      setProgress(updatedProgress);
    }
  };

  const handleNext = () => {
    if (selectedGroup && currentCardIndex < selectedGroup.questions.length - 1) {
      const newIndex = currentCardIndex + 1;
      setCurrentCardIndex(newIndex);
      if (progress) {
        setProgress({
          ...progress,
          currentIndex: newIndex
        });
      }
    } else {
      // Quiz completado
      setCurrentState('group-selection');
    }
  };

  const handleBack = () => {
    setCurrentState('menu');
    setSelectedType(null);
    setSelectedGroup(null);
    setCurrentCardIndex(0);
    setScore({ correct: 0, total: 0 });
    setStreak(0);
    setProgress(null);
  };

  const getCurrentCard = (): FlashCardType | null => {
    if (!selectedGroup || currentCardIndex >= selectedGroup.questions.length) {
      return null;
    }
    return selectedGroup.questions[currentCardIndex];
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="container mx-auto py-8">
        {currentState === 'menu' && (
          <QuizSelector onSelectQuiz={handleSelectQuizType} />
        )}

        {currentState === 'group-selection' && selectedType && (
          <GroupSelector
            selectedType={selectedType}
            onSelectGroup={handleSelectGroup}
            onBack={handleBack}
          />
        )}

        {currentState === 'quiz' && selectedGroup && progress && (
          <div>
            <QuizProgress progress={progress} group={selectedGroup} />
            <ScoreDisplay correct={score.correct} total={score.total} streak={streak} />
            {getCurrentCard() && (
              <FlashCard
                card={getCurrentCard()!}
                onAnswer={handleAnswer}
                onNext={handleNext}
                onBack={handleBack}
              />
            )}
          </div>
        )}
      </div>
    </div>
  );
}
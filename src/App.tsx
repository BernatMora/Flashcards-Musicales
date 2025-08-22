import React, { useState, useEffect } from 'react';
import FlashCard from './components/FlashCard';
import QuizSelector from './components/QuizSelector';
import ScaleSelector from './components/ScaleSelector';
import ScoreDisplay from './components/ScoreDisplay';
import { FlashCard as FlashCardType, QuizResult, QuizSettings } from './types/music';
import { generateFlashCard } from './utils/flashCardGenerator';
import { Home, RotateCcw } from 'lucide-react';

function App() {
  const [currentQuizSettings, setCurrentQuizSettings] = useState<QuizSettings | null>(null);
  const [currentCard, setCurrentCard] = useState<FlashCardType | null>(null);
  const [score, setScore] = useState({ correct: 0, total: 0 });
  const [streak, setStreak] = useState(0);
  const [showScaleSelector, setShowScaleSelector] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedScales, setSelectedScales] = useState<string[]>([]);

  const startQuiz = (type: 'progression-direct' | 'progression-inverse' | 'scale-mode', withSettings = false) => {
    if (type === 'scale-mode' && withSettings) {
      setShowScaleSelector(true);
      setCurrentQuizSettings({ type });
      return;
    }
    
    const settings: QuizSettings = { type };
    setCurrentQuizSettings(settings);
    setCurrentCard(generateFlashCard(type));
    setScore({ correct: 0, total: 0 });
    setStreak(0);
    setShowScaleSelector(false);
  };

  const startScaleQuiz = () => {
    if (currentQuizSettings && selectedScales.length > 0) {
      const settings: QuizSettings = {
        ...currentQuizSettings,
        selectedScales
      };
      setCurrentQuizSettings(settings);
      setCurrentCard(generateFlashCard(currentQuizSettings.type, selectedScales));
      setScore({ correct: 0, total: 0 });
      setStreak(0);
      setShowScaleSelector(false);
    }
  };

  const handleAnswer = (result: QuizResult) => {
    setScore(prev => ({
      correct: prev.correct + (result.correct ? 1 : 0),
      total: prev.total + 1
    }));

    setStreak(prev => result.correct ? prev + 1 : 0);
  };

  const handleNext = () => {
    if (currentQuizSettings) {
      setCurrentCard(generateFlashCard(
        currentQuizSettings.type, 
        currentQuizSettings.selectedScales
      ));
    }
  };

  const resetQuiz = () => {
    setCurrentQuizSettings(null);
    setCurrentCard(null);
    setScore({ correct: 0, total: 0 });
    setStreak(0);
    setShowScaleSelector(false);
    setSelectedCategories([]);
    setSelectedScales([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {!currentQuizSettings && !showScaleSelector ? (
          <QuizSelector onSelectQuiz={startQuiz} />
        ) : showScaleSelector ? (
          <>
            <div className="flex justify-start mb-6">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Home className="w-5 h-5" />
                Volver al menú
              </button>
            </div>
            <ScaleSelector
              selectedCategories={selectedCategories}
              selectedScales={selectedScales}
              onCategoriesChange={setSelectedCategories}
              onScalesChange={setSelectedScales}
              onStartQuiz={startScaleQuiz}
            />
          </>
        ) : (
          <>
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <Home className="w-5 h-5" />
                Volver al menú
              </button>
              
              <button
                onClick={() => {
                  setScore({ correct: 0, total: 0 });
                  setStreak(0);
                }}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                <RotateCcw className="w-5 h-5" />
                Reiniciar
              </button>
            </div>

            <ScoreDisplay 
              correct={score.correct} 
              total={score.total} 
              streak={streak} 
            />

            {currentCard && (
              <FlashCard
                card={currentCard}
                onAnswer={handleAnswer}
                onNext={handleNext}
              />
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default App;
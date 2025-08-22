import React, { useState, useEffect } from 'react';
import FlashCard from './components/FlashCard';
import QuizSelector from './components/QuizSelector';
import GroupSelector from './components/GroupSelector';
import QuizProgress from './components/QuizProgress';
import ScaleSelector from './components/ScaleSelector';
import { FlashCard as FlashCardType, QuizResult, QuizSettings, QuestionGroup, QuizProgress as QuizProgressType } from './types/music';
import { Home, RotateCcw } from 'lucide-react';

function App() {
  const [currentQuizSettings, setCurrentQuizSettings] = useState<QuizSettings | null>(null);
  const [selectedGroup, setSelectedGroup] = useState<QuestionGroup | null>(null);
  const [quizProgress, setQuizProgress] = useState<QuizProgressType | null>(null);
  const [currentCard, setCurrentCard] = useState<FlashCardType | null>(null);
  const [showGroupSelector, setShowGroupSelector] = useState(false);
  const [showScaleSelector, setShowScaleSelector] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedScales, setSelectedScales] = useState<string[]>([]);

  const startQuiz = (type: 'progression-direct' | 'progression-inverse' | 'scale-mode', withSettings = false) => {
    if (type === 'scale-mode' && withSettings) {
      setShowScaleSelector(true);
      setCurrentQuizSettings({ type });
      return;
    }
    
    // Para progresiones, mostrar selector de grupos
    if (type === 'progression-direct' || type === 'progression-inverse') {
      setCurrentQuizSettings({ type });
      setShowGroupSelector(true);
      return;
    }
    
    // Para escalas sin configuración, mostrar selector de grupos
    setCurrentQuizSettings({ type });
    setShowGroupSelector(true);
  };

  const selectGroup = (group: QuestionGroup) => {
    setSelectedGroup(group);
    setShowGroupSelector(false);
    
    // Inicializar progreso del quiz
    const progress: QuizProgressType = {
      groupId: group.id,
      completedQuestions: [],
      currentIndex: 0,
      score: { correct: 0, total: 0 },
      streak: 0
    };
    
    setQuizProgress(progress);
    setCurrentCard(group.questions[0]);
  };

  const startScaleQuiz = () => {
    if (currentQuizSettings && selectedScales.length > 0) {
      const settings: QuizSettings = {
        ...currentQuizSettings,
        selectedScales
      };
      setCurrentQuizSettings(settings);
      // Para escalas, mantener el sistema anterior por ahora
      setShowScaleSelector(false);
    }
  };

  const handleAnswer = (result: QuizResult) => {
    if (!quizProgress || !selectedGroup) return;
    
    const newProgress = {
      ...quizProgress,
      completedQuestions: [...quizProgress.completedQuestions, currentCard!.id],
      score: {
        correct: quizProgress.score.correct + (result.correct ? 1 : 0),
        total: quizProgress.score.total + 1
      },
      streak: result.correct ? quizProgress.streak + 1 : 0
    };
    
    setQuizProgress(newProgress);
  };

  const handleNext = () => {
    if (!quizProgress || !selectedGroup) return;
    
    // Encontrar la siguiente pregunta no completada
    const nextIndex = selectedGroup.questions.findIndex(
      (q, index) => index > quizProgress.currentIndex && !quizProgress.completedQuestions.includes(q.id)
    );
    
    if (nextIndex !== -1) {
      const newProgress = {
        ...quizProgress,
        currentIndex: nextIndex
      };
      setQuizProgress(newProgress);
      setCurrentCard(selectedGroup.questions[nextIndex]);
    } else {
      // Si no hay más preguntas, buscar cualquier pregunta no completada
      const uncompletedIndex = selectedGroup.questions.findIndex(
        q => !quizProgress.completedQuestions.includes(q.id)
      );
      
      if (uncompletedIndex !== -1) {
        const newProgress = {
          ...quizProgress,
          currentIndex: uncompletedIndex
        };
        setQuizProgress(newProgress);
        setCurrentCard(selectedGroup.questions[uncompletedIndex]);
      }
    }
  };

  const resetQuiz = () => {
    setCurrentQuizSettings(null);
    setSelectedGroup(null);
    setQuizProgress(null);
    setCurrentCard(null);
    setShowGroupSelector(false);
    setShowScaleSelector(false);
    setSelectedCategories([]);
    setSelectedScales([]);
  };

  const resetCurrentQuiz = () => {
    if (selectedGroup) {
      const progress: QuizProgressType = {
        groupId: selectedGroup.id,
        completedQuestions: [],
        currentIndex: 0,
        score: { correct: 0, total: 0 },
        streak: 0
      };
      setQuizProgress(progress);
      setCurrentCard(selectedGroup.questions[0]);
    }
  };

  const backToGroupSelector = () => {
    setSelectedGroup(null);
    setQuizProgress(null);
    setCurrentCard(null);
    setShowGroupSelector(true);
  };

  const backToMainMenu = () => {
    setCurrentQuizSettings(null);
    setSelectedGroup(null);
    setQuizProgress(null);
    setCurrentCard(null);
    setShowGroupSelector(false);
    setShowScaleSelector(false);
    setSelectedCategories([]);
    setSelectedScales([]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50">
      <div className="container mx-auto px-4 py-8">
        {!currentQuizSettings && !showScaleSelector && !showGroupSelector ? (
          <QuizSelector onSelectQuiz={startQuiz} />
        ) : showGroupSelector && currentQuizSettings ? (
          <GroupSelector
            selectedType={currentQuizSettings.type}
            onSelectGroup={selectGroup}
            onBack={backToMainMenu}
          />
        ) : showScaleSelector ? (
          <>
            <div className="flex justify-start mb-6">
              <button
                onClick={backToMainMenu}
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
        ) : selectedGroup && quizProgress ? (
          <>
            <div className="flex justify-between items-center mb-6">
              <button
                onClick={backToGroupSelector}
                className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
              >
                ← Volver a grupos
              </button>
              
              <div className="flex gap-3">
                <button
                  onClick={backToMainMenu}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <Home className="w-5 h-5" />
                  Menú principal
                </button>
                
                <button
                  onClick={resetCurrentQuiz}
                  className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <RotateCcw className="w-5 h-5" />
                  Reiniciar grupo
                </button>
              </div>
            </div>

            <QuizProgress progress={quizProgress} group={selectedGroup} />

            {currentCard && (
              <FlashCard
                card={currentCard}
                onAnswer={handleAnswer}
                onNext={handleNext}
              />
            )}
          </>
        ) : (
          <div className="text-center">
            <p>Cargando...</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
import React, { useState } from 'react';
import { FlashCard as FlashCardType, QuizResult } from '../types/music';
import { CheckCircle, XCircle, RotateCcw, ArrowRight } from 'lucide-react';

interface FlashCardProps {
  card: FlashCardType;
  onAnswer: (result: QuizResult) => void;
  onNext: () => void;
}

export default function FlashCard({ card, onAnswer, onNext }: FlashCardProps) {
  const [userAnswer, setUserAnswer] = useState('');
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<QuizResult | null>(null);

  const handleSubmit = (answer: string) => {
    const correct = answer.toLowerCase().trim() === card.answer.toLowerCase().trim();
    const quizResult: QuizResult = {
      correct,
      userAnswer: answer,
      correctAnswer: card.answer,
      explanation: card.explanation
    };
    
    setResult(quizResult);
    setShowResult(true);
    onAnswer(quizResult);
  };

  const handleNext = () => {
    setUserAnswer('');
    setShowResult(false);
    setResult(null);
    onNext();
  };

  const handleInputSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (userAnswer.trim()) {
      handleSubmit(userAnswer);
    }
  };

  const handleOptionClick = (option: string) => {
    handleSubmit(option);
  };

  if (showResult && result) {
    return (
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
        <div className="text-center mb-6">
          {result.correct ? (
            <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
          ) : (
            <XCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
          )}
          <h2 className={`text-2xl font-bold ${result.correct ? 'text-green-700' : 'text-red-700'}`}>
            {result.correct ? '¡Correcto!' : 'Incorrecto'}
          </h2>
        </div>

        <div className="space-y-4 mb-6">
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="font-medium text-gray-700">Pregunta:</p>
            <p className="text-lg">{card.question}</p>
          </div>

          {!result.correct && (
            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
              <p className="font-medium text-red-700">Tu respuesta:</p>
              <p className="text-lg text-red-600">{result.userAnswer}</p>
            </div>
          )}

          <div className="bg-green-50 p-4 rounded-lg border border-green-200">
            <p className="font-medium text-green-700">Respuesta correcta:</p>
            <p className="text-lg text-green-600">{result.correctAnswer}</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <p className="font-medium text-blue-700">Explicación:</p>
            <p className="text-gray-700">{result.explanation}</p>
          </div>
        </div>

        <button
          onClick={handleNext}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
        >
          Siguiente
          <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 max-w-2xl mx-auto">
      <div className="mb-6">
        <div className="text-sm text-blue-600 font-medium mb-2">
          {card.type === 'progression-direct' && 'Números Romanos → Acordes'}
          {card.type === 'progression-inverse' && 'Acordes → Progresión'}
          {card.type === 'scale-mode' && 'Escala → Acorde'}
        </div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{card.question}</h2>
      </div>

      {card.options ? (
        <div className="space-y-3">
          {card.options.map((option, index) => (
            <button
              key={index}
              onClick={() => handleOptionClick(option)}
              className="w-full p-4 text-left bg-gray-50 hover:bg-blue-50 border border-gray-200 hover:border-blue-300 rounded-lg transition-colors"
            >
              {option}
            </button>
          ))}
        </div>
      ) : (
        <form onSubmit={handleInputSubmit} className="space-y-4">
          <input
            type="text"
            value={userAnswer}
            onChange={(e) => setUserAnswer(e.target.value)}
            placeholder="Escribe tu respuesta..."
            className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-lg"
            autoFocus
          />
          <button
            type="submit"
            disabled={!userAnswer.trim()}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 text-white font-semibold py-3 px-6 rounded-lg transition-colors flex items-center justify-center gap-2"
          >
            Responder
            <ArrowRight className="w-5 h-5" />
          </button>
        </form>
      )}
    </div>
  );
}
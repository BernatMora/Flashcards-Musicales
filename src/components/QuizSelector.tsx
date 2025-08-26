import React from 'react';
import { Music, ArrowRightLeft, Scale } from 'lucide-react';

interface QuizSelectorProps {
  onSelectQuiz: (type: 'progression-direct' | 'progression-inverse' | 'scale-mode') => void;
}

export default function QuizSelector({ onSelectQuiz }: QuizSelectorProps) {
  const quizTypes = [
    {
      type: 'progression-direct' as const,
      title: 'Números Romanos → Acordes',
      description: 'Se muestra una progresión en números romanos y debes responder con los acordes reales',
      icon: Music,
      color: 'from-blue-500 to-blue-600',
      example: 'ii-V-I en C → Dm7 - G7 - Cmaj7'
    },
    {
      type: 'progression-inverse' as const,
      title: 'Acordes → Progresión',
      description: 'Se muestran acordes y debes identificar la progresión y la tonalidad',
      icon: ArrowRightLeft,
      color: 'from-green-500 to-green-600',
      example: 'Cm7 - F7 - Bbmaj7 → ii-V-I en Bb'
    },
    {
      type: 'scale-mode' as const,
      title: 'Escalas y Modos',
      description: 'Relaciona escalas con acordes y modos musicales',
      icon: Scale,
      color: 'from-purple-500 to-purple-600',
      example: 'Mixolidio → G7'
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Flashcards Musicales</h1>
        <p className="text-xl text-gray-600">Elige el tipo de práctica que quieres realizar</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {quizTypes.map((quiz) => {
          const Icon = quiz.icon;
          return (
            <button
              key={quiz.type}
              onClick={() => onSelectQuiz(quiz.type)}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
            >
              <div className={`bg-gradient-to-r ${quiz.color} p-6`}>
                <Icon className="w-12 h-12 text-white mx-auto mb-2" />
                <h3 className="text-xl font-bold text-white text-center">{quiz.title}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">{quiz.description}</p>
                <div className="bg-gray-50 p-3 rounded-lg">
                  <p className="text-sm text-gray-500 font-medium">Ejemplo:</p>
                  <p className="text-sm text-gray-700">{quiz.example}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}
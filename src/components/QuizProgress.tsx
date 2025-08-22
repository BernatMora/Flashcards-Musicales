import React from 'react';
import { QuizProgress as QuizProgressType, QuestionGroup } from '../types/music';
import { CheckCircle, Circle, Trophy, Target, TrendingUp, BookOpen } from 'lucide-react';

interface QuizProgressProps {
  progress: QuizProgressType;
  group: QuestionGroup;
}

export default function QuizProgress({ progress, group }: QuizProgressProps) {
  const completedCount = progress.completedQuestions.length;
  const totalCount = group.totalQuestions;
  const progressPercentage = Math.round((completedCount / totalCount) * 100);
  const accuracy = progress.score.total > 0 ? Math.round((progress.score.correct / progress.score.total) * 100) : 0;

  const getAccuracyColor = () => {
    if (accuracy >= 80) return 'text-green-600';
    if (accuracy >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <BookOpen className="w-6 h-6 text-blue-600" />
          <div>
            <h2 className="text-xl font-bold text-gray-800">{group.name}</h2>
            <p className="text-gray-600">{group.description}</p>
          </div>
        </div>
        
        <div className="text-right">
          <div className="text-2xl font-bold text-blue-600">{progressPercentage}%</div>
          <div className="text-sm text-gray-500">Completado</div>
        </div>
      </div>

      {/* Barra de progreso */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-gray-700">
            Pregunta {Math.min(completedCount + 1, totalCount)} de {totalCount}
          </span>
          <span className="text-sm text-gray-500">
            {completedCount} completadas
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-3">
          <div 
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Estadísticas */}
      <div className="grid grid-cols-3 gap-4">
        <div className="flex items-center gap-2">
          <Target className="w-5 h-5 text-blue-600" />
          <div>
            <p className="text-sm text-gray-600">Precisión</p>
            <p className={`text-lg font-bold ${getAccuracyColor()}`}>
              {accuracy}%
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-yellow-600" />
          <div>
            <p className="text-sm text-gray-600">Correctas</p>
            <p className="text-lg font-bold text-gray-800">
              {progress.score.correct}/{progress.score.total}
            </p>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-green-600" />
          <div>
            <p className="text-sm text-gray-600">Racha</p>
            <p className="text-lg font-bold text-green-600">
              {progress.streak}
            </p>
          </div>
        </div>
      </div>

      {/* Indicadores de preguntas */}
      <div className="mt-6">
        <p className="text-sm font-medium text-gray-700 mb-3">Progreso de preguntas:</p>
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: totalCount }, (_, index) => {
            const isCompleted = progress.completedQuestions.includes(group.questions[index]?.id || `question-${index}`);
            const isCurrent = index === progress.currentIndex;
            
            return (
              <div
                key={index}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-all ${
                  isCompleted
                    ? 'bg-green-100 text-green-700 border-2 border-green-300'
                    : isCurrent
                    ? 'bg-blue-100 text-blue-700 border-2 border-blue-300'
                    : 'bg-gray-100 text-gray-500 border-2 border-gray-200'
                }`}
              >
                {isCompleted ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  <span>{index + 1}</span>
                )}
              </div>
            );
          })}
        </div>
      </div>

      {completedCount === totalCount && (
        <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
          <div className="flex items-center gap-2">
            <Trophy className="w-6 h-6 text-green-600" />
            <div>
              <h3 className="font-bold text-green-800">¡Grupo completado!</h3>
              <p className="text-green-700">
                Has terminado todas las preguntas de este grupo con {accuracy}% de precisión.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
import React from 'react';
import { Trophy, Target, TrendingUp } from 'lucide-react';

interface ScoreDisplayProps {
  correct: number;
  total: number;
  streak: number;
}

export default function ScoreDisplay({ correct, total, streak }: ScoreDisplayProps) {
  const percentage = total > 0 ? Math.round((correct / total) * 100) : 0;

  const getScoreColor = () => {
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-4 mb-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <Target className="w-5 h-5 text-blue-600" />
            <div>
              <p className="text-sm text-gray-600">Precisión</p>
              <p className={`text-lg font-bold ${getScoreColor()}`}>
                {percentage}%
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <Trophy className="w-5 h-5 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-600">Respondidas</p>
              <p className="text-lg font-bold text-gray-800">
                {correct}/{total}
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-2">
            <TrendingUp className="w-5 h-5 text-green-600" />
            <div>
              <p className="text-sm text-gray-600">Racha</p>
              <p className="text-lg font-bold text-green-600">
                {streak}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
import React from 'react';
import { QuestionGroup } from '../types/music';
import { questionGroups } from '../data/questionGroups';
import { ArrowLeft, BookOpen, Users, Music } from 'lucide-react';

interface GroupSelectorProps {
  selectedType: 'progression-direct' | 'progression-inverse' | 'scale-mode';
  onSelectGroup: (group: QuestionGroup) => void;
  onBack: () => void;
}

export default function GroupSelector({ selectedType, onSelectGroup, onBack }: GroupSelectorProps) {
  const filteredGroups = questionGroups.filter(group => group.category === selectedType);

  const getCategoryTitle = () => {
    switch (selectedType) {
      case 'progression-direct':
        return 'Números Romanos → Acordes';
      case 'progression-inverse':
        return 'Acordes → Análisis';
      case 'scale-mode':
        return 'Escalas y Modos';
      default:
        return 'Seleccionar Grupo';
    }
  };

  const getCategoryIcon = () => {
    switch (selectedType) {
      case 'progression-direct':
        return <Music className="w-6 h-6" />;
      case 'progression-inverse':
        return <Users className="w-6 h-6" />;
      case 'scale-mode':
        return <BookOpen className="w-6 h-6" />;
      default:
        return <BookOpen className="w-6 h-6" />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-indigo-600 hover:text-indigo-800 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            Volver
          </button>
        </div>

        {/* Title */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            {getCategoryIcon()}
            <h1 className="text-3xl font-bold text-gray-800">
              {getCategoryTitle()}
            </h1>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selecciona un grupo de preguntas para comenzar tu práctica
          </p>
        </div>

        {/* Groups Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGroups.map((group) => (
            <div
              key={group.id}
              onClick={() => onSelectGroup(group)}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1 border border-gray-100"
            >
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <h3 className="text-xl font-semibold text-gray-800 leading-tight">
                    {group.name}
                  </h3>
                  <span className="bg-indigo-100 text-indigo-800 text-sm font-medium px-3 py-1 rounded-full">
                    {group.totalQuestions} preguntas
                  </span>
                </div>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {group.description}
                </p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <BookOpen className="w-4 h-4" />
                    <span>Nivel: Intermedio</span>
                  </div>
                  
                  <button className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 transition-colors text-sm font-medium">
                    Comenzar
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredGroups.length === 0 && (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-600 mb-2">
              No hay grupos disponibles
            </h3>
            <p className="text-gray-500">
              Los grupos para esta categoría están en desarrollo
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
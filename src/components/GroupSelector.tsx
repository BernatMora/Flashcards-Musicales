import React from 'react';
import { QuestionGroup } from '../types/music';
import { questionGroups } from '../data/questionGroups';
import { Music, ArrowRightLeft, Scale, ChevronRight, BookOpen } from 'lucide-react';

interface GroupSelectorProps {
  selectedType: 'progression-direct' | 'progression-inverse' | 'scale-mode';
  onSelectGroup: (group: QuestionGroup) => void;
  onBack: () => void;
}

export default function GroupSelector({ selectedType, onSelectGroup, onBack }: GroupSelectorProps) {
  const filteredGroups = questionGroups.filter(group => group.category === selectedType);
  
  const getTypeInfo = () => {
    switch (selectedType) {
      case 'progression-direct':
        return {
          title: 'Números Romanos → Acordes',
          description: 'Convierte análisis armónico en acordes reales',
          icon: Music,
          color: 'from-blue-500 to-blue-600'
        };
      case 'progression-inverse':
        return {
          title: 'Acordes → Análisis',
          description: 'Identifica progresiones y centros tonales',
          icon: ArrowRightLeft,
          color: 'from-green-500 to-green-600'
        };
      case 'scale-mode':
        return {
          title: 'Escalas y Modos',
          description: 'Relaciona escalas con contextos armónicos',
          icon: Scale,
          color: 'from-purple-500 to-purple-600'
        };
    }
  };

  const typeInfo = getTypeInfo();
  const TypeIcon = typeInfo.icon;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="flex items-center gap-4 mb-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-4 py-2 bg-white text-gray-700 rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
          ← Volver
        </button>
        
        <div className={`bg-gradient-to-r ${typeInfo.color} p-4 rounded-xl flex items-center gap-3`}>
          <TypeIcon className="w-8 h-8 text-white" />
          <div>
            <h1 className="text-2xl font-bold text-white">{typeInfo.title}</h1>
            <p className="text-blue-100">{typeInfo.description}</p>
          </div>
        </div>
      </div>

      <div className="grid gap-4">
        {filteredGroups.map((group) => (
          <button
            key={group.id}
            onClick={() => onSelectGroup(group)}
            className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-left group"
          >
            <div className="flex items-center justify-between">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="w-6 h-6 text-gray-600" />
                  <h3 className="text-xl font-bold text-gray-800">{group.name}</h3>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                    {group.totalQuestions} preguntas
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{group.description}</p>
                
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <span>📚 {group.totalQuestions} ejercicios</span>
                  <span>🎯 Opción múltiple</span>
                  <span>📊 Progreso visible</span>
                </div>
              </div>
              
              <ChevronRight className="w-6 h-6 text-gray-400 group-hover:text-gray-600 transition-colors" />
            </div>
          </button>
        ))}
      </div>

      <div className="mt-8 bg-blue-50 border border-blue-200 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-blue-800 mb-2">💡 Cómo funciona</h3>
        <ul className="text-blue-700 space-y-1">
          <li>• Cada grupo tiene {filteredGroups[0]?.totalQuestions || '10-15'} preguntas específicas del tema</li>
          <li>• Las preguntas no se repiten hasta completar todo el grupo</li>
          <li>• Puedes ver tu progreso y puntuación en tiempo real</li>
          <li>• Todas las preguntas tienen explicaciones detalladas</li>
        </ul>
      </div>
    </div>
  );
}
import React, { useState } from 'react';
import { ScaleCategory, Scale } from '../types/music';
import { scaleCategories } from '../data/musicData';
import { ChevronDown, ChevronRight, Check } from 'lucide-react';

interface ScaleSelectorProps {
  selectedCategories: string[];
  selectedScales: string[];
  onCategoriesChange: (categories: string[]) => void;
  onScalesChange: (scales: string[]) => void;
  onStartQuiz: () => void;
}

export default function ScaleSelector({ 
  selectedCategories, 
  selectedScales, 
  onCategoriesChange, 
  onScalesChange,
  onStartQuiz 
}: ScaleSelectorProps) {
  const [expandedCategories, setExpandedCategories] = useState<string[]>([]);

  const toggleCategory = (categoryId: string) => {
    setExpandedCategories(prev => 
      prev.includes(categoryId) 
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  const handleCategorySelect = (categoryId: string) => {
    const isSelected = selectedCategories.includes(categoryId);
    const category = scaleCategories.find(c => c.id === categoryId);
    
    if (isSelected) {
      // Deseleccionar categoría y sus escalas
      onCategoriesChange(selectedCategories.filter(id => id !== categoryId));
      if (category) {
        const categoryScaleIds = category.scales.map(s => s.id);
        onScalesChange(selectedScales.filter(id => !categoryScaleIds.includes(id)));
      }
    } else {
      // Seleccionar categoría y todas sus escalas
      onCategoriesChange([...selectedCategories, categoryId]);
      if (category) {
        const categoryScaleIds = category.scales.map(s => s.id);
        const newSelectedScales = [...new Set([...selectedScales, ...categoryScaleIds])];
        onScalesChange(newSelectedScales);
      }
    }
  };

  const handleScaleSelect = (scaleId: string) => {
    const isSelected = selectedScales.includes(scaleId);
    
    if (isSelected) {
      onScalesChange(selectedScales.filter(id => id !== scaleId));
    } else {
      onScalesChange([...selectedScales, scaleId]);
    }
  };

  const selectAllScales = () => {
    const allScaleIds = scaleCategories.flatMap(cat => cat.scales.map(s => s.id));
    onScalesChange(allScaleIds);
    onCategoriesChange(scaleCategories.map(c => c.id));
  };

  const clearAllScales = () => {
    onScalesChange([]);
    onCategoriesChange([]);
  };

  const hasSelections = selectedScales.length > 0;

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Selecciona las Escalas</h2>
        <p className="text-lg text-gray-600">Elige las categorías o escalas específicas que quieres practicar</p>
      </div>

      <div className="bg-white rounded-2xl shadow-lg p-6 mb-6">
        <div className="flex justify-between items-center mb-6">
          <div className="text-sm text-gray-600">
            {selectedScales.length} escalas seleccionadas
          </div>
          <div className="flex gap-3">
            <button
              onClick={selectAllScales}
              className="px-4 py-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
            >
              Seleccionar todas
            </button>
            <button
              onClick={clearAllScales}
              className="px-4 py-2 text-gray-600 hover:bg-gray-50 rounded-lg transition-colors"
            >
              Limpiar selección
            </button>
          </div>
        </div>

        <div className="space-y-4">
          {scaleCategories.map((category) => {
            const isExpanded = expandedCategories.includes(category.id);
            const isCategorySelected = selectedCategories.includes(category.id);
            const categoryScaleIds = category.scales.map(s => s.id);
            const selectedInCategory = categoryScaleIds.filter(id => selectedScales.includes(id)).length;

            return (
              <div key={category.id} className="border border-gray-200 rounded-lg">
                <div className="p-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() => toggleCategory(category.id)}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        {isExpanded ? (
                          <ChevronDown className="w-5 h-5" />
                        ) : (
                          <ChevronRight className="w-5 h-5" />
                        )}
                      </button>
                      
                      <button
                        onClick={() => handleCategorySelect(category.id)}
                        className={`flex items-center gap-2 p-2 rounded-lg transition-colors ${
                          isCategorySelected 
                            ? 'bg-blue-100 text-blue-700' 
                            : 'hover:bg-gray-50'
                        }`}
                      >
                        {isCategorySelected && <Check className="w-4 h-4" />}
                        <div className="text-left">
                          <h3 className="font-semibold">{category.name}</h3>
                          <p className="text-sm text-gray-600">{category.description}</p>
                        </div>
                      </button>
                    </div>
                    
                    <div className="text-sm text-gray-500">
                      {selectedInCategory}/{category.scales.length}
                    </div>
                  </div>

                  {isExpanded && (
                    <div className="mt-4 ml-8 grid grid-cols-1 md:grid-cols-2 gap-2">
                      {category.scales.map((scale) => {
                        const isScaleSelected = selectedScales.includes(scale.id);
                        return (
                          <button
                            key={scale.id}
                            onClick={() => handleScaleSelect(scale.id)}
                            className={`p-3 text-left rounded-lg border transition-colors ${
                              isScaleSelected
                                ? 'bg-green-50 border-green-300 text-green-700'
                                : 'bg-gray-50 border-gray-200 hover:bg-gray-100'
                            }`}
                          >
                            <div className="flex items-center gap-2">
                              {isScaleSelected && <Check className="w-4 h-4" />}
                              <div>
                                <div className="font-medium">{scale.name}</div>
                                <div className="text-xs text-gray-500">
                                  {scale.notes.join(' - ')}
                                </div>
                                {scale.chordConnection && (
                                  <div className="text-xs text-blue-600 mt-1">
                                    {scale.chordConnection}
                                  </div>
                                )}
                              </div>
                            </div>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <button
        onClick={onStartQuiz}
        disabled={!hasSelections}
        className={`w-full py-4 px-6 rounded-2xl font-semibold text-lg transition-colors ${
          hasSelections
            ? 'bg-blue-600 hover:bg-blue-700 text-white'
            : 'bg-gray-300 text-gray-500 cursor-not-allowed'
        }`}
      >
        {hasSelections 
          ? `Comenzar Quiz (${selectedScales.length} escalas)` 
          : 'Selecciona al menos una escala'
        }
      </button>
    </div>
  );
}
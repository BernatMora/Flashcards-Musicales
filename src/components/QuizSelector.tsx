import React from 'react';
import { Music, ArrowRight, BookOpen, Target, Settings } from 'lucide-react';

interface QuizSelectorProps {
  onSelectQuiz: (type: 'progression-direct' | 'progression-inverse' | 'scale-mode', withSettings?: boolean) => void;
}

export default function QuizSelector({ onSelectQuiz }: QuizSelectorProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Music className="w-12 h-12 text-blue-600" />
            <h1 className="text-4xl font-bold text-gray-800">Flashcards Musicales</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Mejora tu conocimiento de teoría musical con ejercicios interactivos
          </p>
        </div>

        {/* Quiz Options */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Progression Direct */}
          <div 
            onClick={() => onSelectQuiz('progression-direct')}
            className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:shadow-2xl"
          >
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <ArrowRight className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Números Romanos → Acordes
              </h3>
              <p className="text-gray-600 mb-6">
                Convierte progresiones en números romanos a acordes específicos
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700 font-medium">Ejemplo:</p>
                <p className="text-blue-600 font-mono">ii-V-I en C → Dm7-G7-Cmaj7</p>
              </div>
              <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors font-semibold">
                Comenzar
              </button>
            </div>
          </div>

          {/* Progression Inverse */}
          <div 
            onClick={() => onSelectQuiz('progression-inverse')}
            className="bg-white rounded-2xl shadow-xl p-8 cursor-pointer transform hover:-translate-y-2 transition-all duration-300 border border-gray-100 hover:shadow-2xl"
          >
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Acordes → Análisis
              </h3>
              <p className="text-gray-600 mb-6">
                Identifica progresiones y tonalidades a partir de acordes
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700 font-medium">Ejemplo:</p>
                <p className="text-green-600 font-mono">Dm7-G7-Cmaj7 → ii-V-I en C</p>
              </div>
              <button className="w-full bg-green-600 text-white py-3 px-6 rounded-lg hover:bg-green-700 transition-colors font-semibold">
                Comenzar
              </button>
            </div>
          </div>

          {/* Scale Mode */}
          <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <BookOpen className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                Escalas y Modos
              </h3>
              <p className="text-gray-600 mb-6">
                Practica escalas, modos y su relación con acordes
              </p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6">
                <p className="text-sm text-gray-700 font-medium">Ejemplo:</p>
                <p className="text-purple-600 font-mono">¿Qué escala usar sobre Dm7?</p>
              </div>
              
              <div className="space-y-3">
                <button 
                  onClick={() => onSelectQuiz('scale-mode')}
                  className="w-full bg-purple-600 text-white py-3 px-6 rounded-lg hover:bg-purple-700 transition-colors font-semibold"
                >
                  Modo Rápido
                </button>
                <button 
                  onClick={() => onSelectQuiz('scale-mode', true)}
                  className="w-full bg-purple-100 text-purple-700 py-3 px-6 rounded-lg hover:bg-purple-200 transition-colors font-semibold flex items-center justify-center gap-2"
                >
                  <Settings className="w-4 h-4" />
                  Seleccionar Escalas
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <h3 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Estadísticas de Contenido
          </h3>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-blue-600">50+</div>
              <div className="text-sm text-gray-600">Progresiones</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">100+</div>
              <div className="text-sm text-gray-600">Escalas</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-purple-600">12</div>
              <div className="text-sm text-gray-600">Tonalidades</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
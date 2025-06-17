import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { iaGenerativaPresentationMetadata } from '../data/iaGenerativaSlidesData';

/**
 * Componente de barra lateral específico para IA Generativa
 */
function IAGenerativaSidebar({ slides, currentSlide, onSlideChange, isOpen, onToggle }) {
  const [expandedSections, setExpandedSections] = useState({});
  
  // Configuración de secciones específicas para IA Generativa
  const sections = [
    {
      id: 'fundamentos',
      name: 'Fundamentos de IA Generativa',
      icon: 'brain',
      color: 'blue',
      slides: slides.slice(0, 4)
    },
    {
      id: 'llms',
      name: 'Modelos de Lenguaje Grandes',
      icon: 'microchip',
      color: 'green',
      slides: slides.slice(4, 6)
    },
    {
      id: 'rag',
      name: 'RAG - Retrieval Augmented Generation',
      icon: 'database',
      color: 'purple',
      slides: slides.slice(6, 8)
    },
    {
      id: 'aplicaciones',
      name: 'Uso Cotidiano y Aplicaciones',
      icon: 'users',
      color: 'orange',
      slides: slides.slice(8, 10)
    },
    {
      id: 'futuro',
      name: 'Futuro y Consideraciones Éticas',
      icon: 'rocket',
      color: 'pink',
      slides: slides.slice(10)
    }
  ];

  // Expandir automáticamente la sección actual
  useEffect(() => {
    const currentSection = sections.find(section => 
      section.slides.some(slide => slide.id === currentSlide)
    );
    if (currentSection) {
      setExpandedSections(prev => ({ ...prev, [currentSection.id]: true }));
    }
  }, [currentSlide]);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const getSlideProgress = (slideIndex) => {
    if (slideIndex < currentSlide) return 'completed';
    if (slideIndex === currentSlide) return 'current';
    return 'pending';
  };

  const { duration, interactiveSlides } = iaGenerativaPresentationMetadata;

  return (
    <>
      {/* Botón de toggle sobre el sidebar */}
      <button
        onClick={onToggle}
        className={`fixed top-4 z-50 control-btn transition-all duration-300 ${
          isOpen ? 'left-[21rem] lg:left-[25rem]' : 'left-4'
        }`}
        title={isOpen ? "Ocultar menú" : "Mostrar menú"}
      >
        <Icon name={isOpen ? "chevron-left" : "bars"} className="w-5 h-5" />
      </button>

      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative top-0 left-0 h-full w-80 lg:w-96 bg-gray-900/95 backdrop-blur-lg 
          transform transition-transform duration-300 z-40 overflow-hidden flex flex-col
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white mb-2">
            IA Generativa
          </h2>
          <p className="text-white/60 text-sm">
            La Revolución de la Creación de Contenido
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-white/40 text-xs">
              Slide {currentSlide + 1} de {slides.length}
            </span>
            <div className="w-24 bg-white/10 rounded-full h-2">
              <div
                className="h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full transition-all"
                style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
              />
            </div>
          </div>
        </div>

        {/* Sections */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {sections.map((section) => (
            <div key={section.id} className="space-y-2">
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full flex items-center justify-between p-3 rounded-lg
                  bg-${section.color}-500/10 hover:bg-${section.color}-500/20 
                  transition-colors group`}
              >
                <div className="flex items-center">
                  <Icon 
                    name={section.icon} 
                    className={`w-5 h-5 text-${section.color}-400 mr-3`} 
                  />
                  <span className="text-white font-medium text-sm">{section.name}</span>
                </div>
                <Icon
                  name={expandedSections[section.id] ? 'chevron-up' : 'chevron-down'}
                  className={`w-4 h-4 text-${section.color}-400 
                    transform transition-transform group-hover:scale-110`}
                />
              </button>

              {/* Slides list */}
              {expandedSections[section.id] && (
                <div className="space-y-1 pl-4">
                  {section.slides.map((slide) => {
                    const progress = getSlideProgress(slide.id);
                    const isInteractive = interactiveSlides?.includes(slide.id);
                    
                    return (
                      <button
                        key={slide.id}
                        onClick={() => {
                          onSlideChange(slide.id);
                          if (window.innerWidth < 1024) onToggle();
                        }}
                        className={`w-full text-left p-3 rounded-lg transition-all
                          hover:bg-white/5 group flex items-start
                          ${progress === 'current' ? 'bg-white/10' : ''}`}
                      >
                        <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0
                          ${progress === 'completed' ? 'bg-green-400' : ''}
                          ${progress === 'current' ? 'bg-purple-400 animate-pulse' : ''}
                          ${progress === 'pending' ? 'bg-white/20' : ''}`}
                        />
                        <div className="flex-1">
                          <div className="flex items-center">
                            <p className={`text-sm font-medium
                              ${progress === 'current' ? 'text-white' : 'text-white/70'}
                              group-hover:text-white transition-colors`}
                            >
                              {slide.title}
                            </p>
                            {isInteractive && (
                              <Icon
                                name="mouse-pointer"
                                className="w-3 h-3 text-yellow-400 ml-2"
                                title="Slide interactivo"
                              />
                            )}
                          </div>
                          {slide.subtitle && (
                            <p className="text-xs text-white/40 mt-1">
                              {slide.subtitle}
                            </p>
                          )}
                        </div>
                        {progress === 'current' && (
                          <Icon
                            name="arrow-right"
                            className="w-4 h-4 text-purple-400 ml-2 animate-pulse"
                          />
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-white/10">
          <div className="space-y-3">
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Duración estimada</span>
              <span className="text-white/90 font-medium">{duration.total}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Slides interactivos</span>
              <span className="text-white/90 font-medium">
                <Icon name="mouse-pointer" className="w-4 h-4 inline mr-1" />
                {interactiveSlides?.length || 3}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Nivel</span>
              <span className="text-white/90 font-medium">Principiante-Intermedio</span>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <button
              onClick={onToggle}
              className="text-white/40 hover:text-white/60 text-sm transition-colors lg:hidden"
            >
              <Icon name="arrow-left" className="w-4 h-4 inline mr-1" />
              Cerrar menú
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}

export default IAGenerativaSidebar;
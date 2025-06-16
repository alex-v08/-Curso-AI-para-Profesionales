import React, { useState, useEffect } from 'react';
import Icon from './Icon';
import { presentationMetadata } from '../data/slidesData';

/**
 * Componente de barra lateral con índice de todos los temas
 */
function Sidebar({ slides, currentSlide, onSlideChange, isOpen, onToggle }) {
  const [expandedSections, setExpandedSections] = useState({});
  
  // Agrupar slides por secciones usando metadata
  const sections = [
    {
      id: 'paradigmas',
      name: 'Paradigmas de Aprendizaje',
      icon: 'brain',
      color: 'purple',
      slides: slides.slice(0, 7),
      subsections: presentationMetadata.sections.paradigmas.subsections
    },
    {
      id: 'conceptual',
      name: 'Introducción a IA/ML',
      icon: 'robot',
      color: 'blue',
      slides: slides.slice(7, 17),
      subsections: presentationMetadata.sections.conceptual.subsections
    },
    {
      id: 'iaGenerativa',
      name: 'IA Generativa',
      icon: 'magic',
      color: 'pink',
      slides: slides.slice(17, 25),
      subsections: presentationMetadata.sections.iaGenerativa.subsections
    },
    {
      id: 'technical',
      name: 'Aspectos Técnicos',
      icon: 'cogs',
      color: 'green',
      slides: slides.slice(25, 28),
      subsections: presentationMetadata.sections.technical?.subsections || []
    },
    {
      id: 'avanzados',
      name: 'Casos Avanzados',
      icon: 'rocket',
      color: 'orange',
      slides: slides.slice(28),
      subsections: presentationMetadata.sections.avanzados?.subsections || []
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

  return (
    <>
      {/* Botón de toggle para móvil */}
      <button
        onClick={onToggle}
        className={`fixed top-4 left-4 z-50 lg:hidden btn-secondary p-3 ${
          isOpen ? 'bg-purple-600' : ''
        }`}
        aria-label="Toggle sidebar"
      >
        <Icon name={isOpen ? 'times' : 'bars'} className="w-5 h-5" />
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
        className={`fixed top-0 left-0 h-full w-80 bg-gray-900/95 backdrop-blur-lg 
          transform transition-transform duration-300 z-40 overflow-hidden flex flex-col
          ${isOpen ? 'translate-x-0' : '-translate-x-full'} 
          lg:translate-x-0 lg:relative lg:w-96`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <h2 className="text-2xl font-bold text-white mb-2">
            {presentationMetadata.title}
          </h2>
          <p className="text-white/60 text-sm">
            {presentationMetadata.subtitle}
          </p>
          <div className="mt-4 flex items-center justify-between">
            <span className="text-white/40 text-xs">
              Slide {currentSlide + 1} de {slides.length}
            </span>
            <div className="w-24 bg-white/10 rounded-full h-2">
              <div
                className="h-2 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full transition-all"
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
                  <span className="text-white font-medium">{section.name}</span>
                </div>
                <Icon
                  name={expandedSections[section.id] ? 'chevron-up' : 'chevron-down'}
                  className={`w-4 h-4 text-${section.color}-400 
                    transform transition-transform group-hover:scale-110`}
                />
              </button>

              {/* Subsections list */}
              {expandedSections[section.id] && (
                <div className="space-y-1 pl-4">
                  {section.subsections && section.subsections.length > 0 ? (
                    section.subsections.map((subsection) => {
                      const progress = getSlideProgress(subsection.slide);
                      const isInteractive = presentationMetadata.interactiveSlides?.includes(subsection.slide);
                      
                      return (
                        <button
                          key={subsection.slide}
                          onClick={() => {
                            onSlideChange(subsection.slide);
                            if (window.innerWidth < 1024) onToggle();
                          }}
                          className={`w-full text-left p-3 rounded-lg transition-all
                            hover:bg-white/5 group flex items-start
                            ${progress === 'current' ? 'bg-white/10' : ''}`}
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0
                            ${progress === 'completed' ? 'bg-green-400' : ''}
                            ${progress === 'current' ? `bg-${section.color}-400 animate-pulse` : ''}
                            ${progress === 'pending' ? 'bg-white/20' : ''}`}
                          />
                          <div className="flex-1">
                            <div className="flex items-center">
                              <p className={`text-sm font-medium
                                ${progress === 'current' ? 'text-white' : 'text-white/70'}
                                group-hover:text-white transition-colors`}
                              >
                                {subsection.name}
                              </p>
                              {isInteractive && (
                                <Icon
                                  name="mouse-pointer"
                                  className="w-3 h-3 text-yellow-400 ml-2"
                                  title="Slide interactivo"
                                />
                              )}
                            </div>
                            <p className="text-xs text-white/40 mt-1">
                              Slide {subsection.slide + 1}
                            </p>
                          </div>
                          {progress === 'current' && (
                            <Icon
                              name="arrow-right"
                              className={`w-4 h-4 text-${section.color}-400 ml-2 animate-pulse`}
                            />
                          )}
                        </button>
                      );
                    })
                  ) : (
                    // Fallback para secciones sin subsecciones definidas
                    section.slides.map((slide, index) => {
                      const progress = getSlideProgress(slide.id || index + section.slides[0].id);
                      return (
                        <button
                          key={slide.id || index}
                          onClick={() => {
                            onSlideChange(slide.id || index + section.slides[0].id);
                            if (window.innerWidth < 1024) onToggle();
                          }}
                          className={`w-full text-left p-3 rounded-lg transition-all
                            hover:bg-white/5 group flex items-start
                            ${progress === 'current' ? 'bg-white/10' : ''}`}
                        >
                          <div className={`w-2 h-2 rounded-full mt-2 mr-3 flex-shrink-0
                            ${progress === 'completed' ? 'bg-green-400' : ''}
                            ${progress === 'current' ? `bg-${section.color}-400 animate-pulse` : ''}
                            ${progress === 'pending' ? 'bg-white/20' : ''}`}
                          />
                          <div className="flex-1">
                            <p className={`text-sm font-medium
                              ${progress === 'current' ? 'text-white' : 'text-white/70'}
                              group-hover:text-white transition-colors`}
                            >
                              {slide.title}
                            </p>
                          </div>
                        </button>
                      );
                    })
                  )}
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
              <span className="text-white/90 font-medium">{presentationMetadata.duration.total}</span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Slides interactivos</span>
              <span className="text-white/90 font-medium">
                <Icon name="mouse-pointer" className="w-4 h-4 inline mr-1" />
                {presentationMetadata.interactiveSlides.length}
              </span>
            </div>
            <div className="flex items-center justify-between text-sm">
              <span className="text-white/60">Total slides</span>
              <span className="text-white/90 font-medium">{presentationMetadata.totalSlides}</span>
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

export default Sidebar;
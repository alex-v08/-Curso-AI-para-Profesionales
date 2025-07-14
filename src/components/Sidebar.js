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
      slides: slides.slice(17, 36), // 19 slides de IA Generativa (17-35)
      subsections: presentationMetadata.sections.iaGenerativa.subsections
    },
    {
      id: 'mcp',
      name: 'Model Context Protocol',
      icon: 'network-wired',
      color: 'indigo',
      slides: slides.slice(36, 45), // 9 slides de MCP (36-44)
      subsections: presentationMetadata.sections.mcp?.subsections || []
    },
    {
      id: 'lowCodeNoCode',
      name: 'Low-Code vs No-Code',
      icon: 'code',
      color: 'orange',
      slides: slides.slice(45, 51), // 6 slides de Low-Code/No-Code (45-50)
      subsections: presentationMetadata.sections.lowCodeNoCode?.subsections || []
    },
    {
      id: 'agentesInteligentes',
      name: 'Agentes Inteligentes',
      icon: 'robot',
      color: 'cyan',
      slides: slides.slice(51, 70), // 19 slides de Agentes (51-69)
      subsections: presentationMetadata.sections.agentesInteligentes?.subsections || []
    },
    {
      id: 'vibeCoding',
      name: 'Vibe Coding',
      icon: 'magic',
      color: 'purple',
      slides: slides.slice(70, 78), // 8 slides de Vibe Coding (70-77)
      subsections: presentationMetadata.sections.vibeCoding?.subsections || []
    },
    {
      id: 'n8nWorkflows',
      name: 'n8n: Workflow Automation',
      icon: 'sitemap',
      color: 'indigo',
      slides: slides.slice(78, 91), // 13 slides de n8n (78-90)
      subsections: presentationMetadata.sections.n8nWorkflows?.subsections || []
    },
    {
      id: 'technical',
      name: 'Aspectos Técnicos',
      icon: 'cogs',
      color: 'green',
      slides: slides.slice(91), // Movido al final después de n8n (desde 91)
      subsections: presentationMetadata.sections.technical?.subsections || []
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

      {/* Overlay para móvil */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 lg:hidden"
          onClick={onToggle}
        />
      )}

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

      {/* Sidebar */}
      <aside
        className={`fixed lg:relative top-0 left-0 h-full w-80 lg:w-96 ml-glass-elevated
          transform transition-transform duration-300 z-40 overflow-hidden flex flex-col
          ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        {/* Header */}
        <div className="p-6 border-b border-white/10">
          <h2 className="ml-heading-3">
            {presentationMetadata.title}
          </h2>
          <p className="ml-text-caption">
            {presentationMetadata.subtitle}
          </p>
          <div className="mt-4 ml-flex ml-flex--between">
            <span className="ml-text-caption">
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
                className={`w-full ml-flex ml-flex--between p-3 rounded-lg ml-interactive
                  bg-${section.color}-500/10 hover:bg-${section.color}-500/20 
                  transition-colors group`}
              >
                <div className="ml-flex">
                  <Icon 
                    name={section.icon} 
                    className={`w-5 h-5 text-${section.color}-400 mr-3`} 
                  />
                  <span className="ml-text-body font-medium">{section.name}</span>
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
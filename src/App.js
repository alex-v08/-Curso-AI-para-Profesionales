import React, { useState, useEffect, useCallback } from 'react';
import './styles/App.css';
import Icon from './components/Icon';
import Sidebar from './components/Sidebar';
import { slidesData, presentationMetadata } from './data/slidesData';
import additionalSlides from './data/additionalSlides';

// Combinar todos los slides
const allSlides = [...slidesData, ...additionalSlides];

/**
 * Componente principal de la aplicación - Presentación ML
 */
function App() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showProgress, setShowProgress] = useState(true);
  const [loading, setLoading] = useState(true);
  const [sidebarOpen, setSidebarOpen] = useState(window.innerWidth >= 1024);

  // Simulamos carga inicial
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Manejar cambio de tamaño de pantalla para el sidebar
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setSidebarOpen(true);
      } else {
        setSidebarOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Navegación por teclado
  const handleKeyPress = useCallback((event) => {
    switch (event.key) {
      case 'ArrowRight':
      case ' ':
        event.preventDefault();
        nextSlide();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        prevSlide();
        break;
      case 'f':
      case 'F':
        event.preventDefault();
        toggleFullscreen();
        break;
      case 'Escape':
        if (isFullscreen) {
          setIsFullscreen(false);
        }
        break;
      default:
        break;
    }
  }, [currentSlide, isFullscreen]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [handleKeyPress]);

  // Funciones de navegación
  const nextSlide = () => {
    if (currentSlide < allSlides.length - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  // Función para pantalla completa
  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen?.();
    } else {
      document.exitFullscreen?.();
    }
    setIsFullscreen(!isFullscreen);
  };

  // Determinar tipo de slide actual
  const getCurrentSlideInfo = () => {
    const slide = allSlides[currentSlide];
    const isConceptual = currentSlide <= 9; // Slides 1-10 son conceptuales
    const isTechnical = currentSlide > 9;   // Slides 11+ son técnicos
    
    return {
      slide,
      isConceptual,
      isTechnical,
      section: isConceptual ? 'Introducción Conceptual' : 'Aspectos Técnicos'
    };
  };

  const { slide, isConceptual, section } = getCurrentSlideInfo();

  // Pantalla de carga
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="loading-spinner mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-white mb-2">Cargando Presentación</h2>
          <p className="text-white/70">Inteligencia Artificial en los negocios. De los datos a la innovación</p>
        </div>
      </div>
    );
  }

  if (!slide) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center text-white">
          <Icon name="exclamation-triangle" className="w-16 h-16 mx-auto mb-4 text-yellow-400" />
          <h2 className="text-2xl font-bold mb-2">Error al cargar el slide</h2>
          <p>Slide {currentSlide + 1} no encontrado</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`min-h-screen ${isFullscreen ? 'fixed inset-0 z-50' : ''} flex`}>
      {/* Sidebar */}
      <Sidebar
        slides={allSlides}
        currentSlide={currentSlide}
        onSlideChange={goToSlide}
        isOpen={sidebarOpen}
        onToggle={() => setSidebarOpen(!sidebarOpen)}
      />
      
      {/* Main content area */}
      <div className={`flex-1 relative main-content ${sidebarOpen ? 'with-sidebar' : 'without-sidebar'}`}>
        {/* Controles de presentación */}
        <div className="presentation-controls">
        <button
          onClick={() => setShowProgress(!showProgress)}
          className="control-btn"
          title={showProgress ? "Ocultar progreso" : "Mostrar progreso"}
        >
          <Icon name={showProgress ? "eye-slash" : "eye"} className="w-5 h-5" />
        </button>
        <button
          onClick={toggleFullscreen}
          className="control-btn"
          title="Pantalla completa (F)"
        >
          <Icon name={isFullscreen ? "compress" : "expand"} className="w-5 h-5" />
        </button>
        <button
          onClick={() => window.location.reload()}
          className="control-btn"
          title="Reiniciar presentación"
        >
          <Icon name="redo" className="w-5 h-5" />
        </button>
      </div>

      {/* Contenido del slide */}
      <div className="relative min-h-screen flex flex-col">
        {slide.type === 'cover' ? (
          // Slide de portada
          <div className="flex-1 flex items-center justify-center min-h-screen py-20 px-8 lg:px-20">
            <div className="max-w-5xl mx-auto w-full text-center">
              <div className="mb-20">
                <h1 className="text-4xl lg:text-6xl xl:text-7xl font-bold enhanced-title-chatbot mb-12">
                  {slide.title}
                </h1>
                {slide.subtitle && (
                  <h2 className="text-2xl lg:text-3xl xl:text-4xl text-white/80 mb-16 max-w-4xl mx-auto">
                    {slide.subtitle}
                  </h2>
                )}
              </div>
              <div className="max-w-4xl mx-auto">
                {slide.content}
              </div>
            </div>
          </div>
        ) : (
          // Slides de contenido
          <div className="flex-1 min-h-screen flex flex-col justify-center py-16 px-8 lg:px-16">
            <div className="max-w-6xl mx-auto w-full">
              {/* Header del slide */}
              <div className="mb-16 text-center">
                <h1 className="text-3xl lg:text-4xl xl:text-5xl font-bold enhanced-title-chatbot mb-8">
                  {slide.title}
                </h1>
                {showProgress && (
                  <div className="flex items-center justify-center mb-8">
                    <div className="text-white/70 text-base">
                      <span className={`px-6 py-3 rounded-full text-sm mr-6 ${
                        isConceptual ? 'bg-blue-500/30' : 'bg-green-500/30'
                      }`}>
                        {section}
                      </span>
                      <span className="bg-white/10 px-6 py-3 rounded-full text-sm">
                        Slide {currentSlide + 1} de {allSlides.length}
                      </span>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Contenido del slide */}
              <div className="slide-content max-w-5xl mx-auto">
                {slide.content}
              </div>
            </div>
          </div>
        )}

        {/* Navegación inferior */}
        {showProgress && (
          <div className="slide-navigation">
            {/* Botón anterior */}
            <button
              onClick={prevSlide}
              disabled={currentSlide === 0}
              className={`btn-chatbot-secondary ${currentSlide === 0 ? 'opacity-50 cursor-not-allowed' : ''}`}
              title="Slide anterior (←)"
            >
              <Icon name="chevron-left" className="w-4 h-4 mr-2" />
              Anterior
            </button>

            {/* Indicadores de slides */}
            <div className="flex space-x-2 mx-4">
              {allSlides.slice(0, 10).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`slide-indicator ${
                    index === currentSlide ? 'active' : ''
                  }`}
                  title={`Ir al slide ${index + 1}`}
                />
              ))}
              {allSlides.length > 10 && (
                <>
                  <span className="text-white/40 px-2">...</span>
                  {allSlides.slice(-3).map((_, index) => {
                    const actualIndex = allSlides.length - 3 + index;
                    return (
                      <button
                        key={actualIndex}
                        onClick={() => goToSlide(actualIndex)}
                        className={`slide-indicator ${
                          actualIndex === currentSlide ? 'active' : ''
                        }`}
                        title={`Ir al slide ${actualIndex + 1}`}
                      />
                    );
                  })}
                </>
              )}
            </div>

            {/* Botón siguiente */}
            <button
              onClick={nextSlide}
              disabled={currentSlide === allSlides.length - 1}
              className={`btn-chatbot-secondary ${
                currentSlide === allSlides.length - 1 ? 'opacity-50 cursor-not-allowed' : ''
              }`}
              title="Siguiente slide (→ o Espacio)"
            >
              Siguiente
              <Icon name="chevron-right" className="w-4 h-4 ml-2" />
            </button>
          </div>
        )}

        {/* Barra de progreso */}
        {showProgress && (
          <div className="fixed bottom-0 left-0 right-0 z-40">
            <div className="h-1 bg-black/20">
              <div
                className="h-1 bg-gradient-to-r from-blue-400 to-purple-500 transition-all duration-300"
                style={{
                  width: `${((currentSlide + 1) / allSlides.length) * 100}%`
                }}
              />
            </div>
          </div>
        )}
      </div>

        {/* Información de ayuda (solo visible en primera carga) */}
        {currentSlide === 0 && showProgress && (
          <div className="fixed top-20 right-4 glass-effect p-4 rounded-lg max-w-xs">
            <h4 className="text-white font-semibold mb-2">💡 Controles:</h4>
            <div className="text-white/80 text-sm space-y-1">
              <p>• <kbd className="bg-white/20 px-1 rounded">→</kbd> o <kbd className="bg-white/20 px-1 rounded">Espacio</kbd>: Siguiente</p>
              <p>• <kbd className="bg-white/20 px-1 rounded">←</kbd>: Anterior</p>
              <p>• <kbd className="bg-white/20 px-1 rounded">F</kbd>: Pantalla completa</p>
              <p>• <strong>Clic en el menú:</strong> Navegar por temas</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
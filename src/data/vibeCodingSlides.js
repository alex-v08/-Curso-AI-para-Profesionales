import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';

/**
 * Slides del capítulo de Vibe Coding
 * Nuevo paradigma de desarrollo asistido por IA
 * Basado en información de https://alitu.com/creator/workflow/what-is-vibe-coding/
 */

const vibeCodingSlides = [
  // Slide 0: Portada del capítulo
  {
    id: 0,
    type: 'cover',
    title: 'Vibe Coding: El Futuro del Desarrollo',
    subtitle: 'Programación Asistida por IA sin Escribir Código',
    content: (
      <div className="ml-text-center ml-space-y-8 fade-in">
        <div className="ml-flex ml-flex--center mb-8">
          <div className="relative">
            <Icon name="magic" className="w-40 h-40 text-purple-400 pulse-animation" />
            <div className="absolute -inset-6 border-2 border-purple-300 rounded-full animate-ping opacity-20"></div>
            <div className="absolute -inset-4 border-2 border-blue-300 rounded-full animate-pulse opacity-30"></div>
          </div>
        </div>
        
        <div className="ml-container--narrow">
          <blockquote className="ml-heading-2 italic mb-6">
            "Describe tu idea en lenguaje natural y la IA construye el software por ti"
          </blockquote>
          <div className="ml-glass--elevated inline-block">
            <p className="ml-text-body">
              <Icon name="lightbulb" className="w-5 h-5 inline mr-2 text-yellow-400" />
              <strong>Andrej Karpathy</strong> - Pionero del concepto Vibe Coding
            </p>
          </div>
        </div>

        <div className="ml-grid ml-grid--4 max-w-6xl mx-auto mt-12">
          <div className="ml-card ml-card--interactive ml-text-center">
            <Icon name="comments" className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">Lenguaje Natural</h3>
            <p className="ml-text-caption">Describe tu idea en palabras simples</p>
          </div>
          
          <div className="ml-card ml-card--interactive ml-text-center">
            <Icon name="robot" className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">IA Generativa</h3>
            <p className="ml-text-caption">Interpreta y genera código automáticamente</p>
          </div>
          
          <div className="ml-card ml-card--interactive ml-text-center">
            <Icon name="rocket" className="w-12 h-12 text-purple-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">Desarrollo Rápido</h3>
            <p className="ml-text-caption">De idea a aplicación en minutos</p>
          </div>
          
          <div className="ml-card ml-card--interactive ml-text-center">
            <Icon name="users" className="w-12 h-12 text-orange-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">Democratización</h3>
            <p className="ml-text-caption">Creadores sin conocimientos técnicos</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 1: ¿Qué es Vibe Coding?
  {
    id: 1,
    type: 'content',
    title: '¿Qué es Vibe Coding?',
    content: (
      <div className="ml-space-y-8">
        <div className="ml-glass p-8 rounded-xl">
          <h2 className="ml-heading-2 mb-6 ml-flex">
            <Icon name="magic" className="w-10 h-10 mr-4 text-purple-400" />
            Definición y Concepto
          </h2>
          
          <div className="ml-quote-professional">
            <p className="ml-text-body">
              <strong>Vibe Coding</strong> es un enfoque revolucionario de desarrollo de software donde 
              <ClickableInfo term="IA Generativa" type="ai" content="Inteligencia Artificial que puede crear contenido nuevo, incluyendo código">
                la IA interpreta descripciones en lenguaje natural
              </ClickableInfo> 
              y genera código funcional automáticamente.
            </p>
          </div>

          <div className="ml-grid ml-grid--2 mt-8">
            <div className="ml-card--highlighted p-6">
              <h3 className="ml-heading-4 mb-4">
                <Icon name="user" className="w-6 h-6 inline mr-2 text-green-400" />
                Desarrollador Tradicional
              </h3>
              <ul className="ml-list-professional">
                <li>Aprende lenguajes de programación</li>
                <li>Escribe código línea por línea</li>
                <li>Depura errores manualmente</li>
                <li>Tiempo: semanas o meses</li>
              </ul>
            </div>
            
            <div className="ml-card--highlighted p-6">
              <h3 className="ml-heading-4 mb-4">
                <Icon name="magic" className="w-6 h-6 inline mr-2 text-purple-400" />
                Vibe Coder
              </h3>
              <ul className="ml-list-professional">
                <li>Describe la idea en español</li>
                <li>La IA genera el código</li>
                <li>Iteración rápida con feedback</li>
                <li>Tiempo: minutos o horas</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="ml-glass--elevated p-6 rounded-xl">
          <h3 className="ml-heading-3 mb-4 text-center">
            <Icon name="lightbulb" className="w-8 h-8 inline mr-2 text-yellow-400" />
            Acuñado por Andrej Karpathy
          </h3>
          <p className="ml-text-body text-center">
            Ex-director de IA en Tesla y co-fundador de OpenAI, popularizó este término para describir 
            el nuevo paradigma de desarrollo asistido por IA.
          </p>
        </div>
      </div>
    )
  },

  // Slide 2: ¿Cómo Funciona en la Práctica?
  {
    id: 2,
    type: 'content',
    title: '¿Cómo Funciona Vibe Coding?',
    content: (
      <div className="ml-space-y-8">
        <div className="ml-text-center mb-8">
          <h2 className="ml-heading-2 mb-4">Proceso Paso a Paso</h2>
          <p className="ml-text-body max-w-3xl mx-auto">
            El Vibe Coding transforma ideas abstractas en software funcional a través de un proceso intuitivo
          </p>
        </div>

        <div className="ml-grid ml-grid--3 gap-6">
          <div className="ml-card ml-fade-in-up text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full ml-flex ml-flex--center mx-auto mb-4">
                <span className="ml-heading-2 text-blue-400">1</span>
              </div>
            </div>
            <h3 className="ml-heading-4 mb-4">
              <Icon name="comments" className="w-6 h-6 inline mr-2 text-blue-400" />
              Describe tu Idea
            </h3>
            <p className="ml-text-body mb-4">
              "Quiero una app que calcule el tiempo de lectura de mis artículos"
            </p>
            <div className="ml-glass--subtle p-3 rounded-lg">
              <p className="ml-text-caption">
                💭 Lenguaje natural, sin jerga técnica
              </p>
            </div>
          </div>

          <div className="ml-card ml-fade-in-up--delay-1 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full ml-flex ml-flex--center mx-auto mb-4">
                <span className="ml-heading-2 text-purple-400">2</span>
              </div>
            </div>
            <h3 className="ml-heading-4 mb-4">
              <Icon name="cogs" className="w-6 h-6 inline mr-2 text-purple-400" />
              IA Interpreta
            </h3>
            <p className="ml-text-body mb-4">
              La IA analiza tu descripción y planifica la arquitectura
            </p>
            <div className="ml-glass--subtle p-3 rounded-lg">
              <p className="ml-text-caption">
                🤖 Análisis de requerimientos automático
              </p>
            </div>
          </div>

          <div className="ml-card ml-fade-in-up--delay-2 text-center">
            <div className="mb-6">
              <div className="w-16 h-16 bg-green-500/20 rounded-full ml-flex ml-flex--center mx-auto mb-4">
                <span className="ml-heading-2 text-green-400">3</span>
              </div>
            </div>
            <h3 className="ml-heading-4 mb-4">
              <Icon name="code" className="w-6 h-6 inline mr-2 text-green-400" />
              Genera Código
            </h3>
            <p className="ml-text-body mb-4">
              Produce código funcional, HTML, CSS y JavaScript
            </p>
            <div className="ml-glass--subtle p-3 rounded-lg">
              <p className="ml-text-caption">
                ⚡ Aplicación lista para usar
              </p>
            </div>
          </div>
        </div>

        <div className="ml-glass--elevated p-6 rounded-xl mt-8">
          <h3 className="ml-heading-3 mb-4 text-center">
            <Icon name="sync" className="w-8 h-8 inline mr-2 text-cyan-400" />
            Ciclo de Iteración Rápida
          </h3>
          <div className="ml-flex ml-flex--center gap-4 text-center">
            <div className="ml-flex ml-flex--column items-center">
              <Icon name="comments" className="w-8 h-8 text-blue-400 mb-2" />
              <span className="ml-text-caption">Solicitud</span>
            </div>
            <Icon name="arrow-right" className="w-6 h-6 text-gray-400" />
            <div className="ml-flex ml-flex--column items-center">
              <Icon name="robot" className="w-8 h-8 text-purple-400 mb-2" />
              <span className="ml-text-caption">Generación</span>
            </div>
            <Icon name="arrow-right" className="w-6 h-6 text-gray-400" />
            <div className="ml-flex ml-flex--column items-center">
              <Icon name="eye" className="w-8 h-8 text-green-400 mb-2" />
              <span className="ml-text-caption">Prueba</span>
            </div>
            <Icon name="arrow-right" className="w-6 h-6 text-gray-400" />
            <div className="ml-flex ml-flex--column items-center">
              <Icon name="edit" className="w-8 h-8 text-orange-400 mb-2" />
              <span className="ml-text-caption">Refinamiento</span>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 3: Herramientas Principales
  {
    id: 3,
    type: 'content',
    title: 'Herramientas de Vibe Coding',
    content: (
      <div className="ml-space-y-8">
        <div className="ml-text-center mb-8">
          <h2 className="ml-heading-2 mb-4">Plataformas Líderes en 2024-2025</h2>
          <p className="ml-text-body max-w-3xl mx-auto">
            Estas herramientas han democratizado el desarrollo de software
          </p>
        </div>

        <div className="ml-grid ml-grid--2 gap-6">
          <div className="ml-card-premium">
            <div className="ml-flex items-center mb-4">
              <Icon name="code" className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="ml-heading-3">Replit Agent</h3>
            </div>
            <p className="ml-text-body mb-4">
              Entorno de desarrollo completo con IA integrada. Permite crear aplicaciones web completas 
              simplemente describiendo la funcionalidad deseada.
            </p>
            <div className="ml-glass--subtle p-4 rounded-lg mb-4">
              <h4 className="ml-heading-4 mb-2">Características:</h4>
              <ul className="ml-list-professional">
                <li>Editor de código en tiempo real</li>
                <li>Hosting automático</li>
                <li>Múltiples lenguajes soportados</li>
                <li>Colaboración en tiempo real</li>
              </ul>
            </div>
            <div className="ml-flex ml-flex--between items-center">
              <span className="ml-text-caption">🌐 replit.com</span>
              <span className="status-online">Popular</span>
            </div>
          </div>

          <div className="ml-card-premium">
            <div className="ml-flex items-center mb-4">
              <Icon name="heart" className="w-8 h-8 text-pink-400 mr-3" />
              <h3 className="ml-heading-3">Lovable</h3>
            </div>
            <p className="ml-text-body mb-4">
              Plataforma especializada en crear aplicaciones web modernas con React. 
              Optimizada para interfaces de usuario atractivas y funcionales.
            </p>
            <div className="ml-glass--subtle p-4 rounded-lg mb-4">
              <h4 className="ml-heading-4 mb-2">Características:</h4>
              <ul className="ml-list-professional">
                <li>Especializado en React/Next.js</li>
                <li>Diseño UI/UX automático</li>
                <li>Integración con APIs</li>
                <li>Responsive design</li>
              </ul>
            </div>
            <div className="ml-flex ml-flex--between items-center">
              <span className="ml-text-caption">💖 lovable.dev</span>
              <span className="status-online">Moderno</span>
            </div>
          </div>

          <div className="ml-card-premium">
            <div className="ml-flex items-center mb-4">
              <Icon name="bolt" className="w-8 h-8 text-yellow-400 mr-3" />
              <h3 className="ml-heading-3">Bolt.new</h3>
            </div>
            <p className="ml-text-body mb-4">
              Herramienta de StackBlitz para desarrollo rápido. Excelente para prototipos 
              y aplicaciones que necesitan implementación inmediata.
            </p>
            <div className="ml-glass--subtle p-4 rounded-lg mb-4">
              <h4 className="ml-heading-4 mb-2">Características:</h4>
              <ul className="ml-list-professional">
                <li>Desarrollo ultra-rápido</li>
                <li>Preview instantáneo</li>
                <li>Integración con npm</li>
                <li>Entorno WebContainer</li>
              </ul>
            </div>
            <div className="ml-flex ml-flex--between items-center">
              <span className="ml-text-caption">⚡ bolt.new</span>
              <span className="status-processing">Rápido</span>
            </div>
          </div>

          <div className="ml-card-premium">
            <div className="ml-flex items-center mb-4">
              <Icon name="gamepad" className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="ml-heading-3">Rosebud AI</h3>
            </div>
            <p className="ml-text-body mb-4">
              Especializado en desarrollo de juegos y aplicaciones interactivas. 
              Perfecto para crear experiencias gamificadas sin conocimientos de game development.
            </p>
            <div className="ml-glass--subtle p-4 rounded-lg mb-4">
              <h4 className="ml-heading-4 mb-2">Características:</h4>
              <ul className="ml-list-professional">
                <li>Desarrollo de juegos 2D</li>
                <li>Física y animaciones</li>
                <li>Assets automáticos</li>
                <li>Publicación directa</li>
              </ul>
            </div>
            <div className="ml-flex ml-flex--between items-center">
              <span className="ml-text-caption">🎮 rosebud.ai</span>
              <span className="status-online">Gaming</span>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 4: Casos de Uso Reales
  {
    id: 4,
    type: 'content',
    title: 'Casos de Uso y Ejemplos Reales',
    content: (
      <div className="ml-space-y-8">
        <div className="ml-text-center mb-8">
          <h2 className="ml-heading-2 mb-4">
            <Icon name="lightbulb" className="w-8 h-8 inline mr-2 text-yellow-400" />
            De la Idea a la Realidad
          </h2>
          <p className="ml-text-body max-w-3xl mx-auto">
            Ejemplos reales de aplicaciones creadas con Vibe Coding
          </p>
        </div>

        <div className="ml-grid ml-grid--2 gap-8">
          <div className="ml-card">
            <div className="ml-flex items-center mb-4">
              <Icon name="clock" className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="ml-heading-3">Temporizador de Podcast</h3>
            </div>
            <div className="ml-glass--subtle p-4 rounded-lg mb-4">
              <h4 className="ml-heading-4 mb-2">Descripción del Usuario:</h4>
              <p className="ml-text-body italic">
                "Necesito una herramienta que me ayude a cronometrar los segmentos de mi podcast 
                y me avise cuando debo hacer transiciones"
              </p>
            </div>
            <div className="mb-4">
              <h4 className="ml-heading-4 mb-2">Resultado Generado:</h4>
              <ul className="ml-list-professional">
                <li>Interfaz con múltiples temporizadores</li>
                <li>Alertas visuales y sonoras</li>
                <li>Guardado de configuraciones</li>
                <li>Exportación de reportes de tiempo</li>
              </ul>
            </div>
            <div className="ml-glass--elevated p-3 rounded-lg">
              <p className="ml-text-caption text-center">
                ⏱️ Tiempo de desarrollo: <strong>15 minutos</strong>
              </p>
            </div>
          </div>

          <div className="ml-card">
            <div className="ml-flex items-center mb-4">
              <Icon name="chart-line" className="w-8 h-8 text-green-400 mr-3" />
              <h3 className="ml-heading-3">Generador de Marketing</h3>
            </div>
            <div className="ml-glass--subtle p-4 rounded-lg mb-4">
              <h4 className="ml-heading-4 mb-2">Descripción del Usuario:</h4>
              <p className="ml-text-body italic">
                "Quiero una app que genere ideas de contenido para redes sociales 
                basándose en mi nicho de mercado"
              </p>
            </div>
            <div className="mb-4">
              <h4 className="ml-heading-4 mb-2">Resultado Generado:</h4>
              <ul className="ml-list-professional">
                <li>Formulario de entrada por industria</li>
                <li>Generador de títulos atractivos</li>
                <li>Calendarios de publicación</li>
                <li>Análisis de tendencias</li>
              </ul>
            </div>
            <div className="ml-glass--elevated p-3 rounded-lg">
              <p className="ml-text-caption text-center">
                🚀 Tiempo de desarrollo: <strong>25 minutos</strong>
              </p>
            </div>
          </div>

          <div className="ml-card">
            <div className="ml-flex items-center mb-4">
              <Icon name="plane" className="w-8 h-8 text-purple-400 mr-3" />
              <h3 className="ml-heading-3">Simulador de Vuelo Básico</h3>
            </div>
            <div className="ml-glass--subtle p-4 rounded-lg mb-4">
              <h4 className="ml-heading-4 mb-2">Descripción del Usuario:</h4>
              <p className="ml-text-body italic">
                "Crear un juego simple donde pueda volar un avión usando las teclas 
                y evitar obstáculos"
              </p>
            </div>
            <div className="mb-4">
              <h4 className="ml-heading-4 mb-2">Resultado Generado:</h4>
              <ul className="ml-list-professional">
                <li>Gráficos 2D con canvas</li>
                <li>Controles de teclado fluidos</li>
                <li>Sistema de puntuación</li>
                <li>Efectos de sonido</li>
              </ul>
            </div>
            <div className="ml-glass--elevated p-3 rounded-lg">
              <p className="ml-text-caption text-center">
                🎮 Tiempo de desarrollo: <strong>45 minutos</strong>
              </p>
            </div>
          </div>

          <div className="ml-card">
            <div className="ml-flex items-center mb-4">
              <Icon name="microphone" className="w-8 h-8 text-orange-400 mr-3" />
              <h3 className="ml-heading-3">Alitu - Editor de Podcast</h3>
            </div>
            <div className="ml-glass--subtle p-4 rounded-lg mb-4">
              <h4 className="ml-heading-4 mb-2">Caso de Éxito Real:</h4>
              <p className="ml-text-body italic">
                Herramienta profesional de edición de podcasts que automatiza 
                la limpieza de audio y mejora la calidad
              </p>
            </div>
            <div className="mb-4">
              <h4 className="ml-heading-4 mb-2">Características Avanzadas:</h4>
              <ul className="ml-list-professional">
                <li>Eliminación automática de ruido</li>
                <li>Normalización de volumen</li>
                <li>Detección de silencios</li>
                <li>Exportación a múltiples formatos</li>
              </ul>
            </div>
            <div className="ml-glass--elevated p-3 rounded-lg">
              <p className="ml-text-caption text-center">
                🏆 <strong>Producto comercial exitoso</strong>
              </p>
            </div>
          </div>
        </div>

        <div className="ml-glass--elevated p-6 rounded-xl mt-8">
          <h3 className="ml-heading-3 mb-4 text-center">
            <Icon name="trophy" className="w-8 h-8 inline mr-2 text-yellow-400" />
            Patrón de Éxito
          </h3>
          <div className="ml-grid ml-grid--3 text-center">
            <div>
              <Icon name="target" className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <h4 className="ml-heading-4">Problema Claro</h4>
              <p className="ml-text-caption">Identifica una necesidad específica</p>
            </div>
            <div>
              <Icon name="comments" className="w-12 h-12 text-purple-400 mx-auto mb-2" />
              <h4 className="ml-heading-4">Descripción Detallada</h4>
              <p className="ml-text-caption">Explica claramente el comportamiento deseado</p>
            </div>
            <div>
              <Icon name="sync" className="w-12 h-12 text-green-400 mx-auto mb-2" />
              <h4 className="ml-heading-4">Iteración Rápida</h4>
              <p className="ml-text-caption">Mejora continua con feedback inmediato</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 5: Beneficios y Democratización
  {
    id: 5,
    type: 'content',
    title: 'Beneficios y Democratización del Desarrollo',
    content: (
      <div className="ml-space-y-8">
        <div className="ml-text-center mb-8">
          <h2 className="ml-heading-2 mb-4">
            <Icon name="users" className="w-8 h-8 inline mr-2 text-blue-400" />
            ¿Por qué Importa Vibe Coding?
          </h2>
          <p className="ml-text-body max-w-3xl mx-auto">
            Una revolución que está cambiando quién puede crear software
          </p>
        </div>

        <div className="ml-grid ml-grid--2 gap-8">
          <div className="ml-card-premium">
            <h3 className="ml-heading-3 mb-6 text-center">
              <Icon name="clock" className="w-8 h-8 inline mr-2 text-green-400" />
              Velocidad de Desarrollo
            </h3>
            <div className="ml-space-y-4">
              <div className="ml-flex ml-flex--between items-center p-4 ml-glass--subtle rounded-lg">
                <span className="ml-text-body">Prototipo funcional</span>
                <span className="ml-text-body font-bold text-green-400">5-15 minutos</span>
              </div>
              <div className="ml-flex ml-flex--between items-center p-4 ml-glass--subtle rounded-lg">
                <span className="ml-text-body">App web completa</span>
                <span className="ml-text-body font-bold text-green-400">1-3 horas</span>
              </div>
              <div className="ml-flex ml-flex--between items-center p-4 ml-glass--subtle rounded-lg">
                <span className="ml-text-body">Sistema complejo</span>
                <span className="ml-text-body font-bold text-green-400">1-2 días</span>
              </div>
            </div>
            <div className="mt-6 p-4 ml-glass--elevated rounded-lg">
              <p className="ml-text-caption text-center">
                <Icon name="lightning-bolt" className="w-4 h-4 inline mr-1 text-yellow-400" />
                <strong>95% reducción</strong> en tiempo de desarrollo tradicional
              </p>
            </div>
          </div>

          <div className="ml-card-premium">
            <h3 className="ml-heading-3 mb-6 text-center">
              <Icon name="dollar-sign" className="w-8 h-8 inline mr-2 text-blue-400" />
              Reducción de Costos
            </h3>
            <div className="ml-space-y-4">
              <div className="ml-flex ml-flex--between items-center p-4 ml-glass--subtle rounded-lg">
                <span className="ml-text-body">Sin equipo técnico inicial</span>
                <span className="ml-text-body font-bold text-blue-400">$0/mes</span>
              </div>
              <div className="ml-flex ml-flex--between items-center p-4 ml-glass--subtle rounded-lg">
                <span className="ml-text-body">Herramientas de Vibe Coding</span>
                <span className="ml-text-body font-bold text-blue-400">$20-100/mes</span>
              </div>
              <div className="ml-flex ml-flex--between items-center p-4 ml-glass--subtle rounded-lg">
                <span className="ml-text-body">Desarrollador tradicional</span>
                <span className="ml-text-body font-bold text-red-400">$5000+/mes</span>
              </div>
            </div>
            <div className="mt-6 p-4 ml-glass--elevated rounded-lg">
              <p className="ml-text-caption text-center">
                <Icon name="trending-down" className="w-4 h-4 inline mr-1 text-green-400" />
                <strong>98% reducción</strong> en costos de desarrollo
              </p>
            </div>
          </div>
        </div>

        <div className="ml-glass--elevated p-8 rounded-xl">
          <h3 className="ml-heading-2 mb-6 text-center">
            <Icon name="globe" className="w-8 h-8 inline mr-2 text-purple-400" />
            Democratización del Desarrollo
          </h3>
          
          <div className="ml-grid ml-grid--4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full ml-flex ml-flex--center mx-auto mb-4">
                <Icon name="user-tie" className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="ml-heading-4 mb-2">Emprendedores</h4>
              <p className="ml-text-caption">
                Validan ideas sin inversión técnica masiva
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-full ml-flex ml-flex--center mx-auto mb-4">
                <Icon name="palette" className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="ml-heading-4 mb-2">Creadores</h4>
              <p className="ml-text-caption">
                Monetizan su creatividad con herramientas digitales
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-full ml-flex ml-flex--center mx-auto mb-4">
                <Icon name="briefcase" className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="ml-heading-4 mb-2">Profesionales</h4>
              <p className="ml-text-caption">
                Automatizan procesos específicos de su industria
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-orange-500/20 rounded-full ml-flex ml-flex--center mx-auto mb-4">
                <Icon name="graduation-cap" className="w-8 h-8 text-orange-400" />
              </div>
              <h4 className="ml-heading-4 mb-2">Estudiantes</h4>
              <p className="ml-text-caption">
                Aprenden conceptos construyendo proyectos reales
              </p>
            </div>
          </div>
        </div>

        <div className="ml-quote-professional">
          <p className="ml-text-body text-center">
            "Vibe Coding no elimina a los programadores, sino que los libera para enfocarse en 
            problemas más complejos mientras democratiza la creación de software básico."
          </p>
        </div>
      </div>
    )
  },

  // Slide 6: Limitaciones y Mejores Prácticas
  {
    id: 6,
    type: 'content',
    title: 'Limitaciones y Mejores Prácticas',
    content: (
      <div className="ml-space-y-8">
        <div className="ml-text-center mb-8">
          <h2 className="ml-heading-2 mb-4">
            <Icon name="shield-alt" className="w-8 h-8 inline mr-2 text-orange-400" />
            Conociendo los Límites
          </h2>
          <p className="ml-text-body max-w-3xl mx-auto">
            Para aprovechar al máximo Vibe Coding, es importante entender sus limitaciones actuales
          </p>
        </div>

        <div className="ml-grid ml-grid--2 gap-8">
          <div className="ml-card">
            <h3 className="ml-heading-3 mb-4 text-center">
              <Icon name="exclamation-triangle" className="w-8 h-8 inline mr-2 text-red-400" />
              Limitaciones Actuales
            </h3>
            <div className="ml-space-y-4">
              <div className="ml-glass--subtle p-4 rounded-lg">
                <h4 className="ml-heading-4 mb-2">
                  <Icon name="database" className="w-5 h-5 inline mr-2 text-red-400" />
                  Sistemas Complejos
                </h4>
                <p className="ml-text-caption">
                  Arquitecturas enterprise, bases de datos complejas y sistemas distribuidos 
                  requieren supervisión técnica experta.
                </p>
              </div>
              
              <div className="ml-glass--subtle p-4 rounded-lg">
                <h4 className="ml-heading-4 mb-2">
                  <Icon name="lock" className="w-5 h-5 inline mr-2 text-red-400" />
                  Seguridad Avanzada
                </h4>
                <p className="ml-text-caption">
                  Aplicaciones que manejan datos sensibles necesitan revisión de 
                  seguridad por especialistas.
                </p>
              </div>
              
              <div className="ml-glass--subtle p-4 rounded-lg">
                <h4 className="ml-heading-4 mb-2">
                  <Icon name="cogs" className="w-5 h-5 inline mr-2 text-red-400" />
                  Optimización
                </h4>
                <p className="ml-text-caption">
                  El código generado puede no ser el más eficiente para 
                  aplicaciones de alto rendimiento.
                </p>
              </div>
              
              <div className="ml-glass--subtle p-4 rounded-lg">
                <h4 className="ml-heading-4 mb-2">
                  <Icon name="puzzle-piece" className="w-5 h-5 inline mr-2 text-red-400" />
                  Integraciones Complejas
                </h4>
                <p className="ml-text-caption">
                  Conectar con sistemas legacy o APIs muy específicas 
                  puede requerir intervención manual.
                </p>
              </div>
            </div>
          </div>

          <div className="ml-card">
            <h3 className="ml-heading-3 mb-4 text-center">
              <Icon name="check-circle" className="w-8 h-8 inline mr-2 text-green-400" />
              Mejores Prácticas
            </h3>
            <div className="ml-space-y-4">
              <div className="ml-glass--subtle p-4 rounded-lg">
                <h4 className="ml-heading-4 mb-2">
                  <Icon name="comments" className="w-5 h-5 inline mr-2 text-green-400" />
                  Descripción Clara
                </h4>
                <p className="ml-text-caption">
                  Sé específico sobre funcionalidades, comportamientos esperados 
                  y casos de uso principales.
                </p>
              </div>
              
              <div className="ml-glass--subtle p-4 rounded-lg">
                <h4 className="ml-heading-4 mb-2">
                  <Icon name="layer-group" className="w-5 h-5 inline mr-2 text-green-400" />
                  Desarrollo Iterativo
                </h4>
                <p className="ml-text-caption">
                  Comienza con funcionalidades básicas y agrega complejidad 
                  gradualmente en iteraciones.
                </p>
              </div>
              
              <div className="ml-glass--subtle p-4 rounded-lg">
                <h4 className="ml-heading-4 mb-2">
                  <Icon name="test-tube" className="w-5 h-5 inline mr-2 text-green-400" />
                  Pruebas Frecuentes
                </h4>
                <p className="ml-text-caption">
                  Prueba cada funcionalidad inmediatamente para detectar 
                  problemas temprano en el proceso.
                </p>
              </div>
              
              <div className="ml-glass--subtle p-4 rounded-lg">
                <h4 className="ml-heading-4 mb-2">
                  <Icon name="book" className="w-5 h-5 inline mr-2 text-green-400" />
                  Conceptos Básicos
                </h4>
                <p className="ml-text-caption">
                  Aunque no programes, entender conceptos como APIs, bases de datos 
                  y autenticación mejora los resultados.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-glass--elevated p-6 rounded-xl">
          <h3 className="ml-heading-3 mb-4 text-center">
            <Icon name="route" className="w-8 h-8 inline mr-2 text-blue-400" />
            Cuándo Usar Vibe Coding vs Desarrollo Tradicional
          </h3>
          
          <div className="ml-grid ml-grid--2 gap-6">
            <div className="ml-glass--subtle p-6 rounded-lg">
              <h4 className="ml-heading-4 mb-4 text-center text-green-400">
                <Icon name="thumbs-up" className="w-6 h-6 inline mr-2" />
                Ideal para Vibe Coding
              </h4>
              <ul className="ml-list-professional">
                <li>Prototipos y MVPs</li>
                <li>Herramientas de productividad personal</li>
                <li>Aplicaciones web simples</li>
                <li>Automatización de procesos</li>
                <li>Juegos casuales</li>
                <li>Landing pages interactivas</li>
                <li>Dashboards básicos</li>
              </ul>
            </div>
            
            <div className="ml-glass--subtle p-6 rounded-lg">
              <h4 className="ml-heading-4 mb-4 text-center text-orange-400">
                <Icon name="code" className="w-6 h-6 inline mr-2" />
                Requiere Desarrollo Tradicional
              </h4>
              <ul className="ml-list-professional">
                <li>Sistemas bancarios o financieros</li>
                <li>Aplicaciones médicas críticas</li>
                <li>Videojuegos AAA</li>
                <li>Sistemas operativos</li>
                <li>Infraestructura de cloud</li>
                <li>Algoritmos de machine learning</li>
                <li>Aplicaciones de tiempo real crítico</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 7: Futuro y Tendencias
  {
    id: 7,
    type: 'content',
    title: 'El Futuro del Vibe Coding',
    content: (
      <div className="ml-space-y-8">
        <div className="ml-text-center mb-8">
          <h2 className="ml-heading-2 mb-4">
            <Icon name="crystal-ball" className="w-8 h-8 inline mr-2 text-purple-400" />
            Hacia Dónde Se Dirige la Industria
          </h2>
          <p className="ml-text-body max-w-3xl mx-auto">
            Las tendencias que están moldeando el futuro del desarrollo de software
          </p>
        </div>

        <div className="ml-grid ml-grid--3 gap-6">
          <div className="ml-card ml-fade-in-up">
            <div className="text-center mb-4">
              <Icon name="brain" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="ml-heading-3">IA Más Inteligente</h3>
            </div>
            <div className="ml-space-y-3">
              <div className="ml-glass--subtle p-3 rounded-lg">
                <h4 className="ml-heading-4 mb-1">Modelos Especializados</h4>
                <p className="ml-text-caption">IA entrenada específicamente para cada dominio</p>
              </div>
              <div className="ml-glass--subtle p-3 rounded-lg">
                <h4 className="ml-heading-4 mb-1">Comprensión Contextual</h4>
                <p className="ml-text-caption">Mejor interpretación de requerimientos ambiguos</p>
              </div>
              <div className="ml-glass--subtle p-3 rounded-lg">
                <h4 className="ml-heading-4 mb-1">Aprendizaje Continuo</h4>
                <p className="ml-text-caption">Mejora basada en feedback del usuario</p>
              </div>
            </div>
          </div>

          <div className="ml-card ml-fade-in-up--delay-1">
            <div className="text-center mb-4">
              <Icon name="mobile-alt" className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="ml-heading-3">Multiplataforma</h3>
            </div>
            <div className="ml-space-y-3">
              <div className="ml-glass--subtle p-3 rounded-lg">
                <h4 className="ml-heading-4 mb-1">Apps Móviles Nativas</h4>
                <p className="ml-text-caption">iOS y Android desde descripciones</p>
              </div>
              <div className="ml-glass--subtle p-3 rounded-lg">
                <h4 className="ml-heading-4 mb-1">Aplicaciones Desktop</h4>
                <p className="ml-text-caption">Electron, Tauri y aplicaciones nativas</p>
              </div>
              <div className="ml-glass--subtle p-3 rounded-lg">
                <h4 className="ml-heading-4 mb-1">IoT y Embedded</h4>
                <p className="ml-text-caption">Código para dispositivos especializados</p>
              </div>
            </div>
          </div>

          <div className="ml-card ml-fade-in-up--delay-2">
            <div className="text-center mb-4">
              <Icon name="users" className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="ml-heading-3">Colaboración</h3>
            </div>
            <div className="ml-space-y-3">
              <div className="ml-glass--subtle p-3 rounded-lg">
                <h4 className="ml-heading-4 mb-1">Equipos Híbridos</h4>
                <p className="ml-text-caption">Vibe coders + desarrolladores tradicionales</p>
              </div>
              <div className="ml-glass--subtle p-3 rounded-lg">
                <h4 className="ml-heading-4 mb-1">Review Automático</h4>
                <p className="ml-text-caption">IA que revisa y mejora código generado</p>
              </div>
              <div className="ml-glass--subtle p-3 rounded-lg">
                <h4 className="ml-heading-4 mb-1">Versionado Inteligente</h4>
                <p className="ml-text-caption">Control de versiones basado en intención</p>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-glass--elevated p-8 rounded-xl">
          <h3 className="ml-heading-2 mb-6 text-center">
            <Icon name="timeline" className="w-8 h-8 inline mr-2 text-cyan-400" />
            Roadmap de Evolución
          </h3>
          
          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-400 to-purple-400 rounded-full"></div>
            
            <div className="ml-space-y-8">
              <div className="ml-flex items-center">
                <div className="ml-flex-1 text-right pr-8">
                  <h4 className="ml-heading-4 text-blue-400">2024-2025</h4>
                  <p className="ml-text-body">Herramientas actuales maduras</p>
                  <p className="ml-text-caption">Replit, Lovable, Bolt.new establecidos</p>
                </div>
                <div className="w-4 h-4 bg-blue-400 rounded-full border-4 border-white z-10"></div>
                <div className="ml-flex-1 pl-8">
                  <div className="ml-glass--subtle p-4 rounded-lg">
                    <p className="ml-text-caption">Estado actual: Prototipos y apps simples</p>
                  </div>
                </div>
              </div>
              
              <div className="ml-flex items-center">
                <div className="ml-flex-1 text-right pr-8">
                  <div className="ml-glass--subtle p-4 rounded-lg">
                    <p className="ml-text-caption">Mejor comprensión contextual</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-green-400 rounded-full border-4 border-white z-10"></div>
                <div className="ml-flex-1 pl-8">
                  <h4 className="ml-heading-4 text-green-400">2025-2026</h4>
                  <p className="ml-text-body">IA más especializada</p>
                  <p className="ml-text-caption">Modelos específicos por industria</p>
                </div>
              </div>
              
              <div className="ml-flex items-center">
                <div className="ml-flex-1 text-right pr-8">
                  <h4 className="ml-heading-4 text-purple-400">2026-2027</h4>
                  <p className="ml-text-body">Aplicaciones complejas</p>
                  <p className="ml-text-caption">Sistemas enterprise básicos</p>
                </div>
                <div className="w-4 h-4 bg-purple-400 rounded-full border-4 border-white z-10"></div>
                <div className="ml-flex-1 pl-8">
                  <div className="ml-glass--subtle p-4 rounded-lg">
                    <p className="ml-text-caption">Integración con infraestructura existente</p>
                  </div>
                </div>
              </div>
              
              <div className="ml-flex items-center">
                <div className="ml-flex-1 text-right pr-8">
                  <div className="ml-glass--subtle p-4 rounded-lg">
                    <p className="ml-text-caption">IA autónoma de principio a fin</p>
                  </div>
                </div>
                <div className="w-4 h-4 bg-orange-400 rounded-full border-4 border-white z-10"></div>
                <div className="ml-flex-1 pl-8">
                  <h4 className="ml-heading-4 text-orange-400">2027+</h4>
                  <p className="ml-text-body">Desarrollo autónomo</p>
                  <p className="ml-text-caption">Software que se actualiza solo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="ml-quote-professional">
          <p className="ml-text-body text-center">
            "El futuro no es humanos vs IA, sino humanos colaborando con IA para crear 
            software más accesible, más rápido y más innovador que nunca antes."
          </p>
        </div>
      </div>
    )
  }
];

export { vibeCodingSlides };
import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';
import {
  InteractiveRegressionDemo,
  MultipleRegressionDemo,
  InteractiveMetricsDemo,
  GradientDescentDemo,
  OverfittingDemo
} from '../components/InteractiveComponents';
import additionalSlidesData from './additionalSlidesData';
import paradigmasAprendizajeSlides from './paradigmasAprendizajeSlides';
import { iaGenerativaSlides } from './iaGenerativaSlides';
import { lowCodeNoCodeSlides } from './lowCodeNoCodeSlides';
import { agentesInteligentesSlides } from './agentesInteligentesSlides';
import { vibeCodingSlides } from './vibeCodingSlides';
import { n8nSlides } from './n8nSlides';

/**
 * Datos completos de la presentación - Inteligencia Artificial en los negocios. De los datos a la innovación
 * ESTRUCTURA COMPLETA ACTUALIZADA:
 * 1. Paradigmas de Aprendizaje (0-6): Inspiración cerebral, supervisado, no supervisado
 * 2. Introducción a IA/ML (7-16): Conceptos generales, tipos de IA, casos de negocio
 * 3. IA Generativa (17-35): Fundamentos, LLMs, RAG, prompting, aplicaciones cotidianas
 * 4. Low-Code vs No-Code (36-41): Democratización del desarrollo, plataformas, comparación
 * 5. Agentes Inteligentes (42-60): Sistemas autónomos, MCP, n8n, automatización
 * 6. Vibe Coding (61-68): Desarrollo asistido por IA, herramientas, casos de uso
 * 7. n8n Workflow Automation (69-81): Curso completo de teoría y práctica
 * 8. Aspectos Técnicos (82+): Demos interactivos y aplicaciones adicionales
 */

// Función para renumerar slides y ajustar IDs
const renumberSlides = (slides, startId = 0) => {
  return slides.map((slide, index) => ({
    ...slide,
    id: startId + index
  }));
};

const baseSlidesData = [
  // ===== INTRODUCCIÓN CONCEPTUAL A IA/ML =====
  
  // Slide 7: Portada (ahora movida después de paradigmas)
  {
    id: 7,
    type: 'cover',
    title: 'Inteligencia Artificial en los negocios. De los datos a la innovación',
    subtitle: 'Aplicaciones Técnicas y Casos de Negocio',
    content: (
      <div className="ml-text-center ml-space-y-8 fade-in">
        <div className="ml-flex ml-flex--center mb-8">
          <div className="relative">
            <Icon name="brain" className="w-32 h-32 text-blue-400 pulse-animation" />
            <div className="absolute -inset-4 border-2 border-blue-300 rounded-full animate-spin opacity-30"></div>
          </div>
        </div>
        <p className="ml-heading-2">Módulo Técnico - Clase 2</p>
        <div className="ml-grid ml-grid--3 mt-12 max-w-4xl mx-auto">
          <ClickableInfo 
            definitionKey="regresion_simple"
            className="ml-card ml-card--interactive ml-text-center"
          >
            <Icon name="chart-line" className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">Regresión Lineal</h3>
            <p className="ml-text-caption">Fundamentos matemáticos y aplicaciones prácticas</p>
          </ClickableInfo>
          <ClickableInfo 
            definitionKey="ia_predictiva"
            className="ml-card ml-card--interactive ml-text-center"
          >
            <Icon name="robot" className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">Tipos de IA</h3>
            <p className="ml-text-caption">Predictiva, Generativa y Agentes</p>
          </ClickableInfo>
          <ClickableInfo 
            definitionKey="market_pull"
            className="ml-card ml-card--interactive ml-text-center"
          >
            <Icon name="briefcase" className="w-12 h-12 text-purple-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">Casos de Negocio</h3>
            <p className="ml-text-caption">Aplicaciones reales en la industria</p>
          </ClickableInfo>
        </div>
        
        {/* Indicador de interactividad */}
        <div className="mt-12 ml-glass inline-block">
          <p className="ml-text-body">
            <Icon name="mouse-pointer" className="w-5 h-5 inline mr-2 text-yellow-400" />
            <strong>¡Presentación Interactiva!</strong> Haz clic en las tarjetas para más información
          </p>
        </div>
      </div>
    )
  },

  // Slide 8: ¿Qué es la IA?
  {
    id: 8,
    type: 'content',
    title: '¿Qué es la Inteligencia Artificial?',
    content: (
      <div className="space-y-8 fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClickableInfo
            title="Inteligencia Artificial - Definición Completa"
            content={
              <div>
                <p><strong>IA (Inteligencia Artificial)</strong> es el campo de la informática que se enfoca en crear sistemas capaces de realizar tareas que requieren inteligencia humana.</p>
                
                <h4>Historia y evolución:</h4>
                <ul>
                  <li>• <strong>1950s:</strong> Alan Turing propone el Test de Turing</li>
                  <li>• <strong>1960s-70s:</strong> Primeros sistemas expertos</li>
                  <li>• <strong>1980s-90s:</strong> Redes neuronales y aprendizaje</li>
                  <li>• <strong>2010s-ahora:</strong> Deep Learning y Big Data</li>
                </ul>
                
                <h4>Aplicaciones actuales:</h4>
                <ul>
                  <li>🎯 <strong>Reconocimiento:</strong> Imágenes, voz, texto</li>
                  <li>🤖 <strong>Automatización:</strong> Procesos y decisiones</li>
                  <li>🎮 <strong>Entretenimiento:</strong> Videojuegos, recomendaciones</li>
                  <li>🏥 <strong>Medicina:</strong> Diagnósticos, descubrimiento de fármacos</li>
                </ul>
              </div>
            }
            type="ai"
            className="glass-effect p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Icon name="brain" className="w-10 h-10 text-blue-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Inteligencia Artificial</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              Desarrollo de sistemas informáticos capaces de realizar tareas que normalmente requieren inteligencia humana.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Icon name="eye" className="w-5 h-5 mr-3 text-blue-300" />
                <span>Percepción visual</span>
              </div>
              <div className="flex items-center text-white/80">
                <Icon name="microphone" className="w-5 h-5 mr-3 text-blue-300" />
                <span>Reconocimiento del habla</span>
              </div>
              <div className="flex items-center text-white/80">
                <Icon name="chess" className="w-5 h-5 mr-3 text-blue-300" />
                <span>Toma de decisiones</span>
              </div>
              <div className="flex items-center text-white/80">
                <Icon name="language" className="w-5 h-5 mr-3 text-blue-300" />
                <span>Traducción entre idiomas</span>
              </div>
            </div>
          </ClickableInfo>

          <ClickableInfo
            title="Machine Learning - Definición Completa"
            content={
              <div>
                <p><strong>Machine Learning</strong> es la subdisciplina de IA que se enfoca en algoritmos que mejoran automáticamente a través de la experiencia.</p>
                
                <h4>Tipos principales:</h4>
                <ul>
                  <li>• <strong>Supervisado:</strong> Aprende con ejemplos etiquetados</li>
                  <li>• <strong>No supervisado:</strong> Encuentra patrones sin etiquetas</li>
                  <li>• <strong>Por refuerzo:</strong> Aprende a través de recompensas</li>
                </ul>
                
                <h4>Proceso típico de ML:</h4>
                <ol>
                  <li>1. <strong>Recolección de datos</strong></li>
                  <li>2. <strong>Preprocesamiento y limpieza</strong></li>
                  <li>3. <strong>Selección del modelo</strong></li>
                  <li>4. <strong>Entrenamiento</strong></li>
                  <li>5. <strong>Evaluación y validación</strong></li>
                  <li>6. <strong>Despliegue en producción</strong></li>
                </ol>
                
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p><strong>La clave:</strong> Los algoritmos mejoran automáticamente con más datos, sin necesidad de programación explícita para cada caso.</p>
                </div>
              </div>
            }
            type="ml"
            className="glass-effect p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Icon name="cogs" className="w-10 h-10 text-green-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Machine Learning</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-4">
              Subdisciplina que se centra en crear algoritmos que permiten a las máquinas aprender de datos sin programación explícita.
            </p>
            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Icon name="database" className="w-5 h-5 mr-3 text-green-300" />
                <span>Aprendizaje basado en datos</span>
              </div>
              <div className="flex items-center text-white/80">
                <Icon name="chart-bar" className="w-5 h-5 mr-3 text-green-300" />
                <span>Modelos estadísticos</span>
              </div>
              <div className="flex items-center text-white/80">
                <Icon name="sync" className="w-5 h-5 mr-3 text-green-300" />
                <span>Mejora automática del rendimiento</span>
              </div>
            </div>
          </ClickableInfo>
        </div>

        <div className="text-center">
          <div className="inline-block glass-effect p-6 rounded-xl">
            <p className="text-xl text-white/90">
              <strong>IA</strong> es el campo más amplio → <strong>ML</strong> es una técnica específica dentro de IA
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 9: Tipos de IA por función
  {
    id: 9,
    type: 'content',
    title: 'Tipos de IA según su Función',
    content: (
      <div className="space-y-8 fade-in">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ClickableInfo 
            definitionKey="ia_predictiva"
            className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="text-center mb-6">
              <Icon name="chart-line" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">IA Predictiva</h3>
            </div>
            <p className="text-white/90 text-center mb-6">
              Analiza datos históricos y predice resultados futuros
            </p>
            <div className="space-y-3">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">📊 Predicción de ventas</p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🏠 Precios de vivienda</p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">📈 Análisis de riesgo</p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🌡️ Pronóstico del tiempo</p>
              </div>
            </div>
          </ClickableInfo>

          <ClickableInfo 
            definitionKey="ia_generativa"
            className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="text-center mb-6">
              <Icon name="magic" className="w-16 h-16 text-purple-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">IA Generativa</h3>
            </div>
            <p className="text-white/90 text-center mb-6">
              Crea contenido nuevo como texto, imágenes o música
            </p>
            <div className="space-y-3">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">✍️ Generación de texto</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🎨 Creación de imágenes</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🎵 Composición musical</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">💻 Generación de código</p>
              </div>
            </div>
          </ClickableInfo>

          <ClickableInfo 
            definitionKey="ia_agentes"
            className="glass-effect p-8 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="text-center mb-6">
              <Icon name="user-cog" className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">IA Agentes</h3>
            </div>
            <p className="text-white/90 text-center mb-6">
              Toma decisiones y realiza acciones de forma autónoma
            </p>
            <div className="space-y-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🤖 Chatbots inteligentes</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🚗 Vehículos autónomos</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🏭 Sistemas de control</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🎮 NPCs en videojuegos</p>
              </div>
            </div>
          </ClickableInfo>
        </div>
      </div>
    )
  },

  // Slide 10: Niveles de inteligencia
  {
    id: 10,
    type: 'content',
    title: 'Tipos de IA por Niveles de Inteligencia',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <p className="text-xl text-white">
              <strong>Evolución de la Inteligencia Artificial</strong>
            </p>
          </div>
        </div>

        <div className="space-y-6">
          <ClickableInfo
            definitionKey="ia_estrecha"
            className="glass-effect p-8 rounded-xl border-l-4 border-green-400"
          >
            <div className="flex items-center mb-4">
              <Icon name="target" className="w-8 h-8 text-green-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">IA Estrecha (ANI)</h3>
              <span className="ml-auto bg-green-500 text-white px-3 py-1 rounded-full text-sm">ACTUAL</span>
            </div>
            <p className="text-white/90 text-lg mb-4">
              Diseñada para tareas específicas. Todos los sistemas actuales son IA estrecha.
            </p>
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="bg-green-500/20 p-3 rounded-lg text-center">
                <p className="text-white/80 text-sm">🔍 Reconocimiento facial</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg text-center">
                <p className="text-white/80 text-sm">🗣️ Asistentes de voz</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg text-center">
                <p className="text-white/80 text-sm">📧 Filtros de spam</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg text-center">
                <p className="text-white/80 text-sm">🎯 Sistemas de recomendación</p>
              </div>
            </div>
          </ClickableInfo>

          <ClickableInfo
            definitionKey="ia_general"
            className="glass-effect p-8 rounded-xl border-l-4 border-yellow-400"
          >
            <div className="flex items-center mb-4">
              <Icon name="brain" className="w-8 h-8 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">IA General (AGI)</h3>
              <span className="ml-auto bg-yellow-500 text-black px-3 py-1 rounded-full text-sm">TEÓRICA</span>
            </div>
            <p className="text-white/90 text-lg">
              Igualaría la inteligencia humana en cualquier tarea. Capacidad de aprender y adaptarse sin intervención humana.
            </p>
          </ClickableInfo>

          <ClickableInfo
            definitionKey="superinteligencia"
            className="glass-effect p-8 rounded-xl border-l-4 border-red-400"
          >
            <div className="flex items-center mb-4">
              <Icon name="rocket" className="w-8 h-8 text-red-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Superinteligencia Artificial</h3>
              <span className="ml-auto bg-red-500 text-white px-3 py-1 rounded-full text-sm">TEÓRICA</span>
            </div>
            <p className="text-white/90 text-lg">
              Superaría ampliamente la inteligencia humana. Plantea desafíos éticos y de seguridad significativos.
            </p>
          </ClickableInfo>
        </div>
      </div>
    )
  },

  // Slide 11: Machine Learning en los Negocios
  {
    id: 11,
    type: 'content',
    title: 'Machine Learning en los Negocios',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">¿Por qué Machine Learning?</h3>
            <p className="text-white/80">Transformando datos en valor empresarial</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ClickableInfo
              definitionKey="market_pull"
              className="glass-effect p-6 rounded-xl"
            >
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Icon name="bullseye" className="w-6 h-6 mr-3 text-blue-400" />
                Tirón del Mercado vs Empuje Tecnológico
              </h4>
              <div className="space-y-4">
                <div className="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-100 font-medium">✅ Enfoque Correcto</p>
                  <p className="text-white/80">¿Qué necesito para resolver este problema?</p>
                </div>
                <div className="bg-red-500/20 p-4 rounded-lg border-l-4 border-red-400">
                  <p className="text-red-100 font-medium">❌ Enfoque Incorrecto</p>
                  <p className="text-white/80">Quiero usar esta técnica nueva</p>
                </div>
              </div>
            </ClickableInfo>

            <ClickableInfo
              definitionKey="pareto_principle"
              className="glass-effect p-6 rounded-xl"
            >
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <Icon name="chart-pie" className="w-6 h-6 mr-3 text-purple-400" />
                Principio de Pareto
              </h4>
              <p className="text-white/90 text-lg">
                <strong>80% del problema</strong> se puede resolver con <strong>20% del esfuerzo</strong>
              </p>
              <p className="text-white/70 mt-2">
                Lo excelente es enemigo de lo bueno
              </p>
            </ClickableInfo>
          </div>

          <ClickableInfo
            definitionKey="data_teams"
            className="glass-effect p-8 rounded-xl"
          >
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Icon name="users" className="w-6 h-6 mr-3 text-green-400" />
              Equipos de Data Products
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-500/20 p-3 rounded-lg text-center">
                <Icon name="database" className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <p className="text-white text-sm">Ingeniero de Datos</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg text-center">
                <Icon name="brain" className="w-8 h-8 text-green-300 mx-auto mb-2" />
                <p className="text-white text-sm">Data Scientist</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg text-center">
                <Icon name="cogs" className="w-8 h-8 text-purple-300 mx-auto mb-2" />
                <p className="text-white text-sm">ML Engineer</p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded-lg text-center">
                <Icon name="code" className="w-8 h-8 text-orange-300 mx-auto mb-2" />
                <p className="text-white text-sm">Backend/Frontend</p>
              </div>
              <div className="bg-pink-500/20 p-3 rounded-lg text-center">
                <Icon name="palette" className="w-8 h-8 text-pink-300 mx-auto mb-2" />
                <p className="text-white text-sm">UX Designer</p>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-lg text-center">
                <Icon name="lightbulb" className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
                <p className="text-white text-sm">Product Owner</p>
              </div>
            </div>
          </ClickableInfo>
        </div>
      </div>
    )
  },

  // Slide 12: Caso de negocio
  {
    id: 12,
    type: 'content',
    title: 'Caso de Negocio: Predicción de Precios de Vivienda',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <Icon name="home" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <p className="text-xl text-white">
              ¿Cómo modelar la relación entre características de una vivienda y su precio?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Icon name="bullseye" className="w-8 h-8 mr-3 text-green-400" />
              Objetivos del Proyecto
            </h3>
            <div className="space-y-4">
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">¿Qué quiero lograr?</h4>
                <p className="text-white/80">Encontrar la relación entre el precio de la vivienda y el número de habitaciones</p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">¿Cómo medir el éxito?</h4>
                <p className="text-white/80">Predicciones precisas para diferentes números de habitaciones</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Icon name="chart-bar" className="w-8 h-8 mr-3 text-purple-400" />
              Datos de Ejemplo
            </h3>
            <div className="space-y-3">
              <div className="bg-white/10 p-3 rounded-lg flex justify-between">
                <span className="text-white/80">2 habitaciones</span>
                <span className="text-green-300 font-semibold">$25,000</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex justify-between">
                <span className="text-white/80">3 habitaciones</span>
                <span className="text-green-300 font-semibold">$35,000</span>
              </div>
              <div className="bg-white/10 p-3 rounded-lg flex justify-between">
                <span className="text-white/80">3 habitaciones</span>
                <span className="text-green-300 font-semibold">$28,000</span>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/90 text-center">
                  <strong>Observación:</strong> Existe una relación directa entre habitaciones y precio
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <div className="text-center">
            <Icon name="lightbulb" className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Insight Clave</h3>
            <p className="text-white/90 text-lg">
              A mayor número de habitaciones → Mayor precio de la vivienda
            </p>
            <p className="text-white/70 mt-2">
              Esto se puede modelar con una <strong>línea recta</strong> = Regresión Lineal
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 13: Fundamentos de Regresión Lineal
  {
    id: 13,
    type: 'content',
    title: 'Fundamentos de Regresión Lineal',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <Icon name="chart-line" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">La ecuación de una recta</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClickableInfo
            definitionKey="regresion_simple"
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Ecuación Básica</h3>
            <div className="bg-white p-4 rounded-lg text-center mb-6">
              <p className="text-2xl font-bold text-gray-800">y = w₀ + w₁x</p>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">w₀ (Intercepto)</h4>
                <p className="text-white/80">Punto donde la recta corta el eje Y</p>
                <p className="text-white/70 text-sm">En nuestro caso: precio base de la vivienda</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">w₁ (Pendiente)</h4>
                <p className="text-white/80">Inclinación de la recta</p>
                <p className="text-white/70 text-sm">Cuánto aumenta el precio por cada habitación adicional</p>
              </div>
            </div>
          </ClickableInfo>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Interpretación Práctica</h3>
            <div className="space-y-4">
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Variables</h4>
                <p className="text-white/80"><strong>x:</strong> Número de habitaciones</p>
                <p className="text-white/80"><strong>y:</strong> Precio de la vivienda</p>
              </div>
              <div className="bg-orange-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Ejemplo</h4>
                <p className="text-white/80">Si w₀ = 10,000 y w₁ = 8,000:</p>
                <p className="text-white/70">Para 3 habitaciones: $10,000 + $8,000 × 3 = $34,000</p>
              </div>
              <div className="bg-yellow-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Objetivo</h4>
                <p className="text-white/80">Encontrar los mejores valores de w₀ y w₁ que se ajusten a nuestros datos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white mb-4">🎯 Meta del Machine Learning</h3>
            <p className="text-white/90 text-lg">
              Encontrar automáticamente los parámetros w₀ y w₁ que mejor se ajusten a los datos
            </p>
            <p className="text-white/70 mt-2">
              Sin programación explícita → Aprendizaje automático
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 14: Regresión Lineal Múltiple con Interactividad
  {
    id: 14,
    type: 'content',
    title: 'Regresión Lineal Múltiple',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">La realidad es más compleja</h3>
            <p className="text-white/80">Múltiples factores afectan el precio de una vivienda</p>
          </div>
        </div>

        <MultipleRegressionDemo />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClickableInfo
            definitionKey="regresion_multiple"
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Variables Múltiples</h3>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-3 rounded-lg flex items-center">
                <Icon name="bed" className="w-6 h-6 text-blue-300 mr-3" />
                <span className="text-white">x₁ = Número de habitaciones</span>
              </div>
              <div className="bg-red-500/20 p-3 rounded-lg flex items-center">
                <Icon name="shield-alt" className="w-6 h-6 text-red-300 mr-3" />
                <span className="text-white">x₂ = Seguridad del barrio</span>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg flex items-center">
                <Icon name="building" className="w-6 h-6 text-green-300 mr-3" />
                <span className="text-white">x₃ = Cercanía a centros comerciales</span>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg flex items-center">
                <Icon name="calendar" className="w-6 h-6 text-purple-300 mr-3" />
                <span className="text-white">x₄ = Antigüedad de la construcción</span>
              </div>
            </div>
          </ClickableInfo>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Nueva Ecuación</h3>
            <div className="bg-white p-4 rounded-lg text-center mb-6">
              <p className="text-lg font-bold text-gray-800">y = w₀ + w₁x₁ + w₂x₂ + w₃x₃ + ... + wₙxₙ</p>
            </div>
            <div className="bg-yellow-500/20 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-2">Interpretación Geométrica</h4>
              <p className="text-white/80">• 2 variables → Línea recta</p>
              <p className="text-white/80">• 3 variables → Plano</p>
              <p className="text-white/80">• 4+ variables → Hiperplano</p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Representación Vectorial</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Forma Individual</h4>
              <div className="bg-white p-4 rounded-lg text-sm">
                <p>y₁ = w₀ + w₁x₁₁ + w₂x₁₂ + w₃x₁₃ + ...</p>
                <p>y₂ = w₀ + w₁x₂₁ + w₂x₂₂ + w₃x₂₃ + ...</p>
                <p>y₃ = w₀ + w₁x₃₁ + w₂x₃₂ + w₃x₃₃ + ...</p>
                <p>...</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Forma Vectorial</h4>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-2xl font-bold text-gray-800">Y = XW</p>
              </div>
              <div className="mt-4 text-white/80 text-sm">
                <p>• <strong>Y:</strong> Vector de precios</p>
                <p>• <strong>X:</strong> Matriz de características</p>
                <p>• <strong>W:</strong> Vector de parámetros</p>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-500/20 p-4 rounded-lg">
            <p className="text-white/90 text-center">
              <Icon name="microchip" className="w-5 h-5 inline mr-2" />
              <strong>Ventaja:</strong> Las GPUs están optimizadas para procesamiento de matrices
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 15: Método de Cuadrados Ordinarios con Interactividad
  {
    id: 15,
    type: 'content',
    title: 'Método de Cuadrados Ordinarios',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">¿Cómo encontrar la mejor línea?</h3>
            <p className="text-white/80">Minimizando el error entre predicciones y valores reales</p>
          </div>
        </div>

        <InteractiveRegressionDemo />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Concepto del Error</h3>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Error Individual</h4>
                <div className="bg-white p-3 rounded-lg text-center">
                  <p className="text-lg font-bold text-gray-800">Error = (y_real - y_predicho)</p>
                </div>
                <p className="text-white/80 text-sm mt-2">Para cada punto de datos</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">¿Por qué elevar al cuadrado?</h4>
                <p className="text-white/80">• Evita que errores positivos y negativos se cancelen</p>
                <p className="text-white/80">• Penaliza más los errores grandes</p>
                <p className="text-white/80">• Hace la función matemáticamente tratable</p>
              </div>
            </div>
          </div>

          <ClickableInfo
            definitionKey="cuadrados_ordinarios"
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Función de Costo</h3>
            <div className="bg-white p-4 rounded-lg text-center mb-6">
              <p className="text-xl font-bold text-gray-800">L(β) = Σ(y_i - (β₀ + β₁x_i))²</p>
            </div>
            <div className="space-y-3">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white/80"><strong>β₀:</strong> Intercepto (altura inicial)</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white/80"><strong>β₁:</strong> Pendiente (inclinación)</p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <p className="text-white/80"><strong>Objetivo:</strong> Encontrar β₀ y β₁ que minimicen L(β)</p>
              </div>
            </div>
          </ClickableInfo>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Solución Analítica</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">Proceso Matemático</h4>
              <div className="space-y-3 text-white/80">
                <p>1. Derivar L(β) respecto a β₀ y β₁</p>
                <p>2. Igualar ambas derivadas a cero</p>
                <p>3. Resolver el sistema de ecuaciones</p>
                <p>4. Obtener fórmula cerrada</p>
              </div>
            </div>
            <div>
              <h4 className="text-white font-semibold mb-4">Fórmula Final</h4>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-xl font-bold text-gray-800">W = (X'X)⁻¹X'Y</p>
              </div>
              <p className="text-white/70 text-sm mt-2 text-center">
                Donde X' = X transpuesta
              </p>
            </div>
          </div>
          
          <div className="mt-6 bg-green-500/20 p-4 rounded-lg">
            <p className="text-white/90 text-center">
              <Icon name="check" className="w-5 h-5 inline mr-2" />
              <strong>Ventaja:</strong> Solución exacta en un solo paso (no iterativo)
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 16: Descenso de Gradiente
  {
    id: 16,
    type: 'content',
    title: 'Descenso de Gradiente: Alternativa Iterativa',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">¿Qué pasa cuando los datos son muy grandes?</h3>
            <p className="text-white/80">El método de cuadrados ordinarios puede ser lento o imposible</p>
          </div>
        </div>

        <GradientDescentDemo />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Comparación de Métodos</h3>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Cuadrados Ordinarios</h4>
                <div className="text-white/80 text-sm space-y-1">
                  <p>✅ Solución exacta en un paso</p>
                  <p>✅ No requiere hiperparámetros</p>
                  <p>❌ Lento para datasets grandes</p>
                  <p>❌ Requiere invertir matriz</p>
                </div>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Descenso de Gradiente</h4>
                <div className="text-white/80 text-sm space-y-1">
                  <p>✅ Escalable a millones de datos</p>
                  <p>✅ Memoria eficiente</p>
                  <p>❌ Requiere tuning de learning rate</p>
                  <p>❌ Puede converger lentamente</p>
                </div>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Concepto Clave</h3>
            <div className="space-y-4">
              <div className="bg-orange-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Analogía del Montañista</h4>
                <p className="text-white/80 text-sm">Imagina que estás en una montaña con los ojos vendados y quieres llegar al valle. El gradiente te dice hacia dónde está la pendiente más empinada hacia arriba, así que vas en dirección opuesta.</p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Learning Rate</h4>
                <p className="text-white/80 text-sm">• Muy alto: Puedes "saltar" el mínimo</p>
                <p className="text-white/80 text-sm">• Muy bajo: Tardas mucho en converger</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Continúo agregando más slides...
  // Por razones de espacio, continuaré en el siguiente bloque
];

// Renumerar slides de paradigmas para que vayan primero (0-6)
const paradigmasRenumbered = renumberSlides(paradigmasAprendizajeSlides, 0);

// Renumerar slides de IA Generativa después del contenido base
const iaGenerativaRenumbered = renumberSlides(iaGenerativaSlides, baseSlidesData.length + paradigmasRenumbered.length);

// Renumerar slides de Low-Code/No-Code después de IA Generativa
const lowCodeNoCodeRenumbered = renumberSlides(lowCodeNoCodeSlides, baseSlidesData.length + paradigmasRenumbered.length + iaGenerativaSlides.length);

// Renumerar slides de Agentes Inteligentes después de Low-Code/No-Code
const agentesInteligentesRenumbered = renumberSlides(agentesInteligentesSlides, baseSlidesData.length + paradigmasRenumbered.length + iaGenerativaSlides.length + lowCodeNoCodeSlides.length);

// Renumerar slides de Vibe Coding después de Agentes Inteligentes
const vibeCodingRenumbered = renumberSlides(vibeCodingSlides, baseSlidesData.length + paradigmasRenumbered.length + iaGenerativaSlides.length + lowCodeNoCodeSlides.length + agentesInteligentesSlides.length);

// Renumerar slides de n8n después de Vibe Coding
const n8nRenumbered = renumberSlides(n8nSlides, baseSlidesData.length + paradigmasRenumbered.length + iaGenerativaSlides.length + lowCodeNoCodeSlides.length + agentesInteligentesSlides.length + vibeCodingSlides.length);

// Renumerar slides adicionales para que sigan después
const additionalRenumbered = renumberSlides(additionalSlidesData, baseSlidesData.length + paradigmasRenumbered.length + iaGenerativaSlides.length + lowCodeNoCodeSlides.length + agentesInteligentesSlides.length + vibeCodingSlides.length + n8nSlides.length);

// Combinar todos los slides en el orden correcto:
// 1. Paradigmas de Aprendizaje (0-6)
// 2. Introducción IA/ML y Casos de Negocio (7-16) 
// 3. IA Generativa (17-35)
// 4. Low-Code vs No-Code (36-41)
// 5. Agentes Inteligentes (42-60)
// 6. Vibe Coding (61-68)
// 7. n8n Workflow Automation (69-81)
// 8. Aspectos Técnicos Adicionales (82+)
export const slidesData = [...paradigmasRenumbered, ...baseSlidesData, ...iaGenerativaRenumbered, ...lowCodeNoCodeRenumbered, ...agentesInteligentesRenumbered, ...vibeCodingRenumbered, ...n8nRenumbered, ...additionalRenumbered];

// Exportar también metadata útil
export const presentationMetadata = {
  title: "Inteligencia Artificial en los negocios. De los datos a la innovación",
  subtitle: "Del Cerebro a la Innovación",
  totalSlides: paradigmasAprendizajeSlides.length + baseSlidesData.length + iaGenerativaSlides.length + lowCodeNoCodeSlides.length + agentesInteligentesSlides.length + vibeCodingSlides.length + n8nSlides.length + additionalSlidesData.length,
  
  sections: {
    paradigmas: {
      name: "Paradigmas de Aprendizaje",
      slides: [0, 6], // Slides 0-6
      description: "Inspiración cerebral y fundamentos del aprendizaje supervisado/no supervisado",
      subsections: [
        { name: "El Cerebro: Inspiración para el Aprendizaje Artificial", slide: 0 },
        { name: "Paradigmas de Aprendizaje: Los Mecanismos Fundamentales", slide: 1 },
        { name: "Aprendizaje Supervisado: Aprender con un Maestro", slide: 2 },
        { name: "Aprendizaje Supervisado: Casos Impresionantes", slide: 3 },
        { name: "Aprendizaje No Supervisado: Descubrir lo Oculto", slide: 4 },
        { name: "Aprendizaje No Supervisado: El Futuro de la IA", slide: 5 },
        { name: "Comparación Final: ¿Cuándo Usar Cada Paradigma?", slide: 6 }
      ]
    },
    conceptual: {
      name: "Introducción a IA/ML", 
      slides: [7, 16], // Slides 7-16
      description: "Conceptos generales, tipos de IA y casos de negocio",
      subsections: [
        { name: "Fundamentos de IA", slide: 7 },
        { name: "¿Qué es la Inteligencia Artificial?", slide: 8 },
        { name: "Tipos de IA según su Función", slide: 9 },
        { name: "Tipos de IA por Niveles de Inteligencia", slide: 10 },
        { name: "Machine Learning en los Negocios", slide: 11 },
        { name: "Caso de Negocio: Predicción de Precios de Vivienda", slide: 12 },
        { name: "Fundamentos de Regresión Lineal", slide: 13 },
        { name: "Regresión Lineal Múltiple", slide: 14 },
        { name: "Método de Cuadrados Ordinarios", slide: 15 },
        { name: "Descenso de Gradiente: Alternativa Iterativa", slide: 16 }
      ]
    },
    iaGenerativa: {
      name: "IA Generativa",
      slides: [17, 35], // Slides 17-35 (ampliado para incluir todos los contenidos)
      description: "Fundamentos, Prompting, LLMs, RAG, optimización y aplicaciones cotidianas",
      subsections: [
        { name: "Inteligencia Artificial Generativa", slide: 17 },
        { name: "¿Qué es la Inteligencia Artificial Generativa?", slide: 18 },
        { name: "Modelo Mental del Recién Graduado", slide: 19 },
        { name: "Prompting: El Arte de Comunicarse con la IA", slide: 20 },
        { name: "Fórmula de Prompting", slide: 21 },
        { name: "Principios de Prompt Engineering", slide: 22 },
        { name: "Técnicas Avanzadas de Prompting", slide: 23 },
        { name: "Herramientas Avanzadas de ChatGPT", slide: 24 },
        { name: "Practica con Prompting", slide: 25 },
        { name: "Caso Práctico: Optimización de Campañas con IA", slide: 26 },
        { name: "Ejemplo Práctico: Lanzamiento de Smartphone", slide: 27 },
        { name: "Categorización de Tareas LLM", slide: 28 },
        { name: "RAG: Generación Aumentada por Recuperación", slide: 29 },
        { name: "Demo: RAG en Acción", slide: 30 },
        { name: "Optimización de LLMs: RAG vs Fine-tuning vs Prompt Engineering", slide: 31 },
        { name: "Ciclo de Vida de Proyectos de IA Generativa", slide: 32 },
        { name: "IA Generativa en tu Día a Día", slide: 33 },
        { name: "Casos de Éxito y el Futuro de la IA Generativa", slide: 34 }
      ]
    },
    lowCodeNoCode: {
      name: "Low-Code vs No-Code",
      slides: [36, 41], // Slides 36-41
      description: "Democratización del desarrollo, plataformas, comparación interactiva",
      subsections: [
        { name: "Low-Code vs No-Code", slide: 36 },
        { name: "Definiciones Fundamentales", slide: 37 },
        { name: "Comparación Interactiva", slide: 38 },
        { name: "Ventajas y Casos de Uso", slide: 39 },
        { name: "Ejemplos de Plataformas", slide: 40 },
        { name: "¿Cuándo Usar Cada Enfoque?", slide: 41 }
      ]
    },
    agentesInteligentes: {
      name: "Agentes Inteligentes",
      slides: [42, 60], // Slides de Agentes Inteligentes (ajustado)
      description: "Sistemas autónomos, arquitecturas, MAS, MCP, n8n y automatización",
      subsections: [
        { name: "Agentes Inteligentes y Sistemas Multiagente", slide: 42 },
        { name: "¿Qué es un Agente Inteligente?", slide: 43 },
        { name: "Ejemplos de Agentes en el Mundo Real", slide: 44 },
        { name: "Tipos de Agentes y Arquitecturas", slide: 45 },
        { name: "Arquitecturas Internas de Agentes", slide: 46 },
        { name: "Demo: Arquitecturas de Agentes en Acción", slide: 47 },
        { name: "Sistemas Multiagente (MAS)", slide: 48 },
        { name: "Comunicación y Coordinación en MAS", slide: 49 },
        { name: "Aplicaciones Reales de Sistemas Multiagente", slide: 50 },
        { name: "Demo: Sistemas Multiagente en Acción", slide: 51 },
        { name: "¿Qué es Model Context Protocol (MCP)?", slide: 52 },
        { name: "Aplicaciones Prácticas del MCP", slide: 53 },
        { name: "n8n: Automatización como Sistema de Agentes", slide: 54 },
        { name: "Ejemplo Práctico: Flujo Automatizado en n8n", slide: 55 },
        { name: "Demo: n8n como Sistema de Agentes", slide: 56 },
        { name: "Casos de Uso Avanzados con n8n", slide: 57 },
        { name: "Vibe Coding y Agentes: El Futuro del Desarrollo", slide: 58 },
        { name: "El Futuro de los Agentes y Consideraciones Éticas", slide: 59 },
        { name: "Recursos y Próximos Pasos", slide: 60 }
      ]
    },
    vibeCoding: {
      name: "Vibe Coding",
      slides: [61, 68], // Slides 61-68
      description: "Desarrollo asistido por IA, herramientas modernas y democratización del software",
      subsections: [
        { name: "Vibe Coding: El Futuro del Desarrollo", slide: 61 },
        { name: "¿Qué es Vibe Coding?", slide: 62 },
        { name: "¿Cómo Funciona Vibe Coding?", slide: 63 },
        { name: "Herramientas de Vibe Coding", slide: 64 },
        { name: "Casos de Uso y Ejemplos Reales", slide: 65 },
        { name: "Beneficios y Democratización del Desarrollo", slide: 66 },
        { name: "Limitaciones y Mejores Prácticas", slide: 67 },
        { name: "El Futuro del Vibe Coding", slide: 68 }
      ]
    },
    n8nWorkflows: {
      name: "n8n: Automatización de Workflows",
      slides: [69, 81], // Slides 69-81
      description: "Curso completo de n8n: teoría, práctica, casos de uso y proyectos reales",
      subsections: [
        { name: "n8n: Automatización de Workflows", slide: 69 },
        { name: "¿Qué es n8n?", slide: 70 },
        { name: "Conceptos Fundamentales de n8n", slide: 71 },
        { name: "Tipos de Nodos en n8n", slide: 72 },
        { name: "Explorador de Nodos n8n", slide: 73 },
        { name: "Flujo de Datos en n8n", slide: 74 },
        { name: "Top 10 Casos de Uso Más Populares", slide: 75 },
        { name: "Constructor de Flujos n8n", slide: 76 },
        { name: "Configuración de Credenciales", slide: 77 },
        { name: "Proyecto Práctico 1: Email Automático", slide: 78 },
        { name: "Proyecto Práctico 2: WhatsApp Bot con IA", slide: 79 },
        { name: "Buenas Prácticas y Debugging", slide: 80 },
        { name: "Recursos y Próximos Pasos", slide: 81 }
      ]
    },
    technical: {
      name: "Aspectos Técnicos",
      slides: [82, 87], // Slides técnicos movidos al final (corregido)
      description: "Métricas, overfitting y demos avanzados",
      subsections: [
        { name: "El Equilibrio Perfecto: Overfitting vs Underfitting", slide: 82 },
        { name: "Métricas y Evaluación de Modelos", slide: 83 },
        { name: "Metodología Práctica", slide: 84 },
        { name: "Ejemplo Práctico: Predicción de Precios", slide: 85 },
        { name: "Casos de Negocio: De la Teoría a la Práctica", slide: 86 },
        { name: "Conclusiones y Próximos Pasos", slide: 87 }
      ]
    }
  },
  
  interactiveSlides: [2, 4, 6, 14, 15, 16, 20, 22, 25, 38, 40, 47, 51, 56, 73, 76, 79], // Slides con componentes interactivos (incluye n8n)
  
  duration: {
    paradigmas: "45-60 minutos",
    conceptual: "45-60 minutos", 
    iaGenerativa: "120-180 minutos", // Ampliado para incluir todo el contenido de IA Generativa
    lowCodeNoCode: "60-90 minutos", // Nuevo capítulo sobre democratización del desarrollo
    agentesInteligentes: "120 minutos (2 horas)", // Capítulo completo
    vibeCoding: "90-120 minutos (1.5-2 horas)", // Capítulo sobre desarrollo asistido por IA
    n8nWorkflows: "180-240 minutos (3-4 horas)", // Curso completo de n8n
    technical: "30-45 minutos",
    total: "690-915 minutos (11.5-15.25 horas)"
  },
  
  features: [
    "🧠 Módulo completo: Paradigmas de Aprendizaje",
    "🎯 Ejemplos interactivos de aprendizaje supervisado/no supervisado", 
    "🤖 Capítulo completo de IA Generativa con RAG",
    "🛠️ Capítulo nuevo: Low-Code vs No-Code con comparación interactiva",
    "🤖 Capítulo completo de Agentes Inteligentes y Sistemas Multiagente",
    "✨ Capítulo completo de Vibe Coding: Desarrollo asistido por IA",
    "📊 Demos prácticos con casos reales",
    "💼 Aplicaciones cotidianas y empresariales",
    "🔄 Comparaciones dinámicas entre enfoques",
    "🎨 Visualizaciones de espacios latentes",
    "⚡ Enfoque técnico en regresión y métricas",
    "🚀 MCP, n8n y automatización inteligente",
    "🔮 Vibe Coding y desarrollo asistido por IA",
    "🛠️ Curso completo de n8n: teoría y práctica",
    "📧 Proyectos reales: Email automation y WhatsApp bots",
    "🎯 13 slides interactivos con demos funcionales"
  ],
  
  author: "Curso de IA para Profesionales",
  date: "10 de Junio del 2025",
  version: "8.0.0 - ML, IA Generativa, Low-Code/No-Code, Agentes Inteligentes y n8n Workflow Automation Completo"
};

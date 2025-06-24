import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';
import { promptingSlides } from './promptingSlides';

/**
 * Slides del capítulo de IA Generativa
 * Incluye fundamentos, RAG, y uso cotidiano
 */

const baseIaGenerativaSlides = [
  // Slide 0: Portada del capítulo
  {
    id: 0,
    type: 'cover',
    title: 'Inteligencia Artificial Generativa',
    subtitle: 'La Revolución de la Creación de Contenido',
    content: (
      <div className="text-center space-y-8 fade-in">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Icon name="magic" className="w-40 h-40 text-purple-400 pulse-animation" />
            <div className="absolute -inset-6 border-2 border-purple-300 rounded-full animate-ping opacity-20"></div>
            <div className="absolute -inset-4 border-2 border-blue-300 rounded-full animate-pulse opacity-30"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <p className="text-2xl text-white/90 mb-6">
            "La IA Generativa no es solo una herramienta más; es una tecnología de propósito general 
            que transformará cada aspecto de cómo trabajamos, creamos y aprendemos."
          </p>
          <div className="glass-effect p-6 rounded-xl inline-block">
            <p className="text-xl text-white/80">
              <Icon name="calendar" className="w-5 h-5 inline mr-2 text-yellow-400" />
              <strong>Noviembre 2022:</strong> ChatGPT marca el inicio de una nueva era
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto mt-12">
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <Icon name="brain" className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Fundamentos</h3>
            <p className="text-white/70 text-sm">Cómo funcionan los LLMs y qué pueden hacer</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <Icon name="database" className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">RAG</h3>
            <p className="text-white/70 text-sm">Aumentando capacidades con información externa</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <Icon name="users" className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">Uso Cotidiano</h3>
            <p className="text-white/70 text-sm">Aplicaciones prácticas en tu día a día</p>
          </div>
        </div>

        <div className="mt-12 bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/20">
          <p className="text-white/90 text-lg">
            <Icon name="dollar-sign" className="w-5 h-5 inline mr-2 text-green-400" />
            <strong>Impacto económico proyectado:</strong> 2.6 a 4.4 billones de dólares anuales
          </p>
        </div>
      </div>
    )
  },

  // Slide 1: ¿Qué es la IA Generativa?
  {
    id: 1,
    type: 'content',
    title: '¿Qué es la Inteligencia Artificial Generativa?',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">La diferencia fundamental</h3>
            <p className="text-white/80">Entre analizar lo existente y crear lo nuevo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClickableInfo
            title="IA de Análisis vs IA Generativa"
            content={
              <div>
                <h4 className="text-xl font-bold mb-4">🔍 IA de Análisis (Tradicional)</h4>
                <p className="text-gray-600 mb-4 italic">Analiza, clasifica y predice basándose en datos existentes</p>
                <ul className="space-y-2 mb-6">
                  <li>• <strong>Clasificación:</strong> Determina si un email es spam o no</li>
                  <li>• <strong>Predicción:</strong> Estima el precio de una casa</li>
                  <li>• <strong>Detección:</strong> Identifica objetos en imágenes</li>
                  <li>• <strong>Análisis:</strong> Extrae sentimientos de reseñas</li>
                </ul>
                
                <h4 className="text-xl font-bold mb-4">✨ IA Generativa (Creativa)</h4>
                <p className="text-gray-600 mb-4 italic">Crea contenido completamente nuevo e original</p>
                <ul className="space-y-2">
                  <li>• <strong>Creación de texto:</strong> Escribe artículos, emails, código</li>
                  <li>• <strong>Generación de imágenes:</strong> Crea arte y diseños originales</li>
                  <li>• <strong>Síntesis de audio:</strong> Produce música y voces</li>
                  <li>• <strong>Creación de video:</strong> Genera contenido audiovisual</li>
                </ul>
                
                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <p><strong>La diferencia clave:</strong> La IA de Análisis examina y categoriza información existente, mientras que la IA Generativa crea contenido completamente nuevo que nunca existió antes.</p>
                </div>
              </div>
            }
            className="glass-effect p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Icon name="search" className="w-10 h-10 text-yellow-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">IA de Análisis</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">📧 Filtro de Spam</h4>
                <p className="text-white/80 text-sm">
                  Analiza emails y los clasifica como spam o legítimos
                </p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🏠 Predicción de Precios</h4>
                <p className="text-white/80 text-sm">
                  Estima el valor de propiedades basándose en características
                </p>
              </div>
              <div className="bg-orange-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🔍 Reconocimiento Facial</h4>
                <p className="text-white/80 text-sm">
                  Identifica personas en fotografías
                </p>
              </div>
            </div>
          </ClickableInfo>

          <ClickableInfo
            title="Ejemplos de IA Generativa en Acción"
            content={
              <div>
                <h4 className="text-xl font-bold mb-4">Casos de Uso Reales</h4>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold">📝 Generación de Contenido</h5>
                    <p>Un periodista usa GPT-4 para generar un primer borrador de un artículo sobre cambio climático, ahorrando horas de escritura inicial.</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold">💻 Asistencia en Programación</h5>
                    <p>Un desarrollador describe en lenguaje natural: "necesito una función que ordene una lista de objetos por fecha" y GitHub Copilot genera el código completo.</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold">🎨 Diseño Creativo</h5>
                    <p>Un diseñador describe "un logo minimalista para una cafetería con elementos de naturaleza" y DALL-E genera múltiples opciones.</p>
                  </div>
                  
                  <div className="bg-orange-50 p-4 rounded-lg">
                    <h5 className="font-bold">🎓 Educación Personalizada</h5>
                    <p>Un estudiante pide: "Explícame la fotosíntesis como si fuera un niño de 8 años" y recibe una explicación adaptada a su nivel.</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <p><strong>Importante:</strong> En todos estos casos, el contenido generado es único y adaptado al contexto específico, no una simple búsqueda en una base de datos.</p>
                </div>
              </div>
            }
            className="glass-effect p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Icon name="magic" className="w-10 h-10 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">IA Generativa</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">✍️ Creación de Texto</h4>
                <p className="text-white/80 text-sm">
                  Escribe artículos, emails y código completamente nuevos
                </p>
              </div>
              <div className="bg-pink-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🎨 Generación de Imágenes</h4>
                <p className="text-white/80 text-sm">
                  Crea arte y diseños originales desde descripciones
                </p>
              </div>
              <div className="bg-yellow-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🎵 Composición Musical</h4>
                <p className="text-white/80 text-sm">
                  Produce melodías y canciones únicas
                </p>
              </div>
            </div>
          </ClickableInfo>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            🔄 Tecnología de Propósito General
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <Icon name="bolt" className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Como la Electricidad</h4>
              <p className="text-white/70 text-sm">
                Transforma todos los aspectos de la sociedad
              </p>
            </div>
            <div className="text-center">
              <Icon name="globe" className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Como Internet</h4>
              <p className="text-white/70 text-sm">
                Conecta y potencia nuevas posibilidades
              </p>
            </div>
            <div className="text-center">
              <Icon name="microchip" className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Como los Computadores</h4>
              <p className="text-white/70 text-sm">
                Amplifica las capacidades humanas
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2: Cómo funcionan los LLMs
  {
    id: 2,
    type: 'content',
    title: 'El Cerebro de la IA: Modelos de Lenguaje Grandes (LLMs)',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">El Modelo Mental del "Recién Graduado Universitario"</h3>
            <p className="text-white/80">Una forma simple de entender qué pueden hacer los LLMs</p>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🎓 ¿Cómo saber si un LLM puede hacer una tarea?
          </h3>
          
          <div className="bg-blue-500/20 p-6 rounded-xl mb-6">
            <h4 className="text-white font-bold text-lg mb-4 text-center">
              Pregunta clave: "¿Podría un recién graduado universitario hacer esta tarea?"
            </h4>
            <p className="text-white/90 text-center text-lg">
              Si la respuesta es <strong>SÍ</strong>, probablemente un LLM también puede hacerla
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4 text-center">
                <Icon name="check-circle" className="w-5 h-5 inline mr-2 text-green-400" />
                ✅ Tareas que SÍ puede hacer
              </h4>
              <div className="space-y-3">
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <p className="text-white/90 text-sm">
                    <strong>Determinar si un email es una queja</strong> - Solo necesita leer y clasificar
                  </p>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <p className="text-white/90 text-sm">
                    <strong>Evaluar si una reseña es positiva o negativa</strong> - Análisis de sentimientos básico
                  </p>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <p className="text-white/90 text-sm">
                    <strong>Escribir un comunicado de prensa</strong> - Con información del contexto proporcionado
                  </p>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <p className="text-white/90 text-sm">
                    <strong>Traducir texto entre idiomas</strong> - Conocimiento general disponible
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4 text-center">
                <Icon name="times-circle" className="w-5 h-5 inline mr-2 text-red-400" />
                ❌ Tareas que NO puede hacer bien
              </h4>
              <div className="space-y-3">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <p className="text-white/90 text-sm">
                    <strong>Escribir sobre tu empresa específica</strong> - Sin contexto interno
                  </p>
                </div>
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <p className="text-white/90 text-sm">
                    <strong>Acceder a información después de su entrenamiento</strong> - Corte de conocimiento
                  </p>
                </div>
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <p className="text-white/90 text-sm">
                    <strong>Analizar datos tabulares complejos</strong> - Mejor usar aprendizaje supervisado
                  </p>
                </div>
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <p className="text-white/90 text-sm">
                    <strong>Recordar conversaciones previas</strong> - Sin memoria entre sesiones
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">
              <Icon name="lightbulb" className="w-5 h-5 inline mr-2" />
              Características del "Recién Graduado"
            </h4>
            <ul className="space-y-1 text-white/80 text-sm">
              <li>• Tiene mucho conocimiento general (como el que está en internet)</li>
              <li>• NO tiene acceso a internet u otros recursos externos</li>
              <li>• NO tiene entrenamiento específico sobre tu empresa o negocio</li>
              <li>• NO tiene memoria de tareas o conversaciones previas</li>
            </ul>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            <Icon name="brain" className="w-6 h-6 inline mr-2 text-blue-400" />
            Cómo Funciona Internamente: La Predicción de Palabras
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">🔍 El Proceso Básico</h4>
              <div className="space-y-4">
                <div className="bg-blue-500/20 p-4 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">1. Predicción de la Siguiente Palabra</h5>
                  <p className="text-white/80 text-sm mb-2">
                    El modelo analiza el contexto y predice qué palabra es más probable que siga
                  </p>
                  <div className="bg-white/10 p-3 rounded">
                    <p className="text-white/90 font-mono text-sm">
                      "El cielo es" → <span className="text-blue-300">azul</span> (85% probabilidad)
                    </p>
                  </div>
                </div>

                <div className="bg-green-500/20 p-4 rounded-lg">
                  <h5 className="text-white font-semibold mb-2">2. Generación Iterativa</h5>
                  <p className="text-white/80 text-sm mb-2">
                    Repite el proceso para construir oraciones completas
                  </p>
                  <div className="bg-white/10 p-3 rounded space-y-1">
                    <p className="text-white/90 font-mono text-sm">
                      "El cielo es azul" → <span className="text-green-300">y</span>
                    </p>
                    <p className="text-white/90 font-mono text-sm">
                      "El cielo es azul y" → <span className="text-green-300">despejado</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">⚠️ Limitaciones Clave</h4>
              <div className="space-y-3">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <h5 className="text-orange-100 font-semibold text-sm">📅 Corte de Conocimiento</h5>
                  <p className="text-white/80 text-xs">
                    Solo sabe hasta su fecha de entrenamiento. No puede acceder a información nueva.
                  </p>
                </div>
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <h5 className="text-red-100 font-semibold text-sm">🤥 Alucinaciones</h5>
                  <p className="text-white/80 text-xs">
                    Puede inventar información que parece real pero es completamente falsa.
                  </p>
                </div>
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <h5 className="text-purple-100 font-semibold text-sm">📊 Datos Estructurados</h5>
                  <p className="text-white/80 text-xs">
                    No es bueno con tablas o datos numéricos complejos.
                  </p>
                </div>
                <div className="bg-yellow-500/20 p-3 rounded-lg">
                  <h5 className="text-yellow-100 font-semibold text-sm">📏 Longitud Limitada</h5>
                  <p className="text-white/80 text-xs">
                    Solo puede procesar una cantidad limitada de texto de entrada.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            <Icon name="layers" className="w-6 h-6 inline mr-2 text-purple-400" />
            Las Tres Categorías de Tareas que Dominan los LLMs
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-500/20 p-6 rounded-xl text-center">
              <Icon name="pen" className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-3">📝 ESCRIBIR</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• Generar ideas y conceptos</p>
                <p>• Redactar emails profesionales</p>
                <p>• Crear contenido original</p>
                <p>• Traducir entre idiomas</p>
                <p>• Mejorar y editar textos</p>
              </div>
              <div className="mt-4 bg-white/10 p-3 rounded">
                <p className="text-white/90 text-xs italic">
                  "Escribe un email solicitando una reunión para discutir el proyecto X"
                </p>
              </div>
            </div>

            <div className="bg-green-500/20 p-6 rounded-xl text-center">
              <Icon name="book-open" className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-3">📚 LEER</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• Resumir documentos largos</p>
                <p>• Extraer información clave</p>
                <p>• Clasificar sentimientos</p>
                <p>• Responder preguntas sobre textos</p>
                <p>• Analizar y categorizar contenido</p>
              </div>
              <div className="mt-4 bg-white/10 p-3 rounded">
                <p className="text-white/90 text-xs italic">
                  "Clasifica esta reseña como positiva o negativa: ¡El servicio fue excelente!"
                </p>
              </div>
            </div>

            <div className="bg-purple-500/20 p-6 rounded-xl text-center">
              <Icon name="message-circle" className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h4 className="text-white font-bold text-lg mb-3">💬 CHATEAR</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• Mantener conversaciones</p>
                <p>• Asistencia al cliente 24/7</p>
                <p>• Tutorías personalizadas</p>
                <p>• Compañero de pensamiento</p>
                <p>• Resolución de problemas</p>
              </div>
              <div className="mt-4 bg-white/10 p-3 rounded">
                <p className="text-white/90 text-xs italic">
                  "Hola, ¿cómo puedo ayudarte con tu pedido hoy?"
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl">
            <h4 className="text-white font-semibold mb-4 text-center">
              <Icon name="globe" className="w-5 h-5 inline mr-2" />
              Interfaces Web vs Aplicaciones de Software
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white/5 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-2">🌐 Interfaces Web</h5>
                <p className="text-white/80 text-sm mb-3">
                  Acceso directo a través del navegador
                </p>
                <div className="space-y-1 text-white/70 text-xs">
                  <p>• ChatGPT, Claude, Google Gemini</p>
                  <p>• Ideal para exploración y creatividad</p>
                  <p>• Conversaciones generales</p>
                  <p>• Tareas de escritura y brainstorming</p>
                </div>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-2">📱 Aplicaciones de Software</h5>
                <p className="text-white/80 text-sm mb-3">
                  Integrados en sistemas específicos
                </p>
                <div className="space-y-1 text-white/70 text-xs">
                  <p>• GitHub Copilot, Notion AI</p>
                  <p>• Funciones especializadas</p>
                  <p>• Enrutamiento de emails</p>
                  <p>• Chatbots de servicio al cliente</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">
              <Icon name="brain" className="w-6 h-6 inline mr-2 text-blue-400" />
              Ejemplos Detallados del Curso
            </h3>
            
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">📝 Escribir - Ejemplos</h4>
                <div className="space-y-2 text-white/80 text-sm">
                  <p>• <strong>"Sugerir tres nombres para nuestra nueva plataforma de analítica"</strong></p>
                  <p>• <strong>"Traducir a Hindi formal"</strong> / <strong>"Traducir a inglés pirata"</strong></p>
                  <p>• <strong>"Escribir comunicado de prensa para nuevo COO"</strong></p>
                </div>
              </div>

              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">📚 Leer - Ejemplos</h4>
                <div className="space-y-2 text-white/80 text-sm">
                  <p>• <strong>Corrección:</strong> "Revisar gramática en texto del osito de peluche"</p>
                  <p>• <strong>Resumen:</strong> "Resumir artículo 'The Turing Trap'"</p>
                  <p>• <strong>Clasificación:</strong> "¿Es queja? → SÍ/NO" + "Departamento: Ropa"</p>
                </div>
              </div>

              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">💬 Chat - Ejemplos</h4>
                <div className="space-y-2 text-white/80 text-sm">
                  <p>• <strong>BettaBurgers:</strong> "¡Bienvenido! ¿Qué te gustaría ordenar?"</p>
                  <p>• <strong>Coach de carrera:</strong> "Estoy nervioso por mi presentación..."</p>
                  <p>• <strong>Planificador de viajes:</strong> "Vacaciones baratas en París"</p>
                </div>
              </div>
            </div>
          </div>

          <ClickableInfo
            title="Tokens: Las Unidades de Procesamiento"
            content={
              <div>
                <h4 className="text-xl font-bold mb-4">¿Qué son los Tokens?</h4>
                <p className="mb-4">Los tokens son las unidades básicas que los LLMs usan para procesar texto. No siempre corresponden a palabras completas.</p>
                
                <h5 className="font-bold mb-2">Ejemplos de Tokenización:</h5>
                <div className="space-y-3">
                  <div className="bg-blue-50 p-3 rounded">
                    <p className="font-mono">"Hola mundo" → ["Hola", " mundo"] (2 tokens)</p>
                  </div>
                  <div className="bg-green-50 p-3 rounded">
                    <p className="font-mono">"extraordinario" → ["extra", "ordin", "ario"] (3 tokens)</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded">
                    <p className="font-mono">"ChatGPT" → ["Chat", "GPT"] (2 tokens)</p>
                  </div>
                </div>
                
                <h5 className="font-bold mt-4 mb-2">Implicaciones de Costos:</h5>
                <ul className="space-y-2">
                  <li>• Los proveedores cobran por cada 1,000 tokens procesados</li>
                  <li>• 1,000 tokens ≈ 750 palabras en inglés</li>
                  <li>• Un artículo de 3,000 palabras ≈ 4,000 tokens</li>
                </ul>
                
                <h5 className="font-bold mt-4 mb-2">Precios Actuales de Ejemplo:</h5>
                <div className="bg-yellow-50 p-3 rounded">
                  <p>• <strong>OpenAI GPT-3.5:</strong> Input $0.0015/1K tokens, Output $0.002/1K tokens</p>
                  <p>• <strong>OpenAI GPT-4:</strong> Input $0.03/1K tokens, Output $0.06/1K tokens</p>
                  <p>• <strong>Google PaLM 2:</strong> $0.00025/1K caracteres</p>
                  <p>• <strong>Amazon Titan Lite:</strong> Input $0.0003/1K tokens</p>
                </div>
                
                <h5 className="font-bold mt-4 mb-2">Cálculo Real: ¿Cuánto cuesta mantener a alguien leyendo 1 hora?</h5>
                <div className="bg-blue-50 p-4 rounded space-y-2">
                  <p><strong>Premisas:</strong></p>
                  <p>• Velocidad de lectura: 250 palabras/minuto</p>
                  <p>• 1 hora = 60 min × 250 palabras = 15,000 palabras de salida</p>
                  <p>• Prompt similar = ~15,000 palabras adicionales</p>
                  <p>• Total: 30,000 palabras ≈ 40,000 tokens</p>
                  
                  <p className="font-semibold text-green-700 text-lg">💰 Costo total con GPT-3.5: ~$0.08 (8 centavos)</p>
                  
                  <p className="text-sm text-gray-600">
                    <strong>Contexto:</strong> Para un empleado que gana $15/hora, el costo de IA es solo 0.5% de su salario.
                  </p>
                </div>
                
                <div className="bg-red-50 p-4 rounded-lg mt-4">
                  <p><strong>Tip:</strong> Optimiza tus prompts para usar menos tokens sin perder claridad. Esto reduce costos significativamente a escala.</p>
                </div>
              </div>
            }
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">
              <Icon name="coins" className="w-6 h-6 inline mr-2 text-yellow-400" />
              Tokens y Costos
            </h3>
            <div className="space-y-4">
              <div className="bg-yellow-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">📊 ¿Qué es un Token?</h4>
                <p className="text-white/80 text-sm mb-3">
                  Unidad básica de procesamiento (≈ palabra o parte de palabra)
                </p>
                <div className="bg-white/10 p-3 rounded">
                  <p className="text-white/90 font-mono text-xs">
                    "Inteligencia Artificial" = 4 tokens
                  </p>
                </div>
              </div>

              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">💰 Estructura de Costos</h4>
                <div className="space-y-2 text-white/80 text-sm">
                  <p>• <strong>Input:</strong> Lo que envías al modelo</p>
                  <p>• <strong>Output:</strong> Lo que el modelo genera</p>
                  <p>• <strong>Total:</strong> Input + Output tokens</p>
                </div>
              </div>

              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">📈 Ejemplo Real</h4>
                <p className="text-white/80 text-sm">
                  Generar texto para 1 hora de lectura (15,000 palabras) ≈ $0.08 USD
                </p>
              </div>
            </div>
          </ClickableInfo>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            ⚠️ La Limitación Crítica: Alucinaciones
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">¿Qué son las Alucinaciones?</h4>
              <p className="text-white/90 mb-4">
                Cuando el modelo genera información que parece plausible pero es incorrecta o completamente inventada.
              </p>
              <div className="bg-red-500/20 p-4 rounded-lg">
                <h5 className="text-red-100 font-semibold mb-2">Ejemplo Real</h5>
                <p className="text-white/80 text-sm italic mb-2">
                  "Dame una cita de Einstein sobre smartphones"
                </p>
                <p className="text-red-100 text-sm">
                  ❌ "La tecnología smartphone ha superado claramente nuestra humanidad" - Albert Einstein
                </p>
                <p className="text-white/70 text-xs mt-2">
                  (Einstein murió en 1955, décadas antes de los smartphones)
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Consecuencias Reales</h4>
              <div className="space-y-3">
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <h5 className="text-orange-100 font-semibold text-sm">⚖️ Caso Legal</h5>
                  <p className="text-white/80 text-xs">
                    Abogado sancionado por presentar casos judiciales inventados por ChatGPT
                  </p>
                </div>
                <div className="bg-yellow-500/20 p-3 rounded-lg">
                  <h5 className="text-yellow-100 font-semibold text-sm">📚 Académico</h5>
                  <p className="text-white/80 text-xs">
                    Estudiantes citando papers inexistentes generados por IA
                  </p>
                </div>
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <h5 className="text-purple-100 font-semibold text-sm">💊 Médico</h5>
                  <p className="text-white/80 text-xs">
                    Información médica incorrecta que podría ser peligrosa
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-blue-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">
              <Icon name="shield-alt" className="w-5 h-5 inline mr-2" />
              Mejores Prácticas
            </h4>
            <ul className="space-y-1 text-white/80 text-sm">
              <li>• Siempre verifica información factual crítica</li>
              <li>• Usa IA como asistente, no como fuente definitiva</li>
              <li>• Especialmente cuidadoso con fechas, números y citas</li>
              <li>• Implementa verificación humana en aplicaciones críticas</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  // Slide 3: Consejos para Prompting Efectivo
  {
    id: 3,
    type: 'content',
    title: 'Consejos para Prompting Efectivo',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Los 3 Principios del Prompting Exitoso</h3>
            <p className="text-white/80">Cómo obtener mejores resultados de cualquier LLM</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="glass-effect p-6 rounded-xl text-center">
            <Icon name="detail" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">1️⃣ Sé Detallado y Específico</h3>
            <p className="text-white/80 text-sm mb-4">
              Proporciona contexto suficiente y describe la tarea claramente
            </p>
            <div className="bg-white/10 p-4 rounded-lg text-left">
              <p className="text-red-200 text-xs font-semibold mb-2">❌ Prompt Vago:</p>
              <p className="text-white/70 text-xs mb-3 italic">
                "Ayúdame a escribir un email solicitando el proyecto de documentos legales."
              </p>
              <p className="text-green-200 text-xs font-semibold mb-2">✅ Prompt Mejorado:</p>
              <p className="text-white/70 text-xs italic">
                "Ayúdame a escribir un email solicitando ser asignado al proyecto de documentos legales. 
                Estoy aplicando para un trabajo que verificará documentos legales usando LLMs. 
                Tengo amplia experiencia formulando prompts para generar texto preciso en tono profesional."
              </p>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl text-center">
            <Icon name="brain" className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">2️⃣ Guía el Pensamiento</h3>
            <p className="text-white/80 text-sm mb-4">
              Divide tareas complejas en pasos claros
            </p>
            <div className="bg-white/10 p-4 rounded-lg text-left">
              <p className="text-green-200 text-xs font-semibold mb-2">📝 Ejemplo - Nombres para juguetes:</p>
              <div className="space-y-2 text-white/70 text-xs">
                <p><strong>Paso 1:</strong> Piensa en 5 palabras divertidas relacionadas con gatos</p>
                <p><strong>Paso 2:</strong> Para cada palabra, crea un nombre que rime</p>
                <p><strong>Paso 3:</strong> Añade un emoji relevante a cada nombre</p>
              </div>
              <div className="mt-3 bg-green-500/20 p-2 rounded">
                <p className="text-green-100 text-xs">
                  <strong>Resultado:</strong> Purr-Twirl 🌀, Whisker-Whisper 😻, Pounce-Bounce ⚽
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl text-center">
            <Icon name="refresh" className="w-16 h-16 text-purple-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-4">3️⃣ Experimenta e Itera</h3>
            <p className="text-white/80 text-sm mb-4">
              El prompting perfecto es un proceso iterativo
            </p>
            <div className="bg-white/10 p-4 rounded-lg text-left">
              <div className="space-y-2 text-white/70 text-xs">
                <p><strong>Ciclo de Mejora:</strong></p>
                <p>💡 <strong>Idea</strong> → Ten clara la tarea</p>
                <p>✍️ <strong>Prompt inicial</strong> → Escribe primera versión</p>
                <p>🤖 <strong>Respuesta LLM</strong> → Observa el resultado</p>
                <p>🔄 <strong>Evaluar y refinar</strong> → Mejora el prompt</p>
                <p>🎯 <strong>Repetir</strong> → Hasta obtener el resultado deseado</p>
              </div>
              <div className="mt-3 bg-yellow-500/20 p-2 rounded">
                <p className="text-yellow-100 text-xs">
                  <strong>Consejo:</strong> ¡No pienses demasiado el primer prompt! Es mejor probar rápido y mejorar.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            <Icon name="target" className="w-6 h-6 inline mr-2 text-yellow-400" />
            Ejemplo Práctico: Evolución de un Prompt
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-500/20 p-4 rounded-lg">
              <h4 className="text-red-200 font-semibold mb-2">Intento 1 - Básico</h4>
              <p className="text-white/80 text-sm italic mb-2">
                "Ayúdame a reescribir esto: [texto]"
              </p>
              <p className="text-white/70 text-xs">
                Resultado: Muy genérico, no sabe qué tipo de mejora necesitas.
              </p>
            </div>

            <div className="bg-yellow-500/20 p-4 rounded-lg">
              <h4 className="text-yellow-200 font-semibold mb-2">Intento 2 - Más Específico</h4>
              <p className="text-white/80 text-sm italic mb-2">
                "Corrige cualquier error gramatical y de ortografía en esto: [texto]"
              </p>
              <p className="text-white/70 text-xs">
                Resultado: Mejor, pero aún falta contexto sobre el propósito.
              </p>
            </div>

            <div className="bg-green-500/20 p-4 rounded-lg">
              <h4 className="text-green-200 font-semibold mb-2">Intento 3 - Optimizado</h4>
              <p className="text-white/80 text-sm italic mb-2">
                "Corrige errores gramaticales y reescribe en tono apropiado para un currículum profesional: [texto]"
              </p>
              <p className="text-white/70 text-xs">
                Resultado: ¡Perfecto! Contexto claro y objetivo específico.
              </p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            <Icon name="alert-triangle" className="w-6 h-6 inline mr-2 text-orange-400" />
            Advertencias Importantes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-orange-200 font-semibold mb-3">🔒 Información Confidencial</h4>
              <ul className="space-y-1 text-white/80 text-sm">
                <li>• No compartas datos sensibles o privados</li>
                <li>• Verifica las políticas de tu empresa sobre IA</li>
                <li>• Entiende cómo el proveedor maneja tus datos</li>
              </ul>
            </div>
            <div>
              <h4 className="text-red-200 font-semibold mb-3">⚠️ Verificación</h4>
              <ul className="space-y-1 text-white/80 text-sm">
                <li>• Siempre verifica información crítica</li>
                <li>• Los LLMs pueden "alucinar" datos</li>
                <li>• Especial cuidado con fechas y números</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 4: Demo Interactivo de Generación de Texto
  {
    id: 4,
    type: 'content',
    title: 'Demo Interactivo: Generación de Texto en Acción',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Experimenta cómo funciona la generación de texto</h3>
            <p className="text-white/80">Observa el proceso de predicción palabra por palabra</p>
          </div>
        </div>

        <GenerativeAIDemo />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4">
              <Icon name="lightbulb" className="w-5 h-5 inline mr-2 text-yellow-400" />
              Lo que acabas de ver
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              <p>• El modelo considera múltiples opciones para cada palabra</p>
              <p>• La probabilidad determina qué palabra se selecciona</p>
              <p>• El contexto previo influye en las predicciones futuras</p>
              <p>• Pequeños cambios pueden llevar a resultados muy diferentes</p>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4">
              <Icon name="chart-bar" className="w-5 h-5 inline mr-2 text-blue-400" />
              Aplicaciones Prácticas
            </h3>
            <div className="space-y-3 text-white/80 text-sm">
              <p>• <strong>Autocompletado:</strong> En emails y documentos</p>
              <p>• <strong>Chatbots:</strong> Respuestas contextuales</p>
              <p>• <strong>Traducción:</strong> Entre idiomas</p>
              <p>• <strong>Resúmenes:</strong> De textos largos</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 5: RAG - Introducción
  {
    id: 5,
    type: 'content',
    title: 'RAG: Generación Aumentada por Recuperación',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">LLM como Motor de Razonamiento</h3>
            <p className="text-white/80">Más allá del simple prompting - Acceso a información específica y actualizada</p>
          </div>
        </div>

        {/* Diagrama RAG */}
        <div className="glass-effect p-6 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            🔄 Cómo Funciona RAG: Flujo de Información
          </h3>
          <div className="flex justify-center">
            <div className="bg-white/10 p-4 rounded-xl">
              <div className="text-center space-y-6">
                {/* Representación visual del flujo RAG */}
                <div className="flex items-center justify-center space-x-8">
                  {/* Documentos */}
                  <div className="text-center">
                    <div className="bg-red-500/30 p-4 rounded-lg mb-2">
                      <Icon name="file" className="w-8 h-8 text-red-300 mx-auto" />
                    </div>
                    <p className="text-white/80 text-sm">Documentos PDF</p>
                    <p className="text-white/60 text-xs">blog_apache_kafka.pdf</p>
                    <p className="text-white/60 text-xs">don_quijote.pdf</p>
                    <p className="text-white/60 text-xs">notas_proyecto_canavis.pdf</p>
                  </div>

                  {/* Flecha */}
                  <div className="text-center">
                    <div className="text-white/60">→</div>
                    <p className="text-white/60 text-xs mt-2">Búsqueda</p>
                  </div>

                  {/* Sistema RAG */}
                  <div className="text-center">
                    <div className="bg-blue-500/30 p-4 rounded-lg mb-2 border border-dashed border-blue-300">
                      <Icon name="database" className="w-8 h-8 text-blue-300 mx-auto" />
                    </div>
                    <p className="text-white/80 text-sm font-semibold">RAG System</p>
                    <p className="text-white/60 text-xs">¿Cuál es el objetivo del proyecto con el nuevo cliente?</p>
                  </div>

                  {/* Flecha */}
                  <div className="text-center">
                    <div className="text-white/60">→</div>
                    <p className="text-white/60 text-xs mt-2">Contexto</p>
                  </div>

                  {/* LLM */}
                  <div className="text-center">
                    <div className="bg-purple-500/30 p-4 rounded-lg mb-2 border border-dashed border-purple-300">
                      <Icon name="brain" className="w-8 h-8 text-purple-300 mx-auto" />
                    </div>
                    <p className="text-white/80 text-sm font-semibold">LLM</p>
                    <div className="flex space-x-2 mt-1">
                      <Icon name="image" className="w-4 h-4 text-green-300" title="ChatGPT" />
                      <Icon name="search" className="w-4 h-4 text-blue-300" title="Claude" />
                    </div>
                  </div>
                </div>

                {/* Usuario y respuesta */}
                <div className="border-t border-white/20 pt-4">
                  <div className="flex items-center justify-between">
                    <div className="text-left">
                      <div className="flex items-center space-x-2 mb-2">
                        <Icon name="user" className="w-5 h-5 text-yellow-300" />
                        <p className="text-white/80 text-sm">Usuario pregunta:</p>
                      </div>
                      <p className="text-white/90 text-sm italic bg-white/10 p-2 rounded">
                        "¿Cuál es el objetivo del proyecto con el nuevo cliente?"
                      </p>
                    </div>
                    
                    <div className="text-white/60 mx-4">↓</div>
                    
                    <div className="text-right">
                      <div className="flex items-center justify-end space-x-2 mb-2">
                        <p className="text-white/80 text-sm">LLM responde:</p>
                        <Icon name="message-circle" className="w-5 h-5 text-green-300" />
                      </div>
                      <p className="text-white/90 text-sm bg-green-500/20 p-2 rounded">
                        "El objetivo es optimizar costos de infraestructura"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-4 text-center">
            <p className="text-white/70 text-sm">
              <Icon name="info" className="w-4 h-4 inline mr-1" />
              RAG permite que el LLM acceda a información específica y actualizada sin reentrenamiento
            </p>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🔍 Ejemplo Práctico: Chatbot Empresarial
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-red-500/20 p-6 rounded-xl">
              <h4 className="text-red-200 font-bold mb-4">❌ Sin RAG - Respuesta Genérica</h4>
              <div className="space-y-3">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-white font-semibold text-sm mb-2">👤 Empleado Pregunta:</p>
                  <p className="text-white/80 text-sm italic">"¿Hay estacionamiento para empleados?"</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-red-200 font-semibold text-sm mb-2">🤖 LLM Responde:</p>
                  <p className="text-white/80 text-sm italic">
                    "Necesito información más específica sobre su lugar de trabajo para responder esa pregunta."
                  </p>
                </div>
                <div className="bg-red-500/30 p-3 rounded text-center">
                  <p className="text-red-100 text-xs font-semibold">No tiene acceso a información interna</p>
                </div>
              </div>
            </div>

            <div className="bg-green-500/20 p-6 rounded-xl">
              <h4 className="text-green-200 font-bold mb-4">✅ Con RAG - Respuesta Específica</h4>
              <div className="space-y-3">
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-white font-semibold text-sm mb-2">👤 Empleado Pregunta:</p>
                  <p className="text-white/80 text-sm italic">"¿Hay estacionamiento para empleados?"</p>
                </div>
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <p className="text-blue-200 font-semibold text-xs mb-1">🔍 RAG Busca en: "Documento de Instalaciones"</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p className="text-green-200 font-semibold text-sm mb-2">🤖 LLM Responde:</p>
                  <p className="text-white/80 text-sm italic">
                    "Sí, los empleados pueden estacionar en los niveles 1 y 2 del estacionamiento de la oficina. 
                    Puede obtener una calcomanía en recepción usando la entrada de Front St."
                  </p>
                </div>
                <div className="bg-green-500/30 p-3 rounded text-center">
                  <p className="text-green-100 text-xs font-semibold">Respuesta precisa basada en documentos internos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🚀 Aplicaciones RAG que Usas a Diario
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-blue-500/20 p-4 rounded-xl text-center">
              <Icon name="file-text" className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Chatear con PDFs</h4>
              <p className="text-white/70 text-sm mb-3">
                ChatPDF, AskYourPDF, PDF.ai
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                Sube un informe y haz preguntas sobre su contenido
              </div>
            </div>

            <div className="bg-green-500/20 p-4 rounded-xl text-center">
              <Icon name="search" className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Búsqueda Web IA</h4>
              <p className="text-white/70 text-sm mb-3">
                Bing Chat, You.com
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                Búsquedas que generan respuestas conversacionales
              </div>
            </div>

            <div className="bg-purple-500/20 p-4 rounded-xl text-center">
              <Icon name="graduation-cap" className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Asistentes de Sitios</h4>
              <p className="text-white/70 text-sm mb-3">
                Coursera Coach, Snapchat Help
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                Responden basándose en contenido del sitio web
              </div>
            </div>

            <div className="bg-orange-500/20 p-4 rounded-xl text-center">
              <Icon name="briefcase" className="w-12 h-12 text-orange-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Chatbots Empresariales</h4>
              <p className="text-white/70 text-sm mb-3">
                HubSpot, Zendesk
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                Integrados con bases de conocimiento internas
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🤔 El Problema que RAG Resuelve
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-red-500/20 p-4 rounded-lg text-center">
              <Icon name="calendar-times" className="w-12 h-12 text-red-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Corte de Conocimiento</h4>
              <p className="text-white/70 text-sm mb-3">
                LLMs solo saben hasta su fecha de entrenamiento
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                ej. ChatGPT no sabe noticias de hoy
              </div>
            </div>
            <div className="bg-orange-500/20 p-4 rounded-lg text-center">
              <Icon name="lock" className="w-12 h-12 text-orange-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Datos Privados/Empresariales</h4>
              <p className="text-white/70 text-sm mb-3">
                No conocen información interna específica
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                ej. Políticas de tu empresa
              </div>
            </div>
            <div className="bg-yellow-500/20 p-4 rounded-lg text-center">
              <Icon name="brain" className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">LLM como Base de Datos</h4>
              <p className="text-white/70 text-sm mb-3">
                Depender solo de su "memoria" interna es limitante
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                Mejor como motor de razonamiento
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClickableInfo
            title="¿Qué es RAG?"
            content={
              <div>
                <p className="mb-4">RAG (Retrieval Augmented Generation) es una técnica que combina la generación de texto de los LLMs con la recuperación de información de bases de datos externas.</p>
                
                <h4 className="text-xl font-bold mb-3">El Proceso RAG en 3 Pasos:</h4>
                
                <div className="space-y-4">
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">1. Recuperación (Retrieval)</h5>
                    <p>Cuando recibes una pregunta, el sistema busca documentos relevantes en tu base de conocimientos.</p>
                    <p className="text-sm mt-2 italic">Ejemplo: "¿Cuál es nuestra política de vacaciones?" → Busca en documentos de RRHH</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">2. Aumentación (Augmentation)</h5>
                    <p>Los documentos encontrados se añaden al prompt original como contexto adicional.</p>
                    <p className="text-sm mt-2 italic">Prompt aumentado: "Basándote en estos documentos: [política de vacaciones], responde: ¿Cuál es nuestra política?"</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold mb-2">3. Generación (Generation)</h5>
                    <p>El LLM genera una respuesta usando tanto su conocimiento general como la información específica recuperada.</p>
                    <p className="text-sm mt-2 italic">Respuesta: "Según la política actualizada en enero 2024, los empleados tienen 21 días de vacaciones..."</p>
                  </div>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg mt-4">
                  <p><strong>Ventaja clave:</strong> Combina la capacidad de comprensión y generación del LLM con información actualizada y específica de tu organización.</p>
                </div>
                
                <h4 className="text-xl font-bold mb-3 mt-6">RAG vs Fine-tuning vs Pre-training</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <h5 className="font-bold text-green-800 mb-2">🔍 RAG</h5>
                    <p className="text-sm mb-2"><strong>Propósito:</strong> Acceso a información externa</p>
                    <p className="text-sm mb-2"><strong>Costo:</strong> Bajo - Solo almacenamiento y búsqueda</p>
                    <p className="text-sm mb-2"><strong>Tiempo:</strong> Horas a días para implementar</p>
                    <p className="text-sm"><strong>Uso ideal:</strong> Documentos empresariales, bases de conocimiento</p>
                  </div>
                  
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h5 className="font-bold text-blue-800 mb-2">🎯 Fine-tuning</h5>
                    <p className="text-sm mb-2"><strong>Propósito:</strong> Comportamiento y estilo específico</p>
                    <p className="text-sm mb-2"><strong>Costo:</strong> Medio - Entrenamiento especializado</p>
                    <p className="text-sm mb-2"><strong>Tiempo:</strong> Días a semanas</p>
                    <p className="text-sm"><strong>Uso ideal:</strong> Tono de marca, tareas muy específicas</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <h5 className="font-bold text-purple-800 mb-2">🏗️ Pre-training</h5>
                    <p className="text-sm mb-2"><strong>Propósito:</strong> Crear modelo desde cero</p>
                    <p className="text-sm mb-2"><strong>Costo:</strong> Alto - Millones de dólares</p>
                    <p className="text-sm mb-2"><strong>Tiempo:</strong> Meses a años</p>
                    <p className="text-sm"><strong>Uso ideal:</strong> Solo para empresas grandes (Google, OpenAI)</p>
                  </div>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p><strong>Consejo práctico:</strong> Para la mayoría de casos empresariales, RAG es la opción más práctica y costo-efectiva. Puedes implementar un sistema RAG funcional en una semana.</p>
                </div>
              </div>
            }
            className="glass-effect p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Icon name="database" className="w-10 h-10 text-green-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">¿Qué es RAG?</h3>
            </div>
            
            <div className="space-y-4">
              <div className="text-center mb-6">
                <p className="text-white/90 text-lg">
                  <strong>R</strong>etrieval <strong>A</strong>ugmented <strong>G</strong>eneration
                </p>
                <p className="text-white/70 text-sm mt-2">
                  Generación Aumentada por Recuperación
                </p>
              </div>

              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🔍 Paso 1: Recuperar</h4>
                <p className="text-white/80 text-sm">
                  Busca información relevante en bases de datos
                </p>
              </div>

              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">➕ Paso 2: Aumentar</h4>
                <p className="text-white/80 text-sm">
                  Añade la información al contexto del prompt
                </p>
              </div>

              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">✨ Paso 3: Generar</h4>
                <p className="text-white/80 text-sm">
                  Crea respuesta con información actualizada
                </p>
              </div>
            </div>
          </ClickableInfo>

          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4">
                <Icon name="check-circle" className="w-5 h-5 inline mr-2 text-green-400" />
                Ventajas de RAG
              </h3>
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon name="clock" className="w-5 h-5 text-blue-300 mr-3 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">Información Actualizada</p>
                    <p className="text-white/70 text-xs">Acceso a datos en tiempo real</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="lock" className="w-5 h-5 text-purple-300 mr-3 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">Datos Privados</p>
                    <p className="text-white/70 text-xs">Usa información interna de tu empresa</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="target" className="w-5 h-5 text-green-300 mr-3 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">Mayor Precisión</p>
                    <p className="text-white/70 text-xs">Reduce alucinaciones con fuentes verificadas</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Icon name="link" className="w-5 h-5 text-orange-300 mr-3 mt-0.5" />
                  <div>
                    <p className="text-white font-semibold text-sm">Citas y Referencias</p>
                    <p className="text-white/70 text-xs">Puede indicar de dónde viene la información</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl">
              <h3 className="text-lg font-bold text-white mb-4">
                <Icon name="briefcase" className="w-5 h-5 inline mr-2 text-blue-400" />
                Casos de Uso Empresariales
              </h3>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong>Soporte al cliente:</strong> Respuestas basadas en manuales actualizados</p>
                <p>• <strong>RRHH:</strong> Consultas sobre políticas internas</p>
                <p>• <strong>Legal:</strong> Búsqueda en contratos y regulaciones</p>
                <p>• <strong>Ventas:</strong> Información de productos y precios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 6: Demo Interactivo de RAG
  {
    id: 6,
    type: 'content',
    title: 'Demo: RAG en Acción',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Experimenta la diferencia con RAG</h3>
            <p className="text-white/80">Compara respuestas con y sin información adicional</p>
          </div>
        </div>

        <RAGDemo />

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🏗️ Implementando RAG en tu Organización
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">
                <Icon name="tools" className="w-5 h-5 inline mr-2 text-blue-400" />
                Herramientas Populares
              </h4>
              <div className="space-y-3">
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <p className="text-white font-semibold text-sm">LangChain</p>
                  <p className="text-white/70 text-xs">Framework para construir aplicaciones con LLMs</p>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <p className="text-white font-semibold text-sm">Pinecone / Weaviate</p>
                  <p className="text-white/70 text-xs">Bases de datos vectoriales para búsqueda semántica</p>
                </div>
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <p className="text-white font-semibold text-sm">OpenAI Assistants API</p>
                  <p className="text-white/70 text-xs">RAG integrado en la API de OpenAI</p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">
                <Icon name="shield-alt" className="w-5 h-5 inline mr-2 text-green-400" />
                Consideraciones de Seguridad
              </h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong>Control de acceso:</strong> Quién puede consultar qué información</p>
                <p>• <strong>Encriptación:</strong> Proteger datos sensibles</p>
                <p>• <strong>Auditoría:</strong> Registrar quién accede a qué</p>
                <p>• <strong>Cumplimiento:</strong> GDPR, HIPAA, etc.</p>
              </div>
            </div>
          </div>
          
          <div className="mt-8">
            <h4 className="text-white font-semibold mb-4 text-center">
              <Icon name="workflow" className="w-6 h-6 inline mr-2 text-purple-400" />
              Arquitectura RAG Típica - Proceso Paso a Paso
            </h4>
            
            <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-4 items-center">
                <div className="bg-blue-500/20 p-4 rounded-lg text-center">
                  <Icon name="user" className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                  <h5 className="text-white font-semibold text-sm mb-1">1. Usuario Pregunta</h5>
                  <p className="text-white/70 text-xs">"¿Cuál es la política de trabajo remoto?"</p>
                </div>
                
                <div className="hidden lg:flex justify-center">
                  <Icon name="arrow-right" className="w-6 h-6 text-white/50" />
                </div>
                
                <div className="bg-green-500/20 p-4 rounded-lg text-center">
                  <Icon name="search" className="w-8 h-8 text-green-400 mx-auto mb-2" />
                  <h5 className="text-white font-semibold text-sm mb-1">2. Buscar Documentos</h5>
                  <p className="text-white/70 text-xs">Base vectorial encuentra docs relevantes</p>
                </div>
                
                <div className="hidden lg:flex justify-center">
                  <Icon name="arrow-right" className="w-6 h-6 text-white/50" />
                </div>
                
                <div className="bg-purple-500/20 p-4 rounded-lg text-center">
                  <Icon name="brain" className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <h5 className="text-white font-semibold text-sm mb-1">3. LLM Genera</h5>
                  <p className="text-white/70 text-xs">Respuesta con contexto específico</p>
                </div>
              </div>
              
              <div className="mt-6 bg-white/10 p-4 rounded-lg">
                <h6 className="text-white font-semibold text-sm mb-2">💡 Detalles Técnicos:</h6>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs">
                  <div>
                    <p className="text-white/80"><strong>Vectorización:</strong> Convierte texto en números para búsqueda semántica</p>
                  </div>
                  <div>
                    <p className="text-white/80"><strong>Similitud coseno:</strong> Encuentra documentos más parecidos a la pregunta</p>
                  </div>
                  <div>
                    <p className="text-white/80"><strong>Context window:</strong> Límite de información que puede procesar el LLM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🛠️ Herramientas y Agentes: Más Allá de RAG
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-semibold mb-4">
                <Icon name="tools" className="w-5 h-5 inline mr-2 text-orange-400" />
                Tool Use (Uso de Herramientas)
              </h4>
              <div className="space-y-3">
                <p className="text-white/80 text-sm">
                  Los LLMs pueden usar herramientas externas para ejecutar acciones específicas más allá de solo generar texto.
                </p>
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <h5 className="text-orange-100 font-semibold text-sm mb-2">Ejemplos de Herramientas:</h5>
                  <ul className="text-white/70 text-xs space-y-1">
                    <li>• <strong>Calculadora:</strong> Para cálculos matemáticos precisos</li>
                    <li>• <strong>Búsqueda web:</strong> Para información en tiempo real</li>
                    <li>• <strong>APIs de weather:</strong> Para datos meteorológicos</li>
                    <li>• <strong>Bases de datos:</strong> Para consultas SQL</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-semibold mb-4">
                <Icon name="users" className="w-5 h-5 inline mr-2 text-cyan-400" />
                Agentes IA
              </h4>
              <div className="space-y-3">
                <p className="text-white/80 text-sm">
                  Sistemas que pueden planificar, ejecutar múltiples pasos y usar varias herramientas para completar tareas complejas.
                </p>
                <div className="bg-cyan-500/20 p-3 rounded-lg">
                  <h5 className="text-cyan-100 font-semibold text-sm mb-2">Capacidades de Agentes:</h5>
                  <ul className="text-white/70 text-xs space-y-1">
                    <li>• <strong>Planificación:</strong> Dividir tareas complejas en pasos</li>
                    <li>• <strong>Memoria:</strong> Recordar contexto entre interacciones</li>
                    <li>• <strong>Herramientas múltiples:</strong> Combinar RAG + APIs + cálculos</li>
                    <li>• <strong>Auto-corrección:</strong> Verificar y mejorar sus propias respuestas</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          
          <div className="mt-6 bg-gradient-to-r from-orange-500/20 to-cyan-500/20 p-4 rounded-lg">
            <h5 className="text-white font-semibold mb-2">🎯 Ejemplo Práctico: Agente de Viajes</h5>
            <div className="text-white/80 text-sm space-y-2">
              <p><strong>Tarea:</strong> "Planifica un viaje de trabajo a Madrid para la próxima semana"</p>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-3 mt-3">
                <div className="bg-white/10 p-2 rounded text-xs">
                  <strong>1. Buscar vuelos</strong><br/>API de aerolíneas
                </div>
                <div className="bg-white/10 p-2 rounded text-xs">
                  <strong>2. Revisar calendario</strong><br/>Integración Google Calendar
                </div>
                <div className="bg-white/10 p-2 rounded text-xs">
                  <strong>3. Buscar hoteles</strong><br/>APIs de booking
                </div>
                <div className="bg-white/10 p-2 rounded text-xs">
                  <strong>4. Consultar políticas</strong><br/>RAG con docs internos
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 7: RAG vs Fine-tuning vs Prompt Engineering
  {
    id: 7,
    type: 'content',
    title: 'Optimización de LLMs: RAG vs Fine-tuning vs Prompt Engineering',
    content: (
      <div className="space-y-6 fade-in">
        <div className="text-center mb-6">
          <div className="glass-effect p-4 rounded-xl inline-block">
            <h3 className="text-xl font-bold text-white mb-2">Tres Técnicas Clave para Mejorar LLMs</h3>
            <p className="text-white/80 text-sm">
              Comprende las diferencias y cuándo usar cada técnica
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Prompt Engineering */}
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="edit" className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-lg font-bold text-white">Prompt Engineering</h4>
            </div>
            
            <div className="space-y-3">
              <div className="bg-blue-500/10 p-3 rounded-lg">
                <p className="text-white/90 text-sm font-semibold mb-1">¿Qué es?</p>
                <p className="text-white/70 text-xs">
                  Optimizar las instrucciones que le das al modelo para obtener mejores respuestas
                </p>
              </div>
              
              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-green-300 text-sm font-semibold mb-1">✅ Ventajas</p>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• Rápido de implementar</li>
                  <li>• Sin costos adicionales</li>
                  <li>• Flexible y reversible</li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-red-300 text-sm font-semibold mb-1">❌ Limitaciones</p>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• Límite de contexto</li>
                  <li>• No agrega conocimiento nuevo</li>
                  <li>• Resultados variables</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/10 p-3 rounded-lg">
                <p className="text-yellow-300 text-sm font-semibold mb-1">💡 Ejemplo</p>
                <p className="text-white/70 text-xs italic">
                  "Actúa como un experto en finanzas. Analiza este balance..."
                </p>
              </div>
            </div>
          </div>

          {/* RAG */}
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="database" className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-lg font-bold text-white">RAG</h4>
              <p className="text-white/60 text-xs">Retrieval Augmented Generation</p>
            </div>
            
            <div className="space-y-3">
              <div className="bg-green-500/10 p-3 rounded-lg">
                <p className="text-white/90 text-sm font-semibold mb-1">¿Qué es?</p>
                <p className="text-white/70 text-xs">
                  Buscar información relevante en una base de datos y pasársela al modelo como contexto
                </p>
              </div>
              
              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-green-300 text-sm font-semibold mb-1">✅ Ventajas</p>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• Información actualizada</li>
                  <li>• Datos específicos de tu empresa</li>
                  <li>• Sin reentrenamiento</li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-red-300 text-sm font-semibold mb-1">❌ Limitaciones</p>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• Requiere infraestructura</li>
                  <li>• Calidad depende de los datos</li>
                  <li>• Latencia adicional</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/10 p-3 rounded-lg">
                <p className="text-yellow-300 text-sm font-semibold mb-1">💡 Ejemplo</p>
                <p className="text-white/70 text-xs italic">
                  Chatbot que busca en manuales internos antes de responder
                </p>
              </div>
            </div>
          </div>

          {/* Fine-tuning */}
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="text-center mb-4">
              <div className="w-16 h-16 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon name="gear" className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-lg font-bold text-white">Fine-tuning</h4>
            </div>
            
            <div className="space-y-3">
              <div className="bg-purple-500/10 p-3 rounded-lg">
                <p className="text-white/90 text-sm font-semibold mb-1">¿Qué es?</p>
                <p className="text-white/70 text-xs">
                  Reentrenar el modelo con datos específicos para especializar su comportamiento
                </p>
              </div>
              
              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-green-300 text-sm font-semibold mb-1">✅ Ventajas</p>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• Comportamiento consistente</li>
                  <li>• Especialización profunda</li>
                  <li>• No requiere prompts largos</li>
                </ul>
              </div>
              
              <div className="bg-white/5 p-3 rounded-lg">
                <p className="text-red-300 text-sm font-semibold mb-1">❌ Limitaciones</p>
                <ul className="text-white/70 text-xs space-y-1">
                  <li>• Costoso (tiempo y dinero)</li>
                  <li>• Requiere muchos datos</li>
                  <li>• Puede perder capacidades</li>
                </ul>
              </div>
              
              <div className="bg-yellow-500/10 p-3 rounded-lg">
                <p className="text-yellow-300 text-sm font-semibold mb-1">💡 Ejemplo</p>
                <p className="text-white/70 text-xs italic">
                  Modelo especializado en jerga médica o código específico
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparación y Recomendaciones */}
        <div className="glass-effect p-6 rounded-xl mt-6">
          <h4 className="text-lg font-bold text-white mb-4 text-center">
            <Icon name="balance-scale" className="w-5 h-5 inline mr-2" />
            ¿Cuándo usar cada técnica?
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gradient-to-r from-blue-500/10 to-green-500/10 p-4 rounded-lg">
              <h5 className="text-white font-semibold mb-2">🚀 Comienza con Prompt Engineering + RAG</h5>
              <p className="text-white/80 text-sm">
                La combinación más práctica: rápida de implementar, flexible y con buenos resultados. 
                Ideal para la mayoría de casos de uso empresariales.
              </p>
            </div>
            
            <div className="bg-gradient-to-r from-purple-500/10 to-pink-500/10 p-4 rounded-lg">
              <h5 className="text-white font-semibold mb-2">🎯 Fine-tuning para casos específicos</h5>
              <p className="text-white/80 text-sm">
                Solo cuando necesites comportamientos muy específicos o tengas requisitos 
                de latencia/costo que justifiquen la inversión.
              </p>
            </div>
          </div>
          
          <div className="mt-4 bg-yellow-500/10 p-4 rounded-lg">
            <p className="text-white text-sm text-center">
              <Icon name="lightbulb" className="w-4 h-4 inline mr-2 text-yellow-400" />
              <strong>Pro tip:</strong> No son mutuamente excluyentes. Puedes usar las tres técnicas juntas 
              para maximizar el rendimiento de tu aplicación.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8: Ciclo de Vida de Proyectos de IA Generativa
  {
    id: 8,
    type: 'content',
    title: 'Ciclo de Vida de Proyectos de IA Generativa',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">De la Idea a la Implementación</h3>
            <p className="text-white/80">El proceso para construir aplicaciones exitosas con IA Generativa</p>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            <Icon name="workflow" className="w-6 h-6 inline mr-2 text-purple-400" />
            Las 4 Fases del Desarrollo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-500/20 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">1</div>
              <h4 className="text-white font-bold mb-3">📋 Definir Alcance</h4>
              <p className="text-white/80 text-sm mb-4">
                Decide qué quieres que haga tu aplicación
              </p>
              <div className="space-y-2 text-white/70 text-xs">
                <p>• Identifica el problema específico</p>
                <p>• Define usuarios objetivo</p>
                <p>• Establece métricas de éxito</p>
                <p>• Evalúa si IA Generativa es la solución correcta</p>
              </div>
            </div>

            <div className="bg-green-500/20 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">2</div>
              <h4 className="text-white font-bold mb-3">🔨 Construir/Mejorar</h4>
              <p className="text-white/80 text-sm mb-4">
                Desarrolla un prototipo rápido
              </p>
              <div className="space-y-2 text-white/70 text-xs">
                <p>• Prototipo inicial (1-2 días)</p>
                <p>• Iteración de prompts</p>
                <p>• Integración con datos (RAG si es necesario)</p>
                <p>• Mejora continua basada en feedback</p>
              </div>
            </div>

            <div className="bg-orange-500/20 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-orange-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">3</div>
              <h4 className="text-white font-bold mb-3">🧪 Evaluación Interna</h4>
              <p className="text-white/80 text-sm mb-4">
                Tu equipo prueba el sistema
              </p>
              <div className="space-y-2 text-white/70 text-xs">
                <p>• Pruebas con diferentes entradas</p>
                <p>• Identificación de errores y limitaciones</p>
                <p>• Refinamiento de prompts</p>
                <p>• Ajustes antes del lanzamiento</p>
              </div>
            </div>

            <div className="bg-purple-500/20 p-6 rounded-xl text-center">
              <div className="w-12 h-12 bg-purple-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg">4</div>
              <h4 className="text-white font-bold mb-3">🚀 Desplegar y Monitorear</h4>
              <p className="text-white/80 text-sm mb-4">
                Lanza para usuarios reales
              </p>
              <div className="space-y-2 text-white/70 text-xs">
                <p>• Implementación para usuarios externos</p>
                <p>• Monitoreo continuo del rendimiento</p>
                <p>• Respuesta a casos no anticipados</p>
                <p>• Mejoras basadas en uso real</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4">
              <Icon name="coffee" className="w-5 h-5 inline mr-2 text-brown-400" />
              Ejemplo: Chatbot para Pedidos de Restaurante
            </h3>
            <div className="space-y-4 text-white/80 text-sm">
              <div className="bg-blue-500/20 p-3 rounded">
                <p><strong>1. Alcance:</strong> Tomar pedidos de hamburguesas</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded">
                <p><strong>2. Construir:</strong> Prototipo rápido con ChatGPT</p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded">
                <p><strong>3. Evaluar:</strong> Equipo interno hace pedidos de prueba</p>
                <p className="text-xs mt-1">• "¿Tienen pepinillos?" → "Sí, ¿quieres añadir algunos?"</p>
                <p className="text-xs text-red-200">• "Hamburguesa de champiñones" → "No tenemos champiñones" (Error detectado)</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded">
                <p><strong>4. Desplegar:</strong> Clientes reales hacen pedidos</p>
                <p className="text-xs mt-1 text-yellow-200">• Cliente pregunta calorías → Error no anticipado → Mejora</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4">
              <Icon name="chart-bar" className="w-5 h-5 inline mr-2 text-blue-400" />
              Ejemplo: Monitor de Reputación de Restaurante
            </h3>
            <div className="space-y-4 text-white/80 text-sm">
              <div className="bg-blue-500/20 p-3 rounded">
                <p><strong>1. Alcance:</strong> Clasificar reseñas como positivas/negativas</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded">
                <p><strong>2. Construir:</strong> Prompt: "Clasifica la siguiente reseña..."</p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded">
                <p><strong>3. Evaluar:</strong> Pruebas internas revelan errores</p>
                <p className="text-xs mt-1 text-green-200">• "¡El mochi es excelente!" → Positivo ✓</p>
                <p className="text-xs text-red-200">• "Mi pasta estaba fría" → Positivo ✗ (Error detectado)</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded">
                <p><strong>4. Desplegar:</strong> Sistema automático en producción</p>
                <p className="text-xs mt-1 text-yellow-200">• "Mi ramen miso sabía a tonkotsu" → Requiere más contexto</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            <Icon name="tools" className="w-6 h-6 inline mr-2 text-yellow-400" />
            Herramientas y Técnicas Avanzadas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="bg-blue-500/20 p-4 rounded-xl text-center">
              <Icon name="message-square" className="w-12 h-12 text-blue-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Prompting</h4>
              <p className="text-white/70 text-sm">
                Proceso iterativo de mejora de instrucciones
              </p>
            </div>

            <div className="bg-green-500/20 p-4 rounded-xl text-center">
              <Icon name="database" className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">RAG</h4>
              <p className="text-white/70 text-sm">
                Acceso a datos externos y actualizados
              </p>
            </div>

            <div className="bg-purple-500/20 p-4 rounded-xl text-center">
              <Icon name="settings" className="w-12 h-12 text-purple-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Fine-tuning</h4>
              <p className="text-white/70 text-sm">
                Adaptación del modelo a tareas específicas
              </p>
            </div>

            <div className="bg-orange-500/20 p-4 rounded-xl text-center">
              <Icon name="cpu" className="w-12 h-12 text-orange-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Pre-training</h4>
              <p className="text-white/70 text-sm">
                Entrenar un modelo desde cero (muy avanzado)
              </p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-yellow-500/10 to-orange-500/10">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            <Icon name="lightbulb" className="w-6 h-6 inline mr-2 text-yellow-400" />
            Características del Desarrollo con IA Generativa
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-yellow-200 font-semibold mb-3">✨ Ventajas Únicas</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• <strong>Desarrollo ultrarrápido:</strong> Prototipos en horas/días vs meses</li>
                <li>• <strong>Barrera de entrada baja:</strong> No requiere expertise en ML</li>
                <li>• <strong>Experimentación fácil:</strong> Cambios rápidos de prompts</li>
                <li>• <strong>Resultados inmediatos:</strong> Feedback instantáneo</li>
              </ul>
            </div>
            <div>
              <h4 className="text-orange-200 font-semibold mb-3">🔄 Proceso Empírico</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• <strong>Altamente experimental:</strong> Encontrar y corregir errores</li>
                <li>• <strong>Iterativo por naturaleza:</strong> Mejora continua necesaria</li>
                <li>• <strong>Casos inesperados:</strong> Usuarios siempre sorprenden</li>
                <li>• <strong>Monitoreo esencial:</strong> Vigilar comportamiento en producción</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 9: Uso Cotidiano - Introducción
  {
    id: 9,
    type: 'content',
    title: 'IA Generativa en tu Día a Día',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Transformando la productividad personal</h3>
            <p className="text-white/80">Aplicaciones prácticas que puedes usar hoy mismo</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ClickableInfo
            title="Asistente de Escritura"
            content={
              <div>
                <h4 className="text-xl font-bold mb-4">Mejora tu Comunicación Escrita</h4>
                
                <h5 className="font-bold mb-2">Casos de Uso:</h5>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Emails profesionales:</strong> Transforma borradores en comunicaciones pulidas</li>
                  <li>• <strong>Informes:</strong> Estructura y mejora la claridad de tus documentos</li>
                  <li>• <strong>Propuestas:</strong> Genera ideas y refina presentaciones</li>
                  <li>• <strong>Redes sociales:</strong> Crea contenido engaging para diferentes plataformas</li>
                </ul>
                
                <h5 className="font-bold mb-2">Ejemplo Práctico:</h5>
                <div className="bg-gray-50 p-3 rounded mb-2">
                  <p className="text-sm font-mono">Borrador: "necesito mas tiempo para el proyecto porque hay muchos problemas"</p>
                </div>
                <div className="bg-green-50 p-3 rounded">
                  <p className="text-sm">Mejorado: "Solicito una extensión del plazo para el proyecto debido a desafíos técnicos imprevistos que requieren análisis adicional para garantizar la calidad del entregable."</p>
                </div>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p><strong>Herramientas recomendadas:</strong> ChatGPT, Claude, Grammarly AI, Jasper</p>
                </div>
              </div>
            }
            className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="text-center mb-4">
              <Icon name="pen" className="w-16 h-16 text-blue-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">Escritura</h3>
            </div>
            <div className="space-y-2 text-white/80 text-sm">
              <p>✉️ Emails profesionales</p>
              <p>📄 Informes y documentos</p>
              <p>💡 Brainstorming de ideas</p>
              <p>📱 Contenido para redes</p>
            </div>
          </ClickableInfo>

          <ClickableInfo
            title="Asistente de Programación"
            content={
              <div>
                <h4 className="text-xl font-bold mb-4">Acelera tu Desarrollo de Software</h4>
                
                <h5 className="font-bold mb-2">Capacidades:</h5>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Generación de código:</strong> Escribe funciones completas desde descripciones</li>
                  <li>• <strong>Debugging:</strong> Encuentra y corrige errores en tu código</li>
                  <li>• <strong>Explicaciones:</strong> Entiende código complejo con explicaciones claras</li>
                  <li>• <strong>Refactoring:</strong> Mejora la calidad y eficiencia del código</li>
                  <li>• <strong>Tests:</strong> Genera casos de prueba automáticamente</li>
                </ul>
                
                <h5 className="font-bold mb-2">Ejemplo Real:</h5>
                <div className="bg-gray-50 p-3 rounded mb-2">
                  <p className="text-sm italic">"Necesito una función en Python que valide emails"</p>
                </div>
                <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-xs">
                  <pre>{`import re

def validate_email(email):
    pattern = r'^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$'
    return re.match(pattern, email) is not None`}</pre>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <p><strong>Herramientas:</strong> GitHub Copilot, Cursor, Tabnine, Amazon CodeWhisperer</p>
                </div>
              </div>
            }
            className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="text-center mb-4">
              <Icon name="code" className="w-16 h-16 text-green-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">Programación</h3>
            </div>
            <div className="space-y-2 text-white/80 text-sm">
              <p>💻 Generación de código</p>
              <p>🐛 Debugging asistido</p>
              <p>📚 Documentación automática</p>
              <p>🔄 Refactoring inteligente</p>
            </div>
          </ClickableInfo>

          <ClickableInfo
            title="Asistente de Aprendizaje"
            content={
              <div>
                <h4 className="text-xl font-bold mb-4">Personaliza tu Educación</h4>
                
                <h5 className="font-bold mb-2">Aplicaciones Educativas:</h5>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Tutor personal:</strong> Explicaciones adaptadas a tu nivel</li>
                  <li>• <strong>Resúmenes:</strong> Condensa libros y artículos largos</li>
                  <li>• <strong>Práctica:</strong> Genera ejercicios y problemas personalizados</li>
                  <li>• <strong>Idiomas:</strong> Conversaciones y correcciones en tiempo real</li>
                  <li>• <strong>Conceptos complejos:</strong> Analogías y explicaciones simplificadas</li>
                </ul>
                
                <h5 className="font-bold mb-2">Ejemplo de Uso:</h5>
                <div className="bg-blue-50 p-3 rounded mb-4">
                  <p className="text-sm italic">"Explícame la mecánica cuántica como si tuviera 10 años"</p>
                  <p className="text-sm mt-2">→ Recibe una explicación con analogías simples sobre partículas que pueden estar en dos lugares a la vez, como un superhéroe</p>
                </div>
                
                <h5 className="font-bold mb-2">Técnicas de Estudio Mejoradas:</h5>
                <ul className="space-y-1 text-sm">
                  <li>• Genera flashcards automáticamente</li>
                  <li>• Crea mapas mentales de temas complejos</li>
                  <li>• Simula exámenes con preguntas relevantes</li>
                  <li>• Obtén feedback instantáneo en tus respuestas</li>
                </ul>
                
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p><strong>Plataformas:</strong> Khan Academy AI, Duolingo Max, Socratic by Google</p>
                </div>
              </div>
            }
            className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="text-center mb-4">
              <Icon name="graduation-cap" className="w-16 h-16 text-purple-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">Aprendizaje</h3>
            </div>
            <div className="space-y-2 text-white/80 text-sm">
              <p>📚 Resúmenes de textos</p>
              <p>🎓 Tutor personalizado</p>
              <p>🌍 Práctica de idiomas</p>
              <p>🧪 Explicaciones simples</p>
            </div>
          </ClickableInfo>

          <ClickableInfo
            title="Asistente Creativo"
            content={
              <div>
                <h4 className="text-xl font-bold mb-4">Desbloquea tu Creatividad</h4>
                
                <h5 className="font-bold mb-2">Herramientas Creativas:</h5>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Diseño gráfico:</strong> Genera logos, ilustraciones y arte conceptual</li>
                  <li>• <strong>Música:</strong> Crea melodías y arreglos musicales</li>
                  <li>• <strong>Video:</strong> Scripts, storyboards y edición asistida</li>
                  <li>• <strong>3D:</strong> Modelos y texturas desde descripciones</li>
                  <li>• <strong>Escritura creativa:</strong> Historias, poemas y guiones</li>
                </ul>
                
                <h5 className="font-bold mb-2">Proceso Creativo Mejorado:</h5>
                <ol className="space-y-2 text-sm">
                  <li>1. <strong>Ideación:</strong> Genera múltiples conceptos rápidamente</li>
                  <li>2. <strong>Iteración:</strong> Refina ideas con variaciones</li>
                  <li>3. <strong>Inspiración:</strong> Combina estilos y referencias</li>
                  <li>4. <strong>Finalización:</strong> Pulir detalles con precisión</li>
                </ol>
                
                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <p><strong>Herramientas:</strong> DALL-E 3, Midjourney, Stable Diffusion, Adobe Firefly, Runway ML</p>
                </div>
              </div>
            }
            className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="text-center mb-4">
              <Icon name="palette" className="w-16 h-16 text-pink-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">Creatividad</h3>
            </div>
            <div className="space-y-2 text-white/80 text-sm">
              <p>🎨 Generación de imágenes</p>
              <p>🎵 Composición musical</p>
              <p>🎬 Guiones y storyboards</p>
              <p>✨ Ideas innovadoras</p>
            </div>
          </ClickableInfo>

          <ClickableInfo
            title="Productividad Personal"
            content={
              <div>
                <h4 className="text-xl font-bold mb-4">Optimiza tu Tiempo y Esfuerzo</h4>
                
                <h5 className="font-bold mb-2">Automatizaciones Diarias:</h5>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Gestión de calendario:</strong> Programa reuniones inteligentemente</li>
                  <li>• <strong>Toma de notas:</strong> Transcribe y resume reuniones</li>
                  <li>• <strong>Organización:</strong> Categoriza y prioriza tareas</li>
                  <li>• <strong>Investigación:</strong> Recopila y sintetiza información</li>
                  <li>• <strong>Planificación:</strong> Crea itinerarios y planes de proyecto</li>
                </ul>
                
                <h5 className="font-bold mb-2">Flujo de Trabajo Mejorado:</h5>
                <div className="bg-gray-50 p-4 rounded">
                  <p className="font-semibold mb-2">Ejemplo: Preparación de Reunión</p>
                  <ol className="space-y-1 text-sm">
                    <li>1. IA resume emails y documentos relevantes</li>
                    <li>2. Genera agenda basada en prioridades</li>
                    <li>3. Prepara puntos de discusión clave</li>
                    <li>4. Crea plantilla de notas para la reunión</li>
                    <li>5. Envía resumen post-reunión automáticamente</li>
                  </ol>
                </div>
                
                <div className="bg-orange-50 p-4 rounded-lg mt-4">
                  <p><strong>Apps:</strong> Notion AI, Otter.ai, Motion, Reclaim AI, Taskade</p>
                </div>
              </div>
            }
            className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="text-center mb-4">
              <Icon name="rocket" className="w-16 h-16 text-orange-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">Productividad</h3>
            </div>
            <div className="space-y-2 text-white/80 text-sm">
              <p>📅 Gestión de tiempo</p>
              <p>📝 Notas inteligentes</p>
              <p>🎯 Priorización de tareas</p>
              <p>🔄 Automatizaciones</p>
            </div>
          </ClickableInfo>

          <ClickableInfo
            title="Análisis de Datos"
            content={
              <div>
                <h4 className="text-xl font-bold mb-4">Convierte Datos en Insights</h4>
                
                <h5 className="font-bold mb-2">Capacidades Analíticas:</h5>
                <ul className="space-y-2 mb-4">
                  <li>• <strong>Análisis exploratorio:</strong> Descubre patrones en tus datos</li>
                  <li>• <strong>Visualizaciones:</strong> Genera gráficos y dashboards</li>
                  <li>• <strong>Predicciones:</strong> Modelos simples sin programar</li>
                  <li>• <strong>Reportes:</strong> Genera informes ejecutivos automáticamente</li>
                  <li>• <strong>Limpieza de datos:</strong> Detecta y corrige inconsistencias</li>
                </ul>
                
                <h5 className="font-bold mb-2">Caso de Uso Real:</h5>
                <div className="bg-blue-50 p-4 rounded">
                  <p className="text-sm italic mb-2">"Analiza estas ventas mensuales y dame insights clave"</p>
                  <p className="text-sm">La IA puede:</p>
                  <ul className="text-sm mt-2 space-y-1">
                    <li>• Identificar tendencias estacionales</li>
                    <li>• Detectar anomalías en los datos</li>
                    <li>• Sugerir factores que influyen en picos</li>
                    <li>• Predecir próximos 3 meses</li>
                    <li>• Recomendar acciones basadas en patrones</li>
                  </ul>
                </div>
                
                <div className="bg-teal-50 p-4 rounded-lg mt-4">
                  <p><strong>Herramientas:</strong> ChatGPT Advanced Data Analysis, Claude, Julius AI, DataRobot</p>
                </div>
              </div>
            }
            className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform"
          >
            <div className="text-center mb-4">
              <Icon name="chart-line" className="w-16 h-16 text-teal-400 mx-auto mb-3" />
              <h3 className="text-xl font-bold text-white">Análisis</h3>
            </div>
            <div className="space-y-2 text-white/80 text-sm">
              <p>📊 Interpretación de datos</p>
              <p>📈 Tendencias y patrones</p>
              <p>🎯 Insights accionables</p>
              <p>📋 Reportes automáticos</p>
            </div>
          </ClickableInfo>
        </div>

        <div className="glass-effect p-6 rounded-xl mt-8">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            💡 Mejores Prácticas para el Uso Diario
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <h4 className="text-white font-semibold">✅ Qué Hacer</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Usa IA como punto de partida, no como producto final</li>
                <li>• Verifica información crítica o factual</li>
                <li>• Personaliza y adapta las respuestas a tu contexto</li>
                <li>• Experimenta con diferentes prompts para mejores resultados</li>
                <li>• Mantén un tono conversacional y específico</li>
              </ul>
            </div>
            <div className="space-y-3">
              <h4 className="text-white font-semibold">❌ Qué Evitar</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• No compartas información confidencial o personal</li>
                <li>• No dependas 100% sin revisión humana</li>
                <li>• No uses para decisiones médicas o legales críticas</li>
                <li>• No asumas que todo es 100% preciso</li>
                <li>• No ignores las políticas de tu empresa sobre IA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 10: Casos de Éxito y Futuro
  {
    id: 10,
    type: 'content',
    title: 'Casos de Éxito y el Futuro de la IA Generativa',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Transformación real en organizaciones</h3>
            <p className="text-white/80">Y lo que nos espera en el horizonte</p>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🏆 Casos de Éxito Empresariales 2024
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-blue-500/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Icon name="server" className="w-8 h-8 text-blue-400 mr-3" />
                <h4 className="text-white font-bold">Amazon Q - Modernización de Software</h4>
              </div>
              <p className="text-white/90 mb-3">
                Redujo actualización de Java de 50 días-desarrollador a pocas horas
              </p>
              <div className="space-y-2 text-white/70 text-sm">
                <p>• <strong>Ahorro:</strong> 4,500 años-desarrollador de trabajo</p>
                <p>• <strong>Resultado:</strong> $260 millones en eficiencia anual</p>
                <p>• <strong>Impacto:</strong> 50% de sistemas Java modernizados en 6 meses</p>
                <p>• <a href="https://www.aboutamazon.com/news/aws/amazon-q-ai-java-upgrades" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline text-xs">Ver más detalles →</a></p>
              </div>
            </div>

            <div className="bg-green-500/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Icon name="shopping-bag" className="w-8 h-8 text-green-400 mr-3" />
                <h4 className="text-white font-bold">Best Buy + Google Gemini</h4>
              </div>
              <p className="text-white/90 mb-3">
                Asistente virtual potenciado por Gemini para servicio al cliente
              </p>
              <div className="space-y-2 text-white/70 text-sm">
                <p>• <strong>Funciones:</strong> Solución de problemas, reprogramación de entregas</p>
                <p>• <strong>Integración:</strong> Gestión de suscripciones Geek Squad</p>
                <p>• <strong>Experiencia:</strong> Servicio omnicanal en tienda y digital</p>
                <p>• <strong>Lanzamiento:</strong> Verano 2024</p>
              </div>
            </div>

            <div className="bg-purple-500/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Icon name="mobile-alt" className="w-8 h-8 text-purple-400 mr-3" />
                <h4 className="text-white font-bold">Samsung Galaxy S24 + Gemini Pro</h4>
              </div>
              <p className="text-white/90 mb-3">
                IA integrada en smartphones para experiencias mágicas
              </p>
              <div className="space-y-2 text-white/70 text-sm">
                <p>• <strong>Resumen de texto:</strong> Condensa información automáticamente</p>
                <p>• <strong>Edición mágica:</strong> Imagen 2 para transformación de fotos</p>
                <p>• <strong>Organización:</strong> IA para gestión inteligente de contenido</p>
                <p>• <strong>Robot Ballie:</strong> Compañero doméstico con IA conversacional</p>
              </div>
            </div>

            <div className="bg-orange-500/20 p-6 rounded-lg">
              <div className="flex items-center mb-4">
                <Icon name="bolt" className="w-8 h-8 text-orange-400 mr-3" />
                <h4 className="text-white font-bold">AES + Claude (Anthropic)</h4>
              </div>
              <p className="text-white/90 mb-3">
                Automatización de auditorías de seguridad energética con IA
              </p>
              <div className="space-y-2 text-white/70 text-sm">
                <p>• <strong>Reducción costos:</strong> 99% menos en auditorías</p>
                <p>• <strong>Tiempo:</strong> De 14 días a 1 hora</p>
                <p>• <strong>Precisión:</strong> +10-20% de mejora</p>
                <p>• <strong>Tecnología:</strong> Vertex AI + Claude models</p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2 text-center">
              <Icon name="chart-line" className="w-5 h-5 inline mr-2" />
              Estadísticas Clave de Adopción 2024
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
              <div className="bg-white/5 p-3 rounded">
                <p className="text-2xl font-bold text-blue-300">72%</p>
                <p className="text-white/70 text-sm">de organizaciones usan IA regularmente</p>
              </div>
              <div className="bg-white/5 p-3 rounded">
                <p className="text-2xl font-bold text-green-300">63%</p>
                <p className="text-white/70 text-sm">generan texto con IA generativa</p>
              </div>
              <div className="bg-white/5 p-3 rounded">
                <p className="text-2xl font-bold text-purple-300">53%</p>
                <p className="text-white/70 text-sm">de ejecutivos la usan regularmente</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            <Icon name="users" className="w-6 h-6 inline mr-2 text-blue-400" />
            El Espectro de Automatización en Servicio al Cliente
          </h3>
          
          <p className="text-white/90 text-center mb-6">
            Las empresas están implementando chatbots de diferentes formas según su nivel de confianza y necesidades
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div className="bg-red-500/20 p-4 rounded-xl text-center">
              <Icon name="users" className="w-12 h-12 text-red-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Solo Humanos</h4>
              <p className="text-white/70 text-sm mb-3">
                Centros de atención tradicionales donde agentes humanos manejan todo
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                Control total, pero costoso y lento
              </div>
            </div>

            <div className="bg-orange-500/20 p-4 rounded-xl text-center">
              <Icon name="user-check" className="w-12 h-12 text-orange-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Bot Apoya Humano</h4>
              <p className="text-white/70 text-sm mb-3">
                IA sugiere respuestas, humano revisa y envía
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                Seguro: humano siempre supervisa
              </div>
            </div>

            <div className="bg-yellow-500/20 p-4 rounded-xl text-center">
              <Icon name="filter" className="w-12 h-12 text-yellow-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Bot Clasifica</h4>
              <p className="text-white/70 text-sm mb-3">
                Bot maneja casos fáciles, escala los complejos a humanos
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                Eficiente: humanos se enfocan en casos difíciles
              </div>
            </div>

            <div className="bg-green-500/20 p-4 rounded-xl text-center">
              <Icon name="robot" className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h4 className="text-white font-bold mb-2">Solo Chatbots</h4>
              <p className="text-white/70 text-sm mb-3">
                IA responde directamente sin intervención humana
              </p>
              <div className="bg-white/10 p-2 rounded text-xs text-white/60">
                Rápido y barato, pero riesgo de errores
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-xl">
            <h4 className="text-white font-semibold mb-4 text-center">
              <Icon name="shield-check" className="w-5 h-5 inline mr-2" />
              Consejos para Implementación Segura
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/5 p-4 rounded-lg">
                <h5 className="text-blue-200 font-semibold mb-2">🏢 Empezar Internamente</h5>
                <p className="text-white/80 text-sm">
                  Primero usa el chatbot con empleados para probar y mejorar antes de exponerlo a clientes.
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h5 className="text-green-200 font-semibold mb-2">👨‍💼 Human-in-the-Loop</h5>
                <p className="text-white/80 text-sm">
                  Comienza con supervisión humana para identificar problemas y ajustar respuestas.
                </p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg">
                <h5 className="text-purple-200 font-semibold mb-2">📈 Evolucionar Gradualmente</h5>
                <p className="text-white/80 text-sm">
                  Aumenta la autonomía del bot conforme demuestre confiabilidad y precisión.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-yellow-500/20 p-4 rounded-lg">
            <h4 className="text-yellow-100 font-semibold mb-2">
              <Icon name="lightbulb" className="w-5 h-5 inline mr-2" />
              Ejemplo Real: Sistema de Monitoreo
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white/80 text-sm">
              <div>
                <p><strong>Consulta simple:</strong> "¿Cuál es el estado de mi pedido?"</p>
                <p className="text-green-200">→ Bot puede manejar automáticamente</p>
              </div>
              <div>
                <p><strong>Consulta compleja:</strong> "Mi producto llegó dañado y necesito una solución especial"</p>
                <p className="text-orange-200">→ Bot escala a agente humano</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">
              <Icon name="rocket" className="w-6 h-6 inline mr-2 text-purple-400" />
              El Futuro Cercano (2024-2026)
            </h3>
            
            <div className="space-y-4">
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🤖 Agentes Autónomos</h4>
                <p className="text-white/80 text-sm">
                  IA que puede planificar, ejecutar tareas complejas y usar herramientas sin supervisión constante
                </p>
              </div>

              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🎯 Modelos Especializados</h4>
                <p className="text-white/80 text-sm">
                  IA entrenada específicamente para dominios como medicina, derecho, o ingeniería
                </p>
              </div>

              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🌐 Multimodalidad Total</h4>
                <p className="text-white/80 text-sm">
                  Procesamiento fluido de texto, imagen, audio, video y código en una sola interfaz
                </p>
              </div>

              <div className="bg-orange-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">📱 IA en el Edge</h4>
                <p className="text-white/80 text-sm">
                  Modelos potentes corriendo localmente en tu teléfono o laptop sin internet
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">
              <Icon name="shield-alt" className="w-6 h-6 inline mr-2 text-yellow-400" />
              Consideraciones Éticas y Sociales
            </h3>
            
            <div className="space-y-4">
              <div className="bg-yellow-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">⚖️ Sesgo y Equidad</h4>
                <p className="text-white/80 text-sm">
                  Asegurar que la IA no perpetúe o amplifique prejuicios existentes
                </p>
              </div>

              <div className="bg-red-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🔒 Privacidad y Seguridad</h4>
                <p className="text-white/80 text-sm">
                  Proteger datos sensibles y prevenir usos maliciosos de la tecnología
                </p>
              </div>

              <div className="bg-teal-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">💼 Impacto Laboral</h4>
                <p className="text-white/80 text-sm">
                  Preparar a trabajadores para colaborar con IA, no ser reemplazados por ella
                </p>
              </div>

              <div className="bg-pink-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🎓 Educación Continua</h4>
                <p className="text-white/80 text-sm">
                  Actualizar habilidades constantemente en un mundo que cambia rápidamente
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🌟 Tu Rol en la Era de la IA Generativa
          </h3>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center">
              <p className="text-xl text-white/90 mb-4">
                "El futuro pertenece a quienes aprenden a colaborar con la IA, no a quienes compiten contra ella"
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <Icon name="lightbulb" className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-2">Mantén la Curiosidad</h4>
                <p className="text-white/70 text-sm">
                  Experimenta con nuevas herramientas y técnicas constantemente
                </p>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <Icon name="users" className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-2">Enfócate en lo Humano</h4>
                <p className="text-white/70 text-sm">
                  Desarrolla habilidades que la IA no puede replicar: creatividad, empatía, ética
                </p>
              </div>
              
              <div className="bg-white/10 p-4 rounded-lg text-center">
                <Icon name="trending-up" className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <h4 className="text-white font-semibold mb-2">Sé un Multiplicador</h4>
                <p className="text-white/70 text-sm">
                  Usa IA para amplificar tu impacto y crear más valor
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-lg">
              <p className="text-white text-center text-lg">
                <Icon name="rocket" className="w-6 h-6 inline mr-2" />
                <strong>Comienza hoy:</strong> Elige una herramienta de IA y úsala en tu próxima tarea. 
                El mejor momento para empezar es ahora.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

// Combinamos las slides con el nuevo capítulo de Prompting
// Insertamos las slides de Prompting después del slide 2 (índice 2)
export const iaGenerativaSlides = [
  ...baseIaGenerativaSlides.slice(0, 3), // Slides 0-2 (hasta "Cómo funcionan los LLMs")
  ...promptingSlides, // Nuevo capítulo completo de Prompting
  ...baseIaGenerativaSlides.slice(3) // Resto de slides (desde el antiguo slide 3 en adelante)
];

// Componente Demo de Generación de Texto
function GenerativeAIDemo() {
  const [input, setInput] = React.useState("El futuro de la tecnología");
  const [generating, setGenerating] = React.useState(false);
  const [output, setOutput] = React.useState("");
  const [currentWord, setCurrentWord] = React.useState(0);
  
  const possibleContinuations = {
    "El futuro de la tecnología": ["es", "será", "está", "parece"],
    "es": ["brillante", "incierto", "fascinante", "prometedor"],
    "será": ["revolucionario", "transformador", "impresionante"],
    "brillante": ["y", "con", "para", "."],
    "y": ["lleno", "repleto", "cargado"],
    "lleno": ["de", "con"],
    "de": ["oportunidades", "innovaciones", "sorpresas"],
  };

  const generateText = () => {
    setGenerating(true);
    setOutput("");
    setCurrentWord(0);
    
    let generated = input + " ";
    let lastWord = input.split(" ").pop();
    
    const generateNextWord = (text, word, wordIndex) => {
      if (wordIndex >= 6) {
        setGenerating(false);
        return;
      }
      
      const options = possibleContinuations[word] || ["innovación", "tecnología", "futuro"];
      const selected = options[Math.floor(Math.random() * options.length)];
      
      setTimeout(() => {
        const newText = text + selected + " ";
        setOutput(newText);
        setCurrentWord(wordIndex + 1);
        
        if (!selected.includes(".")) {
          generateNextWord(newText, selected, wordIndex + 1);
        } else {
          setGenerating(false);
        }
      }, 800);
    };
    
    generateNextWord(generated, lastWord, 0);
  };

  return (
    <div className="glass-effect p-8 rounded-xl mb-8">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        🤖 Generación de Texto en Tiempo Real
      </h3>
      
      <div className="space-y-6">
        <div>
          <label className="text-white font-semibold mb-2 block">
            Texto inicial:
          </label>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 
                     focus:border-blue-400 focus:outline-none"
            placeholder="Escribe el inicio de una frase..."
          />
        </div>

        <button
          onClick={generateText}
          disabled={generating || !input}
          className={`w-full py-3 rounded-lg font-semibold transition-all
            ${generating 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-blue-500 hover:bg-blue-600 cursor-pointer'} 
            text-white`}
        >
          {generating ? 'Generando...' : 'Generar Continuación'}
        </button>

        {output && (
          <div className="bg-white/5 p-4 rounded-lg">
            <p className="text-white font-mono">
              <span className="text-white/60">{input}</span>
              {" "}
              <span className="text-green-400">
                {output.replace(input, "").trim()}
              </span>
              {generating && <span className="animate-pulse">▊</span>}
            </p>
          </div>
        )}

        {generating && (
          <div className="text-center">
            <p className="text-white/60 text-sm">
              Prediciendo palabra {currentWord + 1}...
            </p>
            <div className="mt-2 flex justify-center space-x-2">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className={`w-2 h-2 rounded-full transition-all
                    ${i <= currentWord ? 'bg-blue-400' : 'bg-white/20'}`}
                />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// Componente Demo de RAG
function RAGDemo() {
  const [question, setQuestion] = React.useState("¿Cuál es la política de trabajo remoto?");
  const [useRAG, setUseRAG] = React.useState(true);
  const [searching, setSearching] = React.useState(false);
  const [documents, setDocuments] = React.useState([]);
  const [response, setResponse] = React.useState("");

  const knowledgeBase = {
    "política de trabajo remoto": {
      doc: "Política de Trabajo Remoto v2.3 (Enero 2024)",
      content: "Los empleados pueden trabajar remotamente hasta 3 días por semana. Requiere aprobación del supervisor. Horario flexible entre 7 AM y 7 PM. Reuniones obligatorias los martes."
    },
    "beneficios": {
      doc: "Manual de Beneficios 2024",
      content: "Seguro médico completo, 21 días de vacaciones, gimnasio subsidiado, programa de desarrollo profesional con presupuesto de $2000/año."
    },
    "horario": {
      doc: "Reglamento Interno",
      content: "Horario estándar: 9 AM - 6 PM. Flexibilidad de ±2 horas. Viernes corto hasta las 3 PM en verano."
    }
  };

  const searchDocuments = () => {
    setSearching(true);
    setDocuments([]);
    setResponse("");

    setTimeout(() => {
      // Simular búsqueda
      const query = question.toLowerCase();
      const foundDocs = [];
      
      Object.entries(knowledgeBase).forEach(([key, value]) => {
        if (query.includes(key)) {
          foundDocs.push(value);
        }
      });

      setDocuments(foundDocs);
      setSearching(false);

      // Generar respuesta
      setTimeout(() => {
        if (useRAG && foundDocs.length > 0) {
          setResponse(`Según la ${foundDocs[0].doc}: "${foundDocs[0].content}"`);
        } else if (useRAG) {
          setResponse("No encontré documentos específicos sobre este tema en la base de conocimientos.");
        } else {
          setResponse("No tengo acceso a información específica de tu empresa. Las políticas de trabajo remoto varían según cada organización.");
        }
      }, 1000);
    }, 1500);
  };

  return (
    <div className="glass-effect p-8 rounded-xl mb-8">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        🔍 Comparación: Con y Sin RAG
      </h3>

      <div className="space-y-6">
        <div>
          <label className="text-white font-semibold mb-2 block">
            Pregunta sobre tu empresa:
          </label>
          <input
            type="text"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
            className="w-full p-3 rounded-lg bg-white/10 text-white border border-white/20 
                     focus:border-blue-400 focus:outline-none"
            placeholder="Haz una pregunta sobre políticas internas..."
          />
        </div>

        <div className="flex items-center justify-center space-x-6">
          <label className="flex items-center text-white cursor-pointer">
            <input
              type="radio"
              checked={!useRAG}
              onChange={() => setUseRAG(false)}
              className="mr-2"
            />
            <span>Sin RAG</span>
          </label>
          <label className="flex items-center text-white cursor-pointer">
            <input
              type="radio"
              checked={useRAG}
              onChange={() => setUseRAG(true)}
              className="mr-2"
            />
            <span>Con RAG</span>
          </label>
        </div>

        <button
          onClick={searchDocuments}
          disabled={searching || !question}
          className={`w-full py-3 rounded-lg font-semibold transition-all
            ${searching 
              ? 'bg-gray-500 cursor-not-allowed' 
              : 'bg-green-500 hover:bg-green-600 cursor-pointer'} 
            text-white`}
        >
          {searching ? 'Procesando...' : 'Obtener Respuesta'}
        </button>

        {searching && useRAG && (
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
              <p className="text-white">Buscando en base de conocimientos...</p>
            </div>
          </div>
        )}

        {documents.length > 0 && (
          <div className="bg-green-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">📄 Documentos encontrados:</h4>
            {documents.map((doc, idx) => (
              <p key={idx} className="text-white/80 text-sm">
                • {doc.doc}
              </p>
            ))}
          </div>
        )}

        {response && (
          <div className={`p-4 rounded-lg ${useRAG ? 'bg-green-500/10' : 'bg-orange-500/10'}`}>
            <h4 className="text-white font-semibold mb-2">
              {useRAG ? '✅ Respuesta con RAG:' : '❌ Respuesta sin RAG:'}
            </h4>
            <p className="text-white/90">{response}</p>
          </div>
        )}
      </div>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-red-500/10 p-4 rounded-lg">
          <h4 className="text-white font-semibold mb-2">Sin RAG:</h4>
          <ul className="text-white/70 text-sm space-y-1">
            <li>• Respuestas genéricas</li>
            <li>• Sin acceso a datos internos</li>
            <li>• Posibles alucinaciones</li>
          </ul>
        </div>
        <div className="bg-green-500/10 p-4 rounded-lg">
          <h4 className="text-white font-semibold mb-2">Con RAG:</h4>
          <ul className="text-white/70 text-sm space-y-1">
            <li>• Respuestas específicas</li>
            <li>• Información actualizada</li>
            <li>• Fuentes verificables</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default iaGenerativaSlides;
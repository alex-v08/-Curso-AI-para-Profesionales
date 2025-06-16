import React from 'react';
import Icon from '../components/Icon';
import {
  InteractiveRegressionDemo,
  MultipleRegressionDemo,
  InteractiveMetricsDemo
} from '../components/InteractiveComponents';

/**
 * Slides adicionales de la presentación (slides 6-23)
 * Continuación de slidesData.js
 */

export const additionalSlides = [
  // Slide 6: Del Programa al Aprendizaje
  {
    id: 6,
    type: 'content',
    title: 'El "Cómo": Del Programa al Aprendizaje',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl">
            <Icon name="lightbulb" className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
            <p className="text-xl text-white">
              Un comportamiento puede ser <strong>aparentemente inteligente sin serlo</strong>
            </p>
            <p className="text-white/70 mt-2">La clave está en <strong>cómo se logra</strong> ese comportamiento</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl border-l-4 border-red-400">
            <div className="flex items-center mb-6">
              <Icon name="code" className="w-10 h-10 text-red-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Opción 1: Programación Clásica</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-red-500/20 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">👨‍💻 Cómo funciona:</p>
                <p className="text-white/80">Un humano escribe <strong>reglas explícitas</strong> para cada acción</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-green-300 font-mono text-sm">
                  // Ejemplo de programación clásica<br/>
                  if (objeto_detectado) &#123;<br/>
                  &nbsp;&nbsp;mover_brazo(30_grados);<br/>
                  &nbsp;&nbsp;cerrar_pinza();<br/>
                  &#125;
                </p>
              </div>
              
              <div className="bg-red-500/20 p-4 rounded-lg">
                <p className="text-red-100 font-semibold">⚠️ Problemas:</p>
                <ul className="text-white/80 mt-2 space-y-1">
                  <li>• Es rígido y limitado</li>
                  <li>• No se adapta a situaciones nuevas</li>
                  <li>• Requiere programar cada caso posible</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl border-l-4 border-green-400">
            <div className="flex items-center mb-6">
              <Icon name="brain" className="w-10 h-10 text-green-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Opción 2: Machine Learning</h3>
            </div>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">🎯 Cómo funciona:</p>
                <p className="text-white/80">En lugar de programar las reglas, creamos un sistema capaz de <strong>aprenderlas por sí mismo</strong></p>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <Icon name="database" className="w-6 h-6 text-blue-300 inline mr-3" />
                <span className="text-white/80">Aprendizaje basado en <strong>datos</strong></span>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <Icon name="chart-line" className="w-6 h-6 text-blue-300 inline mr-3" />
                <span className="text-white/80">Mejora <strong>automática</strong> del rendimiento</span>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <Icon name="sync" className="w-6 h-6 text-blue-300 inline mr-3" />
                <span className="text-white/80"><strong>Adaptabilidad</strong> a nuevas situaciones</span>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg">
                <p className="text-green-100 font-semibold">✅ Ventajas:</p>
                <ul className="text-white/80 mt-2 space-y-1">
                  <li>• Se adapta a situaciones no previstas</li>
                  <li>• Mejora con más experiencia (datos)</li>
                  <li>• Encuentra patrones complejos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="glass-effect p-6 rounded-xl bg-blue-500/20">
            <Icon name="key" className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <p className="text-xl text-white">
              💡 <strong>Insight clave:</strong> Esta capacidad de aprender es lo que define a la <strong>IA moderna</strong>
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 7: ¿Qué es Machine Learning?
  {
    id: 7,
    type: 'content',
    title: '¿Qué es el Machine Learning (ML)?',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-8 rounded-xl">
            <Icon name="cogs" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Definición</h3>
            <p className="text-xl text-white/90">
              <strong>Machine Learning</strong> es la rama del campo de la Inteligencia Artificial 
              que busca dotar a las máquinas de <strong>capacidad de aprendizaje</strong>.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Icon name="lightbulb" className="w-6 h-6 mr-3 text-yellow-400" />
              En Esencia
            </h4>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <p className="text-white/90">
                  Es el <strong>motor que impulsa</strong> la mayoría de las aplicaciones de IA que vemos hoy
                </p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <p className="text-white/90">
                  Permite que un sistema <strong>mejore su rendimiento</strong> en una tarea a través de la experiencia
                </p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <p className="text-white/90">
                  <strong>Sin ser explícitamente programado</strong> para cada situación específica
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h4 className="text-xl font-semibold text-white mb-6 flex items-center">
              <Icon name="rocket" className="w-6 h-6 mr-3 text-orange-400" />
              Aplicaciones Actuales
            </h4>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-orange-500/20 p-3 rounded-lg flex items-center">
                <Icon name="shopping-cart" className="w-5 h-5 text-orange-300 mr-3" />
                <span className="text-white/80">Recomendaciones de productos</span>
              </div>
              <div className="bg-red-500/20 p-3 rounded-lg flex items-center">
                <Icon name="envelope" className="w-5 h-5 text-red-300 mr-3" />
                <span className="text-white/80">Filtros de spam</span>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg flex items-center">
                <Icon name="music" className="w-5 h-5 text-green-300 mr-3" />
                <span className="text-white/80">Playlists personalizadas</span>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg flex items-center">
                <Icon name="home" className="w-5 h-5 text-blue-300 mr-3" />
                <span className="text-white/80">Valuación de propiedades</span>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg flex items-center">
                <Icon name="route" className="w-5 h-5 text-purple-300 mr-3" />
                <span className="text-white/80">Sistemas de navegación</span>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="glass-effect p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-white mb-4">🔗 La Relación: IA y ML</h4>
            <div className="text-2xl font-mono text-blue-300 mb-4">M.L. ⊆ I.A.</div>
            <p className="text-lg text-white/90">
              <strong>Todo Machine Learning es Inteligencia Artificial</strong><br/>
              pero <strong>NO toda la Inteligencia Artificial es Machine Learning</strong>
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8: Redes Neuronales y Deep Learning
  {
    id: 8,
    type: 'content',
    title: 'Profundizando: Redes Neuronales y Deep Learning',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl">
            <p className="text-xl text-white">
              Dentro del Machine Learning existen <strong>muchas técnicas</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <div className="glass-effect p-4 rounded-xl text-center">
            <Icon name="tree" className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <p className="text-white text-sm">Árboles de Decisión</p>
          </div>
          <div className="glass-effect p-4 rounded-xl text-center">
            <Icon name="chart-line" className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <p className="text-white text-sm">Regresión Lineal</p>
          </div>
          <div className="glass-effect p-4 rounded-xl text-center">
            <Icon name="bullseye" className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <p className="text-white text-sm">Support Vector Machines</p>
          </div>
          <div className="glass-effect p-4 rounded-xl text-center border-2 border-yellow-400">
            <Icon name="brain" className="w-8 h-8 text-yellow-400 mx-auto mb-2" />
            <p className="text-white text-sm font-semibold">Redes Neuronales</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Icon name="project-diagram" className="w-8 h-8 mr-3 text-blue-400" />
              Redes Neuronales
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">🧠 Inspiración:</p>
                <p className="text-white/80">Algoritmos de ML inspirados en el <strong>cerebro humano</strong></p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">🎯 Fortaleza:</p>
                <p className="text-white/80">Especialmente buenas para <strong>encontrar patrones complejos</strong></p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">🔗 Funcionamiento:</p>
                <p className="text-white/80">Procesan información a través de <strong>capas interconectadas</strong></p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Icon name="layer-group" className="w-8 h-8 mr-3 text-purple-400" />
              Deep Learning
            </h3>
            <div className="space-y-4">
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">📚 Definición Simple:</p>
                <p className="text-white/80">Uso de Redes Neuronales con <strong>muchas capas</strong> (profundas)</p>
              </div>
              
              <div className="bg-gray-800 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">🎭 Ejemplo práctico:</p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-red-400 rounded mr-3"></div>
                    <span className="text-white/80"><strong>Capa 1:</strong> Aprende "bordes" y líneas</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-yellow-400 rounded mr-3"></div>
                    <span className="text-white/80"><strong>Capa 2:</strong> Aprende "ojos" y "narices"</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-green-400 rounded mr-3"></div>
                    <span className="text-white/80"><strong>Capa 3:</strong> Aprende "caras" completas</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="glass-effect p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-white mb-4">🔗 Relación Jerárquica</h4>
            <div className="text-lg text-blue-300 font-mono">
              Deep Learning ⊆ Redes Neuronales ⊆ Machine Learning ⊆ Inteligencia Artificial
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 9: Big Data
  {
    id: 9,
    type: 'content',
    title: 'El Combustible: El Rol del Big Data',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-8 rounded-xl">
            <Icon name="question-circle" className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">Pregunta Clave</h3>
            <p className="text-xl text-white/90">
              ¿Por qué el Deep Learning ha <strong>"explotado"</strong> precisamente ahora?
            </p>
          </div>
        </div>

        <div className="text-center mb-8">
          <div className="glass-effect p-8 rounded-xl bg-green-500/20">
            <Icon name="lightbulb" className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">La Respuesta</h3>
            <p className="text-2xl text-white font-bold">
              ¡Necesita datos, <strong>muchísimos datos!</strong>
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Icon name="database" className="w-8 h-8 mr-3 text-blue-400" />
              ¿Qué es Big Data?
            </h3>
            <p className="text-white/90 text-lg mb-6">
              El fenómeno de la <strong>acumulación masiva de información</strong> gracias a:
            </p>
            <div className="space-y-3">
              <div className="bg-blue-500/20 p-4 rounded-lg flex items-center">
                <Icon name="digital-tachograph" className="w-6 h-6 text-blue-300 mr-3" />
                <span className="text-white/80">La <strong>digitalización</strong> de la sociedad</span>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg flex items-center">
                <Icon name="wifi" className="w-6 h-6 text-green-300 mr-3" />
                <span className="text-white/80"><strong>Internet</strong> y dispositivos conectados</span>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg flex items-center">
                <Icon name="hdd" className="w-6 h-6 text-purple-300 mr-3" />
                <span className="text-white/80"><strong>Abaratamiento</strong> del almacenamiento</span>
              </div>
              <div className="bg-orange-500/20 p-4 rounded-lg flex items-center">
                <Icon name="cloud" className="w-6 h-6 text-orange-300 mr-3" />
                <span className="text-white/80"><strong>Computación</strong> en la nube</span>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <Icon name="gas-pump" className="w-8 h-8 mr-3 text-orange-400" />
              El Combustible del ML
            </h3>
            <div className="space-y-4">
              <div className="bg-orange-500/20 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">⛽ Analogía:</p>
                <p className="text-white/80">Big Data es el <strong>combustible</strong> que permite entrenar modelos complejos</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">📈 Regla:</p>
                <p className="text-white/80"><strong>Más datos = Mejores modelos</strong></p>
              </div>
              <div className="bg-red-500/20 p-4 rounded-lg">
                <p className="text-white font-semibold mb-2">⚠️ Limitación:</p>
                <p className="text-white/80"><strong>Sin datos suficientes = Modelos pobres</strong></p>
              </div>
            </div>
            
            <h4 className="text-lg font-semibold text-white mt-6 mb-3">Ejemplos en Acción:</h4>
            <div className="space-y-2">
              <div className="bg-pink-500/20 p-3 rounded-lg">
                <p className="text-white/80"><strong>Instagram:</strong> Millones de fotos → Reconocimiento de imágenes</p>
              </div>
              <div className="bg-red-500/20 p-3 rounded-lg">
                <p className="text-white/80"><strong>YouTube:</strong> Billones de horas → Recomendaciones</p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80"><strong>Google Maps:</strong> Tráfico en tiempo real → Rutas óptimas</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 10: Mapa Conceptual Completo
  {
    id: 10,
    type: 'content',
    title: 'El Mapa Conceptual Completo',
    content: (
      <div className="space-y-8 fade-in">
        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🗺️ Ahora Tienes el Mapa Completo
          </h3>
          
          {/* Diagrama visual jerárquico */}
          <div className="bg-gray-900 p-8 rounded-xl">
            <div className="space-y-4">
              {/* IA */}
              <div className="border-2 border-blue-400 rounded-lg p-4 text-center">
                <h4 className="text-blue-300 font-bold text-lg">INTELIGENCIA ARTIFICIAL</h4>
                <p className="text-white/70 text-sm">Campo general: máquinas que imiten comportamientos inteligentes</p>
              </div>
              
              {/* ML */}
              <div className="ml-8">
                <div className="border-2 border-green-400 rounded-lg p-4 text-center">
                  <h4 className="text-green-300 font-bold text-lg">MACHINE LEARNING</h4>
                  <p className="text-white/70 text-sm">Subcampo: máquinas que aprenden de datos</p>
                </div>
              </div>
              
              {/* Redes Neuronales */}
              <div className="ml-16">
                <div className="border-2 border-purple-400 rounded-lg p-4 text-center">
                  <h4 className="text-purple-300 font-bold text-lg">REDES NEURONALES</h4>
                  <p className="text-white/70 text-sm">Técnica inspirada en el cerebro</p>
                </div>
              </div>
              
              {/* Deep Learning */}
              <div className="ml-24">
                <div className="border-2 border-yellow-400 rounded-lg p-4 text-center">
                  <h4 className="text-yellow-300 font-bold text-lg">DEEP LEARNING</h4>
                  <p className="text-white/70 text-sm">Redes neuronales profundas</p>
                </div>
              </div>
              
              {/* Big Data */}
              <div className="ml-32">
                <div className="border-2 border-orange-400 rounded-lg p-4 text-center bg-orange-500/10">
                  <h4 className="text-orange-300 font-bold text-lg">📊 BIG DATA</h4>
                  <p className="text-white/70 text-sm">El combustible que habilita todo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Icon name="check-circle" className="w-6 h-6 mr-3 text-green-400" />
              Resumen de Relaciones
            </h4>
            <div className="space-y-3 text-white/80">
              <p><strong>1. IA:</strong> Campo general de máquinas inteligentes</p>
              <p><strong>2. ML:</strong> Subcampo enfocado en aprendizaje de datos</p>
              <p><strong>3. Redes Neuronales:</strong> Técnica potente dentro del ML</p>
              <p><strong>4. Deep Learning:</strong> Redes neuronales muy profundas</p>
              <p><strong>5. Big Data:</strong> Combustible que alimenta estos algoritmos</p>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <Icon name="lightbulb" className="w-6 h-6 mr-3 text-yellow-400" />
              Conclusiones Clave
            </h4>
            <div className="space-y-3 text-white/80">
              <p>• La <strong>IA no es una sola cosa</strong>, sino un campo diverso</p>
              <p>• <strong>ML + Deep Learning + Big Data</strong> impulsan la revolución actual</p>
              <p>• Entender las relaciones ayuda a <strong>comunicar mejor</strong></p>
              <p>• Permite <strong>tomar decisiones más informadas</strong></p>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="glass-effect p-6 rounded-xl bg-blue-500/20">
            <Icon name="quote-left" className="w-8 h-8 text-blue-400 mx-auto mb-3" />
            <p className="text-lg text-white/90 italic mb-3">
              "Las máquinas podrán hacer cualquier cosa que hagan las personas,<br/>
              porque las personas no son más que máquinas."
            </p>
            <p className="text-white/70">— <strong>Marvin Minsky</strong> (Pionero de la IA)</p>
          </div>
        </div>
      </div>
    )
  },

  // Continuaré con los slides técnicos (11-23) en la siguiente parte...
];

export default additionalSlides;
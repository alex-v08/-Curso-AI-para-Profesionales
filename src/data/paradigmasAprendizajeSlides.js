import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';
import { 
  AprendizajeSupervisadoDemo, 
  AprendizajeNoSupervisadoDemo, 
  ComparacionParadigmas 
} from '../components/ParadigmasAprendizaje';

/**
 * Slides del módulo de Paradigmas de Aprendizaje
 * Basado en el contenido de DotCSV sobre aprendizaje supervisado y no supervisado
 * Estos slides van ANTES del contenido técnico actual
 */

export const paradigmasAprendizajeSlides = [
  // Slide 0: Introducción al cerebro como inspiración
  {
    id: 0,
    type: 'cover',
    title: 'El Cerebro: Inspiración para el Aprendizaje Artificial',
    subtitle: 'Paradigmas de Aprendizaje en Machine Learning',
    content: (
      <div className="text-center space-y-8 fade-in">
        <div className="flex justify-center mb-8">
          <div className="relative">
            <Icon name="brain" className="w-40 h-40 text-purple-400 pulse-animation" />
            <div className="absolute -inset-6 border-2 border-purple-300 rounded-full animate-ping opacity-20"></div>
            <div className="absolute -inset-4 border-2 border-blue-300 rounded-full animate-pulse opacity-30"></div>
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <blockquote className="text-2xl text-white/90 italic mb-6">
            "El cerebro es una máquina tan potente como compleja, siendo uno de los grandes retos 
            de la humanidad el llegar a descubrir cómo funciona."
          </blockquote>
          <p className="text-xl text-white/80 mb-8">
            Aunque no comprendemos completamente sus mecanismos, el cerebro es una fuente de 
            inspiración fundamental para desarrollar los conceptos más importantes de la IA.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <Icon name="question" className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">¿De dónde emerge la inteligencia?</h3>
            <p className="text-white/70 text-sm">Los procesos que dan lugar al pensamiento y la consciencia</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <Icon name="cogs" className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">¿Qué afecta su funcionamiento?</h3>
            <p className="text-white/70 text-sm">Ecosistemas de bacterias, procesos cuánticos, conexiones neuronales</p>
          </div>
          
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <Icon name="lightbulb" className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-white mb-2">¿Cómo procesamos información?</h3>
            <p className="text-white/70 text-sm">Mecanismos que transforman datos en conocimiento</p>
          </div>
        </div>

        <div className="mt-12 glass-effect p-6 rounded-xl inline-block">
          <p className="text-white/90 text-lg">
            <Icon name="arrow-right" className="w-5 h-5 inline mr-2 text-green-400" />
            <strong>Hoy exploraremos:</strong> Los paradigmas de aprendizaje que imitan estos procesos cerebrales
          </p>
        </div>
      </div>
    )
  },

  // Slide 1: Introducción a paradigmas de aprendizaje
  {
    id: 1,
    type: 'content', 
    title: 'Paradigmas de Aprendizaje: Los Mecanismos Fundamentales',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">¿Cómo aprende una máquina?</h3>
            <p className="text-white/80">Los mecanismos que permiten procesar información nueva y transformarla en conocimiento</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClickableInfo
            title="¿Qué son los Paradigmas de Aprendizaje?"
            content={
              <div>
                <p>Los <strong>paradigmas de aprendizaje</strong> son los enfoques fundamentales que definen cómo los algoritmos de Machine Learning procesan información y adquieren conocimiento.</p>
                
                <h4>¿Por qué son importantes?</h4>
                <ul>
                  <li>• <strong>Fundamento teórico:</strong> Cada algoritmo de ML se basa en uno de estos paradigmas</li>
                  <li>• <strong>Clasificación clara:</strong> El 90% de los algoritmos se pueden clasificar en estos grupos</li>
                  <li>• <strong>Selección de método:</strong> Ayudan a elegir el enfoque correcto para cada problema</li>
                  <li>• <strong>Comprensión profunda:</strong> Entender el "por qué" detrás de cada técnica</li>
                </ul>
                
                <h4>Inspiración biológica:</h4>
                <p>Al igual que los humanos tienen diferentes formas de aprender (por ejemplo, repetición, exploración, ensayo-error), las máquinas también tienen diferentes paradigmas para adquirir conocimiento.</p>
                
                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p><strong>Analogía:</strong> Piensa en estos paradigmas como diferentes "estilos de aprendizaje" que puede adoptar una máquina según el tipo de problema y datos disponibles.</p>
                </div>
              </div>
            }
            className="glass-effect p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Icon name="graduation-cap" className="w-10 h-10 text-blue-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Paradigmas de Aprendizaje</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Los mecanismos fundamentales que permiten a las máquinas procesar información nueva 
              y transformarla en conocimiento utilizable.
            </p>
            <div className="bg-blue-500/20 p-4 rounded-lg">
              <p className="text-blue-100 text-center">
                <strong>Todos los algoritmos de ML se clasifican en 3 grandes grupos</strong>
              </p>
            </div>
          </ClickableInfo>

          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <Icon name="user-graduate" className="w-8 h-8 text-green-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Aprendizaje Supervisado</h4>
              </div>
              <p className="text-white/90 mb-3">
                Aprende de ejemplos con "respuestas correctas" para predecir resultados en nuevos casos.
              </p>
              <div className="text-white/70 text-sm">
                <strong>Ejemplo:</strong> Mostrar miles de fotos etiquetadas como "perro" o "gato" 
                para que aprenda a clasificar nuevas fotos.
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl border-l-4 border-purple-400">
              <div className="flex items-center mb-4">
                <Icon name="search" className="w-8 h-8 text-purple-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Aprendizaje No Supervisado</h4>
              </div>
              <p className="text-white/90 mb-3">
                Encuentra patrones ocultos en datos sin recibir "respuestas correctas" previas.
              </p>
              <div className="text-white/70 text-sm">
                <strong>Ejemplo:</strong> Analizar datos de clientes para descubrir grupos naturales 
                sin saber de antemano qué grupos buscar.
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl border-l-4 border-orange-400">
              <div className="flex items-center mb-4">
                <Icon name="gamepad" className="w-8 h-8 text-orange-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Aprendizaje por Refuerzo</h4>
              </div>
              <p className="text-white/90 mb-3">
                Aprende mediante ensayo-error recibiendo recompensas o castigos por sus acciones.
              </p>
              <div className="text-white/70 text-sm">
                <strong>Ejemplo:</strong> Un videojuego donde la IA aprende a jugar recibiendo 
                puntos por ganar y perdiendo puntos por perder.
              </div>
            </div>
          </div>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-white/20">
            <p className="text-white text-xl">
              <Icon name="lightbulb" className="w-6 h-6 inline mr-2 text-yellow-400" />
              <strong>En esta presentación nos enfocaremos en los dos primeros paradigmas</strong>
            </p>
            <p className="text-white/70 mt-2">
              Que representan el 90% de las aplicaciones actuales de Machine Learning
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2: Aprendizaje Supervisado - Concepto y Demo
  {
    id: 2,
    type: 'content',
    title: 'Aprendizaje Supervisado: Aprender con un Maestro',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">La clave del aprendizaje supervisado</h3>
            <p className="text-white/80">Descubrir la relación entre variables de entrada y variables de salida</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ClickableInfo
            title="Aprendizaje Supervisado - Definición Completa"
            content={
              <div>
                <p><strong>Aprendizaje Supervisado</strong> es un paradigma donde el algoritmo aprende de ejemplos que incluyen tanto las entradas como las salidas correctas (etiquetas).</p>
                
                <h4>Proceso del Aprendizaje Supervisado:</h4>
                <ol>
                  <li>1. <strong>Recolectar datos etiquetados:</strong> Ejemplos entrada-salida</li>
                  <li>2. <strong>Entrenamiento:</strong> El algoritmo busca patrones en los datos</li>
                  <li>3. <strong>Aprendizaje de la función:</strong> Encuentra la relación entrada→salida</li>
                  <li>4. <strong>Generalización:</strong> Aplica lo aprendido a nuevos datos</li>
                  <li>5. <strong>Predicción:</strong> Produce resultados para casos no vistos</li>
                </ol>
                
                <h4>Tipos principales:</h4>
                <ul>
                  <li>• <strong>Regresión:</strong> Predice valores numéricos continuos (precio, temperatura)</li>
                  <li>• <strong>Clasificación:</strong> Predice categorías discretas (spam/no-spam, gato/perro)</li>
                </ul>
                
                <h4>¿Por qué se llama "supervisado"?</h4>
                <p>Porque al mostrarle las respuestas correctas, estamos "supervisando" su proceso de aprendizaje, como un maestro que corrige los ejercicios de un estudiante.</p>
                
                <div className="bg-green-50 p-4 rounded-lg mt-4">
                  <p><strong>La magia:</strong> Una vez entrenado, puede dar respuestas correctas para datos que nunca había visto antes.</p>
                </div>
              </div>
            }
            className="glass-effect p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Icon name="user-graduate" className="w-10 h-10 text-blue-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">¿Cómo Funciona?</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">1. Mostrar ejemplos</h4>
                <p className="text-white/80 text-sm">
                  Para un valor de entrada específico, mostramos el resultado que queremos obtener
                </p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">2. Encontrar patrones</h4>
                <p className="text-white/80 text-sm">
                  El algoritmo busca la relación entre entradas y salidas
                </p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">3. Generalizar</h4>
                <p className="text-white/80 text-sm">
                  Aplica la regla aprendida a nuevos casos nunca vistos
                </p>
              </div>
            </div>
          </ClickableInfo>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Analogía: El Estudiante y el Maestro</h3>
            <div className="space-y-4">
              <div className="bg-yellow-500/20 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="text-yellow-100 font-semibold mb-2">🧑‍🎓 El Estudiante (Algoritmo)</h4>
                <p className="text-white/80 text-sm">
                  Observa muchos ejemplos resueltos y busca patrones para aplicar en problemas nuevos
                </p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="text-blue-100 font-semibold mb-2">👨‍🏫 El Maestro (Datos Etiquetados)</h4>
                <p className="text-white/80 text-sm">
                  Proporciona ejemplos con las respuestas correctas para guiar el aprendizaje
                </p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="text-green-100 font-semibold mb-2">📝 El Examen (Nuevos Datos)</h4>
                <p className="text-white/80 text-sm">
                  Prueba si el estudiante puede aplicar lo aprendido a problemas que nunca había visto
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Demo interactivo */}
        <AprendizajeSupervisadoDemo />
      </div>
    )
  },

  // Slide 3: Ejemplos Avanzados de Aprendizaje Supervisado
  {
    id: 3,
    type: 'content',
    title: 'Aprendizaje Supervisado: Casos Impresionantes',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Más allá de los números simples</h3>
            <p className="text-white/80">Aplicaciones reales que superan las capacidades humanas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <ClickableInfo
              title="Detección de Spam en Emails - Caso de Estudio"
              content={
                <div>
                  <p>Un ejemplo perfecto de cómo el aprendizaje supervisado puede resolver problemas complejos que serían difíciles de programar manualmente.</p>
                  
                  <h4>El Problema:</h4>
                  <p>¿Cómo enseñar a una máquina a distinguir emails legítimos de spam cuando las técnicas de spam cambian constantemente?</p>
                  
                  <h4>La Solución Supervisada:</h4>
                  <ol>
                    <li>1. <strong>Recopilar ejemplos:</strong> Miles de emails etiquetados como spam/no-spam</li>
                    <li>2. <strong>Extraer características:</strong> Palabras clave, formato, remitente, etc.</li>
                    <li>3. <strong>Entrenamiento:</strong> El algoritmo encuentra patrones que distinguen spam</li>
                    <li>4. <strong>Aplicación:</strong> Clasifica automáticamente nuevos emails</li>
                  </ol>
                  
                  <h4>Características que el algoritmo aprende a detectar:</h4>
                  <ul>
                    <li>• <strong>Palabras spam:</strong> "GRATIS", "¡GANA YA!", "ÚLTIMO DÍA"</li>
                    <li>• <strong>Formato sospechoso:</strong> Exceso de mayúsculas, muchos signos de exclamación</li>
                    <li>• <strong>Remitentes dudosos:</strong> Direcciones desconocidas o malformadas</li>
                    <li>• <strong>Enlaces sospechosos:</strong> URLs que redirigen a sitios no confiables</li>
                  </ul>
                  
                  <h4>Resultados impresionantes:</h4>
                  <p>Los filtros modernos de spam detectan más del 99% del spam con menos del 0.1% de falsos positivos.</p>
                  
                  <div className="bg-green-50 p-4 rounded-lg mt-4">
                    <p><strong>¿Por qué funciona tan bien?</strong> Porque puede procesar miles de características simultáneamente y encontrar patrones que los humanos no podríamos detectar manualmente.</p>
                  </div>
                </div>
              }
              className="glass-effect p-6 rounded-xl border-l-4 border-red-400"
            >
              <div className="flex items-center mb-4">
                <Icon name="envelope" className="w-8 h-8 text-red-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Filtrado de Spam</h4>
              </div>
              <p className="text-white/90 mb-4">
                ¿Qué patrones hacen que un correo sea spam? Tú podrías clasificarlo, 
                pero ¿serías capaz de explicar exactamente por qué?
              </p>
              <div className="space-y-3">
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <strong>Spam:</strong> "¡GANASTE $1,000,000! Haz clic AHORA"
                  </p>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <strong>Legítimo:</strong> "Reunión mañana a las 3PM en sala de conferencias"
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-blue-500/20 p-3 rounded-lg">
                <p className="text-blue-100 text-sm">
                  El algoritmo aprende patrones complejos que van más allá de palabras clave simples
                </p>
              </div>
            </ClickableInfo>

            <div className="glass-effect p-6 rounded-xl border-l-4 border-orange-400">
              <div className="flex items-center mb-4">
                <Icon name="heartbeat" className="w-8 h-8 text-orange-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Diagnóstico Médico</h4>
              </div>
              <p className="text-white/90 mb-4">
                Algoritmos que analizan radiografías, resonancias magnéticas y análisis de sangre 
                para detectar enfermedades.
              </p>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong>Radiología:</strong> Detecta tumores en imágenes médicas</p>
                <p>• <strong>Cardiología:</strong> Predice riesgo de infarto</p>
                <p>• <strong>Dermatología:</strong> Identifica cáncer de piel</p>
              </div>
              <div className="mt-4 bg-orange-500/20 p-3 rounded-lg">
                <p className="text-orange-100 text-sm">
                  <strong>Resultado:</strong> En algunos casos, supera la precisión de especialistas humanos
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <ClickableInfo
              title="Detección de Depresión en Instagram - Estudio Real"
              content={
                <div>
                  <p>Un estudio fascinante de 2016 que demostró el poder del aprendizaje supervisado para tareas que parecen imposibles.</p>
                  
                  <h4>El Estudio:</h4>
                  <p>Investigadores de Harvard y Universidad de Vermont entrenaron algoritmos para detectar depresión analizando las fotos de Instagram de usuarios que habían sido diagnosticados clínicamente.</p>
                  
                  <h4>Datos utilizados:</h4>
                  <ul>
                    <li>• <strong>43,950 fotos</strong> de 166 usuarios</li>
                    <li>• <strong>Diagnósticos confirmados</strong> de depresión clínica</li>
                    <li>• <strong>Historiales de publicación</strong> antes del diagnóstico</li>
                  </ul>
                  
                  <h4>Características que el algoritmo aprendió a detectar:</h4>
                  <ul>
                    <li>• <strong>Colores:</strong> Preferencia por azules, grises y colores más oscuros</li>
                    <li>• <strong>Filtros:</strong> Uso de filtros que reducen la saturación (como Inkwell)</li>
                    <li>• <strong>Contenido:</strong> Menos caras en las fotos, más fotos en interiores</li>
                    <li>• <strong>Frecuencia:</strong> Patrones diferentes en la frecuencia de publicación</li>
                    <li>• <strong>Interacciones:</strong> Diferencias en likes y comentarios recibidos</li>
                  </ul>
                  
                  <h4>Resultados impactantes:</h4>
                  <ul>
                    <li>• <strong>70% de precisión</strong> en detectar depresión</li>
                    <li>• <strong>Superó a médicos generales</strong> que tenían 42% de precisión</li>
                    <li>• <strong>Detección temprana:</strong> Identificó señales meses antes del diagnóstico</li>
                  </ul>
                  
                  <h4>Implicaciones:</h4>
                  <p>Este estudio abre posibilidades para sistemas de alerta temprana y apoyo preventivo, aunque también plantea importantes cuestiones éticas sobre privacidad.</p>
                  
                  <div className="bg-blue-50 p-4 rounded-lg mt-4">
                    <p><strong>La lección:</strong> Los algoritmos pueden detectar patrones sutiles que escapan a la percepción humana consciente, incluso en datos que no parecen obviamente relacionados con el objetivo.</p>
                  </div>
                </div>
              }
              className="glass-effect p-6 rounded-xl border-l-4 border-purple-400"
            >
              <div className="flex items-center mb-4">
                <Icon name="camera" className="w-8 h-8 text-purple-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Detección de Depresión</h4>
              </div>
              <p className="text-white/90 mb-4">
                <strong>Estudio real de 2016:</strong> ¿Se puede diagnosticar depresión analizando fotos de Instagram?
              </p>
              <div className="space-y-3">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <strong>Datos:</strong> 43,950 fotos de usuarios con diagnóstico confirmado
                  </p>
                </div>
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <strong>Características:</strong> Colores, filtros, contenido, frecuencia
                  </p>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <strong>Resultado:</strong> 70% precisión vs 42% de médicos generales
                  </p>
                </div>
              </div>
              <div className="mt-4 bg-yellow-500/20 p-3 rounded-lg">
                <p className="text-yellow-100 text-sm">
                  <Icon name="exclamation-triangle" className="w-4 h-4 inline mr-2" />
                  Plantea importantes cuestiones éticas sobre privacidad y consentimiento
                </p>
              </div>
            </ClickableInfo>

            <div className="glass-effect p-6 rounded-xl border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <Icon name="car" className="w-8 h-8 text-green-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Vehículos Autónomos</h4>
              </div>
              <p className="text-white/90 mb-4">
                Reconocer peatones, señales de tráfico, otros vehículos y predecir sus movimientos 
                en tiempo real.
              </p>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong>Visión por computadora:</strong> Identificar objetos en la carretera</p>
                <p>• <strong>Predicción de trayectorias:</strong> Anticipar movimientos</p>
                <p>• <strong>Toma de decisiones:</strong> Cuándo frenar, acelerar, girar</p>
              </div>
              <div className="mt-4 bg-green-500/20 p-3 rounded-lg">
                <p className="text-green-100 text-sm">
                  <strong>Entrenamiento:</strong> Millones de horas de conducción humana supervisada
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            🎯 La Clave del Éxito del Aprendizaje Supervisado
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-blue-500/20 p-4 rounded-lg text-center">
              <Icon name="database" className="w-8 h-8 text-blue-300 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Datos de Calidad</h4>
              <p className="text-white/80 text-sm">
                Ejemplos representativos y bien etiquetados son fundamentales
              </p>
            </div>
            <div className="bg-green-500/20 p-4 rounded-lg text-center">
              <Icon name="target" className="w-8 h-8 text-green-300 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Objetivo Claro</h4>
              <p className="text-white/80 text-sm">
                Definir exactamente qué queremos predecir o clasificar
              </p>
            </div>
            <div className="bg-purple-500/20 p-4 rounded-lg text-center">
              <Icon name="trending-up" className="w-8 h-8 text-purple-300 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-2">Generalización</h4>
              <p className="text-white/80 text-sm">
                Funcionar bien en casos nuevos, no solo en datos de entrenamiento
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 4: Aprendizaje No Supervisado - Concepto y Demo
  {
    id: 4,
    type: 'content',
    title: 'Aprendizaje No Supervisado: Descubrir lo Oculto',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Producir conocimiento únicamente de los datos</h3>
            <p className="text-white/80">Sin necesidad de explicar qué resultado queremos obtener</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          <ClickableInfo
            title="Aprendizaje No Supervisado - Definición Completa"
            content={
              <div>
                <p><strong>Aprendizaje No Supervisado</strong> es el paradigma que produce conocimiento únicamente de los datos de entrada, sin necesidad de ejemplos etiquetados o "respuestas correctas".</p>
                
                <h4>¿Cómo es posible aprender sin ejemplos?</h4>
                <p>Los algoritmos buscan patrones, estructuras y relaciones ocultas en los datos que no son evidentes a primera vista.</p>
                
                <h4>Principales tipos de tareas:</h4>
                <ul>
                  <li>• <strong>Clustering:</strong> Agrupar elementos similares sin saber de antemano qué grupos buscar</li>
                  <li>• <strong>Reducción de dimensionalidad:</strong> Encontrar representaciones más simples de datos complejos</li>
                  <li>• <strong>Detección de anomalías:</strong> Identificar elementos que no siguen patrones normales</li>
                  <li>• <strong>Minería de reglas:</strong> Descubrir relaciones interesantes entre variables</li>
                  <li>• <strong>Generación:</strong> Crear nuevos datos similares a los existentes</li>
                </ul>
                
                <h4>Ventajas clave:</h4>
                <ul>
                  <li>• <strong>Datos más baratos:</strong> No necesita etiquetado humano costoso</li>
                  <li>• <strong>Descubrimiento:</strong> Puede encontrar patrones inesperados</li>
                  <li>• <strong>Escalabilidad:</strong> Puede procesar grandes volúmenes sin supervisión</li>
                  <li>• <strong>Flexibilidad:</strong> No está limitado por ideas preconcebidas</li>
                </ul>
                
                <h4>El futuro de la IA:</h4>
                <p>La comunidad científica reconoce que el futuro del Machine Learning pasa por este paradigma, ya que permite a las máquinas descubrir conocimiento de forma más autónoma.</p>
                
                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <p><strong>Analogía:</strong> Como un detective que encuentra pistas y patrones para resolver un misterio sin saber de antemano qué buscar exactamente.</p>
                </div>
              </div>
            }
            className="glass-effect p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Icon name="search" className="w-10 h-10 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">¿Cómo Aprende sin Guía?</h3>
            </div>
            <div className="space-y-4">
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">1. Buscar patrones</h4>
                <p className="text-white/80 text-sm">
                  Analiza similitudes y diferencias en los datos de entrada
                </p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">2. Encontrar estructura</h4>
                <p className="text-white/80 text-sm">
                  Descubre organización oculta en datos aparentemente caóticos
                </p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">3. Crear conocimiento</h4>
                <p className="text-white/80 text-sm">
                  Genera insights valiosos sin supervisión humana
                </p>
              </div>
            </div>
          </ClickableInfo>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Analogía: El Explorador en Tierra Desconocida</h3>
            <div className="space-y-4">
              <div className="bg-yellow-500/20 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="text-yellow-100 font-semibold mb-2">🗺️ El Explorador</h4>
                <p className="text-white/80 text-sm">
                  Llega a un lugar desconocido sin mapa ni guía, pero debe entender el territorio
                </p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-purple-100 font-semibold mb-2">👁️ La Observación</h4>
                <p className="text-white/80 text-sm">
                  Estudia el paisaje, identifica patrones, agrupa elementos similares
                </p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="text-green-100 font-semibold mb-2">🧭 El Descubrimiento</h4>
                <p className="text-white/80 text-sm">
                  Crea su propio "mapa" basado en los patrones que ha observado
                </p>
              </div>
            </div>
            
            <div className="mt-6 bg-blue-500/20 p-4 rounded-lg">
              <p className="text-blue-100 text-sm">
                <strong>Resultado:</strong> Conocimiento útil obtenido sin instrucciones previas
              </p>
            </div>
          </div>
        </div>

        {/* Demo interactivo */}
        <AprendizajeNoSupervisadoDemo />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-effect p-6 rounded-xl">
            <h4 className="text-xl font-bold text-white mb-4">
              <Icon name="dollar-sign" className="w-6 h-6 inline mr-2 text-green-400" />
              Ventaja: Datos Más Baratos
            </h4>
            <p className="text-white/90 mb-4">
              En aprendizaje supervisado, si quieres entrenar un clasificador de perros y gatos:
            </p>
            <div className="space-y-3">
              <div className="bg-red-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  <strong>Problema:</strong> Necesitas que un humano etiquete 100,000+ imágenes
                </p>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  <strong>Costo:</strong> Tiempo, dinero y esfuerzo humano considerable
                </p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  <strong>No supervisado:</strong> Solo necesitas las imágenes, sin etiquetas
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl">
            <h4 className="text-xl font-bold text-white mb-4">
              <Icon name="eye" className="w-6 h-6 inline mr-2 text-purple-400" />
              Poder de Descubrimiento
            </h4>
            <p className="text-white/90 mb-4">
              Los algoritmos pueden encontrar patrones que los humanos no habíamos considerado:
            </p>
            <div className="space-y-3">
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  <strong>Inesperado:</strong> Nuevos grupos de clientes no identificados
                </p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  <strong>Insights:</strong> Relaciones ocultas entre variables
                </p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  <strong>Innovación:</strong> Perspectivas completamente nuevas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 5: Casos Avanzados de Aprendizaje No Supervisado
  {
    id: 5,
    type: 'content', 
    title: 'Aprendizaje No Supervisado: El Futuro de la IA',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Espacios Latentes y Operaciones Conceptuales</h3>
            <p className="text-white/80">Cuando las máquinas aprenden a "entender" conceptos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClickableInfo
            title="Espacios Latentes - La Estructura Conceptual Oculta"
            content={
              <div>
                <p>Los <strong>espacios latentes</strong> son representaciones internas que los algoritmos no supervisados crean para organizar y entender conceptos complejos.</p>
                
                <h4>¿Qué es un espacio latente?</h4>
                <p>Imagina un "mapa conceptual" multidimensional donde conceptos similares están cerca unos de otros, y las direcciones en el espacio representan relaciones específicas.</p>
                
                <h4>Ejemplo con caras:</h4>
                <ul>
                  <li>• <strong>Dimensión género:</strong> Una dirección que va de "masculino" a "femenino"</li>
                  <li>• <strong>Dimensión edad:</strong> Una dirección que va de "joven" a "mayor"</li>
                  <li>• <strong>Dimensión accesorios:</strong> Una dirección que representa "con gafas" vs "sin gafas"</li>
                </ul>
                
                <h4>La magia de las operaciones:</h4>
                <p>Una vez que el algoritmo construye este espacio, puedes hacer "matemática conceptual":</p>
                <ul>
                  <li>• <strong>Hombre con gafas - Hombre sin gafas =</strong> Vector "gafas"</li>
                  <li>• <strong>Vector "gafas" + Mujer sin gafas =</strong> Mujer con gafas</li>
                </ul>
                
                <h4>Aplicaciones revolucionarias:</h4>
                <ul>
                  <li>• <strong>Edición inteligente:</strong> Modificar fotos cambiando solo características específicas</li>
                  <li>• <strong>Generación controlada:</strong> Crear contenido con propiedades deseadas</li>
                  <li>• <strong>Interpolación semántica:</strong> Crear transiciones suaves entre conceptos</li>
                  <li>• <strong>Descubrimiento de relaciones:</strong> Encontrar analogías automáticamente</li>
                </ul>
                
                <h4>¿Por qué es importante?</h4>
                <p>Representa un paso crucial hacia máquinas que realmente "entienden" conceptos en lugar de solo procesarlos como datos.</p>
                
                <div className="bg-purple-50 p-4 rounded-lg mt-4">
                  <p><strong>El futuro:</strong> Sistemas que pueden razonar sobre conceptos abstractos de manera similar a como lo hacemos los humanos.</p>
                </div>
              </div>
            }
            className="glass-effect p-8 rounded-xl"
          >
            <div className="flex items-center mb-6">
              <Icon name="brain" className="w-10 h-10 text-purple-400 mr-4" />
              <h3 className="text-2xl font-bold text-white">Espacios Latentes</h3>
            </div>
            <p className="text-white/90 text-lg leading-relaxed mb-6">
              Los algoritmos más potentes construyen "mapas conceptuales" internos donde pueden 
              realizar operaciones matemáticas con ideas abstractas.
            </p>
            
            <div className="bg-purple-500/20 p-6 rounded-lg mb-6">
              <h4 className="text-white font-semibold mb-3">Ejemplo Famoso: Word2Vec</h4>
              <div className="bg-white p-4 rounded-lg text-center">
                <p className="text-xl font-bold text-gray-800">Rey - Hombre + Mujer = Reina</p>
              </div>
              <p className="text-white/80 text-sm mt-3">
                El algoritmo aprendió la relación de género en la realeza sin que nadie se lo enseñara
              </p>
            </div>

            <div className="space-y-3">
              <div className="flex items-center text-white/80">
                <Icon name="arrows-alt" className="w-5 h-5 mr-3 text-purple-300" />
                <span>Similitud semántica → Distancia espacial</span>
              </div>
              <div className="flex items-center text-white/80">
                <Icon name="calculator" className="w-5 h-5 mr-3 text-purple-300" />
                <span>Relaciones → Operaciones matemáticas</span>
              </div>
              <div className="flex items-center text-white/80">
                <Icon name="magic" className="w-5 h-5 mr-3 text-purple-300" />
                <span>Conceptos → Vectores manipulables</span>
              </div>
            </div>
          </ClickableInfo>

          <div className="space-y-6">
            <div className="glass-effect p-6 rounded-xl border-l-4 border-blue-400">
              <div className="flex items-center mb-4">
                <Icon name="users" className="w-8 h-8 text-blue-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Segmentación de Clientes</h4>
              </div>
              <p className="text-white/90 mb-4">
                Descubrir grupos naturales de clientes sin definir previamente qué grupos buscar.
              </p>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong>Input:</strong> Datos de comportamiento de compra</p>
                <p>• <strong>Output:</strong> Grupos con patrones similares</p>
                <p>• <strong>Sorpresa:</strong> Segmentos que no habías considerado</p>
              </div>
              <div className="mt-4 bg-blue-500/20 p-3 rounded-lg">
                <p className="text-blue-100 text-sm">
                  <strong>Resultado:</strong> Estrategias de marketing más efectivas y personalizadas
                </p>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl border-l-4 border-green-400">
              <div className="flex items-center mb-4">
                <Icon name="shield-alt" className="w-8 h-8 text-green-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Detección de Anomalías</h4>
              </div>
              <p className="text-white/90 mb-4">
                Identificar comportamientos inusuales o sospechosos sin ejemplos previos de fraude.
              </p>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong>Ciberseguridad:</strong> Detectar ataques nunca vistos</p>
                <p>• <strong>Finanzas:</strong> Transacciones fraudulentas nuevas</p>
                <p>• <strong>Industria:</strong> Fallos en maquinaria</p>
              </div>
              <div className="mt-4 bg-green-500/20 p-3 rounded-lg">
                <p className="text-green-100 text-sm">
                  <strong>Ventaja:</strong> No necesita ejemplos de anomalías para entrenar
                </p>
              </div>
            </div>

            <div className="glass-effect p-6 rounded-xl border-l-4 border-orange-400">
              <div className="flex items-center mb-4">
                <Icon name="compress" className="w-8 h-8 text-orange-400 mr-3" />
                <h4 className="text-xl font-bold text-white">Reducción de Dimensionalidad</h4>
              </div>
              <p className="text-white/90 mb-4">
                Simplificar datos complejos manteniendo la información más importante.
              </p>
              <div className="space-y-2 text-white/80 text-sm">
                <p>• <strong>Visualización:</strong> Representar datos complejos en 2D/3D</p>
                <p>• <strong>Compresión:</strong> Reducir espacio sin perder información clave</p>
                <p>• <strong>Aceleración:</strong> Hacer otros algoritmos más rápidos</p>
              </div>
              <div className="mt-4 bg-orange-500/20 p-3 rounded-lg">
                <p className="text-orange-100 text-sm">
                  <strong>Técnicas:</strong> PCA, t-SNE, UMAP para diferentes tipos de datos
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🚀 Por qué el Aprendizaje No Supervisado es el Futuro
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                <Icon name="quote-left" className="w-6 h-6 inline mr-2 text-blue-400" />
                Perspectiva de Expertos
              </h4>
              <blockquote className="bg-blue-500/20 p-4 rounded-lg border-l-4 border-blue-400 mb-4">
                <p className="text-blue-100 italic">
                  "El aprendizaje no supervisado es la llave a la verdadera Inteligencia Artificial."
                </p>
                <footer className="text-blue-200 text-sm mt-2">— Yann LeCun, Premio Turing 2018</footer>
              </blockquote>
              
              <div className="space-y-3">
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <strong>Autonomía:</strong> Aprende sin supervisión humana constante
                  </p>
                </div>
                <div className="bg-green-500/20 p-3 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <strong>Escalabilidad:</strong> Puede procesar toda la información disponible
                  </p>
                </div>
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <p className="text-white/80 text-sm">
                    <strong>Descubrimiento:</strong> Encuentra conocimiento que los humanos no veríamos
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-white mb-4">
                <Icon name="rocket" className="w-6 h-6 inline mr-2 text-green-400" />
                Aplicaciones Emergentes
              </h4>
              
              <div className="space-y-4">
                <div className="bg-yellow-500/20 p-4 rounded-lg">
                  <h5 className="text-yellow-100 font-semibold mb-2">🎨 IA Generativa</h5>
                  <p className="text-white/80 text-sm">
                    DALL-E, GPT, Midjourney: crean contenido aprendiendo patrones sin supervisión
                  </p>
                </div>
                
                <div className="bg-purple-500/20 p-4 rounded-lg">
                  <h5 className="text-purple-100 font-semibold mb-2">🧬 Descubrimiento Científico</h5>
                  <p className="text-white/80 text-sm">
                    Encontrar nuevos medicamentos, materiales y fenómenos físicos
                  </p>
                </div>
                
                <div className="bg-blue-500/20 p-4 rounded-lg">
                  <h5 className="text-blue-100 font-semibold mb-2">🤖 AGI (Inteligencia General)</h5>
                  <p className="text-white/80 text-sm">
                    Base para sistemas que aprenden y se adaptan como los humanos
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-purple-500/20 to-blue-500/20 p-6 rounded-xl border border-white/20">
          <h4 className="text-xl font-bold text-white mb-4 text-center">
            💡 Reflexión: La Evolución del Aprendizaje Artificial
          </h4>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-white/90 text-lg mb-4">
              Estamos presenciando una transición desde sistemas que necesitan ser "enseñados" explícitamente 
              hacia sistemas que pueden "descubrir" conocimiento por sí mismos.
            </p>
            <p className="text-white/70">
              El aprendizaje no supervisado nos acerca a máquinas que pueden entender el mundo 
              de manera más similar a como lo hacemos los humanos: explorando, experimentando y 
              encontrando patrones en la experiencia.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 6: Comparación Final y Cuándo Usar Cada Paradigma
  {
    id: 6,
    type: 'content',
    title: 'Comparación Final: ¿Cuándo Usar Cada Paradigma?',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">La Guía Definitiva para Elegir el Paradigma Correcto</h3>
            <p className="text-white/80">Factores clave para tomar la decisión correcta en cada proyecto</p>
          </div>
        </div>

        {/* Demo de comparación interactivo */}
        <ComparacionParadigmas />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-6 rounded-xl">
            <h4 className="text-xl font-bold text-white mb-6">
              <Icon name="lightbulb" className="w-6 h-6 inline mr-2 text-yellow-400" />
              Principios de Decisión
            </h4>
            
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg border-l-4 border-blue-400">
                <h5 className="text-blue-100 font-semibold mb-2">🎯 ¿Tienes objetivo específico?</h5>
                <p className="text-white/80 text-sm">
                  <strong>SÍ →</strong> Supervisado (predecir algo específico)<br/>
                  <strong>NO →</strong> No supervisado (explorar y descubrir)
                </p>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-400">
                <h5 className="text-green-100 font-semibold mb-2">📊 ¿Tienes datos etiquetados?</h5>
                <p className="text-white/80 text-sm">
                  <strong>SÍ →</strong> Supervisado (aprovecha las etiquetas)<br/>
                  <strong>NO →</strong> No supervisado (trabaja sin etiquetas)
                </p>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg border-l-4 border-purple-400">
                <h5 className="text-purple-100 font-semibold mb-2">💰 ¿Qué presupuesto tienes?</h5>
                <p className="text-white/80 text-sm">
                  <strong>Alto →</strong> Supervisado (puedes pagar etiquetado)<br/>
                  <strong>Bajo →</strong> No supervisado (datos más baratos)
                </p>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg border-l-4 border-orange-400">
                <h5 className="text-orange-100 font-semibold mb-2">🔍 ¿Buscas insights nuevos?</h5>
                <p className="text-white/80 text-sm">
                  <strong>SÍ →</strong> No supervisado (descubrimiento)<br/>
                  <strong>NO →</strong> Supervisado (automatizar decisiones conocidas)
                </p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl">
            <h4 className="text-xl font-bold text-white mb-6">
              <Icon name="road" className="w-6 h-6 inline mr-2 text-green-400" />
              Roadmap de Implementación
            </h4>
            
            <div className="space-y-4">
              <div className="bg-gray-500/20 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-2">Fase 1: Exploración</h5>
                <p className="text-white/80 text-sm">
                  Usar <strong>aprendizaje no supervisado</strong> para entender los datos, 
                  encontrar patrones y generar hipótesis.
                </p>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-2">Fase 2: Definición</h5>
                <p className="text-white/80 text-sm">
                  Basándose en los descubrimientos, definir objetivos específicos 
                  y crear datasets etiquetados.
                </p>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-2">Fase 3: Implementación</h5>
                <p className="text-white/80 text-sm">
                  Usar <strong>aprendizaje supervisado</strong> para construir sistemas 
                  productivos con objetivos claros.
                </p>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h5 className="text-white font-semibold mb-2">Fase 4: Monitoreo</h5>
                <p className="text-white/80 text-sm">
                  Combinar ambos paradigmas para detectar cambios en patrones 
                  y adaptar los modelos.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            🏆 Casos de Éxito: Lo Mejor de Ambos Mundos
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/20 p-6 rounded-xl">
              <Icon name="music" className="w-8 h-8 text-blue-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-3 text-center">Spotify</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p><strong>No supervisado:</strong> Descubrir géneros musicales emergentes</p>
                <p><strong>Supervisado:</strong> Predecir qué canciones te gustarán</p>
                <p><strong>Resultado:</strong> Descubre Weekly + Recomendaciones personalizadas</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-green-500/20 to-blue-500/20 p-6 rounded-xl">
              <Icon name="shopping-cart" className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-3 text-center">Amazon</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p><strong>No supervisado:</strong> Segmentar clientes por comportamiento</p>
                <p><strong>Supervisado:</strong> Predecir probabilidad de compra</p>
                <p><strong>Resultado:</strong> Recomendaciones ultra-precisas</p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/20 to-orange-500/20 p-6 rounded-xl">
              <Icon name="shield-alt" className="w-8 h-8 text-red-400 mx-auto mb-3" />
              <h4 className="text-white font-semibold mb-3 text-center">Ciberseguridad</h4>
              <div className="space-y-2 text-white/80 text-sm">
                <p><strong>No supervisado:</strong> Detectar patrones anómalos</p>
                <p><strong>Supervisado:</strong> Clasificar tipos de ataques conocidos</p>
                <p><strong>Resultado:</strong> Protección contra amenazas nuevas y conocidas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl border border-white/20">
          <h4 className="text-xl font-bold text-white mb-4 text-center">
            💡 Reflexión Final: El Futuro es Híbrido
          </h4>
          <div className="text-center max-w-4xl mx-auto">
            <p className="text-white/90 text-lg mb-4">
              Los sistemas más avanzados de IA combinan ambos paradigmas de manera inteligente. 
              El futuro no está en elegir uno u otro, sino en saber cuándo y cómo combinarlos.
            </p>
            <p className="text-white/70 mb-4">
              El aprendizaje no supervisado nos ayuda a <strong>descubrir</strong> lo que no sabíamos que existía, 
              mientras que el supervisado nos permite <strong>automatizar</strong> lo que ya entendemos.
            </p>
            <div className="bg-white/10 p-4 rounded-lg">
              <p className="text-white font-semibold">
                <Icon name="star" className="w-5 h-5 inline mr-2 text-yellow-400" />
                La verdadera maestría está en dominar ambos paradigmas y saber cuándo aplicar cada uno.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export default paradigmasAprendizajeSlides;
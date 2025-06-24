import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';
import { PromptingDemo } from '../components/Prompting';

/**
 * Slides sobre Prompting - Capítulo completo sobre técnicas de Prompting
 */

export const promptingSlides = [
  {
    id: 0,
    type: 'cover',
    title: 'Prompting',
    subtitle: 'El Arte de Comunicarse con la IA',
    content: (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        <div className="glass-effect p-6 rounded-xl">
          <Icon name="lightbulb" className="w-16 h-16 mb-4 text-yellow-400" />
          <h3 className="text-xl font-bold mb-3">¿Qué es Prompting?</h3>
          <p className="text-white/80">
            La técnica de diseñar instrucciones efectivas para obtener las mejores respuestas de modelos de IA
          </p>
        </div>
        <div className="glass-effect p-6 rounded-xl">
          <Icon name="target" className="w-16 h-16 mb-4 text-green-400" />
          <h3 className="text-xl font-bold mb-3">¿Por qué es importante?</h3>
          <p className="text-white/80">
            Un buen prompt puede ser la diferencia entre una respuesta mediocre y una extraordinaria
          </p>
        </div>
      </div>
    )
  },
  {
    id: 1,
    title: 'Fórmula de Prompting',
    content: (
      <div className="space-y-6">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 gradient-text text-center">FÓRMULA PROMPTING</h2>
          
          <div className="space-y-4">
            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-cyan-400">Contexto</h3>
                <p className="text-white/80 mt-1">
                  Describe el escenario o la situación en la que se enmarca la solicitud.
                </p>
                <div className="bg-black/30 p-3 rounded mt-2">
                  <code className="text-sm text-green-400">
                    "Eres un experto en marketing digital con 10 años de experiencia..."
                  </code>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-purple-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-purple-400">Tarea</h3>
                <p className="text-white/80 mt-1">
                  Define la tarea específica que se le solicita al modelo.
                </p>
                <div className="bg-black/30 p-3 rounded mt-2">
                  <code className="text-sm text-green-400">
                    "Crea una estrategia de contenidos para redes sociales..."
                  </code>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-pink-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-pink-400">Instrucción</h3>
                <p className="text-white/80 mt-1">
                  Explica cómo se espera que el modelo realice la tarea.
                </p>
                <div className="bg-black/30 p-3 rounded mt-2">
                  <code className="text-sm text-green-400">
                    "Estructura la respuesta en 3 secciones: objetivos, tácticas y métricas..."
                  </code>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-yellow-400">Clarificación</h3>
                <p className="text-white/80 mt-1">
                  Amplía la información sobre la tarea.
                </p>
                <div className="bg-black/30 p-3 rounded mt-2">
                  <code className="text-sm text-green-400">
                    "La empresa es una startup de tecnología B2B con un presupuesto limitado..."
                  </code>
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-2 h-2 bg-green-400 rounded-full mt-2"></div>
              <div>
                <h3 className="text-xl font-bold text-green-400">Refinamiento</h3>
                <p className="text-white/80 mt-1">
                  Añade información extra o restricciones adicionales.
                </p>
                <div className="bg-black/30 p-3 rounded mt-2">
                  <code className="text-sm text-green-400">
                    "Enfócate en LinkedIn y Twitter. No incluyas TikTok. Usa un tono profesional..."
                  </code>
                </div>
              </div>
            </div>
          </div>
        </div>

        <ClickableInfo 
          content="💡 No siempre necesitas usar todos los elementos. Adapta la fórmula según tu necesidad."
        />
      </div>
    )
  },
  {
    id: 2,
    title: 'Principios de Prompt Engineering',
    content: (
      <div className="space-y-6">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 gradient-text text-center">PROMPT ENGINEERING</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold">Ser asertivo</h3>
                  <p className="text-white/70 text-sm">Sé claro y directo en tus instrucciones</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold">Integra la audiencia en Prompt</h3>
                  <p className="text-white/70 text-sm">Especifica para quién es el contenido</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold">Dividir tareas</h3>
                  <p className="text-white/70 text-sm">Descompón tareas complejas en pasos simples</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold">Propinas/ Amenazas/ Empatía</h3>
                  <p className="text-white/70 text-sm">Usa incentivos positivos en tus prompts</p>
                </div>
              </div>
            </div>

            <div className="bg-black/30 p-4 rounded-xl">
              <h4 className="font-bold mb-3 text-purple-400">Ejemplo Práctico:</h4>
              <div className="space-y-3 text-sm">
                <div className="p-3 bg-red-500/20 rounded border border-red-500/50">
                  <p className="text-red-400">❌ Malo:</p>
                  <p className="text-white/80">"Escribe sobre marketing"</p>
                </div>
                <div className="p-3 bg-green-500/20 rounded border border-green-500/50">
                  <p className="text-green-400">✅ Bueno:</p>
                  <p className="text-white/80">
                    "Actúa como un experto en marketing digital. 
                    Escribe un artículo de 500 palabras para CEOs de startups sobre 
                    las 5 mejores estrategias de marketing con bajo presupuesto. 
                    Usa un tono profesional pero accesible."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 3,
    title: 'Técnicas Avanzadas de Prompting 2024',
    content: (
      <div className="space-y-6">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 gradient-text text-center">PROMPT ENGINEERING 2024</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold">Chain-of-Thought (CoT)</h3>
                  <p className="text-white/70 text-sm">Razonamiento paso a paso explícito</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold">Few-Shot Prompting</h3>
                  <p className="text-white/70 text-sm">Proporciona 2-5 ejemplos del formato deseado</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold">"Take a Deep Breath"</h3>
                  <p className="text-white/70 text-sm">Mejora 50% en problemas matemáticos</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-green-400" />
                <div>
                  <h3 className="text-lg font-bold">Emotional Prompting</h3>
                  <p className="text-white/70 text-sm">"Esto es muy importante para mi carrera"</p>
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-bold">Self-Consistency</h3>
                  <p className="text-white/70 text-sm">Múltiples caminos de razonamiento</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-bold">Zero-Shot CoT</h3>
                  <p className="text-white/70 text-sm">"Let's think step by step"</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-bold">Meta Prompting</h3>
                  <p className="text-white/70 text-sm">IA que mejora sus propios prompts</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Icon name="check" className="w-6 h-6 text-blue-400" />
                <div>
                  <h3 className="text-lg font-bold">Positive Direction</h3>
                  <p className="text-white/70 text-sm">Decir qué hacer, no qué NO hacer</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 bg-black/30 p-4 rounded-xl">
            <h4 className="font-bold mb-3 text-yellow-400">Ejemplos de Técnicas 2024:</h4>
            <div className="space-y-3 text-sm">
              <div className="p-3 bg-purple-500/20 rounded">
                <p className="text-purple-400 font-semibold">Chain-of-Thought + Emotional:</p>
                <p className="text-white/80">
                  "Take a deep breath. This is very important to my career. Let's think step by step: Los números impares en este grupo suman un número par: 4, 8, 9, 15, 12, 2, 1."
                </p>
              </div>
              <div className="p-3 bg-blue-500/20 rounded">
                <p className="text-blue-400 font-semibold">Few-Shot + CoT:</p>
                <p className="text-white/80">
                  "Analiza estos ejemplos de razonamiento: Ejemplo 1: [paso 1, paso 2, conclusión]. Ejemplo 2: [paso 1, paso 2, conclusión]. Ahora analiza este nuevo caso..."
                </p>
              </div>
              <div className="p-3 bg-green-500/20 rounded">
                <p className="text-green-400 font-semibold">Self-Consistency:</p>
                <p className="text-white/80">
                  "Resuelve este problema de 3 maneras diferentes y luego identifica la respuesta más consistente entre todas las soluciones."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            🔗 Recursos de Referencia 2024
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
            <div>
              <p>• <a href="https://www.promptingguide.ai/techniques/cot" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Prompt Engineering Guide - Chain of Thought</a></p>
              <p>• <a href="https://www.promptingguide.ai/techniques/fewshot" target="_blank" rel="noopener noreferrer" className="text-blue-300 hover:text-blue-200 underline">Few-Shot Prompting Techniques</a></p>
            </div>
            <div>
              <p>• <strong>Mejora de rendimiento:</strong> 50% en boosting, 20-50% en corrección</p>
              <p>• <strong>Sensibilidad:</strong> Hasta 76 puntos de diferencia por formato</p>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 4,
    title: 'Herramientas Avanzadas de ChatGPT',
    content: (
      <div className="space-y-6">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold mb-6 gradient-text text-center">
            HERRAMIENTAS AVANZADAS CHATGPT
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-black/30 p-6 rounded-xl text-center hover:bg-black/40 transition-colors">
              <Icon name="edit" className="w-12 h-12 mb-3 text-blue-400 mx-auto" />
              <h3 className="text-lg font-bold mb-2">CANVAS</h3>
              <p className="text-white/70 text-sm">
                Editor colaborativo para trabajar en documentos largos
              </p>
              <div className="mt-3 text-xs text-green-400">
                ¿Cuándo usar? Para escribir y editar textos extensos
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-xl text-center hover:bg-black/40 transition-colors">
              <Icon name="code" className="w-12 h-12 mb-3 text-purple-400 mx-auto" />
              <h3 className="text-lg font-bold mb-2">CODE INTERPRETER</h3>
              <p className="text-white/70 text-sm">
                Ejecuta código Python y analiza datos
              </p>
              <div className="mt-3 text-xs text-green-400">
                ¿Cuándo usar? Para análisis de datos y cálculos complejos
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-xl text-center hover:bg-black/40 transition-colors">
              <Icon name="image" className="w-12 h-12 mb-3 text-pink-400 mx-auto" />
              <h3 className="text-lg font-bold mb-2">IMAGEN</h3>
              <p className="text-white/70 text-sm">
                Genera y edita imágenes con DALL-E
              </p>
              <div className="mt-3 text-xs text-green-400">
                ¿Cuándo usar? Para crear contenido visual
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-xl text-center hover:bg-black/40 transition-colors">
              <Icon name="eye" className="w-12 h-12 mb-3 text-yellow-400 mx-auto" />
              <h3 className="text-lg font-bold mb-2">VISIÓN</h3>
              <p className="text-white/70 text-sm">
                Analiza y comprende imágenes
              </p>
              <div className="mt-3 text-xs text-green-400">
                ¿Cuándo usar? Para extraer información de imágenes
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-xl text-center hover:bg-black/40 transition-colors">
              <Icon name="search" className="w-12 h-12 mb-3 text-cyan-400 mx-auto" />
              <h3 className="text-lg font-bold mb-2">SEARCH</h3>
              <p className="text-white/70 text-sm">
                Busca información actualizada en internet
              </p>
              <div className="mt-3 text-xs text-green-400">
                ¿Cuándo usar? Para información reciente o actualizada
              </div>
            </div>

            <div className="bg-black/30 p-6 rounded-xl text-center hover:bg-black/40 transition-colors">
              <Icon name="brain" className="w-12 h-12 mb-3 text-green-400 mx-auto" />
              <h3 className="text-lg font-bold mb-2">DEEP RESEARCH</h3>
              <p className="text-white/70 text-sm">
                Investigación profunda con múltiples fuentes
              </p>
              <div className="mt-3 text-xs text-green-400">
                ¿Cuándo usar? Para análisis exhaustivos
              </div>
            </div>
          </div>

          <div className="mt-6 bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-4 rounded-xl">
            <h4 className="font-bold mb-2 text-white">💡 Tip Pro:</h4>
            <p className="text-white/80 text-sm">
              Puedes combinar múltiples herramientas en una sola conversación. 
              Por ejemplo: usar Search para investigar, Code Interpreter para analizar datos, 
              y Canvas para escribir el reporte final.
            </p>
          </div>
        </div>

        <ClickableInfo 
          content="🚀 Estas herramientas están disponibles en ChatGPT Plus y versiones superiores"
        />
      </div>
    )
  },
  {
    id: 5,
    title: 'Practica con Prompting',
    content: (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">🧪 Experimenta con Diferentes Técnicas</h2>
          <p className="text-white/70">
            Prueba cómo diferentes técnicas de prompting pueden transformar tus resultados
          </p>
        </div>
        
        <PromptingDemo />
      </div>
    )
  },
  {
    id: 6,
    title: 'Caso Práctico: Optimización de Campañas con IA',
    content: (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">📊 Metodología de Consolidación y Optimización</h2>
          <p className="text-white/70">
            Cómo usar ChatGPT para optimizar campañas publicitarias mediante análisis sistemático
          </p>
        </div>
        
        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-6 gradient-text">PROCESO DE OPTIMIZACIÓN</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-xl">
                <h4 className="font-bold text-blue-400 mb-2">1. Análisis Inicial</h4>
                <p className="text-white/80 text-sm">
                  Evaluación detallada de campañas existentes, identificando elementos fundamentales 
                  y estableciendo una base sólida para la optimización.
                </p>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-xl">
                <h4 className="font-bold text-green-400 mb-2">2. Evaluación Comparativa</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Identificación de elementos exitosos</li>
                  <li>• Análisis de áreas de mejora</li>
                  <li>• Evaluación de similitudes y diferencias</li>
                  <li>• Documentación de aprendizajes clave</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-500/20 p-4 rounded-xl">
                <h4 className="font-bold text-purple-400 mb-2">3. Sistema de Puntuación</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Impacto del mensaje</li>
                  <li>• Efectividad del formato</li>
                  <li>• Alcance potencial</li>
                  <li>• Coherencia con objetivos</li>
                  <li>• Viabilidad de implementación</li>
                </ul>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-xl">
                <h4 className="font-bold text-orange-400 mb-2">4. Extracción de Mejores Prácticas</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Análisis de métricas de rendimiento</li>
                  <li>• Evaluación de resonancia del mensaje</li>
                  <li>• Identificación de elementos creativos</li>
                  <li>• Valoración de eficiencia</li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500/20 to-orange-500/20 p-6 rounded-xl">
            <h4 className="font-bold text-yellow-400 mb-3">🎯 Formato Estandarizado de Documentación</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div className="space-y-2">
                <p className="text-white/80">✓ Objetivos claros y medibles</p>
                <p className="text-white/80">✓ Descripción detallada de elementos creativos</p>
                <p className="text-white/80">✓ Plan de implementación</p>
              </div>
              <div className="space-y-2">
                <p className="text-white/80">✓ Métricas de seguimiento</p>
                <p className="text-white/80">✓ Criterios de éxito</p>
                <p className="text-white/80">✓ Justificación basada en datos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },
  {
    id: 7,
    title: 'Ejemplo Práctico: Lanzamiento de Smartphone',
    content: (
      <div className="space-y-6">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">📱 Caso Real: Optimización de 3 Campañas</h2>
          <p className="text-white/70">
            Cómo consolidar múltiples enfoques en una campaña optimizada
          </p>
        </div>
        
        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold mb-6 gradient-text">CAMPAÑAS ORIGINALES</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-blue-500/20 p-6 rounded-xl">
              <h4 className="font-bold text-blue-400 mb-3">Campaña A</h4>
              <h5 className="text-white font-semibold mb-2">"Tecnología del Futuro, Hoy"</h5>
              <div className="space-y-3 text-sm">
                <div className="text-green-300">
                  <p className="font-semibold">✅ Puntos Fuertes:</p>
                  <p className="text-white/80">• Diferenciación técnica clara</p>
                  <p className="text-white/80">• Posicionamiento premium</p>
                </div>
                <div className="text-red-300">
                  <p className="font-semibold">❌ Debilidades:</p>
                  <p className="text-white/80">• Demasiado técnico</p>
                  <p className="text-white/80">• Poco emocional</p>
                </div>
              </div>
            </div>
            
            <div className="bg-green-500/20 p-6 rounded-xl">
              <h4 className="font-bold text-green-400 mb-3">Campaña B</h4>
              <h5 className="text-white font-semibold mb-2">"Simplifica tu Vida Digital"</h5>
              <div className="space-y-3 text-sm">
                <div className="text-green-300">
                  <p className="font-semibold">✅ Puntos Fuertes:</p>
                  <p className="text-white/80">• Mensaje accesible</p>
                  <p className="text-white/80">• Enfoque en beneficios prácticos</p>
                </div>
                <div className="text-red-300">
                  <p className="font-semibold">❌ Debilidades:</p>
                  <p className="text-white/80">• Falta diferenciación</p>
                  <p className="text-white/80">• Muy genérico</p>
                </div>
              </div>
            </div>
            
            <div className="bg-purple-500/20 p-6 rounded-xl">
              <h4 className="font-bold text-purple-400 mb-3">Campaña C</h4>
              <h5 className="text-white font-semibold mb-2">"Fotografía Profesional en tus Manos"</h5>
              <div className="space-y-3 text-sm">
                <div className="text-green-300">
                  <p className="font-semibold">✅ Puntos Fuertes:</p>
                  <p className="text-white/80">• Demostración concreta</p>
                  <p className="text-white/80">• Característica destacada</p>
                </div>
                <div className="text-red-300">
                  <p className="font-semibold">❌ Debilidades:</p>
                  <p className="text-white/80">• Alcance limitado</p>
                  <p className="text-white/80">• Muy específico</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-yellow-500/20 to-pink-500/20 p-6 rounded-xl">
            <h3 className="text-xl font-bold mb-4 text-center">🎯 CAMPAÑA OPTIMIZADA</h3>
            <div className="text-center mb-4">
              <h4 className="text-2xl font-bold text-yellow-400 mb-2">"Tu Vida, Mejorada"</h4>
              <p className="text-white/90 italic">
                "Descubre un smartphone que combina tecnología de vanguardia con una experiencia intuitiva, 
                permitiéndote capturar y compartir los momentos más importantes de tu vida con calidad profesional."
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h5 className="font-bold text-white mb-3">Elementos Integrados:</h5>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Tecnología avanzada (Campaña A) con lenguaje accesible</li>
                  <li>• Beneficios prácticos (Campaña B) mantenidos</li>
                  <li>• Fotografía destacada (Campaña C) como beneficio clave</li>
                  <li>• Tono equilibrado: innovación + accesibilidad</li>
                </ul>
              </div>
              <div>
                <h5 className="font-bold text-white mb-3">Resultados Esperados:</h5>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Mayor alcance que campañas individuales</li>
                  <li>• Mantiene diferenciación competitiva</li>
                  <li>• Equilibra aspectos técnicos y emocionales</li>
                  <li>• Atractivo para múltiples segmentos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <ClickableInfo 
          content="💡 Esta metodología se puede aplicar a cualquier proyecto que requiera consolidar múltiples enfoques: productos, servicios, estrategias de contenido, etc."
        />
      </div>
    )
  }
];
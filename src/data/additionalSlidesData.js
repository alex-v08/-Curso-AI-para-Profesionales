import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';
import {
  InteractiveMetricsDemo,
  OverfittingDemo
} from '../components/InteractiveComponents';

/**
 * Slides adicionales para completar la presentación
 * Estos slides se concatenan con slidesData principal
 */

export const additionalSlidesData = [
  // Slide 11: Overfitting vs Underfitting
  {
    id: 11,
    type: 'content',
    title: 'El Equilibrio Perfecto: Overfitting vs Underfitting',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">El Desafío Central del Machine Learning</h3>
            <p className="text-white/80">Encontrar el modelo que generalice bien a datos no vistos</p>
          </div>
        </div>

        <OverfittingDemo />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ClickableInfo 
            definitionKey="overfitting" 
            className="glass-effect p-6 rounded-xl border-l-4 border-red-400"
          >
            <div className="text-center mb-4">
              <Icon name="exclamation-triangle" className="w-12 h-12 text-red-400 mx-auto mb-2" />
              <h4 className="text-xl font-bold text-white">Overfitting</h4>
            </div>
            <p className="text-white/90 text-center mb-4">
              El modelo memoriza los datos de entrenamiento incluyendo el ruido
            </p>
            <div className="space-y-2">
              <div className="bg-red-500/20 p-2 rounded text-center">
                <p className="text-white/80 text-sm">Alto rendimiento en entrenamiento</p>
              </div>
              <div className="bg-red-500/20 p-2 rounded text-center">
                <p className="text-white/80 text-sm">Bajo rendimiento en validación</p>
              </div>
              <div className="bg-red-500/20 p-2 rounded text-center">
                <p className="text-white/80 text-sm">No generaliza bien</p>
              </div>
            </div>
          </ClickableInfo>

          <div className="glass-effect p-6 rounded-xl border-l-4 border-green-400">
            <div className="text-center mb-4">
              <Icon name="check-circle" className="w-12 h-12 text-green-400 mx-auto mb-2" />
              <h4 className="text-xl font-bold text-white">Balance Perfecto</h4>
            </div>
            <p className="text-white/90 text-center mb-4">
              El modelo captura patrones reales sin memorizar ruido
            </p>
            <div className="space-y-2">
              <div className="bg-green-500/20 p-2 rounded text-center">
                <p className="text-white/80 text-sm">Buen rendimiento en entrenamiento</p>
              </div>
              <div className="bg-green-500/20 p-2 rounded text-center">
                <p className="text-white/80 text-sm">Buen rendimiento en validación</p>
              </div>
              <div className="bg-green-500/20 p-2 rounded text-center">
                <p className="text-white/80 text-sm">Generaliza correctamente</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl border-l-4 border-yellow-400">
            <div className="text-center mb-4">
              <Icon name="minus-circle" className="w-12 h-12 text-yellow-400 mx-auto mb-2" />
              <h4 className="text-xl font-bold text-white">Underfitting</h4>
            </div>
            <p className="text-white/90 text-center mb-4">
              El modelo es demasiado simple y no captura patrones importantes
            </p>
            <div className="space-y-2">
              <div className="bg-yellow-500/20 p-2 rounded text-center">
                <p className="text-white/80 text-sm">Bajo rendimiento en entrenamiento</p>
              </div>
              <div className="bg-yellow-500/20 p-2 rounded text-center">
                <p className="text-white/80 text-sm">Bajo rendimiento en validación</p>
              </div>
              <div className="bg-yellow-500/20 p-2 rounded text-center">
                <p className="text-white/80 text-sm">No captura relaciones</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 12: Aprendizaje Supervisado
  {
    id: 12,
    type: 'content',
    title: 'Aprendizaje Supervisado',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <Icon name="graduation-cap" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">Aprender de ejemplos etiquetados</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Componentes Clave</h3>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">N Observaciones</h4>
                <p className="text-white/80">Conjunto de ejemplos de entrenamiento</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Características (Features)</h4>
                <p className="text-white/80">Vector x_i que describe cada entidad</p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Variable Objetivo</h4>
                <p className="text-white/80">y_i = lo que queremos predecir</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Ejemplos Prácticos</h3>
            <div className="space-y-4">
              <div className="bg-yellow-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🐱 Detección de Gatos</h4>
                <p className="text-white/80">x_i = imagen, y_i = 1 si hay gato, 0 si no</p>
              </div>
              <div className="bg-red-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">📧 Filtro de Spam</h4>
                <p className="text-white/80">x_i = email, y_i = 1 si es spam, 0 si no</p>
              </div>
              <div className="bg-orange-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">🏠 Precio de Casas</h4>
                <p className="text-white/80">x_i = características, y_i = precio</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Dos Tipos Principales</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-blue-500/20 p-6 rounded-xl">
              <div className="text-center mb-4">
                <Icon name="chart-bar" className="w-12 h-12 text-blue-300 mx-auto mb-2" />
                <h4 className="text-xl font-bold text-white">Regresión</h4>
              </div>
              <p className="text-white/90 mb-4">Predecir valores numéricos continuos</p>
              <div className="space-y-2">
                <p className="text-white/70">• Precios de viviendas</p>
                <p className="text-white/70">• Temperatura</p>
                <p className="text-white/70">• Ventas futuras</p>
                <p className="text-white/70">• Edad de una persona</p>
              </div>
            </div>
            
            <div className="bg-green-500/20 p-6 rounded-xl">
              <div className="text-center mb-4">
                <Icon name="tags" className="w-12 h-12 text-green-300 mx-auto mb-2" />
                <h4 className="text-xl font-bold text-white">Clasificación</h4>
              </div>
              <p className="text-white/90 mb-4">Predecir categorías o clases</p>
              <div className="space-y-2">
                <p className="text-white/70">• Spam vs No Spam</p>
                <p className="text-white/70">• Perro vs Gato</p>
                <p className="text-white/70">• Diagnóstico médico</p>
                <p className="text-white/70">• Sentimiento positivo/negativo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 13: Otros tipos de modelos
  {
    id: 13,
    type: 'content',
    title: 'Otros Modelos de Machine Learning',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white">Más allá de la Regresión Lineal</h3>
            <p className="text-white/80">Diferentes problemas requieren diferentes herramientas</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="text-center mb-4">
              <Icon name="sitemap" className="w-12 h-12 text-green-400 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">Árboles de Decisión</h3>
            </div>
            <p className="text-white/80 mb-4">Toman decisiones siguiendo reglas tipo "si-entonces"</p>
            <div className="bg-green-500/20 p-3 rounded-lg">
              <p className="text-white/70 text-sm">Ejemplo: ¿Salir en bicicleta?</p>
              <p className="text-white/70 text-sm">Si llueve → No</p>
              <p className="text-white/70 text-sm">Si no llueve y temp > 20° → Sí</p>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="text-center mb-4">
              <Icon name="vector-square" className="w-12 h-12 text-blue-400 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">Support Vector Machines</h3>
            </div>
            <p className="text-white/80 mb-4">Encuentran la mejor frontera para separar clases</p>
            <div className="bg-blue-500/20 p-3 rounded-lg">
              <p className="text-white/70 text-sm">Efectivos para clasificación con datos complejos</p>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="text-center mb-4">
              <Icon name="network-wired" className="w-12 h-12 text-purple-400 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">Redes Neuronales</h3>
            </div>
            <p className="text-white/80 mb-4">Imitan el funcionamiento del cerebro humano</p>
            <div className="bg-purple-500/20 p-3 rounded-lg">
              <p className="text-white/70 text-sm">Base del Deep Learning y la IA moderna</p>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="text-center mb-4">
              <Icon name="layer-group" className="w-12 h-12 text-orange-400 mx-auto mb-2" />
              <h3 className="text-xl font-bold text-white">Ensemble Methods</h3>
            </div>
            <p className="text-white/80 mb-4">Combinan múltiples modelos para mejores resultados</p>
            <div className="bg-orange-500/20 p-3 rounded-lg">
              <p className="text-white/70 text-sm">Random Forest, Gradient Boosting, etc.</p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            <Icon name="lightbulb" className="w-6 h-6 inline mr-2" />
            Principio Clave
          </h3>
          <p className="text-white/90 text-lg text-center">
            <strong>No existe un modelo que sea mejor para todos los problemas</strong>
          </p>
          <p className="text-white/70 text-center mt-2">
            La elección del modelo depende del tipo de datos, el problema específico, 
            y los requisitos de interpretabilidad y rendimiento.
          </p>
        </div>
      </div>
    )
  },

  // Slide 14: Métricas de evaluación con Interactividad
  {
    id: 14,
    type: 'content',
    title: 'Métricas de Evaluación',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <Icon name="tachometer-alt" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">¿Cómo medimos el éxito?</h3>
          </div>
        </div>

        <InteractiveMetricsDemo />

        <div className="space-y-6">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Métricas para Regresión</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <ClickableInfo 
                  definitionKey="mse"
                  className="bg-blue-500/20 p-4 rounded-lg"
                >
                  <h4 className="text-white font-semibold mb-2">MSE - Error Cuadrático Medio</h4>
                  <div className="bg-white p-3 rounded-lg text-center mb-2">
                    <p className="text-sm font-bold text-gray-800">MSE = (1/n) × Σ(y - ŷ)²</p>
                  </div>
                  <p className="text-white/80 text-sm">Penaliza más los errores grandes</p>
                </ClickableInfo>
                <ClickableInfo 
                  definitionKey="mae"
                  className="bg-green-500/20 p-4 rounded-lg"
                >
                  <h4 className="text-white font-semibold mb-2">MAE - Error Absoluto Medio</h4>
                  <div className="bg-white p-3 rounded-lg text-center mb-2">
                    <p className="text-sm font-bold text-gray-800">MAE = (1/n) × Σ|y - ŷ|</p>
                  </div>
                  <p className="text-white/80 text-sm">Más robusto a outliers</p>
                </ClickableInfo>
              </div>
              <div className="space-y-4">
                <ClickableInfo 
                  definitionKey="r_cuadrado"
                  className="bg-purple-500/20 p-4 rounded-lg"
                >
                  <h4 className="text-white font-semibold mb-2">R² - Coeficiente de Determinación</h4>
                  <div className="bg-white p-3 rounded-lg text-center mb-2">
                    <p className="text-sm font-bold text-gray-800">R² = 1 - (SS_res / SS_tot)</p>
                  </div>
                  <p className="text-white/80 text-sm">% de varianza explicada (0 a 1)</p>
                </ClickableInfo>
                <ClickableInfo 
                  definitionKey="rmse"
                  className="bg-orange-500/20 p-4 rounded-lg"
                >
                  <h4 className="text-white font-semibold mb-2">RMSE - Raíz del MSE</h4>
                  <div className="bg-white p-3 rounded-lg text-center mb-2">
                    <p className="text-sm font-bold text-gray-800">RMSE = √MSE</p>
                  </div>
                  <p className="text-white/80 text-sm">En las mismas unidades que y</p>
                </ClickableInfo>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Métricas para Clasificación</h3>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-center">Accuracy</h4>
                <div className="bg-white p-3 rounded-lg text-center mb-2">
                  <p className="text-sm font-bold text-gray-800">Correctas / Total</p>
                </div>
                <p className="text-white/80 text-sm text-center">% de predicciones correctas</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-center">Precision</h4>
                <div className="bg-white p-3 rounded-lg text-center mb-2">
                  <p className="text-sm font-bold text-gray-800">TP / (TP + FP)</p>
                </div>
                <p className="text-white/80 text-sm text-center">De las predichas como positivas, ¿cuántas son correctas?</p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2 text-center">Recall</h4>
                <div className="bg-white p-3 rounded-lg text-center mb-2">
                  <p className="text-sm font-bold text-gray-800">TP / (TP + FN)</p>
                </div>
                <p className="text-white/80 text-sm text-center">De las realmente positivas, ¿cuántas detecté?</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <div className="text-center">
            <Icon name="exclamation-triangle" className="w-8 h-8 text-yellow-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Importante</h3>
            <p className="text-white/90">
              La métrica de evaluación no siempre es la misma que optimizamos durante el entrenamiento
            </p>
            <p className="text-white/70 mt-2 text-sm">
              Algunas métricas son difíciles de optimizar directamente o no son diferenciables
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 15: Metodología práctica
  {
    id: 15,
    type: 'content',
    title: 'Metodología Práctica',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <Icon name="route" className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">Cómo abordar un proyecto de ML</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">
              <Icon name="rocket" className="w-6 h-6 inline mr-2" />
              Crear un End-to-End
            </h3>
            <div className="space-y-4">
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">1. Comenzar Simple</h4>
                <p className="text-white/80 text-sm">Modelo básico que funcione de principio a fin</p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">2. Validar Todo</h4>
                <p className="text-white/80 text-sm">ETL → Entrenamiento → Evaluación → Despliegue</p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">3. Iterar y Mejorar</h4>
                <p className="text-white/80 text-sm">Identificar el cuello de botella más importante</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">
              <Icon name="microscope" className="w-6 h-6 inline mr-2" />
              Análisis de Errores
            </h3>
            <div className="space-y-4">
              <div className="bg-orange-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">1. Revisar Manualmente</h4>
                <p className="text-white/80 text-sm">Analizar casos donde el modelo falla</p>
              </div>
              <div className="bg-red-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">2. Categorizar Problemas</h4>
                <p className="text-white/80 text-sm">¿Qué tipo de errores son más frecuentes?</p>
              </div>
              <div className="bg-yellow-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">3. Priorizar Soluciones</h4>
                <p className="text-white/80 text-sm">Atacar el problema más común primero</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Marco para Tomar Decisiones</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">📋 Formulación</h4>
                <p className="text-white/80 text-sm">• Hipótesis clara</p>
                <p className="text-white/80 text-sm">• Experimento para probarla</p>
                <p className="text-white/80 text-sm">• Criterios de decisión</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">⚖️ Evaluación</h4>
                <p className="text-white/80 text-sm">• Costo del experimento</p>
                <p className="text-white/80 text-sm">• Riesgo de no hacer nada</p>
                <p className="text-white/80 text-sm">• Costo de oportunidad</p>
              </div>
            </div>
            <div className="bg-purple-500/20 p-6 rounded-lg">
              <h4 className="text-white font-semibold mb-4 text-center">Ejemplo Práctico</h4>
              <div className="space-y-2 text-sm">
                <p className="text-white/80"><strong>Contexto:</strong> Métrica baja en test</p>
                <p className="text-white/80"><strong>Hipótesis:</strong> Train y test difieren</p>
                <p className="text-white/80"><strong>Experimento:</strong> Modelo para distinguir train/test</p>
                <p className="text-white/80"><strong>Decisión:</strong> Cambiar división de datos</p>
                <p className="text-white/80"><strong>Costo:</strong> Bajo</p>
                <p className="text-white/80"><strong>Riesgo:</strong> Performance impredecible</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 16: Ejemplo práctico implementación
  {
    id: 16,
    type: 'content',
    title: 'Ejemplo Práctico: Predicción de Precios de Automóviles',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <Icon name="car" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">Caso Real: Concesionaria de Autos</h3>
            <p className="text-white/80">Prediciendo precios basados en antigüedad</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Problema de Negocio</h3>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Situación</h4>
                <p className="text-white/80 text-sm">Concesionaria necesita establecer precios justos para autos usados</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Observación</h4>
                <p className="text-white/80 text-sm">Los autos pierden valor con la antigüedad</p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Objetivo</h4>
                <p className="text-white/80 text-sm">Predecir precio basado en años de antigüedad</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Implementación</h3>
            <div className="space-y-4">
              <div className="bg-orange-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Datos Generados</h4>
                <p className="text-white/80 text-sm">100 automóviles con antigüedad 0-15 años</p>
              </div>
              <div className="bg-red-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Fórmula Base</h4>
                <p className="text-white/80 text-sm">Precio = $25,000 - $1,500 × años + ruido</p>
              </div>
              <div className="bg-yellow-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Validación</h4>
                <p className="text-white/80 text-sm">Comparación manual vs sklearn</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Implementación del Método de Cuadrados Ordinarios</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-800 p-4 rounded-lg">
              <h4 className="text-white font-semibold mb-3">Código Python (Simplificado)</h4>
              <pre className="text-green-300 text-sm">
{`# Preparar datos
X = antiguedad.reshape(-1, 1)
y = precios

# Agregar columna de unos
X_con_intercepto = np.column_stack([
    np.ones(len(X)), X
])

# Fórmula: W = (X'X)^(-1) X'Y
XTX = X_con_intercepto.T @ X_con_intercepto
XTY = X_con_intercepto.T @ y
W = np.linalg.inv(XTX) @ XTY

w0, w1 = W[0], W[1]  # Intercepto y pendiente`}
              </pre>
            </div>
            <div className="space-y-4">
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Resultados Típicos</h4>
                <p className="text-white/80 text-sm">w₀ ≈ $25,000 (precio base)</p>
                <p className="text-white/80 text-sm">w₁ ≈ -$1,500 (depreciación anual)</p>
              </div>
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">Interpretación</h4>
                <p className="text-white/80 text-sm">Cada año reduce el valor en $1,500</p>
                <p className="text-white/80 text-sm">R² típico: 0.85-0.95</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <div className="text-center">
            <Icon name="calculator" className="w-8 h-8 text-green-400 mx-auto mb-4" />
            <h3 className="text-xl font-bold text-white mb-2">Calculadora Práctica</h3>
            <p className="text-white/90 text-lg">
              Precio = $25,000 - $1,500 × años_antigüedad
            </p>
            <p className="text-white/70 mt-2">
              Auto de 5 años = $25,000 - $1,500 × 5 = <strong>$17,500</strong>
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 17: Casos de Negocio Expandidos
  {
    id: 17,
    type: 'content',
    title: 'Casos de Negocio: De la Teoría a la Práctica',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">Aplicaciones Reales de Machine Learning</h3>
            <p className="text-white/80">Cómo las empresas crean valor con datos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClickableInfo 
            definitionKey="ecommerce" 
            className="glass-effect p-8 rounded-xl"
          >
            <div className="text-center mb-6">
              <Icon name="shopping-cart" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">E-commerce</h3>
            </div>
            <p className="text-white/90 text-center mb-6">
              Sistemas de recomendaciones que impulsan el 35% de las ventas en Amazon
            </p>
            <div className="space-y-3">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🎯 Personalización de experiencia</p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">📈 Aumento de conversiones</p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🔄 Cross-selling inteligente</p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">⏱️ Reducción tiempo de búsqueda</p>
              </div>
            </div>
          </ClickableInfo>

          <ClickableInfo 
            definitionKey="bienes_raices" 
            className="glass-effect p-8 rounded-xl"
          >
            <div className="text-center mb-6">
              <Icon name="home" className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white">Bienes Raíces</h3>
            </div>
            <p className="text-white/90 text-center mb-6">
              Zillow usa ML para valuar más de 100 millones de propiedades
            </p>
            <div className="space-y-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">🏠 Valuación automática</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">⚡ Decisiones en tiempo real</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">📊 Análisis de mercado</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">💰 Optimización de precios</p>
              </div>
            </div>
          </ClickableInfo>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ClickableInfo 
            definitionKey="market_pull" 
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Estrategia: Market Pull vs Technology Push</h3>
            <div className="space-y-4">
              <div className="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="text-green-100 font-semibold mb-2">✅ Market Pull</h4>
                <p className="text-white/80 text-sm">Problema → Solución → Tecnología</p>
                <p className="text-white/70 text-xs mt-1">Ejemplo: Uber resuelve el problema del transporte</p>
              </div>
              <div className="bg-red-500/20 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="text-red-100 font-semibold mb-2">❌ Technology Push</h4>
                <p className="text-white/80 text-sm">Tecnología → Buscar problema → Forzar adopción</p>
                <p className="text-white/70 text-xs mt-1">Ejemplo: Google Glass buscaba casos de uso</p>
              </div>
            </div>
          </ClickableInfo>

          <ClickableInfo 
            definitionKey="data_teams" 
            className="glass-effect p-8 rounded-xl"
          >
            <h3 className="text-xl font-bold text-white mb-6">Equipos de Data Products</h3>
            <div className="grid grid-cols-2 gap-3">
              <div className="bg-blue-500/20 p-3 rounded-lg text-center">
                <Icon name="database" className="w-8 h-8 text-blue-300 mx-auto mb-2" />
                <p className="text-white text-sm">Data Engineer</p>
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
                <Icon name="lightbulb" className="w-8 h-8 text-orange-300 mx-auto mb-2" />
                <p className="text-white text-sm">Product Owner</p>
              </div>
            </div>
            <p className="text-white/70 text-sm mt-4 text-center">
              El éxito requiere colaboración multidisciplinaria
            </p>
          </ClickableInfo>
        </div>
      </div>
    )
  },

  // Slide 18: Conclusiones y próximos pasos
  {
    id: 18,
    type: 'content',
    title: 'Conclusiones y Próximos Pasos',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <Icon name="flag-checkered" className="w-16 h-16 text-green-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white">¿Qué hemos aprendido?</h3>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">
              <Icon name="check-circle" className="w-6 h-6 inline mr-2 text-green-400" />
              Conceptos Dominados
            </h3>
            <div className="space-y-3">
              <div className="flex items-center text-white/90">
                <Icon name="check" className="w-4 h-4 mr-3 text-green-300" />
                <span>Diferencia entre IA y Machine Learning</span>
              </div>
              <div className="flex items-center text-white/90">
                <Icon name="check" className="w-4 h-4 mr-3 text-green-300" />
                <span>Tipos de IA: Predictiva, Generativa, Agentes</span>
              </div>
              <div className="flex items-center text-white/90">
                <Icon name="check" className="w-4 h-4 mr-3 text-green-300" />
                <span>Regresión lineal simple y múltiple</span>
              </div>
              <div className="flex items-center text-white/90">
                <Icon name="check" className="w-4 h-4 mr-3 text-green-300" />
                <span>Método de cuadrados ordinarios y descenso de gradiente</span>
              </div>
              <div className="flex items-center text-white/90">
                <Icon name="check" className="w-4 h-4 mr-3 text-green-300" />
                <span>Overfitting vs underfitting</span>
              </div>
              <div className="flex items-center text-white/90">
                <Icon name="check" className="w-4 h-4 mr-3 text-green-300" />
                <span>Métricas de evaluación</span>
              </div>
              <div className="flex items-center text-white/90">
                <Icon name="check" className="w-4 h-4 mr-3 text-green-300" />
                <span>Metodología práctica y casos de negocio</span>
              </div>
            </div>
          </div>

          <div className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">
              <Icon name="road" className="w-6 h-6 inline mr-2 text-blue-400" />
              Próximos Pasos
            </h3>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <h4 className="text-white font-semibold mb-1">Validación Cruzada</h4>
                <p className="text-white/80 text-sm">Técnicas avanzadas de evaluación de modelos</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <h4 className="text-white font-semibold mb-1">Regularización</h4>
                <p className="text-white/80 text-sm">Ridge, Lasso para evitar overfitting</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded-lg">
                <h4 className="text-white font-semibold mb-1">Otros Algoritmos</h4>
                <p className="text-white/80 text-sm">Árboles, SVM, Redes Neuronales</p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <h4 className="text-white font-semibold mb-1">Feature Engineering</h4>
                <p className="text-white/80 text-sm">Crear y seleccionar características relevantes</p>
              </div>
              <div className="bg-red-500/20 p-3 rounded-lg">
                <h4 className="text-white font-semibold mb-1">MLOps</h4>
                <p className="text-white/80 text-sm">Despliegue y mantenimiento de modelos</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Lecciones Clave para el Mundo Real</h3>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="bg-yellow-500/20 p-6 rounded-xl text-center">
              <Icon name="lightbulb" className="w-12 h-12 text-yellow-300 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Empezar Simple</h4>
              <p className="text-white/80 text-sm">Un modelo básico que funcione es mejor que uno complejo que no</p>
            </div>
            <div className="bg-red-500/20 p-6 rounded-xl text-center">
              <Icon name="crosshairs" className="w-12 h-12 text-red-300 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Enfoque en el Problema</h4>
              <p className="text-white/80 text-sm">Market pull vs Technology push</p>
            </div>
            <div className="bg-green-500/20 p-6 rounded-xl text-center">
              <Icon name="sync" className="w-12 h-12 text-green-300 mx-auto mb-4" />
              <h4 className="text-white font-semibold mb-2">Iterar Rápido</h4>
              <p className="text-white/80 text-sm">Ciclos cortos de experimentación</p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl">
          <div className="text-center">
            <Icon name="graduation-cap" className="w-12 h-12 text-blue-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">¡Felicitaciones!</h3>
            <p className="text-white/90 text-lg mb-2">
              Has completado los fundamentos de Machine Learning
            </p>
            <p className="text-white/70">
              Ahora tienes las bases para abordar problemas reales con datos
            </p>
          </div>
        </div>
      </div>
    )
  }
];

export default additionalSlidesData;

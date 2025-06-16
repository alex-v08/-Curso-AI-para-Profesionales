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

/**
 * Slides adicionales con todas las definiciones y componentes interactivos
 * Estos se pueden agregar a los slides existentes o usar como reemplazo
 */

export const extendedSlidesData = [
  // Slide adicional: Descenso de Gradiente
  {
    id: 'gradient-descent',
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
          <ClickableInfo definitionKey="gradient_descent" className="glass-effect p-8 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-6">Concepto del Algoritmo</h3>
            <div className="space-y-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">1. Inicialización</h4>
                <p className="text-white/80 text-sm">Empezar con valores aleatorios de w₀ y w₁</p>
              </div>
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">2. Calcular Gradientes</h4>
                <p className="text-white/80 text-sm">Encontrar la dirección de mayor crecimiento del error</p>
              </div>
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">3. Actualizar Parámetros</h4>
                <p className="text-white/80 text-sm">Moverse en dirección opuesta al gradiente</p>
              </div>
              <div className="bg-orange-500/20 p-4 rounded-lg">
                <h4 className="text-white font-semibold mb-2">4. Repetir</h4>
                <p className="text-white/80 text-sm">Hasta que el algoritmo converja</p>
              </div>
            </div>
          </ClickableInfo>

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
        </div>
      </div>
    )
  },

  // Slide adicional: Overfitting vs Underfitting
  {
    id: 'overfitting-underfitting',
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
          <ClickableInfo definitionKey="overfitting" className="glass-effect p-6 rounded-xl border-l-4 border-red-400">
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

  // Slide adicional: Casos de Negocio Expandidos
  {
    id: 'business-cases-expanded',
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
          <ClickableInfo definitionKey="ecommerce" className="glass-effect p-8 rounded-xl">
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

          <ClickableInfo definitionKey="bienes_raices" className="glass-effect p-8 rounded-xl">
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
          <ClickableInfo definitionKey="market_pull" className="glass-effect p-8 rounded-xl">
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

          <ClickableInfo definitionKey="data_teams" className="glass-effect p-8 rounded-xl">
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

  // Slide adicional: Métricas Avanzadas
  {
    id: 'advanced-metrics',
    type: 'content',
    title: 'Métricas de Evaluación: Midiendo el Éxito',
    content: (
      <div className="space-y-8 fade-in">
        <div className="text-center mb-8">
          <div className="glass-effect p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">¿Cómo sabemos si nuestro modelo es bueno?</h3>
            <p className="text-white/80">Métricas que nos dicen la verdad sobre el rendimiento</p>
          </div>
        </div>

        <InteractiveMetricsDemo />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-4">
            <ClickableInfo definitionKey="mse" className="glass-effect p-6 rounded-xl border-l-4 border-blue-400">
              <h4 className="text-xl font-bold text-white mb-4">MSE - Error Cuadrático Medio</h4>
              <div className="bg-gray-100 p-3 rounded-lg font-mono text-center mb-4">
                <p className="text-lg font-bold text-gray-800">MSE = (1/n) × Σ(y - ŷ)²</p>
              </div>
              <div className="space-y-2">
                <div className="bg-blue-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">✅ Penaliza errores grandes</p>
                </div>
                <div className="bg-blue-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">❌ Sensible a outliers</p>
                </div>
                <div className="bg-blue-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">⚠️ Unidades al cuadrado</p>
                </div>
              </div>
            </ClickableInfo>

            <ClickableInfo definitionKey="mae" className="glass-effect p-6 rounded-xl border-l-4 border-green-400">
              <h4 className="text-xl font-bold text-white mb-4">MAE - Error Absoluto Medio</h4>
              <div className="bg-gray-100 p-3 rounded-lg font-mono text-center mb-4">
                <p className="text-lg font-bold text-gray-800">MAE = (1/n) × Σ|y - ŷ|</p>
              </div>
              <div className="space-y-2">
                <div className="bg-green-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">✅ Fácil de interpretar</p>
                </div>
                <div className="bg-green-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">✅ Robusto a outliers</p>
                </div>
                <div className="bg-green-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">✅ Mismas unidades que Y</p>
                </div>
              </div>
            </ClickableInfo>
          </div>

          <div className="space-y-4">
            <ClickableInfo definitionKey="r_cuadrado" className="glass-effect p-6 rounded-xl border-l-4 border-purple-400">
              <h4 className="text-xl font-bold text-white mb-4">R² - Coeficiente de Determinación</h4>
              <div className="bg-gray-100 p-3 rounded-lg font-mono text-center mb-4">
                <p className="text-lg font-bold text-gray-800">R² = 1 - (SS_res / SS_tot)</p>
              </div>
              <div className="space-y-2">
                <div className="bg-purple-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">📊 0% = Modelo inútil</p>
                </div>
                <div className="bg-purple-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">📈 50% = Explica la mitad</p>
                </div>
                <div className="bg-purple-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">🎯 100% = Predicción perfecta</p>
                </div>
              </div>
            </ClickableInfo>

            <ClickableInfo definitionKey="rmse" className="glass-effect p-6 rounded-xl border-l-4 border-orange-400">
              <h4 className="text-xl font-bold text-white mb-4">RMSE - Raíz del MSE</h4>
              <div className="bg-gray-100 p-3 rounded-lg font-mono text-center mb-4">
                <p className="text-lg font-bold text-gray-800">RMSE = √MSE</p>
              </div>
              <div className="space-y-2">
                <div className="bg-orange-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">✅ Mismas unidades que Y</p>
                </div>
                <div className="bg-orange-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">✅ Mantiene propiedades MSE</p>
                </div>
                <div className="bg-orange-500/20 p-2 rounded">
                  <p className="text-white/80 text-sm">⚡ RMSE > MAE = Outliers</p>
                </div>
              </div>
            </ClickableInfo>
          </div>
        </div>
      </div>
    )
  }
];

export default extendedSlidesData;

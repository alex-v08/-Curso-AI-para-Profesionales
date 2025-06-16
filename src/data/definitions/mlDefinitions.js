import React from 'react';

/**
 * Definiciones completas de conceptos de Machine Learning
 * Incluye: regresión lineal, métricas, algoritmos y técnicas
 */

export const mlDefinitions = {
  // ===== REGRESIÓN LINEAL =====
  
  regresion_simple: {
    title: "Regresión Lineal Simple",
    content: (
      <div>
        <p><strong>Definición:</strong> Técnica estadística que modela la relación entre una variable dependiente y una variable independiente usando una línea recta.</p>
        
        <h4>Fórmula fundamental:</h4>
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-center text-lg">
          y = β₀ + β₁x + ε
        </div>
        
        <h4>Componentes:</h4>
        <ul>
          <li>• <strong>β₀:</strong> Intercepto (valor cuando x = 0)</li>
          <li>• <strong>β₁:</strong> Pendiente (cambio en y por unidad de x)</li>
          <li>• <strong>ε:</strong> Error o residuo</li>
        </ul>
        
        <h4>Interpretación geométrica:</h4>
        <ul>
          <li>• <strong>Intercepto (β₀):</strong> Punto donde la línea corta el eje Y</li>
          <li>• <strong>Pendiente (β₁):</strong> Inclinación de la recta</li>
          <li>• <strong>Positiva:</strong> A mayor X, mayor Y</li>
          <li>• <strong>Negativa:</strong> A mayor X, menor Y</li>
        </ul>
        
        <h4>Cuándo usarla:</h4>
        <ul>
          <li>📈 <strong>Relación lineal:</strong> Entre variables</li>
          <li>🔢 <strong>Predicción:</strong> Valores continuos</li>
          <li>📊 <strong>Análisis:</strong> Tendencias y patrones</li>
          <li>🎯 <strong>Simplicidad:</strong> Modelo interpretable</li>
        </ul>
        
        <h4>Supuestos importantes:</h4>
        <ul>
          <li>• <strong>Linealidad:</strong> Relación lineal entre X e Y</li>
          <li>• <strong>Independencia:</strong> Observaciones independientes</li>
          <li>• <strong>Homocedasticidad:</strong> Varianza constante de errores</li>
          <li>• <strong>Normalidad:</strong> Errores distribuidos normalmente</li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Ejemplo:</strong> Predecir el precio de una casa basándose en su tamaño en m². Si β₀ = 50,000 y β₁ = 1,000, una casa de 100m² costaría: 50,000 + 1,000×100 = $150,000</p>
        </div>
      </div>
    ),
    type: 'regression'
  },
  
  regresion_multiple: {
    title: "Regresión Lineal Múltiple",
    content: (
      <div>
        <p><strong>Definición:</strong> Extensión de la regresión simple que utiliza múltiples variables independientes para predecir una variable dependiente.</p>
        
        <h4>Fórmula general:</h4>
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-center text-lg">
          y = β₀ + β₁x₁ + β₂x₂ + ... + βₙxₙ + ε
        </div>
        
        <h4>Representación matricial:</h4>
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-center text-xl">
          Y = XW + ε
        </div>
        <p className="text-sm text-gray-600 mt-2">Donde Y es vector de resultados, X es matriz de características, W es vector de parámetros</p>
        
        <h4>Ventajas:</h4>
        <ul>
          <li>• <strong>Más precisa:</strong> Considera múltiples factores</li>
          <li>• <strong>Realista:</strong> Los fenómenos reales son multivariados</li>
          <li>• <strong>Flexible:</strong> Puede incluir variables categóricas</li>
          <li>• <strong>Control:</strong> Controla por variables confusoras</li>
        </ul>
        
        <h4>Interpretación geométrica:</h4>
        <ul>
          <li>• <strong>2 variables:</strong> Línea en el plano</li>
          <li>• <strong>3 variables:</strong> Plano en el espacio 3D</li>
          <li>• <strong>4+ variables:</strong> Hiperplano multidimensional</li>
        </ul>
        
        <h4>Desafíos adicionales:</h4>
        <ul>
          <li>• <strong>Multicolinealidad:</strong> Variables X correlacionadas entre sí</li>
          <li>• <strong>Overfitting:</strong> Demasiadas variables para pocos datos</li>
          <li>• <strong>Interpretación:</strong> Más compleja que regresión simple</li>
          <li>• <strong>Selección:</strong> ¿Qué variables incluir?</li>
        </ul>
        
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <p><strong>Ejemplo:</strong> Predecir precio de casa usando: tamaño (β₁=1000), ubicación (β₂=50000), edad (β₃=-2000), habitaciones (β₄=15000). Casa de 100m², buena ubicación, 5 años, 3 habitaciones: 50000 + 1000×100 + 50000×1 + (-2000)×5 + 15000×3 = $185,000</p>
        </div>
      </div>
    ),
    type: 'regression'
  },
  
  cuadrados_ordinarios: {
    title: "Método de Cuadrados Ordinarios (OLS)",
    content: (
      <div>
        <p><strong>Definición:</strong> Técnica matemática para encontrar los parámetros de una regresión lineal minimizando la suma de los errores al cuadrado.</p>
        
        <h4>Objetivo:</h4>
        <p>Minimizar la función de costo (pérdida):</p>
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-center">
          L(β) = Σ(yᵢ - ŷᵢ)² = Σ(yᵢ - (β₀ + β₁xᵢ))²
        </div>
        
        <h4>Fórmula de la solución (forma matricial):</h4>
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-center text-xl">
          W = (XᵀX)⁻¹XᵀY
        </div>
        
        <h4>Proceso paso a paso:</h4>
        <ol>
          <li>1. <strong>Preparar matriz X:</strong> Agregar columna de 1s para intercepto</li>
          <li>2. <strong>Calcular Xᵀ:</strong> Transponer matriz X</li>
          <li>3. <strong>Multiplicar Xᵀ × X:</strong> Matriz cuadrada</li>
          <li>4. <strong>Invertir (XᵀX)⁻¹:</strong> Inversa de la matriz</li>
          <li>5. <strong>Multiplicar por XᵀY:</strong> Obtener vector de parámetros</li>
        </ol>
        
        <h4>¿Por qué "cuadrados"?</h4>
        <ul>
          <li>• <strong>Evita cancelación:</strong> Errores positivos y negativos no se anulan</li>
          <li>• <strong>Penaliza errores grandes:</strong> Error de 10 contribuye 100, error de 1 contribuye 1</li>
          <li>• <strong>Matemáticamente tratable:</strong> Función convexa con mínimo único</li>
          <li>• <strong>Derivable:</strong> Permite encontrar el mínimo analíticamente</li>
        </ul>
        
        <h4>Ventajas:</h4>
        <ul>
          <li>• <strong>Solución exacta:</strong> No iterativo, resultado en un paso</li>
          <li>• <strong>Matemáticamente elegante:</strong> Fórmula cerrada</li>
          <li>• <strong>Óptimo:</strong> Minimiza el error cuadrático</li>
          <li>• <strong>Propiedades estadísticas:</strong> BLUE (Best Linear Unbiased Estimator)</li>
        </ul>
        
        <h4>Limitaciones:</h4>
        <ul>
          <li>• <strong>Costo computacional:</strong> O(n³) por inversión matricial</li>
          <li>• <strong>Estabilidad numérica:</strong> Problemas si XᵀX es singular</li>
          <li>• <strong>Memoria:</strong> Requiere cargar todos los datos</li>
          <li>• <strong>Supuestos estrictos:</strong> Linealidad, homocedasticidad, etc.</li>
        </ul>
        
        <div className="bg-orange-50 p-4 rounded-lg mt-4">
          <p><strong>Alternativa:</strong> Para matrices muy grandes, se prefiere el descenso de gradiente que es iterativo pero más eficiente en memoria y cómputo.</p>
        </div>
      </div>
    ),
    type: 'regression'
  },
  
  // ===== MÉTRICAS DE EVALUACIÓN =====
  
  mse: {
    title: "Error Cuadrático Medio (MSE)",
    content: (
      <div>
        <p><strong>Definición:</strong> Métrica que mide la diferencia promedio al cuadrado entre los valores reales y las predicciones del modelo.</p>
        
        <h4>Fórmula matemática:</h4>
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-center text-lg">
          MSE = (1/n) × Σ(yᵢ - ŷᵢ)²
        </div>
        
        <h4>Características importantes:</h4>
        <ul>
          <li>• <strong>Penaliza errores grandes:</strong> Los errores se elevan al cuadrado</li>
          <li>• <strong>Siempre positivo:</strong> No pueden cancelarse errores negativos</li>
          <li>• <strong>En unidades al cuadrado:</strong> Si predices precios en $, MSE está en $²</li>
          <li>• <strong>Sensible a outliers:</strong> Valores atípicos afectan mucho</li>
        </ul>
        
        <h4>Interpretación práctica:</h4>
        <div className="space-y-2">
          <div className="bg-green-100 p-3 rounded">
            <p><strong>MSE = 0:</strong> Predicciones perfectas</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded">
            <p><strong>MSE bajo:</strong> Buenas predicciones</p>
          </div>
          <div className="bg-red-100 p-3 rounded">
            <p><strong>MSE alto:</strong> Predicciones pobres o muchos outliers</p>
          </div>
        </div>
        
        <h4>Ventajas y desventajas:</h4>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-800">✅ Ventajas</p>
            <p className="text-sm">• Matemáticamente conveniente</p>
            <p className="text-sm">• Derivable (útil para optimización)</p>
            <p className="text-sm">• Penaliza errores grandes</p>
            <p className="text-sm">• Función de pérdida estándar</p>
          </div>
          <div className="bg-red-50 p-3 rounded">
            <p className="font-semibold text-red-800">❌ Desventajas</p>
            <p className="text-sm">• Sensible a outliers</p>
            <p className="text-sm">• Unidades al cuadrado</p>
            <p className="text-sm">• Difícil de interpretar</p>
            <p className="text-sm">• Puede ser dominado por pocos errores grandes</p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Ejemplo:</strong> Si predices precios de casas y tienes errores de $5K, $10K, y $15K, el MSE sería: (5² + 10² + 15²)/3 = (25 + 100 + 225)/3 = 116.67 miles de $ al cuadrado.</p>
        </div>
      </div>
    ),
    type: 'ml'
  },
  
  mae: {
    title: "Error Absoluto Medio (MAE)",
    content: (
      <div>
        <p><strong>Definición:</strong> Métrica que mide la diferencia promedio absoluta entre valores reales y predicciones, sin elevar al cuadrado.</p>
        
        <h4>Fórmula matemática:</h4>
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-center text-lg">
          MAE = (1/n) × Σ|yᵢ - ŷᵢ|
        </div>
        
        <h4>Características importantes:</h4>
        <ul>
          <li>• <strong>Mismas unidades:</strong> Si predices precios en $, MAE está en $</li>
          <li>• <strong>Robusto a outliers:</strong> No se afecta tanto por valores extremos</li>
          <li>• <strong>Interpretación directa:</strong> "En promedio me equivoco por X"</li>
          <li>• <strong>Trata errores igual:</strong> Error de $1K y $10K contribuyen linealmente</li>
        </ul>
        
        <h4>Comparación con MSE:</h4>
        <table className="w-full border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Aspecto</th>
              <th className="border p-2">MAE</th>
              <th className="border p-2">MSE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">Unidades</td>
              <td className="border p-2">Mismas que Y</td>
              <td className="border p-2">Y al cuadrado</td>
            </tr>
            <tr>
              <td className="border p-2">Outliers</td>
              <td className="border p-2">Robusto</td>
              <td className="border p-2">Sensible</td>
            </tr>
            <tr>
              <td className="border p-2">Interpretación</td>
              <td className="border p-2">Fácil</td>
              <td className="border p-2">Difícil</td>
            </tr>
            <tr>
              <td className="border p-2">Optimización</td>
              <td className="border p-2">No diferenciable en 0</td>
              <td className="border p-2">Siempre diferenciable</td>
            </tr>
          </tbody>
        </table>
        
        <h4>Cuándo usar MAE:</h4>
        <ul>
          <li>• <strong>Outliers presentes:</strong> Cuando hay valores atípicos</li>
          <li>• <strong>Interpretabilidad:</strong> Cuando necesitas explicar a no técnicos</li>
          <li>• <strong>Errores uniformes:</strong> Cuando todos los errores tienen igual importancia</li>
          <li>• <strong>Evaluación final:</strong> Para reportar performance</li>
        </ul>
        
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <p><strong>Ejemplo:</strong> Con los mismos errores ($5K, $10K, $15K), el MAE sería: (5 + 10 + 15)/3 = $10K. Esto significa "en promedio, nuestras predicciones se equivocan por $10,000".</p>
        </div>
      </div>
    ),
    type: 'ml'
  },
  
  r_cuadrado: {
    title: "Coeficiente de Determinación (R²)",
    content: (
      <div>
        <p><strong>Definición:</strong> Métrica que indica qué porcentaje de la variabilidad en los datos es explicada por el modelo. Va de 0 a 1 (0% a 100%).</p>
        
        <h4>Fórmula matemática:</h4>
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-center text-lg">
          R² = 1 - (SS_res / SS_tot)
        </div>
        
        <h4>Componentes:</h4>
        <ul>
          <li>• <strong>SS_res:</strong> Suma de cuadrados de residuos (errores del modelo)</li>
          <li>• <strong>SS_tot:</strong> Suma total de cuadrados (variabilidad total)</li>
          <li>• <strong>SS_reg:</strong> Suma de cuadrados explicada por regresión</li>
        </ul>
        
        <h4>Interpretación de valores:</h4>
        <div className="space-y-3 mt-4">
          <div className="bg-red-100 p-3 rounded-lg">
            <p><strong>R² = 0.0 (0%):</strong> El modelo no explica nada, es como usar la media</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded-lg">
            <p><strong>R² = 0.5 (50%):</strong> El modelo explica la mitad de la variabilidad</p>
          </div>
          <div className="bg-orange-100 p-3 rounded-lg">
            <p><strong>R² = 0.8 (80%):</strong> Muy buen modelo, explica la mayoría de la variabilidad</p>
          </div>
          <div className="bg-green-100 p-3 rounded-lg">
            <p><strong>R² = 1.0 (100%):</strong> Perfecto, explica toda la variabilidad (¡cuidado con overfitting!)</p>
          </div>
        </div>
        
        <h4>Ventajas del R²:</h4>
        <ul>
          <li>• <strong>Independiente de escala:</strong> Funciona igual para precios ($) o temperaturas (°C)</li>
          <li>• <strong>Fácil interpretación:</strong> % de variabilidad explicada</li>
          <li>• <strong>Compara modelos:</strong> Mayor R² = mejor modelo (generalmente)</li>
          <li>• <strong>Estándar:</strong> Métrica universalmente reconocida</li>
        </ul>
        
        <h4>Limitaciones importantes:</h4>
        <ul>
          <li>• <strong>No detecta overfitting:</strong> Siempre mejora agregando variables</li>
          <li>• <strong>No implica causalidad:</strong> Solo correlación</li>
          <li>• <strong>Sensible a outliers:</strong> Como se basa en cuadrados</li>
          <li>• <strong>Solo para regresión lineal:</strong> No apropiado para otros modelos</li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Analogía:</strong> Si R² = 0.7, es como decir "Mi modelo explica el 70% de por qué las casas tienen diferentes precios. El 30% restante se debe a factores que no estoy considerando."</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
          <p><strong>R² Ajustado:</strong> Versión que penaliza modelos complejos: R²_adj = 1 - (1-R²)(n-1)/(n-p-1). Mejor para comparar modelos con diferente número de variables.</p>
        </div>
      </div>
    ),
    type: 'ml'
  },
  
  rmse: {
    title: "Raíz del Error Cuadrático Medio (RMSE)",
    content: (
      <div>
        <p><strong>Definición:</strong> Raíz cuadrada del MSE, que devuelve la métrica a las unidades originales de la variable objetivo.</p>
        
        <h4>Fórmula matemática:</h4>
        <div className="bg-gray-100 p-4 rounded-lg font-mono text-center text-lg">
          RMSE = √(MSE) = √[(1/n) × Σ(yᵢ - ŷᵢ)²]
        </div>
        
        <h4>Características:</h4>
        <ul>
          <li>• <strong>Mismas unidades que Y:</strong> Si predices precios en $, RMSE está en $</li>
          <li>• <strong>Mantiene propiedades de MSE:</strong> Penaliza errores grandes</li>
          <li>• <strong>Más interpretable que MSE:</strong> Pero menos que MAE</li>
          <li>• <strong>Siempre ≥ MAE:</strong> Por la desigualdad de Jensen</li>
        </ul>
        
        <h4>Relación con otras métricas:</h4>
        <div className="bg-gray-100 p-4 rounded-lg">
          <p><strong>MAE ≤ RMSE ≤ √n × MAE</strong></p>
          <p className="text-sm text-gray-600">Cuando MAE = RMSE, todos los errores son iguales</p>
          <p className="text-sm text-gray-600">Cuando RMSE >> MAE, hay outliers significativos</p>
        </div>
        
        <h4>Interpretación de la diferencia RMSE - MAE:</h4>
        <ul>
          <li>• <strong>RMSE ≈ MAE:</strong> Errores uniformes, pocos outliers</li>
          <li>• <strong>RMSE > MAE:</strong> Algunos errores grandes, presencia de outliers</li>
          <li>• <strong>RMSE >> MAE:</strong> Muchos outliers, modelo inconsistente</li>
        </ul>
        
        <h4>Cuándo usar RMSE:</h4>
        <ul>
          <li>• <strong>Penalizar errores grandes:</strong> Cuando errores grandes son especialmente malos</li>
          <li>• <strong>Interpretabilidad moderada:</strong> Más interpretable que MSE</li>
          <li>• <strong>Estándar en competencias:</strong> Métrica común en Kaggle</li>
          <li>• <strong>Distribución normal:</strong> Cuando errores siguen distribución normal</li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Ejemplo:</strong> Con errores de $5K, $10K, $15K:</p>
          <p>MSE = (25 + 100 + 225)/3 = 116.67</p>
          <p>RMSE = √116.67 = $10.8K</p>
          <p>MAE = (5 + 10 + 15)/3 = $10K</p>
          <p>RMSE > MAE indica presencia de errores variables.</p>
        </div>
      </div>
    ),
    type: 'ml'
  }
};

export default mlDefinitions;

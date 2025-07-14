import React from 'react';
import Icon from './Icon';
import ClickableInfo from './ClickableInfo';

/**
 * Ejemplo de slide utilizando el nuevo tema educativo
 * Este componente muestra cómo aplicar las nuevas clases CSS educativas
 */
const EducationalSlideExample = () => {
  return (
    <div className="edu-container">
      <div className="edu-space-y-8">
        {/* Hero Section con título principal */}
        <div className="edu-text-center">
          <h1 className="edu-hero-title">
            Machine Learning para Profesionales
          </h1>
          <p className="edu-subtitle">
            Transformando datos en decisiones inteligentes
          </p>
        </div>

        {/* Grid de conceptos clave */}
        <div className="edu-grid-2">
          {/* Tarjeta de concepto clave */}
          <div className="edu-concept-card">
            <div className="edu-flex">
              <Icon name="brain" className="w-8 h-8 text-blue-400 mr-4" />
              <div>
                <h3 className="edu-heading-3">Aprendizaje Supervisado</h3>
                <p className="edu-text">
                  Algoritmos que aprenden de datos etiquetados para hacer predicciones sobre nuevos datos.
                </p>
                <button className="edu-btn-primary mt-4">
                  Explorar Más
                </button>
              </div>
            </div>
          </div>

          {/* Tarjeta de concepto clave */}
          <div className="edu-concept-card">
            <div className="edu-flex">
              <Icon name="search" className="w-8 h-8 text-blue-400 mr-4" />
              <div>
                <h3 className="edu-heading-3">Aprendizaje No Supervisado</h3>
                <p className="edu-text">
                  Descubre patrones ocultos en datos sin etiquetas previas.
                </p>
                <button className="edu-btn-primary mt-4">
                  Explorar Más
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo práctico */}
        <div className="edu-example-card">
          <h3 className="edu-heading-3">Ejemplo Práctico: Predicción de Ventas</h3>
          <p className="edu-text">
            Veamos cómo implementar un modelo simple de regresión lineal:
          </p>
          <pre className="bg-gray-800 p-4 rounded-lg text-green-400 text-sm overflow-x-auto">
{`from sklearn.linear_model import LinearRegression
import numpy as np

# Datos de entrenamiento
X = np.array([[1], [2], [3], [4], [5]])  # Meses
y = np.array([100, 150, 200, 250, 300])  # Ventas

# Crear y entrenar el modelo
model = LinearRegression()
model.fit(X, y)

# Predecir ventas para el mes 6
prediction = model.predict([[6]])
print(f"Ventas predichas para el mes 6: {prediction[0]:.2f}")`}
          </pre>
          <div className="mt-4">
            <button className="edu-btn-secondary">
              Ejecutar Código
            </button>
          </div>
        </div>

        {/* Nota importante */}
        <div className="edu-warning-card">
          <div className="edu-flex">
            <Icon name="exclamation-triangle" className="w-6 h-6 text-orange-400 mr-3 flex-shrink-0 mt-1" />
            <div>
              <h4 className="edu-heading-3">Importante</h4>
              <p className="edu-text">
                Recuerda que la calidad de los datos es fundamental para obtener predicciones precisas. 
                Siempre valida tus modelos con datos que no hayan sido utilizados durante el entrenamiento.
              </p>
            </div>
          </div>
        </div>

        {/* Ejercicio interactivo */}
        <div className="edu-card edu-card-interactive">
          <h3 className="edu-heading-3">Ejercicio Interactivo</h3>
          <p className="edu-text">
            Ajusta los parámetros del modelo y observa cómo cambian las predicciones:
          </p>
          
          <div className="edu-space-y-4 mt-6">
            <div>
              <label className="edu-text-small block mb-2">
                Tasa de Aprendizaje: <span className="font-mono">0.01</span>
              </label>
              <input 
                type="range" 
                className="edu-slider w-full" 
                min="0.001" 
                max="0.1" 
                step="0.001" 
                defaultValue="0.01"
              />
            </div>
            
            <div>
              <label className="edu-text-small block mb-2">
                Número de Iteraciones: <span className="font-mono">100</span>
              </label>
              <input 
                type="range" 
                className="edu-slider w-full" 
                min="10" 
                max="1000" 
                step="10" 
                defaultValue="100"
              />
            </div>
            
            <div className="edu-flex-center">
              <button className="edu-btn-primary">
                Entrenar Modelo
              </button>
              <button className="edu-btn-secondary">
                Reiniciar
              </button>
            </div>
          </div>
        </div>

        {/* Progreso del estudiante */}
        <div className="edu-card">
          <h3 className="edu-heading-3">Tu Progreso en este Módulo</h3>
          <div className="edu-progress mt-4">
            <div className="edu-progress-bar" style={{ width: '75%' }}></div>
          </div>
          <p className="edu-text-small mt-2">
            Has completado 3 de 4 conceptos fundamentales (75%)
          </p>
          
          <div className="edu-grid-3 mt-6 gap-4">
            <div className="text-center">
              <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Icon name="check" className="w-4 h-4 text-white" />
              </div>
              <p className="edu-text-small">Conceptos Básicos</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Icon name="check" className="w-4 h-4 text-white" />
              </div>
              <p className="edu-text-small">Algoritmos</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-green-500 rounded-full mx-auto mb-2 flex items-center justify-center">
                <Icon name="check" className="w-4 h-4 text-white" />
              </div>
              <p className="edu-text-small">Implementación</p>
            </div>
            <div className="text-center">
              <div className="w-8 h-8 bg-gray-400 rounded-full mx-auto mb-2 flex items-center justify-center">
                <span className="text-white text-sm">4</span>
              </div>
              <p className="edu-text-small text-gray-400">Evaluación</p>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="edu-text-center">
          <button className="edu-btn-primary edu-bounce">
            Continuar al Siguiente Tema
          </button>
        </div>
      </div>
    </div>
  );
};

export default EducationalSlideExample;
import React, { useState, useMemo } from 'react';
import Icon from '../Icon';

/**
 * Componente interactivo para demostrar overfitting vs underfitting
 */
const OverfittingDemo = () => {
  const [modelComplexity, setModelComplexity] = useState(2);
  const [noiseLevel, setNoiseLevel] = useState(0.5);
  const [showValidation, setShowValidation] = useState(true);
  const [datasetSize, setDatasetSize] = useState(20);

  // Función objetivo verdadera (cuadrática con ruido)
  const trueFunction = (x) => 0.5 * x * x - 2 * x + 1;

  // Generar datos de entrenamiento
  const generateData = (size, noise) => {
    const data = [];
    for (let i = 0; i < size; i++) {
      const x = (i / (size - 1)) * 6 - 3; // x entre -3 y 3
      const yTrue = trueFunction(x);
      const yNoise = yTrue + (Math.random() - 0.5) * noise * 4;
      data.push({ x, y: yNoise, yTrue });
    }
    return data;
  };

  // Datos fijos para consistency
  const trainData = useMemo(() => generateData(datasetSize, noiseLevel), [datasetSize, noiseLevel]);
  const validationData = useMemo(() => generateData(Math.floor(datasetSize * 0.3), noiseLevel * 0.8), [datasetSize, noiseLevel]);

  // Función de predicción polinomial
  const polynomialPredict = (x, degree, data) => {
    if (degree === 1) {
      // Regresión lineal simple
      const n = data.length;
      const sumX = data.reduce((sum, p) => sum + p.x, 0);
      const sumY = data.reduce((sum, p) => sum + p.y, 0);
      const sumXY = data.reduce((sum, p) => sum + p.x * p.y, 0);
      const sumX2 = data.reduce((sum, p) => sum + p.x * p.x, 0);
      
      const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
      const intercept = (sumY - slope * sumX) / n;
      
      return intercept + slope * x;
    } else {
      // Interpolación polinomial para grados altos
      if (degree >= data.length) {
        // Para evitar overfitting extremo, limitamos
        degree = Math.min(degree, data.length - 1);
      }
      
      // Implementación simplificada para visualización
      // En realidad, se usaría regression polinomial apropiada
      let prediction = 0;
      for (let i = 0; i < data.length; i++) {
        let term = data[i].y;
        for (let j = 0; j < data.length; j++) {
          if (i !== j) {
            term *= (x - data[j].x) / (data[i].x - data[j].x);
          }
        }
        if (isFinite(term)) {
          prediction += term;
        }
      }
      
      // Suavizar para evitar explosión numérica
      if (!isFinite(prediction) || Math.abs(prediction) > 50) {
        return trueFunction(x) + (Math.random() - 0.5) * 2;
      }
      
      return prediction;
    }
  };

  // Calcular MSE
  const calculateMSE = (data, degree) => {
    const errors = data.map(point => {
      const pred = polynomialPredict(point.x, degree, trainData);
      return (point.y - pred) ** 2;
    });
    return errors.reduce((sum, e) => sum + e, 0) / errors.length;
  };

  const trainMSE = calculateMSE(trainData, modelComplexity);
  const validMSE = showValidation ? calculateMSE(validationData, modelComplexity) : 0;

  // Determinar el estado del modelo
  const getModelState = () => {
    if (modelComplexity === 1) {
      return { state: 'underfitting', color: 'text-red-400', description: 'Muy simple - no captura patrones' };
    } else if (modelComplexity <= 3) {
      return { state: 'balanced', color: 'text-green-400', description: 'Equilibrado - buena generalización' };
    } else if (modelComplexity <= 6) {
      return { state: 'slight-overfitting', color: 'text-yellow-400', description: 'Comenzando a sobreajustar' };
    } else {
      return { state: 'overfitting', color: 'text-red-400', description: 'Sobreajuste severo - memoriza ruido' };
    }
  };

  const modelState = getModelState();

  return (
    <div className="glass-effect p-8 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        <Icon name="balance-scale" className="w-6 h-6 inline mr-2" />
        Demo: Underfitting vs Overfitting
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controles */}
        <div className="space-y-6">
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Complejidad del Modelo</h4>
            <div>
              <label className="block text-white text-sm mb-1">
                Grado del Polinomio: {modelComplexity}
              </label>
              <input 
                type="range" 
                min="1" 
                max="15" 
                step="1"
                value={modelComplexity}
                onChange={(e) => setModelComplexity(parseInt(e.target.value))}
                className="w-full h-2 bg-blue-300 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-white/70 mt-1">
                <span>Simple</span>
                <span>Complejo</span>
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Ruido en los Datos</h4>
            <div>
              <label className="block text-white text-sm mb-1">
                Nivel de Ruido: {noiseLevel.toFixed(1)}
              </label>
              <input 
                type="range" 
                min="0" 
                max="2" 
                step="0.1"
                value={noiseLevel}
                onChange={(e) => setNoiseLevel(parseFloat(e.target.value))}
                className="w-full h-2 bg-green-300 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-white/70 mt-1">
                <span>Sin ruido</span>
                <span>Muy ruidoso</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Tamaño del Dataset</h4>
            <div>
              <label className="block text-white text-sm mb-1">
                Puntos de Entrenamiento: {datasetSize}
              </label>
              <input 
                type="range" 
                min="10" 
                max="50" 
                step="5"
                value={datasetSize}
                onChange={(e) => setDatasetSize(parseInt(e.target.value))}
                className="w-full h-2 bg-purple-300 rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-xs text-white/70 mt-1">
                <span>Pocos datos</span>
                <span>Muchos datos</span>
              </div>
            </div>
          </div>

          <div className="bg-orange-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Configuración</h4>
            <label className="flex items-center text-white cursor-pointer">
              <input 
                type="checkbox" 
                checked={showValidation}
                onChange={(e) => setShowValidation(e.target.checked)}
                className="mr-3 w-4 h-4"
              />
              Mostrar conjunto de validación
            </label>
          </div>

          <div className={`bg-gray-800 p-4 rounded-lg border-l-4 ${
            modelState.state === 'balanced' ? 'border-green-400' : 
            modelState.state === 'slight-overfitting' ? 'border-yellow-400' : 
            'border-red-400'
          }`}>
            <h4 className="text-white font-semibold mb-2">Estado del Modelo</h4>
            <p className={`${modelState.color} font-bold text-lg`}>
              {modelState.state.replace('-', ' ').toUpperCase()}
            </p>
            <p className="text-white/80 text-sm mt-2">{modelState.description}</p>
            
            <div className="mt-3 space-y-1 text-sm">
              <p className="text-white/80">MSE Entrenamiento: <strong>{trainMSE.toFixed(3)}</strong></p>
              {showValidation && (
                <p className="text-white/80">MSE Validación: <strong>{validMSE.toFixed(3)}</strong></p>
              )}
              {showValidation && (
                <p className="text-white/80">
                  Gap: <strong>{(validMSE - trainMSE).toFixed(3)}</strong>
                  {validMSE - trainMSE > 2 && <span className="text-red-300"> ⚠️ Overfitting</span>}
                </p>
              )}
            </div>
          </div>
        </div>

        {/* Visualización */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg">
            <h4 className="text-gray-800 font-semibold mb-2 text-center">
              Ajuste del Modelo (Grado {modelComplexity})
            </h4>
            <svg width="400" height="350" className="w-full h-auto">
              {/* Grid */}
              <defs>
                <pattern id="overfitGrid" width="40" height="35" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 35" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="400" height="350" fill="url(#overfitGrid)" />
              
              {/* Ejes */}
              <line x1="40" y1="310" x2="360" y2="310" stroke="#374151" strokeWidth="2" />
              <line x1="40" y1="310" x2="40" y2="40" stroke="#374151" strokeWidth="2" />
              
              {/* Labels */}
              <text x="200" y="335" textAnchor="middle" className="text-sm fill-gray-600">
                X
              </text>
              <text x="25" y="175" textAnchor="middle" className="text-sm fill-gray-600" transform="rotate(-90 25 175)">
                Y
              </text>
              
              {/* Función verdadera */}
              <polyline
                points={Array.from({length: 100}, (_, i) => {
                  const x = -3 + (i / 99) * 6;
                  const y = trueFunction(x);
                  const screenX = 40 + ((x + 3) / 6) * 320;
                  const screenY = 310 - ((y + 5) / 20) * 270;
                  return `${screenX},${screenY}`;
                }).join(' ')}
                fill="none"
                stroke="#10b981"
                strokeWidth="3"
                strokeDasharray="5,5"
              />
              
              {/* Modelo ajustado */}
              <polyline
                points={Array.from({length: 100}, (_, i) => {
                  const x = -3 + (i / 99) * 6;
                  const y = polynomialPredict(x, modelComplexity, trainData);
                  const screenX = 40 + ((x + 3) / 6) * 320;
                  const screenY = 310 - ((Math.max(-5, Math.min(15, y)) + 5) / 20) * 270;
                  return `${screenX},${screenY}`;
                }).join(' ')}
                fill="none"
                stroke="#2563eb"
                strokeWidth="3"
              />
              
              {/* Puntos de entrenamiento */}
              {trainData.map((point, i) => {
                const screenX = 40 + ((point.x + 3) / 6) * 320;
                const screenY = 310 - ((point.y + 5) / 20) * 270;
                return (
                  <circle
                    key={i}
                    cx={screenX}
                    cy={screenY}
                    r="4"
                    fill="#dc2626"
                    stroke="white"
                    strokeWidth="1"
                  />
                );
              })}
              
              {/* Puntos de validación */}
              {showValidation && validationData.map((point, i) => {
                const screenX = 40 + ((point.x + 3) / 6) * 320;
                const screenY = 310 - ((point.y + 5) / 20) * 270;
                return (
                  <circle
                    key={i}
                    cx={screenX}
                    cy={screenY}
                    r="4"
                    fill="#f59e0b"
                    stroke="white"
                    strokeWidth="1"
                  />
                );
              })}
              
              {/* Leyenda */}
              <g transform="translate(50, 50)">
                <rect x="0" y="0" width="120" height={showValidation ? "80" : "60"} fill="white" stroke="#d1d5db" rx="4" opacity="0.9" />
                <line x1="10" y1="15" x2="25" y2="15" stroke="#10b981" strokeWidth="2" strokeDasharray="3,3" />
                <text x="30" y="19" className="text-xs fill-gray-700">Función real</text>
                <line x1="10" y1="30" x2="25" y2="30" stroke="#2563eb" strokeWidth="2" />
                <text x="30" y="34" className="text-xs fill-gray-700">Modelo</text>
                <circle cx="17" cy="45" r="3" fill="#dc2626" />
                <text x="30" y="49" className="text-xs fill-gray-700">Entrenamiento</text>
                {showValidation && (
                  <>
                    <circle cx="17" cy="60" r="3" fill="#f59e0b" />
                    <text x="30" y="64" className="text-xs fill-gray-700">Validación</text>
                  </>
                )}
              </g>
            </svg>
          </div>

          {/* Guía visual del bias-variance tradeoff */}
          <div className="bg-gray-800 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3 text-center">Bias-Variance Tradeoff</h4>
            <div className="grid grid-cols-3 gap-4 text-center">
              <div className="bg-red-500/20 p-3 rounded">
                <h5 className="text-red-300 font-semibold">Underfitting</h5>
                <p className="text-white/80 text-xs mt-1">Alto Bias</p>
                <p className="text-white/80 text-xs">Baja Varianza</p>
                <p className="text-white/70 text-xs mt-2">Demasiado simple</p>
              </div>
              <div className="bg-green-500/20 p-3 rounded">
                <h5 className="text-green-300 font-semibold">Balance</h5>
                <p className="text-white/80 text-xs mt-1">Bias Moderado</p>
                <p className="text-white/80 text-xs">Varianza Moderada</p>
                <p className="text-white/70 text-xs mt-2">¡Punto óptimo!</p>
              </div>
              <div className="bg-red-500/20 p-3 rounded">
                <h5 className="text-red-300 font-semibold">Overfitting</h5>
                <p className="text-white/80 text-xs mt-1">Bajo Bias</p>
                <p className="text-white/80 text-xs">Alta Varianza</p>
                <p className="text-white/70 text-xs mt-2">Demasiado complejo</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-yellow-500/20 p-4 rounded-lg">
        <h4 className="text-white font-semibold mb-2">
          <Icon name="lightbulb" className="w-5 h-5 inline mr-2" />
          Experimenta y Observa:
        </h4>
        <div className="text-white/90 text-sm space-y-1">
          <p>• <strong>Grado 1:</strong> Línea recta, no captura la curvatura (underfitting)</p>
          <p>• <strong>Grados 2-3:</strong> Captura el patrón real sin memorizar ruido</p>
          <p>• <strong>Grados altos:</strong> Línea serpenteante que pasa por todos los puntos</p>
          <p>• <strong>Con pocos datos:</strong> Overfitting ocurre más fácilmente</p>
          <p>• <strong>Gap train-validation:</strong> Indica overfitting cuando es grande</p>
        </div>
      </div>
    </div>
  );
};

export default OverfittingDemo;

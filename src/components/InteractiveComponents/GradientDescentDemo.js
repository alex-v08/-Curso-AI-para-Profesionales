import React, { useState, useEffect } from 'react';
import Icon from '../Icon';

/**
 * Componente interactivo para demostrar el algoritmo de descenso de gradiente
 */
const GradientDescentDemo = () => {
  const [w0, setW0] = useState(-10); // Intercepto
  const [w1, setW1] = useState(-2);  // Pendiente
  const [learningRate, setLearningRate] = useState(0.01);
  const [iteration, setIteration] = useState(0);
  const [isTraining, setIsTraining] = useState(false);
  const [costHistory, setCostHistory] = useState([]);
  const [showAnimation, setShowAnimation] = useState(false);

  // Datos de ejemplo (precio casa vs tamaño)
  const data = [
    {x: 1, y: 1}, {x: 2, y: 3}, {x: 3, y: 5}, {x: 4, y: 7}, 
    {x: 5, y: 9}, {x: 6, y: 11}, {x: 7, y: 13}, {x: 8, y: 15}
  ];

  // Función para calcular predicciones
  const predict = (x, w0Val = w0, w1Val = w1) => w0Val + w1Val * x;

  // Función de costo (MSE)
  const calculateCost = (w0Val = w0, w1Val = w1) => {
    const predictions = data.map(point => predict(point.x, w0Val, w1Val));
    const errors = data.map((point, i) => point.y - predictions[i]);
    const squaredErrors = errors.map(e => e * e);
    return squaredErrors.reduce((sum, e) => sum + e, 0) / data.length;
  };

  // Calcular gradientes
  const calculateGradients = (w0Val = w0, w1Val = w1) => {
    const m = data.length;
    let dw0 = 0, dw1 = 0;
    
    for (let i = 0; i < data.length; i++) {
      const prediction = predict(data[i].x, w0Val, w1Val);
      const error = prediction - data[i].y;
      dw0 += error;
      dw1 += error * data[i].x;
    }
    
    return {
      dw0: (2 / m) * dw0,
      dw1: (2 / m) * dw1
    };
  };

  // Una iteración de descenso de gradiente
  const performIteration = () => {
    const gradients = calculateGradients();
    const newW0 = w0 - learningRate * gradients.dw0;
    const newW1 = w1 - learningRate * gradients.dw1;
    const cost = calculateCost(newW0, newW1);
    
    setW0(newW0);
    setW1(newW1);
    setIteration(prev => prev + 1);
    setCostHistory(prev => [...prev.slice(-19), cost]); // Mantener últimas 20 iteraciones
  };

  // Entrenar automáticamente
  useEffect(() => {
    let interval;
    if (isTraining) {
      interval = setInterval(() => {
        performIteration();
      }, 100); // Una iteración cada 100ms
    }
    return () => clearInterval(interval);
  }, [isTraining, w0, w1, learningRate]);

  // Reset
  const reset = () => {
    setW0(-10);
    setW1(-2);
    setIteration(0);
    setCostHistory([]);
    setIsTraining(false);
  };

  // Ir a la solución óptima
  const goToOptimal = () => {
    setW0(-1);
    setW1(2);
    setIsTraining(false);
  };

  const currentCost = calculateCost();
  const optimalCost = calculateCost(-1, 2); // Solución conocida

  return (
    <div className="glass-effect p-8 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        <Icon name="chart-line" className="w-6 h-6 inline mr-2" />
        Demo: Descenso de Gradiente en Acción
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controles */}
        <div className="space-y-6">
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Parámetros del Modelo</h4>
            <div className="space-y-3">
              <div>
                <label className="block text-white text-sm mb-1">
                  w₀ (Intercepto): {w0.toFixed(3)}
                </label>
                <input 
                  type="range" 
                  min="-20" 
                  max="20" 
                  step="0.1"
                  value={w0}
                  onChange={(e) => setW0(parseFloat(e.target.value))}
                  className="w-full h-2 bg-blue-300 rounded-lg cursor-pointer"
                  disabled={isTraining}
                />
              </div>
              <div>
                <label className="block text-white text-sm mb-1">
                  w₁ (Pendiente): {w1.toFixed(3)}
                </label>
                <input 
                  type="range" 
                  min="-5" 
                  max="5" 
                  step="0.1"
                  value={w1}
                  onChange={(e) => setW1(parseFloat(e.target.value))}
                  className="w-full h-2 bg-blue-300 rounded-lg cursor-pointer"
                  disabled={isTraining}
                />
              </div>
            </div>
          </div>

          <div className="bg-green-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Hiperparámetros</h4>
            <div>
              <label className="block text-white text-sm mb-1">
                Learning Rate (α): {learningRate}
              </label>
              <input 
                type="range" 
                min="0.001" 
                max="0.1" 
                step="0.001"
                value={learningRate}
                onChange={(e) => setLearningRate(parseFloat(e.target.value))}
                className="w-full h-2 bg-green-300 rounded-lg cursor-pointer"
                disabled={isTraining}
              />
              <div className="flex justify-between text-xs text-white/70 mt-1">
                <span>Lento</span>
                <span>Rápido (¡cuidado!)</span>
              </div>
            </div>
          </div>

          <div className="bg-purple-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Métricas</h4>
            <div className="space-y-2 text-white/90">
              <p>Iteración: <strong>{iteration}</strong></p>
              <p>Costo Actual: <strong>{currentCost.toFixed(4)}</strong></p>
              <p>Costo Óptimo: <strong>{optimalCost.toFixed(4)}</strong></p>
              <p>Error vs Óptimo: <strong>{(currentCost - optimalCost).toFixed(4)}</strong></p>
            </div>
          </div>

          <div className="bg-orange-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Controles</h4>
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setIsTraining(!isTraining)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  isTraining 
                    ? 'bg-red-500 hover:bg-red-600 text-white' 
                    : 'bg-green-500 hover:bg-green-600 text-white'
                }`}
              >
                {isTraining ? 'Pausar' : 'Entrenar'}
              </button>
              <button
                onClick={performIteration}
                disabled={isTraining}
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 disabled:bg-gray-500 text-white rounded-lg font-medium transition-colors"
              >
                1 Paso
              </button>
              <button
                onClick={reset}
                className="px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg font-medium transition-colors"
              >
                Reset
              </button>
              <button
                onClick={goToOptimal}
                className="px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-white rounded-lg font-medium transition-colors"
              >
                Óptimo
              </button>
            </div>
          </div>
        </div>

        {/* Visualización */}
        <div className="space-y-6">
          {/* Gráfico principal */}
          <div className="bg-white p-4 rounded-lg">
            <h4 className="text-gray-800 font-semibold mb-2 text-center">Regresión Lineal</h4>
            <svg width="400" height="300" className="w-full h-auto">
              {/* Grid */}
              <defs>
                <pattern id="gradientGrid" width="40" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
                </pattern>
              </defs>
              <rect width="400" height="300" fill="url(#gradientGrid)" />
              
              {/* Ejes */}
              <line x1="40" y1="260" x2="360" y2="260" stroke="#374151" strokeWidth="2" />
              <line x1="40" y1="260" x2="40" y2="40" stroke="#374151" strokeWidth="2" />
              
              {/* Labels */}
              <text x="200" y="285" textAnchor="middle" className="text-sm fill-gray-600">
                X (Tamaño)
              </text>
              <text x="25" y="150" textAnchor="middle" className="text-sm fill-gray-600" transform="rotate(-90 25 150)">
                Y (Precio)
              </text>
              
              {/* Línea de regresión */}
              <line
                x1={60}
                y1={260 - (predict(1) * 12)}
                x2={320}
                y2={260 - (predict(8) * 12)}
                stroke="#2563eb"
                strokeWidth="3"
              />
              
              {/* Puntos de datos */}
              {data.map((point, i) => {
                const x = 40 + (point.x - 0.5) * 40;
                const y = 260 - point.y * 12;
                const predY = 260 - predict(point.x) * 12;
                
                return (
                  <g key={i}>
                    {/* Línea de error */}
                    <line
                      x1={x}
                      y1={y}
                      x2={x}
                      y2={predY}
                      stroke="#ef4444"
                      strokeWidth="2"
                      strokeDasharray="3,3"
                      opacity="0.7"
                    />
                    {/* Punto real */}
                    <circle
                      cx={x}
                      cy={y}
                      r="6"
                      fill="#dc2626"
                      stroke="white"
                      strokeWidth="2"
                    />
                    {/* Predicción */}
                    <circle
                      cx={x}
                      cy={predY}
                      r="4"
                      fill="#2563eb"
                      opacity="0.8"
                    />
                  </g>
                );
              })}
              
              {/* Ecuación */}
              <text x="50" y="60" className="text-sm fill-gray-700 font-mono">
                y = {w0.toFixed(2)} + {w1.toFixed(2)}x
              </text>
              <text x="50" y="80" className="text-sm fill-gray-700">
                MSE = {currentCost.toFixed(4)}
              </text>
            </svg>
          </div>

          {/* Gráfico de convergencia */}
          <div className="bg-white p-4 rounded-lg">
            <h4 className="text-gray-800 font-semibold mb-2 text-center">Convergencia del Costo</h4>
            <svg width="400" height="200" className="w-full h-auto">
              <rect width="400" height="200" fill="#f9fafb" />
              
              {/* Ejes */}
              <line x1="40" y1="180" x2="360" y2="180" stroke="#374151" strokeWidth="2" />
              <line x1="40" y1="180" x2="40" y2="20" stroke="#374151" strokeWidth="2" />
              
              {/* Labels */}
              <text x="200" y="195" textAnchor="middle" className="text-sm fill-gray-600">
                Iteración
              </text>
              <text x="25" y="100" textAnchor="middle" className="text-sm fill-gray-600" transform="rotate(-90 25 100)">
                Costo (MSE)
              </text>
              
              {/* Línea de convergencia */}
              {costHistory.length > 1 && (
                <polyline
                  points={costHistory.map((cost, i) => {
                    const x = 40 + (i / (costHistory.length - 1)) * 320;
                    const maxCost = Math.max(...costHistory);
                    const y = 180 - (cost / maxCost) * 160;
                    return `${x},${y}`;
                  }).join(' ')}
                  fill="none"
                  stroke="#2563eb"
                  strokeWidth="2"
                />
              )}
              
              {/* Línea óptima */}
              <line
                x1="40"
                y1={180 - (optimalCost / Math.max(...costHistory, optimalCost)) * 160}
                x2="360"
                y2={180 - (optimalCost / Math.max(...costHistory, optimalCost)) * 160}
                stroke="#10b981"
                strokeWidth="2"
                strokeDasharray="5,5"
              />
              
              <text x="50" y="35" className="text-xs fill-green-600">
                Óptimo global
              </text>
            </svg>
          </div>
        </div>
      </div>

      <div className="mt-6 bg-yellow-500/20 p-4 rounded-lg">
        <h4 className="text-white font-semibold mb-2">
          <Icon name="lightbulb" className="w-5 h-5 inline mr-2" />
          Experimenta:
        </h4>
        <div className="text-white/90 text-sm space-y-1">
          <p>• <strong>Learning rate bajo (0.001):</strong> Convergencia lenta pero estable</p>
          <p>• <strong>Learning rate alto (0.1):</strong> Puede "saltar" el mínimo o divergir</p>
          <p>• <strong>Observa la línea roja:</strong> Muestra los residuos (errores)</p>
          <p>• <strong>Gráfico de convergencia:</strong> El costo debe disminuir con las iteraciones</p>
          <p>• <strong>Objetivo:</strong> Llegar a la línea verde punteada (óptimo)</p>
        </div>
      </div>
    </div>
  );
};

export default GradientDescentDemo;

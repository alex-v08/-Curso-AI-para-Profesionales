import React, { useState } from 'react';
import Icon from '../Icon';

/**
 * Componente InteractiveMetricsDemo - Demo interactivo de métricas de evaluación
 */
const InteractiveMetricsDemo = () => {
  const [selectedMetric, setSelectedMetric] = useState('mse');
  
  // Datos de ejemplo con diferentes tipos de errores
  const scenarios = {
    good: {
      name: 'Predicción Buena',
      real: [10, 15, 20, 25, 30, 35, 40],
      predicted: [11, 14, 21, 24, 31, 34, 39],
      color: '#10b981'
    },
    outliers: {
      name: 'Con Valores Atípicos',
      real: [10, 15, 20, 25, 30, 35, 40],
      predicted: [11, 14, 21, 45, 31, 34, 15], // Errores grandes
      color: '#f59e0b'
    },
    systematic: {
      name: 'Error Sistemático',
      real: [10, 15, 20, 25, 30, 35, 40],
      predicted: [15, 20, 25, 30, 35, 40, 45], // Siempre +5
      color: '#ef4444'
    }
  };
  
  const [currentScenario, setCurrentScenario] = useState('good');
  const scenario = scenarios[currentScenario];
  
  // Calcular métricas
  const errors = scenario.real.map((r, i) => r - scenario.predicted[i]);
  const absErrors = errors.map(e => Math.abs(e));
  const squaredErrors = errors.map(e => e * e);
  
  const mse = squaredErrors.reduce((a, b) => a + b, 0) / errors.length;
  const rmse = Math.sqrt(mse);
  const mae = absErrors.reduce((a, b) => a + b, 0) / errors.length;
  const meanReal = scenario.real.reduce((a, b) => a + b, 0) / scenario.real.length;
  const ssTot = scenario.real.reduce((sum, val) => sum + (val - meanReal) ** 2, 0);
  const ssRes = squaredErrors.reduce((a, b) => a + b, 0);
  const r2 = Math.max(0, 1 - (ssRes / ssTot)); // Evitar R² negativos para mejor visualización
  
  const metrics = {
    mse: { value: mse, label: 'MSE', desc: 'Penaliza más los errores grandes' },
    rmse: { value: rmse, label: 'RMSE', desc: 'En las mismas unidades que Y' },
    mae: { value: mae, label: 'MAE', desc: 'Más robusto a outliers' },
    r2: { value: r2, label: 'R²', desc: '% de varianza explicada' }
  };
  
  return (
    <div className="glass-effect p-8 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        <Icon name="calculator" className="w-6 h-6 inline mr-2" />
        Demo Interactivo: Cómo se Calculan las Métricas
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controles y Métricas */}
        <div className="space-y-6">
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Escenario:</h4>
            <div className="space-y-2">
              {Object.entries(scenarios).map(([key, scen]) => (
                <label key={key} className="flex items-center text-white cursor-pointer">
                  <input 
                    type="radio" 
                    name="scenario" 
                    value={key}
                    checked={currentScenario === key}
                    onChange={(e) => setCurrentScenario(e.target.value)}
                    className="mr-3"
                  />
                  <span style={{color: scen.color}}>●</span>
                  <span className="ml-2">{scen.name}</span>
                </label>
              ))}
            </div>
          </div>
          
          <div className="bg-purple-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-3">Métrica a Destacar:</h4>
            <select 
              value={selectedMetric}
              onChange={(e) => setSelectedMetric(e.target.value)}
              className="w-full p-2 bg-white/10 text-white rounded border border-white/20"
            >
              <option value="mse">MSE - Error Cuadrático Medio</option>
              <option value="rmse">RMSE - Raíz del MSE</option>
              <option value="mae">MAE - Error Absoluto Medio</option>
              <option value="r2">R² - Coeficiente Determinación</option>
            </select>
          </div>
          
          <div className="space-y-3">
            {Object.entries(metrics).map(([key, metric]) => {
              const isSelected = key === selectedMetric;
              return (
                <div 
                  key={key} 
                  className={`p-4 rounded-lg transition-all ${
                    isSelected 
                      ? 'bg-yellow-500/30 ring-2 ring-yellow-400' 
                      : 'bg-white/10'
                  }`}
                >
                  <div className="flex justify-between items-start">
                    <div>
                      <h5 className="text-white font-semibold">{metric.label}</h5>
                      <p className="text-white/70 text-sm">{metric.desc}</p>
                    </div>
                    <div className="text-right">
                      <p className="text-white font-bold text-lg">
                        {key === 'r2' ? 
                          `${(metric.value * 100).toFixed(1)}%` : 
                          metric.value.toFixed(2)
                        }
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Visualización */}
        <div className="bg-white p-4 rounded-lg">
          <svg width="400" height="350" className="w-full h-auto">
            {/* Grid */}
            <defs>
              <pattern id="metricsGrid" width="40" height="35" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 35" fill="none" stroke="#f3f4f6" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="400" height="350" fill="url(#metricsGrid)" />
            
            {/* Ejes */}
            <line x1="40" y1="310" x2="360" y2="310" stroke="#374151" strokeWidth="2" />
            <line x1="40" y1="310" x2="40" y2="40" stroke="#374151" strokeWidth="2" />
            
            {/* Labels */}
            <text x="200" y="335" textAnchor="middle" className="text-sm fill-gray-600">
              Valores Reales
            </text>
            <text x="25" y="175" textAnchor="middle" className="text-sm fill-gray-600" transform="rotate(-90 25 175)">
              Predicciones
            </text>
            
            {/* Línea perfecta (y = x) */}
            <line x1="40" y1="310" x2="360" y2="40" stroke="#d1d5db" strokeWidth="2" strokeDasharray="5,5" />
            <text x="300" y="80" className="text-xs fill-gray-500">Línea perfecta</text>
            
            {/* Puntos y errores */}
            {scenario.real.map((realVal, i) => {
              const predVal = scenario.predicted[i];
              const x = 40 + ((realVal - 5) / 40) * 320;
              const y = 310 - ((predVal - 5) / 40) * 270;
              const error = Math.abs(realVal - predVal);
              const errorType = selectedMetric === 'mae' ? error : 
                               selectedMetric === 'mse' ? error * error :
                               selectedMetric === 'rmse' ? Math.sqrt(error * error) : error;
              
              return (
                <g key={i}>
                  {/* Línea de error si está seleccionada la métrica */}
                  {(selectedMetric === 'mse' || selectedMetric === 'mae' || selectedMetric === 'rmse') && (
                    <line
                      x1={x}
                      y1={310 - ((realVal - 5) / 40) * 270}
                      x2={x}
                      y2={y}
                      stroke="#ef4444"
                      strokeWidth="2"
                      opacity="0.6"
                    />
                  )}
                  
                  {/* Punto */}
                  <circle
                    cx={x}
                    cy={y}
                    r={selectedMetric === 'mse' ? Math.min(4 + errorType / 5, 12) : "6"}
                    fill={scenario.color}
                    stroke="white"
                    strokeWidth="2"
                    opacity="0.8"
                  />
                  
                  {/* Valor del error si está destacado */}
                  {selectedMetric !== 'r2' && error > 2 && (
                    <text
                      x={x + 10}
                      y={y - 10}
                      className="text-xs fill-red-600 font-semibold"
                    >
                      {error.toFixed(1)}
                    </text>
                  )}
                </g>
              );
            })}
            
            {/* Info de la métrica seleccionada */}
            <g transform="translate(50, 50)">
              <rect x="0" y="0" width="300" height="40" fill="rgba(0,0,0,0.8)" rx="4" />
              <text x="10" y="15" className="text-xs fill-white font-semibold">
                {metrics[selectedMetric].label}: {selectedMetric === 'r2' ? 
                  `${(metrics[selectedMetric].value * 100).toFixed(1)}%` : 
                  metrics[selectedMetric].value.toFixed(2)
                }
              </text>
              <text x="10" y="30" className="text-xs fill-gray-300">
                {metrics[selectedMetric].desc}
              </text>
            </g>
          </svg>
        </div>
      </div>
      
      <div className="mt-6 bg-green-500/20 p-4 rounded-lg">
        <h4 className="text-white font-semibold mb-2">
          <Icon name="eye" className="w-5 h-5 inline mr-2" />
          Observa:
        </h4>
        <div className="text-white/90 text-sm space-y-1">
          <p>• <strong>MSE:</strong> Penaliza más los errores grandes (círculos más grandes)</p>
          <p>• <strong>MAE:</strong> Trata todos los errores por igual</p>
          <p>• <strong>R²:</strong> Qué tan cerca están los puntos de la línea perfecta</p>
          <p>• Cambia entre escenarios para ver cómo afectan las métricas</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveMetricsDemo;
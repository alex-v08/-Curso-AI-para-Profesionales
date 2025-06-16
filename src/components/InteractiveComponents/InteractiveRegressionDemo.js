import React, { useState } from 'react';
import Icon from '../Icon';

/**
 * Componente InteractiveRegressionDemo - Demo interactivo de regresión lineal
 */
const InteractiveRegressionDemo = () => {
  const [beta0, setBeta0] = useState(20);
  const [beta1, setBeta1] = useState(5);
  const [showErrors, setShowErrors] = useState(true);
  
  // Datos de ejemplo (habitaciones vs precio en miles)
  const dataPoints = [
    {x: 2, y: 25}, {x: 2.5, y: 28}, {x: 3, y: 35}, {x: 3.2, y: 32},
    {x: 3.5, y: 38}, {x: 4, y: 45}, {x: 4.2, y: 42}, {x: 4.5, y: 48},
    {x: 5, y: 55}, {x: 5.5, y: 58}
  ];
  
  // Calcular predicciones y errores
  const predictions = dataPoints.map(point => ({
    ...point,
    predicted: beta0 + beta1 * point.x,
    error: point.y - (beta0 + beta1 * point.x)
  }));
  
  // Calcular MSE
  const mse = predictions.reduce((sum, p) => sum + p.error ** 2, 0) / predictions.length;
  
  // Puntos para dibujar la línea
  const linePoints = [
    {x: 1.5, y: beta0 + beta1 * 1.5},
    {x: 6, y: beta0 + beta1 * 6}
  ];
  
  // Escala para el SVG (400x300 pixels)
  const scaleX = (x) => ((x - 1.5) / 4.5) * 350 + 25;
  const scaleY = (y) => 275 - ((y - 15) / 50) * 250;
  
  return (
    <div className="glass-effect p-8 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        <Icon name="sliders-h" className="w-6 h-6 inline mr-2" />
        Demo Interactivo: Encuentra la Mejor Línea
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controles */}
        <div className="space-y-6">
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <label className="block text-white font-semibold mb-3">
              β₀ (Intercepto): {beta0.toFixed(1)}
            </label>
            <input 
              type="range" 
              min="0" 
              max="40" 
              step="0.5"
              value={beta0}
              onChange={(e) => setBeta0(parseFloat(e.target.value))}
              className="w-full h-2 bg-blue-300 rounded-lg appearance-none cursor-pointer interactive-slider"
            />
            <p className="text-white/70 text-sm mt-2">Precio base (cuando habitaciones = 0)</p>
          </div>
          
          <div className="bg-green-500/20 p-4 rounded-lg">
            <label className="block text-white font-semibold mb-3">
              β₁ (Pendiente): {beta1.toFixed(1)}
            </label>
            <input 
              type="range" 
              min="-5" 
              max="15" 
              step="0.5"
              value={beta1}
              onChange={(e) => setBeta1(parseFloat(e.target.value))}
              className="w-full h-2 bg-green-300 rounded-lg appearance-none cursor-pointer interactive-slider"
            />
            <p className="text-white/70 text-sm mt-2">Precio adicional por habitación</p>
          </div>
          
          <div className="bg-purple-500/20 p-4 rounded-lg">
            <label className="flex items-center text-white font-semibold cursor-pointer">
              <input 
                type="checkbox" 
                checked={showErrors}
                onChange={(e) => setShowErrors(e.target.checked)}
                className="mr-3 w-4 h-4"
              />
              Mostrar líneas de error
            </label>
          </div>
          
          <div className="bg-orange-500/20 p-4 rounded-lg">
            <h4 className="text-white font-semibold mb-2">Métricas Actuales</h4>
            <p className="text-white/80">MSE: <strong>{mse.toFixed(2)}</strong></p>
            <p className="text-white/80">RMSE: <strong>{Math.sqrt(mse).toFixed(2)}</strong></p>
            <p className="text-white/70 text-sm mt-2">
              Ecuación: y = {beta0.toFixed(1)} + {beta1.toFixed(1)}x
            </p>
          </div>
        </div>
        
        {/* Gráfico */}
        <div className="bg-white p-4 rounded-lg">
          <svg width="400" height="300" className="w-full h-auto">
            {/* Grid */}
            <defs>
              <pattern id="grid" width="40" height="30" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 30" fill="none" stroke="#e5e7eb" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="400" height="300" fill="url(#grid)" />
            
            {/* Ejes */}
            <line x1="25" y1="275" x2="375" y2="275" stroke="#374151" strokeWidth="2" />
            <line x1="25" y1="275" x2="25" y2="25" stroke="#374151" strokeWidth="2" />
            
            {/* Labels de ejes */}
            <text x="200" y="295" textAnchor="middle" className="text-sm fill-gray-600">
              Habitaciones
            </text>
            <text x="15" y="150" textAnchor="middle" className="text-sm fill-gray-600" transform="rotate(-90 15 150)">
              Precio (k$)
            </text>
            
            {/* Líneas de error */}
            {showErrors && predictions.map((p, i) => (
              <line
                key={i}
                x1={scaleX(p.x)}
                y1={scaleY(p.y)}
                x2={scaleX(p.x)}
                y2={scaleY(p.predicted)}
                stroke="#ef4444"
                strokeWidth="1"
                strokeDasharray="3,3"
                opacity="0.7"
              />
            ))}
            
            {/* Línea de regresión */}
            <line
              x1={scaleX(linePoints[0].x)}
              y1={scaleY(linePoints[0].y)}
              x2={scaleX(linePoints[1].x)}
              y2={scaleY(linePoints[1].y)}
              stroke="#2563eb"
              strokeWidth="3"
            />
            
            {/* Puntos de datos */}
            {predictions.map((p, i) => (
              <g key={i}>
                <circle
                  cx={scaleX(p.x)}
                  cy={scaleY(p.y)}
                  r="6"
                  fill="#dc2626"
                  stroke="white"
                  strokeWidth="2"
                />
                {/* Predicciones */}
                <circle
                  cx={scaleX(p.x)}
                  cy={scaleY(p.predicted)}
                  r="4"
                  fill="#2563eb"
                  opacity="0.8"
                />
              </g>
            ))}
            
            {/* Leyenda */}
            <g transform="translate(280, 40)">
              <rect x="0" y="0" width="110" height="60" fill="white" stroke="#d1d5db" rx="4" />
              <circle cx="10" cy="15" r="4" fill="#dc2626" />
              <text x="20" y="19" className="text-xs fill-gray-700">Datos reales</text>
              <circle cx="10" cy="30" r="3" fill="#2563eb" />
              <text x="20" y="34" className="text-xs fill-gray-700">Predicciones</text>
              <line x1="5" y1="45" x2="15" y2="45" stroke="#2563eb" strokeWidth="2" />
              <text x="20" y="49" className="text-xs fill-gray-700">Regresión</text>
            </g>
          </svg>
        </div>
      </div>
      
      <div className="mt-6 bg-yellow-500/20 p-4 rounded-lg">
        <h4 className="text-white font-semibold mb-2">
          <Icon name="lightbulb" className="w-5 h-5 inline mr-2" />
          Experimenta:
        </h4>
        <div className="text-white/90 text-sm space-y-1">
          <p>• Ajusta β₀ y β₁ para minimizar el MSE</p>
          <p>• Observa cómo cambian las líneas de error rojas</p>
          <p>• La mejor línea minimiza la suma de errores al cuadrado</p>
          <p>• Valores óptimos aproximados: β₀ ≈ 10, β₁ ≈ 8</p>
        </div>
      </div>
    </div>
  );
};

export default InteractiveRegressionDemo;
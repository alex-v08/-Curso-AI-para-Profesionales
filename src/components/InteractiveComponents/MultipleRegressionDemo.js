import React, { useState } from 'react';
import Icon from '../Icon';

/**
 * Componente MultipleRegressionDemo - Demo interactivo de regresión múltiple
 */
const MultipleRegressionDemo = () => {
  const [habitaciones, setHabitaciones] = useState(3);
  const [seguridad, setSeguridad] = useState(5);
  const [cercania, setCercania] = useState(7);
  const [antiguedad, setAntiguedad] = useState(5);
  
  // Coeficientes del modelo (simulados)
  const coeficientes = {
    intercepto: 20,
    habitaciones: 8,
    seguridad: 3,
    cercania: 2,
    antiguedad: -1.5
  };
  
  // Calcular predicción
  const prediccion = coeficientes.intercepto + 
                    coeficientes.habitaciones * habitaciones +
                    coeficientes.seguridad * seguridad +
                    coeficientes.cercania * cercania +
                    coeficientes.antiguedad * antiguedad;
  
  const contribuciones = [
    { nombre: 'Base', valor: coeficientes.intercepto, color: '#6b7280' },
    { nombre: 'Habitaciones', valor: coeficientes.habitaciones * habitaciones, color: '#3b82f6' },
    { nombre: 'Seguridad', valor: coeficientes.seguridad * seguridad, color: '#10b981' },
    { nombre: 'Cercanía', valor: coeficientes.cercania * cercania, color: '#f59e0b' },
    { nombre: 'Antigüedad', valor: coeficientes.antiguedad * antiguedad, color: '#ef4444' }
  ];
  
  return (
    <div className="glass-effect p-8 rounded-xl">
      <h3 className="text-xl font-bold text-white mb-6 text-center">
        <Icon name="home" className="w-6 h-6 inline mr-2" />
        Demo: Múltiples Factores Afectan el Precio
      </h3>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Controles */}
        <div className="space-y-6">
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <label className="block text-white font-semibold mb-3">
              Habitaciones: {habitaciones}
            </label>
            <input 
              type="range" 
              min="1" 
              max="6" 
              step="0.5"
              value={habitaciones}
              onChange={(e) => setHabitaciones(parseFloat(e.target.value))}
              className="w-full h-2 bg-blue-300 rounded-lg cursor-pointer interactive-slider"
            />
            <p className="text-white/70 text-sm mt-1">Contribución: +${(coeficientes.habitaciones * habitaciones).toFixed(1)}k</p>
          </div>
          
          <div className="bg-green-500/20 p-4 rounded-lg">
            <label className="block text-white font-semibold mb-3">
              Seguridad del barrio (1-10): {seguridad}
            </label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="1"
              value={seguridad}
              onChange={(e) => setSeguridad(parseInt(e.target.value))}
              className="w-full h-2 bg-green-300 rounded-lg cursor-pointer interactive-slider"
            />
            <p className="text-white/70 text-sm mt-1">Contribución: +${(coeficientes.seguridad * seguridad).toFixed(1)}k</p>
          </div>
          
          <div className="bg-yellow-500/20 p-4 rounded-lg">
            <label className="block text-white font-semibold mb-3">
              Cercanía centros (1-10): {cercania}
            </label>
            <input 
              type="range" 
              min="1" 
              max="10" 
              step="1"
              value={cercania}
              onChange={(e) => setCercania(parseInt(e.target.value))}
              className="w-full h-2 bg-yellow-300 rounded-lg cursor-pointer interactive-slider"
            />
            <p className="text-white/70 text-sm mt-1">Contribución: +${(coeficientes.cercania * cercania).toFixed(1)}k</p>
          </div>
          
          <div className="bg-red-500/20 p-4 rounded-lg">
            <label className="block text-white font-semibold mb-3">
              Antigüedad (años): {antiguedad}
            </label>
            <input 
              type="range" 
              min="0" 
              max="20" 
              step="1"
              value={antiguedad}
              onChange={(e) => setAntiguedad(parseInt(e.target.value))}
              className="w-full h-2 bg-red-300 rounded-lg cursor-pointer interactive-slider"
            />
            <p className="text-white/70 text-sm mt-1">Contribución: ${(coeficientes.antiguedad * antiguedad).toFixed(1)}k</p>
          </div>
        </div>
        
        {/* Visualización */}
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg">
            <h4 className="text-gray-800 font-bold text-lg mb-4 text-center">Contribución por Factor</h4>
            <div className="space-y-3">
              {contribuciones.map((contrib, i) => {
                const ancho = Math.abs(contrib.valor) / Math.max(...contribuciones.map(c => Math.abs(c.valor))) * 100;
                return (
                  <div key={i} className="flex items-center justify-between">
                    <span className="text-gray-700 text-sm w-20">{contrib.nombre}</span>
                    <div className="flex-1 mx-3">
                      <div className="h-6 bg-gray-200 rounded relative">
                        <div 
                          className="h-full rounded transition-all duration-300"
                          style={{
                            backgroundColor: contrib.color,
                            width: `${ancho}%`,
                            marginLeft: contrib.valor < 0 ? `${100-ancho}%` : '0'
                          }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-gray-700 text-sm w-16 text-right">
                      {contrib.valor > 0 ? '+' : ''}{contrib.valor.toFixed(1)}k
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-blue-500 p-6 rounded-lg text-center">
            <h4 className="text-white font-bold text-xl mb-2">Precio Predicho</h4>
            <p className="text-white text-3xl font-bold">${prediccion.toFixed(1)}k</p>
            <p className="text-white/80 text-sm mt-2">
              Ecuación: {coeficientes.intercepto} + {coeficientes.habitaciones}×{habitaciones} + {coeficientes.seguridad}×{seguridad} + {coeficientes.cercania}×{cercania} + ({coeficientes.antiguedad})×{antiguedad}
            </p>
          </div>
          
          <div className="bg-gray-800 p-4 rounded-lg">
            <h5 className="text-white font-semibold mb-2">Representación Vectorial:</h5>
            <div className="text-green-300 font-mono text-sm">
              <p>X = [{habitaciones}, {seguridad}, {cercania}, {antiguedad}]</p>
              <p>W = [{coeficientes.habitaciones}, {coeficientes.seguridad}, {coeficientes.cercania}, {coeficientes.antiguedad}]</p>
              <p>y = {coeficientes.intercepto} + X · W = {prediccion.toFixed(1)}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="mt-6 bg-blue-500/20 p-4 rounded-lg">
        <h4 className="text-white font-semibold mb-2">
          <Icon name="info-circle" className="w-5 h-5 inline mr-2" />
          Observaciones:
        </h4>
        <div className="text-white/90 text-sm space-y-1">
          <p>• Cada factor contribuye de manera <strong>lineal</strong> al precio final</p>
          <p>• La <strong>antigüedad</strong> tiene coeficiente negativo (reduce el precio)</p>
          <p>• El modelo suma todas las contribuciones: <strong>y = w₀ + w₁x₁ + w₂x₂ + ... + wₙxₙ</strong></p>
          <p>• En espacios multidimensionales, esto forma un <strong>hiperplano</strong></p>
        </div>
      </div>
    </div>
  );
};

export default MultipleRegressionDemo;
import React, { useState, useEffect } from 'react';
import Icon from '../Icon';

/**
 * Demo interactivo que muestra diferentes arquitecturas de agentes
 * Permite comparar tipos de agentes y su comportamiento
 */
const AgentArchitectureDemo = () => {
  const [selectedAgent, setSelectedAgent] = useState('reactive');
  const [environmentState, setEnvironmentState] = useState({
    temperature: 22,
    light: 60,
    obstacle: false,
    goal: { x: 80, y: 80 }
  });
  const [agentState, setAgentState] = useState({
    position: { x: 20, y: 20 },
    memory: {},
    action: 'idle',
    path: [], // Rastro del camino recorrido
    actionHistory: [] // Historial de acciones
  });
  const [isRunning, setIsRunning] = useState(true);

  const agentTypes = {
    reactive: {
      name: 'Reactivo Simple',
      color: 'text-green-400',
      description: 'Solo responde a percepción actual',
      rules: {
        'obstacle': 'turn_left',
        'goal_visible': 'move_forward',
        'default': 'explore'
      }
    },
    model_based: {
      name: 'Basado en Modelo',
      color: 'text-blue-400',
      description: 'Mantiene estado interno del mundo',
      memory: ['position_history', 'obstacles_map', 'explored_areas']
    },
    goal_based: {
      name: 'Basado en Objetivos',
      color: 'text-purple-400',
      description: 'Planifica secuencia de acciones',
      goals: ['reach_target', 'avoid_obstacles', 'minimize_path']
    },
    utility_based: {
      name: 'Basado en Utilidad',
      color: 'text-orange-400',
      description: 'Maximiza función de utilidad',
      utility: { speed: 0.4, safety: 0.6 }
    },
    learning: {
      name: 'Que Aprende',
      color: 'text-red-400',
      description: 'Mejora con la experiencia',
      components: ['learner', 'critic', 'problem_generator']
    }
  };

  const moveAgent = (direction) => {
    const newPos = { ...agentState.position };
    const step = 10;
    
    switch(direction) {
      case 'up': newPos.y = Math.max(0, newPos.y - step); break;
      case 'down': newPos.y = Math.min(90, newPos.y + step); break;
      case 'left': newPos.x = Math.max(0, newPos.x - step); break;
      case 'right': newPos.x = Math.min(90, newPos.x + step); break;
    }
    
    return newPos;
  };

  const simulateAgent = () => {
    if (!isRunning) return;
    
    const agent = agentTypes[selectedAgent];
    let newAction = 'idle';
    let newMemory = { ...agentState.memory };
    let newPosition = { ...agentState.position };
    let actionDetails = '';

    switch (selectedAgent) {
      case 'reactive':
        if (environmentState.obstacle && agentState.position.x > 40 && agentState.position.x < 60) {
          newAction = '⏪ Girar (Obstáculo!)';
          newPosition = moveAgent('left');
          actionDetails = 'Evitando obstáculo';
        } else if (Math.abs(agentState.position.x - environmentState.goal.x) < 10) {
          newAction = '🎯 Ir al objetivo';
          newPosition = moveAgent('right');
          actionDetails = 'Objetivo detectado';
        } else {
          newAction = '🔍 Explorar';
          const directions = ['up', 'down', 'left', 'right'];
          newPosition = moveAgent(directions[Math.floor(Math.random() * 4)]);
          actionDetails = 'Movimiento aleatorio';
        }
        break;
        
      case 'model_based':
        newMemory.lastPosition = agentState.position;
        newMemory.obstaclesSeen = newMemory.obstaclesSeen || [];
        newMemory.visitedCells = newMemory.visitedCells || [];
        
        if (environmentState.obstacle && agentState.position.x > 40 && agentState.position.x < 60) {
          newMemory.obstaclesSeen.push({x: 50, y: 50});
          newAction = '🧠 Recordar obstáculo';
          newPosition = moveAgent('up');
          actionDetails = 'Guardando en memoria y evitando';
        } else {
          // Ir a celdas no visitadas
          const unvisited = ['up', 'down', 'left', 'right'].filter(dir => {
            const testPos = moveAgent(dir);
            return !newMemory.visitedCells.some(p => p.x === testPos.x && p.y === testPos.y);
          });
          const direction = unvisited.length > 0 ? unvisited[0] : 'right';
          newPosition = moveAgent(direction);
          newAction = '📍 Explorar sistemático';
          actionDetails = `Visitadas: ${newMemory.visitedCells.length} celdas`;
        }
        newMemory.visitedCells.push(newPosition);
        break;
        
      case 'goal_based':
        const dx = environmentState.goal.x - agentState.position.x;
        const dy = environmentState.goal.y - agentState.position.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 15) {
          newAction = '✅ Objetivo alcanzado!';
          actionDetails = 'Meta lograda';
        } else {
          // Planificar ruta directa al objetivo
          if (Math.abs(dx) > Math.abs(dy)) {
            newPosition = moveAgent(dx > 0 ? 'right' : 'left');
            newAction = '📐 Planificar ruta X';
          } else {
            newPosition = moveAgent(dy > 0 ? 'down' : 'up');
            newAction = '📐 Planificar ruta Y';
          }
          actionDetails = `Distancia: ${Math.round(distance)}`;
        }
        break;
        
      case 'utility_based':
        const obstacleNear = environmentState.obstacle && agentState.position.x > 30 && agentState.position.x < 70;
        const speedUtility = obstacleNear ? 0.2 : 0.8;
        const safetyUtility = obstacleNear ? 0.9 : 0.5;
        const totalUtility = (0.4 * speedUtility) + (0.6 * safetyUtility);
        
        if (obstacleNear) {
          newAction = '🛡️ Movimiento seguro';
          newPosition = moveAgent('up');
          actionDetails = `Utilidad: ${totalUtility.toFixed(2)} (Seguridad alta)`;
        } else {
          newAction = '⚡ Movimiento rápido';
          newPosition = moveAgent('right');
          actionDetails = `Utilidad: ${totalUtility.toFixed(2)} (Velocidad alta)`;
        }
        break;
        
      case 'learning':
        newMemory.performance = newMemory.performance || 0.3;
        newMemory.successMoves = newMemory.successMoves || 0;
        newMemory.totalMoves = newMemory.totalMoves || 0;
        
        // Aprender de la distancia al objetivo
        const goalDist = Math.sqrt(
          Math.pow(environmentState.goal.x - agentState.position.x, 2) +
          Math.pow(environmentState.goal.y - agentState.position.y, 2)
        );
        
        // Movimiento basado en aprendizaje
        if (newMemory.performance > 0.7) {
          // Comportamiento aprendido: ir directo al objetivo
          const gdx = environmentState.goal.x - agentState.position.x;
          const gdy = environmentState.goal.y - agentState.position.y;
          newPosition = moveAgent(Math.abs(gdx) > Math.abs(gdy) ? (gdx > 0 ? 'right' : 'left') : (gdy > 0 ? 'down' : 'up'));
          newAction = '🎓 Comportamiento aprendido';
          actionDetails = `Eficiencia: ${Math.round(newMemory.performance * 100)}%`;
        } else {
          // Exploración aleatoria mientras aprende
          const dirs = ['up', 'down', 'left', 'right'];
          newPosition = moveAgent(dirs[Math.floor(Math.random() * 4)]);
          newAction = '📚 Aprendiendo...';
          actionDetails = `Progreso: ${Math.round(newMemory.performance * 100)}%`;
        }
        
        // Actualizar rendimiento
        const newGoalDist = Math.sqrt(
          Math.pow(environmentState.goal.x - newPosition.x, 2) +
          Math.pow(environmentState.goal.y - newPosition.y, 2)
        );
        
        if (newGoalDist < goalDist) {
          newMemory.successMoves++;
          newMemory.performance = Math.min(1, newMemory.performance + 0.05);
        } else {
          newMemory.performance = Math.max(0, newMemory.performance - 0.02);
        }
        newMemory.totalMoves++;
        break;
    }

    // Actualizar historial
    const newPath = [...agentState.path, newPosition].slice(-20); // Mantener últimas 20 posiciones
    const newHistory = [...agentState.actionHistory, {
      action: newAction,
      details: actionDetails,
      position: newPosition,
      timestamp: Date.now()
    }].slice(-5); // Mantener últimas 5 acciones

    setAgentState(prev => ({
      ...prev,
      position: newPosition,
      memory: newMemory,
      action: newAction,
      path: newPath,
      actionHistory: newHistory
    }));
  };

  useEffect(() => {
    const interval = setInterval(simulateAgent, 1500); // Más rápido para mejor visualización
    return () => clearInterval(interval);
  }, [selectedAgent, environmentState, isRunning]);

  // Reset agent when changing type
  useEffect(() => {
    setAgentState({
      position: { x: 20, y: 20 },
      memory: {},
      action: 'idle',
      path: [],
      actionHistory: []
    });
  }, [selectedAgent]);

  const toggleObstacle = () => {
    setEnvironmentState(prev => ({ ...prev, obstacle: !prev.obstacle }));
  };

  return (
    <div className="chatbot-glass-strong p-8 rounded-xl">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Icon name="robot" className="w-8 h-8 mr-3 text-cyan-400" />
        Simulador de Arquitecturas de Agentes
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Panel de Control */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Tipo de Agente</h4>
            <div className="space-y-2">
              {Object.entries(agentTypes).map(([key, agent]) => (
                <button
                  key={key}
                  onClick={() => setSelectedAgent(key)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedAgent === key 
                      ? 'bg-blue-500/30 border border-blue-400' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className={`font-semibold ${agent.color}`}>
                    {agent.name}
                  </div>
                  <div className="text-white/70 text-sm">
                    {agent.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Entorno</h4>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-white/80">Temperatura</span>
                <input
                  type="range"
                  min="15"
                  max="35"
                  value={environmentState.temperature}
                  onChange={(e) => setEnvironmentState(prev => ({ 
                    ...prev, 
                    temperature: parseInt(e.target.value) 
                  }))}
                  className="w-32"
                />
                <span className="text-white">{environmentState.temperature}°C</span>
              </div>
              
              <div className="flex items-center justify-between">
                <span className="text-white/80">Luz</span>
                <input
                  type="range"
                  min="0"
                  max="100"
                  value={environmentState.light}
                  onChange={(e) => setEnvironmentState(prev => ({ 
                    ...prev, 
                    light: parseInt(e.target.value) 
                  }))}
                  className="w-32"
                />
                <span className="text-white">{environmentState.light}%</span>
              </div>
              
              <button
                onClick={toggleObstacle}
                className={`w-full p-3 rounded-lg transition-all ${
                  environmentState.obstacle 
                    ? 'bg-red-500/30 border border-red-400' 
                    : 'bg-green-500/30 border border-green-400'
                }`}
              >
                <Icon 
                  name={environmentState.obstacle ? "exclamation-triangle" : "check"} 
                  className="w-5 h-5 inline mr-2" 
                />
                {environmentState.obstacle ? 'Obstáculo Presente' : 'Camino Libre'}
              </button>
            </div>
          </div>
        </div>

        {/* Visualización */}
        <div className="space-y-6">
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-4">Estado del Agente</h4>
            
            {/* Visualización mejorada del entorno */}
            <div className="bg-gradient-to-br from-slate-900 to-slate-800 p-4 rounded-lg mb-4 relative h-64 border border-slate-600">
              <div className="absolute inset-0 grid grid-cols-10 grid-rows-10 gap-0.5 p-2">
                {/* Rastro del camino */}
                {agentState.path.map((pos, idx) => (
                  <div
                    key={idx}
                    className={`${agentTypes[selectedAgent].color.replace('text-', 'bg-')} rounded-sm`}
                    style={{
                      gridColumn: Math.floor(pos.x / 10) + 1,
                      gridRow: Math.floor(pos.y / 10) + 1,
                      opacity: 0.2 + (idx / agentState.path.length) * 0.3
                    }}
                  />
                ))}
                
                {/* Agente con animación */}
                <div 
                  className={`${agentTypes[selectedAgent].color.replace('text-', 'bg-')} rounded-full flex items-center justify-center shadow-lg animate-pulse transition-all duration-500`}
                  style={{
                    gridColumn: Math.floor(agentState.position.x / 10) + 1,
                    gridRow: Math.floor(agentState.position.y / 10) + 1
                  }}
                >
                  <Icon name="robot" className="w-5 h-5 text-white" />
                </div>
                
                {/* Objetivo con animación */}
                <div 
                  className="bg-gradient-to-r from-green-400 to-emerald-400 rounded-full flex items-center justify-center shadow-lg animate-bounce"
                  style={{
                    gridColumn: Math.floor(environmentState.goal.x / 10) + 1,
                    gridRow: Math.floor(environmentState.goal.y / 10) + 1
                  }}
                >
                  <Icon name="flag" className="w-5 h-5 text-white" />
                </div>
                
                {/* Obstáculo mejorado */}
                {environmentState.obstacle && (
                  <div 
                    className="bg-gradient-to-r from-red-500 to-red-600 rounded col-span-2 row-span-2 flex items-center justify-center shadow-lg"
                    style={{
                      gridColumn: 5,
                      gridRow: 5
                    }}
                  >
                    <Icon name="exclamation-triangle" className="w-8 h-8 text-white animate-pulse" />
                  </div>
                )}
                
                {/* Indicadores de memoria para modelo basado */}
                {selectedAgent === 'model_based' && agentState.memory.obstaclesSeen?.map((obs, idx) => (
                  <div
                    key={`obs-${idx}`}
                    className="bg-yellow-400/30 rounded border border-yellow-400"
                    style={{
                      gridColumn: Math.floor(obs.x / 10) + 1,
                      gridRow: Math.floor(obs.y / 10) + 1
                    }}
                  />
                ))}
              </div>
            </div>
            
            {/* Panel de Estado Actual */}
            <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg mb-4">
              <div className="text-center mb-2">
                <span className={`font-bold text-xl ${agentTypes[selectedAgent].color}`}>
                  {agentState.action}
                </span>
              </div>
              <div className="text-center text-white/80 text-sm">
                {agentState.actionHistory[agentState.actionHistory.length - 1]?.details || 'Iniciando...'}
              </div>
            </div>
            
            {/* Historial de Acciones */}
            <div className="mb-4">
              <h5 className="font-semibold text-white mb-2">📜 Historial de Acciones</h5>
              <div className="space-y-1 max-h-32 overflow-y-auto">
                {agentState.actionHistory.map((history, idx) => (
                  <div key={idx} className="text-sm bg-white/5 p-2 rounded flex justify-between">
                    <span className={agentTypes[selectedAgent].color}>{history.action}</span>
                    <span className="text-white/60">{history.details}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Controles de simulación */}
            <div className="flex justify-between items-center mb-4">
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`px-4 py-2 rounded-lg transition-all ${
                  isRunning 
                    ? 'bg-red-500/30 border border-red-400 hover:bg-red-500/40' 
                    : 'bg-green-500/30 border border-green-400 hover:bg-green-500/40'
                }`}
              >
                <Icon name={isRunning ? "pause" : "play"} className="w-4 h-4 inline mr-2" />
                {isRunning ? 'Pausar' : 'Continuar'}
              </button>
              
              <button
                onClick={() => setAgentState({
                  position: { x: 20, y: 20 },
                  memory: {},
                  action: 'idle',
                  path: [],
                  actionHistory: []
                })}
                className="px-4 py-2 bg-white/10 hover:bg-white/20 rounded-lg transition-all"
              >
                <Icon name="redo" className="w-4 h-4 inline mr-2" />
                Reiniciar
              </button>
            </div>
            
            {/* Métricas específicas del agente */}
            <div className="space-y-3">
              {selectedAgent === 'model_based' && agentState.memory.visitedCells && (
                <div className="bg-blue-500/20 p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-white/70">📍 Celdas Visitadas:</span>
                    <span className="text-white font-bold">{agentState.memory.visitedCells.length}</span>
                  </div>
                  <div className="flex justify-between mt-1">
                    <span className="text-white/70">🧠 Obstáculos en Memoria:</span>
                    <span className="text-white font-bold">{agentState.memory.obstaclesSeen?.length || 0}</span>
                  </div>
                </div>
              )}
              
              {selectedAgent === 'goal_based' && (
                <div className="bg-purple-500/20 p-3 rounded-lg">
                  <div className="flex justify-between">
                    <span className="text-white/70">📐 Distancia al Objetivo:</span>
                    <span className="text-white font-bold">
                      {Math.round(Math.sqrt(
                        Math.pow(environmentState.goal.x - agentState.position.x, 2) +
                        Math.pow(environmentState.goal.y - agentState.position.y, 2)
                      ))}
                    </span>
                  </div>
                </div>
              )}
              
              {selectedAgent === 'utility_based' && (
                <div className="bg-orange-500/20 p-3 rounded-lg">
                  <div className="text-center text-white/80 text-sm mb-2">Función de Utilidad</div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-center">
                      <div className="text-white/60">Velocidad</div>
                      <div className="text-orange-300 font-bold">40%</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white/60">Seguridad</div>
                      <div className="text-orange-300 font-bold">60%</div>
                    </div>
                  </div>
                </div>
              )}
              
              {selectedAgent === 'learning' && agentState.memory.performance !== undefined && (
                <div className="bg-red-500/20 p-3 rounded-lg">
                  <div className="flex justify-between mb-2">
                    <span className="text-white/70">🎓 Rendimiento:</span>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 bg-white/20 rounded-full h-3">
                        <div 
                          className="bg-gradient-to-r from-red-400 to-green-400 h-3 rounded-full transition-all duration-500"
                          style={{ width: `${agentState.memory.performance * 100}%` }}
                        />
                      </div>
                      <span className="text-white font-bold">
                        {Math.round(agentState.memory.performance * 100)}%
                      </span>
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-2 text-sm">
                    <div className="text-center">
                      <div className="text-white/60">Movimientos Exitosos</div>
                      <div className="text-red-300 font-bold">{agentState.memory.successMoves || 0}</div>
                    </div>
                    <div className="text-center">
                      <div className="text-white/60">Total Movimientos</div>
                      <div className="text-red-300 font-bold">{agentState.memory.totalMoves || 0}</div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Información específica del agente */}
          <div className="bg-black/30 p-4 rounded-xl">
            <h5 className="font-semibold text-white mb-3">Características Específicas</h5>
            <div className="text-sm text-white/80">
              {selectedAgent === 'reactive' && (
                <div>
                  <strong>Reglas de comportamiento:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Si hay obstáculo → Girar izquierda</li>
                    <li>• Si ve objetivo → Avanzar</li>
                    <li>• Por defecto → Explorar</li>
                  </ul>
                </div>
              )}
              
              {selectedAgent === 'model_based' && (
                <div>
                  <strong>Modelo interno:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Mapa de obstáculos</li>
                    <li>• Historial de posiciones</li>
                    <li>• Áreas exploradas</li>
                  </ul>
                </div>
              )}
              
              {selectedAgent === 'utility_based' && (
                <div>
                  <strong>Función de utilidad:</strong>
                  <ul className="mt-1 space-y-1">
                    <li>• Velocidad: 40% del peso</li>
                    <li>• Seguridad: 60% del peso</li>
                    <li>• Decisión = max(utilidad)</li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Panel de Comparación Didáctica */}
      <div className="mt-6 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
          <Icon name="graduation-cap" className="w-6 h-6 mr-2 text-cyan-400" />
          Guía Didáctica para el Profesor
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div className="bg-white/10 p-4 rounded-lg">
            <h5 className="font-semibold text-cyan-300 mb-2">🎯 Diferencias Clave a Observar:</h5>
            <ul className="space-y-1 text-white/80">
              <li>• <strong>Reactivo:</strong> Movimientos erráticos, sin memoria</li>
              <li>• <strong>Modelo:</strong> Explora sistemáticamente, recuerda obstáculos</li>
              <li>• <strong>Objetivos:</strong> Va directo a la meta (bandera)</li>
              <li>• <strong>Utilidad:</strong> Cambia estrategia con obstáculos</li>
              <li>• <strong>Aprendizaje:</strong> Mejora con el tiempo (ver barra)</li>
            </ul>
          </div>
          
          <div className="bg-white/10 p-4 rounded-lg">
            <h5 className="font-semibold text-purple-300 mb-2">🔬 Experimentos Sugeridos:</h5>
            <ol className="space-y-1 text-white/80">
              <li>1. Activa el obstáculo y compara reacciones</li>
              <li>2. Observa el rastro de color de cada agente</li>
              <li>3. Mira el historial de acciones (diferente lógica)</li>
              <li>4. Deja correr al agente que aprende 2 minutos</li>
              <li>5. Pausa y analiza las métricas específicas</li>
            </ol>
          </div>
        </div>
        
        <div className="mt-4 p-3 bg-yellow-500/20 rounded-lg">
          <p className="text-white/90 text-sm">
            <Icon name="lightbulb" className="w-4 h-4 inline mr-2 text-yellow-400" />
            <strong>Tip:</strong> El rastro de color muestra el comportamiento: aleatorio (reactivo) vs 
            sistemático (modelo) vs directo (objetivos). ¡Es la forma más visual de ver las diferencias!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgentArchitectureDemo;
import React, { useState, useEffect, useRef } from 'react';
import Icon from '../Icon';

/**
 * Demo interactivo de sistemas multiagente
 * Simula un enjambre de agentes cooperando para una tarea
 */
const MultiAgentSwarmDemo = () => {
  const canvasRef = useRef(null);
  const [isRunning, setIsRunning] = useState(false);
  const [scenario, setScenario] = useState('exploration');
  const [agentCount, setAgentCount] = useState(8);
  const [agents, setAgents] = useState([]);
  const [metrics, setMetrics] = useState({
    coverage: 0,
    efficiency: 0,
    cooperation: 0
  });

  const scenarios = {
    exploration: {
      name: 'Exploración Coordinada',
      description: 'Agentes exploran área desconocida sin superposición',
      color: '#3B82F6',
      icon: 'search'
    },
    rescue: {
      name: 'Búsqueda y Rescate',
      description: 'Localizar objetivos distribuidos en el espacio',
      color: '#EF4444',
      icon: 'life-ring'
    },
    formation: {
      name: 'Formación Coordinada',
      description: 'Mantener formación mientras se mueven',
      color: '#10B981',
      icon: 'users'
    },
    resource: {
      name: 'Recolección de Recursos',
      description: 'Optimizar recolección y distribución',
      color: '#F59E0B',
      icon: 'boxes'
    }
  };

  // Inicializar agentes
  useEffect(() => {
    const newAgents = Array.from({ length: agentCount }, (_, i) => ({
      id: i,
      x: Math.random() * 400 + 50,
      y: Math.random() * 300 + 50,
      vx: (Math.random() - 0.5) * 2,
      vy: (Math.random() - 0.5) * 2,
      role: i < agentCount / 2 ? 'explorer' : 'collector',
      target: null,
      visited: [],
      energy: 100,
      payload: 0,
      state: 'searching'
    }));
    setAgents(newAgents);
  }, [agentCount]);

  // Lógica de simulación
  const updateSimulation = () => {
    setAgents(prevAgents => {
      const newAgents = prevAgents.map(agent => {
        let newAgent = { ...agent };
        
        switch (scenario) {
          case 'exploration':
            // Comportamiento de exploración
            if (!newAgent.target) {
              // Buscar área no explorada
              const unexplored = findUnexploredArea(newAgent, prevAgents);
              if (unexplored) {
                newAgent.target = unexplored;
                newAgent.state = 'moving';
              }
            } else {
              // Moverse hacia el objetivo
              moveTowards(newAgent, newAgent.target);
              if (distance(newAgent, newAgent.target) < 20) {
                newAgent.visited.push({ ...newAgent.target });
                newAgent.target = null;
                newAgent.state = 'searching';
              }
            }
            break;
            
          case 'rescue':
            // Comportamiento de rescate
            if (newAgent.state === 'searching') {
              const target = findNearestTarget(newAgent, prevAgents);
              if (target) {
                newAgent.target = target;
                newAgent.state = 'rescuing';
              } else {
                // Explorar aleatoriamente
                randomWalk(newAgent);
              }
            } else if (newAgent.state === 'rescuing') {
              moveTowards(newAgent, newAgent.target);
              if (distance(newAgent, newAgent.target) < 15) {
                newAgent.state = 'returning';
                newAgent.target = { x: 50, y: 50 }; // Base
                newAgent.payload++;
              }
            } else if (newAgent.state === 'returning') {
              moveTowards(newAgent, newAgent.target);
              if (distance(newAgent, newAgent.target) < 20) {
                newAgent.state = 'searching';
                newAgent.target = null;
              }
            }
            break;
            
          case 'formation':
            // Mantener formación
            const formationPos = calculateFormationPosition(newAgent.id, agentCount);
            const center = calculateSwarmCenter(prevAgents);
            const targetPos = {
              x: center.x + formationPos.x,
              y: center.y + formationPos.y
            };
            moveTowards(newAgent, targetPos);
            break;
            
          case 'resource':
            // Recolección de recursos
            if (newAgent.role === 'explorer' && newAgent.payload === 0) {
              const resource = findNearestResource(newAgent);
              if (resource) {
                moveTowards(newAgent, resource);
                if (distance(newAgent, resource) < 15) {
                  newAgent.payload = 1;
                  newAgent.state = 'carrying';
                }
              }
            } else if (newAgent.payload > 0) {
              // Buscar collector cercano
              const collector = findNearestCollector(newAgent, prevAgents);
              if (collector) {
                moveTowards(newAgent, collector);
                if (distance(newAgent, collector) < 20) {
                  newAgent.payload = 0;
                  newAgent.state = 'searching';
                }
              }
            }
            break;
        }
        
        // Aplicar límites del canvas
        newAgent.x = Math.max(10, Math.min(490, newAgent.x));
        newAgent.y = Math.max(10, Math.min(390, newAgent.y));
        
        return newAgent;
      });
      
      // Calcular métricas
      updateMetrics(newAgents);
      
      return newAgents;
    });
  };

  // Funciones auxiliares
  const findUnexploredArea = (agent, allAgents) => {
    // Buscar área que no haya sido visitada por ningún agente
    for (let attempts = 0; attempts < 10; attempts++) {
      const candidate = {
        x: Math.random() * 400 + 50,
        y: Math.random() * 300 + 50
      };
      
      const isExplored = allAgents.some(a => 
        a.visited.some(v => distance(v, candidate) < 30)
      );
      
      if (!isExplored) return candidate;
    }
    return null;
  };

  const findNearestTarget = (agent, allAgents) => {
    // Simular objetivos de rescate
    const targets = [
      { x: 150, y: 100 }, { x: 350, y: 200 }, { x: 200, y: 300 }
    ];
    
    let nearest = null;
    let minDist = Infinity;
    
    targets.forEach(target => {
      const dist = distance(agent, target);
      if (dist < minDist) {
        minDist = dist;
        nearest = target;
      }
    });
    
    return minDist < 100 ? nearest : null;
  };

  const calculateFormationPosition = (id, total) => {
    const angle = (id / total) * 2 * Math.PI;
    const radius = 50;
    return {
      x: Math.cos(angle) * radius,
      y: Math.sin(angle) * radius
    };
  };

  const calculateSwarmCenter = (agents) => {
    const center = agents.reduce(
      (acc, agent) => ({ x: acc.x + agent.x, y: acc.y + agent.y }),
      { x: 0, y: 0 }
    );
    return {
      x: center.x / agents.length,
      y: center.y / agents.length
    };
  };

  const moveTowards = (agent, target) => {
    const dx = target.x - agent.x;
    const dy = target.y - agent.y;
    const dist = Math.sqrt(dx * dx + dy * dy);
    
    if (dist > 0) {
      const speed = 2;
      agent.x += (dx / dist) * speed;
      agent.y += (dy / dist) * speed;
    }
  };

  const randomWalk = (agent) => {
    agent.x += (Math.random() - 0.5) * 4;
    agent.y += (Math.random() - 0.5) * 4;
  };

  const distance = (a, b) => {
    return Math.sqrt((a.x - b.x) ** 2 + (a.y - b.y) ** 2);
  };

  const findNearestResource = (agent) => {
    // Simular recursos
    const resources = [
      { x: 100, y: 150 }, { x: 400, y: 100 }, { x: 300, y: 350 }
    ];
    return resources[Math.floor(Math.random() * resources.length)];
  };

  const findNearestCollector = (agent, allAgents) => {
    return allAgents.find(a => a.role === 'collector' && a !== agent);
  };

  const updateMetrics = (agents) => {
    const totalArea = 500 * 400;
    const exploredArea = agents.reduce((sum, agent) => sum + agent.visited.length * 900, 0);
    const coverage = Math.min(exploredArea / totalArea, 1);
    
    const avgDistance = agents.reduce((sum, agent, i) => {
      const others = agents.filter((_, j) => j !== i);
      const nearestDist = Math.min(...others.map(other => distance(agent, other)));
      return sum + nearestDist;
    }, 0) / agents.length;
    
    const efficiency = Math.max(0, 1 - avgDistance / 200);
    const cooperation = agents.filter(a => a.state === 'carrying' || a.payload > 0).length / agents.length;
    
    setMetrics({ coverage, efficiency, cooperation });
  };

  // Loop de animación
  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(updateSimulation, 100);
    }
    return () => clearInterval(interval);
  }, [isRunning, scenario, agents.length]);

  // Renderizado en canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    
    // Fondo
    ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // Dibujar trayectorias
    agents.forEach(agent => {
      if (agent.visited.length > 1) {
        ctx.strokeStyle = 'rgba(59, 130, 246, 0.3)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        agent.visited.forEach((pos, i) => {
          if (i === 0) ctx.moveTo(pos.x, pos.y);
          else ctx.lineTo(pos.x, pos.y);
        });
        ctx.stroke();
      }
    });
    
    // Dibujar agentes
    agents.forEach(agent => {
      ctx.save();
      ctx.translate(agent.x, agent.y);
      
      // Color según estado y rol
      let color = scenarios[scenario].color;
      if (agent.state === 'carrying' || agent.payload > 0) {
        color = '#F59E0B';
      } else if (agent.state === 'rescuing') {
        color = '#EF4444';
      }
      
      // Círculo del agente
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(0, 0, agent.role === 'explorer' ? 6 : 8, 0, 2 * Math.PI);
      ctx.fill();
      
      // Dirección
      if (agent.target) {
        const dx = agent.target.x - agent.x;
        const dy = agent.target.y - agent.y;
        const angle = Math.atan2(dy, dx);
        
        ctx.strokeStyle = color;
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(0, 0);
        ctx.lineTo(Math.cos(angle) * 15, Math.sin(angle) * 15);
        ctx.stroke();
      }
      
      ctx.restore();
    });
    
    // Dibujar objetivos según escenario
    if (scenario === 'rescue') {
      const targets = [
        { x: 150, y: 100 }, { x: 350, y: 200 }, { x: 200, y: 300 }
      ];
      targets.forEach(target => {
        ctx.fillStyle = '#EF4444';
        ctx.fillRect(target.x - 5, target.y - 5, 10, 10);
      });
    }
    
  }, [agents, scenario]);

  return (
    <div className="chatbot-glass-strong p-8 rounded-xl">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Icon name="users" className="w-8 h-8 mr-3 text-purple-400" />
        Simulador de Sistemas Multiagente
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Controles */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Escenario</h4>
            <div className="space-y-2">
              {Object.entries(scenarios).map(([key, scenario]) => (
                <button
                  key={key}
                  onClick={() => setScenario(key)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    scenario === key 
                      ? 'bg-purple-500/30 border border-purple-400' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                  style={{ borderColor: scenario === key ? scenario.color : 'transparent' }}
                >
                  <div className="flex items-center mb-1">
                    <Icon name={scenario.icon} className="w-5 h-5 mr-2" style={{ color: scenario.color }} />
                    <span className="font-semibold text-white">{scenario.name}</span>
                  </div>
                  <div className="text-white/70 text-sm">
                    {scenario.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Configuración</h4>
            <div className="space-y-4">
              <div>
                <label className="block text-white/80 mb-2">
                  Número de Agentes: {agentCount}
                </label>
                <input
                  type="range"
                  min="4"
                  max="16"
                  value={agentCount}
                  onChange={(e) => setAgentCount(parseInt(e.target.value))}
                  className="w-full"
                />
              </div>
              
              <button
                onClick={() => setIsRunning(!isRunning)}
                className={`w-full p-3 rounded-lg font-semibold transition-all ${
                  isRunning 
                    ? 'bg-red-500/30 border border-red-400 text-red-300' 
                    : 'bg-green-500/30 border border-green-400 text-green-300'
                }`}
              >
                <Icon 
                  name={isRunning ? "pause" : "play"} 
                  className="w-5 h-5 inline mr-2" 
                />
                {isRunning ? 'Pausar' : 'Iniciar'} Simulación
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Métricas</h4>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white/70">Cobertura</span>
                  <span className="text-white">{Math.round(metrics.coverage * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-blue-400 h-2 rounded-full transition-all"
                    style={{ width: `${metrics.coverage * 100}%` }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white/70">Eficiencia</span>
                  <span className="text-white">{Math.round(metrics.efficiency * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-green-400 h-2 rounded-full transition-all"
                    style={{ width: `${metrics.efficiency * 100}%` }}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-white/70">Cooperación</span>
                  <span className="text-white">{Math.round(metrics.cooperation * 100)}%</span>
                </div>
                <div className="w-full bg-white/20 rounded-full h-2">
                  <div 
                    className="bg-purple-400 h-2 rounded-full transition-all"
                    style={{ width: `${metrics.cooperation * 100}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Visualización */}
        <div className="lg:col-span-2">
          <div className="bg-black/30 p-4 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-4">Entorno de Simulación</h4>
            <canvas
              ref={canvasRef}
              width={500}
              height={400}
              className="border border-white/20 rounded-lg bg-white/5"
            />
            
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div className="bg-white/10 p-3 rounded">
                <div className="flex items-center mb-2">
                  <div className="w-3 h-3 rounded-full bg-blue-400 mr-2" />
                  <span className="text-white/80">Exploradores</span>
                </div>
                <p className="text-white/60 text-xs">Buscan áreas no exploradas</p>
              </div>
              
              <div className="bg-white/10 p-3 rounded">
                <div className="flex items-center mb-2">
                  <div className="w-4 h-4 rounded-full bg-purple-400 mr-2" />
                  <span className="text-white/80">Recolectores</span>
                </div>
                <p className="text-white/60 text-xs">Procesan información</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-lg">
        <p className="text-white/80 text-sm">
          <Icon name="info" className="w-4 h-4 inline mr-2 text-purple-400" />
          <strong>Observa</strong> cómo los agentes se coordinan sin control centralizado. 
          Cada uno sigue reglas simples, pero emergen comportamientos complejos del grupo.
        </p>
      </div>
    </div>
  );
};

export default MultiAgentSwarmDemo;
import React, { useState, useCallback } from 'react';
import Icon from '../Icon';

const N8nFlowBuilder = () => {
  const [nodes, setNodes] = useState([]);
  const [connections, setConnections] = useState([]);
  const [selectedNodeType, setSelectedNodeType] = useState(null);
  const [draggedNode, setDraggedNode] = useState(null);
  const [workflowStatus, setWorkflowStatus] = useState('design'); // design, testing, running

  const availableNodes = {
    triggers: [
      { id: 'gmail-trigger', name: 'Gmail Trigger', icon: 'envelope', color: 'bg-red-500', description: 'Detecta emails nuevos' },
      { id: 'schedule', name: 'Schedule', icon: 'clock', color: 'bg-blue-500', description: 'Timer/Cron jobs' },
      { id: 'webhook', name: 'Webhook', icon: 'plug', color: 'bg-green-500', description: 'Recibe datos HTTP' },
      { id: 'form-trigger', name: 'Google Forms', icon: 'clipboard-list', color: 'bg-purple-500', description: 'Formulario enviado' }
    ],
    actions: [
      { id: 'gmail-send', name: 'Gmail Send', icon: 'paper-plane', color: 'bg-red-500', description: 'Enviar email' },
      { id: 'sheets', name: 'Google Sheets', icon: 'table', color: 'bg-green-500', description: 'Leer/escribir datos' },
      { id: 'whatsapp', name: 'WhatsApp', icon: 'comments', color: 'bg-green-600', description: 'Enviar mensaje' },
      { id: 'openai', name: 'OpenAI', icon: 'robot', color: 'bg-purple-500', description: 'Procesar con IA' }
    ],
    core: [
      { id: 'if', name: 'IF', icon: 'question', color: 'bg-yellow-500', description: 'Lógica condicional' },
      { id: 'set', name: 'Set', icon: 'edit', color: 'bg-blue-500', description: 'Modificar datos' },
      { id: 'function', name: 'Function', icon: 'code', color: 'bg-orange-500', description: 'JavaScript' }
    ]
  };

  const workflowTemplates = {
    'email-auto': {
      name: 'Email Automático',
      description: 'Responder emails y guardar en Sheets',
      nodes: [
        { id: 'trigger-1', type: 'gmail-trigger', x: 50, y: 150 },
        { id: 'condition-1', type: 'if', x: 250, y: 150 },
        { id: 'action-1', type: 'gmail-send', x: 450, y: 100 },
        { id: 'action-2', type: 'sheets', x: 450, y: 200 }
      ],
      connections: [
        { from: 'trigger-1', to: 'condition-1' },
        { from: 'condition-1', to: 'action-1', type: 'true' },
        { from: 'condition-1', to: 'action-2', type: 'true' }
      ]
    },
    'whatsapp-bot': {
      name: 'WhatsApp Bot IA',
      description: 'Bot inteligente con ChatGPT',
      nodes: [
        { id: 'trigger-1', type: 'webhook', x: 50, y: 150 },
        { id: 'ai-1', type: 'openai', x: 250, y: 150 },
        { id: 'action-1', type: 'whatsapp', x: 450, y: 100 },
        { id: 'action-2', type: 'sheets', x: 450, y: 200 }
      ],
      connections: [
        { from: 'trigger-1', to: 'ai-1' },
        { from: 'ai-1', to: 'action-1' },
        { from: 'ai-1', to: 'action-2' }
      ]
    }
  };

  const getNodeConfig = (nodeType) => {
    const allNodes = [...availableNodes.triggers, ...availableNodes.actions, ...availableNodes.core];
    return allNodes.find(node => node.id === nodeType);
  };

  const addNode = useCallback((nodeType, position = null) => {
    if (!nodeType) return;

    const nodeConfig = getNodeConfig(nodeType);
    if (!nodeConfig) return;

    const newNode = {
      id: `${nodeType}-${Date.now()}`,
      type: nodeType,
      x: position?.x || Math.random() * 400 + 100,
      y: position?.y || Math.random() * 200 + 100,
      ...nodeConfig
    };

    setNodes(prev => [...prev, newNode]);
    setSelectedNodeType(null);
  }, []);

  const removeNode = useCallback((nodeId) => {
    setNodes(prev => prev.filter(node => node.id !== nodeId));
    setConnections(prev => prev.filter(conn => conn.from !== nodeId && conn.to !== nodeId));
  }, []);

  const connectNodes = useCallback((fromId, toId) => {
    const newConnection = { from: fromId, to: toId };
    setConnections(prev => [...prev, newConnection]);
  }, []);

  const loadTemplate = useCallback((templateKey) => {
    const template = workflowTemplates[templateKey];
    if (!template) return;

    const templateNodes = template.nodes.map(node => ({
      id: node.id,
      type: node.type,
      x: node.x,
      y: node.y,
      ...getNodeConfig(node.type)
    }));

    setNodes(templateNodes);
    setConnections(template.connections);
    setWorkflowStatus('design');
  }, []);

  const clearWorkflow = useCallback(() => {
    setNodes([]);
    setConnections([]);
    setWorkflowStatus('design');
  }, []);

  const executeWorkflow = useCallback(() => {
    if (nodes.length === 0) return;
    
    setWorkflowStatus('testing');
    
    // Simular ejecución
    setTimeout(() => {
      setWorkflowStatus('running');
      setTimeout(() => {
        setWorkflowStatus('design');
      }, 3000);
    }, 1500);
  }, [nodes]);

  const getStatusColor = () => {
    switch (workflowStatus) {
      case 'testing': return 'text-yellow-400';
      case 'running': return 'text-green-400';
      default: return 'text-white';
    }
  };

  const getStatusIcon = () => {
    switch (workflowStatus) {
      case 'testing': return 'hourglass-half';
      case 'running': return 'check';
      default: return 'play';
    }
  };

  return (
    <div className="chatbot-glass-strong p-6 rounded-xl">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-bold text-white">
            🏗️ Constructor de Workflows n8n
          </h3>
          
          <div className="flex items-center space-x-2">
            <span className={`text-sm ${getStatusColor()}`}>
              <Icon name={getStatusIcon()} className="w-4 h-4 inline mr-1" />
              {workflowStatus === 'design' && 'Diseño'}
              {workflowStatus === 'testing' && 'Probando...'}
              {workflowStatus === 'running' && 'Ejecutando!'}
            </span>
          </div>
        </div>

        {/* Templates y controles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div>
            <h4 className="text-white font-medium mb-2">📋 Templates Rápidos</h4>
            <div className="space-y-2">
              {Object.entries(workflowTemplates).map(([key, template]) => (
                <button
                  key={key}
                  onClick={() => loadTemplate(key)}
                  className="w-full text-left bg-white/10 hover:bg-white/20 p-3 rounded-lg transition-colors"
                >
                  <div className="font-medium text-white text-sm">{template.name}</div>
                  <div className="text-white/70 text-xs">{template.description}</div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-white font-medium mb-2">⚙️ Controles</h4>
            <div className="space-y-2">
              <button
                onClick={executeWorkflow}
                disabled={nodes.length === 0 || workflowStatus !== 'design'}
                className="w-full btn-chatbot-primary disabled:opacity-50"
              >
                <Icon name="play" className="w-4 h-4 mr-2" />
                Ejecutar Workflow
              </button>
              
              <button
                onClick={clearWorkflow}
                className="w-full btn-chatbot-secondary"
              >
                <Icon name="trash" className="w-4 h-4 mr-2" />
                Limpiar Canvas
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Palette de nodos */}
      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">🧩 Paleta de Nodos</h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {Object.entries(availableNodes).map(([category, categoryNodes]) => (
            <div key={category} className="bg-white/10 p-4 rounded-lg">
              <h5 className="text-white font-medium mb-3 capitalize">{category}</h5>
              <div className="grid grid-cols-2 gap-2">
                {categoryNodes.map(node => (
                  <button
                    key={node.id}
                    onClick={() => addNode(node.id)}
                    className="p-2 bg-white/10 hover:bg-white/20 rounded-lg transition-colors text-center"
                    title={node.description}
                  >
                    <div className={`w-8 h-8 ${node.color} rounded-lg flex items-center justify-center mx-auto mb-1`}>
                      <Icon name={node.icon} className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-white text-xs">{node.name}</span>
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Canvas del workflow */}
      <div className="bg-gray-900/50 p-6 rounded-lg border-2 border-dashed border-white/20 min-h-80 relative">
        <div className="absolute top-2 left-2 text-white/50 text-sm">
          Canvas del Workflow ({nodes.length} nodos, {connections.length} conexiones)
        </div>

        {/* Renderizar nodos */}
        {nodes.map(node => (
          <div
            key={node.id}
            className="absolute bg-white/20 rounded-lg p-3 border-2 border-white/30 hover:border-white/50 cursor-move"
            style={{ left: node.x, top: node.y }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className={`w-6 h-6 ${node.color} rounded flex items-center justify-center mr-2`}>
                  <Icon name={node.icon} className="w-3 h-3 text-white" />
                </div>
                <span className="text-white text-sm font-medium">{node.name}</span>
              </div>
              <button
                onClick={() => removeNode(node.id)}
                className="text-red-400 hover:text-red-300 ml-2"
              >
                <Icon name="times" className="w-3 h-3" />
              </button>
            </div>
            
            <div className="text-white/70 text-xs">{node.description}</div>
            
            {/* Indicadores de estado durante ejecución */}
            {workflowStatus === 'testing' && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-yellow-400 rounded-full animate-pulse"></div>
            )}
            {workflowStatus === 'running' && (
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-green-400 rounded-full"></div>
            )}
          </div>
        ))}

        {/* Renderizar conexiones (simplificado) */}
        {connections.map((conn, index) => {
          const fromNode = nodes.find(n => n.id === conn.from);
          const toNode = nodes.find(n => n.id === conn.to);
          
          if (!fromNode || !toNode) return null;

          return (
            <svg
              key={index}
              className="absolute inset-0 pointer-events-none"
              style={{ zIndex: 1 }}
            >
              <line
                x1={fromNode.x + 80}
                y1={fromNode.y + 30}
                x2={toNode.x}
                y2={toNode.y + 30}
                stroke="#60a5fa"
                strokeWidth="2"
                markerEnd="url(#arrowhead)"
              />
              <defs>
                <marker
                  id="arrowhead"
                  markerWidth="10"
                  markerHeight="7"
                  refX="9"
                  refY="3.5"
                  orient="auto"
                >
                  <polygon
                    points="0 0, 10 3.5, 0 7"
                    fill="#60a5fa"
                  />
                </marker>
              </defs>
            </svg>
          );
        })}

        {/* Mensaje cuando no hay nodos */}
        {nodes.length === 0 && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center text-white/50">
              <Icon name="plus" className="w-16 h-16 mx-auto mb-4" />
              <p className="text-lg">Haz clic en los nodos de arriba para agregar</p>
              <p className="text-sm">O usa un template para empezar rápido</p>
            </div>
          </div>
        )}
      </div>

      {/* Información del workflow */}
      {nodes.length > 0 && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-500/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-blue-400">{nodes.length}</div>
            <div className="text-blue-300 text-sm">Nodos Totales</div>
          </div>
          
          <div className="bg-green-500/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-green-400">{connections.length}</div>
            <div className="text-green-300 text-sm">Conexiones</div>
          </div>
          
          <div className="bg-purple-500/20 p-4 rounded-lg">
            <div className="text-2xl font-bold text-purple-400">
              {nodes.filter(n => availableNodes.triggers.some(t => t.id === n.type)).length}
            </div>
            <div className="text-purple-300 text-sm">Triggers</div>
          </div>
        </div>
      )}

      <div className="mt-4 bg-yellow-500/20 p-4 rounded-lg">
        <p className="text-yellow-100 text-sm text-center">
          💡 <strong>Tip:</strong> En n8n real, puedes arrastrar conexiones entre nodos. 
          Esta es una versión simplificada para mostrar el concepto.
        </p>
      </div>
    </div>
  );
};

export default N8nFlowBuilder;
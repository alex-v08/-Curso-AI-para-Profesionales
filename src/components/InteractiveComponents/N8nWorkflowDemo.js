import React, { useState, useEffect } from 'react';
import Icon from '../Icon';

const N8nWorkflowDemo = () => {
  const [executionStep, setExecutionStep] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [executionData, setExecutionData] = useState({
    trigger: null,
    processing: null,
    aiResponse: null,
    sheetsLog: null,
    whatsappSent: null
  });

  const workflowSteps = [
    {
      id: 'trigger',
      name: 'WhatsApp Trigger',
      icon: 'comments',
      color: 'bg-green-500',
      description: 'Nuevo mensaje recibido',
      data: {
        from: '+549123456789',
        message: '¿Cuál es el horario de atención?',
        timestamp: new Date().toLocaleTimeString()
      }
    },
    {
      id: 'processing',
      name: 'Procesar Mensaje',
      icon: 'cogs',
      color: 'bg-blue-500',
      description: 'Extraer y formatear datos',
      data: {
        userPhone: '+549123456789',
        cleanMessage: '¿Cuál es el horario de atención?',
        messageType: 'question',
        intent: 'business_hours'
      }
    },
    {
      id: 'ai',
      name: 'OpenAI (ChatGPT)',
      icon: 'robot',
      color: 'bg-purple-500',
      description: 'Generar respuesta inteligente',
      data: {
        prompt: 'Responde de forma amigable sobre horarios de atención',
        model: 'gpt-3.5-turbo',
        response: 'Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 hs. ¿En qué más puedo ayudarte?',
        tokens: 45
      }
    },
    {
      id: 'sheets',
      name: 'Google Sheets',
      icon: 'table',
      color: 'bg-green-600',
      description: 'Guardar log de conversación',
      data: {
        spreadsheetId: '1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms',
        range: 'Conversaciones!A:D',
        values: [
          ['2024-01-15 14:30', '+549123456789', '¿Cuál es el horario de atención?', 'Nuestro horario de atención es...']
        ]
      }
    },
    {
      id: 'response',
      name: 'WhatsApp Response',
      icon: 'paper-plane',
      color: 'bg-green-500',
      description: 'Enviar respuesta al usuario',
      data: {
        to: '+549123456789',
        message: 'Nuestro horario de atención es de lunes a viernes de 9:00 a 18:00 hs. ¿En qué más puedo ayudarte?',
        messageId: 'msg_' + Math.random().toString(36).substr(2, 9),
        status: 'sent'
      }
    }
  ];

  const executeWorkflow = async () => {
    setIsRunning(true);
    setExecutionStep(0);
    setExecutionData({
      trigger: null,
      processing: null,
      aiResponse: null,
      sheetsLog: null,
      whatsappSent: null
    });

    // Simular ejecución paso a paso
    for (let i = 0; i < workflowSteps.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setExecutionStep(i + 1);
      
      // Actualizar datos de ejecución
      const step = workflowSteps[i];
      setExecutionData(prev => ({
        ...prev,
        [step.id]: step.data
      }));
    }

    setIsRunning(false);
  };

  const resetDemo = () => {
    setExecutionStep(0);
    setIsRunning(false);
    setExecutionData({
      trigger: null,
      processing: null,
      aiResponse: null,
      sheetsLog: null,
      whatsappSent: null
    });
  };

  const getStepStatus = (stepIndex) => {
    if (isRunning && executionStep === stepIndex) return 'running';
    if (executionStep > stepIndex) return 'completed';
    return 'pending';
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'running': return 'border-yellow-400 bg-yellow-500/20';
      case 'completed': return 'border-green-400 bg-green-500/20';
      default: return 'border-white/20 bg-white/10';
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case 'running': return 'spinner';
      case 'completed': return 'check';
      default: return 'circle';
    }
  };

  return (
    <div className="chatbot-glass-strong p-6 rounded-xl">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold text-white mb-2">
          🤖 Demo: WhatsApp Bot con IA
        </h3>
        <p className="text-white/80">
          Simulación de un workflow real de n8n en acción
        </p>
      </div>

      {/* Controles */}
      <div className="flex justify-center space-x-4 mb-8">
        <button
          onClick={executeWorkflow}
          disabled={isRunning}
          className="btn-chatbot-primary disabled:opacity-50"
        >
          <Icon name="play" className="w-4 h-4 mr-2" />
          {isRunning ? 'Ejecutando...' : 'Ejecutar Demo'}
        </button>
        
        <button
          onClick={resetDemo}
          disabled={isRunning}
          className="btn-chatbot-secondary disabled:opacity-50"
        >
          <Icon name="refresh" className="w-4 h-4 mr-2" />
          Reiniciar
        </button>
      </div>

      {/* Workflow visual */}
      <div className="mb-8">
        <div className="flex flex-wrap items-center justify-between">
          {workflowSteps.map((step, index) => {
            const status = getStepStatus(index);
            
            return (
              <React.Fragment key={step.id}>
                <div className={`flex flex-col items-center p-4 rounded-lg border-2 transition-all ${getStatusColor(status)}`}>
                  <div className={`w-12 h-12 ${step.color} rounded-full flex items-center justify-center mb-2 relative`}>
                    <Icon 
                      name={step.icon} 
                      className={`w-6 h-6 text-white ${status === 'running' ? 'animate-pulse' : ''}`} 
                    />
                    
                    {/* Status indicator */}
                    <div className="absolute -top-1 -right-1">
                      <Icon 
                        name={getStatusIcon(status)} 
                        className={`w-4 h-4 ${
                          status === 'running' ? 'text-yellow-400 animate-spin' :
                          status === 'completed' ? 'text-green-400' :
                          'text-white/40'
                        }`} 
                      />
                    </div>
                  </div>
                  
                  <div className="text-center">
                    <h4 className="text-white font-medium text-sm">{step.name}</h4>
                    <p className="text-white/60 text-xs mt-1">{step.description}</p>
                  </div>
                </div>
                
                {/* Conectores */}
                {index < workflowSteps.length - 1 && (
                  <div className="hidden md:flex items-center">
                    <Icon 
                      name="arrow-right" 
                      className={`w-6 h-6 ${
                        executionStep > index ? 'text-green-400' : 'text-white/40'
                      }`} 
                    />
                  </div>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>

      {/* Panel de datos en tiempo real */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Entrada de datos */}
        <div className="bg-white/10 p-4 rounded-lg">
          <h4 className="text-white font-bold mb-3 flex items-center">
            <Icon name="download" className="w-4 h-4 mr-2 text-blue-400" />
            Datos de Entrada
          </h4>
          
          {executionData.trigger && (
            <div className="bg-green-500/20 p-3 rounded border border-green-400/30">
              <div className="text-green-100 text-sm font-mono">
                <div>📱 De: {executionData.trigger.from}</div>
                <div>💬 Mensaje: "{executionData.trigger.message}"</div>
                <div>⏰ Hora: {executionData.trigger.timestamp}</div>
              </div>
            </div>
          )}
          
          {!executionData.trigger && (
            <div className="text-white/60 text-sm text-center py-4">
              Esperando ejecución...
            </div>
          )}
        </div>

        {/* Respuesta de IA */}
        <div className="bg-white/10 p-4 rounded-lg">
          <h4 className="text-white font-bold mb-3 flex items-center">
            <Icon name="robot" className="w-4 h-4 mr-2 text-purple-400" />
            Respuesta de IA
          </h4>
          
          {executionData.ai && (
            <div className="bg-purple-500/20 p-3 rounded border border-purple-400/30">
              <div className="text-purple-100 text-sm">
                <div className="font-medium mb-2">🤖 ChatGPT Response:</div>
                <div className="bg-black/30 p-2 rounded font-mono text-xs">
                  "{executionData.ai.response}"
                </div>
                <div className="mt-2 text-xs text-purple-200">
                  Tokens usados: {executionData.ai.tokens}
                </div>
              </div>
            </div>
          )}
          
          {!executionData.ai && (
            <div className="text-white/60 text-sm text-center py-4">
              IA procesando...
            </div>
          )}
        </div>

        {/* Log en Sheets */}
        <div className="bg-white/10 p-4 rounded-lg">
          <h4 className="text-white font-bold mb-3 flex items-center">
            <Icon name="table" className="w-4 h-4 mr-2 text-green-400" />
            Google Sheets Log
          </h4>
          
          {executionData.sheets && (
            <div className="bg-green-500/20 p-3 rounded border border-green-400/30">
              <div className="text-green-100 text-sm">
                <div className="font-medium mb-2">📊 Registro guardado:</div>
                <div className="bg-black/30 p-2 rounded text-xs font-mono">
                  <div className="grid grid-cols-4 gap-2 text-xs">
                    <div className="text-green-300">Fecha</div>
                    <div className="text-green-300">Usuario</div>
                    <div className="text-green-300">Pregunta</div>
                    <div className="text-green-300">Respuesta</div>
                  </div>
                  <div className="grid grid-cols-4 gap-2 text-xs mt-1 text-white/80">
                    <div>14:30</div>
                    <div>+549...</div>
                    <div>Horario?</div>
                    <div>Lun-Vie...</div>
                  </div>
                </div>
              </div>
            </div>
          )}
          
          {!executionData.sheets && (
            <div className="text-white/60 text-sm text-center py-4">
              Preparando log...
            </div>
          )}
        </div>

        {/* Respuesta enviada */}
        <div className="bg-white/10 p-4 rounded-lg">
          <h4 className="text-white font-bold mb-3 flex items-center">
            <Icon name="paper-plane" className="w-4 h-4 mr-2 text-blue-400" />
            Mensaje Enviado
          </h4>
          
          {executionData.response && (
            <div className="bg-blue-500/20 p-3 rounded border border-blue-400/30">
              <div className="text-blue-100 text-sm">
                <div className="font-medium mb-2">📱 WhatsApp enviado:</div>
                <div className="bg-black/30 p-2 rounded text-xs">
                  <div>Para: {executionData.response.to}</div>
                  <div className="mt-1 text-white/90">
                    "{executionData.response.message}"
                  </div>
                </div>
                <div className="mt-2 text-xs flex items-center">
                  <Icon name="check" className="w-3 h-3 mr-1 text-green-400" />
                  Estado: {executionData.response.status}
                </div>
              </div>
            </div>
          )}
          
          {!executionData.response && (
            <div className="text-white/60 text-sm text-center py-4">
              Enviando respuesta...
            </div>
          )}
        </div>
      </div>

      {/* Métricas del workflow */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-blue-500/20 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-blue-400">~2s</div>
          <div className="text-blue-300 text-sm">Tiempo Total</div>
        </div>
        
        <div className="bg-green-500/20 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-400">
            {executionStep === workflowSteps.length ? '100%' : Math.round((executionStep / workflowSteps.length) * 100) + '%'}
          </div>
          <div className="text-green-300 text-sm">Completado</div>
        </div>
        
        <div className="bg-purple-500/20 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-purple-400">$0.001</div>
          <div className="text-purple-300 text-sm">Costo OpenAI</div>
        </div>
      </div>

      <div className="mt-4 bg-yellow-500/20 p-4 rounded-lg">
        <p className="text-yellow-100 text-sm text-center">
          💡 <strong>En el mundo real:</strong> Este workflow respondería automáticamente 24/7, 
          guardaría todas las conversaciones y costaría aprox. $0.001 por mensaje procesado.
        </p>
      </div>
    </div>
  );
};

export default N8nWorkflowDemo;
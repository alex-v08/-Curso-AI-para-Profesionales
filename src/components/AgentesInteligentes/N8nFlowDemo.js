import React, { useState, useEffect } from 'react';
import Icon from '../Icon';

/**
 * Demo interactivo que simula un flujo de n8n
 * Muestra cómo cada nodo actúa como un agente
 */
const N8nFlowDemo = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [processedData, setProcessedData] = useState({});
  const [logs, setLogs] = useState([]);
  const [selectedFlow, setSelectedFlow] = useState('invoice');

  const flows = {
    invoice: {
      name: 'Procesamiento de Facturas',
      description: 'Automatización completa del proceso de facturas por email',
      nodes: [
        {
          id: 'gmail-trigger',
          name: 'Gmail Trigger',
          type: 'sensor',
          icon: 'envelope',
          color: 'text-blue-400',
          description: 'Detecta nuevos emails',
          config: { subject: 'contains("factura")' },
          output: 'email_data'
        },
        {
          id: 'email-filter',
          name: 'Email Filter',
          type: 'processor',
          icon: 'filter',
          color: 'text-purple-400',
          description: 'Filtra emails relevantes',
          config: { hasAttachment: true, fromDomain: 'allowed' },
          output: 'filtered_email'
        },
        {
          id: 'pdf-extractor',
          name: 'PDF Data Extractor',
          type: 'processor',
          icon: 'file-pdf',
          color: 'text-red-400',
          description: 'Extrae datos del PDF',
          config: { fields: ['fecha', 'monto', 'proveedor'] },
          output: 'extracted_data'
        },
        {
          id: 'data-validator',
          name: 'Data Validator',
          type: 'processor',
          icon: 'check-circle',
          color: 'text-green-400',
          description: 'Valida los datos extraídos',
          config: { required: ['fecha', 'monto'], format: 'json' },
          output: 'validated_data'
        },
        {
          id: 'google-sheets',
          name: 'Google Sheets',
          type: 'actuator',
          icon: 'table',
          color: 'text-yellow-400',
          description: 'Guarda en hoja de cálculo',
          config: { spreadsheet: 'Facturas_2024', sheet: 'Datos' },
          output: 'sheet_row'
        },
        {
          id: 'slack-notification',
          name: 'Slack Notification',
          type: 'actuator',
          icon: 'comments',
          color: 'text-cyan-400',
          description: 'Notifica al equipo',
          config: { channel: '#finanzas', template: 'nueva_factura' },
          output: 'notification_sent'
        }
      ]
    },
    marketing: {
      name: 'Automatización de Marketing',
      description: 'Pipeline de leads desde captación hasta conversión',
      nodes: [
        {
          id: 'webhook-trigger',
          name: 'Webhook Trigger',
          type: 'sensor',
          icon: 'link',
          color: 'text-blue-400',
          description: 'Recibe nuevo lead',
          config: { endpoint: '/new-lead' },
          output: 'lead_data'
        },
        {
          id: 'lead-scorer',
          name: 'Lead Scorer',
          type: 'processor',
          icon: 'star',
          color: 'text-yellow-400',
          description: 'Calcula puntuación del lead',
          config: { criteria: ['email_domain', 'company_size', 'interest'] },
          output: 'scored_lead'
        },
        {
          id: 'segment-classifier',
          name: 'Segment Classifier',
          type: 'processor',
          icon: 'tags',
          color: 'text-purple-400',
          description: 'Clasifica en segmentos',
          config: { segments: ['enterprise', 'mid-market', 'smb'] },
          output: 'classified_lead'
        },
        {
          id: 'email-personalizer',
          name: 'Email Personalizer',
          type: 'processor',
          icon: 'edit',
          color: 'text-green-400',
          description: 'Personaliza mensaje',
          config: { templates: 'dynamic', variables: ['name', 'company'] },
          output: 'personalized_email'
        },
        {
          id: 'email-sender',
          name: 'Email Sender',
          type: 'actuator',
          icon: 'paper-plane',
          color: 'text-blue-400',
          description: 'Envía email personalizado',
          config: { provider: 'SendGrid', delay: '5min' },
          output: 'email_sent'
        },
        {
          id: 'crm-update',
          name: 'CRM Update',
          type: 'actuator',
          icon: 'database',
          color: 'text-orange-400',
          description: 'Actualiza registro CRM',
          config: { system: 'Salesforce', action: 'upsert' },
          output: 'crm_updated'
        }
      ]
    }
  };

  const simulateExecution = () => {
    const flow = flows[selectedFlow];
    const node = flow.nodes[currentStep];
    
    if (!node) return;

    const newLog = {
      timestamp: new Date().toLocaleTimeString(),
      nodeId: node.id,
      nodeName: node.name,
      status: 'processing',
      message: `Procesando en ${node.name}...`
    };
    
    setLogs(prev => [...prev.slice(-5), newLog]);

    // Simular procesamiento
    setTimeout(() => {
      let simulatedData = {};
      
      switch (node.id) {
        case 'gmail-trigger':
          simulatedData = {
            subject: 'Factura #001234 - Proveedor XYZ',
            from: 'proveedorxyz@empresa.com',
            hasAttachment: true,
            attachmentType: 'application/pdf'
          };
          break;
          
        case 'email-filter':
          simulatedData = {
            passed: true,
            reason: 'Email cumple criterios de filtrado',
            attachmentCount: 1
          };
          break;
          
        case 'pdf-extractor':
          simulatedData = {
            fecha: '2024-01-15',
            monto: 1250.50,
            proveedor: 'Proveedor XYZ',
            numeroFactura: 'F-001234'
          };
          break;
          
        case 'data-validator':
          simulatedData = {
            valid: true,
            errors: [],
            cleanedData: {
              fecha: '2024-01-15',
              monto: 1250.50,
              proveedor: 'Proveedor XYZ'
            }
          };
          break;
          
        case 'google-sheets':
          simulatedData = {
            rowAdded: 156,
            spreadsheetId: 'abc123',
            success: true
          };
          break;
          
        case 'slack-notification':
          simulatedData = {
            messageId: 'msg_789',
            channel: '#finanzas',
            delivered: true
          };
          break;
          
        // Marketing flow
        case 'webhook-trigger':
          simulatedData = {
            name: 'María González',
            email: 'maria@empresa-tech.com',
            company: 'TechCorp',
            interest: 'Enterprise Software'
          };
          break;
          
        case 'lead-scorer':
          simulatedData = {
            score: 85,
            factors: {
              emailDomain: 20,
              companySize: 30,
              interest: 35
            }
          };
          break;
          
        case 'segment-classifier':
          simulatedData = {
            segment: 'enterprise',
            confidence: 0.9,
            reasoning: 'High score + tech company'
          };
          break;
          
        case 'email-personalizer':
          simulatedData = {
            subject: 'Hola María, solución empresarial para TechCorp',
            content: 'Email personalizado generado',
            variables: { name: 'María', company: 'TechCorp' }
          };
          break;
          
        case 'email-sender':
          simulatedData = {
            messageId: 'email_456',
            status: 'sent',
            scheduledFor: new Date(Date.now() + 5 * 60000).toISOString()
          };
          break;
          
        case 'crm-update':
          simulatedData = {
            recordId: 'lead_789',
            updated: true,
            fields: ['score', 'segment', 'last_contact']
          };
          break;
      }
      
      setProcessedData(prev => ({
        ...prev,
        [node.id]: simulatedData
      }));
      
      const successLog = {
        timestamp: new Date().toLocaleTimeString(),
        nodeId: node.id,
        nodeName: node.name,
        status: 'success',
        message: `✓ ${node.name} completado exitosamente`
      };
      
      setLogs(prev => [...prev.slice(-5), successLog]);
      
      // Avanzar al siguiente paso
      setTimeout(() => {
        setCurrentStep(prev => {
          if (prev + 1 >= flow.nodes.length) {
            setIsRunning(false);
            return 0;
          }
          return prev + 1;
        });
      }, 500);
    }, 1500);
  };

  useEffect(() => {
    if (isRunning && currentStep < flows[selectedFlow].nodes.length) {
      simulateExecution();
    }
  }, [isRunning, currentStep, selectedFlow]);

  const startExecution = () => {
    setCurrentStep(0);
    setProcessedData({});
    setLogs([]);
    setIsRunning(true);
  };

  const resetExecution = () => {
    setIsRunning(false);
    setCurrentStep(0);
    setProcessedData({});
    setLogs([]);
  };

  const flow = flows[selectedFlow];

  return (
    <div className="chatbot-glass-strong p-8 rounded-xl">
      <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
        <Icon name="project-diagram" className="w-8 h-8 mr-3 text-orange-400" />
        Simulador de Flujos n8n
      </h3>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Controles */}
        <div className="space-y-6">
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Flujo</h4>
            <div className="space-y-2">
              {Object.entries(flows).map(([key, flowDef]) => (
                <button
                  key={key}
                  onClick={() => setSelectedFlow(key)}
                  className={`w-full text-left p-3 rounded-lg transition-all ${
                    selectedFlow === key 
                      ? 'bg-orange-500/30 border border-orange-400' 
                      : 'bg-white/10 hover:bg-white/20'
                  }`}
                >
                  <div className="font-semibold text-white text-sm">
                    {flowDef.name}
                  </div>
                  <div className="text-white/70 text-xs">
                    {flowDef.description}
                  </div>
                </button>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Control</h4>
            <div className="space-y-3">
              <button
                onClick={startExecution}
                disabled={isRunning}
                className={`w-full p-3 rounded-lg font-semibold transition-all ${
                  isRunning 
                    ? 'bg-gray-500/30 text-gray-400 cursor-not-allowed' 
                    : 'bg-green-500/30 border border-green-400 text-green-300 hover:bg-green-500/40'
                }`}
              >
                <Icon name="play" className="w-5 h-5 inline mr-2" />
                {isRunning ? 'Ejecutando...' : 'Iniciar Flujo'}
              </button>
              
              <button
                onClick={resetExecution}
                className="w-full p-3 rounded-lg font-semibold bg-red-500/30 border border-red-400 text-red-300 hover:bg-red-500/40 transition-all"
              >
                <Icon name="redo" className="w-5 h-5 inline mr-2" />
                Reiniciar
              </button>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Estado</h4>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-white/70">Nodos totales:</span>
                <span className="text-white">{flow.nodes.length}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/70">Progreso:</span>
                <span className="text-white">{currentStep}/{flow.nodes.length}</span>
              </div>
              <div className="w-full bg-white/20 rounded-full h-2">
                <div 
                  className="bg-orange-400 h-2 rounded-full transition-all"
                  style={{ width: `${(currentStep / flow.nodes.length) * 100}%` }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Visualización del flujo */}
        <div className="lg:col-span-2">
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-4">{flow.name}</h4>
            
            <div className="space-y-4">
              {flow.nodes.map((node, index) => (
                <div key={node.id} className="flex items-center space-x-4">
                  {/* Estado del nodo */}
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    index < currentStep 
                      ? 'bg-green-500/30 border border-green-400' 
                      : index === currentStep && isRunning
                      ? 'bg-yellow-500/30 border border-yellow-400 animate-pulse'
                      : 'bg-white/10 border border-white/20'
                  }`}>
                    {index < currentStep ? (
                      <Icon name="check" className="w-4 h-4 text-green-300" />
                    ) : index === currentStep && isRunning ? (
                      <Icon name="spinner" className="w-4 h-4 text-yellow-300 animate-spin" />
                    ) : (
                      <span className="text-white/50 text-sm">{index + 1}</span>
                    )}
                  </div>
                  
                  {/* Información del nodo */}
                  <div className="flex-1 bg-white/10 p-3 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Icon name={node.icon} className={`w-5 h-5 mr-2 ${node.color}`} />
                      <span className="font-semibold text-white">{node.name}</span>
                      <span className={`ml-2 px-2 py-1 rounded text-xs ${
                        node.type === 'sensor' ? 'bg-blue-500/20 text-blue-300' :
                        node.type === 'processor' ? 'bg-purple-500/20 text-purple-300' :
                        'bg-green-500/20 text-green-300'
                      }`}>
                        {node.type === 'sensor' ? 'Sensor' : 
                         node.type === 'processor' ? 'Procesador' : 'Actuador'}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm">{node.description}</p>
                    
                    {/* Datos procesados */}
                    {processedData[node.id] && (
                      <div className="mt-2 p-2 bg-black/30 rounded text-xs">
                        <pre className="text-green-300 overflow-x-auto">
                          {JSON.stringify(processedData[node.id], null, 2)}
                        </pre>
                      </div>
                    )}
                  </div>
                  
                  {/* Flecha */}
                  {index < flow.nodes.length - 1 && (
                    <Icon name="arrow-down" className="w-4 h-4 text-white/40" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Logs */}
        <div>
          <div className="bg-black/30 p-4 rounded-xl">
            <h4 className="text-lg font-semibold text-white mb-4">Log de Ejecución</h4>
            <div className="space-y-2 max-h-96 overflow-y-auto">
              {logs.length === 0 ? (
                <p className="text-white/50 text-sm">No hay logs aún...</p>
              ) : (
                logs.map((log, index) => (
                  <div key={index} className="text-xs p-2 bg-white/5 rounded">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-white/60">{log.timestamp}</span>
                      <span className={`px-2 py-1 rounded ${
                        log.status === 'success' 
                          ? 'bg-green-500/20 text-green-300' 
                          : 'bg-yellow-500/20 text-yellow-300'
                      }`}>
                        {log.status}
                      </span>
                    </div>
                    <p className="text-white/80">{log.message}</p>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 p-4 bg-gradient-to-r from-orange-500/10 to-yellow-500/10 rounded-lg">
        <p className="text-white/80 text-sm">
          <Icon name="lightbulb" className="w-4 h-4 inline mr-2 text-orange-400" />
          <strong>Concepto clave:</strong> Cada nodo en n8n actúa como un agente autónomo que percibe datos, 
          los procesa según su configuración, y ejecuta acciones específicas, creando un sistema multiagente coordinado.
        </p>
      </div>
    </div>
  );
};

export default N8nFlowDemo;
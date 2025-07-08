import React, { useState } from 'react';
import Icon from '../Icon';

const N8nNodeExplorer = () => {
  const [selectedCategory, setSelectedCategory] = useState('email');
  const [selectedNode, setSelectedNode] = useState(null);

  const nodeCategories = {
    email: {
      name: 'Email & Mensajería',
      icon: 'envelope',
      color: 'bg-red-500',
      nodes: [
        { 
          name: 'Gmail', 
          icon: 'envelope', 
          description: 'Enviar/recibir emails', 
          difficulty: 'Fácil',
          fullDefinition: {
            title: 'Gmail - Nodo de Email',
            description: 'El nodo de Gmail permite enviar y recibir emails automáticamente, ideal para automatización de comunicación.',
            useCases: [
              'Enviar confirmaciones de pedido automáticas',
              'Notificar cuando se complete un proceso',
              'Responder emails con plantillas predefinidas',
              'Crear sistema de tickets por email'
            ],
            configuration: [
              'Requiere credenciales de Gmail (App Password recomendado)',
              'Configurar OAuth2 para mayor seguridad',
              'Definir destinatarios y plantillas de mensaje',
              'Opcional: adjuntar archivos desde otros nodos'
            ],
            examples: 'Ejemplo: Gmail Trigger → Process Data → Gmail Send para sistema de soporte automático'
          }
        },
        { 
          name: 'Email SMTP', 
          icon: 'paper-plane', 
          description: 'Email genérico', 
          difficulty: 'Fácil',
          fullDefinition: {
            title: 'Email SMTP - Servidor de Email Genérico',
            description: 'Nodo universal para enviar emails a través de cualquier servidor SMTP, ideal cuando no usas Gmail.',
            useCases: [
              'Enviar desde servidores de email corporativos',
              'Usar proveedores como SendGrid, Mailgun',
              'Sistemas de notificación masiva',
              'Emails transaccionales desde aplicaciones'
            ],
            configuration: [
              'Servidor SMTP y puerto (ej: smtp.gmail.com:587)',
              'Credenciales de autenticación',
              'Configuración SSL/TLS',
              'Templates HTML y texto plano'
            ],
            examples: 'Ejemplo: Webhook → Process → SMTP para notificaciones de aplicación web'
          }
        },
        { 
          name: 'Telegram', 
          icon: 'paper-plane', 
          description: 'Bot de Telegram', 
          difficulty: 'Medio',
          fullDefinition: {
            title: 'Telegram - Bot de Mensajería',
            description: 'Crea bots de Telegram para enviar mensajes automáticos y crear interfaces conversacionales.',
            useCases: [
              'Alertas de sistema en tiempo real',
              'Bots de atención al cliente',
              'Notificaciones de monitoreo de servidores',
              'Interfaces de comando para administración'
            ],
            configuration: [
              'Crear bot con @BotFather en Telegram',
              'Obtener token de API del bot',
              'Configurar chat IDs o grupos',
              'Definir comandos y respuestas'
            ],
            examples: 'Ejemplo: Server Monitor → Telegram Bot para alertas de downtime'
          }
        },
        { 
          name: 'Discord', 
          icon: 'comments', 
          description: 'Webhooks Discord', 
          difficulty: 'Medio',
          fullDefinition: {
            title: 'Discord - Webhooks y Notificaciones',
            description: 'Envía mensajes a canales de Discord usando webhooks, perfecto para equipos de desarrollo.',
            useCases: [
              'Notificaciones de builds y deployments',
              'Alertas de errores en aplicaciones',
              'Updates de proyectos a equipos',
              'Bots de moderación y utilidades'
            ],
            configuration: [
              'Crear webhook en servidor de Discord',
              'Copiar URL del webhook',
              'Definir formato de mensajes (embeds)',
              'Configurar menciones y roles'
            ],
            examples: 'Ejemplo: GitHub Actions → Discord para notificar releases'
          }
        },
        { 
          name: 'Slack', 
          icon: 'hashtag', 
          description: 'Notificaciones Slack', 
          difficulty: 'Fácil',
          fullDefinition: {
            title: 'Slack - Comunicación Empresarial',
            description: 'Integra con Slack para automatizar comunicación en equipos empresariales y proyectos.',
            useCases: [
              'Notificaciones de ventas a equipo comercial',
              'Alertas de soporte técnico',
              'Updates de estado de proyectos',
              'Recordatorios automáticos de tareas'
            ],
            configuration: [
              'Crear app en Slack API',
              'Configurar bot tokens y permisos',
              'Seleccionar canales de destino',
              'Definir formato de mensajes'
            ],
            examples: 'Ejemplo: CRM Update → Slack notification para nuevos leads'
          }
        },
        { 
          name: 'WhatsApp', 
          icon: 'comments', 
          description: 'Business API', 
          difficulty: 'Difícil',
          fullDefinition: {
            title: 'WhatsApp Business - API Oficial',
            description: 'Implementa chatbots y automatización usando la API oficial de WhatsApp Business.',
            useCases: [
              'Confirmaciones de pedido automáticas',
              'Soporte al cliente 24/7',
              'Recordatorios de citas y eventos',
              'Campañas de marketing directo'
            ],
            configuration: [
              'Cuenta de WhatsApp Business verificada',
              'Registro en Meta Business Platform',
              'Configuración de webhooks para recibir',
              'Plantillas de mensaje aprobadas por Meta'
            ],
            examples: 'Ejemplo: E-commerce order → WhatsApp confirmation con tracking'
          }
        }
      ]
    },
    sheets: {
      name: 'Hojas de Cálculo',
      icon: 'table',
      color: 'bg-green-500',
      nodes: [
        { name: 'Google Sheets', icon: 'table', description: 'Leer/escribir hojas', difficulty: 'Medio' },
        { name: 'Excel', icon: 'file-excel', description: 'Archivos Excel', difficulty: 'Medio' },
        { name: 'Airtable', icon: 'database', description: 'Base de datos visual', difficulty: 'Fácil' },
        { name: 'CSV', icon: 'file-csv', description: 'Archivos CSV', difficulty: 'Fácil' }
      ]
    },
    ai: {
      name: 'Inteligencia Artificial',
      icon: 'brain',
      color: 'bg-purple-500',
      nodes: [
        { name: 'OpenAI', icon: 'robot', description: 'ChatGPT y DALL-E', difficulty: 'Fácil' },
        { name: 'Claude', icon: 'brain', description: 'Anthropic Claude', difficulty: 'Fácil' },
        { name: 'Google Gemini', icon: 'star', description: 'Gemini AI', difficulty: 'Fácil' },
        { name: 'Hugging Face', icon: 'heart', description: 'Modelos ML', difficulty: 'Medio' },
        { name: 'ElevenLabs', icon: 'microphone', description: 'Síntesis de voz', difficulty: 'Medio' }
      ]
    },
    social: {
      name: 'Redes Sociales',
      icon: 'share-alt',
      color: 'bg-blue-500',
      nodes: [
        { name: 'Twitter/X', icon: 'twitter', description: 'Publicar tweets', difficulty: 'Medio' },
        { name: 'Facebook', icon: 'facebook', description: 'Posts Facebook', difficulty: 'Medio' },
        { name: 'LinkedIn', icon: 'linkedin', description: 'Posts profesionales', difficulty: 'Medio' },
        { name: 'Instagram', icon: 'instagram', description: 'Fotos y stories', difficulty: 'Difícil' },
        { name: 'YouTube', icon: 'youtube', description: 'Subir videos', difficulty: 'Difícil' }
      ]
    },
    core: {
      name: 'Nodos Core',
      icon: 'cogs',
      color: 'bg-gray-500',
      nodes: [
        { 
          name: 'Set', 
          icon: 'edit', 
          description: 'Modificar datos', 
          difficulty: 'Fácil',
          fullDefinition: {
            title: 'Set - Modificación de Datos',
            description: 'El nodo Set es fundamental para transformar, agregar o modificar datos que fluyen por el workflow. Es como un "editor" que permite cambiar la estructura de los datos.',
            useCases: [
              'Agregar timestamps a los datos procesados',
              'Cambiar formato de fechas y números',
              'Combinar campos para crear nuevos valores',
              'Limpiar y normalizar datos antes de enviarlos',
              'Crear IDs únicos para registros',
              'Formatear datos para APIs específicas'
            ],
            configuration: [
              'Modo "Keep Only Set": Solo mantiene los campos definidos',
              'Modo "Add": Agrega campos sin borrar existentes', 
              'Usar expresiones {{ }} para valores dinámicos',
              'Soporte para arrays y objetos complejos',
              'Operaciones matemáticas y de texto'
            ],
            examples: 'Ejemplo: Gmail → Set (agregar timestamp) → Sheets para crear logs con fecha automática'
          }
        },
        { 
          name: 'IF', 
          icon: 'question', 
          description: 'Lógica condicional', 
          difficulty: 'Fácil',
          fullDefinition: {
            title: 'IF - Lógica Condicional',
            description: 'El nodo IF permite crear ramificaciones en tu workflow basadas en condiciones. Es como un "semáforo" que dirige el flujo según reglas específicas.',
            useCases: [
              'Filtrar emails por asunto o remitente',
              'Procesar pedidos solo si superan cierto monto',
              'Enviar notificaciones solo en horario laboral',
              'Clasificar datos según categorías',
              'Activar alertas solo en casos críticos',
              'Crear workflows diferentes según tipo de usuario'
            ],
            configuration: [
              'Condiciones: String, Number, Boolean, DateTime',
              'Operadores: equals, contains, greater than, etc.',
              'Salidas: True/False con flujos separados',
              'Múltiples condiciones con AND/OR',
              'Soporte para expresiones complejas'
            ],
            examples: 'Ejemplo: Form Trigger → IF (es urgente?) → True: WhatsApp / False: Email normal'
          }
        },
        { 
          name: 'Function', 
          icon: 'code', 
          description: 'JavaScript custom', 
          difficulty: 'Medio',
          fullDefinition: {
            title: 'Function - JavaScript Personalizado',
            description: 'El nodo Function permite ejecutar código JavaScript personalizado para transformaciones complejas que otros nodos no pueden realizar.',
            useCases: [
              'Cálculos matemáticos complejos',
              'Manipulación avanzada de strings y arrays',
              'Llamadas a APIs externas con lógica custom',
              'Validación de datos con reglas de negocio',
              'Parseo de formatos de datos no estándar',
              'Integración con bibliotecas JavaScript'
            ],
            configuration: [
              'Acceso a datos con $input.all() o $json',
              'Retorno con return [{ json: {...} }]',
              'Manejo de errores con try/catch',
              'Librerías disponibles: moment.js, lodash, etc.',
              'Modo asíncrono para operaciones complejas'
            ],
            examples: 'Ejemplo: Webhook → Function (calcular comisiones) → Sheets para reportes financieros'
          }
        },
        { 
          name: 'Filter', 
          icon: 'filter', 
          description: 'Filtrar elementos', 
          difficulty: 'Fácil',
          fullDefinition: {
            title: 'Filter - Filtrado de Elementos',
            description: 'El nodo Filter permite remover elementos de un array de datos basado en condiciones específicas, actuando como un "colador" de información.',
            useCases: [
              'Filtrar productos en stock de una lista',
              'Mostrar solo eventos de hoy en calendario',
              'Procesar únicamente errores críticos de logs',
              'Seleccionar clientes por región geográfica',
              'Filtrar archivos por extensión o tamaño',
              'Procesar solo registros completados'
            ],
            configuration: [
              'Condiciones similares al nodo IF',
              'Mantiene solo elementos que cumplen criterio',
              'Soporte para condiciones múltiples',
              'Preserva estructura original de datos',
              'Optimización automática para arrays grandes'
            ],
            examples: 'Ejemplo: API productos → Filter (stock > 0) → Email con productos disponibles'
          }
        },
        { 
          name: 'Merge', 
          icon: 'code-branch', 
          description: 'Combinar datos', 
          difficulty: 'Medio',
          fullDefinition: {
            title: 'Merge - Combinación de Datos',
            description: 'El nodo Merge permite combinar datos de múltiples fuentes o nodos anteriores, actuando como un "punto de encuentro" de diferentes flujos.',
            useCases: [
              'Combinar datos de cliente con datos de pedido',
              'Unir información de múltiples APIs',
              'Crear reportes consolidados de varias fuentes',
              'Sincronizar datos entre sistemas diferentes',
              'Agregar metadatos a registros existentes',
              'Crear vista unificada de datos distribuidos'
            ],
            configuration: [
              'Modo "Append": Concatena todos los elementos',
              'Modo "Pass-through": Espera a que lleguen todos',
              'Modo "Merge by key": Une por campo común',
              'Control de orden y precedencia',
              'Manejo de datos faltantes o duplicados'
            ],
            examples: 'Ejemplo: Users API + Orders API → Merge → Sheets con datos completos de clientes'
          }
        },
        { 
          name: 'HTTP Request', 
          icon: 'globe', 
          description: 'Llamadas API', 
          difficulty: 'Medio',
          fullDefinition: {
            title: 'HTTP Request - Llamadas a APIs',
            description: 'El nodo HTTP Request permite comunicarse con cualquier API externa o servicio web, siendo el "puente" hacia el mundo exterior de tu workflow.',
            useCases: [
              'Integrar con APIs que no tienen nodo específico',
              'Obtener datos de servicios web personalizados',
              'Enviar webhooks a sistemas externos',
              'Consultar bases de datos via REST API',
              'Integrar con servicios de terceros',
              'Automatizar publicaciones en plataformas web'
            ],
            configuration: [
              'Métodos: GET, POST, PUT, DELETE, PATCH',
              'Headers personalizados y autenticación',
              'Body en JSON, form-data, o raw',
              'Manejo de respuestas y códigos de error',
              'Timeout y retry automático',
              'SSL/TLS y certificados personalizados'
            ],
            examples: 'Ejemplo: Timer → HTTP Request (API clima) → IF (lluvia?) → WhatsApp alerta'
          }
        }
      ]
    },
    automation: {
      name: 'Automatización',
      icon: 'robot',
      color: 'bg-orange-500',
      nodes: [
        { name: 'Schedule', icon: 'clock', description: 'Timer/Cron jobs', difficulty: 'Fácil' },
        { name: 'Webhook', icon: 'plug', description: 'Recibir datos HTTP', difficulty: 'Medio' },
        { name: 'Execute Command', icon: 'terminal', description: 'Comandos sistema', difficulty: 'Difícil' },
        { name: 'SSH', icon: 'server', description: 'Conexión remota', difficulty: 'Difícil' }
      ]
    }
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Fácil': return 'bg-green-600';
      case 'Medio': return 'bg-orange-600';
      case 'Difícil': return 'bg-red-600';
      default: return 'bg-gray-600';
    }
  };

  return (
    <div className="chatbot-glass-strong p-6 rounded-xl">
      <div className="mb-6">
        <h3 className="text-xl font-bold text-white mb-4 text-center">
          🔍 Explorador de Nodos n8n
        </h3>
        
        {/* Categorías */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3 mb-6">
          {Object.entries(nodeCategories).map(([key, category]) => (
            <button
              key={key}
              onClick={() => setSelectedCategory(key)}
              className={`p-3 rounded-lg border-2 transition-all ${
                selectedCategory === key
                  ? `${category.color} border-white/50 text-white`
                  : 'bg-white/10 border-white/20 text-white/70 hover:bg-white/20'
              }`}
            >
              <div className="text-center">
                <Icon name={category.icon} className="w-6 h-6 mx-auto mb-1" />
                <span className="text-xs font-medium block">{category.name}</span>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Nodos de la categoría seleccionada */}
      <div className="bg-white/10 p-6 rounded-lg">
        <h4 className="text-lg font-bold text-white mb-4 flex items-center">
          <Icon name={nodeCategories[selectedCategory].icon} className="w-5 h-5 mr-2" />
          {nodeCategories[selectedCategory].name}
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {nodeCategories[selectedCategory].nodes.map((node, index) => (
            <div 
              key={index} 
              className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-colors cursor-pointer"
              onClick={() => setSelectedNode(node)}
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center">
                  <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center mr-3">
                    <Icon name={node.icon} className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h5 className="text-white font-medium">{node.name}</h5>
                    <span className={`text-xs px-2 py-1 rounded text-white ${getDifficultyColor(node.difficulty)}`}>
                      {node.difficulty}
                    </span>
                  </div>
                </div>
                {node.fullDefinition && (
                  <div className="text-blue-400">
                    <Icon name="info" className="w-4 h-4" />
                  </div>
                )}
              </div>
              
              <p className="text-white/70 text-sm">{node.description}</p>
              
              {/* Ejemplos de uso según la categoría */}
              <div className="mt-3 pt-3 border-t border-white/20">
                <p className="text-white/50 text-xs">
                  {selectedCategory === 'email' && '💡 Ideal para notificaciones automáticas'}
                  {selectedCategory === 'sheets' && '💡 Perfecto para logs y reportes'}
                  {selectedCategory === 'ai' && '💡 Automatizar respuestas inteligentes'}
                  {selectedCategory === 'social' && '💡 Gestión de contenido automática'}
                  {selectedCategory === 'core' && '💡 Bloques básicos de cualquier workflow'}
                  {selectedCategory === 'automation' && '💡 Triggers y acciones del sistema'}
                </p>
              </div>
              
              {node.fullDefinition && (
                <div className="mt-3 pt-3 border-t border-blue-400/30">
                  <p className="text-blue-300 text-xs font-medium">
                    🔍 Haz click para ver definición completa
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Stats de la categoría */}
      <div className="mt-6 grid grid-cols-3 gap-4">
        <div className="bg-green-500/20 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-green-400">
            {nodeCategories[selectedCategory].nodes.filter(n => n.difficulty === 'Fácil').length}
          </div>
          <div className="text-green-300 text-sm">Fáciles</div>
        </div>
        
        <div className="bg-orange-500/20 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-orange-400">
            {nodeCategories[selectedCategory].nodes.filter(n => n.difficulty === 'Medio').length}
          </div>
          <div className="text-orange-300 text-sm">Medios</div>
        </div>
        
        <div className="bg-red-500/20 p-3 rounded-lg text-center">
          <div className="text-2xl font-bold text-red-400">
            {nodeCategories[selectedCategory].nodes.filter(n => n.difficulty === 'Difícil').length}
          </div>
          <div className="text-red-300 text-sm">Difíciles</div>
        </div>
      </div>

      <div className="mt-4 bg-blue-500/20 p-4 rounded-lg">
        <p className="text-blue-100 text-sm text-center">
          💡 <strong>Tip:</strong> Empieza con nodos "Fáciles" y ve progresando. 
          La combinación Gmail + Google Sheets es perfecta para principiantes.
        </p>
      </div>

      {/* Modal de definición completa */}
      {selectedNode && selectedNode.fullDefinition && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            {/* Header del modal */}
            <div className="sticky top-0 bg-gray-900 border-b border-white/20 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mr-4">
                    <Icon name={selectedNode.icon} className="w-6 h-6 text-blue-400" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">{selectedNode.fullDefinition.title}</h3>
                    <span className={`text-xs px-3 py-1 rounded text-white ${getDifficultyColor(selectedNode.difficulty)}`}>
                      {selectedNode.difficulty}
                    </span>
                  </div>
                </div>
                <button
                  onClick={() => setSelectedNode(null)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <Icon name="times" className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Contenido del modal */}
            <div className="p-6 space-y-6">
              {/* Descripción */}
              <div className="bg-white/10 p-6 rounded-lg">
                <h4 className="text-lg font-bold text-white mb-3 flex items-center">
                  <Icon name="info" className="w-5 h-5 mr-2 text-blue-400" />
                  Descripción
                </h4>
                <p className="text-white/90 leading-relaxed">
                  {selectedNode.fullDefinition.description}
                </p>
              </div>

              {/* Casos de uso */}
              <div className="bg-green-500/10 p-6 rounded-lg border border-green-500/20">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Icon name="lightbulb" className="w-5 h-5 mr-2 text-green-400" />
                  Casos de Uso Principales
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedNode.fullDefinition.useCases.map((useCase, index) => (
                    <div key={index} className="bg-green-500/20 p-3 rounded-lg">
                      <p className="text-green-100 text-sm">• {useCase}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Configuración */}
              <div className="bg-blue-500/10 p-6 rounded-lg border border-blue-500/20">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Icon name="cogs" className="w-5 h-5 mr-2 text-blue-400" />
                  Configuración
                </h4>
                <div className="space-y-3">
                  {selectedNode.fullDefinition.configuration.map((config, index) => (
                    <div key={index} className="bg-blue-500/20 p-3 rounded-lg">
                      <p className="text-blue-100 text-sm">• {config}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Ejemplo práctico */}
              <div className="bg-purple-500/10 p-6 rounded-lg border border-purple-500/20">
                <h4 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Icon name="code" className="w-5 h-5 mr-2 text-purple-400" />
                  Ejemplo Práctico
                </h4>
                <div className="bg-black/30 p-4 rounded-lg">
                  <p className="text-purple-200 text-sm font-mono">
                    {selectedNode.fullDefinition.examples}
                  </p>
                </div>
              </div>

              {/* Botones de acción */}
              <div className="flex justify-between items-center pt-4 border-t border-white/20">
                <button
                  onClick={() => setSelectedNode(null)}
                  className="btn-chatbot-secondary"
                >
                  <Icon name="arrow-left" className="w-4 h-4 mr-2" />
                  Volver al explorador
                </button>
                
                <div className="flex space-x-3">
                  <button className="btn-chatbot-primary">
                    <Icon name="external-link-alt" className="w-4 h-4 mr-2" />
                    Documentación n8n
                  </button>
                  <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors flex items-center">
                    <Icon name="play" className="w-4 h-4 mr-2" />
                    Probar en n8n
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default N8nNodeExplorer;
import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';
// Componentes temporalmente deshabilitados para debug
// import N8nWorkflowDemo from '../components/InteractiveComponents/N8nWorkflowDemo';
// import N8nNodeExplorer from '../components/InteractiveComponents/N8nNodeExplorer';
// import N8nFlowBuilder from '../components/InteractiveComponents/N8nFlowBuilder';

/**
 * Capítulo completo de n8n: Automatización Workflow
 * Curso interactivo completo de teoría y práctica
 */

const n8nSlides = [
  // Slide 0: Portada
  {
    id: 0,
    type: 'cover',
    title: 'n8n: Automatización de Workflows',
    subtitle: 'Curso Completo de Teoría y Práctica',
    content: (
      <div className="chatbot-glass-strong p-12 rounded-2xl text-center space-y-8">
        <div className="relative">
          <Icon name="sitemap" className="w-32 h-32 text-blue-400 mx-auto pulse-animation" />
          <div className="absolute -inset-4 border-2 border-blue-300 rounded-full animate-spin opacity-30"></div>
        </div>
        
        <h2 className="text-4xl font-bold text-white mb-4">
          De Cero a Experto en n8n
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-8">
          <div className="message-card bot-style">
            <Icon name="play" className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <span className="text-sm">🎯 Triggers</span>
          </div>
          <div className="message-card bot-style">
            <Icon name="cogs" className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <span className="text-sm">⚙️ Nodos</span>
          </div>
          <div className="message-card bot-style">
            <Icon name="network-wired" className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <span className="text-sm">🔗 Flujos</span>
          </div>
          <div className="message-card bot-style">
            <Icon name="rocket" className="w-8 h-8 text-red-400 mx-auto mb-2" />
            <span className="text-sm">🚀 Casos Reales</span>
          </div>
        </div>
      </div>
    )
  },

  // Slide 1: ¿Qué es n8n?
  {
    id: 1,
    type: 'content',
    title: '¿Qué es n8n?',
    content: (
      <div className="space-y-8">
        <div className="chatbot-glass-strong p-8 rounded-xl">
          <div className="flex items-center mb-6">
            <Icon name="info" className="w-10 h-10 text-blue-400 mr-4" />
            <h3 className="text-2xl font-bold text-white">Definición</h3>
          </div>
          <p className="text-xl text-white/90 leading-relaxed mb-6">
            <strong>n8n</strong> es una plataforma de automatización de workflows que permite conectar aplicaciones y automatizar procesos sin escribir código.
          </p>
          
          <div className="bg-blue-500/20 p-4 rounded-lg border-l-4 border-blue-400">
            <p className="text-white/80">
              <strong>"n8n"</strong> = "nodemation" (node + automation)
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="message-card system-style">
            <Icon name="puzzle-piece" className="w-8 h-8 text-green-400 mb-4" />
            <h4 className="font-bold mb-2">Visual</h4>
            <p className="text-sm">Interfaz gráfica de arrastrar y soltar</p>
          </div>
          <div className="message-card system-style">
            <Icon name="code" className="w-8 h-8 text-purple-400 mb-4" />
            <h4 className="font-bold mb-2">Flexible</h4>
            <p className="text-sm">Open source y extensible</p>
          </div>
          <div className="message-card system-style">
            <Icon name="bolt" className="w-8 h-8 text-yellow-400 mb-4" />
            <h4 className="font-bold mb-2">Poderoso</h4>
            <p className="text-sm">400+ integraciones nativas</p>
          </div>
        </div>

        <div className="chatbot-glass p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Icon name="lightbulb" className="w-6 h-6 mr-3 text-yellow-400" />
            Casos Típicos
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="bg-green-500/20 p-3 rounded-lg text-center">
              <span className="text-sm text-white">📧 Email → Sheets</span>
            </div>
            <div className="bg-blue-500/20 p-3 rounded-lg text-center">
              <span className="text-sm text-white">📱 Form → WhatsApp</span>
            </div>
            <div className="bg-purple-500/20 p-3 rounded-lg text-center">
              <span className="text-sm text-white">🤖 AI → Respuesta</span>
            </div>
            <div className="bg-orange-500/20 p-3 rounded-lg text-center">
              <span className="text-sm text-white">⏰ Timer → Acción</span>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2: Conceptos Fundamentales
  {
    id: 2,
    type: 'content',
    title: 'Conceptos Fundamentales de n8n',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ClickableInfo
            title="Workflow (Flujo de Trabajo)"
            content={
              <div>
                <p className="mb-4"><strong>Un workflow</strong> es una secuencia de pasos automatizados que procesan datos y ejecutan acciones.</p>
                
                <h4>Componentes:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Trigger:</strong> Inicia el workflow</li>
                  <li>• <strong>Nodos:</strong> Procesan o transforman datos</li>
                  <li>• <strong>Conexiones:</strong> Flujo de datos entre nodos</li>
                  <li>• <strong>Ejecuciones:</strong> Instancias del workflow</li>
                </ul>

                <div className="bg-blue-50 p-4 rounded-lg mt-4">
                  <p><strong>Ejemplo:</strong></p>
                  <p>Email nuevo → Extraer datos → Guardar en Sheets → Notificar por Slack</p>
                </div>
              </div>
            }
            className="chatbot-glass-strong p-6 rounded-xl"
          >
            <div className="text-center">
              <Icon name="sitemap" className="w-16 h-16 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Workflow</h3>
              <p className="text-white/80">Secuencia automatizada de pasos</p>
            </div>
          </ClickableInfo>

          <ClickableInfo
            title="Nodos en n8n"
            content={
              <div>
                <p className="mb-4"><strong>Los nodos</strong> son los bloques de construcción de cualquier workflow en n8n.</p>
                
                <h4>Tipos principales:</h4>
                <ul className="space-y-2">
                  <li>• <strong>Trigger Nodes:</strong> Inician workflows</li>
                  <li>• <strong>Regular Nodes:</strong> Procesan datos</li>
                  <li>• <strong>Core Nodes:</strong> Funciones básicas</li>
                </ul>

                <h4>Ejemplos por categoría:</h4>
                <ul className="space-y-1">
                  <li>📧 <strong>Comunicación:</strong> Gmail, Slack, Discord</li>
                  <li>📊 <strong>Datos:</strong> Google Sheets, Airtable</li>
                  <li>🤖 <strong>IA:</strong> OpenAI, Claude</li>
                  <li>⚙️ <strong>Core:</strong> Set, IF, Function</li>
                </ul>
              </div>
            }
            className="chatbot-glass-strong p-6 rounded-xl"
          >
            <div className="text-center">
              <Icon name="cube" className="w-16 h-16 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">Nodos</h3>
              <p className="text-white/80">Bloques de funcionalidad</p>
            </div>
          </ClickableInfo>
        </div>

        <div className="chatbot-glass-strong p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            <Icon name="flow-chart" className="w-6 h-6 inline mr-3 text-purple-400" />
            Anatomía de un Workflow
          </h3>
          
          <div className="bg-white/10 p-6 rounded-lg">
            <div className="flex items-center justify-between text-white">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <Icon name="play" className="w-6 h-6" />
                </div>
                <span className="text-sm">TRIGGER</span>
              </div>
              
              <Icon name="arrow-right" className="w-6 h-6 text-gray-400" />
              
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <Icon name="cog" className="w-6 h-6" />
                </div>
                <span className="text-sm">PROCESAR</span>
              </div>
              
              <Icon name="arrow-right" className="w-6 h-6 text-gray-400" />
              
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <Icon name="database" className="w-6 h-6" />
                </div>
                <span className="text-sm">GUARDAR</span>
              </div>
              
              <Icon name="arrow-right" className="w-6 h-6 text-gray-400" />
              
              <div className="text-center">
                <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mb-2 mx-auto">
                  <Icon name="bell" className="w-6 h-6" />
                </div>
                <span className="text-sm">NOTIFICAR</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 3: Tipos de Nodos
  {
    id: 3,
    type: 'content',
    title: 'Tipos de Nodos en n8n',
    content: (
      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="play" className="w-6 h-6 mr-3 text-green-400" />
              Trigger Nodes
            </h3>
            <p className="text-white/80 mb-4">Inician la ejecución del workflow</p>
            
            <div className="space-y-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <div className="flex items-center">
                  <Icon name="clock" className="w-5 h-5 mr-2 text-green-300" />
                  <span className="text-white font-medium">Schedule Trigger</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Ejecuta en horarios específicos</p>
              </div>
              
              <div className="bg-green-500/20 p-3 rounded-lg">
                <div className="flex items-center">
                  <Icon name="globe" className="w-5 h-5 mr-2 text-green-300" />
                  <span className="text-white font-medium">Webhook</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Recibe datos HTTP externos</p>
              </div>

              <div className="bg-green-500/20 p-3 rounded-lg">
                <div className="flex items-center">
                  <Icon name="envelope" className="w-5 h-5 mr-2 text-green-300" />
                  <span className="text-white font-medium">Gmail Trigger</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Detecta emails nuevos</p>
              </div>
            </div>
          </div>

          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="cogs" className="w-6 h-6 mr-3 text-blue-400" />
              Regular Nodes
            </h3>
            <p className="text-white/80 mb-4">Procesan y transforman datos</p>
            
            <div className="space-y-3">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <div className="flex items-center">
                  <Icon name="envelope-open" className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="text-white font-medium">Gmail</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Envía emails</p>
              </div>
              
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <div className="flex items-center">
                  <Icon name="table" className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="text-white font-medium">Google Sheets</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Lee/escribe hojas de cálculo</p>
              </div>

              <div className="bg-blue-500/20 p-3 rounded-lg">
                <div className="flex items-center">
                  <Icon name="robot" className="w-5 h-5 mr-2 text-blue-300" />
                  <span className="text-white font-medium">OpenAI</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Procesa con IA</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chatbot-glass-strong p-6 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-4 flex items-center">
            <Icon name="wrench" className="w-6 h-6 mr-3 text-purple-400" />
            Core Nodes (Fundamentales)
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="message-card system-style text-center">
              <Icon name="edit" className="w-6 h-6 text-purple-300 mx-auto mb-2" />
              <span className="text-sm font-medium">Set</span>
              <p className="text-xs text-white/70 mt-1">Modifica datos</p>
            </div>
            
            <div className="message-card system-style text-center">
              <Icon name="question" className="w-6 h-6 text-yellow-300 mx-auto mb-2" />
              <span className="text-sm font-medium">IF</span>
              <p className="text-xs text-white/70 mt-1">Lógica condicional</p>
            </div>
            
            <div className="message-card system-style text-center">
              <Icon name="code" className="w-6 h-6 text-orange-300 mx-auto mb-2" />
              <span className="text-sm font-medium">Function</span>
              <p className="text-xs text-white/70 mt-1">JavaScript personalizado</p>
            </div>
            
            <div className="message-card system-style text-center">
              <Icon name="filter" className="w-6 h-6 text-green-300 mx-auto mb-2" />
              <span className="text-sm font-medium">Filter</span>
              <p className="text-xs text-white/70 mt-1">Filtra elementos</p>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-blue-400/30">
          <h3 className="text-lg font-bold text-white mb-2 flex items-center">
            <Icon name="info" className="w-5 h-5 mr-2 text-blue-400" />
            Regla de Oro
          </h3>
          <p className="text-white/90">
            <strong>1 Trigger + N Nodos = 1 Workflow completo</strong>
          </p>
          <p className="text-white/70 text-sm mt-1">
            Siempre empieza con un trigger, luego agrega los nodos necesarios
          </p>
        </div>
      </div>
    )
  },

  // Slide 4: Explorador Interactivo de Nodos
  {
    id: 4,
    type: 'content',
    title: 'Explorador de Nodos n8n',
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            🎯 Explora los Nodos Más Populares
          </h3>
          <p className="text-white/80">
            Haz clic en las categorías para ver los nodos disponibles
          </p>
        </div>
        
        <div className="chatbot-glass-strong p-6 rounded-xl">
          <div className="text-center">
            <h4 className="text-white mb-4">🔍 Explorador de Nodos</h4>
            <p className="text-white/80">Componente interactivo de exploración de nodos</p>
            <div className="bg-blue-500/20 p-4 rounded-lg mt-4">
              <p className="text-blue-100 text-sm">
                💡 Aquí irá el explorador interactivo de nodos n8n
              </p>
            </div>
          </div>
        </div>
        
        <div className="chatbot-glass p-6 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <Icon name="lightbulb" className="w-5 h-5 mr-2 text-yellow-400" />
            Tips para Principiantes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-green-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-white mb-2">✅ Empieza Simple</h4>
              <p className="text-white/80 text-sm">
                Gmail + Google Sheets es la combinación más fácil para aprender
              </p>
            </div>
            
            <div className="bg-blue-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-white mb-2">🧪 Prueba Nodo a Nodo</h4>
              <p className="text-white/80 text-sm">
                Ejecuta cada nodo individualmente antes de conectar todo
              </p>
            </div>
            
            <div className="bg-purple-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-white mb-2">📚 Lee la Documentación</h4>
              <p className="text-white/80 text-sm">
                Cada nodo tiene ejemplos y parámetros explicados
              </p>
            </div>
            
            <div className="bg-orange-500/20 p-4 rounded-lg">
              <h4 className="font-bold text-white mb-2">🔄 Usa Templates</h4>
              <p className="text-white/80 text-sm">
                n8n tiene plantillas prediseñadas para casos comunes
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 5: Flujo de Datos en n8n
  {
    id: 5,
    type: 'content',
    title: 'Flujo de Datos en n8n',
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <div className="chatbot-glass-strong p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">¿Cómo fluyen los datos?</h3>
            <p className="text-white/80">Los datos pasan de nodo en nodo como fichas de dominó</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="database" className="w-6 h-6 mr-3 text-blue-400" />
              Estructura de Datos
            </h3>
            
            <div className="bg-white/10 p-4 rounded-lg mb-4">
              <h4 className="text-white font-medium mb-2">Formato JSON</h4>
              <div className="bg-black/30 p-3 rounded text-sm font-mono text-green-300">
                {`{
  "json": {
    "nombre": "Juan",
    "email": "juan@email.com",
    "edad": 25
  }
}`}
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  <strong>json:</strong> Datos principales del elemento
                </p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  <strong>binary:</strong> Archivos (imágenes, PDFs, etc.)
                </p>
              </div>
            </div>
          </div>

          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="share-alt" className="w-6 h-6 mr-3 text-green-400" />
              Acceso a Datos
            </h3>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Nodo Actual</h4>
                <div className="bg-black/30 p-2 rounded text-sm font-mono text-green-300">
                  {`{{ $json["campo"] }}`}
                </div>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Nodo Anterior</h4>
                <div className="bg-black/30 p-2 rounded text-sm font-mono text-green-300">
                  {`{{ $node["NombreNodo"].json["campo"] }}`}
                </div>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">Todos los Items</h4>
                <div className="bg-black/30 p-2 rounded text-sm font-mono text-green-300">
                  {`{{ $input.all() }}`}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chatbot-glass-strong p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            Ejemplo: Email → Sheets → WhatsApp
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="w-16 h-16 bg-red-500/20 rounded-xl flex items-center justify-center mb-3 border border-red-400/30">
                <Icon name="envelope" className="w-8 h-8 text-red-400" />
              </div>
              <h4 className="text-white font-medium mb-2">Gmail Trigger</h4>
              <div className="bg-black/30 p-2 rounded text-xs font-mono text-green-300">
                {`{
  "subject": "Pedido",
  "from": "cliente@email.com"
}`}
              </div>
            </div>
            
            <Icon name="arrow-right" className="w-6 h-6 text-gray-400 mx-4" />
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mb-3 border border-green-400/30">
                <Icon name="table" className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-white font-medium mb-2">Google Sheets</h4>
              <div className="bg-black/30 p-2 rounded text-xs font-mono text-green-300">
                {`Guarda:
{{ $json["subject"] }}
{{ $json["from"] }}`}
              </div>
            </div>
            
            <Icon name="arrow-right" className="w-6 h-6 text-gray-400 mx-4" />
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-3 border border-blue-400/30">
                <Icon name="comments" className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-white font-medium mb-2">WhatsApp</h4>
              <div className="bg-black/30 p-2 rounded text-xs font-mono text-green-300">
                {`Mensaje:
"Nuevo pedido de 
{{ $node["Gmail Trigger"].json["from"] }}"`}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 6: Casos de Uso Populares
  {
    id: 6,
    type: 'content',
    title: 'Top 10 Casos de Uso Más Populares',
    content: (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            🏆 Los Workflows Más Demandados
          </h3>
          <p className="text-white/80">
            Basado en la comunidad de n8n y casos reales
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="trophy" className="w-5 h-5 mr-2 text-yellow-400" />
              Top 5 - Principiantes
            </h3>
            
            <div className="space-y-3">
              <div className="bg-green-500/20 p-3 rounded-lg border-l-4 border-green-400">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">📧 Email Automático</span>
                  <span className="text-xs bg-green-600 px-2 py-1 rounded">FÁCIL</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Gmail → Respuesta → Sheets</p>
              </div>
              
              <div className="bg-blue-500/20 p-3 rounded-lg border-l-4 border-blue-400">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">📝 Form → WhatsApp</span>
                  <span className="text-xs bg-blue-600 px-2 py-1 rounded">FÁCIL</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Google Forms → WhatsApp notif</p>
              </div>
              
              <div className="bg-purple-500/20 p-3 rounded-lg border-l-4 border-purple-400">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">📦 Control Inventario</span>
                  <span className="text-xs bg-purple-600 px-2 py-1 rounded">MEDIO</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Sheets + alertas + reportes</p>
              </div>
              
              <div className="bg-orange-500/20 p-3 rounded-lg border-l-4 border-orange-400">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">🎂 Cumpleaños Auto</span>
                  <span className="text-xs bg-orange-600 px-2 py-1 rounded">FÁCIL</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Timer → Sheets → WhatsApp</p>
              </div>
              
              <div className="bg-red-500/20 p-3 rounded-lg border-l-4 border-red-400">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">💰 Ventas Tracker</span>
                  <span className="text-xs bg-red-600 px-2 py-1 rounded">MEDIO</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Webhook → Sheets → Email</p>
              </div>
            </div>
          </div>

          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="rocket" className="w-5 h-5 mr-2 text-red-400" />
              Top 5 - Avanzados
            </h3>
            
            <div className="space-y-3">
              <div className="bg-indigo-500/20 p-3 rounded-lg border-l-4 border-indigo-400">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">🤖 Bot WhatsApp IA</span>
                  <span className="text-xs bg-indigo-600 px-2 py-1 rounded">AVANZADO</span>
                </div>
                <p className="text-white/70 text-sm mt-1">WA → OpenAI → Sheets → Respuesta</p>
              </div>
              
              <div className="bg-teal-500/20 p-3 rounded-lg border-l-4 border-teal-400">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">📱 Social Media AI</span>
                  <span className="text-xs bg-teal-600 px-2 py-1 rounded">AVANZADO</span>
                </div>
                <p className="text-white/70 text-sm mt-1">AI → Instagram + LinkedIn + X</p>
              </div>
              
              <div className="bg-pink-500/20 p-3 rounded-lg border-l-4 border-pink-400">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">🛒 E-commerce Auto</span>
                  <span className="text-xs bg-pink-600 px-2 py-1 rounded">AVANZADO</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Shopify → Stripe → CRM → Email</p>
              </div>
              
              <div className="bg-cyan-500/20 p-3 rounded-lg border-l-4 border-cyan-400">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">📊 Business Intel</span>
                  <span className="text-xs bg-cyan-600 px-2 py-1 rounded">EXPERTO</span>
                </div>
                <p className="text-white/70 text-sm mt-1">APIs múltiples → Análisis → Dashboard</p>
              </div>
              
              <div className="bg-yellow-500/20 p-3 rounded-lg border-l-4 border-yellow-400">
                <div className="flex items-center justify-between">
                  <span className="text-white font-medium">🎨 Content Pipeline</span>
                  <span className="text-xs bg-yellow-600 px-2 py-1 rounded">EXPERTO</span>
                </div>
                <p className="text-white/70 text-sm mt-1">Notion → AI → DALL-E → Social</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-6 rounded-xl border border-green-400/30">
          <h3 className="text-lg font-bold text-white mb-4 flex items-center">
            <Icon name="lightbulb" className="w-5 h-5 mr-2 text-yellow-400" />
            Recomendación de Aprendizaje
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">1️⃣</span>
              </div>
              <p className="text-white font-medium">Empieza con Email</p>
              <p className="text-white/70 text-sm">Gmail + Sheets básico</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">2️⃣</span>
              </div>
              <p className="text-white font-medium">Agrega WhatsApp</p>
              <p className="text-white/70 text-sm">Notificaciones automáticas</p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-xl">3️⃣</span>
              </div>
              <p className="text-white font-medium">Incluye IA</p>
              <p className="text-white/70 text-sm">OpenAI para automatizar</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 7: Constructor de Flujos Interactivo
  {
    id: 7,
    type: 'content',
    title: 'Constructor de Flujos n8n',
    content: (
      <div className="space-y-6">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-white mb-4">
            🏗️ Construye tu Primer Workflow
          </h3>
          <p className="text-white/80">
            Arrastra y conecta nodos para crear tu automatización
          </p>
        </div>
        
        <div className="chatbot-glass-strong p-6 rounded-xl">
          <div className="text-center">
            <h4 className="text-white mb-4">🏗️ Constructor de Flujos</h4>
            <p className="text-white/80">Componente interactivo para construir workflows</p>
            <div className="bg-green-500/20 p-4 rounded-lg mt-4">
              <p className="text-green-100 text-sm">
                💡 Aquí irá el constructor interactivo de workflows n8n
              </p>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="play" className="w-5 h-5 mr-2 text-green-400" />
              Pasos para Crear un Workflow
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-xs font-bold">1</span>
                </div>
                <div>
                  <p className="text-white font-medium">Selecciona un Trigger</p>
                  <p className="text-white/70 text-sm">¿Qué va a iniciar tu workflow?</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-xs font-bold">2</span>
                </div>
                <div>
                  <p className="text-white font-medium">Agrega Nodos</p>
                  <p className="text-white/70 text-sm">¿Qué acciones quieres ejecutar?</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-purple-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-xs font-bold">3</span>
                </div>
                <div>
                  <p className="text-white font-medium">Conecta los Nodos</p>
                  <p className="text-white/70 text-sm">Define el flujo de datos</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-6 h-6 bg-orange-500 rounded-full flex items-center justify-center mr-3 mt-0.5">
                  <span className="text-white text-xs font-bold">4</span>
                </div>
                <div>
                  <p className="text-white font-medium">Configura y Prueba</p>
                  <p className="text-white/70 text-sm">Ejecuta paso a paso</p>
                </div>
              </div>
            </div>
          </div>

          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="exclamation-triangle" className="w-5 h-5 mr-2 text-yellow-400" />
              Errores Comunes
            </h3>
            
            <div className="space-y-3">
              <div className="bg-red-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">❌ Olvidar credenciales</p>
                <p className="text-white/70 text-xs">Configura Gmail, Sheets, etc.</p>
              </div>
              
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">❌ No probar nodo a nodo</p>
                <p className="text-white/70 text-xs">Ejecuta cada paso individualmente</p>
              </div>
              
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">❌ Sintaxis incorrecta</p>
                <p className="text-white/70 text-xs">Revisa las expresiones {{ }}</p>
              </div>
              
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">❌ No manejar errores</p>
                <p className="text-white/70 text-xs">Usa "Continue on Fail"</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8: Configuración y Credenciales
  {
    id: 8,
    type: 'content',
    title: 'Configuración de Credenciales',
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <div className="chatbot-glass-strong p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">🔐 Configuración Paso a Paso</h3>
            <p className="text-white/80">Lo más complicado para principiantes, pero esencial</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <ClickableInfo
            title="Google Sheets - Configuración Completa"
            content={
              <div>
                <h4>Pasos detallados:</h4>
                <ol className="space-y-2">
                  <li><strong>1. Google Cloud Console:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Crear proyecto nuevo</li>
                      <li>• Habilitar Google Sheets API</li>
                      <li>• Crear Service Account</li>
                    </ul>
                  </li>
                  <li><strong>2. Descargar JSON:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Crear clave para Service Account</li>
                      <li>• Descargar archivo JSON</li>
                    </ul>
                  </li>
                  <li><strong>3. Compartir hoja:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Copiar email del Service Account</li>
                      <li>• Compartir Google Sheet con ese email</li>
                      <li>• Dar permisos de Editor</li>
                    </ul>
                  </li>
                  <li><strong>4. En n8n:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Pegar contenido del JSON</li>
                      <li>• Probar conexión</li>
                    </ul>
                  </li>
                </ol>
                
                <div className="bg-green-50 p-3 rounded-lg mt-4">
                  <p><strong>💡 Tip:</strong> El Service Account es como un "usuario robot" que puede acceder a tus hojas.</p>
                </div>
              </div>
            }
            className="chatbot-glass-strong p-6 rounded-xl"
          >
            <div className="text-center">
              <Icon name="table" className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h4 className="font-bold text-white">Google Sheets</h4>
              <span className="text-xs bg-yellow-600 px-2 py-1 rounded">MEDIO</span>
              <p className="text-white/70 text-sm mt-2">Service Account JSON</p>
            </div>
          </ClickableInfo>

          <ClickableInfo
            title="Gmail - Configuración Completa"
            content={
              <div>
                <h4>Opción 1: App Password (Recomendado)</h4>
                <ol className="space-y-2">
                  <li><strong>1. Activar 2FA:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Ir a Google Account Security</li>
                      <li>• Activar verificación en 2 pasos</li>
                    </ul>
                  </li>
                  <li><strong>2. Crear App Password:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Buscar "App passwords"</li>
                      <li>• Crear password para "n8n"</li>
                      <li>• Copiar password generado</li>
                    </ul>
                  </li>
                  <li><strong>3. En n8n:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Email: tu@gmail.com</li>
                      <li>• Password: app password (no tu password normal)</li>
                    </ul>
                  </li>
                </ol>
                
                <h4 className="mt-4">Opción 2: OAuth2</h4>
                <p>Más seguro pero más complejo. Requiere configurar OAuth en Google Cloud Console.</p>
                
                <div className="bg-blue-50 p-3 rounded-lg mt-4">
                  <p><strong>⚠️ Importante:</strong> Nunca uses tu contraseña normal de Gmail.</p>
                </div>
              </div>
            }
            className="chatbot-glass-strong p-6 rounded-xl"
          >
            <div className="text-center">
              <Icon name="envelope" className="w-12 h-12 text-red-400 mx-auto mb-3" />
              <h4 className="font-bold text-white">Gmail</h4>
              <span className="text-xs bg-green-600 px-2 py-1 rounded">FÁCIL</span>
              <p className="text-white/70 text-sm mt-2">App Password / OAuth2</p>
            </div>
          </ClickableInfo>

          <ClickableInfo
            title="WhatsApp Business - Configuración"
            content={
              <div>
                <h4>Pasos para WhatsApp Business API:</h4>
                <ol className="space-y-2">
                  <li><strong>1. Meta Developer:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Crear cuenta en developers.facebook.com</li>
                      <li>• Crear nueva App</li>
                      <li>• Agregar producto WhatsApp</li>
                    </ul>
                  </li>
                  <li><strong>2. Configurar número:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Verificar número de teléfono</li>
                      <li>• Obtener Phone Number ID</li>
                      <li>• Generar Access Token</li>
                    </ul>
                  </li>
                  <li><strong>3. En n8n:</strong>
                    <ul className="ml-4 mt-1">
                      <li>• Phone Number ID</li>
                      <li>• Access Token</li>
                      <li>• Webhook URL (para recibir)</li>
                    </ul>
                  </li>
                </ol>
                
                <h4 className="mt-4">Alternativa: WhatsApp Web API</h4>
                <p>Servicios como Baileys o bibliotecas no oficiales (menos confiables pero gratuitas).</p>
                
                <div className="bg-orange-50 p-3 rounded-lg mt-4">
                  <p><strong>💰 Costo:</strong> WhatsApp Business API tiene costos por mensaje enviado.</p>
                </div>
              </div>
            }
            className="chatbot-glass-strong p-6 rounded-xl"
          >
            <div className="text-center">
              <Icon name="comments" className="w-12 h-12 text-green-400 mx-auto mb-3" />
              <h4 className="font-bold text-white">WhatsApp</h4>
              <span className="text-xs bg-red-600 px-2 py-1 rounded">DIFÍCIL</span>
              <p className="text-white/70 text-sm mt-2">Business API Token</p>
            </div>
          </ClickableInfo>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="key" className="w-5 h-5 mr-2 text-yellow-400" />
              OpenAI (Fácil)
            </h3>
            
            <div className="space-y-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">1. Ir a platform.openai.com</p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">2. API Keys → Create new</p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">3. Copiar clave (sk-...)</p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">4. Pegar en n8n</p>
              </div>
            </div>
            
            <div className="bg-yellow-500/20 p-3 rounded-lg mt-4">
              <p className="text-yellow-100 text-sm">
                💳 <strong>Requiere:</strong> Tarjeta de crédito para uso
              </p>
            </div>
          </div>

          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="shield" className="w-5 h-5 mr-2 text-green-400" />
              Buenas Prácticas
            </h3>
            
            <div className="space-y-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  ✅ <strong>Nunca compartas</strong> tus API keys
                </p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  ✅ <strong>Usa nombres</strong> descriptivos para credenciales
                </p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  ✅ <strong>Prueba conexión</strong> antes de usar
                </p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  ✅ <strong>Rota claves</strong> regularmente
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-blue-400/30">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            🎯 Orden Recomendado para Aprender
          </h3>
          
          <div className="flex items-center justify-between">
            <div className="text-center">
              <div className="w-12 h-12 bg-green-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">1</span>
              </div>
              <p className="text-white font-medium">Gmail</p>
              <p className="text-white/70 text-xs">App Password</p>
            </div>
            
            <Icon name="arrow-right" className="w-6 h-6 text-gray-400" />
            
            <div className="text-center">
              <div className="w-12 h-12 bg-blue-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">2</span>
              </div>
              <p className="text-white font-medium">Google Sheets</p>
              <p className="text-white/70 text-xs">Service Account</p>
            </div>
            
            <Icon name="arrow-right" className="w-6 h-6 text-gray-400" />
            
            <div className="text-center">
              <div className="w-12 h-12 bg-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">3</span>
              </div>
              <p className="text-white font-medium">OpenAI</p>
              <p className="text-white/70 text-xs">API Key</p>
            </div>
            
            <Icon name="arrow-right" className="w-6 h-6 text-gray-400" />
            
            <div className="text-center">
              <div className="w-12 h-12 bg-orange-500/30 rounded-full flex items-center justify-center mx-auto mb-2">
                <span className="text-white font-bold">4</span>
              </div>
              <p className="text-white font-medium">WhatsApp</p>
              <p className="text-white/70 text-xs">Business API</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 9: Proyecto Práctico 1 - Email Automático
  {
    id: 9,
    type: 'content',
    title: 'Proyecto Práctico 1: Email Automático',
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <div className="chatbot-glass-strong p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">📧 Tu Primer Workflow Real</h3>
            <p className="text-white/80">Responder emails automáticamente y guardar log</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="target" className="w-6 h-6 mr-3 text-green-400" />
              Objetivo del Proyecto
            </h3>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">¿Qué vamos a hacer?</h4>
                <p className="text-white/80 text-sm">
                  Cuando llegue un email con "pedido" en el asunto, responder automáticamente y guardar los datos en Google Sheets
                </p>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-medium mb-2">¿Por qué es útil?</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Respuesta inmediata 24/7</li>
                  <li>• Base de datos automática</li>
                  <li>• Reduce trabajo manual</li>
                  <li>• Mejora experiencia cliente</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="list-ol" className="w-6 h-6 mr-3 text-blue-400" />
              Nodos Necesarios
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center p-3 bg-green-500/20 rounded-lg">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <Icon name="play" className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Gmail Trigger</p>
                  <p className="text-white/70 text-xs">Detecta emails nuevos</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-blue-500/20 rounded-lg">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <Icon name="question" className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">IF Node</p>
                  <p className="text-white/70 text-xs">¿Contiene "pedido"?</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-purple-500/20 rounded-lg">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <Icon name="envelope" className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Gmail Send</p>
                  <p className="text-white/70 text-xs">Envía respuesta</p>
                </div>
              </div>
              
              <div className="flex items-center p-3 bg-orange-500/20 rounded-lg">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <Icon name="table" className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-medium">Google Sheets</p>
                  <p className="text-white/70 text-xs">Guarda registro</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chatbot-glass-strong p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            📋 Paso a Paso Detallado
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-400">
                <h4 className="text-white font-bold mb-2">PASO 1: Gmail Trigger</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Agregar Gmail Trigger</li>
                  <li>• Configurar credenciales</li>
                  <li>• Poll: Every 1 minute</li>
                  <li>• Filter: is:unread</li>
                  <li>• Probar ejecución</li>
                </ul>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="text-white font-bold mb-2">PASO 2: IF Node</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Condition: String</li>
                  <li>• Value 1: {`{{ $json["subject"] }}`}</li>
                  <li>• Operation: contains</li>
                  <li>• Value 2: "pedido"</li>
                  <li>• Probar con email real</li>
                </ul>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-purple-500/20 p-4 rounded-lg border-l-4 border-purple-400">
                <h4 className="text-white font-bold mb-2">PASO 3: Gmail Send</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• To: {`{{ $json["from"]["value"][0]["address"] }}`}</li>
                  <li>• Subject: "RE: {`{{ $json["subject"] }}`}"</li>
                  <li>• Message: Plantilla de respuesta</li>
                  <li>• Conectar desde IF → True</li>
                </ul>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg border-l-4 border-orange-400">
                <h4 className="text-white font-bold mb-2">PASO 4: Google Sheets</h4>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Operation: Append</li>
                  <li>• Document ID: URL de tu sheet</li>
                  <li>• Columns: Fecha, De, Asunto</li>
                  <li>• Conectar en paralelo con Gmail</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="code" className="w-5 h-5 mr-2 text-purple-400" />
              Plantilla de Email
            </h3>
            
            <div className="bg-black/30 p-4 rounded-lg">
              <pre className="text-green-300 text-sm">
{`Hola,

Hemos recibido tu pedido correctamente.

Número de orden: #{{ Math.floor(Math.random() * 10000) }}
Asunto: {{ $node["Gmail Trigger"].json["subject"] }}

Te contactaremos pronto con los detalles.

Gracias por tu compra!

Saludos,
Equipo de Ventas`}
              </pre>
            </div>
          </div>

          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="table" className="w-5 h-5 mr-2 text-green-400" />
              Estructura Google Sheets
            </h3>
            
            <div className="bg-white/10 p-4 rounded-lg">
              <table className="w-full text-sm text-white">
                <thead className="bg-green-500/20">
                  <tr>
                    <th className="p-2 text-left">Fecha</th>
                    <th className="p-2 text-left">De</th>
                    <th className="p-2 text-left">Asunto</th>
                  </tr>
                </thead>
                <tbody className="text-white/80">
                  <tr className="border-b border-white/20">
                    <td className="p-2">{`{{ $now }}`}</td>
                    <td className="p-2">{`{{ $json["from"] }}`}</td>
                    <td className="p-2">{`{{ $json["subject"] }}`}</td>
                  </tr>
                </tbody>
              </table>
            </div>
            
            <div className="bg-yellow-500/20 p-3 rounded-lg mt-4">
              <p className="text-yellow-100 text-sm">
                💡 <strong>Tip:</strong> Crea las columnas antes en Google Sheets
              </p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 10: Proyecto Práctico 2 - WhatsApp Bot
  {
    id: 10,
    type: 'content',
    title: 'Proyecto Práctico 2: WhatsApp Bot con IA',
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <div className="chatbot-glass-strong p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">🤖 Bot Inteligente de WhatsApp</h3>
            <p className="text-white/80">Responde mensajes automáticamente usando IA</p>
          </div>
        </div>

        <div className="chatbot-glass-strong p-6 rounded-xl">
          <div className="text-center">
            <h4 className="text-white mb-4">🤖 Demo de Workflow</h4>
            <p className="text-white/80">Simulación de WhatsApp Bot con IA</p>
            <div className="bg-purple-500/20 p-4 rounded-lg mt-4">
              <p className="text-purple-100 text-sm">
                💡 Aquí irá la demo completa del workflow de WhatsApp Bot
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="rocket" className="w-6 h-6 mr-3 text-purple-400" />
              Funcionalidades del Bot
            </h3>
            
            <div className="space-y-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <h4 className="text-white font-medium mb-1">🧠 IA Conversacional</h4>
                <p className="text-white/70 text-sm">Responde preguntas naturalmente usando ChatGPT</p>
              </div>
              
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <h4 className="text-white font-medium mb-1">📊 Base de Conocimiento</h4>
                <p className="text-white/70 text-sm">Guarda todas las conversaciones en Google Sheets</p>
              </div>
              
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <h4 className="text-white font-medium mb-1">⚡ Tiempo Real</h4>
                <p className="text-white/70 text-sm">Respuesta inmediata 24/7</p>
              </div>
              
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <h4 className="text-white font-medium mb-1">🎯 Contextual</h4>
                <p className="text-white/70 text-sm">Recuerda información del cliente</p>
              </div>
            </div>
          </div>

          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="cogs" className="w-6 h-6 mr-3 text-blue-400" />
              Arquitectura del Bot
            </h3>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-white text-sm">WhatsApp Trigger</span>
                </div>
                <Icon name="arrow-right" className="w-4 h-4 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                  <span className="text-white text-sm">Procesar Mensaje</span>
                </div>
                <Icon name="arrow-right" className="w-4 h-4 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  <span className="text-white text-sm">OpenAI (ChatGPT)</span>
                </div>
                <Icon name="arrow-right" className="w-4 h-4 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-orange-500 rounded-full mr-3"></div>
                  <span className="text-white text-sm">Guardar en Sheets</span>
                </div>
                <Icon name="split" className="w-4 h-4 text-gray-400" />
              </div>
              
              <div className="flex items-center justify-between p-3 bg-white/10 rounded-lg">
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  <span className="text-white text-sm">Responder WhatsApp</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="chatbot-glass-strong p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🔧 Configuración Técnica
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-white font-bold mb-4">WhatsApp Trigger Setup</h4>
              <div className="bg-black/30 p-4 rounded-lg">
                <pre className="text-green-300 text-sm">
{`Updates to listen for: message
Additional Fields:
- Include webhook validation
- Message filters: text
- Exclude: status messages`}
                </pre>
              </div>
            </div>
            
            <div>
              <h4 className="text-white font-bold mb-4">OpenAI Configuration</h4>
              <div className="bg-black/30 p-4 rounded-lg">
                <pre className="text-green-300 text-sm">
{`Resource: Chat
Model: gpt-3.5-turbo
Max Tokens: 150
Temperature: 0.7
System Message: "Eres un asistente útil
de atención al cliente. Responde en 
español de forma amigable y concisa."`}
                </pre>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="database" className="w-5 h-5 mr-2 text-blue-400" />
              Logs en Sheets
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="bg-white/10 p-2 rounded">
                <span className="text-white/80">Fecha: {`{{ $now }}`}</span>
              </div>
              <div className="bg-white/10 p-2 rounded">
                <span className="text-white/80">Usuario: {`{{ $json.from }}`}</span>
              </div>
              <div className="bg-white/10 p-2 rounded">
                <span className="text-white/80">Mensaje: {`{{ $json.body }}`}</span>
              </div>
              <div className="bg-white/10 p-2 rounded">
                <span className="text-white/80">Respuesta IA: {`{{ $node["OpenAI"].json }}`}</span>
              </div>
            </div>
          </div>

          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="exclamation-triangle" className="w-5 h-5 mr-2 text-yellow-400" />
              Consideraciones
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="bg-red-500/20 p-2 rounded">
                <span className="text-white/80">💳 OpenAI: Costo por token</span>
              </div>
              <div className="bg-orange-500/20 p-2 rounded">
                <span className="text-white/80">⏱️ WhatsApp: Límites de velocidad</span>
              </div>
              <div className="bg-yellow-500/20 p-2 rounded">
                <span className="text-white/80">🔒 Seguridad: Validar webhooks</span>
              </div>
              <div className="bg-blue-500/20 p-2 rounded">
                <span className="text-white/80">📊 Monitoreo: Logs detallados</span>
              </div>
            </div>
          </div>

          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="chart-line" className="w-5 h-5 mr-2 text-green-400" />
              Mejoras Futuras
            </h3>
            
            <div className="space-y-2 text-sm">
              <div className="bg-green-500/20 p-2 rounded">
                <span className="text-white/80">🧠 RAG: Base de conocimiento</span>
              </div>
              <div className="bg-blue-500/20 p-2 rounded">
                <span className="text-white/80">👤 CRM: Integrar datos cliente</span>
              </div>
              <div className="bg-purple-500/20 p-2 rounded">
                <span className="text-white/80">📊 Analytics: Métricas avanzadas</span>
              </div>
              <div className="bg-orange-500/20 p-2 rounded">
                <span className="text-white/80">🎯 Intent: Clasificar consultas</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 11: Buenas Prácticas y Debugging
  {
    id: 11,
    type: 'content',
    title: 'Buenas Prácticas y Debugging',
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <div className="chatbot-glass-strong p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">🛠️ Tips de Experto</h3>
            <p className="text-white/80">Errores comunes y cómo evitarlos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="check" className="w-6 h-6 mr-3 text-green-400" />
              Buenas Prácticas
            </h3>
            
            <div className="space-y-4">
              <div className="bg-green-500/20 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2 flex items-center">
                  <Icon name="play" className="w-4 h-4 mr-2" />
                  Ejecución Paso a Paso
                </h4>
                <p className="text-white/80 text-sm">
                  Siempre ejecuta cada nodo individualmente antes de conectar todo el workflow
                </p>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2 flex items-center">
                  <Icon name="tag" className="w-4 h-4 mr-2" />
                  Nombres Descriptivos
                </h4>
                <p className="text-white/80 text-sm">
                  Usa nombres claros para nodos: "Gmail - Detectar Pedidos", "Sheets - Guardar Cliente"
                </p>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2 flex items-center">
                  <Icon name="shield-alt" className="w-4 h-4 mr-2" />
                  Manejo de Errores
                </h4>
                <p className="text-white/80 text-sm">
                  Activa "Continue on Fail" en nodos críticos y agrega nodos de error handling
                </p>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg">
                <h4 className="text-white font-bold mb-2 flex items-center">
                  <Icon name="eye" className="w-4 h-4 mr-2" />
                  Logs Detallados
                </h4>
                <p className="text-white/80 text-sm">
                  Guarda logs de todas las ejecuciones para debuggear y auditar
                </p>
              </div>
            </div>
          </div>

          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-xl font-bold text-white mb-4 flex items-center">
              <Icon name="exclamation-triangle" className="w-6 h-6 mr-3 text-red-400" />
              Errores Más Comunes
            </h3>
            
            <div className="space-y-4">
              <div className="bg-red-500/20 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="text-white font-bold mb-2">❌ Credenciales Incorrectas</h4>
                <p className="text-white/80 text-sm">
                  <strong>Solución:</strong> Verificar API keys, tokens y permisos
                </p>
              </div>
              
              <div className="bg-orange-500/20 p-4 rounded-lg border-l-4 border-orange-400">
                <h4 className="text-white font-bold mb-2">❌ Sintaxis de Expresiones</h4>
                <p className="text-white/80 text-sm">
                  <strong>Solución:</strong> Usar {`{{ $json["campo"] }}`} correctamente
                </p>
              </div>
              
              <div className="bg-yellow-500/20 p-4 rounded-lg border-l-4 border-yellow-400">
                <h4 className="text-white font-bold mb-2">❌ Rate Limits</h4>
                <p className="text-white/80 text-sm">
                  <strong>Solución:</strong> Agregar delays entre requests masivos
                </p>
              </div>
              
              <div className="bg-blue-500/20 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="text-white font-bold mb-2">❌ Data Mapping</h4>
                <p className="text-white/80 text-sm">
                  <strong>Solución:</strong> Revisar estructura de datos en cada nodo
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="chatbot-glass-strong p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🔍 Herramientas de Debugging
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                <Icon name="bug" className="w-8 h-8 text-blue-400" />
              </div>
              <h4 className="text-white font-bold mb-2">Execution Log</h4>
              <p className="text-white/70 text-sm">
                Revisa cada ejecución, datos de entrada y salida de cada nodo
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                <Icon name="play" className="w-8 h-8 text-green-400" />
              </div>
              <h4 className="text-white font-bold mb-2">Execute Node</h4>
              <p className="text-white/70 text-sm">
                Ejecuta un solo nodo para probar su funcionamiento individualmente
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                <Icon name="code" className="w-8 h-8 text-purple-400" />
              </div>
              <h4 className="text-white font-bold mb-2">JSON View</h4>
              <p className="text-white/70 text-sm">
                Inspecciona la estructura exacta de los datos en formato JSON
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="lightbulb" className="w-5 h-5 mr-2 text-yellow-400" />
              Tips de Performance
            </h3>
            
            <div className="space-y-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  ✅ <strong>Batching:</strong> Procesa múltiples items juntos
                </p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  ✅ <strong>Caching:</strong> Evita llamadas API repetitivas
                </p>
              </div>
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  ✅ <strong>Filtros:</strong> Filtra datos temprano en el pipeline
                </p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  ✅ <strong>Timeouts:</strong> Configura timeouts apropiados
                </p>
              </div>
            </div>
          </div>

          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="shield" className="w-5 h-5 mr-2 text-green-400" />
              Seguridad
            </h3>
            
            <div className="space-y-3">
              <div className="bg-red-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  🔒 <strong>Never log</strong> API keys o passwords
                </p>
              </div>
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  🔒 <strong>Webhook validation:</strong> Valida requests entrantes
                </p>
              </div>
              <div className="bg-yellow-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  🔒 <strong>Rotate keys:</strong> Cambia credenciales regularmente
                </p>
              </div>
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white/80 text-sm">
                  🔒 <strong>Environment variables:</strong> Para datos sensibles
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-6 rounded-xl border border-blue-400/30">
          <h3 className="text-lg font-bold text-white mb-4 text-center">
            🎯 Checklist Pre-Producción
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-white/80 text-sm">Todas las credenciales configuradas</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-white/80 text-sm">Error handling implementado</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-white/80 text-sm">Logs configurados apropiadamente</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-white/80 text-sm">Pruebas con datos reales</span>
              </div>
            </div>
            
            <div className="space-y-2">
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-white/80 text-sm">Rate limits considerados</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-white/80 text-sm">Webhooks validados</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-white/80 text-sm">Monitoreo configurado</span>
              </div>
              <div className="flex items-center">
                <input type="checkbox" className="mr-3" />
                <span className="text-white/80 text-sm">Backup/rollback plan</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 12: Recursos y Próximos Pasos
  {
    id: 12,
    type: 'content',
    title: 'Recursos y Próximos Pasos',
    content: (
      <div className="space-y-8">
        <div className="text-center">
          <div className="chatbot-glass-strong p-6 rounded-xl inline-block">
            <h3 className="text-2xl font-bold text-white mb-2">🚀 Tu Viaje con n8n Continúa</h3>
            <p className="text-white/80">Recursos, comunidad y próximos pasos</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="book" className="w-5 h-5 mr-2 text-blue-400" />
              Documentación Oficial
            </h3>
            
            <div className="space-y-3">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">📖 docs.n8n.io</p>
                <p className="text-white/70 text-xs">Documentación completa</p>
              </div>
              
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">🎓 n8n.io/academy</p>
                <p className="text-white/70 text-xs">Cursos estructurados</p>
              </div>
              
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">🔧 n8n.io/templates</p>
                <p className="text-white/70 text-xs">Workflows pre-hechos</p>
              </div>
            </div>
          </div>

          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="users" className="w-5 h-5 mr-2 text-green-400" />
              Comunidad
            </h3>
            
            <div className="space-y-3">
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">💬 Discord</p>
                <p className="text-white/70 text-xs">Chat en tiempo real</p>
              </div>
              
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">💼 Reddit r/n8n</p>
                <p className="text-white/70 text-xs">Discusiones y tips</p>
              </div>
              
              <div className="bg-gray-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">🐙 GitHub</p>
                <p className="text-white/70 text-xs">Issues y contribuciones</p>
              </div>
            </div>
          </div>

          <div className="chatbot-glass-strong p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="video" className="w-5 h-5 mr-2 text-red-400" />
              Video Tutoriales
            </h3>
            
            <div className="space-y-3">
              <div className="bg-red-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">🎥 YouTube n8n</p>
                <p className="text-white/70 text-xs">Canal oficial</p>
              </div>
              
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">📹 Twitch Streams</p>
                <p className="text-white/70 text-xs">Live coding sessions</p>
              </div>
              
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">🎬 Community Videos</p>
                <p className="text-white/70 text-xs">Tutoriales de usuarios</p>
              </div>
            </div>
          </div>
        </div>

        <div className="chatbot-glass-strong p-8 rounded-xl">
          <h3 className="text-xl font-bold text-white mb-6 text-center">
            🎯 Tu Roadmap de Aprendizaje
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-green-400/30">
                <span className="text-2xl">🌱</span>
              </div>
              <h4 className="text-white font-bold mb-3">Principiante (0-2 meses)</h4>
              <div className="text-left space-y-2">
                <div className="bg-green-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">✅ Gmail + Sheets básico</span>
                </div>
                <div className="bg-green-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">✅ WhatsApp notificaciones</span>
                </div>
                <div className="bg-green-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">✅ Triggers y filtros</span>
                </div>
                <div className="bg-green-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">✅ 5-10 workflows simples</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-blue-400/30">
                <span className="text-2xl">🚀</span>
              </div>
              <h4 className="text-white font-bold mb-3">Intermedio (2-6 meses)</h4>
              <div className="text-left space-y-2">
                <div className="bg-blue-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">⚡ OpenAI integration</span>
                </div>
                <div className="bg-blue-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">⚡ Complex IF conditions</span>
                </div>
                <div className="bg-blue-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">⚡ Error handling</span>
                </div>
                <div className="bg-blue-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">⚡ Custom functions</span>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mx-auto mb-4 border border-purple-400/30">
                <span className="text-2xl">🏆</span>
              </div>
              <h4 className="text-white font-bold mb-3">Avanzado (6+ meses)</h4>
              <div className="text-left space-y-2">
                <div className="bg-purple-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">🔥 Custom nodes</span>
                </div>
                <div className="bg-purple-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">🔥 Multi-tenant setups</span>
                </div>
                <div className="bg-purple-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">🔥 Enterprise workflows</span>
                </div>
                <div className="bg-purple-500/20 p-2 rounded text-sm">
                  <span className="text-white/80">🔥 Community contributions</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="trophy" className="w-5 h-5 mr-2 text-yellow-400" />
              Proyectos Desafío
            </h3>
            
            <div className="space-y-3">
              <div className="bg-yellow-500/20 p-3 rounded-lg border-l-4 border-yellow-400">
                <p className="text-white font-medium text-sm">🏆 Social Media Manager</p>
                <p className="text-white/70 text-xs">AI → Multiple platforms → Analytics</p>
              </div>
              
              <div className="bg-green-500/20 p-3 rounded-lg border-l-4 border-green-400">
                <p className="text-white font-medium text-sm">🏆 E-commerce Pipeline</p>
                <p className="text-white/70 text-xs">Orders → Inventory → CRM → Support</p>
              </div>
              
              <div className="bg-blue-500/20 p-3 rounded-lg border-l-4 border-blue-400">
                <p className="text-white font-medium text-sm">🏆 Business Intelligence</p>
                <p className="text-white/70 text-xs">Multi-API → Analysis → Dashboard</p>
              </div>
              
              <div className="bg-purple-500/20 p-3 rounded-lg border-l-4 border-purple-400">
                <p className="text-white font-medium text-sm">🏆 Custom Node Development</p>
                <p className="text-white/70 text-xs">Create & publish your own node</p>
              </div>
            </div>
          </div>

          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold text-white mb-4 flex items-center">
              <Icon name="lightbulb" className="w-5 h-5 mr-2 text-orange-400" />
              Ideas de Negocio
            </h3>
            
            <div className="space-y-3">
              <div className="bg-green-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">💼 Consultoría n8n</p>
                <p className="text-white/70 text-xs">Implementar workflows para empresas</p>
              </div>
              
              <div className="bg-blue-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">🛒 Templates Premium</p>
                <p className="text-white/70 text-xs">Vender workflows especializados</p>
              </div>
              
              <div className="bg-purple-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">🎓 Cursos/Coaching</p>
                <p className="text-white/70 text-xs">Enseñar n8n a otros</p>
              </div>
              
              <div className="bg-orange-500/20 p-3 rounded-lg">
                <p className="text-white font-medium text-sm">🔧 SaaS Integrations</p>
                <p className="text-white/70 text-xs">Servicios de automatización</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-8 rounded-xl border border-green-400/30">
          <h3 className="text-2xl font-bold text-white mb-4 text-center">
            🎉 ¡Felicitaciones!
          </h3>
          
          <div className="text-center space-y-4">
            <p className="text-xl text-white/90">
              Has completado el curso completo de n8n
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-2xl mb-1">✅</p>
                <p className="text-white/80 text-sm">Conceptos básicos</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-2xl mb-1">🔧</p>
                <p className="text-white/80 text-sm">Configuración</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-2xl mb-1">🚀</p>
                <p className="text-white/80 text-sm">Proyectos reales</p>
              </div>
              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-2xl mb-1">🛠️</p>
                <p className="text-white/80 text-sm">Buenas prácticas</p>
              </div>
            </div>
            
            <p className="text-white/80 mt-6">
              Ahora tienes las herramientas para automatizar prácticamente cualquier proceso. 
              <br />
              <strong>¡El límite es tu imaginación!</strong>
            </p>
          </div>
        </div>
      </div>
    )
  }
];

export { n8nSlides };
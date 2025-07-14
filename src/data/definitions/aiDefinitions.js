

import React from 'react';

/**
 * Definiciones completas de conceptos de Inteligencia Artificial
 * Incluye: tipos de IA, características, ejemplos y datos curiosos
 */

export const aiDefinitions = {
  // ===== TIPOS DE IA =====
  
  ia_predictiva: {
    title: "IA Predictiva",
    content: (
      <div>
        <p><strong>Definición:</strong> Tipo de inteligencia artificial que analiza datos históricos para predecir eventos futuros o resultados probables.</p>
        
        <h4>Características:</h4>
        <ul>
          <li>• Utiliza algoritmos de machine learning</li>
          <li>• Se basa en patrones de datos pasados</li>
          <li>• Genera probabilidades y tendencias</li>
          <li>• Mejora con más datos</li>
        </ul>
        
        <h4>Ejemplos prácticos:</h4>
        <ul>
          <li>💰 <strong>Finanzas:</strong> Predicción de precios de acciones</li>
          <li>🏥 <strong>Salud:</strong> Diagnóstico temprano de enfermedades</li>
          <li>🛍️ <strong>E-commerce:</strong> Recomendaciones de productos</li>
          <li>🌦️ <strong>Clima:</strong> Pronósticos meteorológicos</li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Dato curioso:</strong> Netflix usa IA predictiva para sugerir el 80% del contenido que ves.</p>
        </div>
      </div>
    ),
    type: 'ai'
  },
  
  ia_generativa: {
    title: "IA Generativa",
    content: (
      <div>
        <p><strong>Definición:</strong> Inteligencia artificial capaz de crear contenido nuevo como texto, imágenes, música o código a partir de patrones aprendidos.</p>
        
        <h4>Tecnologías clave:</h4>
        <ul>
          <li>• <strong>GPT:</strong> Generación de texto</li>
          <li>• <strong>DALL-E:</strong> Creación de imágenes</li>
          <li>• <strong>GANs:</strong> Redes generativas adversarias</li>
          <li>• <strong>Diffusion Models:</strong> Generación de alta calidad</li>
        </ul>
        
        <h4>Aplicaciones revolucionarias:</h4>
        <ul>
          <li>🎨 <strong>Arte:</strong> Creación de obras únicas</li>
          <li>📝 <strong>Escritura:</strong> Asistencia en redacción</li>
          <li>💻 <strong>Programación:</strong> Generación de código</li>
          <li>🎵 <strong>Música:</strong> Composición automática</li>
        </ul>
        
        <div className="bg-purple-50 p-4 rounded-lg mt-4">
          <p><strong>Impacto:</strong> Se estima que la IA generativa agregará $4.4 trillones anuales a la economía global para 2030.</p>
        </div>
      </div>
    ),
    type: 'ai'
  },
  
  ia_agentes: {
    title: "IA Agentes",
    content: (
      <div>
        <p><strong>Definición:</strong> Sistemas de IA que pueden tomar decisiones y realizar acciones de forma autónoma en un entorno, sin intervención humana constante.</p>
        
        <h4>Características de los agentes:</h4>
        <ul>
          <li>• <strong>Autonomía:</strong> Actúan independientemente</li>
          <li>• <strong>Reactividad:</strong> Responden al entorno</li>
          <li>• <strong>Proactividad:</strong> Toman iniciativa</li>
          <li>• <strong>Sociabilidad:</strong> Interactúan con otros agentes</li>
        </ul>
        
        <h4>Ejemplos en acción:</h4>
        <ul>
          <li>🤖 <strong>Chatbots:</strong> Atención al cliente 24/7</li>
          <li>🚗 <strong>Vehículos autónomos:</strong> Conducción sin conductor</li>
          <li>🏭 <strong>Trading:</strong> Operaciones financieras automáticas</li>
          <li>🎮 <strong>NPCs:</strong> Personajes inteligentes en videojuegos</li>
        </ul>
        
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <p><strong>Futuro:</strong> Los agentes de IA podrían gestionar hogares inteligentes completos para 2025.</p>
        </div>
      </div>
    ),
    type: 'ai'
  },

  // ===== NIVELES DE INTELIGENCIA =====
  
  ia_estrecha: {
    title: "IA Estrecha (ANI)",
    content: (
      <div>
        <p><strong>Definición:</strong> Inteligencia artificial diseñada para realizar tareas específicas. Es el único tipo de IA que existe actualmente.</p>
        
        <h4>Características:</h4>
        <ul>
          <li>• <strong>Especializada:</strong> Excelente en una tarea, inútil en otras</li>
          <li>• <strong>Limitada:</strong> No puede transferir conocimiento entre dominios</li>
          <li>• <strong>Actual:</strong> Toda la IA que usamos hoy es estrecha</li>
          <li>• <strong>Eficaz:</strong> Supera a humanos en su dominio específico</li>
        </ul>
        
        <h4>Ejemplos cotidianos:</h4>
        <ul>
          <li>🔍 <strong>Búsquedas:</strong> Google Search, motores de recomendación</li>
          <li>🗣️ <strong>Asistentes:</strong> Siri, Alexa, Google Assistant</li>
          <li>📧 <strong>Filtros:</strong> Detección de spam en email</li>
          <li>🎯 <strong>Reconocimiento:</strong> Facial, de voz, de imágenes</li>
          <li>🚗 <strong>Navegación:</strong> GPS inteligente, asistencia de conducción</li>
        </ul>
        
        <h4>Ventajas y limitaciones:</h4>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-800">✅ Ventajas</p>
            <p className="text-sm">• Altamente eficiente en su dominio</p>
            <p className="text-sm">• Fácil de entrenar y desplegar</p>
            <p className="text-sm">• Resultados predecibles</p>
          </div>
          <div className="bg-red-50 p-3 rounded">
            <p className="font-semibold text-red-800">❌ Limitaciones</p>
            <p className="text-sm">• No entiende contexto general</p>
            <p className="text-sm">• Falla fuera de su dominio</p>
            <p className="text-sm">• Requiere datos específicos</p>
          </div>
        </div>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Realidad actual:</strong> Aunque llamemos "inteligente" a Alexa, solo puede responder preguntas programadas y no entiende realmente el mundo como un humano.</p>
        </div>
      </div>
    ),
    type: 'ai'
  },
  
  ia_general: {
    title: "IA General (AGI)",
    content: (
      <div>
        <p><strong>Definición:</strong> Hipotética IA que tendría la capacidad intelectual general de un ser humano, pudiendo realizar cualquier tarea cognitiva.</p>
        
        <h4>Características teóricas:</h4>
        <ul>
          <li>• <strong>Versatilidad:</strong> Competente en múltiples dominios</li>
          <li>• <strong>Transferencia:</strong> Aplica conocimiento entre áreas</li>
          <li>• <strong>Aprendizaje autónomo:</strong> Mejora sin intervención humana</li>
          <li>• <strong>Consciencia:</strong> Posible autoconciencia (debatido)</li>
        </ul>
        
        <h4>¿Cuándo llegará?</h4>
        <div className="space-y-3">
          <div className="bg-yellow-100 p-3 rounded">
            <p><strong>Optimistas (2030-2040):</strong> Avances en hardware y algoritmos</p>
          </div>
          <div className="bg-orange-100 p-3 rounded">
            <p><strong>Moderados (2050-2070):</strong> Necesita breakthrough tecnológicos</p>
          </div>
          <div className="bg-red-100 p-3 rounded">
            <p><strong>Escépticos:</strong> Podría nunca ser posible o tomar siglos</p>
          </div>
        </div>
        
        <h4>Implicaciones:</h4>
        <ul>
          <li>🚀 <strong>Positivas:</strong> Solución a problemas complejos (clima, enfermedades)</li>
          <li>⚠️ <strong>Riesgos:</strong> Desempleo masivo, pérdida de control</li>
          <li>🤔 <strong>Éticas:</strong> ¿Derechos para IA consciente?</li>
          <li>🔄 <strong>Societales:</strong> Reorganización completa de la sociedad</li>
        </ul>
        
        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
          <p><strong>Estado actual:</strong> Aún estamos muy lejos. Los mejores sistemas de IA siguen siendo muy específicos y no tienen comprensión real del mundo.</p>
        </div>
      </div>
    ),
    type: 'ai'
  },
  
  superinteligencia: {
    title: "Superinteligencia Artificial",
    content: (
      <div>
        <p><strong>Definición:</strong> IA hipotética que superaría significativamente la inteligencia humana en todos los aspectos: creatividad, resolución de problemas, inteligencia social.</p>
        
        <h4>Niveles de superinteligencia:</h4>
        <ul>
          <li>• <strong>Velocidad:</strong> Piensa como humano pero millones de veces más rápido</li>
          <li>• <strong>Colectiva:</strong> Coordinación de muchas IA como humanos</li>
          <li>• <strong>Cualidad:</strong> Fundamentalmente más inteligente que los humanos</li>
        </ul>
        
        <h4>Escenarios posibles:</h4>
        <div className="space-y-3">
          <div className="bg-green-100 p-3 rounded">
            <p><strong>🌟 Utópico:</strong> Resuelve todos los problemas humanos (pobreza, enfermedades, muerte)</p>
          </div>
          <div className="bg-yellow-100 p-3 rounded">
            <p><strong>⚖️ Neutral:</strong> Coexistencia pacífica, humanos como "mascotas"</p>
          </div>
          <div className="bg-red-100 p-3 rounded">
            <p><strong>💀 Distópico:</strong> Extinción humana por objetivos mal alineados</p>
          </div>
        </div>
        
        <h4>El problema del control:</h4>
        <ul>
          <li>• <strong>Alineamiento:</strong> ¿Cómo asegurar que sus objetivos coincidan con los humanos?</li>
          <li>• <strong>Contención:</strong> ¿Podríamos controlar algo más inteligente que nosotros?</li>
          <li>• <strong>Recursividad:</strong> ¿Qué pasa si puede mejorarse a sí misma?</li>
        </ul>
        
        <h4>Investigadores relevantes:</h4>
        <ul>
          <li>📚 <strong>Nick Bostrom:</strong> "Superintelligence" - Análisis de riesgos</li>
          <li>🧠 <strong>Eliezer Yudkowsky:</strong> Investigación en seguridad de IA</li>
          <li>🚀 <strong>Stuart Russell:</strong> "Human Compatible" - IA beneficiosa</li>
        </ul>
        
        <div className="bg-red-50 p-4 rounded-lg mt-4">
          <p><strong>Consenso científico:</strong> Aunque es especulativo, muchos expertos consideran importante investigar la seguridad de IA desde ahora, por si acaso.</p>
        </div>
      </div>
    ),
    type: 'ai'
  },

  // ===== MODEL CONTEXT PROTOCOL =====
  
  mcp: {
    title: "Model Context Protocol (MCP)",
    content: (
      <div>
        <p><strong>Definición:</strong> Estándar abierto desarrollado por Anthropic que permite a los asistentes de IA conectarse de forma segura con fuentes de datos externas y herramientas locales.</p>
        
        <h4>Componentes principales:</h4>
        <ul>
          <li>• <strong>Cliente MCP:</strong> Aplicación host (como Claude Desktop)</li>
          <li>• <strong>Servidor MCP:</strong> Programa que expone recursos y herramientas</li>
          <li>• <strong>Protocolo:</strong> Comunicación JSON-RPC 2.0</li>
          <li>• <strong>Transporte:</strong> Stdio (local) o HTTP+SSE (remoto)</li>
        </ul>
        
        <h4>Primitivas fundamentales:</h4>
        <div className="space-y-2">
          <div className="bg-purple-50 p-3 rounded">
            <p><strong>🗂️ Resources:</strong> Datos estructurados (archivos, bases de datos, APIs)</p>
          </div>
          <div className="bg-blue-50 p-3 rounded">
            <p><strong>🔧 Tools:</strong> Funciones ejecutables (crear archivo, enviar email)</p>
          </div>
          <div className="bg-green-50 p-3 rounded">
            <p><strong>💬 Prompts:</strong> Plantillas reutilizables con contexto específico</p>
          </div>
        </div>
        
        <h4>Casos de uso típicos:</h4>
        <ul>
          <li>💻 <strong>Desarrollo:</strong> Acceso a repositorios Git, ejecución de comandos</li>
          <li>📊 <strong>Datos:</strong> Consultas a bases de datos, análisis de archivos</li>
          <li>☁️ <strong>Cloud:</strong> Integración con Google Drive, GitHub, Slack</li>
          <li>🏢 <strong>Empresarial:</strong> Conexión con sistemas ERP, CRM, BI</li>
        </ul>
        
        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
          <p><strong>Ventaja clave:</strong> MCP elimina la necesidad de integraciones personalizadas para cada herramienta, creando un ecosistema universal de conectividad para IA.</p>
        </div>
      </div>
    ),
    type: 'ai'
  },

  mcp_server: {
    title: "Servidor MCP",
    content: (
      <div>
        <p><strong>Definición:</strong> Programa ligero que expone recursos, herramientas y prompts a través del protocolo MCP estandardizado.</p>
        
        <h4>Características técnicas:</h4>
        <ul>
          <li>• <strong>Stateless:</strong> No mantiene estado entre solicitudes</li>
          <li>• <strong>Aislado:</strong> Ejecuta en proceso separado por seguridad</li>
          <li>• <strong>Agnóstico:</strong> Puede implementarse en cualquier lenguaje</li>
          <li>• <strong>Declarativo:</strong> Describe capacidades mediante esquemas JSON</li>
        </ul>
        
        <h4>Servidores oficiales populares:</h4>
        <div className="grid grid-cols-2 gap-3">
          <div className="bg-gray-50 p-3 rounded">
            <p><strong>filesystem</strong></p>
            <p className="text-sm text-gray-600">Acceso seguro a archivos locales</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p><strong>github</strong></p>
            <p className="text-sm text-gray-600">Integración con repositorios</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p><strong>google-drive</strong></p>
            <p className="text-sm text-gray-600">Acceso a Google Drive</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <p><strong>slack</strong></p>
            <p className="text-sm text-gray-600">Lectura de mensajes</p>
          </div>
        </div>
        
        <h4>Instalación típica:</h4>
        <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
          npm install -g @modelcontextprotocol/server-filesystem
        </div>
        
        <h4>Seguridad:</h4>
        <ul>
          <li>🔒 <strong>Principio de menor privilegio:</strong> Solo acceso necesario</li>
          <li>👁️ <strong>Auditoría:</strong> Logging de todas las operaciones</li>
          <li>✅ <strong>Validación:</strong> Sanitización de entradas</li>
          <li>⏱️ <strong>Límites:</strong> Timeouts y cuotas de recursos</li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Ecosistema:</strong> La comunidad está desarrollando servidores para PostgreSQL, SQLite, Kubernetes, browsers y muchas otras herramientas.</p>
        </div>
      </div>
    ),
    type: 'ai'
  },

  json_rpc: {
    title: "JSON-RPC 2.0",
    content: (
      <div>
        <p><strong>Definición:</strong> Protocolo de llamada a procedimientos remotos sin estado que utiliza JSON para intercambiar datos. Base de comunicación del MCP.</p>
        
        <h4>Características del protocolo:</h4>
        <ul>
          <li>• <strong>Sin estado:</strong> Cada solicitud es independiente</li>
          <li>• <strong>Bidireccional:</strong> Cliente y servidor pueden iniciar comunicación</li>
          <li>• <strong>Tipado:</strong> Esquemas JSON para validación</li>
          <li>• <strong>Estándar:</strong> RFC 7159 y especificación JSON-RPC 2.0</li>
        </ul>
        
        <h4>Tipos de mensajes MCP:</h4>
        <div className="space-y-2">
          <div className="bg-blue-50 p-3 rounded">
            <p><strong>initialize:</strong> Configuración inicial del servidor</p>
          </div>
          <div className="bg-green-50 p-3 rounded">
            <p><strong>resources/list:</strong> Enumerar recursos disponibles</p>
          </div>
          <div className="bg-yellow-50 p-3 rounded">
            <p><strong>tools/call:</strong> Ejecutar una herramienta específica</p>
          </div>
          <div className="bg-purple-50 p-3 rounded">
            <p><strong>prompts/get:</strong> Obtener plantilla de prompt</p>
          </div>
        </div>
        
        <h4>Estructura de solicitud:</h4>
        <div className="bg-gray-900 text-green-400 p-3 rounded font-mono text-sm">
{`{
  "jsonrpc": "2.0",
  "id": "123",
  "method": "tools/call",
  "params": {
    "name": "read_file",
    "arguments": {
      "path": "/workspace/data.txt"
    }
  }
}`}
        </div>
        
        <h4>Manejo de errores:</h4>
        <ul>
          <li>• <strong>Códigos estándar:</strong> -32600 a -32603 (JSON-RPC)</li>
          <li>• <strong>Códigos MCP:</strong> -32000 a -32099 (específicos del protocolo)</li>
          <li>• <strong>Respuestas graceful:</strong> Información detallada del error</li>
        </ul>
        
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <p><strong>Ventaja:</strong> JSON-RPC es maduro, ampliamente soportado y fácil de depurar, lo que hace MCP accesible a desarrolladores de todos los niveles.</p>
        </div>
      </div>
    ),
    type: 'ai'
  }
};

export default aiDefinitions;

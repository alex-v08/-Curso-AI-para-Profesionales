import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';

export const mcpSlides = [
  {
    id: 0,
    type: 'cover',
    title: 'Model Context Protocol (MCP)',
    subtitle: 'El Estándar Universal para Contexto en IA',
    content: (
      <div className="text-center space-y-8">
        <div className="flex justify-center mb-12">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-primary rounded-full blur-xl opacity-30 animate-pulse" />
            <Icon icon="Brain" size={120} className="text-purple-600 relative z-10" />
          </div>
        </div>
        
        <div className="glass-effect rounded-2xl p-8 mx-auto max-w-4xl">
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            Conectando IA con el Mundo Real
          </h3>
          <p className="text-xl text-gray-300 mb-8">
            MCP permite a los asistentes de IA interactuar de forma segura y estandarizada 
            con sistemas locales, APIs y herramientas empresariales.
          </p>
          
          <div className="grid grid-cols-3 gap-6 mb-8">
            <div className="glass-effect rounded-xl p-4">
              <Icon icon="Shield" className="text-green-500 mb-2" size={32} />
              <p className="text-sm font-semibold">Seguro</p>
            </div>
            <div className="glass-effect rounded-xl p-4">
              <Icon icon="Globe" className="text-blue-500 mb-2" size={32} />
              <p className="text-sm font-semibold">Universal</p>
            </div>
            <div className="glass-effect rounded-xl p-4">
              <Icon icon="Zap" className="text-yellow-500 mb-2" size={32} />
              <p className="text-sm font-semibold">Eficiente</p>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            <p>Desarrollado por Anthropic</p>
            <p className="mt-2">Estándar abierto para la industria</p>
          </div>
        </div>
      </div>
    ),
    subsectionTitle: 'Introducción a MCP'
  },
  
  {
    id: 1,
    title: '¿Qué es Model Context Protocol?',
    content: (
      <div className="space-y-6">
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 gradient-text">Definición</h3>
          <p className="text-lg text-gray-300 mb-4">
            <ClickableInfo term="mcp" type="ai">Model Context Protocol (MCP)</ClickableInfo> es un 
            estándar abierto que permite a los asistentes de IA conectarse de forma segura con 
            sistemas externos, proporcionando contexto relevante y capacidades ampliadas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="glass-effect rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-purple-400">
              <Icon icon="Target" className="inline mr-2" />
              Objetivo Principal
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start">
                <Icon icon="CheckCircle" className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Estandarizar la comunicación entre IA y sistemas externos</span>
              </li>
              <li className="flex items-start">
                <Icon icon="CheckCircle" className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Proporcionar acceso seguro a datos y herramientas locales</span>
              </li>
              <li className="flex items-start">
                <Icon icon="CheckCircle" className="text-green-500 mr-2 mt-1 flex-shrink-0" size={20} />
                <span>Facilitar la integración empresarial de asistentes IA</span>
              </li>
            </ul>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              <Icon icon="Layers" className="inline mr-2" />
              Componentes Clave
            </h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                <span className="font-semibold">Cliente MCP:</span>
                <span className="text-gray-400 ml-2">Claude, otros asistentes</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-blue-500 rounded-full mr-3"></div>
                <span className="font-semibold">Servidor MCP:</span>
                <span className="text-gray-400 ml-2">Provee recursos y herramientas</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                <span className="font-semibold">Protocolo:</span>
                <span className="text-gray-400 ml-2">JSON-RPC sobre stdio/SSE</span>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6 bg-gradient-to-r from-purple-900/20 to-blue-900/20">
          <h4 className="text-lg font-semibold mb-3 text-yellow-400">
            <Icon icon="Lightbulb" className="inline mr-2" />
            Dato Clave
          </h4>
          <p className="text-gray-300">
            MCP es un protocolo agnóstico al lenguaje: aunque los ejemplos suelen estar en 
            TypeScript/JavaScript, se puede implementar en Python, Go, Rust, o cualquier 
            lenguaje que soporte JSON-RPC.
          </p>
        </div>
      </div>
    ),
    subsectionTitle: 'Fundamentos de MCP'
  },

  {
    id: 2,
    title: 'Arquitectura de MCP',
    content: (
      <div className="space-y-6">
        <div className="glass-effect rounded-xl p-8">
          <h3 className="text-2xl font-bold mb-6 text-center gradient-text">
            Arquitectura Cliente-Servidor
          </h3>
          
          <div className="relative">
            {/* Diagrama de arquitectura */}
            <div className="grid grid-cols-3 gap-8 items-center">
              {/* Cliente */}
              <div className="text-center">
                <div className="glass-effect rounded-xl p-6 mb-4">
                  <Icon icon="Monitor" size={64} className="text-purple-500 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Cliente MCP</h4>
                  <p className="text-sm text-gray-400">Claude Desktop</p>
                  <p className="text-sm text-gray-400">VS Code</p>
                  <p className="text-sm text-gray-400">Aplicaciones IA</p>
                </div>
                <div className="text-sm text-gray-500">
                  <p>• Inicia conexiones</p>
                  <p>• Envía solicitudes</p>
                  <p>• Procesa respuestas</p>
                </div>
              </div>

              {/* Protocolo */}
              <div className="text-center">
                <div className="flex items-center justify-center mb-4">
                  <div className="h-2 w-24 bg-gradient-to-r from-purple-500 to-blue-500 rounded"></div>
                  <Icon icon="ArrowRight" className="text-gray-400 mx-2" size={24} />
                  <div className="h-2 w-24 bg-gradient-to-r from-blue-500 to-green-500 rounded"></div>
                </div>
                <div className="glass-effect rounded-xl p-4">
                  <h4 className="font-bold mb-2">JSON-RPC 2.0</h4>
                  <p className="text-xs text-gray-400">stdio | SSE</p>
                </div>
                <div className="mt-4 text-sm text-gray-500">
                  <p>• Comunicación bidireccional</p>
                  <p>• Mensajes estructurados</p>
                  <p>• Manejo de errores</p>
                </div>
              </div>

              {/* Servidor */}
              <div className="text-center">
                <div className="glass-effect rounded-xl p-6 mb-4">
                  <Icon icon="Server" size={64} className="text-green-500 mx-auto mb-3" />
                  <h4 className="font-bold text-lg mb-2">Servidor MCP</h4>
                  <p className="text-sm text-gray-400">Sistema de archivos</p>
                  <p className="text-sm text-gray-400">Bases de datos</p>
                  <p className="text-sm text-gray-400">APIs externas</p>
                </div>
                <div className="text-sm text-gray-500">
                  <p>• Expone recursos</p>
                  <p>• Ejecuta herramientas</p>
                  <p>• Gestiona permisos</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          <div className="glass-effect rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-purple-400">
              <Icon icon="MessageSquare" className="inline mr-2" />
              Tipos de Mensajes
            </h4>
            <div className="space-y-2 text-sm">
              <div className="flex items-center">
                <code className="bg-gray-800 px-2 py-1 rounded mr-3">initialize</code>
                <span className="text-gray-400">Configuración inicial</span>
              </div>
              <div className="flex items-center">
                <code className="bg-gray-800 px-2 py-1 rounded mr-3">resources/list</code>
                <span className="text-gray-400">Listar recursos disponibles</span>
              </div>
              <div className="flex items-center">
                <code className="bg-gray-800 px-2 py-1 rounded mr-3">tools/call</code>
                <span className="text-gray-400">Ejecutar herramientas</span>
              </div>
              <div className="flex items-center">
                <code className="bg-gray-800 px-2 py-1 rounded mr-3">prompts/get</code>
                <span className="text-gray-400">Obtener prompts</span>
              </div>
            </div>
          </div>

          <div className="glass-effect rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              <Icon icon="Shield" className="inline mr-2" />
              Modelo de Seguridad
            </h4>
            <ul className="space-y-2 text-sm text-gray-300">
              <li className="flex items-start">
                <Icon icon="Lock" className="text-yellow-500 mr-2 mt-0.5" size={16} />
                <span>Aislamiento por proceso</span>
              </li>
              <li className="flex items-start">
                <Icon icon="Key" className="text-yellow-500 mr-2 mt-0.5" size={16} />
                <span>Control de acceso granular</span>
              </li>
              <li className="flex items-start">
                <Icon icon="Eye" className="text-yellow-500 mr-2 mt-0.5" size={16} />
                <span>Auditoría de operaciones</span>
              </li>
              <li className="flex items-start">
                <Icon icon="Shield" className="text-yellow-500 mr-2 mt-0.5" size={16} />
                <span>Sin ejecución directa de código</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    ),
    subsectionTitle: 'Arquitectura y Comunicación'
  },

  {
    id: 3,
    title: 'Primitivas Fundamentales de MCP',
    content: (
      <div className="space-y-6">
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
            Las 3 Primitivas de MCP
          </h3>
          
          <div className="grid grid-cols-3 gap-6">
            {/* Resources */}
            <div className="glass-effect rounded-xl p-6 bg-gradient-to-br from-purple-900/20 to-purple-800/10">
              <div className="text-center mb-4">
                <Icon icon="Database" size={48} className="text-purple-500 mx-auto" />
                <h4 className="text-xl font-bold mt-3">Resources</h4>
                <p className="text-sm text-gray-400 mt-1">Datos y Contenido</p>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-gray-300">
                  Exponen datos en formatos como texto, imágenes o datos estructurados.
                </p>
                
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-xs font-mono text-gray-400 mb-1">Ejemplo:</p>
                  <code className="text-xs text-green-400">
                    file:///home/user/document.txt<br/>
                    postgres://database/table/users<br/>
                    screen://desktop/screenshot
                  </code>
                </div>
                
                <div className="text-xs text-gray-500">
                  <p>• URIs únicos</p>
                  <p>• Contenido tipado</p>
                  <p>• Acceso read-only</p>
                </div>
              </div>
            </div>

            {/* Tools */}
            <div className="glass-effect rounded-xl p-6 bg-gradient-to-br from-blue-900/20 to-blue-800/10">
              <div className="text-center mb-4">
                <Icon icon="Tool" size={48} className="text-blue-500 mx-auto" />
                <h4 className="text-xl font-bold mt-3">Tools</h4>
                <p className="text-sm text-gray-400 mt-1">Acciones y Comandos</p>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-gray-300">
                  Permiten ejecutar acciones en sistemas externos de forma controlada.
                </p>
                
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-xs font-mono text-gray-400 mb-1">Ejemplos:</p>
                  <code className="text-xs text-blue-400">
                    create_file(path, content)<br/>
                    execute_query(sql)<br/>
                    send_email(to, subject)
                  </code>
                </div>
                
                <div className="text-xs text-gray-500">
                  <p>• Esquemas JSON</p>
                  <p>• Validación de parámetros</p>
                  <p>• Respuestas estructuradas</p>
                </div>
              </div>
            </div>

            {/* Prompts */}
            <div className="glass-effect rounded-xl p-6 bg-gradient-to-br from-green-900/20 to-green-800/10">
              <div className="text-center mb-4">
                <Icon icon="MessageSquare" size={48} className="text-green-500 mx-auto" />
                <h4 className="text-xl font-bold mt-3">Prompts</h4>
                <p className="text-sm text-gray-400 mt-1">Plantillas Reutilizables</p>
              </div>
              
              <div className="space-y-3">
                <p className="text-sm text-gray-300">
                  Plantillas de prompts dinámicos con contexto específico del dominio.
                </p>
                
                <div className="bg-gray-800 rounded-lg p-3">
                  <p className="text-xs font-mono text-gray-400 mb-1">Ejemplo:</p>
                  <code className="text-xs text-green-400">
                    analyze_codebase<br/>
                    generate_report<br/>
                    debug_error
                  </code>
                </div>
                
                <div className="text-xs text-gray-500">
                  <p>• Argumentos dinámicos</p>
                  <p>• Contexto enriquecido</p>
                  <p>• Flujos de trabajo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4 text-yellow-400">
            <Icon icon="Workflow" className="inline mr-2" />
            Flujo de Interacción
          </h4>
          <div className="flex items-center justify-center space-x-4 text-sm">
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-purple-500/20 flex items-center justify-center mb-2">
                <span className="font-bold text-purple-400">1</span>
              </div>
              <p className="text-xs">Cliente solicita</p>
              <p className="text-xs">recursos</p>
            </div>
            <Icon icon="ArrowRight" className="text-gray-500" />
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-blue-500/20 flex items-center justify-center mb-2">
                <span className="font-bold text-blue-400">2</span>
              </div>
              <p className="text-xs">Servidor lista</p>
              <p className="text-xs">disponibles</p>
            </div>
            <Icon icon="ArrowRight" className="text-gray-500" />
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-2">
                <span className="font-bold text-green-400">3</span>
              </div>
              <p className="text-xs">Cliente usa</p>
              <p className="text-xs">herramientas</p>
            </div>
            <Icon icon="ArrowRight" className="text-gray-500" />
            <div className="text-center">
              <div className="w-20 h-20 rounded-full bg-yellow-500/20 flex items-center justify-center mb-2">
                <span className="font-bold text-yellow-400">4</span>
              </div>
              <p className="text-xs">Servidor ejecuta</p>
              <p className="text-xs">y responde</p>
            </div>
          </div>
        </div>
      </div>
    ),
    subsectionTitle: 'Primitivas MCP'
  },

  {
    id: 4,
    title: 'Casos de Uso Empresariales',
    content: (
      <div className="space-y-6">
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            MCP en el Mundo Real
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Desarrollo de Software */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Icon icon="Code" className="text-purple-500 mr-3" size={32} />
                <h4 className="text-xl font-semibold">Desarrollo de Software</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon icon="GitBranch" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Control de Versiones</p>
                    <p className="text-xs text-gray-400">Acceso a repositorios Git locales</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="Terminal" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Ejecución de Comandos</p>
                    <p className="text-xs text-gray-400">Build, test, deploy automatizados</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="FileCode" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Análisis de Código</p>
                    <p className="text-xs text-gray-400">Refactoring y optimización</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Análisis de Datos */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Icon icon="BarChart" className="text-blue-500 mr-3" size={32} />
                <h4 className="text-xl font-semibold">Análisis de Datos</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon icon="Database" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Bases de Datos</p>
                    <p className="text-xs text-gray-400">Consultas SQL seguras</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="TrendingUp" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Visualización</p>
                    <p className="text-xs text-gray-400">Generación de gráficos e informes</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="Cpu" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">ML/AI Pipeline</p>
                    <p className="text-xs text-gray-400">Integración con notebooks</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Productividad Personal */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Icon icon="User" className="text-green-500 mr-3" size={32} />
                <h4 className="text-xl font-semibold">Productividad Personal</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon icon="FileText" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Gestión de Documentos</p>
                    <p className="text-xs text-gray-400">Acceso a archivos locales</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="Calendar" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Calendario y Tareas</p>
                    <p className="text-xs text-gray-400">Integración con aplicaciones</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="Mail" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Comunicación</p>
                    <p className="text-xs text-gray-400">Borradores y respuestas</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Operaciones IT */}
            <div className="glass-effect rounded-xl p-6">
              <div className="flex items-center mb-4">
                <Icon icon="Server" className="text-yellow-500 mr-3" size={32} />
                <h4 className="text-xl font-semibold">Operaciones IT</h4>
              </div>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon icon="Activity" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Monitoreo</p>
                    <p className="text-xs text-gray-400">Logs y métricas del sistema</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="Settings" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Configuración</p>
                    <p className="text-xs text-gray-400">Gestión de infraestructura</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="AlertCircle" className="text-gray-400 mr-2 mt-1" size={16} />
                  <div>
                    <p className="font-medium text-sm">Incidentes</p>
                    <p className="text-xs text-gray-400">Diagnóstico y resolución</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6 bg-gradient-to-r from-yellow-900/20 to-orange-900/20">
          <h4 className="text-lg font-semibold mb-3 text-yellow-400">
            <Icon icon="TrendingUp" className="inline mr-2" />
            Impacto Empresarial
          </h4>
          <div className="grid grid-cols-3 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-green-400">75%</p>
              <p className="text-sm text-gray-400">Reducción en tiempo de desarrollo</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-400">90%</p>
              <p className="text-sm text-gray-400">Menos errores manuales</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-purple-400">10x</p>
              <p className="text-sm text-gray-400">Aumento en productividad</p>
            </div>
          </div>
        </div>
      </div>
    ),
    subsectionTitle: 'Casos de Uso'
  },

  {
    id: 5,
    title: 'Implementación Básica de un Servidor MCP',
    content: (
      <div className="space-y-6">
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-4 gradient-text">
            Crear tu Primer Servidor MCP
          </h3>
          <p className="text-gray-300 mb-6">
            Ejemplo paso a paso de un servidor MCP simple en TypeScript que expone 
            el sistema de archivos local.
          </p>
        </div>

        <div className="space-y-6">
          {/* Paso 1: Setup */}
          <div className="glass-effect rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-purple-400">
              <Icon icon="Package" className="inline mr-2" />
              Paso 1: Configuración del Proyecto
            </h4>
            
            <div className="bg-gray-900 rounded-lg p-4 font-mono text-sm">
              <div className="text-green-400 mb-2"># Crear directorio del proyecto</div>
              <div className="text-gray-300">mkdir mi-servidor-mcp</div>
              <div className="text-gray-300">cd mi-servidor-mcp</div>
              <div className="text-gray-300 mb-4">npm init -y</div>
              
              <div className="text-green-400 mb-2"># Instalar dependencias</div>
              <div className="text-gray-300">npm install @modelcontextprotocol/sdk</div>
              <div className="text-gray-300">npm install -D typescript @types/node tsx</div>
            </div>
          </div>

          {/* Paso 2: Servidor básico */}
          <div className="glass-effect rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-blue-400">
              <Icon icon="Code" className="inline mr-2" />
              Paso 2: Código del Servidor
            </h4>
            
            <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-sm">
                <code className="language-typescript">{`// server.ts
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { promises as fs } from 'fs';
import path from 'path';

// Crear instancia del servidor
const server = new Server({
  name: 'mi-servidor-archivos',
  version: '1.0.0'
}, {
  capabilities: {
    resources: {},
    tools: {}
  }
});

// Definir recurso: listar archivos
server.setRequestHandler('resources/list', async () => {
  return {
    resources: [{
      uri: 'file:///workspace',
      name: 'Workspace',
      mimeType: 'text/directory'
    }]
  };
});

// Definir herramienta: leer archivo
server.setRequestHandler('tools/list', async () => {
  return {
    tools: [{
      name: 'read_file',
      description: 'Lee el contenido de un archivo',
      inputSchema: {
        type: 'object',
        properties: {
          path: { type: 'string', description: 'Ruta del archivo' }
        },
        required: ['path']
      }
    }]
  };
});

// Implementar la herramienta
server.setRequestHandler('tools/call', async (request) => {
  if (request.params.name === 'read_file') {
    const { path: filePath } = request.params.arguments;
    try {
      const content = await fs.readFile(filePath, 'utf-8');
      return {
        content: [{
          type: 'text',
          text: content
        }]
      };
    } catch (error) {
      return {
        content: [{
          type: 'text',
          text: \`Error: \${error.message}\`
        }],
        isError: true
      };
    }
  }
});

// Iniciar servidor
const transport = new StdioServerTransport();
await server.connect(transport);`}</code>
              </pre>
            </div>
          </div>

          {/* Paso 3: Configuración */}
          <div className="glass-effect rounded-xl p-6">
            <h4 className="text-lg font-semibold mb-4 text-green-400">
              <Icon icon="Settings" className="inline mr-2" />
              Paso 3: Configurar en Claude Desktop
            </h4>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">claude_desktop_config.json:</p>
              <pre className="text-sm">
                <code className="language-json">{`{
  "mcpServers": {
    "mi-servidor": {
      "command": "npx",
      "args": ["tsx", "./server.ts"],
      "cwd": "/ruta/a/mi-servidor-mcp"
    }
  }
}`}</code>
              </pre>
            </div>
          </div>
        </div>

        <div className="glass-effect rounded-xl p-6 bg-gradient-to-r from-blue-900/20 to-purple-900/20">
          <h4 className="text-lg font-semibold mb-3 text-blue-400">
            <Icon icon="Zap" className="inline mr-2" />
            Resultado
          </h4>
          <p className="text-gray-300 mb-3">
            Con este servidor básico, Claude podrá:
          </p>
          <ul className="space-y-2 text-sm text-gray-300">
            <li className="flex items-center">
              <Icon icon="CheckCircle" className="text-green-500 mr-2" size={16} />
              Listar los recursos disponibles (directorio workspace)
            </li>
            <li className="flex items-center">
              <Icon icon="CheckCircle" className="text-green-500 mr-2" size={16} />
              Leer archivos usando la herramienta read_file
            </li>
            <li className="flex items-center">
              <Icon icon="CheckCircle" className="text-green-500 mr-2" size={16} />
              Manejar errores de forma segura
            </li>
          </ul>
        </div>
      </div>
    ),
    subsectionTitle: 'Implementación'
  },

  {
    id: 6,
    title: 'Ecosistema y Servidores Disponibles',
    content: (
      <div className="space-y-6">
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
            Servidores MCP Populares
          </h3>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Servidores Oficiales */}
            <div className="glass-effect rounded-xl p-4">
              <h4 className="text-lg font-semibold mb-3 text-purple-400">
                <Icon icon="Shield" className="inline mr-2" />
                Servidores Oficiales
              </h4>
              
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">filesystem</span>
                    <Icon icon="Folder" className="text-yellow-500" size={16} />
                  </div>
                  <p className="text-xs text-gray-400">Acceso seguro a archivos locales</p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">github</span>
                    <Icon icon="GitBranch" className="text-gray-400" size={16} />
                  </div>
                  <p className="text-xs text-gray-400">Integración con repositorios GitHub</p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">google-drive</span>
                    <Icon icon="Cloud" className="text-blue-500" size={16} />
                  </div>
                  <p className="text-xs text-gray-400">Acceso a Google Drive</p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">slack</span>
                    <Icon icon="MessageSquare" className="text-purple-500" size={16} />
                  </div>
                  <p className="text-xs text-gray-400">Lectura de mensajes Slack</p>
                </div>
              </div>
            </div>

            {/* Servidores Comunitarios */}
            <div className="glass-effect rounded-xl p-4">
              <h4 className="text-lg font-semibold mb-3 text-blue-400">
                <Icon icon="Users" className="inline mr-2" />
                Servidores Comunitarios
              </h4>
              
              <div className="space-y-3">
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">postgres</span>
                    <Icon icon="Database" className="text-green-500" size={16} />
                  </div>
                  <p className="text-xs text-gray-400">Consultas PostgreSQL</p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">browser</span>
                    <Icon icon="Globe" className="text-cyan-500" size={16} />
                  </div>
                  <p className="text-xs text-gray-400">Control de navegador web</p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">sqlite</span>
                    <Icon icon="HardDrive" className="text-orange-500" size={16} />
                  </div>
                  <p className="text-xs text-gray-400">Base de datos SQLite local</p>
                </div>
                
                <div className="bg-gray-800 rounded-lg p-3">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-semibold text-sm">kubernetes</span>
                    <Icon icon="Box" className="text-blue-600" size={16} />
                  </div>
                  <p className="text-xs text-gray-400">Gestión de clusters K8s</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Instalación rápida */}
        <div className="glass-effect rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4 text-green-400">
            <Icon icon="Download" className="inline mr-2" />
            Instalación Rápida
          </h4>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">NPM (Node.js):</p>
              <code className="text-xs text-green-400">
                npm install -g @modelcontextprotocol/server-filesystem
              </code>
            </div>
            
            <div className="bg-gray-900 rounded-lg p-4">
              <p className="text-sm text-gray-400 mb-2">Python (uv):</p>
              <code className="text-xs text-green-400">
                uv tool install mcp-server-sqlite
              </code>
            </div>
          </div>
        </div>

        {/* Recursos */}
        <div className="grid grid-cols-3 gap-4">
          <div className="glass-effect rounded-xl p-4 text-center">
            <Icon icon="Book" className="text-purple-500 mx-auto mb-2" size={32} />
            <h5 className="font-semibold mb-1">Documentación</h5>
            <p className="text-xs text-gray-400">modelcontextprotocol.io</p>
          </div>
          
          <div className="glass-effect rounded-xl p-4 text-center">
            <Icon icon="Github" className="text-gray-400 mx-auto mb-2" size={32} />
            <h5 className="font-semibold mb-1">GitHub</h5>
            <p className="text-xs text-gray-400">github.com/modelcontextprotocol</p>
          </div>
          
          <div className="glass-effect rounded-xl p-4 text-center">
            <Icon icon="MessageCircle" className="text-blue-500 mx-auto mb-2" size={32} />
            <h5 className="font-semibold mb-1">Comunidad</h5>
            <p className="text-xs text-gray-400">Discord & Forums</p>
          </div>
        </div>
      </div>
    ),
    subsectionTitle: 'Ecosistema MCP'
  },

  {
    id: 7,
    title: 'Mejores Prácticas y Seguridad',
    content: (
      <div className="space-y-6">
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6 gradient-text">
            Implementación Segura de MCP
          </h3>
          
          <div className="grid grid-cols-2 gap-6">
            {/* Principios de Seguridad */}
            <div className="glass-effect rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-red-400">
                <Icon icon="Shield" className="inline mr-2" />
                Principios de Seguridad
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <Icon icon="Lock" className="text-yellow-500 mr-2 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Principio de Menor Privilegio</p>
                    <p className="text-xs text-gray-400">Solo otorgar acceso mínimo necesario</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="Eye" className="text-yellow-500 mr-2 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Auditoría Completa</p>
                    <p className="text-xs text-gray-400">Registrar todas las operaciones</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="AlertTriangle" className="text-yellow-500 mr-2 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Validación de Entrada</p>
                    <p className="text-xs text-gray-400">Sanitizar todos los parámetros</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Icon icon="RefreshCw" className="text-yellow-500 mr-2 mt-1" size={20} />
                  <div>
                    <p className="font-medium">Límites de Recursos</p>
                    <p className="text-xs text-gray-400">Timeouts y cuotas de uso</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Mejores Prácticas */}
            <div className="glass-effect rounded-xl p-6">
              <h4 className="text-xl font-semibold mb-4 text-green-400">
                <Icon icon="CheckCircle" className="inline mr-2" />
                Mejores Prácticas
              </h4>
              
              <div className="space-y-3">
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                  <div>
                    <p className="font-medium">Manejo de Errores Robusto</p>
                    <p className="text-xs text-gray-400">Fallos graceful, mensajes claros</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                  <div>
                    <p className="font-medium">Documentación Clara</p>
                    <p className="text-xs text-gray-400">Esquemas detallados, ejemplos</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                  <div>
                    <p className="font-medium">Versionado Semántico</p>
                    <p className="text-xs text-gray-400">Compatibilidad hacia atrás</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-2 h-2 bg-green-500 rounded-full mr-2 mt-1.5"></div>
                  <div>
                    <p className="font-medium">Testing Exhaustivo</p>
                    <p className="text-xs text-gray-400">Unit, integration, e2e tests</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Ejemplo de validación */}
        <div className="glass-effect rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4 text-blue-400">
            <Icon icon="Code" className="inline mr-2" />
            Ejemplo: Validación de Seguridad
          </h4>
          
          <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm">
              <code className="language-typescript">{`// Validación de rutas seguras
function validatePath(requestedPath: string): boolean {
  const normalizedPath = path.normalize(requestedPath);
  const resolvedPath = path.resolve(normalizedPath);
  
  // Verificar que no salga del directorio permitido
  const allowedDir = path.resolve('/workspace');
  if (!resolvedPath.startsWith(allowedDir)) {
    throw new Error('Acceso denegado: ruta fuera del workspace');
  }
  
  // Verificar patrones peligrosos
  const dangerousPatterns = ['../', '.ssh', '.env', 'password'];
  for (const pattern of dangerousPatterns) {
    if (resolvedPath.includes(pattern)) {
      throw new Error(\`Patrón no permitido: \${pattern}\`);
    }
  }
  
  return true;
}`}</code>
            </pre>
          </div>
        </div>

        {/* Checklist de seguridad */}
        <div className="glass-effect rounded-xl p-6 bg-gradient-to-r from-red-900/20 to-orange-900/20">
          <h4 className="text-lg font-semibold mb-4 text-orange-400">
            <Icon icon="ClipboardCheck" className="inline mr-2" />
            Checklist de Seguridad MCP
          </h4>
          
          <div className="grid grid-cols-2 gap-4 text-sm">
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" disabled checked />
                <span>Aislamiento de procesos configurado</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" disabled checked />
                <span>Permisos mínimos necesarios</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" disabled checked />
                <span>Validación de todas las entradas</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" disabled checked />
                <span>Logs de auditoría activos</span>
              </label>
            </div>
            <div className="space-y-2">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" disabled checked />
                <span>Límites de recursos definidos</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" disabled checked />
                <span>Manejo de errores implementado</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" disabled checked />
                <span>Documentación de seguridad</span>
              </label>
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" disabled checked />
                <span>Plan de respuesta a incidentes</span>
              </label>
            </div>
          </div>
        </div>
      </div>
    ),
    subsectionTitle: 'Seguridad y Mejores Prácticas'
  },

  {
    id: 8,
    title: 'El Futuro de MCP',
    content: (
      <div className="space-y-6">
        <div className="glass-effect rounded-xl p-6">
          <h3 className="text-2xl font-bold mb-6 gradient-text text-center">
            Hacia un Ecosistema Universal de IA
          </h3>
          
          <div className="text-center mb-8">
            <p className="text-xl text-gray-300">
              MCP está transformando cómo las IAs interactúan con el mundo digital
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6">
          {/* Desarrollos Actuales */}
          <div className="glass-effect rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-purple-400">
              <Icon icon="Rocket" className="inline mr-2" />
              Desarrollos en Curso
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <Icon icon="Code" className="text-blue-500 mr-2 mt-1" size={20} />
                <div>
                  <p className="font-medium">SDKs Multi-lenguaje</p>
                  <p className="text-xs text-gray-400">Python, Go, Rust, Java en desarrollo</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Icon icon="Link" className="text-green-500 mr-2 mt-1" size={20} />
                <div>
                  <p className="font-medium">Federación de Servidores</p>
                  <p className="text-xs text-gray-400">Conexión entre múltiples MCPs</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Icon icon="Cpu" className="text-yellow-500 mr-2 mt-1" size={20} />
                <div>
                  <p className="font-medium">Optimización de Rendimiento</p>
                  <p className="text-xs text-gray-400">Caché inteligente, streaming</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Icon icon="Package" className="text-purple-500 mr-2 mt-1" size={20} />
                <div>
                  <p className="font-medium">Marketplace de Servidores</p>
                  <p className="text-xs text-gray-400">Descubrimiento e instalación fácil</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visión Futura */}
          <div className="glass-effect rounded-xl p-6">
            <h4 className="text-xl font-semibold mb-4 text-blue-400">
              <Icon icon="Eye" className="inline mr-2" />
              Visión 2025-2026
            </h4>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <Icon icon="Globe" className="text-cyan-500 mr-2 mt-1" size={20} />
                <div>
                  <p className="font-medium">Estándar de la Industria</p>
                  <p className="text-xs text-gray-400">Adopción por todos los LLMs principales</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Icon icon="Building" className="text-orange-500 mr-2 mt-1" size={20} />
                <div>
                  <p className="font-medium">Integración Empresarial</p>
                  <p className="text-xs text-gray-400">ERP, CRM, BI nativamente compatibles</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Icon icon="Users" className="text-pink-500 mr-2 mt-1" size={20} />
                <div>
                  <p className="font-medium">Agentes Colaborativos</p>
                  <p className="text-xs text-gray-400">Múltiples IAs trabajando via MCP</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Icon icon="Smartphone" className="text-indigo-500 mr-2 mt-1" size={20} />
                <div>
                  <p className="font-medium">MCP Móvil</p>
                  <p className="text-xs text-gray-400">Asistentes IA en dispositivos edge</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="glass-effect rounded-xl p-6">
          <h4 className="text-lg font-semibold mb-4 text-green-400">
            <Icon icon="Calendar" className="inline mr-2" />
            Roadmap MCP
          </h4>
          
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-600"></div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-green-500 rounded-full relative z-10"></div>
                <div className="ml-6">
                  <p className="font-semibold">Q1 2025</p>
                  <p className="text-sm text-gray-400">SDK Python oficial, WebSockets support</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-blue-500 rounded-full relative z-10"></div>
                <div className="ml-6">
                  <p className="font-semibold">Q2 2025</p>
                  <p className="text-sm text-gray-400">Federación beta, marketplace público</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-purple-500 rounded-full relative z-10"></div>
                <div className="ml-6">
                  <p className="font-semibold">Q3 2025</p>
                  <p className="text-sm text-gray-400">MCP 2.0 con capacidades avanzadas</p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-4 h-4 bg-yellow-500 rounded-full relative z-10"></div>
                <div className="ml-6">
                  <p className="font-semibold">Q4 2025</p>
                  <p className="text-sm text-gray-400">Estándar ISO/IEC propuesto</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="glass-effect rounded-xl p-8 bg-gradient-to-r from-purple-900/30 to-blue-900/30 text-center">
          <h4 className="text-2xl font-bold mb-4 gradient-text">
            ¡Únete a la Revolución MCP!
          </h4>
          <p className="text-lg text-gray-300 mb-6">
            El futuro de la IA conectada está aquí. Comienza a construir hoy.
          </p>
          <div className="flex justify-center gap-4">
            <div className="glass-effect rounded-xl px-6 py-3">
              <Icon icon="Book" className="inline mr-2" />
              Documentación
            </div>
            <div className="glass-effect rounded-xl px-6 py-3">
              <Icon icon="Github" className="inline mr-2" />
              GitHub
            </div>
            <div className="glass-effect rounded-xl px-6 py-3">
              <Icon icon="MessageCircle" className="inline mr-2" />
              Comunidad
            </div>
          </div>
        </div>
      </div>
    ),
    subsectionTitle: 'El Futuro'
  }
];
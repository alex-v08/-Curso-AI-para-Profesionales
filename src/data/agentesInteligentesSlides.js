import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';
import {
  AgentArchitectureDemo,
  MultiAgentSwarmDemo,
  N8nFlowDemo
} from '../components/InteractiveComponents';

/**
 * Slides del capítulo de Agentes Inteligentes, MCP y n8n
 * Incluye fundamentos, arquitecturas, sistemas multiagente y aplicaciones prácticas
 */

const agentesInteligentesSlides = [
  // Slide 0: Portada del capítulo
  {
    id: 0,
    type: 'cover',
    title: 'Agentes Inteligentes y Sistemas Multiagente',
    subtitle: 'Arquitecturas Autónomas para el Futuro de la IA',
    content: (
      <div className="ml-text-center ml-space-y-8 fade-in">
        <div className="ml-flex ml-flex--center mb-8">
          <div className="relative">
            <Icon name="robot" className="w-40 h-40 text-cyan-400 pulse-animation" />
            <div className="absolute -inset-6 border-2 border-cyan-300 rounded-full animate-ping opacity-20"></div>
            <div className="absolute -inset-4 border-2 border-blue-300 rounded-full animate-pulse opacity-30"></div>
          </div>
        </div>
        
        <div className="ml-container--narrow">
          <blockquote className="ml-heading-2 italic mb-6">
            "Los agentes inteligentes representan el siguiente paso en la evolución de la IA: 
            sistemas que perciben, razonan y actúan de forma autónoma para alcanzar objetivos complejos."
          </blockquote>
          <div className="ml-glass--elevated inline-block">
            <p className="ml-text-body">
              <Icon name="zap" className="w-5 h-5 inline mr-2 text-yellow-400" />
              <strong>2024-2025:</strong> La era de los agentes autónomos y la colaboración inteligente
            </p>
          </div>
        </div>

        <div className="ml-grid ml-grid--4 max-w-6xl mx-auto mt-12">
          <div className="ml-card ml-card--interactive ml-text-center">
            <Icon name="brain" className="w-12 h-12 text-blue-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">Fundamentos</h3>
            <p className="ml-text-caption">Qué son los agentes y cómo funcionan</p>
          </div>
          
          <div className="ml-card ml-card--interactive ml-text-center">
            <Icon name="layers" className="w-12 h-12 text-green-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">Arquitecturas</h3>
            <p className="ml-text-caption">Tipos y diseños de agentes</p>
          </div>
          
          <div className="ml-card ml-card--interactive ml-text-center">
            <Icon name="users" className="w-12 h-12 text-purple-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">Multiagente</h3>
            <p className="ml-text-caption">Colaboración y coordinación</p>
          </div>
          
          <div className="ml-card ml-card--interactive ml-text-center">
            <Icon name="cogs" className="w-12 h-12 text-orange-300 mx-auto mb-4" />
            <h3 className="ml-heading-4">Aplicaciones</h3>
            <p className="ml-text-caption">MCP, n8n y casos reales</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 1: ¿Qué es un Agente Inteligente?
  {
    id: 1,
    type: 'content',
    title: '¿Qué es un Agente Inteligente?',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Icon name="robot" className="w-10 h-10 mr-4 text-cyan-400" />
            Definición Fundamental
          </h2>
          
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-lg mb-6">
            <p className="text-xl text-white italic">
              "Un agente es una entidad que <ClickableInfo term="percibe" type="ai" content="Recoge información del entorno a través de sensores" /> 
              su entorno y <ClickableInfo term="actúa" type="ai" content="Ejecuta acciones a través de actuadores" /> 
              sobre él para alcanzar objetivos específicos."
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all">
              <Icon name="eye" className="w-12 h-12 text-blue-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Percepción</h3>
              <p className="text-white/80">Sensores que capturan información del entorno</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all">
              <Icon name="brain" className="w-12 h-12 text-purple-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Razonamiento</h3>
              <p className="text-white/80">Procesamiento y toma de decisiones</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg hover:bg-white/20 transition-all">
              <Icon name="hand-paper" className="w-12 h-12 text-green-300 mb-4" />
              <h3 className="text-xl font-semibold text-white mb-2">Acción</h3>
              <p className="text-white/80">Actuadores que modifican el entorno</p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6">
            <Icon name="star" className="w-8 h-8 inline mr-2 text-yellow-400" />
            Características Clave
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-4">
              <Icon name="shield-alt" className="w-8 h-8 text-green-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white">Autonomía</h4>
                <p className="text-white/70">Opera sin intervención humana directa</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Icon name="sync-alt" className="w-8 h-8 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white">Reactividad</h4>
                <p className="text-white/70">Responde a cambios en el entorno</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Icon name="bullseye" className="w-8 h-8 text-purple-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white">Proactividad</h4>
                <p className="text-white/70">Toma iniciativa para alcanzar objetivos</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Icon name="comments" className="w-8 h-8 text-orange-400 flex-shrink-0 mt-1" />
              <div>
                <h4 className="text-lg font-semibold text-white">Interacción</h4>
                <p className="text-white/70">Comunica con otros agentes y usuarios</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 2: Ejemplos de Agentes
  {
    id: 2,
    type: 'content',
    title: 'Ejemplos de Agentes en el Mundo Real',
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <Icon name="home" className="w-10 h-10 text-blue-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Robot Aspiradora</h3>
            </div>
            <div className="space-y-3">
              <p className="text-white/80"><strong>Sensores:</strong> Detectores de obstáculos, sensores de suciedad</p>
              <p className="text-white/80"><strong>Actuadores:</strong> Ruedas, cepillos, sistema de succión</p>
              <p className="text-white/80"><strong>Objetivos:</strong> Limpiar el suelo evitando obstáculos</p>
              <div className="bg-blue-500/20 p-3 rounded-lg mt-4">
                <p className="text-sm text-white/90">Tipo: Agente reactivo con modelo interno del espacio</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <Icon name="comment-dots" className="w-10 h-10 text-purple-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Chatbot Inteligente</h3>
            </div>
            <div className="space-y-3">
              <p className="text-white/80"><strong>Sensores:</strong> Parser de texto, análisis de contexto</p>
              <p className="text-white/80"><strong>Actuadores:</strong> Generador de respuestas</p>
              <p className="text-white/80"><strong>Objetivos:</strong> Resolver consultas y mantener conversaciones</p>
              <div className="bg-purple-500/20 p-3 rounded-lg mt-4">
                <p className="text-sm text-white/90">Tipo: Agente basado en objetivos con aprendizaje</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <Icon name="plane" className="w-10 h-10 text-green-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Drone Autónomo</h3>
            </div>
            <div className="space-y-3">
              <p className="text-white/80"><strong>Sensores:</strong> GPS, cámaras, LIDAR</p>
              <p className="text-white/80"><strong>Actuadores:</strong> Motores, sistema de navegación</p>
              <p className="text-white/80"><strong>Objetivos:</strong> Entregar paquetes, mapear terreno</p>
              <div className="bg-green-500/20 p-3 rounded-lg mt-4">
                <p className="text-sm text-white/90">Tipo: Agente basado en utilidad</p>
              </div>
            </div>
          </div>

          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <Icon name="car" className="w-10 h-10 text-orange-400 mr-3" />
              <h3 className="text-2xl font-bold text-white">Vehículo Autónomo</h3>
            </div>
            <div className="space-y-3">
              <p className="text-white/80"><strong>Sensores:</strong> Cámaras 360°, radar, ultrasonido</p>
              <p className="text-white/80"><strong>Actuadores:</strong> Dirección, frenos, acelerador</p>
              <p className="text-white/80"><strong>Objetivos:</strong> Navegar seguramente al destino</p>
              <div className="bg-orange-500/20 p-3 rounded-lg mt-4">
                <p className="text-sm text-white/90">Tipo: Agente híbrido con múltiples subsistemas</p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <h3 className="text-xl font-bold text-white mb-4">
            <Icon name="lightbulb" className="w-6 h-6 inline mr-2 text-yellow-400" />
            Patrón Común: Percepción → Decisión → Acción
          </h3>
          <p className="text-white/80">
            Todos estos agentes siguen el mismo ciclo fundamental: perciben su entorno, 
            procesan la información según sus objetivos, y ejecutan acciones para modificar su mundo.
          </p>
        </div>
      </div>
    )
  },

  // Slide 3: Tipos de Agentes y Arquitecturas
  {
    id: 3,
    type: 'content',
    title: 'Tipos de Agentes y Arquitecturas',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Icon name="layer-group" className="w-10 h-10 mr-4 text-blue-400" />
            Clasificación de Agentes por Complejidad
          </h2>

          <div className="space-y-6">
            {/* Agentes Reactivos Simples */}
            <div className="bg-gradient-to-r from-green-500/20 to-green-600/10 p-6 rounded-lg hover:from-green-500/30 hover:to-green-600/20 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-green-500/30 p-3 rounded-full">
                  <Icon name="bolt" className="w-8 h-8 text-green-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">1. Agentes Reactivos Simples</h3>
                  <p className="text-white/80 mb-3">Actúan solo con la percepción actual, sin memoria del pasado</p>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <code className="text-green-300 font-mono text-sm">
                      if (percepción == "obstáculo") then girar_izquierda()
                    </code>
                  </div>
                  <p className="text-white/70 text-sm mt-2">
                    <strong>Ejemplo:</strong> Termostato básico
                  </p>
                </div>
              </div>
            </div>

            {/* Agentes Basados en Modelos */}
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 p-6 rounded-lg hover:from-blue-500/30 hover:to-blue-600/20 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-blue-500/30 p-3 rounded-full">
                  <Icon name="database" className="w-8 h-8 text-blue-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">2. Agentes Basados en Modelos</h3>
                  <p className="text-white/80 mb-3">Mantienen un estado interno del mundo</p>
                  <div className="grid grid-cols-2 gap-4 mt-4">
                    <div className="bg-black/20 p-3 rounded">
                      <p className="text-blue-300 text-sm font-semibold mb-1">Modelo del Mundo</p>
                      <p className="text-white/70 text-xs">Cómo evoluciona el entorno</p>
                    </div>
                    <div className="bg-black/20 p-3 rounded">
                      <p className="text-blue-300 text-sm font-semibold mb-1">Estado Interno</p>
                      <p className="text-white/70 text-xs">Historial y contexto</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mt-2">
                    <strong>Ejemplo:</strong> Robot que mapea una habitación
                  </p>
                </div>
              </div>
            </div>

            {/* Agentes Basados en Objetivos */}
            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/10 p-6 rounded-lg hover:from-purple-500/30 hover:to-purple-600/20 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-purple-500/30 p-3 rounded-full">
                  <Icon name="bullseye" className="w-8 h-8 text-purple-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">3. Agentes Basados en Objetivos</h3>
                  <p className="text-white/80 mb-3">Consideran el futuro y planifican acciones</p>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <p className="text-purple-300 text-sm">
                      Objetivo → Planificación → Secuencia de Acciones
                    </p>
                  </div>
                  <p className="text-white/70 text-sm mt-2">
                    <strong>Ejemplo:</strong> Sistema de navegación GPS
                  </p>
                </div>
              </div>
            </div>

            {/* Agentes Basados en Utilidad */}
            <div className="bg-gradient-to-r from-orange-500/20 to-orange-600/10 p-6 rounded-lg hover:from-orange-500/30 hover:to-orange-600/20 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-orange-500/30 p-3 rounded-full">
                  <Icon name="chart-line" className="w-8 h-8 text-orange-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">4. Agentes Basados en Utilidad</h3>
                  <p className="text-white/80 mb-3">Maximizan una función de utilidad</p>
                  <div className="bg-black/20 p-4 rounded-lg">
                    <p className="text-orange-300 text-sm">
                      U(estado) = velocidad × 0.4 + seguridad × 0.6
                    </p>
                  </div>
                  <p className="text-white/70 text-sm mt-2">
                    <strong>Ejemplo:</strong> Trading algorítmico
                  </p>
                </div>
              </div>
            </div>

            {/* Agentes que Aprenden */}
            <div className="bg-gradient-to-r from-red-500/20 to-pink-600/10 p-6 rounded-lg hover:from-red-500/30 hover:to-pink-600/20 transition-all">
              <div className="flex items-start space-x-4">
                <div className="bg-red-500/30 p-3 rounded-full">
                  <Icon name="graduation-cap" className="w-8 h-8 text-red-300" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-white mb-2">5. Agentes que Aprenden</h3>
                  <p className="text-white/80 mb-3">Mejoran su comportamiento con la experiencia</p>
                  <div className="grid grid-cols-3 gap-2 mt-4">
                    <div className="bg-black/20 p-2 rounded text-center">
                      <p className="text-red-300 text-xs">Elemento de Aprendizaje</p>
                    </div>
                    <div className="bg-black/20 p-2 rounded text-center">
                      <p className="text-red-300 text-xs">Crítico</p>
                    </div>
                    <div className="bg-black/20 p-2 rounded text-center">
                      <p className="text-red-300 text-xs">Generador de Problemas</p>
                    </div>
                  </div>
                  <p className="text-white/70 text-sm mt-2">
                    <strong>Ejemplo:</strong> Asistentes virtuales como ChatGPT
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 4: Arquitecturas Internas
  {
    id: 4,
    type: 'content',
    title: 'Arquitecturas Internas de Agentes',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Icon name="sitemap" className="w-10 h-10 mr-4 text-purple-400" />
            Diseños Arquitectónicos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Arquitectura de Tabla de Reglas */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Icon name="table" className="w-6 h-6 mr-2 text-blue-300" />
                Tabla de Reglas
              </h3>
              <div className="bg-black/30 p-4 rounded-lg mb-4">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="text-blue-300 border-b border-blue-500/30">
                      <th className="text-left pb-2">Condición</th>
                      <th className="text-left pb-2">Acción</th>
                    </tr>
                  </thead>
                  <tbody className="text-white/80">
                    <tr>
                      <td className="py-1">Temperatura &gt; 25°C</td>
                      <td className="py-1">Encender AC</td>
                    </tr>
                    <tr>
                      <td className="py-1">Luz &lt; 30%</td>
                      <td className="py-1">Encender luces</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/70 text-sm">
                Simple pero limitada a situaciones predefinidas
              </p>
            </div>

            {/* Arquitectura BDI */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Icon name="brain" className="w-6 h-6 mr-2 text-purple-300" />
                Modelo BDI
              </h3>
              <div className="space-y-3">
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-purple-300 font-semibold">Beliefs (Creencias)</p>
                  <p className="text-white/70 text-sm">Estado actual del mundo</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-purple-300 font-semibold">Desires (Deseos)</p>
                  <p className="text-white/70 text-sm">Objetivos a alcanzar</p>
                </div>
                <div className="bg-black/30 p-3 rounded-lg">
                  <p className="text-purple-300 font-semibold">Intentions (Intenciones)</p>
                  <p className="text-white/70 text-sm">Planes comprometidos</p>
                </div>
              </div>
            </div>

            {/* Arquitectura en Capas */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Icon name="layer-group" className="w-6 h-6 mr-2 text-green-300" />
                Arquitectura en Capas
              </h3>
              <div className="space-y-2">
                <div className="bg-green-600/30 p-3 rounded-lg text-center">
                  <p className="text-white font-semibold">Capa Deliberativa</p>
                </div>
                <div className="bg-green-500/30 p-3 rounded-lg text-center">
                  <p className="text-white font-semibold">Capa de Planificación</p>
                </div>
                <div className="bg-green-400/30 p-3 rounded-lg text-center">
                  <p className="text-white font-semibold">Capa Reactiva</p>
                </div>
              </div>
              <p className="text-white/70 text-sm mt-3">
                Combina respuestas rápidas con planificación
              </p>
            </div>

            {/* Arquitectura Híbrida */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Icon name="puzzle-piece" className="w-6 h-6 mr-2 text-orange-300" />
                Arquitectura Híbrida
              </h3>
              <div className="bg-black/30 p-4 rounded-lg">
                <div className="flex justify-between items-center mb-3">
                  <div className="text-center">
                    <Icon name="bolt" className="w-8 h-8 text-yellow-300 mb-1" />
                    <p className="text-xs text-white/70">Reactivo</p>
                  </div>
                  <Icon name="plus" className="w-4 h-4 text-white/50" />
                  <div className="text-center">
                    <Icon name="chess" className="w-8 h-8 text-blue-300 mb-1" />
                    <p className="text-xs text-white/70">Deliberativo</p>
                  </div>
                  <Icon name="plus" className="w-4 h-4 text-white/50" />
                  <div className="text-center">
                    <Icon name="graduation-cap" className="w-8 h-8 text-purple-300 mb-1" />
                    <p className="text-xs text-white/70">Aprendizaje</p>
                  </div>
                </div>
              </div>
              <p className="text-white/70 text-sm mt-3">
                Lo mejor de todos los mundos
              </p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10">
          <h3 className="text-xl font-bold text-white mb-4">
            <Icon name="info-circle" className="w-6 h-6 inline mr-2 text-cyan-400" />
            Consideraciones de Diseño
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/80">
            <div className="flex items-start space-x-2">
              <Icon name="clock" className="w-5 h-5 text-cyan-300 mt-1" />
              <div>
                <p className="font-semibold">Tiempo de Respuesta</p>
                <p className="text-sm">¿Cuán rápido debe reaccionar?</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Icon name="memory" className="w-5 h-5 text-cyan-300 mt-1" />
              <div>
                <p className="font-semibold">Recursos</p>
                <p className="text-sm">¿Cuánta memoria y procesamiento?</p>
              </div>
            </div>
            <div className="flex items-start space-x-2">
              <Icon name="project-diagram" className="w-5 h-5 text-cyan-300 mt-1" />
              <div>
                <p className="font-semibold">Complejidad</p>
                <p className="text-sm">¿Qué tan sofisticado debe ser?</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 4.5: Demo Interactivo de Arquitecturas
  {
    id: 45,
    type: 'interactive',
    title: 'Demo: Arquitecturas de Agentes en Acción',
    content: (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            <Icon name="flask" className="w-10 h-10 inline mr-3 text-cyan-400" />
            Laboratorio Interactivo de Agentes
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            Experimenta con diferentes tipos de agentes y observa cómo responden 
            al mismo entorno según su arquitectura interna.
          </p>
        </div>
        
        <AgentArchitectureDemo />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-effect p-4 rounded-lg text-center">
            <Icon name="eye" className="w-8 h-8 text-blue-300 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Observa</h3>
            <p className="text-white/70 text-sm">Cómo cada tipo de agente reacciona diferente</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <Icon name="sliders-h" className="w-8 h-8 text-green-300 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Experimenta</h3>
            <p className="text-white/70 text-sm">Cambia las condiciones del entorno</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <Icon name="lightbulb" className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Aprende</h3>
            <p className="text-white/70 text-sm">Comprende las diferencias arquitectónicas</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 5: Sistemas Multiagente (MAS)
  {
    id: 5,
    type: 'content',
    title: 'Sistemas Multiagente (MAS)',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Icon name="users" className="w-10 h-10 mr-4 text-purple-400" />
            ¿Qué es un Sistema Multiagente?
          </h2>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg mb-8">
            <p className="text-xl text-white">
              Un MAS es un sistema compuesto por múltiples agentes inteligentes que interactúan 
              entre sí para resolver problemas que son difíciles o imposibles para un agente individual.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <Icon name="shield-alt" className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Autonomía</h3>
              <p className="text-white/70 text-sm">Cada agente es independiente y autogobernado</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <Icon name="eye-slash" className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Vistas Locales</h3>
              <p className="text-white/70 text-sm">Ningún agente tiene vista global completa</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <Icon name="network-wired" className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Descentralización</h3>
              <p className="text-white/70 text-sm">No hay control centralizado</p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6">
            <Icon name="handshake" className="w-8 h-8 inline mr-2 text-cyan-400" />
            Cooperación vs Competencia
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Icon name="hands-helping" className="w-6 h-6 mr-2 text-green-300" />
                Cooperación
              </h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <Icon name="check" className="w-4 h-4 text-green-400 mr-2 mt-1" />
                  <span>Objetivos compartidos</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" className="w-4 h-4 text-green-400 mr-2 mt-1" />
                  <span>Intercambio de información</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" className="w-4 h-4 text-green-400 mr-2 mt-1" />
                  <span>División del trabajo</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-black/30 rounded">
                <p className="text-sm text-white/70">
                  <strong>Ejemplo:</strong> Enjambre de drones de rescate
                </p>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-red-500/20 to-red-600/10 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center">
                <Icon name="chess" className="w-6 h-6 mr-2 text-red-300" />
                Competencia
              </h4>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-start">
                  <Icon name="times" className="w-4 h-4 text-red-400 mr-2 mt-1" />
                  <span>Objetivos conflictivos</span>
                </li>
                <li className="flex items-start">
                  <Icon name="times" className="w-4 h-4 text-red-400 mr-2 mt-1" />
                  <span>Recursos limitados</span>
                </li>
                <li className="flex items-start">
                  <Icon name="times" className="w-4 h-4 text-red-400 mr-2 mt-1" />
                  <span>Estrategias ocultas</span>
                </li>
              </ul>
              <div className="mt-4 p-3 bg-black/30 rounded">
                <p className="text-sm text-white/70">
                  <strong>Ejemplo:</strong> Subastas automatizadas
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 6: Comunicación y Coordinación en MAS
  {
    id: 6,
    type: 'content',
    title: 'Comunicación y Coordinación en MAS',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Icon name="comments" className="w-10 h-10 mr-4 text-blue-400" />
            Mecanismos de Comunicación
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-blue-500/20 to-blue-600/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Protocolos de Comunicación</h3>
              <div className="space-y-3">
                <div className="bg-black/30 p-3 rounded">
                  <p className="text-blue-300 font-semibold">KQML</p>
                  <p className="text-white/70 text-sm">Knowledge Query Manipulation Language</p>
                </div>
                <div className="bg-black/30 p-3 rounded">
                  <p className="text-blue-300 font-semibold">ACL</p>
                  <p className="text-white/70 text-sm">Agent Communication Language</p>
                </div>
                <div className="bg-black/30 p-3 rounded">
                  <p className="text-blue-300 font-semibold">Contract Net</p>
                  <p className="text-white/70 text-sm">Protocolo de negociación</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-purple-500/20 to-purple-600/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Esquema Challenge-Response</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-500/30 rounded-full p-2">
                    <span className="text-white font-bold">1</span>
                  </div>
                  <p className="text-white/80">"¿Quién puede hacer X?"</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-500/30 rounded-full p-2">
                    <span className="text-white font-bold">2</span>
                  </div>
                  <p className="text-white/80">"Yo puedo, por este precio"</p>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="bg-purple-500/30 rounded-full p-2">
                    <span className="text-white font-bold">3</span>
                  </div>
                  <p className="text-white/80">"Contrato establecido"</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6">
            <Icon name="sync-alt" className="w-8 h-8 inline mr-2 text-green-400" />
            Problemas de Coordinación
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all">
              <Icon name="handshake" className="w-10 h-10 text-yellow-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Consenso</h4>
              <p className="text-white/70 text-sm">Acordar un valor común entre todos los agentes</p>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all">
              <Icon name="project-diagram" className="w-10 h-10 text-blue-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Coordinación</h4>
              <p className="text-white/70 text-sm">Sincronizar acciones para evitar conflictos</p>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all">
              <Icon name="tasks" className="w-10 h-10 text-green-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Distribución</h4>
              <p className="text-white/70 text-sm">Asignar tareas eficientemente</p>
            </div>
            
            <div className="bg-white/10 p-4 rounded-lg hover:bg-white/20 transition-all">
              <Icon name="balance-scale" className="w-10 h-10 text-purple-400 mb-3" />
              <h4 className="font-bold text-white mb-2">Negociación</h4>
              <p className="text-white/70 text-sm">Resolver conflictos de intereses</p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-orange-500/10 to-red-500/10">
          <h3 className="text-xl font-bold text-white mb-4">
            <Icon name="exclamation-triangle" className="w-6 h-6 inline mr-2 text-orange-400" />
            Desafíos en MAS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-white/80">
              <p className="font-semibold text-orange-300 mb-1">Escalabilidad</p>
              <p className="text-sm">Mantener eficiencia con miles de agentes</p>
            </div>
            <div className="text-white/80">
              <p className="font-semibold text-orange-300 mb-1">Robustez</p>
              <p className="text-sm">Tolerancia a fallos de agentes individuales</p>
            </div>
            <div className="text-white/80">
              <p className="font-semibold text-orange-300 mb-1">Privacidad</p>
              <p className="text-sm">Compartir información sin revelar secretos</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 7: Ejemplos Reales de MAS
  {
    id: 7,
    type: 'content',
    title: 'Aplicaciones Reales de Sistemas Multiagente',
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Simulación de Tráfico */}
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <Icon name="traffic-light" className="w-10 h-10 text-green-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Control de Tráfico Inteligente</h3>
            </div>
            <div className="bg-black/30 p-4 rounded-lg mb-4">
              <p className="text-white/80 mb-2"><strong>Agentes involucrados:</strong></p>
              <ul className="space-y-1 text-white/70 text-sm">
                <li>• Semáforos inteligentes</li>
                <li>• Vehículos conectados</li>
                <li>• Sensores de flujo</li>
              </ul>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Beneficio:</strong> Reducción del 30% en tiempos de espera mediante 
              coordinación adaptativa en tiempo real
            </p>
          </div>

          {/* Enjambre de Drones */}
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <Icon name="helicopter" className="w-10 h-10 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Enjambres de Drones</h3>
            </div>
            <div className="bg-black/30 p-4 rounded-lg mb-4">
              <p className="text-white/80 mb-2"><strong>Aplicaciones:</strong></p>
              <ul className="space-y-1 text-white/70 text-sm">
                <li>• Búsqueda y rescate</li>
                <li>• Mapeo de desastres</li>
                <li>• Agricultura de precisión</li>
              </ul>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Coordinación:</strong> Algoritmos de swarm intelligence para 
              cobertura óptima del área
            </p>
          </div>

          {/* Logística Automatizada */}
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <Icon name="warehouse" className="w-10 h-10 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Almacenes Inteligentes</h3>
            </div>
            <div className="bg-black/30 p-4 rounded-lg mb-4">
              <p className="text-white/80 mb-2"><strong>Sistema Amazon Robotics:</strong></p>
              <ul className="space-y-1 text-white/70 text-sm">
                <li>• Robots transportadores</li>
                <li>• Sistema de gestión central</li>
                <li>• Optimización de rutas</li>
              </ul>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Resultado:</strong> 50% más eficiencia en preparación de pedidos
            </p>
          </div>

          {/* Smart Grid */}
          <div className="glass-effect p-6 rounded-xl hover:scale-105 transition-transform">
            <div className="flex items-center mb-4">
              <Icon name="bolt" className="w-10 h-10 text-yellow-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Redes Eléctricas Inteligentes</h3>
            </div>
            <div className="bg-black/30 p-4 rounded-lg mb-4">
              <p className="text-white/80 mb-2"><strong>Componentes:</strong></p>
              <ul className="space-y-1 text-white/70 text-sm">
                <li>• Generadores distribuidos</li>
                <li>• Consumidores inteligentes</li>
                <li>• Sistemas de almacenamiento</li>
              </ul>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Ventaja:</strong> Balance automático entre oferta y demanda, 
              integración de renovables
            </p>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <h3 className="text-2xl font-bold text-white mb-4">
            <Icon name="chart-line" className="w-8 h-8 inline mr-2 text-purple-400" />
            Impacto de los MAS en la Industria
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-purple-300">45%</p>
              <p className="text-white/70 text-sm">Reducción en costos operativos</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-blue-300">60%</p>
              <p className="text-white/70 text-sm">Mejora en tiempo de respuesta</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-green-300">3x</p>
              <p className="text-white/70 text-sm">Mayor escalabilidad</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-orange-300">80%</p>
              <p className="text-white/70 text-sm">Reducción de errores</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 7.5: Demo Sistemas Multiagente
  {
    id: 75,
    type: 'interactive',
    title: 'Demo: Sistemas Multiagente en Acción',
    content: (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            <Icon name="users" className="w-10 h-10 inline mr-3 text-purple-400" />
            Simulador de Enjambres Inteligentes
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            Observa cómo múltiples agentes cooperan para resolver tareas complejas 
            sin control centralizado.
          </p>
        </div>
        
        <MultiAgentSwarmDemo />
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mt-8">
          <div className="glass-effect p-4 rounded-lg text-center">
            <Icon name="search" className="w-8 h-8 text-blue-300 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Exploración</h3>
            <p className="text-white/70 text-sm">Mapeo coordinado sin solapamiento</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <Icon name="life-ring" className="w-8 h-8 text-red-300 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Rescate</h3>
            <p className="text-white/70 text-sm">Búsqueda y localización distribuida</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <Icon name="users" className="w-8 h-8 text-green-300 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Formación</h3>
            <p className="text-white/70 text-sm">Mantener estructura mientras se mueven</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <Icon name="boxes" className="w-8 h-8 text-orange-300 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Recursos</h3>
            <p className="text-white/70 text-sm">Recolección y distribución optimizada</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 8: Model Context Protocol (MCP)
  {
    id: 8,
    type: 'content',
    title: '¿Qué es Model Context Protocol (MCP)?',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Icon name="plug" className="w-10 h-10 mr-4 text-cyan-400" />
            Model Context Protocol
          </h2>
          
          <div className="bg-gradient-to-r from-cyan-500/20 to-blue-500/20 p-6 rounded-lg mb-8">
            <p className="text-xl text-white">
              MCP es un <ClickableInfo term="protocolo abierto" type="technical" content="Estándar libre y accesible para todos" /> 
              que estandariza cómo las aplicaciones proporcionan contexto a los LLMs, 
              creando un "puerto USB-C universal para aplicaciones de IA".
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Icon name="sitemap" className="w-6 h-6 mr-2 text-blue-300" />
                Arquitectura Cliente-Servidor
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Icon name="desktop" className="w-5 h-5 text-green-400" />
                  <p className="text-white/80"><strong>MCP Hosts:</strong> Aplicaciones (Claude, IDEs)</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="exchange-alt" className="w-5 h-5 text-yellow-400" />
                  <p className="text-white/80"><strong>MCP Clients:</strong> Mantienen conexiones</p>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="server" className="w-5 h-5 text-purple-400" />
                  <p className="text-white/80"><strong>MCP Servers:</strong> Exponen capacidades</p>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center">
                <Icon name="star" className="w-6 h-6 mr-2 text-yellow-300" />
                Beneficios Clave
              </h3>
              <ul className="space-y-3 text-white/80">
                <li className="flex items-start">
                  <Icon name="check-circle" className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  <span>Integraciones pre-construidas para LLMs</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check-circle" className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  <span>Flexibilidad para cambiar proveedores</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check-circle" className="w-5 h-5 text-green-400 mr-2 mt-0.5" />
                  <span>Mejores prácticas de seguridad</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6">
            <Icon name="puzzle-piece" className="w-8 h-8 inline mr-2 text-purple-400" />
            ¿Cómo Funciona MCP?
          </h3>
          
          <div className="bg-black/30 p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
              <div className="text-center">
                <div className="bg-blue-500/20 p-4 rounded-full mb-3">
                  <Icon name="database" className="w-12 h-12 text-blue-300" />
                </div>
                <p className="text-white font-semibold">Fuentes de Datos</p>
                <p className="text-white/60 text-sm">Archivos, DBs, APIs</p>
              </div>
              
              <Icon name="arrow-right" className="w-8 h-8 text-white/40 hidden md:block" />
              
              <div className="text-center">
                <div className="bg-purple-500/20 p-4 rounded-full mb-3">
                  <Icon name="server" className="w-12 h-12 text-purple-300" />
                </div>
                <p className="text-white font-semibold">MCP Server</p>
                <p className="text-white/60 text-sm">Expone datos</p>
              </div>
              
              <Icon name="arrow-right" className="w-8 h-8 text-white/40 hidden md:block" />
              
              <div className="text-center">
                <div className="bg-green-500/20 p-4 rounded-full mb-3">
                  <Icon name="plug" className="w-12 h-12 text-green-300" />
                </div>
                <p className="text-white font-semibold">Protocolo MCP</p>
                <p className="text-white/60 text-sm">Comunicación</p>
              </div>
              
              <Icon name="arrow-right" className="w-8 h-8 text-white/40 hidden md:block" />
              
              <div className="text-center">
                <div className="bg-orange-500/20 p-4 rounded-full mb-3">
                  <Icon name="brain" className="w-12 h-12 text-orange-300" />
                </div>
                <p className="text-white font-semibold">LLM/Aplicación</p>
                <p className="text-white/60 text-sm">Usa contexto</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg">
            <p className="text-white/80">
              <Icon name="info-circle" className="w-5 h-5 inline mr-2 text-cyan-400" />
              <strong>Ejemplo:</strong> Un LLM puede acceder a tu base de datos local, archivos del proyecto 
              y APIs externas a través de servidores MCP, todo con un protocolo unificado.
            </p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 9: Aplicaciones de MCP
  {
    id: 9,
    type: 'content',
    title: 'Aplicaciones Prácticas del MCP',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Icon name="rocket" className="w-10 h-10 mr-4 text-purple-400" />
            Casos de Uso del MCP
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Flujos de trabajo de agentes */}
            <div className="bg-gradient-to-br from-blue-500/20 to-blue-600/10 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Icon name="project-diagram" className="w-8 h-8 text-blue-300 mr-3" />
                <h3 className="text-xl font-bold text-white">Flujos de Trabajo de Agentes IA</h3>
              </div>
              <p className="text-white/80 mb-4">
                Construcción de sistemas complejos donde múltiples agentes colaboran
              </p>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-blue-300 font-mono text-sm mb-2">Ejemplo: Pipeline de Análisis</p>
                <ol className="text-white/70 text-sm space-y-1">
                  <li>1. Agente recopila datos vía MCP</li>
                  <li>2. Agente analiza con contexto completo</li>
                  <li>3. Agente genera reporte</li>
                </ol>
              </div>
            </div>

            {/* Integración de datos */}
            <div className="bg-gradient-to-br from-green-500/20 to-green-600/10 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Icon name="database" className="w-8 h-8 text-green-300 mr-3" />
                <h3 className="text-xl font-bold text-white">Integración de Fuentes Diversas</h3>
              </div>
              <p className="text-white/80 mb-4">
                Acceso unificado a múltiples fuentes de datos
              </p>
              <div className="bg-black/30 p-4 rounded-lg space-y-2">
                <div className="flex items-center text-white/70 text-sm">
                  <Icon name="file-alt" className="w-4 h-4 text-green-300 mr-2" />
                  <span>Archivos locales y documentos</span>
                </div>
                <div className="flex items-center text-white/70 text-sm">
                  <Icon name="database" className="w-4 h-4 text-green-300 mr-2" />
                  <span>Bases de datos SQL/NoSQL</span>
                </div>
                <div className="flex items-center text-white/70 text-sm">
                  <Icon name="cloud" className="w-4 h-4 text-green-300 mr-2" />
                  <span>APIs y servicios web</span>
                </div>
              </div>
            </div>

            {/* Contexto persistente */}
            <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Icon name="history" className="w-8 h-8 text-purple-300 mr-3" />
                <h3 className="text-xl font-bold text-white">Contexto Persistente</h3>
              </div>
              <p className="text-white/80 mb-4">
                Mantener estado y memoria entre sesiones
              </p>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-purple-300 font-semibold text-sm mb-2">Beneficios:</p>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Conversaciones continuas</li>
                  <li>• Aprendizaje acumulativo</li>
                  <li>• Personalización profunda</li>
                </ul>
              </div>
            </div>

            {/* Seguridad mejorada */}
            <div className="bg-gradient-to-br from-orange-500/20 to-orange-600/10 p-6 rounded-xl">
              <div className="flex items-center mb-4">
                <Icon name="shield-alt" className="w-8 h-8 text-orange-300 mr-3" />
                <h3 className="text-xl font-bold text-white">Seguridad y Control</h3>
              </div>
              <p className="text-white/80 mb-4">
                Control granular sobre acceso a recursos
              </p>
              <div className="bg-black/30 p-4 rounded-lg">
                <p className="text-orange-300 font-semibold text-sm mb-2">Características:</p>
                <ul className="text-white/70 text-sm space-y-1">
                  <li>• Permisos por servidor</li>
                  <li>• Auditoría de accesos</li>
                  <li>• Sandboxing de datos</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-cyan-500/10 to-purple-500/10">
          <h3 className="text-xl font-bold text-white mb-4">
            <Icon name="code" className="w-6 h-6 inline mr-2 text-cyan-400" />
            Ejemplo de Implementación MCP
          </h3>
          <div className="bg-black/40 p-4 rounded-lg overflow-x-auto">
            <pre className="text-sm text-white/90">
              <code>{`// Servidor MCP simple
class MyMCPServer {
  async getContext(request) {
    // Conectar a fuentes de datos
    const dbData = await database.query(request.query);
    const fileData = await filesystem.read(request.path);
    
    // Retornar contexto estructurado
    return {
      database: dbData,
      files: fileData,
      metadata: {
        timestamp: Date.now(),
        permissions: request.user.permissions
      }
    };
  }
}`}</code>
            </pre>
          </div>
        </div>
      </div>
    )
  },

  // Slide 10: n8n como Sistema de Agentes
  {
    id: 10,
    type: 'content',
    title: 'n8n: Automatización como Sistema de Agentes',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Icon name="cogs" className="w-10 h-10 mr-4 text-orange-400" />
            ¿Qué es n8n?
          </h2>
          
          <div className="bg-gradient-to-r from-orange-500/20 to-red-500/20 p-6 rounded-lg mb-8">
            <p className="text-xl text-white">
              n8n es una plataforma de automatización de flujos de trabajo de código abierto 
              que permite conectar aplicaciones y servicios sin programación extensiva, 
              actuando como un sistema de agentes distribuido.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <Icon name="plug" className="w-12 h-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">+200 Integraciones</h3>
              <p className="text-white/70 text-sm">Conecta con servicios populares</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <Icon name="code-branch" className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Código Abierto</h3>
              <p className="text-white/70 text-sm">Personalizable y auto-hospedable</p>
            </div>
            
            <div className="bg-white/10 p-6 rounded-lg text-center hover:bg-white/20 transition-all">
              <Icon name="project-diagram" className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Visual y Flexible</h3>
              <p className="text-white/70 text-sm">Diseño de flujos intuitivo</p>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6">
            <Icon name="robot" className="w-8 h-8 inline mr-2 text-cyan-400" />
            n8n como Sistema de Agentes
          </h3>
          
          <div className="bg-black/30 p-6 rounded-xl mb-6">
            <h4 className="text-xl font-semibold text-white mb-4">Cada Nodo = Un Agente</h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-blue-500/20 p-4 rounded-lg">
                <Icon name="eye" className="w-8 h-8 text-blue-300 mb-2" />
                <h5 className="font-bold text-white mb-1">Sensores</h5>
                <p className="text-white/70 text-sm">Webhooks, triggers, APIs</p>
              </div>
              
              <div className="bg-purple-500/20 p-4 rounded-lg">
                <Icon name="brain" className="w-8 h-8 text-purple-300 mb-2" />
                <h5 className="font-bold text-white mb-1">Procesamiento</h5>
                <p className="text-white/70 text-sm">Lógica, condiciones, transformaciones</p>
              </div>
              
              <div className="bg-green-500/20 p-4 rounded-lg">
                <Icon name="hand-paper" className="w-8 h-8 text-green-300 mb-2" />
                <h5 className="font-bold text-white mb-1">Actuadores</h5>
                <p className="text-white/70 text-sm">Envío de datos, acciones, notificaciones</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white mb-3">Características de Agente</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-start">
                  <Icon name="check" className="w-4 h-4 text-cyan-400 mr-2 mt-0.5" />
                  <span>Autonomía en la ejecución</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" className="w-4 h-4 text-cyan-400 mr-2 mt-0.5" />
                  <span>Reactividad a eventos</span>
                </li>
                <li className="flex items-start">
                  <Icon name="check" className="w-4 h-4 text-cyan-400 mr-2 mt-0.5" />
                  <span>Comunicación entre nodos</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white mb-3">Ventajas del Enfoque</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li className="flex items-start">
                  <Icon name="star" className="w-4 h-4 text-orange-400 mr-2 mt-0.5" />
                  <span>Sin código extensivo</span>
                </li>
                <li className="flex items-start">
                  <Icon name="star" className="w-4 h-4 text-orange-400 mr-2 mt-0.5" />
                  <span>Reutilización de componentes</span>
                </li>
                <li className="flex items-start">
                  <Icon name="star" className="w-4 h-4 text-orange-400 mr-2 mt-0.5" />
                  <span>Debugging visual</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 11: Ejemplo Práctico con n8n
  {
    id: 11,
    type: 'content',
    title: 'Ejemplo Práctico: Flujo Automatizado en n8n',
    content: (
      <div className="space-y-4">
        <div className="glass-effect p-4 rounded-xl">
          <h2 className="text-xl font-bold text-white mb-3 flex items-center">
            <Icon name="envelope" className="w-6 h-6 mr-2 text-blue-400" />
            Caso: Sistema de Procesamiento de Facturas
          </h2>
          
          <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-3 rounded-lg mb-4 text-center">
            <p className="text-sm text-white">
              Automatización inteligente que detecta correos con facturas, extrae información, la procesa y almacena organizadamente.
            </p>
          </div>

          {/* Flujo visual */}
          <div className="bg-black/30 p-3 rounded-xl">
            <h3 className="text-base font-bold text-white mb-3 text-center">Flujo de Agentes</h3>
            
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-2">
              {/* Agente 1: Sensor */}
              <div className="text-center flex-1">
                <div className="bg-blue-500/20 p-2 rounded-lg mb-2 mx-auto w-20 h-20 flex items-center justify-center">
                  <Icon name="envelope-open" className="w-10 h-10 text-blue-300" />
                </div>
                <h4 className="font-bold text-white text-xs">Agente Sensor</h4>
                <p className="text-white/70 text-xs">Gmail Trigger</p>
                <div className="bg-black/50 p-1 rounded mt-1 mx-1">
                  <p className="text-xs text-blue-300">Detecta:<br/>"Factura"</p>
                </div>
              </div>

              <Icon name="arrow-right" className="w-5 h-5 text-white/40 hidden md:block flex-shrink-0" />

              {/* Agente 2: Filtro */}
              <div className="text-center flex-1">
                <div className="bg-purple-500/20 p-2 rounded-lg mb-2 mx-auto w-20 h-20 flex items-center justify-center">
                  <Icon name="filter" className="w-10 h-10 text-purple-300" />
                </div>
                <h4 className="font-bold text-white text-xs">Agente Decisor</h4>
                <p className="text-white/70 text-xs">IF Node</p>
                <div className="bg-black/50 p-1 rounded mt-1 mx-1">
                  <p className="text-xs text-purple-300">¿Tiene PDF?</p>
                </div>
              </div>

              <Icon name="arrow-right" className="w-5 h-5 text-white/40 hidden md:block flex-shrink-0" />

              {/* Agente 3: Extractor */}
              <div className="text-center flex-1">
                <div className="bg-green-500/20 p-2 rounded-lg mb-2 mx-auto w-20 h-20 flex items-center justify-center">
                  <Icon name="file-pdf" className="w-10 h-10 text-green-300" />
                </div>
                <h4 className="font-bold text-white text-xs">Agente Extractor</h4>
                <p className="text-white/70 text-xs">PDF Extract</p>
                <div className="bg-black/50 p-1 rounded mt-1 mx-1">
                  <p className="text-xs text-green-300">Datos →<br/>JSON</p>
                </div>
              </div>

              <Icon name="arrow-right" className="w-5 h-5 text-white/40 hidden md:block flex-shrink-0" />

              {/* Agente 4: Actuador */}
              <div className="text-center flex-1">
                <div className="bg-orange-500/20 p-2 rounded-lg mb-2 mx-auto w-20 h-20 flex items-center justify-center">
                  <Icon name="cloud-upload-alt" className="w-10 h-10 text-orange-300" />
                </div>
                <h4 className="font-bold text-white text-xs">Agente Actuador</h4>
                <p className="text-white/70 text-xs">Google Drive</p>
                <div className="bg-black/50 p-1 rounded mt-1 mx-1">
                  <p className="text-xs text-orange-300">Guardar<br/>archivo</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-4 rounded-xl">
          <h3 className="text-lg font-bold text-white mb-3">
            <Icon name="code" className="w-5 h-5 inline mr-2 text-green-400" />
            Configuración del Flujo
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="bg-black/30 p-2 rounded-lg">
              <h4 className="text-sm font-semibold text-white mb-1">1. Trigger de Gmail</h4>
              <pre className="text-xs text-green-300 overflow-x-auto text-left">
<code>{`{
  "trigger": "new_email",
  "filters": {
    "subject": "contains('factura')",
    "hasAttachment": true
  }
}`}</code>
              </pre>
            </div>
            
            <div className="bg-black/30 p-2 rounded-lg">
              <h4 className="text-sm font-semibold text-white mb-1">2. Procesamiento</h4>
              <pre className="text-xs text-purple-300 overflow-x-auto text-left">
<code>{`{
  "extract": ["fecha", "monto", "proveedor"],
  "format": "structured_json",
  "validation": true
}`}</code>
              </pre>
            </div>
          </div>

          <div className="mt-3 p-2 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-lg">
            <h4 className="text-sm font-semibold text-white mb-1">
              <Icon name="lightbulb" className="w-4 h-4 inline mr-1 text-yellow-400" />
              Características de Agente Demostradas
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-1 text-white/80 text-xs">
              <li>✓ Autonomía: Ejecuta sin intervención humana</li>
              <li>✓ Reactividad: Responde a nuevos correos</li>
              <li>✓ Decisión: Evalúa condiciones del contenido</li>
              <li>✓ Acción: Modifica el entorno (guarda archivos)</li>
            </ul>
          </div>
        </div>
      </div>
    )
  },

  // Slide 11.5: Demo n8n Interactivo
  {
    id: 115,
    type: 'interactive',
    title: 'Demo: n8n como Sistema de Agentes',
    content: (
      <div className="space-y-6">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">
            <Icon name="project-diagram" className="w-10 h-10 inline mr-3 text-orange-400" />
            Laboratorio de Automatización n8n
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto">
            Experimenta cómo los nodos de n8n funcionan como agentes distribuidos 
            en un sistema de automatización inteligente.
          </p>
        </div>
        
        <N8nFlowDemo />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          <div className="glass-effect p-4 rounded-lg text-center">
            <Icon name="eye" className="w-8 h-8 text-blue-300 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Sensores</h3>
            <p className="text-white/70 text-sm">Triggers que detectan eventos</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <Icon name="brain" className="w-8 h-8 text-purple-300 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Procesadores</h3>
            <p className="text-white/70 text-sm">Lógica de transformación y decisión</p>
          </div>
          <div className="glass-effect p-4 rounded-lg text-center">
            <Icon name="hand-paper" className="w-8 h-8 text-green-300 mx-auto mb-2" />
            <h3 className="font-semibold text-white mb-1">Actuadores</h3>
            <p className="text-white/70 text-sm">Acciones en sistemas externos</p>
          </div>
        </div>
      </div>
    )
  },

  // Slide 12: Casos de Uso Avanzados
  {
    id: 12,
    type: 'content',
    title: 'Casos de Uso Avanzados con n8n',
    content: (
      <div className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Marketing Automation */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Icon name="bullhorn" className="w-10 h-10 text-purple-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Marketing Automation</h3>
            </div>
            <div className="bg-black/30 p-4 rounded-lg mb-4">
              <p className="text-white/80 mb-3">Sistema multiagente para campañas:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-white/70">
                  <Icon name="user-plus" className="w-4 h-4 text-green-300 mr-2" />
                  <span>Agente de captación de leads</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Icon name="chart-line" className="w-4 h-4 text-blue-300 mr-2" />
                  <span>Agente de scoring y segmentación</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Icon name="envelope" className="w-4 h-4 text-purple-300 mr-2" />
                  <span>Agente de email personalizado</span>
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              <strong>ROI:</strong> 3x más conversiones con personalización automática
            </p>
          </div>

          {/* DevOps Automation */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Icon name="server" className="w-10 h-10 text-blue-400 mr-3" />
              <h3 className="text-xl font-bold text-white">DevOps Intelligence</h3>
            </div>
            <div className="bg-black/30 p-4 rounded-lg mb-4">
              <p className="text-white/80 mb-3">Monitoreo y respuesta automática:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-white/70">
                  <Icon name="heartbeat" className="w-4 h-4 text-red-300 mr-2" />
                  <span>Agente monitor de salud</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Icon name="exclamation-triangle" className="w-4 h-4 text-yellow-300 mr-2" />
                  <span>Agente de detección de anomalías</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Icon name="tools" className="w-4 h-4 text-green-300 mr-2" />
                  <span>Agente de auto-remediación</span>
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Resultado:</strong> 80% reducción en tiempo de inactividad
            </p>
          </div>

          {/* Customer Service */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Icon name="headset" className="w-10 h-10 text-green-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Servicio al Cliente 24/7</h3>
            </div>
            <div className="bg-black/30 p-4 rounded-lg mb-4">
              <p className="text-white/80 mb-3">Sistema de soporte inteligente:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-white/70">
                  <Icon name="robot" className="w-4 h-4 text-cyan-300 mr-2" />
                  <span>Agente chatbot inicial</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Icon name="brain" className="w-4 h-4 text-purple-300 mr-2" />
                  <span>Agente clasificador de tickets</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Icon name="user-tie" className="w-4 h-4 text-blue-300 mr-2" />
                  <span>Agente escalador humano</span>
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Eficiencia:</strong> 70% resolución automática
            </p>
          </div>

          {/* Data Intelligence */}
          <div className="glass-effect p-6 rounded-xl">
            <div className="flex items-center mb-4">
              <Icon name="chart-pie" className="w-10 h-10 text-orange-400 mr-3" />
              <h3 className="text-xl font-bold text-white">Business Intelligence</h3>
            </div>
            <div className="bg-black/30 p-4 rounded-lg mb-4">
              <p className="text-white/80 mb-3">Pipeline de datos inteligente:</p>
              <div className="space-y-2 text-sm">
                <div className="flex items-center text-white/70">
                  <Icon name="download" className="w-4 h-4 text-blue-300 mr-2" />
                  <span>Agentes extractores ETL</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Icon name="sync" className="w-4 h-4 text-green-300 mr-2" />
                  <span>Agentes de transformación</span>
                </div>
                <div className="flex items-center text-white/70">
                  <Icon name="file-alt" className="w-4 h-4 text-orange-300 mr-2" />
                  <span>Agente generador de reportes</span>
                </div>
              </div>
            </div>
            <p className="text-white/70 text-sm">
              <strong>Velocidad:</strong> Reportes en tiempo real vs diarios
            </p>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <h3 className="text-xl font-bold text-white mb-4">
            <Icon name="infinity" className="w-6 h-6 inline mr-2 text-purple-400" />
            El Poder de la Orquestación de Agentes
          </h3>
          <p className="text-white/80 mb-4">
            n8n transforma procesos lineales en sistemas inteligentes donde cada nodo actúa 
            como un agente especializado, creando soluciones que:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
            <div>
              <Icon name="clock" className="w-8 h-8 text-blue-300 mx-auto mb-2" />
              <p className="text-white/70 text-sm">Operan 24/7</p>
            </div>
            <div>
              <Icon name="bolt" className="w-8 h-8 text-yellow-300 mx-auto mb-2" />
              <p className="text-white/70 text-sm">Responden en ms</p>
            </div>
            <div>
              <Icon name="expand-arrows-alt" className="w-8 h-8 text-green-300 mx-auto mb-2" />
              <p className="text-white/70 text-sm">Escalan sin límites</p>
            </div>
            <div>
              <Icon name="graduation-cap" className="w-8 h-8 text-purple-300 mx-auto mb-2" />
              <p className="text-white/70 text-sm">Mejoran con el tiempo</p>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 13: Integración con Vibe Coding
  {
    id: 13,
    type: 'content',
    title: 'Vibe Coding y Agentes: El Futuro del Desarrollo',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
            <Icon name="magic" className="w-10 h-10 mr-4 text-purple-400" />
            Vibe Coding: Programación con IA
          </h2>
          
          <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 p-6 rounded-lg mb-8">
            <p className="text-xl text-white">
              Vibe Coding es un paradigma donde usamos lenguaje natural para crear código, 
              convirtiendo intenciones en aplicaciones funcionales mediante agentes de IA.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Filosofía Core</h3>
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <Icon name="rocket" className="w-5 h-5 text-yellow-400 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Code First, Refine Later</p>
                    <p className="text-white/70 text-sm">Prototipa rápido, perfecciona después</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="comments" className="w-5 h-5 text-blue-400 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Natural Language First</p>
                    <p className="text-white/70 text-sm">Describe qué quieres, no cómo</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="sync-alt" className="w-5 h-5 text-green-400 mt-1" />
                  <div>
                    <p className="font-semibold text-white">Iteración Continua</p>
                    <p className="text-white/70 text-sm">Refina con conversación</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">Herramientas Clave</h3>
              <div className="space-y-3">
                <div className="bg-black/30 p-3 rounded flex items-center justify-between">
                  <span className="text-white">ChatGPT/Claude</span>
                  <span className="text-green-300 text-sm">Asistentes IA</span>
                </div>
                <div className="bg-black/30 p-3 rounded flex items-center justify-between">
                  <span className="text-white">GitHub Copilot</span>
                  <span className="text-blue-300 text-sm">Autocompletado</span>
                </div>
                <div className="bg-black/30 p-3 rounded flex items-center justify-between">
                  <span className="text-white">Cursor/Replit</span>
                  <span className="text-purple-300 text-sm">IDEs con IA</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-6">
            <Icon name="link" className="w-8 h-8 inline mr-2 text-cyan-400" />
            Conectando Vibe Coding con Agentes
          </h3>
          
          <div className="bg-black/30 p-6 rounded-xl">
            <h4 className="text-xl font-semibold text-white mb-4">Ejemplo: Crear un Sistema Multiagente con Vibe Coding</h4>
            
            <div className="space-y-4">
              <div className="bg-blue-500/10 p-4 rounded-lg">
                <p className="text-blue-300 font-mono text-sm mb-2">Prompt Inicial:</p>
                <p className="text-white/80 italic">
                  "Crea un sistema de agentes para monitorear precios de productos en múltiples 
                  tiendas online y notificarme cuando haya ofertas"
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-green-500/10 p-3 rounded">
                  <p className="text-green-300 font-semibold text-sm mb-1">Agente Scraper</p>
                  <p className="text-white/70 text-xs">Generado: Puppeteer bot</p>
                </div>
                <div className="bg-purple-500/10 p-3 rounded">
                  <p className="text-purple-300 font-semibold text-sm mb-1">Agente Comparador</p>
                  <p className="text-white/70 text-xs">Generado: Lógica de precios</p>
                </div>
                <div className="bg-orange-500/10 p-3 rounded">
                  <p className="text-orange-300 font-semibold text-sm mb-1">Agente Notificador</p>
                  <p className="text-white/70 text-xs">Generado: Email/SMS API</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white mb-3">Ventajas del Enfoque</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Desarrollo 10x más rápido</li>
                <li>• No requiere expertise profundo</li>
                <li>• Iteración en tiempo real</li>
                <li>• Código mantenible generado</li>
              </ul>
            </div>
            
            <div className="bg-gradient-to-r from-orange-500/10 to-red-500/10 p-6 rounded-lg">
              <h4 className="text-lg font-bold text-white mb-3">Integración con n8n</h4>
              <ul className="space-y-2 text-white/80 text-sm">
                <li>• Vibe Coding genera los nodos</li>
                <li>• n8n orquesta la ejecución</li>
                <li>• MCP conecta los datos</li>
                <li>• Sistema completo sin código manual</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
  },

  // Slide 14: El Futuro y Consideraciones Éticas
  {
    id: 14,
    type: 'content',
    title: 'El Futuro de los Agentes y Consideraciones Éticas',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Icon name="crystal-ball" className="w-10 h-10 mr-4 text-purple-400" />
            Hacia Dónde Vamos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-blue-500/20 to-purple-500/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                <Icon name="heart" className="w-6 h-6 inline mr-2 text-red-400" />
                Agentes con Emociones
              </h3>
              <p className="text-white/80 mb-3">
                Sistemas que comprenden y responden a estados emocionales humanos
              </p>
              <div className="bg-black/30 p-3 rounded">
                <p className="text-sm text-white/70">
                  <strong>Aplicaciones:</strong> Terapia, educación personalizada, 
                  compañeros virtuales
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-500/20 to-cyan-500/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                <Icon name="vr-cardboard" className="w-6 h-6 inline mr-2 text-cyan-400" />
                Agentes en el Metaverso
              </h3>
              <p className="text-white/80 mb-3">
                NPCs inteligentes y asistentes virtuales en mundos 3D
              </p>
              <div className="bg-black/30 p-3 rounded">
                <p className="text-sm text-white/70">
                  <strong>Impacto:</strong> Experiencias inmersivas, economías virtuales, 
                  educación VR
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-orange-500/20 to-red-500/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                <Icon name="file-contract" className="w-6 h-6 inline mr-2 text-orange-400" />
                Agentes Legales Autónomos
              </h3>
              <p className="text-white/80 mb-3">
                Smart contracts que negocian y ejecutan acuerdos
              </p>
              <div className="bg-black/30 p-3 rounded">
                <p className="text-sm text-white/70">
                  <strong>Blockchain:</strong> Contratos auto-ejecutables, DAOs, 
                  gobernanza descentralizada
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-purple-500/20 to-pink-500/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                <Icon name="dna" className="w-6 h-6 inline mr-2 text-purple-400" />
                Agentes Bio-Inspirados
              </h3>
              <p className="text-white/80 mb-3">
                Sistemas que evolucionan y se adaptan como organismos vivos
              </p>
              <div className="bg-black/30 p-3 rounded">
                <p className="text-sm text-white/70">
                  <strong>Técnicas:</strong> Algoritmos genéticos, redes neuronales evolutivas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl bg-gradient-to-r from-red-500/10 to-orange-500/10">
          <h3 className="text-2xl font-bold text-white mb-6">
            <Icon name="balance-scale" className="w-8 h-8 inline mr-2 text-yellow-400" />
            Consideraciones Éticas Críticas
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <Icon name="user-shield" className="w-5 h-5 mr-2 text-blue-300" />
                  Autonomía y Control
                </h4>
                <p className="text-white/70 text-sm">
                  ¿Hasta dónde permitimos que los agentes tomen decisiones críticas?
                </p>
                <div className="mt-2 text-xs text-orange-300">
                  Ejemplo: Diagnósticos médicos, decisiones financieras
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <Icon name="eye-slash" className="w-5 h-5 mr-2 text-purple-300" />
                  Privacidad y Vigilancia
                </h4>
                <p className="text-white/70 text-sm">
                  Balance entre personalización y protección de datos
                </p>
                <div className="mt-2 text-xs text-orange-300">
                  Riesgo: Perfilado excesivo, manipulación
                </div>
              </div>
            </div>
            
            <div className="space-y-4">
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <Icon name="brain" className="w-5 h-5 mr-2 text-green-300" />
                  Transparencia y Explicabilidad
                </h4>
                <p className="text-white/70 text-sm">
                  ¿Podemos entender cómo los agentes toman decisiones?
                </p>
                <div className="mt-2 text-xs text-orange-300">
                  Desafío: Cajas negras vs. IA explicable
                </div>
              </div>
              
              <div className="bg-black/30 p-4 rounded-lg">
                <h4 className="text-lg font-semibold text-white mb-2 flex items-center">
                  <Icon name="users" className="w-5 h-5 mr-2 text-red-300" />
                  Sesgo y Equidad
                </h4>
                <p className="text-white/70 text-sm">
                  Garantizar que los agentes no perpetúen discriminación
                </p>
                <div className="mt-2 text-xs text-orange-300">
                  Crucial: Datasets diversos, auditorías continuas
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl bg-gradient-to-r from-cyan-500/20 to-purple-500/20">
          <h3 className="text-xl font-bold text-white mb-4 text-center">
            <Icon name="question-circle" className="w-6 h-6 inline mr-2 text-cyan-400" />
            Pregunta para Reflexionar
          </h3>
          <p className="text-2xl text-white text-center font-light">
            "¿Dejarías que un agente tome decisiones médicas críticas por ti 
            si tuviera 99.9% de precisión?"
          </p>
          <p className="text-white/60 text-center mt-4 text-sm">
            La respuesta revela mucho sobre nuestra relación con la autonomía tecnológica
          </p>
        </div>
      </div>
    )
  },

  // Slide 15: Recursos y Conclusión
  {
    id: 15,
    type: 'content',
    title: 'Recursos y Próximos Pasos',
    content: (
      <div className="space-y-8">
        <div className="glass-effect p-8 rounded-xl">
          <h2 className="text-3xl font-bold text-white mb-8 flex items-center">
            <Icon name="book-open" className="w-10 h-10 mr-4 text-blue-400" />
            Recursos para Profundizar
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                <Icon name="graduation-cap" className="w-6 h-6 inline mr-2 text-yellow-400" />
                Aprendizaje
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="link" className="w-4 h-4 text-blue-300 mr-2 mt-1" />
                  <div>
                    <p className="text-white font-semibold">n8n.io</p>
                    <p className="text-white/60 text-sm">Documentación y tutoriales</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="link" className="w-4 h-4 text-blue-300 mr-2 mt-1" />
                  <div>
                    <p className="text-white font-semibold">modelcontextprotocol.io</p>
                    <p className="text-white/60 text-sm">Especificación MCP completa</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="link" className="w-4 h-4 text-blue-300 mr-2 mt-1" />
                  <div>
                    <p className="text-white font-semibold">OpenAI Gym</p>
                    <p className="text-white/60 text-sm">Entornos para entrenar agentes</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white/10 p-6 rounded-xl">
              <h3 className="text-xl font-bold text-white mb-4">
                <Icon name="code" className="w-6 h-6 inline mr-2 text-green-400" />
                Frameworks
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <Icon name="cube" className="w-4 h-4 text-green-300 mr-2 mt-1" />
                  <div>
                    <p className="text-white font-semibold">JADE Framework</p>
                    <p className="text-white/60 text-sm">Java para sistemas multiagente</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="cube" className="w-4 h-4 text-green-300 mr-2 mt-1" />
                  <div>
                    <p className="text-white font-semibold">LangChain</p>
                    <p className="text-white/60 text-sm">Cadenas de agentes LLM</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Icon name="cube" className="w-4 h-4 text-green-300 mr-2 mt-1" />
                  <div>
                    <p className="text-white font-semibold">AutoGPT</p>
                    <p className="text-white/60 text-sm">Agentes autónomos con GPT</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="glass-effect p-8 rounded-xl bg-gradient-to-r from-purple-500/20 to-pink-500/20">
          <h3 className="text-2xl font-bold text-white mb-6 text-center">
            <Icon name="rocket" className="w-8 h-8 inline mr-2 text-purple-400" />
            Tu Viaje con Agentes Inteligentes
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <div className="text-center">
              <div className="bg-purple-500/30 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">1</span>
              </div>
              <p className="text-white font-semibold">Experimenta</p>
              <p className="text-white/60 text-sm">Crea tu primer flujo en n8n</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500/30 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">2</span>
              </div>
              <p className="text-white font-semibold">Conecta</p>
              <p className="text-white/60 text-sm">Integra MCP con tus apps</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500/30 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">3</span>
              </div>
              <p className="text-white font-semibold">Escala</p>
              <p className="text-white/60 text-sm">Diseña sistemas multiagente</p>
            </div>
            
            <div className="text-center">
              <div className="bg-purple-500/30 rounded-full p-4 w-16 h-16 mx-auto mb-3 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">4</span>
              </div>
              <p className="text-white font-semibold">Innova</p>
              <p className="text-white/60 text-sm">Crea el futuro con IA</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-2xl text-white mb-4">
              "El futuro no es sobre reemplazar humanos con agentes, 
              sino sobre amplificar las capacidades humanas con inteligencia distribuida"
            </p>
            <p className="text-white/70">
              - La era de la colaboración humano-agente apenas comienza
            </p>
          </div>
        </div>

        <div className="glass-effect p-6 rounded-xl text-center">
          <h3 className="text-xl font-bold text-white mb-4">
            <Icon name="users" className="w-6 h-6 inline mr-2 text-cyan-400" />
            ¡Únete a la Comunidad!
          </h3>
          <div className="flex justify-center space-x-6">
            <div className="text-white/80">
              <Icon name="discord" className="w-8 h-8 mb-2" />
              <p className="text-sm">Discord MCP</p>
            </div>
            <div className="text-white/80">
              <Icon name="github" className="w-8 h-8 mb-2" />
              <p className="text-sm">GitHub n8n</p>
            </div>
            <div className="text-white/80">
              <Icon name="slack" className="w-8 h-8 mb-2" />
              <p className="text-sm">Slack AI Agents</p>
            </div>
          </div>
        </div>
      </div>
    )
  }
];

export { agentesInteligentesSlides };
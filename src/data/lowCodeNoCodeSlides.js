import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';
import { businessDefinitions } from './definitions/businessDefinitions';
import LowCodeNoCodeComparison from '../components/LowCodeNoCode/LowCodeNoCodeComparison';
import PlatformSelector from '../components/LowCodeNoCode/PlatformSelector';

export const lowCodeNoCodeSlides = [
  {
    id: 36,
    type: 'cover',
    title: 'Low-Code vs No-Code',
    content: (
      <div className="chatbot-glass-strong p-8 rounded-2xl max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex justify-center mb-8">
            <div className="message-card bot-style p-8 rounded-2xl">
              <Icon name="code" className="text-6xl mb-4" />
              <h2 className="enhanced-title-chatbot mb-4">Low-Code vs No-Code</h2>
              <p className="text-xl">Democratizando el Desarrollo de Software</p>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            <div className="chatbot-glass p-6 rounded-xl">
              <Icon name="code-branch" className="text-4xl text-primary-chatbot mb-3" />
              <h3 className="text-xl font-semibold mb-2">Low-Code</h3>
              <p className="text-gray-200">Desarrollo visual con capacidad de personalización</p>
            </div>
            <div className="chatbot-glass p-6 rounded-xl">
              <Icon name="puzzle-piece" className="text-4xl text-success mb-3" />
              <h3 className="text-xl font-semibold mb-2">No-Code</h3>
              <p className="text-gray-200">Construcción 100% visual sin código</p>
            </div>
          </div>
          
          <p className="text-lg text-center mb-6">
            <Icon name="lightbulb" className="text-warning mr-2" />
            "La revolución del desarrollo ciudadano: creando aplicaciones sin barreras técnicas"
          </p>
        </div>
      </div>
    )
  },
  
  {
    id: 37,
    type: 'content',
    title: 'Definiciones Fundamentales',
    content: (
      <div className="chatbot-glass-strong p-8 rounded-2xl max-w-5xl mx-auto">
        <h2 className="enhanced-title-chatbot mb-8">¿Qué son Low-Code y No-Code?</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="message-card user-style">
            <div className="flex items-start mb-4">
              <Icon name="code" className="text-3xl text-primary-chatbot mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">Low-Code</h3>
                <p className="mb-4">
                  Un enfoque de desarrollo rápido que permite la generación automatizada de código 
                  a través de bloques visuales de construcción.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="check" className="text-success mr-2 mt-1" />
                    <span>Permite agregar código personalizado</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="text-success mr-2 mt-1" />
                    <span>Orientado a desarrolladores profesionales</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="text-success mr-2 mt-1" />
                    <span>Sistema "abierto" y extensible</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="message-card bot-style">
            <div className="flex items-start mb-4">
              <Icon name="puzzle-piece" className="text-3xl text-success mr-3 mt-1" />
              <div>
                <h3 className="text-xl font-bold mb-3">No-Code</h3>
                <p className="mb-4">
                  Un enfoque de desarrollo con 100% de dependencia en herramientas visuales, 
                  sin requerir codificación manual.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <Icon name="check" className="text-primary-chatbot mr-2 mt-1" />
                    <span>Construcción mediante arrastrar y soltar</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="text-primary-chatbot mr-2 mt-1" />
                    <span>Para usuarios de negocio no técnicos</span>
                  </li>
                  <li className="flex items-start">
                    <Icon name="check" className="text-primary-chatbot mr-2 mt-1" />
                    <span>Sistema "cerrado" con plantillas</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div className="chatbot-glass p-6 rounded-xl text-center">
          <Icon name="chart-line" className="text-4xl text-warning mb-3" />
          <p className="text-lg">
            <strong>Objetivo Común:</strong> Democratizar el desarrollo de software y 
            acelerar la transformación digital
          </p>
        </div>
      </div>
    )
  },
  
  {
    id: 38,
    type: 'content',
    title: 'Comparación Interactiva',
    content: (
      <div className="chatbot-glass-strong p-8 rounded-2xl max-w-6xl mx-auto">
        <h2 className="enhanced-title-chatbot mb-8">Comparación Low-Code vs No-Code</h2>
        
        <LowCodeNoCodeComparison />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="chatbot-glass p-4 rounded-xl text-center">
            <Icon name="users" className="text-3xl text-primary-chatbot mb-2" />
            <h4 className="font-semibold mb-1">Usuarios</h4>
            <p className="text-sm">Desarrolladores vs Ciudadanos</p>
          </div>
          <div className="chatbot-glass p-4 rounded-xl text-center">
            <Icon name="layer-group" className="text-3xl text-success mb-2" />
            <h4 className="font-semibold mb-1">Complejidad</h4>
            <p className="text-sm">Empresarial vs Departamental</p>
          </div>
          <div className="chatbot-glass p-4 rounded-xl text-center">
            <Icon name="cogs" className="text-3xl text-warning mb-2" />
            <h4 className="font-semibold mb-1">Personalización</h4>
            <p className="text-sm">Extensible vs Configuración</p>
          </div>
        </div>
      </div>
    )
  },
  
  {
    id: 39,
    type: 'content',
    title: 'Ventajas y Casos de Uso',
    content: (
      <div className="chatbot-glass-strong p-8 rounded-2xl max-w-5xl mx-auto">
        <h2 className="enhanced-title-chatbot mb-8">Ventajas y Aplicaciones</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-bold mb-4 flex items-center">
            <Icon name="star" className="text-warning mr-2" />
            Beneficios Compartidos
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="chatbot-glass p-4 rounded-lg flex items-start">
              <Icon name="rocket" className="text-primary-chatbot mr-3 mt-1" />
              <div>
                <strong>Mayor Productividad</strong>
                <p className="text-sm">Desarrollo 5-10x más rápido</p>
              </div>
            </div>
            <div className="chatbot-glass p-4 rounded-lg flex items-start">
              <Icon name="dollar-sign" className="text-success mr-3 mt-1" />
              <div>
                <strong>Reducción de Costos</strong>
                <p className="text-sm">Menos recursos técnicos necesarios</p>
              </div>
            </div>
            <div className="chatbot-glass p-4 rounded-lg flex items-start">
              <Icon name="sync" className="text-warning mr-3 mt-1" />
              <div>
                <strong>Prototipado Rápido</strong>
                <p className="text-sm">Ideas a producción en días</p>
              </div>
            </div>
            <div className="chatbot-glass p-4 rounded-lg flex items-start">
              <Icon name="handshake" className="text-info mr-3 mt-1" />
              <div>
                <strong>Mejor Colaboración</strong>
                <p className="text-sm">Negocio e IT trabajando juntos</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="message-card user-style">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Icon name="code" className="mr-2" />
              Casos de Uso Low-Code
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Icon name="briefcase" className="text-primary-chatbot mr-2 mt-1" />
                <span>Gestión de procesos empresariales</span>
              </li>
              <li className="flex items-start">
                <Icon name="mobile-alt" className="text-primary-chatbot mr-2 mt-1" />
                <span>Aplicaciones móviles y web complejas</span>
              </li>
              <li className="flex items-start">
                <Icon name="exchange-alt" className="text-primary-chatbot mr-2 mt-1" />
                <span>Modernización de sistemas legacy</span>
              </li>
              <li className="flex items-start">
                <Icon name="network-wired" className="text-primary-chatbot mr-2 mt-1" />
                <span>Integraciones entre departamentos</span>
              </li>
            </ul>
          </div>
          
          <div className="message-card bot-style">
            <h3 className="text-lg font-bold mb-3 flex items-center">
              <Icon name="puzzle-piece" className="mr-2" />
              Casos de Uso No-Code
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <Icon name="chart-bar" className="text-success mr-2 mt-1" />
                <span>Dashboards y reportes</span>
              </li>
              <li className="flex items-start">
                <Icon name="tasks" className="text-success mr-2 mt-1" />
                <span>Automatización de tareas administrativas</span>
              </li>
              <li className="flex items-start">
                <Icon name="file-alt" className="text-success mr-2 mt-1" />
                <span>Sistemas de gestión de contenido</span>
              </li>
              <li className="flex items-start">
                <Icon name="user-friends" className="text-success mr-2 mt-1" />
                <span>Aplicaciones de autoservicio</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  
  {
    id: 40,
    type: 'content',
    title: 'Ejemplos de Plataformas',
    content: (
      <div className="chatbot-glass-strong p-8 rounded-2xl max-w-6xl mx-auto">
        <h2 className="enhanced-title-chatbot mb-8">Plataformas Low-Code y No-Code</h2>
        
        <PlatformSelector />
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Icon name="code" className="text-primary-chatbot mr-2" />
              Plataformas Low-Code Populares
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="cube" className="text-primary-chatbot mr-2 mt-1" />
                <div>
                  <strong>OutSystems</strong>
                  <p className="text-sm">Desarrollo full-stack empresarial</p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon name="cube" className="text-primary-chatbot mr-2 mt-1" />
                <div>
                  <strong>Mendix</strong>
                  <p className="text-sm">Aplicaciones multi-experiencia</p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon name="cube" className="text-primary-chatbot mr-2 mt-1" />
                <div>
                  <strong>Microsoft Power Apps</strong>
                  <p className="text-sm">Integración con ecosistema Microsoft</p>
                </div>
              </li>
            </ul>
          </div>
          
          <div className="chatbot-glass p-6 rounded-xl">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Icon name="puzzle-piece" className="text-success mr-2" />
              Plataformas No-Code Populares
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="cube" className="text-success mr-2 mt-1" />
                <div>
                  <strong>Bubble</strong>
                  <p className="text-sm">Aplicaciones web visuales</p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon name="cube" className="text-success mr-2 mt-1" />
                <div>
                  <strong>Webflow</strong>
                  <p className="text-sm">Diseño web profesional</p>
                </div>
              </li>
              <li className="flex items-start">
                <Icon name="cube" className="text-success mr-2 mt-1" />
                <div>
                  <strong>Zapier</strong>
                  <p className="text-sm">Automatización de flujos de trabajo</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  },
  
  {
    id: 41,
    type: 'content',
    title: '¿Cuándo Usar Cada Enfoque?',
    content: (
      <div className="chatbot-glass-strong p-8 rounded-2xl max-w-5xl mx-auto">
        <h2 className="enhanced-title-chatbot mb-8">Guía de Decisión</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
          <div className="message-card user-style">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Icon name="code" className="mr-2" />
              Elige Low-Code cuando...
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="check" className="text-primary-chatbot mr-2 mt-1" />
                <span>Necesitas integraciones complejas</span>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-primary-chatbot mr-2 mt-1" />
                <span>Requieres lógica de negocio personalizada</span>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-primary-chatbot mr-2 mt-1" />
                <span>La aplicación debe escalar significativamente</span>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-primary-chatbot mr-2 mt-1" />
                <span>Tienes desarrolladores en el equipo</span>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-primary-chatbot mr-2 mt-1" />
                <span>Necesitas compatibilidad multiplataforma</span>
              </li>
            </ul>
          </div>
          
          <div className="message-card bot-style">
            <h3 className="text-lg font-bold mb-4 flex items-center">
              <Icon name="puzzle-piece" className="mr-2" />
              Elige No-Code cuando...
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Icon name="check" className="text-success mr-2 mt-1" />
                <span>La aplicación es simple y específica</span>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-success mr-2 mt-1" />
                <span>Necesitas resultados inmediatos</span>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-success mr-2 mt-1" />
                <span>El equipo no tiene experiencia técnica</span>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-success mr-2 mt-1" />
                <span>El presupuesto es limitado</span>
              </li>
              <li className="flex items-start">
                <Icon name="check" className="text-success mr-2 mt-1" />
                <span>Los requisitos son estándar</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="chatbot-glass p-6 rounded-xl">
          <div className="flex items-center justify-center mb-4">
            <Icon name="balance-scale" className="text-4xl text-warning" />
          </div>
          <h3 className="text-lg font-bold text-center mb-3">Consideraciones Clave</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div>
              <Icon name="project-diagram" className="text-2xl text-primary-chatbot mb-2" />
              <p className="font-semibold">Complejidad del Proyecto</p>
            </div>
            <div>
              <Icon name="user-tie" className="text-2xl text-success mb-2" />
              <p className="font-semibold">Experiencia del Usuario</p>
            </div>
            <div>
              <Icon name="clock" className="text-2xl text-warning mb-2" />
              <p className="font-semibold">Velocidad de Desarrollo</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 text-center">
          <p className="text-lg">
            <Icon name="lightbulb" className="text-warning mr-2" />
            <strong>Consejo:</strong> Muchas organizaciones usan una estrategia híbrida, 
            combinando ambos enfoques según las necesidades
          </p>
        </div>
      </div>
    )
  }
];
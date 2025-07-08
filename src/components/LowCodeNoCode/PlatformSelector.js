import React, { useState } from 'react';
import Icon from '../Icon';

const PlatformSelector = () => {
  const [selectedPlatform, setSelectedPlatform] = useState(null);

  const platforms = {
    // Low-Code Platforms
    'ibm-rpa': {
      type: 'low-code',
      name: 'IBM Robotic Process Automation',
      description: 'Automatización de procesos robóticos con capacidades de IA',
      features: ['Grabación de procesos', 'IA integrada', 'Análisis de procesos', 'Escalabilidad empresarial'],
      useCase: 'Automatización de tareas repetitivas y procesos complejos'
    },
    'ibm-appconnect': {
      type: 'low-code',
      name: 'IBM AppConnect',
      description: 'Integración de aplicaciones y datos empresariales',
      features: ['Conectores pre-construidos', 'Mapeo de datos visual', 'APIs y eventos', 'Flujos complejos'],
      useCase: 'Integración de sistemas empresariales heterogéneos'
    },
    'outsystems': {
      type: 'low-code',
      name: 'OutSystems',
      description: 'Plataforma de desarrollo full-stack para aplicaciones empresariales',
      features: ['Desarrollo visual', 'Código personalizable', 'DevOps integrado', 'Multi-experiencia'],
      useCase: 'Aplicaciones empresariales críticas y complejas'
    },
    'mendix': {
      type: 'low-code',
      name: 'Mendix',
      description: 'Desarrollo rápido de aplicaciones con colaboración',
      features: ['Modelado visual', 'Colaboración en tiempo real', 'Cloud nativo', 'IA asistida'],
      useCase: 'Innovación digital y transformación empresarial'
    },
    // No-Code Platforms
    'ibm-watsonx': {
      type: 'no-code',
      name: 'IBM watsonx Orchestrate',
      description: 'Automatización inteligente de flujos de trabajo',
      features: ['IA conversacional', 'Automatización de tareas', 'Sin código requerido', 'Aprendizaje continuo'],
      useCase: 'Asistentes virtuales y automatización de oficina'
    },
    'bubble': {
      type: 'no-code',
      name: 'Bubble',
      description: 'Construcción visual de aplicaciones web completas',
      features: ['Editor visual drag-and-drop', 'Base de datos integrada', 'Workflows visuales', 'Responsive design'],
      useCase: 'MVPs, marketplaces y aplicaciones SaaS'
    },
    'zapier': {
      type: 'no-code',
      name: 'Zapier',
      description: 'Automatización de flujos entre aplicaciones',
      features: ['5000+ integraciones', 'Triggers y acciones', 'Lógica condicional', 'Sin mantenimiento'],
      useCase: 'Automatización de procesos entre herramientas SaaS'
    },
    'airtable': {
      type: 'no-code',
      name: 'Airtable',
      description: 'Base de datos colaborativa con interfaces personalizadas',
      features: ['Vistas personalizables', 'Automatizaciones', 'Apps sin código', 'Colaboración en tiempo real'],
      useCase: 'Gestión de proyectos y bases de datos colaborativas'
    }
  };

  const lowCodePlatforms = Object.entries(platforms).filter(([_, p]) => p.type === 'low-code');
  const noCodePlatforms = Object.entries(platforms).filter(([_, p]) => p.type === 'no-code');

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <Icon icon="code" className="text-primary-chatbot mr-2" />
            Plataformas Low-Code
          </h3>
          <div className="space-y-3">
            {lowCodePlatforms.map(([key, platform]) => (
              <button
                key={key}
                onClick={() => setSelectedPlatform(key)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  selectedPlatform === key 
                    ? 'chatbot-glass-strong border-2 border-primary-chatbot' 
                    : 'chatbot-glass hover:scale-105'
                }`}
              >
                <div className="font-semibold">{platform.name}</div>
                <div className="text-sm opacity-80">{platform.description}</div>
              </button>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-lg font-bold mb-4 flex items-center">
            <Icon icon="puzzle-piece" className="text-success mr-2" />
            Plataformas No-Code
          </h3>
          <div className="space-y-3">
            {noCodePlatforms.map(([key, platform]) => (
              <button
                key={key}
                onClick={() => setSelectedPlatform(key)}
                className={`w-full text-left p-3 rounded-lg transition-all ${
                  selectedPlatform === key 
                    ? 'chatbot-glass-strong border-2 border-success' 
                    : 'chatbot-glass hover:scale-105'
                }`}
              >
                <div className="font-semibold">{platform.name}</div>
                <div className="text-sm opacity-80">{platform.description}</div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {selectedPlatform && (
        <div className="chatbot-glass-strong p-6 rounded-xl">
          <h4 className="text-xl font-bold mb-3 flex items-center">
            <Icon 
              icon={platforms[selectedPlatform].type === 'low-code' ? 'code' : 'puzzle-piece'} 
              className={`mr-2 ${platforms[selectedPlatform].type === 'low-code' ? 'text-primary-chatbot' : 'text-success'}`}
            />
            {platforms[selectedPlatform].name}
          </h4>
          
          <p className="mb-4">{platforms[selectedPlatform].description}</p>
          
          <div className="mb-4">
            <h5 className="font-semibold mb-2">Características principales:</h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {platforms[selectedPlatform].features.map((feature, index) => (
                <div key={index} className="flex items-start">
                  <Icon icon="check" className="text-success mr-2 mt-1" />
                  <span className="text-sm">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          
          <div className="chatbot-glass p-4 rounded-lg">
            <h5 className="font-semibold mb-1 flex items-center">
              <Icon icon="lightbulb" className="text-warning mr-2" />
              Caso de uso ideal:
            </h5>
            <p className="text-sm">{platforms[selectedPlatform].useCase}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PlatformSelector;
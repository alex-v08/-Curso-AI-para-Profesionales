import React, { useState } from 'react';
import Icon from '../Icon';

const LowCodeNoCodeComparison = () => {
  const [selectedAspect, setSelectedAspect] = useState('users');

  const aspects = {
    users: {
      name: 'Usuarios Objetivo',
      lowCode: {
        title: 'Desarrolladores Profesionales',
        items: ['Experiencia en programación', 'Conocimiento de arquitectura', 'Habilidades de debugging']
      },
      noCode: {
        title: 'Usuarios de Negocio',
        items: ['Analistas de negocio', 'Gerentes de proyecto', 'Usuarios finales']
      }
    },
    complexity: {
      name: 'Complejidad',
      lowCode: {
        title: 'Aplicaciones Empresariales',
        items: ['Integraciones complejas', 'Lógica de negocio avanzada', 'Escalabilidad empresarial']
      },
      noCode: {
        title: 'Aplicaciones Departamentales',
        items: ['Flujos simples', 'Interfaces estándar', 'Casos de uso específicos']
      }
    },
    customization: {
      name: 'Personalización',
      lowCode: {
        title: 'Sistema Abierto',
        items: ['Código personalizado', 'Plugins y extensiones', 'APIs personalizadas']
      },
      noCode: {
        title: 'Sistema Cerrado',
        items: ['Plantillas predefinidas', 'Configuración visual', 'Componentes estándar']
      }
    },
    integration: {
      name: 'Integración',
      lowCode: {
        title: 'Integraciones Avanzadas',
        items: ['APIs REST/SOAP', 'Bases de datos múltiples', 'Sistemas legacy']
      },
      noCode: {
        title: 'Conectores Predefinidos',
        items: ['Integraciones populares', 'Webhooks simples', 'Formatos estándar']
      }
    },
    deployment: {
      name: 'Despliegue',
      lowCode: {
        title: 'Opciones Flexibles',
        items: ['On-premise', 'Cloud híbrida', 'Contenedores']
      },
      noCode: {
        title: 'Cloud-First',
        items: ['SaaS managed', 'Auto-escalado', 'Mantenimiento incluido']
      }
    }
  };

  return (
    <div className="w-full">
      <div className="flex flex-wrap justify-center gap-2 mb-6">
        {Object.entries(aspects).map(([key, aspect]) => (
          <button
            key={key}
            onClick={() => setSelectedAspect(key)}
            className={`btn-chatbot-${selectedAspect === key ? 'primary' : 'secondary'} px-4 py-2`}
          >
            {aspect.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="chatbot-glass p-6 rounded-xl transform transition-all duration-300 hover:scale-105">
          <div className="flex items-center mb-4">
            <Icon icon="code" className="text-3xl text-primary-chatbot mr-3" />
            <h3 className="text-xl font-bold">Low-Code</h3>
          </div>
          <h4 className="text-lg font-semibold mb-3 text-primary-chatbot">
            {aspects[selectedAspect].lowCode.title}
          </h4>
          <ul className="space-y-2">
            {aspects[selectedAspect].lowCode.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <Icon icon="chevron-right" className="text-primary-chatbot mr-2 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="chatbot-glass p-6 rounded-xl transform transition-all duration-300 hover:scale-105">
          <div className="flex items-center mb-4">
            <Icon icon="puzzle-piece" className="text-3xl text-success mr-3" />
            <h3 className="text-xl font-bold">No-Code</h3>
          </div>
          <h4 className="text-lg font-semibold mb-3 text-success">
            {aspects[selectedAspect].noCode.title}
          </h4>
          <ul className="space-y-2">
            {aspects[selectedAspect].noCode.items.map((item, index) => (
              <li key={index} className="flex items-start">
                <Icon icon="chevron-right" className="text-success mr-2 mt-1" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-6 chatbot-glass p-4 rounded-xl text-center">
        <Icon icon="info" className="text-info mr-2" />
        <span className="text-sm">
          Haz clic en los aspectos arriba para comparar diferentes características
        </span>
      </div>
    </div>
  );
};

export default LowCodeNoCodeComparison;
import React, { useState } from 'react';
import InfoModal from './InfoModal';
import Icon from './Icon';
import { getDefinition } from '../data/definitions';

/**
 * Componente ClickableInfo - Envuelve elementos para hacerlos clickeables y mostrar información
 * Soporta tanto definiciones predefinidas (definitionKey) como contenido personalizado
 */
const ClickableInfo = ({ 
  children, 
  title, 
  content, 
  type, 
  className = "", 
  definitionKey = null,
  showIndicator = true 
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Si se proporciona definitionKey, usar la definición predefinida
  const definition = definitionKey ? getDefinition(definitionKey) : null;
  const finalTitle = definition ? definition.title : title;
  const finalContent = definition ? definition.content : content;
  const finalType = definition ? definition.type : type;
  
  return (
    <>
      <div 
        className={`cursor-pointer hover:scale-105 transition-all duration-300 hover:shadow-lg relative group ${className}`}
        onClick={() => setIsModalOpen(true)}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            setIsModalOpen(true);
          }
        }}
        aria-label={`Hacer clic para más información sobre ${finalTitle}`}
      >
        {children}
        {/* Indicador de que es clickeable */}
        {showIndicator && (
          <div className="absolute top-2 right-2 bg-blue-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-0 group-hover:opacity-100 transition-opacity z-10">
            <Icon name="info" className="w-3 h-3" />
          </div>
        )}
      </div>
      <InfoModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={finalTitle}
        content={finalContent}
        type={finalType}
      />
    </>
  );
};

export default ClickableInfo;
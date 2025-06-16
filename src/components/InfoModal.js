import React from 'react';
import Icon from './Icon';

/**
 * Componente InfoModal - Modal informativo para mostrar definiciones y explicaciones
 */
const InfoModal = ({ isOpen, onClose, title, content, type = 'definition' }) => {
  if (!isOpen) return null;
  
  const getModalColor = () => {
    switch (type) {
      case 'ai': return 'from-purple-600 to-blue-600';
      case 'ml': return 'from-blue-600 to-green-600';
      case 'regression': return 'from-green-600 to-blue-600';
      case 'business': return 'from-orange-600 to-red-600';
      default: return 'from-gray-600 to-gray-800';
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4" 
      onClick={onClose}
    >
      <div 
        className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-auto shadow-2xl transform transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className={`bg-gradient-to-r ${getModalColor()} p-6 rounded-t-2xl`}>
          <div className="flex justify-between items-start">
            <h3 className="text-2xl font-bold text-white pr-4">{title}</h3>
            <button 
              onClick={onClose}
              className="text-white hover:text-gray-200 transition-colors p-1"
              aria-label="Cerrar modal"
            >
              <Icon name="times" className="w-6 h-6" />
            </button>
          </div>
        </div>
        
        {/* Content */}
        <div className="p-6">
          <div className="prose prose-lg max-w-none">
            {content}
          </div>
        </div>
        
        {/* Footer */}
        <div className="border-t border-gray-200 p-4 bg-gray-50 rounded-b-2xl">
          <button 
            onClick={onClose}
            className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg transition-colors font-medium"
          >
            ¡Entendido!
          </button>
        </div>
      </div>
    </div>
  );
};

export default InfoModal;
// Archivo central que exporta todas las definiciones
import aiDefinitions from './aiDefinitions';
import mlDefinitions from './mlDefinitions';
import businessDefinitions from './businessDefinitions';

/**
 * Todas las definiciones disponibles en la presentación
 * Organizadas por categorías para fácil acceso
 */
export const allDefinitions = {
  ...aiDefinitions,
  ...mlDefinitions,
  ...businessDefinitions
};

// Exportaciones específicas por categoría
export { aiDefinitions } from './aiDefinitions';
export { mlDefinitions } from './mlDefinitions';
export { businessDefinitions } from './businessDefinitions';

// Función helper para obtener una definición por clave
export const getDefinition = (key) => {
  return allDefinitions[key] || null;
};

// Función helper para obtener todas las definiciones de una categoría
export const getDefinitionsByType = (type) => {
  return Object.entries(allDefinitions)
    .filter(([_, definition]) => definition.type === type)
    .reduce((acc, [key, definition]) => ({
      ...acc,
      [key]: definition
    }), {});
};

// Metadatos útiles
export const definitionMetadata = {
  totalDefinitions: Object.keys(allDefinitions).length,
  categories: {
    ai: Object.keys(getDefinitionsByType('ai')).length,
    ml: Object.keys(getDefinitionsByType('ml')).length,
    regression: Object.keys(getDefinitionsByType('regression')).length,
    business: Object.keys(getDefinitionsByType('business')).length
  },
  availableTypes: ['ai', 'ml', 'regression', 'business']
};

export default allDefinitions;

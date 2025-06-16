import React from 'react';

/**
 * Componente Icon - Wrapper para Font Awesome icons
 * @param {string} name - Nombre del ícono de Font Awesome (sin el prefijo fa-)
 * @param {string} className - Clases CSS adicionales
 * @param {object} style - Estilos inline adicionales
 */
const Icon = ({ name, className = "w-6 h-6", style = {}, ...props }) => {
  return (
    <i 
      className={`fas fa-${name} ${className}`} 
      style={style}
      {...props}
    />
  );
};

export default Icon;
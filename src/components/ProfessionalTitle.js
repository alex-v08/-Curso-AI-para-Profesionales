import React from 'react';

/**
 * Componente de título profesional con diferentes variantes
 * Diseñado para mantener consistencia visual en toda la presentación
 */
const ProfessionalTitle = ({ 
  children, 
  variant = 'h1', 
  className = '', 
  style = 'standard',
  center = false,
  ...props 
}) => {
  
  // Mapeo de variantes a clases CSS
  const variantClasses = {
    hero: 'ml-title-hero',
    h1: 'ml-heading-1',
    h2: 'ml-heading-2', 
    h3: 'ml-heading-3',
    h4: 'ml-heading-4',
    subtitle: 'ml-subtitle-hero'
  };
  
  // Estilos adicionales basados en el estilo
  const styleClasses = {
    standard: '',
    enhanced: 'enhanced-title-chatbot',
    academic: 'academic-title-pro',
    gradient: 'gradient-text-blue'
  };
  
  // Clases de alineación
  const alignmentClass = center ? 'ml-text-center' : '';
  
  // Combinar todas las clases
  const combinedClasses = [
    variantClasses[variant] || variantClasses.h1,
    styleClasses[style] || '',
    alignmentClass,
    className
  ].filter(Boolean).join(' ');
  
  // Determinar el elemento HTML basado en la variante
  const getElement = () => {
    switch (variant) {
      case 'hero':
      case 'h1':
        return 'h1';
      case 'h2':
        return 'h2';
      case 'h3':
        return 'h3';
      case 'h4':
        return 'h4';
      case 'subtitle':
        return 'p';
      default:
        return 'h1';
    }
  };
  
  const Element = getElement();
  
  return (
    <Element 
      className={combinedClasses}
      {...props}
    >
      {children}
    </Element>
  );
};

/**
 * Componente especializado para portadas de slides
 */
export const SlideTitle = ({ title, subtitle, className = '', ...props }) => {
  return (
    <div className={`ml-text-center ${className}`} {...props}>
      <ProfessionalTitle variant="hero" style="enhanced" center>
        {title}
      </ProfessionalTitle>
      {subtitle && (
        <ProfessionalTitle variant="subtitle" center>
          {subtitle}
        </ProfessionalTitle>
      )}
    </div>
  );
};

/**
 * Componente para títulos de sección con línea decorativa
 */
export const SectionTitle = ({ children, className = '', showDivider = true, ...props }) => {
  return (
    <div className={`ml-section ${className}`} {...props}>
      <ProfessionalTitle variant="h2" style="academic" center>
        {children}
      </ProfessionalTitle>
      {showDivider && <div className="ml-divider mt-6" />}
    </div>
  );
};

/**
 * Componente para subtítulos con estilo profesional
 */
export const SubsectionTitle = ({ children, className = '', ...props }) => {
  return (
    <ProfessionalTitle 
      variant="h3" 
      style="standard" 
      className={`mb-4 ${className}`}
      {...props}
    >
      {children}
    </ProfessionalTitle>
  );
};

export default ProfessionalTitle;
import React from 'react';
import Icon from '../components/Icon';
import ClickableInfo from '../components/ClickableInfo';
import { iaGenerativaSlides } from './iaGenerativaSlides';

/**
 * Presentación completa de IA Generativa como capítulo independiente
 * Similar a "Fundamentos de ML" pero enfocado en IA Generativa
 */

// Renumerar slides para que empiecen desde 0
const iaGenerativaSlidesRenumbered = iaGenerativaSlides.map((slide, index) => ({
  ...slide,
  id: index
}));

// Exportar slides de IA Generativa
export const iaGenerativaSlidesData = iaGenerativaSlidesRenumbered;

// Metadata específica para IA Generativa
export const iaGenerativaPresentationMetadata = {
  title: "Inteligencia Artificial Generativa",
  subtitle: "La Revolución de la Creación de Contenido",
  totalSlides: iaGenerativaSlides.length,
  
  sections: {
    fundamentos: {
      name: "Fundamentos de IA Generativa",
      slides: [0, 3], // Slides 0-3
      description: "Qué es, cómo funciona y diferencias con IA tradicional",
      icon: "brain",
      color: "blue"
    },
    llms: {
      name: "Modelos de Lenguaje Grandes", 
      slides: [4, 5], // Slides 4-5
      description: "Funcionamiento interno y limitaciones de los LLMs",
      icon: "microchip",
      color: "green"
    },
    rag: {
      name: "RAG - Retrieval Augmented Generation",
      slides: [6, 7], // Slides 6-7
      description: "Aumentando capacidades con información externa",
      icon: "database",
      color: "purple"
    },
    aplicaciones: {
      name: "Uso Cotidiano y Aplicaciones",
      slides: [8, 9], // Slides 8-9
      description: "Herramientas prácticas para tu día a día",
      icon: "users",
      color: "orange"
    },
    futuro: {
      name: "Futuro y Consideraciones Éticas",
      slides: [10, 11], // Slides 10-11
      description: "Casos de éxito, tendencias y responsabilidad",
      icon: "rocket",
      color: "pink"
    }
  },
  
  // Slides que tienen componentes interactivos
  interactiveSlides: [3, 5, 7], // Demo de generación, Demo RAG, Casos de uso interactivos
  
  duration: {
    fundamentos: "20-30 minutos",
    llms: "15-25 minutos",
    rag: "25-35 minutos", 
    aplicaciones: "30-40 minutos",
    futuro: "15-25 minutos",
    total: "105-155 minutos (1.75-2.5 horas)"
  },
  
  features: [
    "🤖 Introducción completa a IA Generativa",
    "🧠 Funcionamiento detallado de LLMs", 
    "🔍 RAG con demos interactivos",
    "💼 6 categorías de aplicaciones prácticas",
    "🎯 Casos de éxito empresariales reales",
    "⚖️ Consideraciones éticas y sociales",
    "🚀 Perspectivas de futuro y tendencias"
  ],
  
  learningObjectives: [
    "Comprender qué es la IA Generativa y cómo difiere de la IA tradicional",
    "Entender el funcionamiento básico de los LLMs y sus limitaciones",
    "Conocer la técnica RAG y sus aplicaciones empresariales",
    "Identificar oportunidades de uso en el trabajo diario",
    "Evaluar herramientas de IA Generativa para diferentes tareas",
    "Aplicar mejores prácticas y consideraciones éticas"
  ],
  
  targetAudience: [
    "Profesionales que quieren integrar IA en su trabajo",
    "Estudiantes de tecnología y negocios", 
    "Gerentes y tomadores de decisiones",
    "Desarrolladores interesados en IA",
    "Cualquier persona curiosa sobre IA Generativa"
  ],
  
  prerequisites: [
    "Conocimientos básicos de computación",
    "Curiosidad por la tecnología",
    "No se requiere experiencia previa en IA"
  ],
  
  author: "Curso de Inteligencia Artificial",
  date: "Diciembre 2024",
  version: "1.0.0 - IA Generativa Standalone",
  
  // Información técnica
  techSpecs: {
    framework: "React 18+",
    responsive: true,
    interactivity: "Demos en vivo y componentes interactivos",
    accessibility: "Navegación por teclado y lectores de pantalla",
    browserSupport: "Chrome, Firefox, Safari, Edge (últimas 2 versiones)"
  }
};

// Función helper para obtener información de sección por slide
export const getSectionBySlide = (slideIndex) => {
  const { sections } = iaGenerativaPresentationMetadata;
  
  for (const [key, section] of Object.entries(sections)) {
    const [start, end] = section.slides;
    if (slideIndex >= start && slideIndex <= end) {
      return { key, ...section };
    }
  }
  
  return null;
};

// Función helper para calcular progreso por sección
export const getSectionProgress = (slideIndex) => {
  const section = getSectionBySlide(slideIndex);
  if (!section) return { progress: 0, current: 0, total: 0 };
  
  const [start, end] = section.slides;
  const current = slideIndex - start + 1;
  const total = end - start + 1;
  const progress = (current / total) * 100;
  
  return { progress, current, total };
};

export default iaGenerativaSlidesData;
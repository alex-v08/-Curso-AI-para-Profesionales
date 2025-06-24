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
      slides: [0, 2], // Slides 0-2
      description: "Qué es, cómo funciona y modelo mental del recién graduado",
      icon: "brain",
      color: "blue"
    },
    prompting: {
      name: "Prompting - El Arte de Comunicarse con la IA", 
      slides: [3, 8], // Slides 3-8 (6 slides del nuevo capítulo)
      description: "Fórmula, técnicas avanzadas y herramientas de ChatGPT",
      icon: "lightbulb",
      color: "yellow"
    },
    llms: {
      name: "Categorización de Tareas LLM", 
      slides: [9, 9], // Slide 9 (antes era 4)
      description: "Demo interactivo de generación de texto",
      icon: "layers",
      color: "green"
    },
    rag: {
      name: "RAG - Retrieval Augmented Generation",
      slides: [10, 11], // Slides 10-11 (antes eran 5-6)
      description: "Aumentando capacidades con información externa",
      icon: "database",
      color: "purple"
    },
    optimizacion: {
      name: "Optimización de LLMs",
      slides: [12, 12], // Slide 12 (antes era 7)
      description: "RAG vs Fine-tuning vs Prompt Engineering",
      icon: "gear",
      color: "cyan"
    },
    proyectos: {
      name: "Ciclo de Vida de Proyectos",
      slides: [13, 13], // Slide 13 (antes era 8)
      description: "De la idea a la implementación en producción",
      icon: "workflow",
      color: "indigo"
    },
    aplicaciones: {
      name: "Uso Cotidiano y Aplicaciones",
      slides: [14, 14], // Slide 14 (antes era 9)
      description: "Herramientas prácticas para tu día a día",
      icon: "users",
      color: "orange"
    },
    futuro: {
      name: "Futuro y Consideraciones Éticas",
      slides: [15, 15], // Slide 15 (antes era 10)
      description: "Casos de éxito, automatización y tendencias",
      icon: "rocket",
      color: "pink"
    }
  },
  
  // Slides que tienen componentes interactivos
  interactiveSlides: [8, 9, 11], // Demo de Prompting, Demo de generación, Demo RAG
  
  duration: {
    fundamentos: "20-30 minutos",
    prompting: "30-40 minutos",
    llms: "15-25 minutos",
    rag: "25-35 minutos", 
    aplicaciones: "30-40 minutos",
    futuro: "15-25 minutos",
    total: "135-195 minutos (2.25-3.25 horas)"
  },
  
  features: [
    "🤖 Introducción completa a IA Generativa",
    "🎓 Modelo mental del 'recién graduado universitario'", 
    "📝 Categorización: Escribir, Leer, Chat",
    "🎯 Capítulo completo de Prompting con fórmula CTIC",
    "🧪 Laboratorio interactivo de técnicas de prompting",
    "🛠️ Herramientas avanzadas de ChatGPT",
    "🔍 RAG con demos interactivos",
    "⚙️ Comparación detallada: RAG vs Fine-tuning vs Prompt Engineering",
    "🔄 Ciclo de vida completo de proyectos",
    "🤖 Espectro de automatización de chatbots",
    "💰 Análisis detallado de costos y tokens",
    "🏆 Casos de éxito empresariales reales",
    "⚖️ Consideraciones éticas y sociales"
  ],
  
  learningObjectives: [
    "Comprender qué es la IA Generativa y cómo difiere de la IA tradicional",
    "Aplicar el modelo mental del 'recién graduado' para evaluar tareas LLM",
    "Dominar los 3 principios del prompting efectivo",
    "Categorizar aplicaciones en: Escribir, Leer y Chat",
    "Entender el funcionamiento básico de los LLMs y sus limitaciones críticas",
    "Conocer la técnica RAG y sus aplicaciones empresariales",
    "Comparar y elegir entre RAG, Fine-tuning y Prompt Engineering según el caso de uso",
    "Implementar el ciclo de vida completo de proyectos GenAI",
    "Evaluar el espectro de automatización para chatbots",
    "Calcular costos reales de implementación con tokens",
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
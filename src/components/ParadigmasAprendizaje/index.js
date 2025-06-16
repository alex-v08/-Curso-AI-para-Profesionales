/**
 * Módulo de Paradigmas de Aprendizaje
 * Componentes interactivos para enseñar aprendizaje supervisado y no supervisado
 */

export { default as AprendizajeSupervisadoDemo } from './AprendizajeSupervisadoDemo';
export { default as AprendizajeNoSupervisadoDemo } from './AprendizajeNoSupervisadoDemo';
export { default as ComparacionParadigmas } from './ComparacionParadigmas';

// Re-exportar todos como un objeto para uso opcional
import AprendizajeSupervisadoDemo from './AprendizajeSupervisadoDemo';
import AprendizajeNoSupervisadoDemo from './AprendizajeNoSupervisadoDemo';
import ComparacionParadigmas from './ComparacionParadigmas';

export const ParadigmasComponents = {
  AprendizajeSupervisadoDemo,
  AprendizajeNoSupervisadoDemo,
  ComparacionParadigmas
};
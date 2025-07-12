/**
 * Módulo de Paradigmas de Aprendizaje
 * Componentes interactivos para enseñar aprendizaje supervisado y no supervisado
 */

import AprendizajeSupervisadoDemo from './AprendizajeSupervisadoDemo';
import AprendizajeNoSupervisadoDemo from './AprendizajeNoSupervisadoDemo';
import ComparacionParadigmas from './ComparacionParadigmas';

export { default as AprendizajeSupervisadoDemo } from './AprendizajeSupervisadoDemo';
export { default as AprendizajeNoSupervisadoDemo } from './AprendizajeNoSupervisadoDemo';
export { default as ComparacionParadigmas } from './ComparacionParadigmas';

export const ParadigmasComponents = {
  AprendizajeSupervisadoDemo,
  AprendizajeNoSupervisadoDemo,
  ComparacionParadigmas
};
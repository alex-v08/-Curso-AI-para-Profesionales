/**
 * Exportaciones de componentes interactivos
 * Incluye componentes técnicos y de paradigmas de aprendizaje
 */

// Componentes técnicos existentes
export { default as InteractiveRegressionDemo } from './InteractiveRegressionDemo';
export { default as MultipleRegressionDemo } from './MultipleRegressionDemo';
export { default as InteractiveMetricsDemo } from './InteractiveMetricsDemo';
export { default as GradientDescentDemo } from './GradientDescentDemo';
export { default as OverfittingDemo } from './OverfittingDemo';

// Componentes de paradigmas de aprendizaje
export { 
  AprendizajeSupervisadoDemo,
  AprendizajeNoSupervisadoDemo,
  ComparacionParadigmas
} from '../ParadigmasAprendizaje';

// Componentes de agentes inteligentes
export {
  AgentArchitectureDemo,
  MultiAgentSwarmDemo,
  N8nFlowDemo
} from '../AgentesInteligentes';

// Componentes de n8n
export { default as N8nNodeExplorer } from './N8nNodeExplorer';
export { default as N8nFlowBuilder } from './N8nFlowBuilder';
export { default as N8nWorkflowDemo } from './N8nWorkflowDemo';
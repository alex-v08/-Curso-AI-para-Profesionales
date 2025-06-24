import React, { useState } from 'react';
import Icon from '../Icon';

/**
 * Demo interactivo de técnicas de Prompting
 * Permite a los usuarios experimentar con diferentes técnicas
 */
const PromptingDemo = () => {
  const [selectedTechnique, setSelectedTechnique] = useState('basic');
  const [userTask, setUserTask] = useState('Explica qué es machine learning');
  const [generatedPrompt, setGeneratedPrompt] = useState('');
  const [showResult, setShowResult] = useState(false);

  const techniques = {
    basic: {
      name: 'Prompt Básico',
      description: 'Instrucción simple y directa',
      template: (task) => task,
      example: 'Explica qué es machine learning'
    },
    formula: {
      name: 'Fórmula CTIC',
      description: 'Contexto + Tarea + Instrucción + Clarificación',
      template: (task) => `Contexto: Eres un profesor universitario experto en inteligencia artificial.
Tarea: ${task}
Instrucción: Estructura tu respuesta con introducción, 3 puntos principales y conclusión.
Clarificación: Usa lenguaje accesible para estudiantes de primer año.`,
      example: 'Crear un plan de estudios de IA'
    },
    role: {
      name: 'Role Prompting',
      description: 'Asignar un rol específico',
      template: (task) => `Actúa como un científico de datos senior con 10 años de experiencia en Silicon Valley. ${task}. 
Asegúrate de incluir ejemplos prácticos del mundo real y mejores prácticas de la industria.`,
      example: 'Diseña una arquitectura de datos'
    },
    stepback: {
      name: 'Step Back Prompting',
      description: 'Análisis antes de solución',
      template: (task) => `Antes de responder, analiza lo siguiente:
1. ¿Qué tipo de problema o pregunta es esta?
2. ¿Qué conceptos fundamentales están involucrados?
3. ¿Cuáles son las diferentes perspectivas o enfoques posibles?

Ahora, con base en tu análisis: ${task}`,
      example: 'Resuelve un problema de optimización'
    },
    chain: {
      name: 'Chain of Thought',
      description: 'Razonamiento paso a paso',
      template: (task) => `${task}

Resuelve esto paso a paso:
1. Primero, identifica los elementos clave
2. Luego, analiza las relaciones entre ellos
3. Después, desarrolla la solución
4. Finalmente, verifica y resume

Muestra tu razonamiento en cada paso.`,
      example: 'Calcula el ROI de un proyecto'
    }
  };

  const generatePrompt = () => {
    const technique = techniques[selectedTechnique];
    const prompt = technique.template(userTask);
    setGeneratedPrompt(prompt);
    setShowResult(true);
  };

  const exampleResponses = {
    basic: "Machine learning es una rama de la inteligencia artificial que permite a las computadoras aprender de datos sin ser programadas explícitamente.",
    formula: "**Introducción:** Como profesor, te explicaré ML de forma clara.\n\n**Puntos principales:**\n1. Definición: Algoritmos que mejoran con experiencia\n2. Tipos: Supervisado, no supervisado, reforzado\n3. Aplicaciones: Recomendaciones, predicciones, clasificación\n\n**Conclusión:** ML es fundamental en la tecnología moderna.",
    role: "Como científico de datos senior, he visto ML evolucionar dramáticamente. En Netflix, usamos ML para personalizar recomendaciones, procesando billones de puntos de datos. La clave es comenzar simple: usa regresión lineal antes de redes neuronales. En mi experiencia, el 80% del éxito está en la calidad de datos.",
    stepback: "**Análisis:** Esta es una pregunta conceptual sobre tecnología fundamental.\n\n**Conceptos clave:** Algoritmos, datos, patrones, predicción.\n\n**Perspectivas:** Técnica (algoritmos), práctica (aplicaciones), filosófica (inteligencia).\n\n**Respuesta:** ML es el paradigma que permite a sistemas computacionales mejorar su desempeño en tareas específicas mediante la experiencia...",
    chain: "**Paso 1 - Elementos clave:** Machine Learning, aprendizaje, datos, algoritmos\n\n**Paso 2 - Relaciones:** Los algoritmos procesan datos → encuentran patrones → mejoran predicciones\n\n**Paso 3 - Solución:** ML es un método donde computadoras usan estadística para encontrar patrones en datos\n\n**Paso 4 - Resumen:** ML = Algoritmos + Datos + Mejora iterativa"
  };

  return (
    <div className="space-y-6">
      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-2xl font-bold mb-4 gradient-text">
          Laboratorio de Prompting
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Panel de entrada */}
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Tu tarea o pregunta:
              </label>
              <textarea
                value={userTask}
                onChange={(e) => setUserTask(e.target.value)}
                className="w-full p-3 bg-black/30 border border-white/20 rounded-lg text-white placeholder-white/50"
                placeholder="Escribe qué quieres que haga la IA..."
                rows="3"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2 text-white/80">
                Técnica de Prompting:
              </label>
              <div className="space-y-2">
                {Object.entries(techniques).map(([key, technique]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setSelectedTechnique(key);
                      setShowResult(false);
                    }}
                    className={`w-full p-3 rounded-lg text-left transition-all ${
                      selectedTechnique === key
                        ? 'bg-gradient-to-r from-purple-500/30 to-pink-500/30 border border-purple-400'
                        : 'bg-black/30 border border-white/20 hover:bg-black/40'
                    }`}
                  >
                    <div className="font-semibold">{technique.name}</div>
                    <div className="text-sm text-white/60">{technique.description}</div>
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={generatePrompt}
              className="w-full btn-primary flex items-center justify-center space-x-2"
            >
              <Icon name="wand" className="w-5 h-5" />
              <span>Generar Prompt Mejorado</span>
            </button>
          </div>

          {/* Panel de resultados */}
          <div className="space-y-4">
            {showResult && (
              <>
                <div className="bg-black/30 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-purple-400">Prompt Generado:</h4>
                  <pre className="whitespace-pre-wrap text-sm text-white/80 font-mono">
                    {generatedPrompt}
                  </pre>
                </div>

                <div className="bg-gradient-to-r from-green-500/20 to-blue-500/20 p-4 rounded-lg">
                  <h4 className="font-bold mb-2 text-green-400">Ejemplo de Respuesta:</h4>
                  <div className="text-sm text-white/80 whitespace-pre-wrap">
                    {exampleResponses[selectedTechnique]}
                  </div>
                </div>
              </>
            )}

            {!showResult && (
              <div className="bg-black/30 p-8 rounded-lg text-center">
                <Icon name="lightbulb" className="w-16 h-16 mx-auto mb-4 text-yellow-400/50" />
                <p className="text-white/60">
                  Selecciona una técnica y genera un prompt para ver la diferencia
                </p>
              </div>
            )}
          </div>
        </div>

        <div className="mt-6 p-4 bg-yellow-500/20 rounded-lg">
          <h4 className="font-bold mb-2 flex items-center">
            <Icon name="lightbulb" className="w-5 h-5 mr-2 text-yellow-400" />
            Tip Profesional
          </h4>
          <p className="text-sm text-white/80">
            La técnica más efectiva depende de tu tarea. Para explicaciones simples, 
            un prompt básico funciona bien. Para tareas complejas o creativas, 
            usa técnicas avanzadas como Step Back o Chain of Thought.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PromptingDemo;
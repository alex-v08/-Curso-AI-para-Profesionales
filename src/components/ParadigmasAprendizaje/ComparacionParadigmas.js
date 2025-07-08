import React, { useState } from 'react';
import Icon from '../Icon';

/**
 * Componente de comparación entre paradigmas de aprendizaje
 * Muestra diferencias, ventajas y casos de uso de cada enfoque
 */
const ComparacionParadigmas = () => {
  const [activeComparison, setActiveComparison] = useState('overview');
  const [selectedScenario, setSelectedScenario] = useState(null);

  // Escenarios de aplicación
  const scenarios = [
    {
      id: 'email-spam',
      title: 'Filtro de Spam en Email',
      description: 'Clasificar automáticamente emails como spam o legítimos',
      supervised: {
        approach: 'Entrenamos con miles de emails ya etiquetados como spam/no-spam',
        pros: ['Alta precisión', 'Resultados interpretables', 'Rápido de implementar'],
        cons: ['Necesita datos etiquetados', 'Puede no detectar spam nuevo'],
        suitable: true,
        reason: 'Tenemos muchos ejemplos etiquetados y el objetivo está claro'
      },
      unsupervised: {
        approach: 'Analizamos patrones en emails para detectar anomalías',
        pros: ['Detecta patrones nuevos', 'No necesita etiquetas', 'Adaptable'],
        cons: ['Menos preciso', 'Más falsos positivos', 'Difícil de interpretar'],
        suitable: false,
        reason: 'Para clasificación binaria clara, supervisado es mejor'
      }
    },
    {
      id: 'customer-segments',
      title: 'Segmentación de Clientes',
      description: 'Agrupar clientes para estrategias de marketing personalizadas',
      supervised: {
        approach: 'Predecir categoría de cliente basado en ejemplos pasados',
        pros: ['Categorías predefinidas', 'Fácil de validar', 'Consistente'],
        cons: ['Limitado a categorías conocidas', 'Sesgado por ejemplos pasados'],
        suitable: false,
        reason: 'No sabemos de antemano qué grupos buscar'
      },
      unsupervised: {
        approach: 'Descubrir grupos naturales en los datos de comportamiento',
        pros: ['Encuentra grupos inesperados', 'No limitado por ideas previas', 'Adaptable'],
        cons: ['Grupos pueden ser difíciles de interpretar', 'Número de grupos no claro'],
        suitable: true,
        reason: 'Queremos descubrir patrones ocultos en el comportamiento'
      }
    },
    {
      id: 'fraud-detection',
      title: 'Detección de Fraude',
      description: 'Identificar transacciones fraudulentas en tiempo real',
      supervised: {
        approach: 'Entrenar con transacciones conocidas como fraudulentas/legítimas',
        pros: ['Alta precisión en fraudes conocidos', 'Explicable', 'Regulado'],
        cons: ['Solo detecta fraudes conocidos', 'Necesita muchos ejemplos de fraude'],
        suitable: true,
        reason: 'Para tipos conocidos de fraude con ejemplos históricos'
      },
      unsupervised: {
        approach: 'Detectar transacciones anómalas o inusuales',
        pros: ['Detecta fraudes nuevos', 'No necesita ejemplos de fraude', 'Adaptativo'],
        cons: ['Muchos falsos positivos', 'Difícil de explicar a reguladores'],
        suitable: true,
        reason: 'Para detectar nuevos tipos de fraude no vistos antes'
      }
    }
  ];

  const comparisonData = {
    overview: {
      title: 'Comparación General',
      items: [
        {
          aspect: 'Datos de entrada',
          supervised: 'Datos + Etiquetas (respuestas correctas)',
          unsupervised: 'Solo datos (sin etiquetas)',
          icon: 'database'
        },
        {
          aspect: 'Objetivo',
          supervised: 'Aprender a predecir etiquetas para nuevos datos',
          unsupervised: 'Descubrir estructura oculta en los datos',
          icon: 'target'
        },
        {
          aspect: 'Costo de datos',
          supervised: 'Alto (requiere etiquetado humano)',
          unsupervised: 'Bajo (solo necesita los datos)',
          icon: 'dollar-sign'
        },
        {
          aspect: 'Interpretabilidad',
          supervised: 'Alta (sabemos qué predice)',
          unsupervised: 'Variable (depende del algoritmo)',
          icon: 'eye'
        },
        {
          aspect: 'Escalabilidad',
          supervised: 'Limitada por disponibilidad de etiquetas',
          unsupervised: 'Alta (solo limitada por datos)',
          icon: 'trending-up'
        }
      ]
    },
    algorithms: {
      title: 'Algoritmos Comunes',
      items: [
        {
          aspect: 'Regresión',
          supervised: 'Regresión Lineal, Polinomial, Logística',
          unsupervised: 'No aplicable',
          icon: 'chart-line'
        },
        {
          aspect: 'Clasificación',
          supervised: 'SVM, Random Forest, Redes Neuronales',
          unsupervised: 'No aplicable directamente',
          icon: 'tags'
        },
        {
          aspect: 'Clustering',
          supervised: 'No aplicable',
          unsupervised: 'K-means, DBSCAN, Clustering Jerárquico',
          icon: 'layer-group'
        },
        {
          aspect: 'Reducción de dimensionalidad',
          supervised: 'No aplicable',
          unsupervised: 'PCA, t-SNE, UMAP',
          icon: 'compress'
        },
        {
          aspect: 'Detección de anomalías',
          supervised: 'Con ejemplos de anomalías',
          unsupervised: 'Isolation Forest, One-Class SVM',
          icon: 'exclamation-triangle'
        }
      ]
    },
    metrics: {
      title: 'Métricas de Evaluación',
      items: [
        {
          aspect: 'Precisión/Exactitud',
          supervised: 'Accuracy, Precision, Recall, F1-Score',
          unsupervised: 'No aplicable (no hay verdad absoluta)',
          icon: 'check'
        },
        {
          aspect: 'Calidad de clusters',
          supervised: 'No aplicable',
          unsupervised: 'Silhouette Score, Inercia, Davies-Bouldin',
          icon: 'award'
        },
        {
          aspect: 'Validación',
          supervised: 'Train/Validation/Test split',
          unsupervised: 'Validación visual, estabilidad',
          icon: 'shield-check'
        },
        {
          aspect: 'Interpretación de resultados',
          supervised: 'Comparar con etiquetas reales',
          unsupervised: 'Análisis de dominio experto',
          icon: 'user-check'
        }
      ]
    }
  };

  const renderComparison = () => {
    const data = comparisonData[activeComparison];
    
    return (
      <div className="space-y-4">
        <h4 className="text-xl font-bold text-white mb-6">{data.title}</h4>
        
        <div className="overflow-x-auto">
          <table className="w-full bg-white/5 rounded-lg overflow-hidden">
            <thead className="bg-white/10">
              <tr>
                <th className="p-4 text-left text-white font-semibold">Aspecto</th>
                <th className="p-4 text-left text-blue-300 font-semibold">
                  <Icon name="user-graduate" className="w-5 h-5 inline mr-2" />
                  Supervisado
                </th>
                <th className="p-4 text-left text-green-300 font-semibold">
                  <Icon name="search" className="w-5 h-5 inline mr-2" />
                  No Supervisado
                </th>
              </tr>
            </thead>
            <tbody>
              {data.items.map((item, index) => (
                <tr key={index} className="border-t border-white/10 hover:bg-white/5 transition-colors">
                  <td className="p-4">
                    <div className="flex items-center text-white">
                      <Icon name={item.icon} className="w-5 h-5 mr-3 text-gray-400" />
                      <span className="font-medium">{item.aspect}</span>
                    </div>
                  </td>
                  <td className="p-4 text-white/80">{item.supervised}</td>
                  <td className="p-4 text-white/80">{item.unsupervised}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };

  const renderScenario = (scenario) => {
    return (
      <div className="space-y-6">
        <div className="text-center">
          <h4 className="text-xl font-bold text-white mb-2">{scenario.title}</h4>
          <p className="text-white/80">{scenario.description}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Enfoque Supervisado */}
          <div className={`bg-blue-500/20 p-6 rounded-xl border-2 ${
            scenario.supervised.suitable 
              ? 'border-green-400' 
              : 'border-red-400'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold text-blue-200">
                <Icon name="user-graduate" className="w-6 h-6 inline mr-2" />
                Aprendizaje Supervisado
              </h5>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                scenario.supervised.suitable 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {scenario.supervised.suitable ? '✓ Recomendado' : '✗ No ideal'}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h6 className="text-white font-semibold mb-2">Enfoque:</h6>
                <p className="text-white/80 text-sm">{scenario.supervised.approach}</p>
              </div>

              <div>
                <h6 className="text-green-300 font-semibold mb-2">Ventajas:</h6>
                <ul className="text-white/80 text-sm space-y-1">
                  {scenario.supervised.pros.map((pro, i) => (
                    <li key={i}>• {pro}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h6 className="text-red-300 font-semibold mb-2">Desventajas:</h6>
                <ul className="text-white/80 text-sm space-y-1">
                  {scenario.supervised.cons.map((con, i) => (
                    <li key={i}>• {con}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-white/90 text-sm">
                  <strong>Razón:</strong> {scenario.supervised.reason}
                </p>
              </div>
            </div>
          </div>

          {/* Enfoque No Supervisado */}
          <div className={`bg-green-500/20 p-6 rounded-xl border-2 ${
            scenario.unsupervised.suitable 
              ? 'border-green-400' 
              : 'border-red-400'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <h5 className="text-xl font-bold text-green-200">
                <Icon name="search" className="w-6 h-6 inline mr-2" />
                Aprendizaje No Supervisado
              </h5>
              <span className={`px-3 py-1 rounded-full text-sm font-semibold ${
                scenario.unsupervised.suitable 
                  ? 'bg-green-500 text-white' 
                  : 'bg-red-500 text-white'
              }`}>
                {scenario.unsupervised.suitable ? '✓ Recomendado' : '✗ No ideal'}
              </span>
            </div>

            <div className="space-y-4">
              <div>
                <h6 className="text-white font-semibold mb-2">Enfoque:</h6>
                <p className="text-white/80 text-sm">{scenario.unsupervised.approach}</p>
              </div>

              <div>
                <h6 className="text-green-300 font-semibold mb-2">Ventajas:</h6>
                <ul className="text-white/80 text-sm space-y-1">
                  {scenario.unsupervised.pros.map((pro, i) => (
                    <li key={i}>• {pro}</li>
                  ))}
                </ul>
              </div>

              <div>
                <h6 className="text-red-300 font-semibold mb-2">Desventajas:</h6>
                <ul className="text-white/80 text-sm space-y-1">
                  {scenario.unsupervised.cons.map((con, i) => (
                    <li key={i}>• {con}</li>
                  ))}
                </ul>
              </div>

              <div className="bg-white/10 p-3 rounded-lg">
                <p className="text-white/90 text-sm">
                  <strong>Razón:</strong> {scenario.unsupervised.reason}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="space-y-8">
      {/* Navegación principal */}
      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          ⚖️ Comparación de Paradigmas de Aprendizaje
        </h3>
        
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {setActiveComparison('overview'); setSelectedScenario(null);}}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeComparison === 'overview' && !selectedScenario
                ? 'bg-blue-500 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            <Icon name="list" className="w-5 h-5 inline mr-2" />
            Comparación General
          </button>
          
          <button
            onClick={() => {setActiveComparison('algorithms'); setSelectedScenario(null);}}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeComparison === 'algorithms' && !selectedScenario
                ? 'bg-purple-500 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            <Icon name="cogs" className="w-5 h-5 inline mr-2" />
            Algoritmos
          </button>
          
          <button
            onClick={() => {setActiveComparison('metrics'); setSelectedScenario(null);}}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors ${
              activeComparison === 'metrics' && !selectedScenario
                ? 'bg-green-500 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
          >
            <Icon name="chart-bar" className="w-5 h-5 inline mr-2" />
            Métricas
          </button>
        </div>
      </div>

      {/* Contenido principal */}
      <div className="glass-effect p-8 rounded-xl">
        {!selectedScenario ? renderComparison() : renderScenario(selectedScenario)}
      </div>

      {/* Casos de uso prácticos */}
      <div className="glass-effect p-6 rounded-xl">
        <h4 className="text-xl font-bold text-white mb-6">
          🎯 Casos de Uso: ¿Cuándo usar cada paradigma?
        </h4>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {scenarios.map((scenario) => (
            <button
              key={scenario.id}
              onClick={() => setSelectedScenario(scenario)}
              className={`p-4 rounded-lg border-2 transition-all text-left ${
                selectedScenario?.id === scenario.id
                  ? 'border-yellow-400 bg-yellow-500/20'
                  : 'border-white/20 bg-white/5 hover:bg-white/10'
              }`}
            >
              <h5 className="text-white font-semibold mb-2">{scenario.title}</h5>
              <p className="text-white/70 text-sm">{scenario.description}</p>
              
              <div className="flex space-x-2 mt-3">
                {scenario.supervised.suitable && (
                  <span className="px-2 py-1 bg-blue-500 text-white text-xs rounded">
                    Supervisado
                  </span>
                )}
                {scenario.unsupervised.suitable && (
                  <span className="px-2 py-1 bg-green-500 text-white text-xs rounded">
                    No Supervisado
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>

        {selectedScenario && (
          <button
            onClick={() => setSelectedScenario(null)}
            className="mt-4 px-4 py-2 bg-gray-500 hover:bg-gray-600 text-white rounded-lg transition-colors"
          >
            ← Volver a la lista
          </button>
        )}
      </div>

      {/* Recomendaciones finales */}
      {!selectedScenario && (
        <div className="bg-gradient-to-r from-blue-500/20 to-green-500/20 p-6 rounded-xl border border-white/20">
          <h4 className="text-xl font-bold text-white mb-4">
            💡 Recomendaciones para Elegir el Paradigma
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h5 className="text-blue-300 font-semibold mb-3">
                <Icon name="user-graduate" className="w-5 h-5 inline mr-2" />
                Usa Aprendizaje Supervisado cuando:
              </h5>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• Tienes datos etiquetados de calidad</li>
                <li>• El objetivo está claramente definido</li>
                <li>• Necesitas alta precisión en tareas específicas</li>
                <li>• Los resultados deben ser explicables</li>
                <li>• Estás resolviendo problemas de clasificación/regresión</li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-green-300 font-semibold mb-3">
                <Icon name="search" className="w-5 h-5 inline mr-2" />
                Usa Aprendizaje No Supervisado cuando:
              </h5>
              <ul className="text-white/80 text-sm space-y-2">
                <li>• No tienes datos etiquetados</li>
                <li>• Quieres explorar y entender los datos</li>
                <li>• Buscas patrones o estructuras ocultas</li>
                <li>• Necesitas reducir dimensionalidad</li>
                <li>• Quieres detectar anomalías o outliers</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 bg-purple-500/20 p-4 rounded-lg">
            <p className="text-purple-100 text-center">
              <Icon name="lightbulb" className="w-5 h-5 inline mr-2" />
              <strong>¡Muchas veces se usan ambos!</strong> Por ejemplo: usar aprendizaje no supervisado 
              para explorar datos y luego supervisado para construir el modelo final.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ComparacionParadigmas;
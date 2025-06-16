import React, { useState, useEffect } from 'react';
import Icon from '../Icon';

/**
 * Demo interactivo para entender el aprendizaje no supervisado
 * Incluye ejemplos de clustering de idiomas, patrones en datos y espacios latentes
 */
const AprendizajeNoSupervisadoDemo = () => {
  const [currentExample, setCurrentExample] = useState('clustering');
  const [selectedItems, setSelectedItems] = useState([]);
  const [clusters, setClusters] = useState([]);
  const [showSolution, setShowSolution] = useState(false);
  const [conceptSpace, setConceptSpace] = useState('faces');

  // Ejemplo de clustering de idiomas/símbolos
  const symbolsData = [
    // Símbolos tipo "Idioma A" (cuadrados y líneas)
    { id: 1, symbol: '□', type: 'A', features: ['geométrico', 'angular', 'simple'] },
    { id: 2, symbol: '▢', type: 'A', features: ['geométrico', 'angular', 'hueco'] },
    { id: 3, symbol: '▪', type: 'A', features: ['geométrico', 'angular', 'sólido'] },
    { id: 4, symbol: '◊', type: 'A', features: ['geométrico', 'angular', 'rotado'] },
    // Símbolos tipo "Idioma B" (curvas y círculos)
    { id: 5, symbol: '○', type: 'B', features: ['curvo', 'redondo', 'hueco'] },
    { id: 6, symbol: '●', type: 'B', features: ['curvo', 'redondo', 'sólido'] },
    { id: 7, symbol: '◐', type: 'B', features: ['curvo', 'redondo', 'parcial'] },
    { id: 8, symbol: '◑', type: 'B', features: ['curvo', 'redondo', 'mixto'] },
    // Símbolos tipo "Idioma C" (triangulares)
    { id: 9, symbol: '△', type: 'C', features: ['triangular', 'angular', 'hueco'] },
    { id: 10, symbol: '▲', type: 'C', features: ['triangular', 'angular', 'sólido'] },
    { id: 11, symbol: '▽', type: 'C', features: ['triangular', 'angular', 'invertido'] },
    { id: 12, symbol: '▼', type: 'C', features: ['triangular', 'angular', 'invertido-sólido'] }
  ];

  // Datos para clustering de clientes
  const customerData = [
    { id: 1, name: 'Cliente A', spending: 500, frequency: 12, segment: 'Frecuente' },
    { id: 2, name: 'Cliente B', spending: 450, frequency: 15, segment: 'Frecuente' },
    { id: 3, name: 'Cliente C', spending: 200, frequency: 3, segment: 'Ocasional' },
    { id: 4, name: 'Cliente D', spending: 150, frequency: 2, segment: 'Ocasional' },
    { id: 5, name: 'Cliente E', spending: 1200, frequency: 8, segment: 'Premium' },
    { id: 6, name: 'Cliente F', spending: 1500, frequency: 6, segment: 'Premium' },
    { id: 7, name: 'Cliente G', spending: 400, frequency: 11, segment: 'Frecuente' },
    { id: 8, name: 'Cliente H', spending: 1800, frequency: 5, segment: 'Premium' }
  ];

  const handleItemClick = (item) => {
    if (selectedItems.find(selected => selected.id === item.id)) {
      setSelectedItems(selectedItems.filter(selected => selected.id !== item.id));
    } else {
      setSelectedItems([...selectedItems, item]);
    }
  };

  const createCluster = () => {
    if (selectedItems.length === 0) return;
    
    const newCluster = {
      id: clusters.length + 1,
      items: [...selectedItems],
      color: ['bg-blue-500', 'bg-green-500', 'bg-purple-500', 'bg-orange-500'][clusters.length % 4]
    };
    
    setClusters([...clusters, newCluster]);
    setSelectedItems([]);
  };

  const clearClusters = () => {
    setClusters([]);
    setSelectedItems([]);
    setShowSolution(false);
  };

  const revealSolution = () => {
    setShowSolution(true);
    // Crear clusters automáticos basados en tipos
    const clusterA = symbolsData.filter(s => s.type === 'A');
    const clusterB = symbolsData.filter(s => s.type === 'B');
    const clusterC = symbolsData.filter(s => s.type === 'C');
    
    setClusters([
      { id: 1, items: clusterA, color: 'bg-blue-500', name: 'Idioma Geométrico' },
      { id: 2, items: clusterB, color: 'bg-green-500', name: 'Idioma Curvo' },
      { id: 3, items: clusterC, color: 'bg-purple-500', name: 'Idioma Triangular' }
    ]);
    setSelectedItems([]);
  };

  const renderExample = () => {
    switch (currentExample) {
      case 'clustering':
        return (
          <div className="space-y-6">
            <div className="bg-blue-500/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">
                🌐 Ejemplo: Clustering de Idiomas Desconocidos
              </h4>
              <p className="text-white/90 mb-6">
                Imagina que encuentras un texto con símbolos de diferentes idiomas que no conoces. 
                ¿Puedes agrupar símbolos que pertenezcan al mismo idioma?
              </p>

              <div className="bg-white/5 p-6 rounded-lg mb-6">
                <h5 className="text-white font-semibold mb-4">Símbolos encontrados:</h5>
                <div className="grid grid-cols-4 md:grid-cols-6 gap-3">
                  {symbolsData.map((item) => {
                    const isSelected = selectedItems.find(s => s.id === item.id);
                    const inCluster = clusters.find(c => c.items.find(i => i.id === item.id));
                    
                    return (
                      <button
                        key={item.id}
                        onClick={() => !showSolution && handleItemClick(item)}
                        className={`p-4 rounded-lg border-2 transition-all text-2xl font-bold ${
                          showSolution && inCluster
                            ? `${inCluster.color}/30 border-${inCluster.color.split('-')[1]}-400`
                            : isSelected
                            ? 'border-yellow-400 bg-yellow-500/20'
                            : 'border-white/20 bg-white/5 hover:bg-white/10'
                        }`}
                        disabled={showSolution}
                      >
                        {item.symbol}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-4">
                <button
                  onClick={createCluster}
                  disabled={selectedItems.length === 0 || showSolution}
                  className="bg-green-500 hover:bg-green-600 disabled:bg-gray-500 disabled:cursor-not-allowed text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Crear Grupo ({selectedItems.length} seleccionados)
                </button>
                
                <button
                  onClick={clearClusters}
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  Limpiar
                </button>

                {!showSolution && (
                  <button
                    onClick={revealSolution}
                    className="bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors"
                  >
                    💡 Ver Solución
                  </button>
                )}
              </div>

              {selectedItems.length > 0 && (
                <div className="bg-yellow-500/20 p-4 rounded-lg mb-4">
                  <h6 className="text-yellow-100 font-semibold mb-2">Símbolos seleccionados:</h6>
                  <div className="flex space-x-2">
                    {selectedItems.map(item => (
                      <span key={item.id} className="text-2xl">{item.symbol}</span>
                    ))}
                  </div>
                </div>
              )}

              {clusters.length > 0 && (
                <div className="space-y-3">
                  <h6 className="text-white font-semibold">Grupos identificados:</h6>
                  {clusters.map((cluster, index) => (
                    <div key={cluster.id} className={`${cluster.color}/20 p-4 rounded-lg border border-${cluster.color.split('-')[1]}-400`}>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-white font-semibold">
                          {cluster.name || `Grupo ${index + 1}`}
                        </span>
                        <span className="text-white/60 text-sm">
                          {cluster.items.length} símbolos
                        </span>
                      </div>
                      <div className="flex space-x-2">
                        {cluster.items.map(item => (
                          <span key={item.id} className="text-xl">{item.symbol}</span>
                        ))}
                      </div>
                      {showSolution && (
                        <p className="text-white/80 text-sm mt-2">
                          Características: {cluster.items[0].features.join(', ')}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        );

      case 'patterns':
        return (
          <div className="space-y-6">
            <div className="bg-purple-500/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">
                📊 Ejemplo: Segmentación de Clientes
              </h4>
              <p className="text-white/90 mb-6">
                El algoritmo encuentra patrones en los datos de compra sin que le digamos qué grupos buscar.
              </p>

              <div className="bg-white/5 p-4 rounded-lg mb-6">
                <h5 className="text-white font-semibold mb-4">Datos de clientes:</h5>
                <div className="overflow-x-auto">
                  <table className="w-full text-white/80 text-sm">
                    <thead>
                      <tr className="border-b border-white/20">
                        <th className="text-left p-2">Cliente</th>
                        <th className="text-left p-2">Gasto Total</th>
                        <th className="text-left p-2">Frecuencia</th>
                        <th className="text-left p-2">Segmento</th>
                      </tr>
                    </thead>
                    <tbody>
                      {customerData.map(customer => (
                        <tr key={customer.id} className="border-b border-white/10">
                          <td className="p-2">{customer.name}</td>
                          <td className="p-2">${customer.spending}</td>
                          <td className="p-2">{customer.frequency} compras/año</td>
                          <td className="p-2">
                            <span className={`px-2 py-1 rounded text-xs ${
                              customer.segment === 'Premium' ? 'bg-purple-500' :
                              customer.segment === 'Frecuente' ? 'bg-blue-500' : 'bg-green-500'
                            }`}>
                              {customer.segment}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-purple-500/20 p-4 rounded-lg border border-purple-400">
                  <h6 className="text-purple-200 font-semibold mb-2">Segmento Premium</h6>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Alto gasto ($1200+)</li>
                    <li>• Baja frecuencia (5-8 compras)</li>
                    <li>• Compras de alto valor</li>
                  </ul>
                </div>

                <div className="bg-blue-500/20 p-4 rounded-lg border border-blue-400">
                  <h6 className="text-blue-200 font-semibold mb-2">Segmento Frecuente</h6>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Gasto medio ($400-500)</li>
                    <li>• Alta frecuencia (11-15 compras)</li>
                    <li>• Clientes regulares</li>
                  </ul>
                </div>

                <div className="bg-green-500/20 p-4 rounded-lg border border-green-400">
                  <h6 className="text-green-200 font-semibold mb-2">Segmento Ocasional</h6>
                  <ul className="text-white/80 text-sm space-y-1">
                    <li>• Bajo gasto ($150-200)</li>
                    <li>• Baja frecuencia (2-3 compras)</li>
                    <li>• Clientes esporádicos</li>
                  </ul>
                </div>
              </div>

              <div className="mt-4 bg-yellow-500/20 p-4 rounded-lg">
                <p className="text-yellow-100">
                  <Icon name="lightbulb" className="w-4 h-4 inline mr-2" />
                  <strong>Sin supervisión:</strong> El algoritmo descubrió estos 3 grupos automáticamente 
                  analizando solo los datos de gasto y frecuencia.
                </p>
              </div>
            </div>
          </div>
        );

      case 'latent':
        return (
          <div className="space-y-6">
            <div className="bg-green-500/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">
                🧠 Ejemplo: Espacios Latentes y Operaciones Conceptuales
              </h4>
              <p className="text-white/90 mb-6">
                Los algoritmos aprenden representaciones internas que permiten operaciones matemáticas con conceptos.
              </p>

              <div className="mb-6">
                <div className="flex space-x-4 mb-4">
                  <button
                    onClick={() => setConceptSpace('faces')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      conceptSpace === 'faces' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    👥 Caras
                  </button>
                  <button
                    onClick={() => setConceptSpace('words')}
                    className={`px-4 py-2 rounded-lg transition-colors ${
                      conceptSpace === 'words' 
                        ? 'bg-blue-500 text-white' 
                        : 'bg-white/10 text-white/80 hover:bg-white/20'
                    }`}
                  >
                    📚 Palabras
                  </button>
                </div>

                {conceptSpace === 'faces' && (
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h5 className="text-white font-semibold mb-4">Operación: Hombre con gafas - Hombre sin gafas + Mujer sin gafas = ?</h5>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                      <div className="bg-blue-500/20 p-4 rounded-lg">
                        <div className="text-4xl mb-2">👨‍🤓</div>
                        <p className="text-white text-sm">Hombre con gafas</p>
                        <p className="text-blue-300 text-xs">(Vector A)</p>
                      </div>

                      <div className="flex items-center justify-center text-white text-2xl">
                        <span>−</span>
                      </div>

                      <div className="bg-red-500/20 p-4 rounded-lg">
                        <div className="text-4xl mb-2">👨</div>
                        <p className="text-white text-sm">Hombre sin gafas</p>
                        <p className="text-red-300 text-xs">(Vector B)</p>
                      </div>

                      <div className="flex items-center justify-center text-white text-2xl">
                        <span>+</span>
                      </div>

                      <div className="bg-green-500/20 p-4 rounded-lg">
                        <div className="text-4xl mb-2">👩</div>
                        <p className="text-white text-sm">Mujer sin gafas</p>
                        <p className="text-green-300 text-xs">(Vector C)</p>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <div className="text-white text-2xl mb-2">=</div>
                      <div className="bg-purple-500/20 p-4 rounded-lg inline-block">
                        <div className="text-4xl mb-2">👩‍🤓</div>
                        <p className="text-white text-sm">Mujer con gafas</p>
                        <p className="text-purple-300 text-xs">(Vector resultante)</p>
                      </div>
                    </div>

                    <div className="mt-4 bg-purple-500/20 p-4 rounded-lg">
                      <p className="text-purple-100 text-sm">
                        <strong>Explicación:</strong> El algoritmo extrajo el concepto "gafas" como un vector 
                        que puede aplicarse a diferentes caras manteniendo las demás características.
                      </p>
                    </div>
                  </div>
                )}

                {conceptSpace === 'words' && (
                  <div className="bg-white/5 p-6 rounded-lg">
                    <h5 className="text-white font-semibold mb-4">Operación: Rey - Hombre + Mujer = ?</h5>
                    
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-4 text-center">
                      <div className="bg-yellow-500/20 p-4 rounded-lg">
                        <div className="text-4xl mb-2">👑</div>
                        <p className="text-white text-sm">Rey</p>
                        <p className="text-yellow-300 text-xs">(Vector A)</p>
                      </div>

                      <div className="flex items-center justify-center text-white text-2xl">
                        <span>−</span>
                      </div>

                      <div className="bg-blue-500/20 p-4 rounded-lg">
                        <div className="text-4xl mb-2">👨</div>
                        <p className="text-white text-sm">Hombre</p>
                        <p className="text-blue-300 text-xs">(Vector B)</p>
                      </div>

                      <div className="flex items-center justify-center text-white text-2xl">
                        <span>+</span>
                      </div>

                      <div className="bg-pink-500/20 p-4 rounded-lg">
                        <div className="text-4xl mb-2">👩</div>
                        <p className="text-white text-sm">Mujer</p>
                        <p className="text-pink-300 text-xs">(Vector C)</p>
                      </div>
                    </div>

                    <div className="mt-6 text-center">
                      <div className="text-white text-2xl mb-2">=</div>
                      <div className="bg-purple-500/20 p-4 rounded-lg inline-block">
                        <div className="text-4xl mb-2">👸</div>
                        <p className="text-white text-sm">Reina</p>
                        <p className="text-purple-300 text-xs">(Vector resultante)</p>
                      </div>
                    </div>

                    <div className="mt-4 bg-purple-500/20 p-4 rounded-lg">
                      <p className="text-purple-100 text-sm">
                        <strong>Explicación:</strong> El algoritmo capturó la relación género-realeza, 
                        permitiendo transformar conceptos manteniendo relaciones semánticas.
                      </p>
                    </div>
                  </div>
                )}
              </div>

              <div className="bg-orange-500/20 p-4 rounded-lg">
                <h6 className="text-orange-100 font-semibold mb-2">¿Cómo es esto posible?</h6>
                <ul className="text-white/80 text-sm space-y-1">
                  <li>• Los algoritmos mapean conceptos a vectores en espacios multidimensionales</li>
                  <li>• Conceptos similares están cerca en este espacio</li>
                  <li>• Las direcciones en el espacio representan relaciones (como género, edad, etc.)</li>
                  <li>• Podemos hacer matemática con estos vectores conceptuales</li>
                </ul>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="space-y-8">
      {/* Selector de ejemplos */}
      <div className="glass-effect p-6 rounded-xl">
        <h3 className="text-2xl font-bold text-white mb-6 text-center">
          🔍 Aprendizaje No Supervisado: Encontrar Patrones Ocultos
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => setCurrentExample('clustering')}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentExample === 'clustering'
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <Icon name="layer-group" className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h4 className="text-white font-semibold">Clustering</h4>
            <p className="text-white/60 text-sm">Agrupar elementos similares</p>
          </button>

          <button
            onClick={() => setCurrentExample('patterns')}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentExample === 'patterns'
                ? 'border-purple-400 bg-purple-500/20'
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <Icon name="chart-pie" className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h4 className="text-white font-semibold">Segmentación</h4>
            <p className="text-white/60 text-sm">Descubrir grupos en datos</p>
          </button>

          <button
            onClick={() => setCurrentExample('latent')}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentExample === 'latent'
                ? 'border-green-400 bg-green-500/20'
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <Icon name="brain" className="w-8 h-8 text-green-400 mx-auto mb-2" />
            <h4 className="text-white font-semibold">Espacios Latentes</h4>
            <p className="text-white/60 text-sm">Operaciones conceptuales</p>
          </button>
        </div>

        {/* Concepto clave */}
        <div className="bg-gradient-to-r from-purple-500/20 to-green-500/20 p-4 rounded-lg border border-white/20">
          <p className="text-white text-center">
            <Icon name="search" className="w-5 h-5 inline mr-2 text-green-400" />
            <strong>Clave del Aprendizaje No Supervisado:</strong> Encontrar patrones, estructuras y 
            relaciones ocultas en los datos sin que nadie le diga qué buscar.
          </p>
        </div>
      </div>

      {/* Contenido del ejemplo seleccionado */}
      {renderExample()}

      {/* Ventajas del aprendizaje no supervisado */}
      <div className="glass-effect p-6 rounded-xl">
        <h4 className="text-xl font-bold text-white mb-4">
          ✨ Ventajas del Aprendizaje No Supervisado
        </h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="bg-green-500/20 p-4 rounded-lg border-l-4 border-green-400">
              <h5 className="text-green-100 font-semibold mb-2">📊 Datos más baratos</h5>
              <p className="text-white/80 text-sm">
                No necesitas que humanos etiqueten cada dato. Solo necesitas los datos de entrada.
              </p>
            </div>
            <div className="bg-blue-500/20 p-4 rounded-lg border-l-4 border-blue-400">
              <h5 className="text-blue-100 font-semibold mb-2">🔍 Descubre lo inesperado</h5>
              <p className="text-white/80 text-sm">
                Puede encontrar patrones que los humanos no habíamos considerado o notado.
              </p>
            </div>
          </div>
          <div className="space-y-4">
            <div className="bg-purple-500/20 p-4 rounded-lg border-l-4 border-purple-400">
              <h5 className="text-purple-100 font-semibold mb-2">🚀 Escalabilidad</h5>
              <p className="text-white/80 text-sm">
                Puede procesar millones de datos sin supervisión humana constante.
              </p>
            </div>
            <div className="bg-orange-500/20 p-4 rounded-lg border-l-4 border-orange-400">
              <h5 className="text-orange-100 font-semibold mb-2">🧠 Representaciones ricas</h5>
              <p className="text-white/80 text-sm">
                Aprende estructuras conceptuales complejas que se pueden usar para múltiples tareas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AprendizajeNoSupervisadoDemo;
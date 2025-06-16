import React, { useState, useEffect } from 'react';
import Icon from '../Icon';

/**
 * Demo interactivo para entender el aprendizaje supervisado
 * Incluye ejemplos de multiplicación por 2, clasificación de spam y detección de depresión
 */
const AprendizajeSupervisadoDemo = () => {
  const [currentExample, setCurrentExample] = useState('multiplication');
  const [userInput, setUserInput] = useState('');
  const [predictions, setPredictions] = useState([]);
  const [showPattern, setShowPattern] = useState(false);
  const [trainingData, setTrainingData] = useState([]);

  // Ejemplos de datos de entrenamiento para multiplicación por 2
  const multiplicationData = [
    { input: 1, output: 2 },
    { input: 2, output: 4 },
    { input: 6, output: 12 },
    { input: 9, output: 18 },
    { input: 3, output: 6 },
    { input: 5, output: 10 }
  ];

  // Ejemplos de datos para clasificación de spam
  const emailData = [
    { 
      text: "¡GANASTE $1,000,000! Haz clic AHORA para reclamar tu premio", 
      label: "SPAM",
      features: ["palabras en mayúsculas", "signos de exclamación múltiples", "ofertas de dinero"]
    },
    { 
      text: "Reunión mañana a las 3PM en sala de conferencias", 
      label: "NO SPAM",
      features: ["información laboral", "horario específico", "ubicación clara"]
    },
    { 
      text: "ÚLTIMA OPORTUNIDAD!!! Compra ahora y ahorra 90%!!!", 
      label: "SPAM",
      features: ["urgencia falsa", "descuentos exagerados", "puntuación excesiva"]
    },
    { 
      text: "Hola mamá, llegaré tarde a cenar esta noche", 
      label: "NO SPAM",
      features: ["mensaje personal", "información familiar", "tono natural"]
    }
  ];

  // Ejemplos de patrones para detección de depresión en Instagram
  const instagramData = [
    {
      profile: "Usuario A",
      features: ["colores grises y azules predominantes", "pocas selfies", "posts espaciados en el tiempo"],
      prediction: "Posible depresión",
      confidence: "73%"
    },
    {
      profile: "Usuario B", 
      features: ["colores vibrantes", "muchas fotos sociales", "posts frecuentes"],
      prediction: "Baja probabilidad",
      confidence: "12%"
    },
    {
      profile: "Usuario C",
      features: ["filtros oscuros", "textos melancólicos", "pocas interacciones"],
      prediction: "Posible depresión",
      confidence: "81%"
    }
  ];

  useEffect(() => {
    setTrainingData(multiplicationData);
    setPredictions([]);
    setUserInput('');
    setShowPattern(false);
  }, [currentExample]);

  const handlePrediction = () => {
    if (!userInput) return;

    const input = parseFloat(userInput);
    if (isNaN(input)) return;

    let prediction;
    let explanation;

    switch (currentExample) {
      case 'multiplication':
        // Simular que el algoritmo aprendió la regla "multiplicar por 2"
        prediction = input * 2;
        explanation = `El algoritmo detectó el patrón: entrada × 2 = salida`;
        break;
      
      case 'email':
        // Simular clasificación de email basada en características
        const emailText = userInput.toLowerCase();
        const spamIndicators = ['ganar', 'premio', 'gratis', 'urgente', 'click', 'ahora', 'dinero'];
        const spamCount = spamIndicators.filter(word => emailText.includes(word)).length;
        
        prediction = spamCount >= 2 ? 'SPAM' : 'NO SPAM';
        explanation = `Detectadas ${spamCount} palabras indicadoras de spam`;
        break;
      
      default:
        prediction = 'N/A';
        explanation = '';
    }

    const newPrediction = {
      input: userInput,
      output: prediction,
      explanation,
      timestamp: new Date().toLocaleTimeString()
    };

    setPredictions(prev => [newPrediction, ...prev.slice(0, 4)]);
    setUserInput('');
  };

  const revealPattern = () => {
    setShowPattern(true);
  };

  const renderExample = () => {
    switch (currentExample) {
      case 'multiplication':
        return (
          <div className="space-y-6">
            <div className="bg-blue-500/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">
                🧮 Ejemplo: Descubrir la Regla Matemática
              </h4>
              <p className="text-white/90 mb-4">
                El algoritmo observa pares entrada-salida y debe aprender la relación.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-4">
                {multiplicationData.map((pair, index) => (
                  <div key={index} className="bg-white/10 p-3 rounded-lg text-center">
                    <div className="text-blue-300 font-semibold">Entrada: {pair.input}</div>
                    <div className="text-white text-sm">↓</div>
                    <div className="text-green-300 font-semibold">Salida: {pair.output}</div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex items-center space-x-4">
                  <input
                    type="number"
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Prueba un número..."
                    className="flex-1 p-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20"
                  />
                  <button
                    onClick={handlePrediction}
                    className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Predecir
                  </button>
                </div>
              </div>

              {!showPattern && (
                <button
                  onClick={revealPattern}
                  className="mt-4 bg-yellow-500 hover:bg-yellow-600 text-black px-4 py-2 rounded-lg font-semibold transition-colors"
                >
                  💡 Revelar patrón aprendido
                </button>
              )}

              {showPattern && (
                <div className="mt-4 bg-green-500/20 p-4 rounded-lg border-l-4 border-green-400">
                  <p className="text-green-100 font-semibold">
                    🎯 Patrón descubierto: <strong>Salida = Entrada × 2</strong>
                  </p>
                  <p className="text-white/80 text-sm mt-2">
                    El algoritmo generalizó esta regla observando los ejemplos de entrenamiento.
                  </p>
                </div>
              )}
            </div>
          </div>
        );

      case 'email':
        return (
          <div className="space-y-6">
            <div className="bg-purple-500/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">
                📧 Ejemplo: Clasificación de Spam
              </h4>
              <p className="text-white/90 mb-4">
                El algoritmo aprende a distinguir emails legítimos de spam usando ejemplos etiquetados.
              </p>

              <div className="space-y-3 mb-4">
                {emailData.map((email, index) => (
                  <div key={index} className={`p-4 rounded-lg border-l-4 ${
                    email.label === 'SPAM' 
                      ? 'bg-red-500/20 border-red-400' 
                      : 'bg-green-500/20 border-green-400'
                  }`}>
                    <div className="flex justify-between items-start mb-2">
                      <p className="text-white text-sm flex-1">{email.text}</p>
                      <span className={`px-2 py-1 rounded text-xs font-semibold ${
                        email.label === 'SPAM' 
                          ? 'bg-red-500 text-white' 
                          : 'bg-green-500 text-white'
                      }`}>
                        {email.label}
                      </span>
                    </div>
                    <div className="text-white/60 text-xs">
                      Características: {email.features.join(', ')}
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-white/5 p-4 rounded-lg">
                <div className="flex flex-col space-y-3">
                  <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Escribe un email para clasificar..."
                    className="p-3 rounded-lg bg-white/10 text-white placeholder-white/50 border border-white/20 h-20 resize-none"
                  />
                  <button
                    onClick={handlePrediction}
                    className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
                  >
                    Clasificar Email
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'instagram':
        return (
          <div className="space-y-6">
            <div className="bg-orange-500/20 p-6 rounded-xl">
              <h4 className="text-xl font-bold text-white mb-4">
                📱 Ejemplo: Detección de Depresión en Instagram
              </h4>
              <p className="text-white/90 mb-4">
                Estudio real de 2016: IA supera a doctores en detectar depresión analizando fotos de Instagram.
              </p>

              <div className="space-y-4">
                {instagramData.map((user, index) => (
                  <div key={index} className="bg-white/10 p-4 rounded-lg">
                    <div className="flex justify-between items-start mb-3">
                      <h5 className="text-white font-semibold">{user.profile}</h5>
                      <div className="text-right">
                        <div className={`px-3 py-1 rounded text-sm font-semibold ${
                          user.prediction.includes('Posible') 
                            ? 'bg-red-500 text-white' 
                            : 'bg-green-500 text-white'
                        }`}>
                          {user.prediction}
                        </div>
                        <div className="text-white/60 text-xs mt-1">
                          Confianza: {user.confidence}
                        </div>
                      </div>
                    </div>
                    <div className="text-white/80 text-sm">
                      <strong>Patrones detectados:</strong>
                      <ul className="list-disc list-inside mt-1 space-y-1">
                        {user.features.map((feature, i) => (
                          <li key={i}>{feature}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-4 bg-yellow-500/20 p-4 rounded-lg">
                <p className="text-yellow-100 text-sm">
                  <Icon name="info-circle" className="w-4 h-4 inline mr-2" />
                  <strong>Nota importante:</strong> Este es un ejemplo educativo. En aplicaciones reales, 
                  la privacidad y el consentimiento son fundamentales.
                </p>
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
          🎓 Aprendizaje Supervisado: Ejemplos Interactivos
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <button
            onClick={() => setCurrentExample('multiplication')}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentExample === 'multiplication'
                ? 'border-blue-400 bg-blue-500/20'
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <Icon name="calculator" className="w-8 h-8 text-blue-400 mx-auto mb-2" />
            <h4 className="text-white font-semibold">Regla Matemática</h4>
            <p className="text-white/60 text-sm">Descubrir patrones numéricos</p>
          </button>

          <button
            onClick={() => setCurrentExample('email')}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentExample === 'email'
                ? 'border-purple-400 bg-purple-500/20'
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <Icon name="envelope" className="w-8 h-8 text-purple-400 mx-auto mb-2" />
            <h4 className="text-white font-semibold">Clasificación</h4>
            <p className="text-white/60 text-sm">Spam vs No Spam</p>
          </button>

          <button
            onClick={() => setCurrentExample('instagram')}
            className={`p-4 rounded-lg border-2 transition-all ${
              currentExample === 'instagram'
                ? 'border-orange-400 bg-orange-500/20'
                : 'border-white/20 bg-white/5 hover:bg-white/10'
            }`}
          >
            <Icon name="camera" className="w-8 h-8 text-orange-400 mx-auto mb-2" />
            <h4 className="text-white font-semibold">Análisis Avanzado</h4>
            <p className="text-white/60 text-sm">Detección en redes sociales</p>
          </button>
        </div>

        {/* Concepto clave */}
        <div className="bg-gradient-to-r from-blue-500/20 to-purple-500/20 p-4 rounded-lg border border-white/20">
          <p className="text-white text-center">
            <Icon name="lightbulb" className="w-5 h-5 inline mr-2 text-yellow-400" />
            <strong>Clave del Aprendizaje Supervisado:</strong> Mostrar muchos ejemplos entrada-salida 
            para que el algoritmo aprenda la relación y pueda predecir en nuevos casos.
          </p>
        </div>
      </div>

      {/* Contenido del ejemplo seleccionado */}
      {renderExample()}

      {/* Historial de predicciones */}
      {predictions.length > 0 && (
        <div className="glass-effect p-6 rounded-xl">
          <h4 className="text-xl font-bold text-white mb-4">
            📊 Historial de Predicciones
          </h4>
          <div className="space-y-3">
            {predictions.map((pred, index) => (
              <div key={index} className="bg-white/10 p-4 rounded-lg border border-white/20">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <span className="text-blue-300">Entrada:</span> 
                    <span className="text-white ml-2">{pred.input}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-green-300">Predicción:</span> 
                    <span className="text-white ml-2">{pred.output}</span>
                  </div>
                </div>
                {pred.explanation && (
                  <p className="text-white/70 text-sm">{pred.explanation}</p>
                )}
                <p className="text-white/50 text-xs mt-2">{pred.timestamp}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default AprendizajeSupervisadoDemo;
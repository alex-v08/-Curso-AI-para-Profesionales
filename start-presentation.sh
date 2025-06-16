#!/bin/bash

# Script para iniciar la presentación localmente
# Uso: ./start-presentation.sh

echo "🚀 Iniciando Presentación de Machine Learning..."
echo "📚 Clase 2: Fundamentos de Machine Learning"
echo "📅 10 de Junio del 2025"
echo ""

# Verificar si Python está instalado
if command -v python3 &> /dev/null; then
    echo "✅ Python3 encontrado"
    echo "🌐 Iniciando servidor en http://localhost:8000"
    echo "📋 Controles:"
    echo "   - Flechas ← → para navegar"
    echo "   - Espacio para siguiente slide"
    echo "   - F para pantalla completa"
    echo "   - Ctrl+C para detener el servidor"
    echo ""
    echo "🎯 Abriendo presentación..."
    
    # Iniciar servidor HTTP simple
    python3 -m http.server 8000
    
elif command -v python &> /dev/null; then
    echo "✅ Python encontrado"
    echo "🌐 Iniciando servidor en http://localhost:8000"
    echo "📋 Controles:"
    echo "   - Flechas ← → para navegar"
    echo "   - Espacio para siguiente slide"
    echo "   - F para pantalla completa"
    echo "   - Ctrl+C para detener el servidor"
    echo ""
    echo "🎯 Abriendo presentación..."
    
    # Iniciar servidor HTTP simple
    python -m http.server 8000
    
elif command -v node &> /dev/null; then
    echo "✅ Node.js encontrado"
    echo "📦 Instalando dependencias..."
    npm install
    echo "🌐 Iniciando servidor en http://localhost:8000"
    npm run serve
    
else
    echo "❌ No se encontró Python ni Node.js"
    echo "📖 Instrucciones alternativas:"
    echo "   1. Instalar Python: https://python.org"
    echo "   2. O abrir index.html directamente en el navegador"
    echo "   3. O usar cualquier servidor web local"
    echo ""
    echo "💡 Tip: También puedes abrir index.html directamente en tu navegador"
fi
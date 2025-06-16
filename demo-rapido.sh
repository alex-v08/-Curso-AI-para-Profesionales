#!/bin/bash

# Demo rápido de la presentación
# Este script abre la presentación automáticamente

echo "🎓 DEMO RÁPIDO - PRESENTACIÓN MACHINE LEARNING"
echo "=============================================="
echo ""
echo "🚀 Iniciando presentación en modo demo..."
echo ""

# Detectar sistema operativo
if [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    echo "🍎 Detectado: macOS"
    echo "📂 Abriendo presentación..."
    open index.html
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    echo "🐧 Detectado: Linux"
    echo "📂 Intentando abrir presentación..."
    if command -v xdg-open > /dev/null; then
        xdg-open index.html
    elif command -v firefox > /dev/null; then
        firefox index.html
    elif command -v google-chrome > /dev/null; then
        google-chrome index.html
    else
        echo "⚠️  No se pudo detectar navegador. Abre manualmente: index.html"
    fi
elif [[ "$OSTYPE" == "msys" ]] || [[ "$OSTYPE" == "win32" ]]; then
    # Windows
    echo "🪟 Detectado: Windows"
    echo "📂 Abriendo presentación..."
    start index.html
else
    echo "❓ Sistema no reconocido. Abre manualmente: index.html"
fi

echo ""
echo "📋 CONTROLES DE LA PRESENTACIÓN:"
echo "   ➡️  Flecha derecha o ESPACIO: Siguiente slide"
echo "   ⬅️  Flecha izquierda: Slide anterior"
echo "   🖥️  Tecla F: Pantalla completa"
echo "   🔘 Clic en círculos: Ir a slide específico"
echo ""
echo "🎯 CONTENIDO INCLUIDO:"
echo "   • 15 slides completos"
echo "   • Duración: 90-120 minutos" 
echo "   • Fundamentos de ML e IA"
echo "   • Regresión lineal completa"
echo "   • Casos prácticos reales"
echo ""
echo "📚 Para más información ver:"
echo "   • README.md - Documentación completa"
echo "   • notas-instructor.md - Guía del instructor"
echo "   • CHECKLIST-FINAL.md - Validación completa"
echo ""
echo "✨ ¡Disfruta la presentación! ✨"
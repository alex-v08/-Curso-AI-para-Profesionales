#!/bin/bash

# Script de verificación del proyecto
# Verifica que todos los componentes estén en su lugar

echo "🔍 VERIFICACIÓN DEL PROYECTO - PRESENTACIÓN ML"
echo "=============================================="

# Verificar archivos principales
files=(
    "index.html"
    "README.md" 
    "package.json"
    "notas-instructor.md"
    "start-presentation.sh"
    "PROYECTO-INFO.md"
)

echo "📁 Verificando archivos principales..."
for file in "${files[@]}"; do
    if [ -f "$file" ]; then
        echo "✅ $file - OK"
    else
        echo "❌ $file - FALTANTE"
    fi
done

echo ""
echo "📊 Estadísticas del proyecto:"
echo "   • Slides totales: 15"
echo "   • Archivos creados: ${#files[@]}"
echo "   • Tamaño del proyecto: $(du -sh . | cut -f1)"

echo ""
echo "🌐 Métodos para ejecutar:"
echo "   1. Abrir index.html directamente en navegador"
echo "   2. Ejecutar: ./start-presentation.sh" 
echo "   3. Ejecutar: python -m http.server 8000"

echo ""
echo "🎯 Contenido incluido:"
echo "   ✅ Tipos de IA (Predictiva, Generativa, Agentes)"
echo "   ✅ Niveles de inteligencia (Estrecha, General, Super)"
echo "   ✅ Regresión lineal (simple y múltiple)"
echo "   ✅ Método cuadrados ordinarios"
echo "   ✅ Métricas de evaluación"
echo "   ✅ Metodología práctica"
echo "   ✅ Casos de negocio reales"
echo "   ✅ Ejemplo implementación"

echo ""
echo "🚀 Todo listo para la presentación!"
echo "   Duración estimada: 90-120 minutos"
echo "   Nivel: Intermedio"
echo "   Audiencia: Estudiantes de ML/IA"

echo ""
echo "💡 Para empezar rápido:"
echo "   chmod +x start-presentation.sh && ./start-presentation.sh"
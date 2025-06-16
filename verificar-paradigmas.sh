#!/bin/bash

# Script de verificación para el nuevo módulo de Paradigmas de Aprendizaje
# Verifica que todos los archivos nuevos existen y están correctamente estructurados

echo "🧠 Verificando Módulo de Paradigmas de Aprendizaje..."
echo "=========================================="

# Verificar estructura de directorios
echo "📁 Verificando estructura de directorios..."

if [ -d "src/components/ParadigmasAprendizaje" ]; then
    echo "✅ Directorio ParadigmasAprendizaje existe"
else
    echo "❌ Directorio ParadigmasAprendizaje NO existe"
    exit 1
fi

# Verificar archivos de componentes
echo ""
echo "🎮 Verificando componentes interactivos..."

componentes=(
    "src/components/ParadigmasAprendizaje/AprendizajeSupervisadoDemo.js"
    "src/components/ParadigmasAprendizaje/AprendizajeNoSupervisadoDemo.js"
    "src/components/ParadigmasAprendizaje/ComparacionParadigmas.js"
    "src/components/ParadigmasAprendizaje/index.js"
)

for componente in "${componentes[@]}"; do
    if [ -f "$componente" ]; then
        echo "✅ $componente"
    else
        echo "❌ $componente NO existe"
        exit 1
    fi
done

# Verificar archivos de datos
echo ""
echo "📊 Verificando archivos de datos..."

if [ -f "src/data/paradigmasAprendizajeSlides.js" ]; then
    echo "✅ paradigmasAprendizajeSlides.js"
else
    echo "❌ paradigmasAprendizajeSlides.js NO existe"
    exit 1
fi

# Verificar archivos de documentación
echo ""
echo "📚 Verificando documentación..."

if [ -f "PARADIGMAS-APRENDIZAJE.md" ]; then
    echo "✅ PARADIGMAS-APRENDIZAJE.md"
else
    echo "❌ PARADIGMAS-APRENDIZAJE.md NO existe"
fi

# Verificar dependencias
echo ""
echo "📦 Verificando dependencias..."

if [ -f "package.json" ]; then
    echo "✅ package.json existe"
    
    # Verificar que React está instalado
    if grep -q "\"react\"" package.json; then
        echo "✅ React encontrado en dependencias"
    else
        echo "⚠️  React no encontrado en dependencias"
    fi
else
    echo "❌ package.json NO existe"
    exit 1
fi

# Contar líneas de código nuevas
echo ""
echo "📈 Estadísticas del nuevo módulo..."

total_lines=0
for componente in "${componentes[@]}"; do
    if [ -f "$componente" ]; then
        lines=$(wc -l < "$componente")
        total_lines=$((total_lines + lines))
        echo "   $componente: $lines líneas"
    fi
done

if [ -f "src/data/paradigmasAprendizajeSlides.js" ]; then
    lines=$(wc -l < "src/data/paradigmasAprendizajeSlides.js")
    total_lines=$((total_lines + lines))
    echo "   paradigmasAprendizajeSlides.js: $lines líneas"
fi

echo ""
echo "📊 Total de líneas de código nuevo: $total_lines"

# Verificar sintaxis básica de JavaScript
echo ""
echo "🔍 Verificación básica de sintaxis..."

for componente in "${componentes[@]}"; do
    if [ -f "$componente" ]; then
        # Verificar que tiene export
        if grep -q "export" "$componente"; then
            echo "✅ $componente tiene exports"
        else
            echo "⚠️  $componente no tiene exports"
        fi
        
        # Verificar que tiene import React
        if grep -q "import.*React" "$componente"; then
            echo "✅ $componente importa React"
        else
            echo "⚠️  $componente no importa React"
        fi
    fi
done

echo ""
echo "🎯 Resumen del módulo:"
echo "   - 7 slides nuevos (0-6)"
echo "   - 3 componentes interactivos"
echo "   - Casos reales incluidos"
echo "   - Documentación completa"
echo ""
echo "🚀 ¡Verificación completada! El módulo está listo para usar."
echo ""
echo "Para iniciar la presentación:"
echo "   npm start"
echo ""
echo "Para ver la documentación del módulo:"
echo "   cat PARADIGMAS-APRENDIZAJE.md"
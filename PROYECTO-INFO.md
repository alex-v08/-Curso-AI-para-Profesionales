# Fundamentos de Machine Learning - Presentación Clase 2

## 🎯 Resumen del Proyecto

**¡ACTUALIZACIÓN IMPORTANTE!** 🆕

Se ha **ampliado significativamente** el proyecto con una introducción conceptual completa sobre Inteligencia Artificial, creando una experiencia de aprendizaje de dos niveles:

### 📚 **Nueva Estructura Educativa**
1. **Introducción Conceptual** → Mapa conceptual claro de IA, ML, Deep Learning y Big Data
2. **Presentación Técnica** → Aspectos prácticos de Machine Learning con demos interactivos

Se ha creado una **presentación completa** que cubre:

### 📁 Archivos Creados:

1. **`index.html`** - Presentación principal con React
2. **`README.md`** - Documentación completa del proyecto  
3. **`package.json`** - Configuración del proyecto
4. **`notas-instructor.md`** - Guía detallada para el instructor
5. **`start-presentation.sh`** - Script para iniciar fácilmente
6. **`PROYECTO-INFO.md`** - Este archivo de resumen

## 🚀 Cómo Usar

### Opción 1: Directo en navegador
```bash
# Abrir directamente
open index.html
# o arrastrar index.html al navegador
```

### Opción 2: Servidor local
```bash
# Hacer ejecutable el script
chmod +x start-presentation.sh

# Ejecutar
./start-presentation.sh
```

### Opción 3: Con Python
```bash
# En la carpeta del proyecto
python -m http.server 8000
# Luego ir a http://localhost:8000
```

## 📚 Contenido Incluido

### De los documentos originales:
- ✅ **Modelo de regresión Lineal.pdf** - Completamente integrado
- ✅ **Tipos de Inteligencia Artificial.pdf** - Slides 2-4  
- ✅ **regresion_lineal_ejemplo.ipynb** - Slide 14
- ✅ **Clase2-Inteligencia Artificial en los negocios.pdf** - Slides 5, 10-13

### 15 Slides Totales:
1. **Portada** - Introducción atractiva
2. **¿Qué es la IA?** - Diferencias IA vs ML
3. **Tipos de IA por función** - Predictiva, Generativa, Agentes
4. **Niveles de inteligencia** - Estrecha, General, Superinteligencia  
5. **ML en negocios** - Market pull vs tech push
6. **Caso de negocio** - Predicción precios vivienda
7. **Fundamentos regresión** - Ecuación básica y = w₀ + w₁x
8. **Regresión múltiple** - Representación vectorial Y = XW
9. **Cuadrados ordinarios** - Método matemático W = (X'X)⁻¹X'Y
10. **Aprendizaje supervisado** - Clasificación vs Regresión
11. **Otros modelos** - Árboles, SVM, Neural Networks
12. **Métricas evaluación** - MSE, R², Accuracy, Precision, Recall
13. **Metodología práctica** - End-to-end, análisis errores
14. **Ejemplo práctico** - Implementación real automóviles
15. **Conclusiones** - Resumen y próximos pasos

## 🎨 Características Técnicas

- **React 18** con JSX transpilado en tiempo real
- **Tailwind CSS** para diseño moderno
- **Font Awesome** para iconografía
- **Glass-morphism** effects y animaciones
- **Responsive design** - se adapta a móvil/tablet/desktop
- **Navegación completa** - teclado, mouse, touch
- **Modo pantalla completa**
- **Barra de progreso**

## 🎓 Para Estudiantes

### Controles:
- **→** o **Espacio**: Siguiente slide
- **←**: Slide anterior
- **F**: Pantalla completa
- **Clic en círculos**: Ir a slide específico

### Timing sugerido:
- **90-120 minutos** total
- **3-8 minutos** por slide
- **Pausas** cada 30 minutos

### Objetivos:
- Entender diferencia IA vs ML
- Dominar regresión lineal
- Conocer metodología práctica
- Aplicar en casos reales

## 👨‍🏫 Para Instructores

- **`notas-instructor.md`** contiene timing detallado
- Tips de presentación por slide
- Preguntas sugeridas para interactividad
- Manejo de errores comunes
- Adaptaciones según audiencia

## 🔧 Personalización

Para modificar contenido:
1. Editar array `slides` en `index.html`
2. Cada slide tiene estructura clara:
```javascript
{
  id: número,
  type: 'content' | 'cover', 
  title: 'Título del slide',
  content: (JSX content)
}
```

## 📱 Compatibilidad

- ✅ **Chrome, Firefox, Safari, Edge** (últimas versiones)
- ✅ **Desktop, tablet, móvil**
- ✅ **Pantalla completa** para proyectores
- ✅ **Offline** (después de primera carga)

## 🚀 Próximos Pasos Sugeridos

1. **Usar la presentación** tal como está
2. **Personalizar** con logos/colores institucionales
3. **Agregar** ejercicios interactivos
4. **Crear** versión PDF de backup
5. **Desarrollar** quiz al final

## 💡 Tips de Éxito

- **Probar antes** de la clase
- **Tener backup** en PDF
- **Usar pantalla completa** para mejor experiencia
- **Interactuar** con estudiantes entre slides
- **Pausar** en conceptos matemáticos complejos

---

## ✨ ¡Listo para usar!

La presentación está **completa y lista** para ser utilizada en clase. Combina teoría sólida con ejemplos prácticos y un diseño atractivo para estudiantes.

**Ubicación**: `/home/alexv/workspace/UgrMono/ugr/UGRBackend/PresentacionClase2/`

**¡Que tengas una excelente clase! 🎓**
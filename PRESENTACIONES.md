# 📚 Presentaciones de Machine Learning e IA

Este proyecto ahora incluye **dos presentaciones independientes** sobre temas complementarios de Inteligencia Artificial.

## 🧠 Fundamentos de Machine Learning

**Archivo principal:** `index.html` → `App.js`

### 📊 Contenido:
- **Slides:** 24 total
- **Duración:** 2.25-3.25 horas  
- **Nivel:** Principiante a Intermedio

### 📋 Capítulos:
1. **Paradigmas de Aprendizaje** (Slides 0-6)
   - Inspiración cerebral
   - Aprendizaje supervisado vs no supervisado
   - Comparaciones interactivas

2. **Introducción a IA/ML** (Slides 7-16)
   - Conceptos fundamentales
   - Tipos de IA por función y nivel
   - Casos de negocio

3. **Aspectos Técnicos** (Slides 17-23)
   - Regresión lineal simple y múltiple
   - Descenso de gradiente
   - Métricas y overfitting

### 🎯 Slides Interactivos:
- Slide 2: Demo Aprendizaje Supervisado
- Slide 4: Demo Aprendizaje No Supervisado  
- Slide 6: Comparación de Paradigmas
- Slide 14: Regresión Múltiple
- Slide 15: Método de Cuadrados Ordinarios
- Slide 16: Descenso de Gradiente

---

## 🤖 IA Generativa

**Archivo principal:** `index-ia-generativa.html` → `IAGenerativaApp.js`

### 📊 Contenido:
- **Slides:** 8 total
- **Duración:** 1.75-2.5 horas
- **Nivel:** Principiante a Intermedio

### 📋 Capítulos:
1. **Fundamentos de IA Generativa** (Slides 0-3)
   - Qué es y diferencias con IA tradicional
   - Funcionamiento de LLMs
   - Tokens y costos

2. **Modelos de Lenguaje Grandes** (Slides 4-5)
   - Mecanismo de predicción
   - Limitaciones y alucinaciones
   - Demo interactivo

3. **RAG - Retrieval Augmented Generation** (Slides 6-7)
   - Proceso en 3 pasos
   - Comparación con/sin RAG
   - Aplicaciones empresariales

4. **Uso Cotidiano y Aplicaciones** (Slides 8-9)
   - 6 categorías de aplicaciones
   - Herramientas específicas
   - Mejores prácticas

5. **Futuro y Consideraciones Éticas** (Slides 10-11)
   - Casos de éxito reales
   - Tendencias emergentes
   - Responsabilidad y ética

### 🎯 Slides Interactivos:
- Slide 3: Demo Generación de Texto
- Slide 5: Demo RAG Comparativo
- Slide 7: Aplicaciones Interactivas

---

## 🚀 Cómo Usar

### Opción 1: Desarrollo Local
```bash
# Instalar dependencias
npm install

# Fundamentos de ML (presentación original)
npm start
# Abre http://localhost:3000

# IA Generativa (nueva presentación)
# Modificar src/index.js para importar IAGenerativaApp
# Luego npm start
```

### Opción 2: Presentaciones Independientes

1. **Para Fundamentos de ML:**
   - Usar `index.html` actual
   - Navegación por sidebar con 4 secciones

2. **Para IA Generativa:**
   - Usar `index-ia-generativa.html`
   - Navegación por sidebar con 5 secciones específicas

## 📁 Estructura de Archivos

```
src/
├── App.js                          # App principal - Fundamentos ML
├── IAGenerativaApp.js             # App independiente - IA Generativa
├── components/
│   ├── Sidebar.js                 # Sidebar para Fundamentos ML
│   ├── IAGenerativaSidebar.js     # Sidebar para IA Generativa
│   └── ...
├── data/
│   ├── slidesData.js              # Slides Fundamentos ML
│   ├── iaGenerativaSlides.js      # Content IA Generativa
│   ├── iaGenerativaSlidesData.js  # Metadata IA Generativa
│   └── ...
```

## ⚙️ Configuración para Producción

### Opción A: Aplicaciones Separadas
Crear dos builds independientes, cada uno con su propia URL.

### Opción B: Router Dinámico
Usar React Router para navegación entre presentaciones:
- `/` → Fundamentos de ML
- `/ia-generativa` → IA Generativa

### Opción C: Selector de Presentación
Pantalla inicial que permita elegir qué presentación ver.

## 🎯 Público Objetivo

### Fundamentos de ML:
- Estudiantes de ciencias de datos
- Desarrolladores interesados en ML
- Gerentes técnicos
- Cualquier persona nueva en ML

### IA Generativa:
- Profesionales que quieren usar IA en su trabajo
- Estudiantes de tecnología y negocios
- Tomadores de decisiones empresariales
- Curiosos sobre IA Generativa

## 📝 Notas de Implementación

1. **Ambas presentaciones son completamente independientes**
2. **Comparten estilos CSS pero tienen navegación específica**
3. **Cada una tiene su propia metadata y configuración**
4. **Los demos interactivos son únicos para cada tema**
5. **Duraciones recalculadas según contenido real**

## 🔧 Próximos Pasos

1. Configurar routing para acceso a ambas presentaciones
2. Crear página de selección inicial
3. Optimizar builds para producción
4. Agregar analytics por presentación
5. Implementar sharing específico por tema
# Curso AI para Profesionales - Presentaciones Interactivas

## 🎯 Descripción

Suite completa de presentaciones interactivas sobre **Inteligencia Artificial y Machine Learning** construidas en React. El proyecto incluye tres aplicaciones independientes que cubren desde fundamentos hasta aplicaciones avanzadas de IA.

## 🚀 Aplicaciones Disponibles

### 1. 📊 Inteligencia Artificial en los negocios (`/`)
Presentación principal con 18 slides sobre IA aplicada a los negocios:
- Introducción a la IA y tipos de inteligencia
- Regresión lineal y múltiple
- Algoritmos de optimización
- Métricas y evaluación
- Casos de negocio reales

### 2. 🧠 Paradigmas de Aprendizaje (`/paradigmas`)
7 slides interactivos sobre diferentes paradigmas:
- Aprendizaje supervisado con ejemplos prácticos
- Aprendizaje no supervisado y clustering
- Comparación dinámica entre paradigmas
- Casos reales: detección de spam, análisis de Instagram

### 3. 🎨 IA Generativa (`/ia-generativa`)
10 slides sobre tecnologías generativas:
- Fundamentos de IA generativa
- Modelos de lenguaje (GPT)
- Generación de imágenes (DALL-E, Stable Diffusion)
- Aplicaciones prácticas y casos de uso
- Consideraciones éticas

## ✨ Características Principales

### 🎮 Componentes Interactivos
- **Demos de regresión:** Ajuste manual de parámetros
- **Descenso de gradiente:** Visualización del algoritmo
- **Clustering interactivo:** Agrupación de datos en tiempo real
- **Comparación de paradigmas:** Visualización dinámica
- **Métricas en vivo:** Comparación visual de evaluaciones

### 🔗 Sistema de Definiciones
- **50+ definiciones** organizadas por categoría
- **Modal expandible** con contenido detallado
- **Navegación intuitiva** con indicadores visuales

### 🎨 Diseño Moderno
- **Gradientes dinámicos** y glass morphism
- **Animaciones fluidas** con transiciones suaves
- **100% responsive** para todos los dispositivos
- **Navegación completa:** teclado (← → ␣ F), mouse y touch

## 📁 Estructura del Proyecto

```
presentacion2_C/
├── public/
│   └── index.html
├── src/
│   ├── App.js                     # Aplicación principal (ML)
│   ├── IAGenerativaApp.js         # Aplicación IA Generativa
│   ├── index.js                   # Router principal
│   ├── components/
│   │   ├── Sidebar.js             # Navegación principal
│   │   ├── IAGenerativaSidebar.js # Navegación IA Generativa
│   │   ├── Icon.js                # Iconos FontAwesome
│   │   ├── InfoModal.js           # Modales de información
│   │   ├── ClickableInfo.js       # Elementos interactivos
│   │   ├── InteractiveComponents/ # Demos ML
│   │   └── ParadigmasAprendizaje/ # Demos paradigmas
│   ├── data/
│   │   ├── slidesData.js          # Datos slides ML
│   │   ├── paradigmasAprendizajeSlides.js
│   │   ├── iaGenerativaSlides.js
│   │   └── definitions/           # Sistema de definiciones
│   └── styles/
│       └── App.css                # Estilos principales
├── package.json
└── README.md
```

## 🚀 Instalación y Uso

### Requisitos Previos
```bash
node >= 14.0.0
npm >= 6.0.0
```

### Instalación
```bash
# Clonar el repositorio
git clone https://github.com/alex-v08/-Curso-AI-para-Profesionales.git
cd presentacion2_C

# Instalar dependencias
npm install

# Iniciar el servidor de desarrollo
npm start
```

### Scripts Disponibles
```bash
npm start          # Servidor de desarrollo (puerto 3000)
npm run build      # Build para producción
npm test           # Ejecutar tests
```

### Acceder a las Aplicaciones
- **ML Fundamentos:** http://localhost:3000/
- **Paradigmas:** http://localhost:3000/paradigmas
- **IA Generativa:** http://localhost:3000/ia-generativa

## 🎯 Cómo Usar las Presentaciones

### Navegación
- **Teclado:** 
  - `←` `→` para navegar entre slides
  - `␣` (espacio) para siguiente slide
  - `F` para pantalla completa
- **Mouse:** Botones de navegación y barra de progreso
- **Touch:** Swipe para cambiar slides

### Elementos Interactivos
- **Términos clickeables:** Busca el ícono ℹ️ al hacer hover
- **Demos interactivos:** Ajusta controles y observa cambios en tiempo real
- **Definiciones:** Click en términos destacados para explicaciones

## 📖 Contenido de las Presentaciones

### 🔹 IA en los Negocios (18 slides)
1. Introducción a la IA
2. Tipos de IA y aplicaciones
3. Machine Learning en negocios
4. Fundamentos matemáticos
5. Algoritmos y optimización
6. Métricas y evaluación
7. Casos prácticos y código

### 🔹 Paradigmas de Aprendizaje (7 slides)
1. Introducción a paradigmas
2. Aprendizaje supervisado
3. Aprendizaje no supervisado
4. Comparación de paradigmas
5. Casos reales de aplicación

### 🔹 IA Generativa (11 slides)
1. Introducción a IA generativa
2. Modelos de lenguaje (LLMs)
3. RAG (Retrieval Augmented Generation)
4. RAG vs Fine-tuning vs Prompt Engineering
5. Generación de imágenes
6. Aplicaciones prácticas
7. Consideraciones éticas
8. Futuro de la IA generativa

## 🎨 Personalización

### Agregar Nuevos Slides
```javascript
// En data/tusSlides.js
export const nuevosSlides = [
  {
    id: 'nuevo-1',
    title: 'Mi Nuevo Slide',
    content: (
      <div>
        <h2>Contenido del slide</h2>
        <p>Tu contenido aquí</p>
      </div>
    )
  }
];
```

### Crear Componentes Interactivos
```javascript
// En components/InteractiveComponents/MiDemo.js
const MiDemo = () => {
  const [valor, setValor] = useState(0);
  
  return (
    <div className="demo-container">
      <input 
        type="range" 
        value={valor} 
        onChange={(e) => setValor(e.target.value)}
      />
      <div>Valor: {valor}</div>
    </div>
  );
};

export default MiDemo;
```

## 🚀 Deployment

### 🤖 Despliegue Automático (GitHub Actions)
Este proyecto se despliega automáticamente en `http://144.91.119.20` cada vez que se hace push a la rama `main`.

**Configuración:**
- Workflow: `.github/workflows/deploy-server.yml`
- Servidor: Ubuntu 20.04 con Nginx
- Dominio: http://144.91.119.20

**Cómo funciona:**
1. Push a `main` → Activa el workflow
2. Instala dependencias y construye la app
3. Despliega automáticamente en el servidor
4. Configura Nginx con cache optimizado

### Build de Producción
```bash
npm run build
```

### Deploy en Vercel/Netlify
1. Conecta tu repositorio
2. Build command: `npm run build`
3. Publish directory: `build`

## 📊 Métricas del Proyecto

- **📝 35+ slides** en total
- **🎮 15+ componentes** interactivos
- **📚 50+ definiciones** expandidas
- **⏱️ 4-5 horas** de contenido educativo
- **📱 100% responsive** 
- **♿ Accesible** con navegación completa

## 🤝 Contribuir

1. Fork el proyecto
2. Crea tu feature branch (`git checkout -b feature/NuevaCaracteristica`)
3. Commit tus cambios (`git commit -m 'Add: Nueva característica'`)
4. Push a la branch (`git push origin feature/NuevaCaracteristica`)
5. Abre un Pull Request

## 📞 Soporte

Para problemas o sugerencias:
- Crea un issue en el repositorio
- Contacta a través de GitHub

---

**Versión:** 5.0.0  
**Última actualización:** Enero 2025  
**Autor:** alex-v08  
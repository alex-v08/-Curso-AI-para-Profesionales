import React from 'react';

/**
 * Definiciones de casos de negocio y conceptos empresariales
 * Incluye: aplicaciones prácticas, estrategias y metodologías
 */

export const businessDefinitions = {
  // ===== CASOS DE NEGOCIO =====
  
  ecommerce: {
    title: "E-commerce y Recomendaciones",
    content: (
      <div>
        <p><strong>Problema de negocio:</strong> Cómo mejorar la experiencia de compra y aumentar las ventas a través de recomendaciones personalizadas.</p>
        
        <h4>Contexto del problema:</h4>
        <ul>
          <li>• <strong>Sobrecarga de información:</strong> Millones de productos disponibles</li>
          <li>• <strong>Fricción en la búsqueda:</strong> Usuarios no saben qué buscar</li>
          <li>• <strong>Abandono de carrito:</strong> Dificultad para encontrar productos relevantes</li>
          <li>• <strong>Competencia:</strong> Diferenciación a través de personalización</li>
        </ul>
        
        <h4>Objetivos específicos:</h4>
        <ul>
          <li>• <strong>Aumentar engagement:</strong> Más tiempo en el sitio</li>
          <li>• <strong>Facilitar descubrimiento:</strong> Productos relevantes</li>
          <li>• <strong>Incrementar ventas:</strong> Cross-selling y up-selling</li>
          <li>• <strong>Mejorar satisfacción:</strong> Experiencia personalizada</li>
          <li>• <strong>Fidelización:</strong> Usuarios que regresan</li>
        </ul>
        
        <h4>Métricas de éxito:</h4>
        <ul>
          <li>💰 <strong>Revenue:</strong> Ventas atribuidas a recomendaciones</li>
          <li>📊 <strong>CTR:</strong> Click-through rate en recomendaciones</li>
          <li>🔄 <strong>Conversion rate:</strong> % de recomendaciones que resultan en compra</li>
          <li>⏱️ <strong>Time on site:</strong> Tiempo promedio de navegación</li>
          <li>🛒 <strong>Basket size:</strong> Valor promedio de compras</li>
          <li>🔁 <strong>Return rate:</strong> Usuarios que regresan</li>
        </ul>
        
        <h4>Tipos de algoritmos:</h4>
        <ul>
          <li>• <strong>Collaborative Filtering:</strong> "Usuarios como tú también compraron..."</li>
          <li>• <strong>Content-Based:</strong> "Productos similares basados en características"</li>
          <li>• <strong>Hybrid:</strong> Combinación de ambos enfoques</li>
          <li>• <strong>Deep Learning:</strong> Modelos de embeddings y atención</li>
        </ul>
        
        <h4>Implementación técnica:</h4>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded">
            <p className="font-semibold text-blue-800">📊 Datos necesarios</p>
            <p className="text-sm">• Historial de compras</p>
            <p className="text-sm">• Características de productos</p>
            <p className="text-sm">• Datos demográficos</p>
            <p className="text-sm">• Comportamiento de navegación</p>
          </div>
          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-800">⚙️ Infraestructura</p>
            <p className="text-sm">• Sistema de recomendación en tiempo real</p>
            <p className="text-sm">• A/B testing framework</p>
            <p className="text-sm">• Pipeline de datos</p>
            <p className="text-sm">• Monitoreo y alertas</p>
          </div>
        </div>
        
        <h4>Desafíos comunes:</h4>
        <ul>
          <li>• <strong>Cold start:</strong> Nuevos usuarios sin historial</li>
          <li>• <strong>Sparsity:</strong> Pocos datos por usuario/producto</li>
          <li>• <strong>Scalability:</strong> Millones de usuarios y productos</li>
          <li>• <strong>Privacy:</strong> Regulaciones de protección de datos</li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Caso real - Amazon:</strong> Su motor de recomendaciones genera el 35% de sus ingresos totales. En 2019, esto representó aproximadamente $100 mil millones en ventas atribuidas directamente a recomendaciones.</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <p><strong>ROI típico:</strong> Las empresas que implementan sistemas de recomendación ven aumentos del 10-30% en conversiones y 20-50% en engagement promedio.</p>
        </div>
      </div>
    ),
    type: 'business'
  },
  
  bienes_raices: {
    title: "Valuación de Bienes Raíces",
    content: (
      <div>
        <p><strong>Problema de negocio:</strong> Determinar el precio justo de propiedades basándose en sus características y condiciones del mercado local.</p>
        
        <h4>Stakeholders y sus necesidades:</h4>
        <ul>
          <li>🏢 <strong>Inmobiliarias:</strong> Pricing competitivo y tiempos de venta</li>
          <li>💼 <strong>Bancos:</strong> Evaluación de garantías hipotecarias</li>
          <li>👥 <strong>Compradores:</strong> Decisión informada y evitar sobrepagar</li>
          <li>🏤 <strong>Gobierno:</strong> Valuación fiscal precisa para impuestos</li>
          <li>📈 <strong>Inversionistas:</strong> Análisis de rentabilidad</li>
        </ul>
        
        <h4>Variables clave del modelo:</h4>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-blue-50 p-3 rounded">
            <p className="font-semibold text-blue-800">🏠 Características físicas</p>
            <p className="text-sm">• Metros cuadrados construidos</p>
            <p className="text-sm">• Número de habitaciones/baños</p>
            <p className="text-sm">• Tipo de construcción</p>
            <p className="text-sm">• Estado de conservación</p>
            <p className="text-sm">• Amenidades (piscina, jardín)</p>
          </div>
          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-800">🗺️ Factores de ubicación</p>
            <p className="text-sm">• Barrio/zona</p>
            <p className="text-sm">• Proximidad a transporte público</p>
            <p className="text-sm">• Cercanía a colegios</p>
            <p className="text-sm">• Seguridad del área</p>
            <p className="text-sm">• Centros comerciales cercanos</p>
          </div>
        </div>
        
        <h4>Datos de mercado:</h4>
        <ul>
          <li>📊 <strong>Comparables:</strong> Precios de propiedades similares vendidas recientemente</li>
          <li>📈 <strong>Tendencias:</strong> Evolución de precios en la zona</li>
          <li>🏘️ <strong>Inventario:</strong> Oferta disponible en el mercado</li>
          <li>⏱️ <strong>Tiempo en mercado:</strong> Velocidad de ventas</li>
        </ul>
        
        <h4>Beneficios del ML vs métodos tradicionales:</h4>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-800">✅ Ventajas ML</p>
            <p className="text-sm">• Objetividad: Reduce sesgos humanos</p>
            <p className="text-sm">• Velocidad: Valuaciones instantáneas</p>
            <p className="text-sm">• Consistencia: Criterios uniformes</p>
            <p className="text-sm">• Escalabilidad: Miles de propiedades</p>
            <p className="text-sm">• Actualización: Se adapta al mercado</p>
          </div>
          <div className="bg-red-50 p-3 rounded">
            <p className="font-semibold text-red-800">❌ Limitaciones</p>
            <p className="text-sm">• Factores cualitativos difíciles</p>
            <p className="text-sm">• Eventos únicos no capturados</p>
            <p className="text-sm">• Necesidad de datos históricos</p>
            <p className="text-sm">• Regulaciones específicas</p>
          </div>
        </div>
        
        <h4>Métricas de evaluación específicas:</h4>
        <ul>
          <li>📏 <strong>MAPE:</strong> Error porcentual absoluto medio (típico: 5-15%)</li>
          <li>🎯 <strong>Accuracy within range:</strong> % predicciones dentro del ±10%</li>
          <li>📊 <strong>R²:</strong> Varianza explicada (objetivo: >0.8)</li>
          <li>💰 <strong>Bias:</strong> Tendencia a sobre/subestimar precios</li>
        </ul>
        
        <h4>Implementación práctica:</h4>
        <ol>
          <li>1. <strong>Recopilación de datos:</strong> MLS, registros públicos, APIs</li>
          <li>2. <strong>Limpieza y preparación:</strong> Outliers, valores faltantes</li>
          <li>3. <strong>Feature engineering:</strong> Variables derivadas (precio/m²)</li>
          <li>4. <strong>Modelado:</strong> Regresión, random forest, XGBoost</li>
          <li>5. <strong>Validación:</strong> Por zona geográfica y tiempo</li>
          <li>6. <strong>Monitoreo:</strong> Performance continua</li>
        </ol>
        
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <p><strong>Caso real - Zillow:</strong> Su algoritmo "Zestimate" procesó más de $1 billón en transacciones y actualmente valúa más de 100 millones de propiedades en Estados Unidos con un error medio del 6.9%.</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
          <p><strong>Lección aprendida:</strong> Zillow Offers (compra directa basada en algoritmos) se cerró en 2021 después de pérdidas millonarias, demostrando que predecir precios ≠ predecir demanda real del mercado.</p>
        </div>
      </div>
    ),
    type: 'business'
  },
  
  // ===== CONCEPTOS ESTRATÉGICOS =====
  
  market_pull: {
    title: "Market Pull vs Technology Push",
    content: (
      <div>
        <p><strong>Concepto clave:</strong> La diferencia fundamental entre resolver problemas reales del mercado versus implementar tecnología porque es novedosa o está de moda.</p>
        
        <h4>Market Pull (✅ Enfoque correcto):</h4>
        <div className="bg-green-50 p-4 rounded mt-3">
          <ul>
            <li>• <strong>Inicia con:</strong> "Tenemos un problema real que resolver"</li>
            <li>• <strong>Pregunta clave:</strong> "¿Qué necesita realmente el mercado?"</li>
            <li>• <strong>Metodología:</strong> Problema → Solución → Tecnología</li>
            <li>• <strong>Resultado:</strong> Alto valor para el usuario final</li>
            <li>• <strong>Métricas:</strong> Adopción, satisfacción, ROI</li>
          </ul>
        </div>
        
        <h4>Technology Push (⚠️ Enfoque riesgoso):</h4>
        <div className="bg-red-50 p-4 rounded mt-3">
          <ul>
            <li>• <strong>Inicia con:</strong> "Tenemos esta tecnología genial"</li>
            <li>• <strong>Pregunta típica:</strong> "¿Dónde podemos aplicar esto?"</li>
            <li>• <strong>Metodología:</strong> Tecnología → Buscar aplicación → Forzar problema</li>
            <li>• <strong>Resultado:</strong> Riesgo de crear solución sin problema real</li>
            <li>• <strong>Síntomas:</strong> Baja adopción, usuarios confundidos</li>
          </ul>
        </div>
        
        <h4>Ejemplos contrastantes:</h4>
        <table className="w-full border border-gray-300 mt-4">
          <thead>
            <tr className="bg-gray-100">
              <th className="border p-2">Market Pull (Exitosos)</th>
              <th className="border p-2">Technology Push (Problemáticos)</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">
                <strong>Uber:</strong> Necesidad real de transporte confiable y conveniente
              </td>
              <td className="border p-2">
                <strong>Google Glass:</strong> Tecnología AR buscando casos de uso
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                <strong>Netflix:</strong> Entretenimiento on-demand sin horarios fijos
              </td>
              <td className="border p-2">
                <strong>Segway:</strong> Tecnología de transporte sin mercado claro
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                <strong>Zoom (COVID):</strong> Comunicación remota masiva urgente
              </td>
              <td className="border p-2">
                <strong>Blockchain everywhere:</strong> Tecnología buscando problemas
              </td>
            </tr>
            <tr>
              <td className="border p-2">
                <strong>Tesla:</strong> Automóviles sustentables y eficientes
              </td>
              <td className="border p-2">
                <strong>NFTs (muchos casos):</strong> Tecnología buscando valor
              </td>
            </tr>
          </tbody>
        </table>
        
        <h4>Cómo aplicar Market Pull en ML:</h4>
        <ol>
          <li>1. <strong>Identificar dolor real:</strong> ¿Qué proceso manual es lento/costoso/propenso a errores?</li>
          <li>2. <strong>Cuantificar el problema:</strong> ¿Cuánto cuesta este problema actualmente?</li>
          <li>3. <strong>Validar con usuarios:</strong> ¿Pagarían por una solución?</li>
          <li>4. <strong>Definir éxito:</strong> ¿Cómo medimos que resolvemos el problema?</li>
          <li>5. <strong>Elegir tecnología:</strong> ¿Qué herramientas necesitamos? (no al revés)</li>
        </ol>
        
        <h4>Señales de warning (Technology Push):</h4>
        <ul>
          <li>🚩 <strong>"Usemos deep learning porque está de moda"</strong></li>
          <li>🚩 <strong>"Necesitamos IA en nuestro producto"</strong></li>
          <li>🚩 <strong>"Vi este paper genial, implementémoslo"</strong></li>
          <li>🚩 <strong>"La competencia usa ML, nosotros también"</strong></li>
          <li>🚩 <strong>"Tengo estos datos, ¿qué podemos predecir?"</strong></li>
        </ul>
        
        <h4>Preguntas de validación:</h4>
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Antes de cualquier proyecto de ML:</strong></p>
          <ul>
            <li>• ¿Qué problema específico estamos resolviendo?</li>
            <li>• ¿Quién tiene este problema y qué tan doloroso es?</li>
            <li>• ¿Cómo se resuelve actualmente y por qué es insuficiente?</li>
            <li>• ¿Qué valor agregado traerá la solución?</li>
            <li>• ¿Cómo mediremos el éxito?</li>
          </ul>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
          <p><strong>Regla de oro:</strong> Si no puedes explicar claramente qué problema resuelves y por qué es importante, probablemente estás haciendo Technology Push. Detente y replantea el proyecto.</p>
        </div>
      </div>
    ),
    type: 'business'
  },
  
  pareto_principle: {
    title: "Principio de Pareto en ML",
    content: (
      <div>
        <p><strong>Definición:</strong> También conocido como la regla 80/20, sugiere que el 80% de los resultados provienen del 20% de las causas o esfuerzos.</p>
        
        <h4>Aplicación en Machine Learning:</h4>
        <ul>
          <li>📊 <strong>80% del performance</strong> se logra con <strong>20% del trabajo</strong></li>
          <li>🐛 <strong>80% de los errores</strong> provienen de <strong>20% de los datos</strong></li>
          <li>⚡ <strong>80% del valor</strong> se captura con <strong>20% de las features</strong></li>
          <li>🕐 <strong>80% del tiempo</strong> se gasta en <strong>20% de las tareas</strong> (limpieza de datos)</li>
        </ul>
        
        <h4>Filosofía: "Lo perfecto es enemigo de lo bueno"</h4>
        <div className="bg-yellow-50 p-4 rounded mt-3">
          <p>En lugar de perseguir el modelo perfecto (100%), enfócate en obtener un modelo que funcione bien (80%) rápidamente, luego itera.</p>
        </div>
        
        <h4>Estrategia práctica - Enfoque incremental:</h4>
        <ol>
          <li>1. <strong>MVP (80%):</strong> Modelo básico que funciona</li>
          <li>2. <strong>Identificar bottlenecks:</strong> ¿Dónde están los mayores errores?</li>
          <li>3. <strong>Iteración dirigida:</strong> Atacar solo los problemas más importantes</li>
          <li>4. <strong>Evaluación de ROI:</strong> ¿Vale la pena el esfuerzo adicional?</li>
        </ol>
        
        <h4>Ejemplos prácticos en proyectos:</h4>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="bg-green-50 p-3 rounded">
            <p className="font-semibold text-green-800">✅ Enfoque 80/20</p>
            <p className="text-sm">• Regresión lineal simple primero</p>
            <p className="text-sm">• Usar solo features obvias</p>
            <p className="text-sm">• Validación básica</p>
            <p className="text-sm">• Deploy rápido</p>
            <p className="text-sm">• Iterar basado en feedback</p>
          </div>
          <div className="bg-red-50 p-3 rounded">
            <p className="font-semibold text-red-800">❌ Perfeccionismo</p>
            <p className="text-sm">• Probar 20 algoritmos diferentes</p>
            <p className="text-sm">• Feature engineering extensivo</p>
            <p className="text-sm">• Hyperparameter tuning exhaustivo</p>
            <p className="text-sm">• Validación super compleja</p>
            <p className="text-sm">• Nunca llegar a producción</p>
          </div>
        </div>
        
        <h4>Cuándo aplicar el 20% restante:</h4>
        <ul>
          <li>• <strong>Alta criticidad:</strong> Sistemas de salud, seguridad</li>
          <li>• <strong>Ventaja competitiva:</strong> Ese 1% extra marca la diferencia</li>
          <li>• <strong>Recursos abundantes:</strong> Equipo grande, tiempo disponible</li>
          <li>• <strong>Mercado maduro:</strong> Competencia en mejoras marginales</li>
        </ul>
        
        <h4>Señales de que estás en el 20% costoso:</h4>
        <ul>
          <li>🐌 <strong>Rendimientos decrecientes:</strong> Mucho esfuerzo, poca mejora</li>
          <li>🔄 <strong>Experimentación infinita:</strong> Probar infinitas configuraciones</li>
          <li>📈 <strong>Overfitting:</strong> Excelente en training, malo en producción</li>
          <li>⏰ <strong>Deadlines perdidos:</strong> El proyecto nunca termina</li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Caso real:</strong> Google inicialmente usó PageRank simple para búsquedas web. Este algoritmo básico capturó el 80% del valor. Los siguientes 20 años de mejoras han sido iteraciones incrementales del 20% restante.</p>
        </div>
        
        <div className="bg-green-50 p-4 rounded-lg mt-4">
          <p><strong>Tip práctico:</strong> Establece timeboxes. Por ejemplo: "2 semanas para MVP funcional, luego evaluar si vale la pena continuar optimizando".</p>
        </div>
      </div>
    ),
    type: 'business'
  },
  
  data_teams: {
    title: "Equipos de Data Products",
    content: (
      <div>
        <p><strong>Realidad:</strong> Los productos de ML exitosos no son creados por una sola persona, sino por equipos multidisciplinarios con roles especializados.</p>
        
        <h4>Roles principales y responsabilidades:</h4>
        
        <div className="space-y-4 mt-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h5 className="font-semibold text-blue-800 flex items-center">
              <span className="w-3 h-3 bg-blue-500 rounded-full mr-2"></span>
              Data Engineer
            </h5>
            <p className="text-sm mt-2"><strong>Función:</strong> Pipeline de datos, infraestructura</p>
            <p className="text-sm"><strong>Responsabilidades:</strong></p>
            <ul className="text-sm ml-4">
              <li>• ETL/ELT processes</li>
              <li>• Data warehousing y lake architecture</li>
              <li>• Calidad y consistencia de datos</li>
              <li>• APIs de datos y streaming</li>
            </ul>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg">
            <h5 className="font-semibold text-green-800 flex items-center">
              <span className="w-3 h-3 bg-green-500 rounded-full mr-2"></span>
              Data Scientist
            </h5>
            <p className="text-sm mt-2"><strong>Función:</strong> Investigación, experimentación, análisis</p>
            <p className="text-sm"><strong>Responsabilidades:</strong></p>
            <ul className="text-sm ml-4">
              <li>• Análisis exploratorio de datos</li>
              <li>• Feature engineering y selección</li>
              <li>• Desarrollo y evaluación de modelos</li>
              <li>• Investigación de nuevos enfoques</li>
            </ul>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg">
            <h5 className="font-semibold text-purple-800 flex items-center">
              <span className="w-3 h-3 bg-purple-500 rounded-full mr-2"></span>
              ML Engineer
            </h5>
            <p className="text-sm mt-2"><strong>Función:</strong> Productización, MLOps, escalabilidad</p>
            <p className="text-sm"><strong>Responsabilidades:</strong></p>
            <ul className="text-sm ml-4">
              <li>• Deploy de modelos en producción</li>
              <li>• Monitoring y mantenimiento</li>
              <li>• CI/CD para ML</li>
              <li>• Optimización de performance</li>
            </ul>
          </div>
          
          <div className="bg-orange-50 p-4 rounded-lg">
            <h5 className="font-semibold text-orange-800 flex items-center">
              <span className="w-3 h-3 bg-orange-500 rounded-full mr-2"></span>
              Software Engineer (Backend/Frontend)
            </h5>
            <p className="text-sm mt-2"><strong>Función:</strong> Aplicación, interfaces, integración</p>
            <p className="text-sm"><strong>Responsabilidades:</strong></p>
            <ul className="text-sm ml-4">
              <li>• APIs y microservicios</li>
              <li>• Interfaces de usuario</li>
              <li>• Integración con sistemas existentes</li>
              <li>• Arquitectura de aplicaciones</li>
            </ul>
          </div>
          
          <div className="bg-pink-50 p-4 rounded-lg">
            <h5 className="font-semibold text-pink-800 flex items-center">
              <span className="w-3 h-3 bg-pink-500 rounded-full mr-2"></span>
              UX/UI Designer
            </h5>
            <p className="text-sm mt-2"><strong>Función:</strong> Experiencia de usuario, adoptabilidad</p>
            <p className="text-sm"><strong>Responsabilidades:</strong></p>
            <ul className="text-sm ml-4">
              <li>• Research de usuarios</li>
              <li>• Diseño de interfaces intuitivas</li>
              <li>• Explicabilidad de modelos ML</li>
              <li>• Testing de usabilidad</li>
            </ul>
          </div>
          
          <div className="bg-yellow-50 p-4 rounded-lg">
            <h5 className="font-semibold text-yellow-800 flex items-center">
              <span className="w-3 h-3 bg-yellow-500 rounded-full mr-2"></span>
              Product Owner/Manager
            </h5>
            <p className="text-sm mt-2"><strong>Función:</strong> Visión, priorización, valor de negocio</p>
            <p className="text-sm"><strong>Responsabilidades:</strong></p>
            <ul className="text-sm ml-4">
              <li>• Definir requisitos y casos de uso</li>
              <li>• Priorizar features y roadmap</li>
              <li>• Comunicación con stakeholders</li>
              <li>• Métricas de éxito y KPIs</li>
            </ul>
          </div>
        </div>
        
        <h4>Estructura de equipo según tamaño:</h4>
        <div className="grid grid-cols-3 gap-4 mt-4">
          <div className="bg-gray-50 p-3 rounded">
            <h6 className="font-semibold">Startup (2-3 personas)</h6>
            <p className="text-sm">• Fullstack ML Engineer</p>
            <p className="text-sm">• Product Owner/Manager</p>
            <p className="text-sm">• (Opcional) Data Scientist</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <h6 className="font-semibold">Mediana (5-8 personas)</h6>
            <p className="text-sm">• Data Engineer</p>
            <p className="text-sm">• Data Scientist</p>
            <p className="text-sm">• ML Engineer</p>
            <p className="text-sm">• Backend Engineer</p>
            <p className="text-sm">• Product Manager</p>
          </div>
          <div className="bg-gray-50 p-3 rounded">
            <h6 className="font-semibold">Enterprise (10+ personas)</h6>
            <p className="text-sm">• Todos los roles anteriores</p>
            <p className="text-sm">• Frontend Engineer</p>
            <p className="text-sm">• UX/UI Designer</p>
            <p className="text-sm">• DevOps Engineer</p>
            <p className="text-sm">• QA Engineer</p>
          </div>
        </div>
        
        <h4>Colaboración entre roles:</h4>
        <ul>
          <li>🔄 <strong>Data Scientist ↔ ML Engineer:</strong> Handoff de modelos, feedback de producción</li>
          <li>🔄 <strong>Data Engineer ↔ Data Scientist:</strong> Calidad de datos, features disponibles</li>
          <li>🔄 <strong>Product Manager ↔ UX Designer:</strong> Requisitos funcionales y experiencia</li>
          <li>🔄 <strong>ML Engineer ↔ Backend:</strong> APIs, latencia, escalabilidad</li>
        </ul>
        
        <div className="bg-blue-50 p-4 rounded-lg mt-4">
          <p><strong>Consejo:</strong> En equipos pequeños, es común que las personas tengan múltiples roles (ej: Data Scientist que también hace ML Engineering). Lo importante es cubrir todas las responsabilidades.</p>
        </div>
        
        <div className="bg-yellow-50 p-4 rounded-lg mt-4">
          <p><strong>Reality check:</strong> Los modelos más brillantes fallan si no hay quien los ponga en producción o si nadie los puede usar. El éxito requiere todo el equipo trabajando en conjunto.</p>
        </div>
      </div>
    ),
    type: 'business'
  }
};

export default businessDefinitions;

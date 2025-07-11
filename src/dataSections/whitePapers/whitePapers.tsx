import {
  FileText,
  Download,
  TrendingUp,
  Shield,
  Zap,
  Cloud,
  Cpu,
  BarChart3,
  Star,
  Award,
} from "lucide-react"
export const whitepapers = [
  {
    id: 1,
    title: "Arquitectura de Microservicios: Guía Completa 2024",
    description:
      "Estrategias avanzadas para migrar de monolitos a microservicios sin interrumpir operaciones críticas.",
    category: "ARQUITECTURA",
    pages: 45,
    readTime: "25 min",
    downloads: 2847,
    rating: 4.9,
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    topics: ["Descomposición gradual", "Domain-Driven Design", "Patrones de comunicación", "Monitoreo distribuido"],
    level: "Avanzado",
    publishDate: "Enero 2024",
  },
  {
    id: 2,
    title: "CI/CD en Entornos Empresariales: Mejores Prácticas",
    description: "Implementación de pipelines robustos para equipos de desarrollo ágil y despliegues seguros.",
    category: "DEVOPS",
    pages: 38,
    readTime: "20 min",
    downloads: 3156,
    rating: 4.8,
    icon: <Zap className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    topics: ["Automatización completa", "Testing estratégico", "Seguridad integrada", "Monitoreo continuo"],
    level: "Intermedio",
    publishDate: "Diciembre 2023",
  },
  {
    id: 3,
    title: "Cloud Híbrida: Estrategia de Transformación Digital",
    description: "Maximiza flexibilidad y control combinando infraestructura privada y pública de manera inteligente.",
    category: "CLOUD",
    pages: 52,
    readTime: "30 min",
    downloads: 1923,
    rating: 4.7,
    icon: <Cloud className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
    topics: ["Arquitectura híbrida", "Migración segura", "Optimización de costos", "Governance multi-cloud"],
    level: "Avanzado",
    publishDate: "Noviembre 2023",
  },
  {
    id: 4,
    title: "Análisis de Datos: De Insights a Decisiones Estratégicas",
    description:
      "Transforma datos crudos en ventajas competitivas mediante análisis avanzado y visualización inteligente.",
    category: "DATA SCIENCE",
    pages: 41,
    readTime: "22 min",
    downloads: 2634,
    rating: 4.9,
    icon: <BarChart3 className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500",
    topics: ["Pipeline de datos", "Machine Learning aplicado", "Visualización efectiva", "ROI medible"],
    level: "Intermedio",
    publishDate: "Octubre 2023",
  },
  {
    id: 5,
    title: "Seguridad en Aplicaciones SaaS: Framework Integral",
    description: "Protege tu plataforma SaaS con estrategias de seguridad multicapa y compliance automatizado.",
    category: "SEGURIDAD",
    pages: 48,
    readTime: "28 min",
    downloads: 1756,
    rating: 4.8,
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-red-500 to-pink-500",
    topics: ["Zero Trust Architecture", "Compliance automatizado", "Threat detection", "Incident response"],
    level: "Avanzado",
    publishDate: "Septiembre 2023",
  },
  {
    id: 6,
    title: "Optimización de Performance: SaaS de Alto Rendimiento",
    description: "Técnicas avanzadas para acelerar aplicaciones SaaS y mejorar experiencia de usuario.",
    category: "PERFORMANCE",
    pages: 35,
    readTime: "18 min",
    downloads: 2198,
    rating: 4.7,
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500",
    topics: ["Optimización de queries", "Caching estratégico", "CDN inteligente", "Monitoring avanzado"],
    level: "Intermedio",
    publishDate: "Agosto 2023",
  },
]

export const stats = [
  { label: "Whitepapers", value: "24", icon: <FileText className="w-6 h-6" /> },
  { label: "Descargas Totales", value: "15.2K", icon: <Download className="w-6 h-6" /> },
  { label: "Rating Promedio", value: "4.8", icon: <Star className="w-6 h-6" /> },
  { label: "Empresas Beneficiadas", value: "340+", icon: <Award className="w-6 h-6" /> },
]

// Función para generar PDF dummy
export const generateDummyPDF = (whitepaper: any) => {
  // Crear contenido HTML para el PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>${whitepaper.title}</title>
      <style>
        body { font-family: Arial, sans-serif; margin: 40px; line-height: 1.6; }
        .header { text-align: center; border-bottom: 2px solid #d4af37; padding-bottom: 20px; margin-bottom: 30px; }
        .title { color: #d4af37; font-size: 24px; font-weight: bold; margin-bottom: 10px; }
        .category { background: #d4af37; color: white; padding: 5px 15px; border-radius: 20px; font-size: 12px; }
        .content { margin: 30px 0; }
        .section { margin: 25px 0; }
        .section h2 { color: #333; border-left: 4px solid #d4af37; padding-left: 15px; }
        .topics { display: flex; flex-wrap: wrap; gap: 10px; margin: 15px 0; }
        .topic { background: #f5f5f5; padding: 8px 12px; border-radius: 15px; font-size: 14px; }
        .footer { text-align: center; margin-top: 50px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; }
      </style>
    </head>
    <body>
      <div class="header">
        <div class="title">${whitepaper.title}</div>
        <div class="category">${whitepaper.category}</div>
        <p style="margin: 15px 0; color: #666;">${whitepaper.description}</p>
        <div style="display: flex; justify-content: center; gap: 30px; margin-top: 20px; font-size: 14px; color: #888;">
          <span>📄 ${whitepaper.pages} páginas</span>
          <span>⏱️ ${whitepaper.readTime} lectura</span>
          <span>📅 ${whitepaper.publishDate}</span>
          <span>⭐ ${whitepaper.rating}/5</span>
        </div>
      </div>
      
      <div class="content">
        <div class="section">
          <h2>Resumen Ejecutivo</h2>
          <p>Este whitepaper presenta una guía completa sobre ${whitepaper.title.toLowerCase()}, diseñada para profesionales y líderes técnicos que buscan implementar soluciones de vanguardia en sus organizaciones.</p>
          <p>A través de casos de estudio reales, mejores prácticas y estrategias probadas, este documento proporciona el conocimiento necesario para tomar decisiones informadas y ejecutar transformaciones exitosas.</p>
        </div>

        <div class="section">
          <h2>Temas Principales</h2>
          <div class="topics">
            ${whitepaper.topics.map((topic: string) => `<div class="topic">${topic}</div>`).join("")}
          </div>
        </div>

        <div class="section">
          <h2>¿Qué Aprenderás?</h2>
          <ul>
            <li>Estrategias probadas para implementación exitosa</li>
            <li>Casos de estudio de empresas líderes en la industria</li>
            <li>Mejores prácticas y patrones recomendados</li>
            <li>Métricas clave para medir el éxito</li>
            <li>Roadmap detallado para la implementación</li>
            <li>Herramientas y tecnologías recomendadas</li>
          </ul>
        </div>

        <div class="section">
          <h2>Audiencia Objetivo</h2>
          <p>Este whitepaper está dirigido a:</p>
          <ul>
            <li>CTOs y líderes técnicos</li>
            <li>Arquitectos de software y sistemas</li>
            <li>Gerentes de proyecto y producto</li>
            <li>Desarrolladores senior y tech leads</li>
            <li>Consultores en transformación digital</li>
          </ul>
        </div>

        <div class="section">
          <h2>Metodología</h2>
          <p>La información presentada en este documento se basa en:</p>
          <ul>
            <li>Análisis de más de 100 implementaciones exitosas</li>
            <li>Entrevistas con líderes técnicos de la industria</li>
            <li>Investigación de tendencias y tecnologías emergentes</li>
            <li>Experiencia práctica en proyectos reales</li>
          </ul>
        </div>

        <div class="section">
          <h2>Conclusiones Clave</h2>
          <p>Las organizaciones que implementan estas estrategias experimentan:</p>
          <ul>
            <li>Reducción del 40-60% en tiempo de desarrollo</li>
            <li>Mejora del 80-120% en escalabilidad</li>
            <li>Incremento del 25-45% en satisfacción del equipo</li>
            <li>Disminución del 30-50% en costos operativos</li>
          </ul>
        </div>
      </div>

      <div class="footer">
        <p><strong>FINOVA</strong> - Tecnología de Elite para Empresas Visionarias</p>
        <p>Este documento es propiedad intelectual de FINOVA. Todos los derechos reservados.</p>
        <p>Para más información, visita nuestro sitio web o contacta a nuestro equipo de expertos.</p>
      </div>
    </body>
    </html>
  `

  // Crear blob y descargar
  const blob = new Blob([htmlContent], { type: "text/html" })
  const url = URL.createObjectURL(blob)
  const a = document.createElement("a")
  a.href = url
  a.download = `${whitepaper.title.replace(/[^a-zA-Z0-9]/g, "_")}.html`
  document.body.appendChild(a)
  a.click()
  document.body.removeChild(a)
  URL.revokeObjectURL(url)
}

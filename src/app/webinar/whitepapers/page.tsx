"use client"


import { useState, useRef } from "react"
import {
  FileText,
  Download,
  Eye,
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Shield,
  Zap,
  Cloud,
  Cpu,
  BarChart3,
  CheckCircle,
  ArrowRight,
  Star,
  Award,
  BookOpen,
  Target,
} from "lucide-react"
import ParticleBackground from "@/components/microComponents/ParticleBackground"

const whitepapers = [
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

const stats = [
  { label: "Whitepapers", value: "24", icon: <FileText className="w-6 h-6" /> },
  { label: "Descargas Totales", value: "15.2K", icon: <Download className="w-6 h-6" /> },
  { label: "Rating Promedio", value: "4.8", icon: <Star className="w-6 h-6" /> },
  { label: "Empresas Beneficiadas", value: "340+", icon: <Award className="w-6 h-6" /> },
]

// Función para generar PDF dummy
const generateDummyPDF = (whitepaper: any) => {
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

export default function WhitepapersPage() {
  const [selectedCategory, setSelectedCategory] = useState("TODOS")
  const [downloadingId, setDownloadingId] = useState<number | null>(null)

  // Referencias para el navbar
  const bottomNavRef = useRef<HTMLDivElement>(null)
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const bottomMenuRefs = {
    products: useRef<HTMLDivElement>(null),
    solutions: useRef<HTMLDivElement>(null),
    resources: useRef<HTMLDivElement>(null),
  }
  const menuTransition = "all 0.3s ease-in-out"
  const animationDuration = 300
  const closeTimerRef = useRef<NodeJS.Timeout | null>(null)
  const isMobile = false

  const categories = ["TODOS", "ARQUITECTURA", "DEVOPS", "CLOUD", "DATA SCIENCE", "SEGURIDAD", "PERFORMANCE"]

  const filteredWhitepapers =
    selectedCategory === "TODOS" ? whitepapers : whitepapers.filter((wp) => wp.category === selectedCategory)

  const handleDownload = async (whitepaper: any) => {
    setDownloadingId(whitepaper.id)

    // Simular tiempo de preparación del archivo
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Generar y descargar el PDF dummy
    generateDummyPDF(whitepaper)

    setDownloadingId(null)
  }

  return (
    <>
      <ParticleBackground />

      <div className="relative z-10 min-h-screen text-white font-sans overflow-hidden">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative">
          {/* Efecto de luz pulsante */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse w-96 h-96 rounded-full bg-gradient-to-r from-[#d4af37]/30 to-purple-500/20 blur-[100px] opacity-40"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-8">
              <BookOpen className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">CONOCIMIENTO EXPERTO</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="text-white">Whitepapers </span>
              <span className="bg-gradient-to-r from-[#d4af37] via-yellow-400 to-[#d4af37] bg-clip-text text-transparent">
                Técnicos
              </span>
              <br />
              <span className="text-white">de Elite</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed mb-12">
              <span className="text-[#d4af37]">Documentos técnicos profundos</span> con estrategias probadas, casos de
              estudio reales y mejores prácticas para transformar tu organización.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/50 to-purple-900/50 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/40 transition-all duration-500 hover:transform hover:scale-105"
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="text-[#d4af37] group-hover:scale-110 transition-transform duration-300">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              ))}
            </div>

            
          </div>
            {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
        </section>

        {/* What are Whitepapers Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">¿Qué son los </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-yellow-400 bg-clip-text text-transparent">
                  Whitepapers?
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Los whitepapers son documentos técnicos autoritativos que presentan información detallada, análisis
                profundo y soluciones específicas sobre temas complejos de tecnología empresarial.
              </p>
            </div>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Target className="w-8 h-8" />,
                  title: "Conocimiento Especializado",
                  description:
                    "Información técnica profunda basada en experiencia real y casos de estudio documentados.",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: <CheckCircle className="w-8 h-8" />,
                  title: "Estrategias Probadas",
                  description:
                    "Metodologías y mejores prácticas validadas en implementaciones exitosas de empresas líderes.",
                  gradient: "from-green-500 to-teal-500",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  title: "Ventaja Competitiva",
                  description:
                    "Insights exclusivos que te permiten tomar decisiones informadas y adelantarte a la competencia.",
                  gradient: "from-purple-500 to-pink-500",
                },
              ].map((benefit, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-slate-900/60 to-purple-900/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${benefit.gradient} mb-6`}>
                      <div className="text-white">{benefit.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed">{benefit.description}</p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-bl-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Category Filter */}
        <section className="py-12 px-6 relative">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category
                      ? "bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black shadow-lg shadow-[#d4af37]/25"
                      : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 border border-[#d4af37]/20 hover:border-[#d4af37]/40"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Whitepapers Grid */}
        <section className="py-12 px-6 relative">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredWhitepapers.map((whitepaper) => (
                <div
                  key={whitepaper.id}
                  className="group relative bg-gradient-to-br from-slate-900/60 to-purple-900/40 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/40 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-bold rounded-full">
                    {whitepaper.category}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${whitepaper.gradient} mb-6 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <div className="text-white">{whitepaper.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300 line-clamp-2">
                      {whitepaper.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6 line-clamp-3">{whitepaper.description}</p>

                    {/* Meta info */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <div className="flex items-center space-x-4">
                        <span className="flex items-center">
                          <FileText className="w-4 h-4 mr-1" />
                          {whitepaper.pages}p
                        </span>
                        <span className="flex items-center">
                          <Clock className="w-4 h-4 mr-1" />
                          {whitepaper.readTime}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Star className="w-4 h-4 text-[#d4af37] mr-1" />
                        {whitepaper.rating}
                      </div>
                    </div>

                    {/* Topics */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {whitepaper.topics.slice(0, 2).map((topic, index) => (
                        <span key={index} className="px-2 py-1 bg-[#d4af37]/10 text-[#d4af37] text-xs rounded-full">
                          {topic}
                        </span>
                      ))}
                      {whitepaper.topics.length > 2 && (
                        <span className="px-2 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full">
                          +{whitepaper.topics.length - 2} más
                        </span>
                      )}
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between text-sm text-gray-400 mb-6">
                      <span className="flex items-center">
                        <Download className="w-4 h-4 mr-1" />
                        {whitepaper.downloads.toLocaleString()} descargas
                      </span>
                      <span className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        {whitepaper.publishDate}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex gap-3">
                      <button
                        onClick={() => handleDownload(whitepaper)}
                        disabled={downloadingId === whitepaper.id}
                        className="flex-1 group/btn relative px-4 py-3 bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black font-bold rounded-lg hover:shadow-lg hover:shadow-[#d4af37]/25 transition-all duration-300 transform hover:scale-105 overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10 flex items-center justify-center">
                          {downloadingId === whitepaper.id ? (
                            <>
                              <div className="animate-spin rounded-full h-4 w-4 border-2 border-black border-t-transparent mr-2"></div>
                              Preparando...
                            </>
                          ) : (
                            <>
                              <Download className="w-4 h-4 mr-2 group-hover/btn:translate-y-[-1px] transition-transform duration-300" />
                              Descargar
                            </>
                          )}
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#d4af37] opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>
                      </button>

                      <button className="px-4 py-3 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                        <Eye className="w-4 h-4" />
                      </button>
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute bottom-0 right-0 w-16 h-16 bg-gradient-to-tl from-[#d4af37]/10 to-transparent rounded-tl-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-4xl mx-auto text-center relative">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#d4af37]/10 to-transparent blur-xl"></div>

            <div className="relative z-10 bg-gradient-to-r from-slate-900/80 to-purple-900/60 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-6">
                <Target className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">CONOCIMIENTO EXCLUSIVO</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">¿Necesitas un whitepaper </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-yellow-400 bg-clip-text text-transparent">
                  personalizado?
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Creamos documentos técnicos específicos para tu industria y desafíos únicos.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-yellow-500 text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Solicitar whitepaper personalizado
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                  Consultoría técnica
                  <Users className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

     
    </>
  )
}

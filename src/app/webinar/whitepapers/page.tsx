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
import { whitepapers, generateDummyPDF, stats } from "@/dataSections"


export default function WhitepapersPage() {
  const [selectedCategory, setSelectedCategory] = useState("TODOS")
  const [downloadingId, setDownloadingId] = useState<number | null>(null)

  // // Referencias para el navbar
  // const bottomNavRef = useRef<HTMLDivElement>(null)
  // const [activeMenu, setActiveMenu] = useState<string | null>(null)
  // const bottomMenuRefs = {
  //   products: useRef<HTMLDivElement>(null),
  //   solutions: useRef<HTMLDivElement>(null),
  //   resources: useRef<HTMLDivElement>(null),
  // }
  // const menuTransition = "all 0.3s ease-in-out"
  // const animationDuration = 300
  // const closeTimerRef = useRef<NodeJS.Timeout | null>(null)
  // const isMobile = false

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

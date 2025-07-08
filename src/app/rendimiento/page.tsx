"use client"

import ParticleBackground from "@/components/microComponents/ParticleBackground"
import {
  BarChart3,
  TrendingUp,
  Eye,
  Shield,
  Target,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
  Activity,
  Users,
  DollarSign,
  Clock,
  ExternalLink,
  LineChart,
  PieChart,
} from "lucide-react"

const analyticsAdvantages = [
  {
    title: "Anticipación",
    description: "Detecta cuellos de botella, baja de rendimiento o errores antes de que escalen.",
    icon: <AlertTriangle className="w-8 h-8" />,
    gradient: "from-red-500 to-orange-500",
    features: ["Alertas tempranas", "Monitoreo predictivo", "Prevención de fallos"],
  },
  {
    title: "Mejores decisiones",
    description: "Decidir con datos elimina suposiciones. Planes más sólidos y resultados medibles.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Decisiones basadas en datos", "Planes estratégicos", "Resultados medibles"],
  },
  {
    title: "Seguridad real",
    description: "Audita accesos, flujos de información y puntos críticos del sistema en tiempo real.",
    icon: <Shield className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
    features: ["Auditoría continua", "Monitoreo de accesos", "Seguridad proactiva"],
  },
]

const dashboardMetrics = [
  {
    label: "Tasa de conversión",
    value: "18.4%",
    change: "+2.3%",
    trend: "up",
    icon: <TrendingUp className="w-6 h-6" />,
    color: "text-green-400",
  },
  {
    label: "Clientes activos",
    value: "2,340",
    change: "+156",
    trend: "up",
    icon: <Users className="w-6 h-6" />,
    color: "text-blue-400",
  },
  {
    label: "Revenue mensual",
    value: "$45,280",
    change: "+12.5%",
    trend: "up",
    icon: <DollarSign className="w-6 h-6" />,
    color: "text-[#d4af37]",
  },
  {
    label: "Tiempo respuesta",
    value: "0.8s",
    change: "-0.2s",
    trend: "down",
    icon: <Clock className="w-6 h-6" />,
    color: "text-green-400",
  },
  {
    label: "Tickets abiertos",
    value: "12",
    change: "-8",
    trend: "down",
    icon: <Activity className="w-6 h-6" />,
    color: "text-green-400",
  },
  {
    label: "Errores críticos",
    value: "0",
    change: "0",
    trend: "stable",
    icon: <CheckCircle className="w-6 h-6" />,
    color: "text-green-400",
  },
]

const caseStudies = [
  {
    company: "Tienda E-commerce",
    category: "RETAIL DIGITAL",
    result: "Detectó un abandono masivo por paso de pago roto y recuperó 22% en ventas.",
    icon: <BarChart3 className="w-8 h-8" />,
    metrics: [
      { label: "Recuperación ventas", value: "+22%" },
      { label: "Abandono carrito", value: "-35%" },
    ],
  },
  {
    company: "Plataforma Educativa",
    category: "EDTECH",
    result: "Analizó el uso por módulo y reestructuró el curso más vendido para duplicar la retención.",
    icon: <LineChart className="w-8 h-8" />,
    metrics: [
      { label: "Retención", value: "+100%" },
      { label: "Engagement", value: "+67%" },
    ],
  },
  {
    company: "Consultoría Empresarial",
    category: "SERVICIOS B2B",
    result: "Usó patrones de actividad para identificar clientes inactivos y reactivarlos con éxito.",
    icon: <PieChart className="w-8 h-8" />,
    metrics: [
      { label: "Reactivación", value: "+45%" },
      { label: "LTV cliente", value: "+30%" },
    ],
  },
]

// Componente para gráfico de barras simulado
const BarChartDemo = () => {
  const data = [
    { month: "Ene", value: 65 },
    { month: "Feb", value: 78 },
    { month: "Mar", value: 90 },
    { month: "Abr", value: 85 },
    { month: "May", value: 95 },
    { month: "Jun", value: 88 },
  ]

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white font-semibold">Rendimiento Mensual</h4>
        <TrendingUp className="w-5 h-5 text-[#d4af37]" />
      </div>
      <div className="flex items-end justify-between h-32 space-x-2">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col items-center flex-1">
            <div
              className="w-full bg-gradient-to-t from-[#d4af37] to-[#f1c232] rounded-t-sm transition-all duration-500 hover:opacity-80"
              style={{ height: `${item.value}%` }}
            ></div>
            <span className="text-xs text-gray-400 mt-2">{item.month}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

// Componente para gráfico circular simulado
const PieChartDemo = () => {
  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-4">
        <h4 className="text-white font-semibold">Distribución de Tráfico</h4>
        <PieChart className="w-5 h-5 text-[#d4af37]" />
      </div>
      <div className="flex items-center justify-center">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#374151"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="#d4af37"
              strokeWidth="2"
              strokeDasharray="60, 40"
              className="animate-pulse"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-[#d4af37] font-bold text-sm">60%</span>
          </div>
        </div>
      </div>
      <div className="mt-4 space-y-2">
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-[#d4af37] rounded-full mr-2"></div>
            <span className="text-gray-300">Orgánico</span>
          </div>
          <span className="text-white">60%</span>
        </div>
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center">
            <div className="w-3 h-3 bg-gray-500 rounded-full mr-2"></div>
            <span className="text-gray-300">Directo</span>
          </div>
          <span className="text-white">40%</span>
        </div>
      </div>
    </div>
  )
}

export default function AnaliticasPage() {
  return (
    <>
      <ParticleBackground />

      <div className="relative z-10 min-h-screen text-white font-sans">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 relative overflow-hidden">
          {/* Efecto de luz pulsante */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse w-96 h-96 rounded-full bg-gradient-to-r from-[#d4af3780] to-[#0d47a180] blur-[100px] opacity-30"></div>
          </div>

          <div className="max-w-6xl mx-auto text-center relative z-10">
            {/* Badge */}
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-8">
              <BarChart3 className="w-4 h-4 text-[#d4af37] mr-2" />
              <span className="text-[#d4af37] text-sm font-medium tracking-wide">INTELIGENCIA DE DATOS</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight leading-tight">
              <span className="text-white">Verlo </span>
              <span className="bg-gradient-to-r from-[#d4af37] via-[#f1c232] to-[#d4af37] bg-clip-text text-transparent">
                todo
              </span>
              <br />
              <span className="text-white">te da el control</span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Las analíticas convierten el caos en claridad. Te permiten{" "}
              <span className="text-[#d4af37]">actuar con inteligencia</span> y dormir tranquilo.
            </p>

            {/* Scroll indicator */}
            
          </div>
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
              <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
        </section>

        {/* Analytics Advantages Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">¿Por qué las </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  analíticas
                </span>
                <span className="text-white"> son clave?</span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Cada métrica es una ventana hacia el futuro de tu negocio
              </p>
            </div>

            {/* Advantages Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {analyticsAdvantages.map((advantage, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${advantage.gradient} mb-6`}>
                      <div className="text-white">{advantage.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {advantage.title}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{advantage.description}</p>

                    {/* Features */}
                    <div className="space-y-2">
                      {advantage.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-400">
                          <CheckCircle className="w-4 h-4 text-[#d4af37] mr-2 flex-shrink-0" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-bl from-[#d4af37]/10 to-transparent rounded-bl-full"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Dashboard Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Tu negocio como un </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  tablero de control
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Métricas en tiempo real que transforman datos en decisiones estratégicas
              </p>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {dashboardMetrics.map((metric, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-2 rounded-lg bg-[#d4af37]/20 ${metric.color}`}>{metric.icon}</div>
                    <div
                      className={`text-sm font-semibold ${
                        metric.trend === "up"
                          ? "text-green-400"
                          : metric.trend === "down"
                            ? "text-green-400"
                            : "text-gray-400"
                      }`}
                    >
                      {metric.change}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-sm text-gray-400 mb-1">{metric.label}</h3>
                    <p className="text-3xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {metric.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Charts Demo */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <BarChartDemo />
              <PieChartDemo />
            </div>
          </div>
        </section>

        {/* Case Studies Section */}
        <section className="py-24 px-6 relative">
          <div className="max-w-7xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                <span className="text-white">Donde los datos </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  cambiaron el rumbo
                </span>
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Casos reales donde las analíticas generaron transformaciones medibles
              </p>
            </div>

            {/* Cases Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {caseStudies.map((study, index) => (
                <div
                  key={index}
                  className="group relative bg-gradient-to-br from-[#0f0f13]/90 to-[#1a1a2e]/90 backdrop-blur-sm border border-[#d4af37]/20 rounded-2xl p-8 hover:border-[#d4af37]/50 transition-all duration-500 hover:transform hover:scale-105 overflow-hidden"
                >
                  {/* Glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-[#d4af37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Category badge */}
                  <div className="absolute top-4 right-4 px-2 py-1 bg-[#d4af37]/20 text-[#d4af37] text-xs font-bold rounded-full">
                    {study.category}
                  </div>

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className="inline-flex p-4 rounded-xl bg-gradient-to-r from-[#d4af37]/20 to-[#d4af37]/10 mb-6 group-hover:from-[#d4af37]/30 group-hover:to-[#d4af37]/20 transition-all duration-300">
                      <div className="text-[#d4af37]">{study.icon}</div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-[#d4af37] transition-colors duration-300">
                      {study.company}
                    </h3>

                    <p className="text-gray-300 leading-relaxed mb-6">{study.result}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-2 gap-4">
                      {study.metrics.map((metric, idx) => (
                        <div key={idx} className="text-center">
                          <div className="text-2xl font-bold text-[#d4af37] mb-1">{metric.value}</div>
                          <div className="text-xs text-gray-400">{metric.label}</div>
                        </div>
                      ))}
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

            <div className="relative z-10 bg-gradient-to-r from-[#0f0f13]/80 to-[#1a1a2e]/80 backdrop-blur-sm border border-[#d4af37]/30 rounded-2xl p-12">
              <div className="inline-flex items-center px-4 py-2 rounded-full border border-[#d4af37]/30 bg-[#d4af37]/10 backdrop-blur-sm mb-6">
                <Eye className="w-4 h-4 text-[#d4af37] mr-2" />
                <span className="text-[#d4af37] text-sm font-medium tracking-wide">TRANSPARENCIA TOTAL</span>
              </div>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                <span className="text-white">Los datos no mienten. </span>
                <span className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] bg-clip-text text-transparent">
                  Y te protegen.
                </span>
              </h2>

              <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto">
                Con nuestras analíticas personalizadas, tu negocio deja de ser una{" "}
                <span className="text-[#d4af37]">caja negra.</span>
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                  <span className="relative z-10 flex items-center">
                    Ver mis datos ahora
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#f1c232] to-[#d4af37] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>

                <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center">
                  Volver a recursos
                  <ExternalLink className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

import { useEffect, useState } from "react"
import {
  TrendingUp,
  Users,
  Target,
  BarChart3,
  Activity,
  Globe,
  ShoppingCart,
  MessageSquare,
  Settings,
  Layers,
  Brain,
  Rocket,
} from "lucide-react"

export const insights = [
  {
    title: "Comunicación entre áreas",
    description: "Marketing, ventas, operaciones y soporte usan los mismos datos para coordinar mejor.",
    icon: <MessageSquare className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Dashboards unificados", "KPIs compartidos", "Comunicación fluida"],
  },
  {
    title: "Toma de decisiones con evidencia",
    description: "Desde pricing hasta producto, los líderes analizan patrones, no opiniones.",
    icon: <Brain className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    features: ["Decisiones basadas en datos", "Análisis predictivo", "Estrategia informada"],
  },
  {
    title: "Adaptación constante",
    description: "Los datos permiten probar, medir, corregir y escalar más rápido que la competencia.",
    icon: <Rocket className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
    features: ["Iteración rápida", "A/B testing", "Escalabilidad inteligente"],
  },
]

export const departmentData = [
  {
    area: "Marketing",
    info: "Campañas medidas en tiempo real, adaptadas al rendimiento.",
    icon: <Target className="w-6 h-6" />,
    metrics: [
      { label: "ROI Campañas", value: "340%" },
      { label: "CTR", value: "4.2%" },
    ],
  },
  {
    area: "Ventas",
    info: "Alertas de clientes activos, leads calientes, ciclos de cierre.",
    icon: <TrendingUp className="w-6 h-6" />,
    metrics: [
      { label: "Conversion Rate", value: "28%" },
      { label: "Ciclo Promedio", value: "12d" },
    ],
  },
  {
    area: "Operaciones",
    info: "Dashboard de carga, entregas, SLA y productividad diaria.",
    icon: <Settings className="w-6 h-6" />,
    metrics: [
      { label: "SLA Compliance", value: "98.5%" },
      { label: "Productividad", value: "+45%" },
    ],
  },
  {
    area: "Soporte",
    info: "Tickets por tipo, urgencia y satisfacción del usuario.",
    icon: <Users className="w-6 h-6" />,
    metrics: [
      { label: "CSAT Score", value: "4.8/5" },
      { label: "Tiempo Respuesta", value: "2.3h" },
    ],
  },
]

export const advancedCases = [
  {
    company: "Holding de Retail",
    category: "RETAIL & E-COMMERCE",
    result: "Logró predecir inventarios y mejorar margen logístico un 25% integrando datos de ventas + bodega.",
    icon: <ShoppingCart className="w-8 h-8" />,
    metrics: [
      { label: "Margen logístico", value: "+25%" },
      { label: "Precisión inventario", value: "94%" },
    ],
  },
  {
    company: "Startup Financiera",
    category: "FINTECH",
    result: "Relacionó comportamiento del cliente con churn, reduciendo bajas en un 40%.",
    icon: <BarChart3 className="w-8 h-8" />,
    metrics: [
      { label: "Reducción churn", value: "-40%" },
      { label: "Retención", value: "89%" },
    ],
  },
  {
    company: "EdTech Regional",
    category: "EDUCACIÓN",
    result: "Usó dashboards cruzados para optimizar marketing, contenidos y soporte de forma sincronizada.",
    icon: <Layers className="w-8 h-8" />,
    metrics: [
      { label: "Engagement", value: "+67%" },
      { label: "Completion Rate", value: "78%" },
    ],
  },
]

// Componente para métricas animadas avanzadas
export const AdvancedMetrics = () => {
  const [animatedValues, setAnimatedValues] = useState({
    revenue: 0,
    users: 0,
    growth: 0,
    efficiency: 0,
    satisfaction: 0,
    uptime: 0,
  })

  useEffect(() => {
    const targets = {
      revenue: 2847000,
      users: 15420,
      growth: 156,
      efficiency: 94.7,
      satisfaction: 4.9,
      uptime: 99.98,
    }

    const duration = 2000
    const steps = 60
    const stepDuration = duration / steps

    let currentStep = 0
    const interval = setInterval(() => {
      currentStep++
      const progress = currentStep / steps

      setAnimatedValues({
        revenue: Math.floor(targets.revenue * progress),
        users: Math.floor(targets.users * progress),
        growth: Math.floor(targets.growth * progress),
        efficiency: Math.floor(targets.efficiency * progress * 10) / 10,
        satisfaction: Math.floor(targets.satisfaction * progress * 10) / 10,
        uptime: Math.floor(targets.uptime * progress * 100) / 100,
      })

      if (currentStep >= steps) {
        clearInterval(interval)
      }
    }, stepDuration)

    return () => clearInterval(interval)
  }, [])

  const metrics = [
    {
      label: "Revenue Anual",
      value: `$${animatedValues.revenue.toLocaleString()}`,
      icon: <TrendingUp className="w-6 h-6" />,
      color: "text-[#d4af37]",
      change: "+23.4%",
    },
    {
      label: "Usuarios Activos",
      value: animatedValues.users.toLocaleString(),
      icon: <Users className="w-6 h-6" />,
      color: "text-blue-400",
      change: "+12.8%",
    },
    {
      label: "Crecimiento MoM",
      value: `${animatedValues.growth}%`,
      icon: <Rocket className="w-6 h-6" />,
      color: "text-green-400",
      change: "+8.2%",
    },
    {
      label: "Eficiencia Operativa",
      value: `${animatedValues.efficiency}%`,
      icon: <Settings className="w-6 h-6" />,
      color: "text-purple-400",
      change: "+15.6%",
    },
    {
      label: "Satisfacción Cliente",
      value: `${animatedValues.satisfaction}/5`,
      icon: <Target className="w-6 h-6" />,
      color: "text-pink-400",
      change: "+0.3",
    },
    {
      label: "Uptime Sistema",
      value: `${animatedValues.uptime}%`,
      icon: <Activity className="w-6 h-6" />,
      color: "text-teal-400",
      change: "+0.02%",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {metrics.map((metric, index) => (
        <div
          key={index}
          className="group bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6 hover:border-[#d4af37]/50 transition-all duration-300 hover:transform hover:scale-105"
        >
          <div className="flex items-center justify-between mb-4">
            <div className={`p-2 rounded-lg bg-[#d4af37]/20 ${metric.color}`}>{metric.icon}</div>
            <div className="text-sm font-semibold text-green-400">{metric.change}</div>
          </div>

          <div>
            <h3 className="text-sm text-gray-400 mb-1">{metric.label}</h3>
            <p className="text-3xl font-bold text-white group-hover:text-[#d4af37] transition-colors duration-300">
              {metric.value}
            </p>
          </div>

          {/* Progress bar animation */}
          <div className="mt-4 w-full bg-gray-700 rounded-full h-1">
            <div
              className="bg-gradient-to-r from-[#d4af37] to-[#f1c232] h-1 rounded-full transition-all duration-2000 ease-out"
              style={{ width: `${(index + 1) * 16.67}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Componente para gráfico de líneas avanzado
export const AdvancedLineChart = () => {
  const data = [
    { month: "Ene", value: 45, target: 40 },
    { month: "Feb", value: 52, target: 45 },
    { month: "Mar", value: 48, target: 50 },
    { month: "Abr", value: 61, target: 55 },
    { month: "May", value: 68, target: 60 },
    { month: "Jun", value: 75, target: 65 },
    { month: "Jul", value: 82, target: 70 },
    { month: "Ago", value: 78, target: 75 },
  ]

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-white font-semibold">Performance vs Target</h4>
        <Activity className="w-5 h-5 text-[#d4af37]" />
      </div>

      <div className="relative h-40">
        <svg className="w-full h-full" viewBox="0 0 400 160">
          {/* Grid lines */}
          {[0, 1, 2, 3, 4].map((i) => (
            <line key={i} x1="0" y1={i * 32} x2="400" y2={i * 32} stroke="#374151" strokeWidth="0.5" opacity="0.3" />
          ))}

          {/* Target line */}
          <polyline
            fill="none"
            stroke="#6b7280"
            strokeWidth="2"
            strokeDasharray="5,5"
            points={data
              .map((point, index) => `${(index * 400) / (data.length - 1)},${160 - (point.target / 100) * 160}`)
              .join(" ")}
          />

          {/* Actual performance line */}
          <polyline
            fill="none"
            stroke="#d4af37"
            strokeWidth="3"
            points={data
              .map((point, index) => `${(index * 400) / (data.length - 1)},${160 - (point.value / 100) * 160}`)
              .join(" ")}
            className="animate-pulse"
          />

          {/* Data points */}
          {data.map((point, index) => (
            <circle
              key={index}
              cx={(index * 400) / (data.length - 1)}
              cy={160 - (point.value / 100) * 160}
              r="4"
              fill="#d4af37"
              className="animate-pulse"
            />
          ))}
        </svg>

        {/* Month labels */}
        <div className="flex justify-between mt-2 text-xs text-gray-400">
          {data.map((point, index) => (
            <span key={index}>{point.month}</span>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between mt-4 text-sm">
        <div className="flex items-center">
          <div className="w-3 h-3 bg-[#d4af37] rounded-full mr-2"></div>
          <span className="text-gray-300">Performance</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-0.5 bg-gray-500 mr-2"></div>
          <span className="text-gray-300">Target</span>
        </div>
      </div>
    </div>
  )
}

// Componente para heatmap
export const HeatmapChart = () => {
  const days = ["Lun", "Mar", "Mié", "Jue", "Vie", "Sáb", "Dom"]
  const hours = ["6", "9", "12", "15", "18", "21"]

  const generateHeatmapData = () => {
    return days.map(() => hours.map(() => Math.random()))
  }

  const [heatmapData] = useState(generateHeatmapData())

  const getIntensity = (value: number) => {
    if (value > 0.8) return "bg-[#d4af37] opacity-100"
    if (value > 0.6) return "bg-[#d4af37] opacity-75"
    if (value > 0.4) return "bg-[#d4af37] opacity-50"
    if (value > 0.2) return "bg-[#d4af37] opacity-25"
    return "bg-gray-600 opacity-20"
  }

  return (
    <div className="bg-gradient-to-br from-[#1a1a2e]/80 to-[#16213e]/80 backdrop-blur-sm border border-[#d4af37]/20 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h4 className="text-white font-semibold">Actividad por Hora</h4>
        <Globe className="w-5 h-5 text-[#d4af37]" />
      </div>

      <div className="space-y-2">
        {/* Hour labels */}
        <div className="flex justify-between text-xs text-gray-400 mb-2">
          <span></span>
          {hours.map((hour) => (
            <span key={hour}>{hour}h</span>
          ))}
        </div>

        {/* Heatmap grid */}
        {days.map((day, dayIndex) => (
          <div key={day} className="flex items-center space-x-2">
            <span className="text-xs text-gray-400 w-8">{day}</span>
            <div className="flex space-x-1">
              {hours.map((_, hourIndex) => (
                <div
                  key={hourIndex}
                  className={`w-6 h-4 rounded-sm transition-all duration-300 hover:scale-110 ${getIntensity(
                    heatmapData[dayIndex][hourIndex],
                  )}`}
                ></div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between mt-4 text-xs text-gray-400">
        <span>Menos</span>
        <div className="flex space-x-1">
          {[0.2, 0.4, 0.6, 0.8, 1].map((intensity) => (
            <div key={intensity} className={`w-3 h-3 rounded-sm ${getIntensity(intensity)}`}></div>
          ))}
        </div>
        <span>Más</span>
      </div>
    </div>
  )
}

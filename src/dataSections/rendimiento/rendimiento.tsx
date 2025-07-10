import {
  BarChart3,
  TrendingUp,
  Shield,
  Target,
  AlertTriangle,
  CheckCircle,
  Activity,
  Users,
  DollarSign,
  Clock,
  LineChart,
  PieChart,
} from "lucide-react"
export const analyticsAdvantages = [
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

export const dashboardMetrics = [
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

export const caseStudiesRendimiento = [
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
export const BarChartDemo = () => {
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

export const PieChartDemo = () => {
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
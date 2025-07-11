import {
  TrendingUp,
  Eye,
  Target,
  Shield,
  Brain,
  DollarSign,
} from "lucide-react"
export const analysisPhasesData = [
  { name: "Recolección de Datos", duration: 2000, improvement: "+25%", risk: "Bajo" },
  { name: "Limpieza y Estructuración", duration: 1800, improvement: "+35%", risk: "Medio" },
  { name: "Análisis Exploratorio", duration: 2200, improvement: "+40%", risk: "Bajo" },
  { name: "Modelado Predictivo", duration: 1600, improvement: "+30%", risk: "Alto" },
  { name: "Visualización Interactiva", duration: 1400, improvement: "+20%", risk: "Bajo" },
];

export const benefitsData = [
  {
    icon: TrendingUp,
    title: "Detectar oportunidades",
    desc: "Encuentra patrones de venta, hábitos de usuarios y nichos no atendidos.",
    metric: "+85% oportunidades",
    color: "from-blue-400 to-blue-500",
  },
  {
    icon: DollarSign,
    title: "Reducir costos",
    desc: "Identifica cuellos de botella, desperdicio de recursos y procesos ineficientes.",
    metric: "-40% costos",
    color: "from-green-400 to-green-500",
  },
  {
    icon: Target,
    title: "Mejorar la conversión",
    desc: "Analiza funnels y toma decisiones en base al comportamiento real.",
    metric: "+120% conversión",
    color: "from-purple-400 to-purple-500",
  },
  {
    icon: Eye,
    title: "Monitorear operaciones",
    desc: "Visualiza en tiempo real métricas clave, desde ventas hasta soporte.",
    metric: "100% visibilidad",
    color: "from-cyan-400 to-cyan-500",
  },
  {
    icon: Shield,
    title: "Anticipar riesgos",
    desc: "Predecimos comportamientos anómalos o problemas antes de que exploten.",
    metric: "-75% riesgos",
    color: "from-red-400 to-red-500",
  },
  {
    icon: Brain,
    title: "Decisiones basadas en hechos",
    desc: "Deja de suponer y empieza a actuar con evidencia concreta.",
    metric: "+200% precisión",
    color: "from-[#d4af37] to-[#d4af37]",
  },
];

export const techStackData = [
  { name: "Python", adoption: 95, rating: "Excelente" },
  { name: "Pandas", adoption: 92, rating: "Excelente" },
  { name: "Metabase", adoption: 88, rating: "Muy Bueno" },
  { name: "BigQuery", adoption: 85, rating: "Muy Bueno" },
  { name: "Looker Studio", adoption: 82, rating: "Muy Bueno" },
  { name: "Power BI", adoption: 78, rating: "Bueno" },
  { name: "Grafana", adoption: 90, rating: "Excelente" },
  { name: "Supabase", adoption: 75, rating: "Bueno" },
];

export const successCasesData = [
  {
    empresa: "Startup Logística",
    sector: "Logistics • 15K+ envíos/mes",
    resultado: "Identificó zonas con mayor retorno usando dashboards interactivos en tiempo real.",
    metrics: {
      efficiency: "+65%",
      costs: "-30%",
      satisfaction: "4.8/5",
      roi: "+180%",
    },
    tech: ["Python", "Grafana", "BigQuery", "Metabase"],
    duration: "3 meses",
    challenges: ["Datos dispersos", "Falta de visibilidad", "Decisiones lentas"],
  },
  {
    empresa: "Plataforma Educativa",
    sector: "EdTech • 50K+ usuarios",
    resultado: "Aumentó un 30% la retención tras analizar rutas de usuarios y rediseñar flujos.",
    metrics: {
      retention: "+30%",
      engagement: "+85%",
      satisfaction: "4.6/5",
      churn: "-45%",
    },
    tech: ["Pandas", "Looker Studio", "Supabase", "Power BI"],
    duration: "4 meses",
    challenges: ["Alto churn", "Baja engagement", "Flujos confusos"],
  },
  {
    empresa: "Retail Físico + Online",
    sector: "Retail • 25 sucursales",
    resultado: "Sincronizó datos de sucursales físicas y ecommerce para análisis de demanda unificado.",
    metrics: {
      sales: "+40%",
      inventory: "-25%",
      satisfaction: "4.4/5",
      efficiency: "+120%",
    },
    tech: ["BigQuery", "Grafana", "Python", "Metabase"],
    duration: "6 meses",
    challenges: ["Datos desconectados", "Inventario ineficiente", "Demanda impredecible"],
  },
];
 export const getRiskColor = (risk: string) => {
    switch (risk) {
      case "Alto":
        return "text-red-400 bg-red-500/10 border-red-500/30"
      case "Medio":
        return "text-[#d4af37] bg-[#d4af37]/10 border-[#d4af37]/30"
      case "Bajo":
        return "text-green-400 bg-green-500/10 border-green-500/30"
      default:
        return "text-gray-400 bg-gray-500/10 border-gray-500/30"
    }
  }
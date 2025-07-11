import {
  Zap,
  Shield,
  Clock,
  Target,
  TrendingUp,
  Users,
} from "lucide-react"
// Beneficios CI/CD
export const benefitsCCID = [
  {
    icon: <Zap className="w-8 h-8" />,
    title: "Velocidad y Agilidad",
    description: "Lanzamiento de funcionalidades y correcciones con mayor frecuencia",
    metric: "+150% velocidad",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Mejora en Calidad",
    description: "Detección temprana de errores y despliegues incrementales seguros",
    metric: "+85% calidad",
    gradient: "from-green-500 to-emerald-500",
  },
  {
    icon: <Clock className="w-8 h-8" />,
    title: "Ciclos de Retroalimentación",
    description: "Feedback inmediato que mejora la colaboración y mejora continua",
    metric: "-75% tiempo",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: <Target className="w-8 h-8" />,
    title: "Automatización Total",
    description: "Reducción de intervención manual y errores humanos",
    metric: "+200% eficiencia",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: <TrendingUp className="w-8 h-8" />,
    title: "Escalabilidad Inteligente",
    description: "Crecimiento con proyectos y manejo de sistemas complejos",
    metric: "+500% capacidad",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Mejor Experiencia Cliente",
    description: "Software más confiable y actualizado aumenta satisfacción",
    metric: "+95% satisfacción",
    gradient: "from-teal-500 to-green-500",
  },
]

// Stack Tecnológico CI/CD
export const techStackCCID = [
  { name: "Jenkins", adoption: 92, rating: "Excelente" },
  { name: "GitLab CI", adoption: 89, rating: "Excelente" },
  { name: "GitHub Actions", adoption: 87, rating: "Excelente" },
  { name: "Docker", adoption: 95, rating: "Excelente" },
  { name: "Kubernetes", adoption: 85, rating: "Muy Bueno" },
  { name: "Terraform", adoption: 78, rating: "Muy Bueno" },
  { name: "SonarQube", adoption: 82, rating: "Muy Bueno" },
  { name: "Prometheus", adoption: 75, rating: "Bueno" },
]

// Casos de Éxito CI/CD
export const successCasesCCID = [
  {
    company: "Fintech Global",
    sector: "FinTech • 2M+ transacciones/día",
    results: [
      "+300% deployment frequency",
      "-85% lead time",
      "99.9% deployment success",
      "+120% developer productivity",
    ],
    satisfaction: 4.9,
    stack: ["Jenkins", "Docker", "Kubernetes", "AWS"],
    duration: "4 meses",
    challenges: ["Regulaciones estrictas", "Zero downtime", "Seguridad crítica"],
  },
  {
    company: "E-commerce Platform",
    sector: "E-commerce • 50M+ usuarios",
    results: [
      "+250% release velocity",
      "-70% bug detection time",
      "99.95% system reliability",
      "+95% team satisfaction",
    ],
    satisfaction: 4.7,
    stack: ["GitLab CI", "Docker", "Terraform", "GCP"],
    duration: "6 meses",
    challenges: ["Picos de tráfico", "Múltiples equipos", "Legacy systems"],
  },
  {
    company: "SaaS Healthcare",
    sector: "HealthTech • 500K+ pacientes",
    results: [
      "+400% deployment speed",
      "-90% rollback incidents",
      "99.99% compliance rate",
      "+150% feature delivery",
    ],
    satisfaction: 4.8,
    stack: ["GitHub Actions", "Docker", "Kubernetes", "Azure"],
    duration: "5 meses",
    challenges: ["Compliance HIPAA", "Datos sensibles", "Alta disponibilidad"],
  },
]

// Pasos del Pipeline CI/CD
export const pipelineSteps = [
  { name: "Code Commit", status: "pending", duration: 2, improvement: "+15%" },
  { name: "Automated Tests", status: "pending", duration: 1.8, improvement: "+25%" },
  { name: "Build & Package", status: "pending", duration: 2.5, improvement: "+35%" },
  { name: "Security Scan", status: "pending", duration: 1.5, improvement: "+40%" },
  { name: "Deploy to Production", status: "pending", duration: 1.2, improvement: "+50%" },
]

import {
  GitBranch,
  Monitor,
  Network,
  Shield,
  Target,
  TrendingUp,
  Users,
  Zap,
  Layers,
  Activity,
  Settings,
  Rocket,
  Globe,
  Workflow,
} from "lucide-react"

export const strategiesMicroservicios = [
  {
    title: "Descomposición Gradual",
    description:
      "Identificando partes del sistema que pueden funcionar como servicios independientes para minimizar riesgos y facilitar el cambio progresivo.",
    icon: <Layers className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    benefits: ["Riesgo minimizado", "Cambio progresivo", "Continuidad del negocio"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Modelado Basado en Dominios (DDD)",
    description:
      "Definir límites claros para cada microservicio basados en las áreas de negocio, manteniendo servicios cohesionados.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    benefits: ["Límites claros", "Servicios cohesionados", "Responsabilidades delimitadas"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "CI/CD Avanzado",
    description:
      "Implementar pipelines de integración y entrega continua para facilitar despliegues frecuentes y confiables de cada microservicio.",
    icon: <GitBranch className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
    benefits: ["Despliegues independientes", "Ciclo acelerado", "Confiabilidad alta"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Monitoreo y Observabilidad",
    description:
      "Utilizar herramientas que permitan supervisar el rendimiento, detectar fallos y entender el comportamiento distribuido.",
    icon: <Monitor className="w-8 h-8" />,
    gradient: "from-orange-500 to-red-500",
    benefits: ["Supervisión completa", "Detección temprana", "Resiliencia operativa"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Cultura Organizacional",
    description:
      "Fomentar una cultura colaborativa y capacitar a los equipos para adaptarse a la nueva arquitectura y prácticas DevOps.",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500",
    benefits: ["Cultura colaborativa", "Equipos capacitados", "Adaptación DevOps"],
    image: "/placeholder.svg?height=300&width=400",
  },
  {
    title: "Escalabilidad Inteligente",
    description:
      "La arquitectura permite escalar servicios específicos según demanda, optimizando recursos y mejorando capacidad de respuesta.",
    icon: <TrendingUp className="w-8 h-8" />,
    gradient: "from-indigo-500 to-purple-500",
    benefits: ["Escalado específico", "Recursos optimizados", "Respuesta ágil"],
    image: "/placeholder.svg?height=300&width=400",
  },
]

export const benefitsMicroservicios = [
  {
    title: "Flexibilidad Arquitectónica",
    description: "Cada servicio puede evolucionar independientemente",
    icon: <Workflow className="w-6 h-6" />,
    metric: "+300%",
  },
  {
    title: "Escalabilidad Granular",
    description: "Escala solo los servicios que lo necesitan",
    icon: <TrendingUp className="w-6 h-6" />,
    metric: "-60%",
  },
  {
    title: "Resiliencia Operativa",
    description: "Fallos aislados no afectan todo el sistema",
    icon: <Shield className="w-6 h-6" />,
    metric: "99.9%",
  },
  {
    title: "Velocidad de Desarrollo",
    description: "Equipos trabajan en paralelo sin bloqueos",
    icon: <Zap className="w-6 h-6" />,
    metric: "+250%",
  },
  {
    title: "Mantenimiento Simplificado",
    description: "Código más pequeño y fácil de mantener",
    icon: <Settings className="w-6 h-6" />,
    metric: "-70%",
  },
  {
    title: "Time to Market",
    description: "Despliegues más rápidos y frecuentes",
    icon: <Rocket className="w-6 h-6" />,
    metric: "-80%",
  },
]

export const caseStudiesMicroservicios = [
  {
    company: "Operador Móvil Global",
    category: "TELECOMUNICACIONES",
    challenge: "Sistema monolítico de facturación que no escalaba con 50M+ usuarios",
    solution: "Migración gradual a microservicios con DDD y CI/CD avanzado",
    results: [
      { metric: "Escalabilidad", value: "+500%" },
      { metric: "Tiempo despliegue", value: "-85%" },
      { metric: "Disponibilidad", value: "99.99%" },
      { metric: "Costos operativos", value: "-45%" },
    ],
    duration: "18 meses",
    technologies: ["Kubernetes", "Docker", "Spring Boot", "Apache Kafka", "Redis"],
    icon: <Globe className="w-8 h-8" />,
  },
  {
    company: "Proveedor de Internet",
    category: "ISP & NETWORKING",
    challenge: "Plataforma de gestión de red monolítica con alta latencia",
    solution: "Descomposición por dominios de negocio con monitoreo avanzado",
    results: [
      { metric: "Latencia", value: "-75%" },
      { metric: "Throughput", value: "+400%" },
      { metric: "Detección fallos", value: "-90%" },
      { metric: "Satisfacción cliente", value: "+65%" },
    ],
    duration: "12 meses",
    technologies: ["Node.js", "MongoDB", "Prometheus", "Grafana", "AWS"],
    icon: <Network className="w-8 h-8" />,
  },
  {
    company: "Plataforma de Streaming",
    category: "MEDIA & CONTENT",
    challenge: "Sistema de distribución de contenido que no soportaba picos de demanda",
    solution: "Arquitectura de microservicios con escalado automático",
    results: [
      { metric: "Usuarios concurrentes", value: "+1000%" },
      { metric: "Calidad streaming", value: "+95%" },
      { metric: "Costos CDN", value: "-40%" },
      { metric: "Tiempo buffering", value: "-80%" },
    ],
    duration: "15 meses",
    technologies: ["Go", "PostgreSQL", "RabbitMQ", "Docker", "Kubernetes"],
    icon: <Activity className="w-8 h-8" />,
  },
]

export const techStackMicroservicios = [
  { name: "Kubernetes", adoption: 92, category: "Orquestación" },
  { name: "Docker", adoption: 95, category: "Contenedores" },
  { name: "Spring Boot", adoption: 88, category: "Framework" },
  { name: "Apache Kafka", adoption: 85, category: "Messaging" },
  { name: "Redis", adoption: 90, category: "Cache" },
  { name: "Prometheus", adoption: 82, category: "Monitoreo" },
  { name: "Grafana", adoption: 87, category: "Visualización" },
  { name: "Jenkins", adoption: 79, category: "CI/CD" },
]
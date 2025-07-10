import {
  Users,
  Clock,
  Cpu,
  DollarSign,
  TrendingUp,
  CheckCircle,
  XCircle,
  BarChart3,
  Target,
} from "lucide-react"
export const resources = [
  {
    title: "Humanos",
    description: "Asigna talento según capacidad, tiempo y prioridad.",
    icon: <Users className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
    features: ["Asignación inteligente", "Seguimiento de carga", "Optimización de equipos"],
  },
  {
    title: "Tiempo",
    description: "Automatiza asignaciones, horarios y disponibilidad.",
    icon: <Clock className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
    features: ["Horarios dinámicos", "Automatización", "Control de disponibilidad"],
  },
  {
    title: "Tecnología",
    description: "Monitorea uso de APIs, servicios y herramientas clave.",
    icon: <Cpu className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
    features: ["Monitoreo en tiempo real", "Uso de APIs", "Optimización de servicios"],
  },
  {
    title: "Dinero",
    description: "Controla presupuestos y costos por tarea o unidad.",
    icon: <DollarSign className="w-8 h-8" />,
    gradient: "from-yellow-500 to-orange-500",
    features: ["Control presupuestario", "Costos por tarea", "ROI en tiempo real"],
  },
]

export const comparison = {
  disorder: [
    { text: "Duplicación de tareas", icon: <XCircle className="w-5 h-5 text-red-400" /> },
    { text: "Sobrecarga de personal", icon: <XCircle className="w-5 h-5 text-red-400" /> },
    { text: "Uso ineficiente de presupuesto", icon: <XCircle className="w-5 h-5 text-red-400" /> },
    { text: "Desalineación entre áreas", icon: <XCircle className="w-5 h-5 text-red-400" /> },
    { text: "Pérdida de oportunidades", icon: <XCircle className="w-5 h-5 text-red-400" /> },
  ],
  management: [
    { text: "Asignación dinámica por prioridades", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { text: "Reportes en tiempo real", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { text: "Presupuesto optimizado", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { text: "Colaboración fluida entre equipos", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { text: "Escalabilidad inteligente", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
  ],
}

export const caseStudiesRecursos = [
  {
    company: "Startup de Logística",
    category: "TRANSPORTE & LOGÍSTICA",
    result: "Reorganizó rutas y turnos, ahorrando un 30% de costos mensuales.",
    icon: <Target className="w-8 h-8" />,
    metrics: [
      { label: "Ahorro costos", value: "30%" },
      { label: "Eficiencia rutas", value: "+45%" },
    ],
  },
  {
    company: "Agencia Creativa",
    category: "MARKETING & DISEÑO",
    result: "Usó APIs para saber carga real por proyecto y reasignar personal automáticamente.",
    icon: <BarChart3 className="w-8 h-8" />,
    metrics: [
      { label: "Productividad", value: "+60%" },
      { label: "Tiempo entrega", value: "-25%" },
    ],
  },
  {
    company: "Consultora Legal",
    category: "SERVICIOS PROFESIONALES",
    result: "Control de tiempos facturables mejoró 40% la rentabilidad por cliente.",
    icon: <TrendingUp className="w-8 h-8" />,
    metrics: [
      { label: "Rentabilidad", value: "+40%" },
      { label: "Tiempo facturable", value: "+35%" },
    ],
  },
]
import {
  MessageCircle,
  Target,
  Heart,
  Clock,
  CheckCircle,
  XCircle,
  Shield,
  Calendar,
  Award,
} from "lucide-react"
export const customerCycle = [
  {
    title: "Contacto",
    description: "Llega desde múltiples canales: sitio, redes, chat.",
    icon: <MessageCircle className="w-8 h-8" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Seguimiento",
    description: "Automatiza saludos, recordatorios, info clave.",
    icon: <Clock className="w-8 h-8" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Conversión",
    description: "Con herramientas conectadas que entienden sus necesidades.",
    icon: <Target className="w-8 h-8" />,
    gradient: "from-green-500 to-teal-500",
  },
  {
    title: "Fidelización",
    description: "Personaliza y cuida la experiencia posventa.",
    icon: <Heart className="w-8 h-8" />,
    gradient: "from-red-500 to-pink-500",
  },
]

export const caseStudies = [
  {
    title: "Clínica Estética",
    category: "SALUD & BELLEZA",
    result: "Redujeron cancelaciones 40% con recordatorios automáticos.",
    icon: <Calendar className="w-8 h-8" />,
    metrics: [
      { label: "Cancelaciones", value: "-40%" },
      { label: "Satisfacción", value: "+65%" },
    ],
  },
  {
    title: "Empresa de Seguros",
    category: "SERVICIOS FINANCIEROS",
    result: "Duplicaron cierres con flujo automatizado por WhatsApp.",
    icon: <Shield className="w-8 h-8" />,
    metrics: [
      { label: "Conversión", value: "+100%" },
      { label: "Tiempo respuesta", value: "-70%" },
    ],
  },
  {
    title: "Servicios Legales",
    category: "CONSULTORÍA",
    result: "Centralizaron expedientes y contactos, mejorando respuesta al cliente en un 60%.",
    icon: <Award className="w-8 h-8" />,
    metrics: [
      { label: "Tiempo respuesta", value: "+60%" },
      { label: "Organización", value: "+85%" },
    ],
  },
]

export const beforeAfter = {
  before: [
    { text: "Clientes olvidados o duplicados", icon: <XCircle className="w-5 h-5 text-red-400" /> },
    { text: "Sin trazabilidad ni historial", icon: <XCircle className="w-5 h-5 text-red-400" /> },
    { text: "Seguimiento manual y lento", icon: <XCircle className="w-5 h-5 text-red-400" /> },
    { text: "Pérdida de oportunidades", icon: <XCircle className="w-5 h-5 text-red-400" /> },
  ],
  after: [
    { text: "Centralización total del cliente", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { text: "Flujos automatizados de atención", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { text: "Medición y mejora continua", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
    { text: "Crecimiento sostenible", icon: <CheckCircle className="w-5 h-5 text-green-400" /> },
  ],
}

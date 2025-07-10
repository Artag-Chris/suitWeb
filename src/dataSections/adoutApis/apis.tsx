import {
  Zap,
  MessageSquare,
  CreditCard,
  MapPin,
  Phone,
  BarChart3,
  Shield,
  Cpu,
  Layers,
} from "lucide-react"

export const benefitsApis = [
  {
    title: "Comunicación",
    description: "APIs de WhatsApp y correo automatizado para mejorar la relación con tus clientes.",
    icon: <MessageSquare className="w-6 h-6" />,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    title: "Eficiencia",
    description: "Integración de pagos, validación de identidad y procesamiento automático.",
    icon: <Zap className="w-6 h-6" />,
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Datos",
    description: "Uso de APIs para extraer, visualizar y analizar información en tiempo real.",
    icon: <BarChart3 className="w-6 h-6" />,
    gradient: "from-purple-500 to-pink-500",
  },
  {
    title: "Escalabilidad",
    description: "Conexión con servicios en la nube y terceros sin sobrecargar tu backend.",
    icon: <Layers className="w-6 h-6" />,
    gradient: "from-green-500 to-teal-500",
  },
]

export const favoriteApis = [
  {
    name: "Meta WhatsApp API",
    description: "Para comunicación automatizada y eventos en tiempo real.",
    icon: <MessageSquare className="w-8 h-8" />,
    category: "COMUNICACIÓN",
    features: ["Mensajes automáticos", "Webhooks", "Media support"],
  },
  {
    name: "Payvalida y Goupagos",
    description: "Pagos rápidos, seguros y escalables.",
    icon: <CreditCard className="w-8 h-8" />,
    category: "PAGOS",
    features: ["PSE", "Tarjetas", "Billeteras digitales"],
  },
  {
    name: "Deceval",
    description: "Integración con servicios financieros en Colombia.",
    icon: <Shield className="w-8 h-8" />,
    category: "FINANCIERO",
    features: ["Validación", "Consultas", "Reportes"],
  },
  {
    name: "Google Maps API",
    description: "Ubicaciones, rutas y validación geográfica.",
    icon: <MapPin className="w-8 h-8" />,
    category: "GEOLOCALIZACIÓN",
    features: ["Mapas", "Rutas", "Geocoding"],
  },
  {
    name: "Twilio",
    description: "Mensajería SMS, voz y autenticación 2FA.",
    icon: <Phone className="w-8 h-8" />,
    category: "COMUNICACIÓN",
    features: ["SMS", "Voz", "2FA"],
  },
  {
    name: "API Administrativa",
    description: "Mantente siempre informado sobre tu negocio en tiempo real.",
    icon: <Cpu className="w-8 h-8" />,
    category: "MONITOREO",
    features: ["Dashboard", "Alertas", "Analytics"],
  },
]
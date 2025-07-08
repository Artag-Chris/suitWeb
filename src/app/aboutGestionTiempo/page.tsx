'use client'
import React from 'react'

const benefits = [
  {
    title: 'Decisiones inteligentes en el momento justo',
    description:
      'Accede a datos actualizados al instante y toma decisiones ágiles basadas en información confiable.',
    icon: '📊',
  },
  {
    title: 'Optimización de procesos',
    description:
      'Detecta cuellos de botella y mejora la eficiencia operativa en tiempo real con nuestra API administrativa.',
    icon: '⚙️',
  },
  {
    title: 'Ahorro en costos operativos',
    description:
      'Evita pérdidas detectando fallos y errores al instante, reduciendo hasta un 20% en gastos innecesarios.',
    icon: '💸',
  },
  {
    title: 'Experiencia del cliente mejorada',
    description:
      'Ofrece respuestas rápidas y personalizadas gracias al monitoreo continuo del flujo de trabajo.',
    icon: '🤝',
  },
]

export default function Page() {
  return (
    <>
  

      <div className="min-h-screen bg-[#0f172a] text-[#e2e8f0] font-sans pt-20">
        <section className="max-w-7xl mx-auto px-6 py-16 scroll-mt-32" id="hero">
          <h1 className="text-4xl md:text-5xl font-bold text-[#00C2B5] text-center uppercase tracking-wide">
            Control Total en Tiempo Real
          </h1>
          <p className="mt-6 text-lg md:text-xl text-center max-w-3xl mx-auto text-[#94a3b8]">
            Conecta tu operación a nuestra tecnología de vanguardia. Seguridad, datos en vivo y decisiones precisas.
          </p>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2 mt-16">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="bg-[#1e293b] border border-[#334155] p-6 hover:border-[#00C2B5] transition duration-300"
              >
                <div className="text-3xl mb-3">{benefit.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-[#f1f5f9]">{benefit.title}</h3>
                <p className="text-[#cbd5e1]">{benefit.description}</p>
              </div>
            ))}
          </div>

          {/* Contenido adicional */}
          <div className="mt-24 grid gap-8 md:grid-cols-3">
            <div className="bg-[#1e293b] p-6 border border-[#334155]">
              <h4 className="text-lg font-bold text-[#f1f5f9] mb-2">Integración Instantánea</h4>
              <p className="text-[#cbd5e1]">
                Nuestro sistema se adapta a tu infraestructura existente sin fricciones. Listo para desplegar en horas, no días.
              </p>
            </div>
            <div className="bg-[#1e293b] p-6 border border-[#334155]">
              <h4 className="text-lg font-bold text-[#f1f5f9] mb-2">Seguridad Nivel Corporativo</h4>
              <p className="text-[#cbd5e1]">
                Protegemos cada paquete de datos con cifrado avanzado. Tu información es tuya—nosotros solo te ayudamos a verla.
              </p>
            </div>
            <div className="bg-[#1e293b] p-6 border border-[#334155]">
              <h4 className="text-lg font-bold text-[#f1f5f9] mb-2">Visibilidad Total</h4>
              <p className="text-[#cbd5e1]">
                Desde cualquier dispositivo, accede a paneles dinámicos, métricas clave y alertas en tiempo real.
              </p>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h2 className="text-2xl font-bold text-[#22d3ee] uppercase">Eleva tu negocio al siguiente nivel</h2>
            <p className="mt-2 text-[#94a3b8]">
              Deja atrás lo incierto. Nuestra plataforma convierte tus datos en decisiones inteligentes.
            </p>
            <button className="mt-6 px-8 py-3 bg-[#00C2B5] text-[#0f172a] font-semibold uppercase tracking-wide hover:bg-[#0ea5e9] transition duration-300">
              Solicita una demostración
            </button>
          </div>
        </section>
      </div>
    </>
  )
}

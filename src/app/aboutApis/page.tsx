// app/api/page.tsx
'use client'

import React from 'react'

const Page = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="bg-gradient-to-b from-[#0b0b0b] to-[#1a1a1a] text-white py-32 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">
            ¿Qué es una <span className="text-yellow-400">API</span>?
          </h1>
          <p className="text-lg text-gray-300">
            Una API (Interfaz de Programación de Aplicaciones) es el puente que conecta tu sistema con herramientas externas. En lugar de reinventar la rueda, las APIs nos permiten integrar funciones listas para usar: pagos, notificaciones, validaciones, y más.
          </p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-[#121212] text-white py-20 px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-semibold mb-4 text-yellow-400">
              Potencia tu negocio
            </h2>
            <p className="text-gray-300">
              Implementamos APIs para automatizar procesos, eliminar tareas repetitivas y conectar tu sistema con herramientas como WhatsApp, Medios de pago, Meta, Google Maps y más.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 text-sm text-gray-200">
            <div>
              <h4 className="font-bold text-white mb-2">+ Comunicación</h4>
              <p>APIs de WhatsApp y correo automatizado para mejorar la relación con tus clientes.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">+ Eficiencia</h4>
              <p>Integración de pagos, validación de identidad y procesamiento automático.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">+ Datos</h4>
              <p>Uso de APIs para extraer, visualizar y analizar información en tiempo real.</p>
            </div>
            <div>
              <h4 className="font-bold text-white mb-2">+ Escalabilidad</h4>
              <p>Conexión con servicios en la nube y terceros sin sobrecargar tu backend.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAVORITAS */}
      <section className="bg-[#0e0e0e] text-white py-20 px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10 text-yellow-400">Nuestras APIs favoritas</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-left">
            {[
              { name: "Meta WhatsApp API", desc: "Para comunicación automatizada y eventos en tiempo real." },
              { name: "Payvalida y Goupagos", desc: "Pagos rápidos, seguros y escalables." },
              { name: "Deceval", desc: "Integración con servicios financieros en Colombia." },
              { name: "Google Maps API", desc: "Ubicaciones, rutas y validación geográfica." },
              { name: "Twilio", desc: "Mensajería SMS, voz y autenticación 2FA." },
              { name: "Administrativa", desc: "Mantente siempre informado sobre tu negocio en tiempo real." }
            ].map((api, i) => (
              <div key={i} className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-white font-bold">{api.name}</h3>
                <p className="text-gray-400">{api.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">¿Quieres integrar una API en tu negocio?</h2>
        <p className="mb-8 text-gray-400">Habla con nosotros y encuentra la solución que necesitas.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Contáctanos
          </a>
          <a href="#proyectos" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Ver proyectos
          </a>
        </div>
      </section>
    </div>
  )
}

export default Page

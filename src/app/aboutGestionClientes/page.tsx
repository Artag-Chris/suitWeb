'use client'

import React from 'react'

const ClientesPage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="relative py-32 px-8 text-center bg-[#0d0d0d]">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold mb-4 leading-tight">
            Tus <span className="text-yellow-400">clientes</span> no quieren esperar.
          </h1>
          <p className="text-lg text-gray-400">
            Gestionarlos bien no es solo eficiencia. Es crear relaciones reales, automatizar lo importante y estar donde te necesitan.
          </p>
        </div>
      </section>

      {/* FRASE + LÍNEA TEMPORAL */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-12 text-yellow-400">El ciclo del cliente moderno</h2>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-10 text-sm text-gray-300">
            {[
              { title: 'Contacto', desc: 'Llega desde múltiples canales: sitio, redes, chat.' },
              { title: 'Seguimiento', desc: 'Automatiza saludos, recordatorios, info clave.' },
              { title: 'Conversión', desc: 'Con herramientas conectadas que entienden sus necesidades.' },
              { title: 'Fidelización', desc: 'Personaliza y cuida la experiencia posventa.' },
            ].map((item, i) => (
              <div key={i} className="relative before:absolute before:-left-4 before:top-2 before:w-2 before:h-2 before:bg-yellow-500 before:rounded-full pl-4">
                <h3 className="font-bold text-white mb-1">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOQUES DE CASOS O "MICRO-HISTORIAS" */}
      <section className="bg-[#0e0e0e] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-14 text-yellow-400">Cuando gestionar bien hizo la diferencia</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            {[
              {
                title: 'Caso 1: Clínica Estética',
                result: 'Redujeron cancelaciones 40% con recordatorios automáticos.',
              },
              {
                title: 'Caso 2: Empresa de seguros',
                result: 'Duplicaron cierres con flujo automatizado por WhatsApp.',
              },
              {
                title: 'Caso 3: Servicios Legales',
                result: 'Centralizaron expedientes y contactos, mejorando respuesta al cliente en un 60%.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-yellow-600/30 p-6 hover:bg-[#1a1a1a] transition">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p>{item.result}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVA ANTES vs DESPUÉS */}
      <section className="bg-[#131313] py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-10">Antes vs Después de Gestionar Bien</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-left text-gray-300">
            <div className="bg-[#181818] p-6 border-l-4 border-red-500">
              <h3 className="text-white font-semibold mb-2">Antes</h3>
              <ul className="list-disc list-inside">
                <li>Clientes olvidados o duplicados</li>
                <li>Sin trazabilidad ni historial</li>
                <li>Seguimiento manual y lento</li>
              </ul>
            </div>
            <div className="bg-[#181818] p-6 border-l-4 border-green-500">
              <h3 className="text-white font-semibold mb-2">Después</h3>
              <ul className="list-disc list-inside">
                <li>Centralización total del cliente</li>
                <li>Flujos automatizados de atención</li>
                <li>Medición y mejora continua</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA DIFERENTE */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">No es CRM. Es crecimiento real.</h2>
        <p className="mb-8 text-gray-400">Creamos flujos que impactan donde importa: en tus resultados.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Hablemos
          </a>
          <a href="/api" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Ver soluciones API
          </a>
        </div>
      </section>
    </div>
  )
}

export default ClientesPage

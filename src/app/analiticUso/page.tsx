'use client'

import React from 'react'

const UsoAnaliticasPage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO corporativo */}
      <section className="py-32 px-8 bg-[#0d0d0d] text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            Las empresas que <span className="text-yellow-400">crecen</span>, se miden
          </h1>
          <p className="text-gray-400 text-lg">
            Desde startups hasta multinacionales, los datos son el idioma común que conecta áreas, mejora decisiones y multiplica resultados.
          </p>
        </div>
      </section>

      {/* INSIGHTS */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-14">
            ¿Por qué las grandes empresas invierten en analítica?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                title: 'Comunicación entre áreas',
                desc: 'Marketing, ventas, operaciones y soporte usan los mismos datos para coordinar mejor.',
              },
              {
                title: 'Toma de decisiones con evidencia',
                desc: 'Desde pricing hasta producto, los líderes analizan patrones, no opiniones.',
              },
              {
                title: 'Adaptación constante',
                desc: 'Los datos permiten probar, medir, corregir y escalar más rápido que la competencia.',
              },
            ].map((item, i) => (
              <div key={i} className="bg-[#181818] p-6 border border-yellow-600/20 hover:bg-[#1e1e1e] transition">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CITA O FRASE CLAVE */}
      <section className="bg-[#0e0e0e] py-16 px-6 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="text-xl italic text-yellow-400 mb-4">
            “No se puede escalar lo que no se controla. Y no se puede controlar lo que no se mide.”
          </p>
          <p className="text-sm text-gray-500">— Principio de gestión empresarial moderna</p>
        </div>
      </section>

      {/* COMUNICACIÓN VISUAL INTERÁREAS */}
      <section className="bg-[#131313] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-10">
            Datos que conectan equipos
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 text-left text-gray-300">
            {[
              { area: 'Marketing', info: 'Campañas medidas en tiempo real, adaptadas al rendimiento.' },
              { area: 'Ventas', info: 'Alertas de clientes activos, leads calientes, ciclos de cierre.' },
              { area: 'Operaciones', info: 'Dashboard de carga, entregas, SLA y productividad diaria.' },
              { area: 'Soporte', info: 'Tickets por tipo, urgencia y satisfacción del usuario.' },
            ].map((item, i) => (
              <div key={i} className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-white font-bold mb-1">{item.area}</h3>
                <p>{item.info}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS AVANZADOS */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-yellow-400">Cuando los datos alinean toda la empresa</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                empresa: 'Holding de retail',
                resultado: 'Logró predecir inventarios y mejorar margen logístico un 25% integrando datos de ventas + bodega.',
              },
              {
                empresa: 'Startup financiera',
                resultado: 'Relacionó comportamiento del cliente con churn, reduciendo bajas en un 40%.',
              },
              {
                empresa: 'EdTech regional',
                resultado: 'Usó dashboards cruzados para optimizar marketing, contenidos y soporte de forma sincronizada.',
              },
            ].map((item, i) => (
              <div key={i} className="border border-yellow-600/30 p-6 hover:bg-[#1a1a1a] transition">
                <h3 className="text-white font-semibold mb-2">{item.empresa}</h3>
                <p>{item.resultado}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA fuerte y con visión empresarial */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">No son solo números. Es estrategia en acción.</h2>
        <p className="mb-8 text-gray-400">¿Quieres tomar decisiones como las grandes? Empieza con tus datos.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Ver cómo aplicarlo
          </a>
          <a href="/analiticas" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Volver a analíticas
          </a>
        </div>
      </section>
    </div>
  )
}

export default UsoAnaliticasPage

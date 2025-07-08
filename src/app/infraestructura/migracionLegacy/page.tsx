'use client'

import React from 'react'

const MigracionesPage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="py-32 px-8 bg-[#0d0d0d] text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            Migramos lo viejo, <span className="text-yellow-400">sin romper nada</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Moderniza tus sistemas legacy sin perder tu operación. Migramos con estrategia, sin sobresaltos y sin perder información crítica.
          </p>
        </div>
      </section>

      {/* ¿QUÉ ES UN SISTEMA LEGACY? */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-12">
            ¿Qué es un sistema legacy?
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            Un sistema legacy es una plataforma antigua (ERP, backend, software propio) que sigue siendo crítica pero ya no escala, no se integra fácilmente, y representa un riesgo de seguridad o costos ocultos. No se trata de borrarlo, sino de migrarlo con inteligencia.
          </p>
        </div>
      </section>

      {/* BENEFICIOS DE MIGRAR */}
      <section className="bg-[#0e0e0e] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-14">
            ¿Por qué migrar sistemas legacy?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                title: 'Menos riesgo',
                desc: 'Tecnologías obsoletas aumentan los errores, fallas y pérdida de datos.',
              },
              {
                title: 'Más velocidad',
                desc: 'Procesos lentos o bloqueos técnicos frenan la operación y frustran al equipo.',
              },
              {
                title: 'Escalabilidad real',
                desc: 'Modernizar permite integrar con APIs, nubes, apps móviles y más.',
              },
              {
                title: 'Ahorro sostenido',
                desc: 'Reducimos costos de mantenimiento, licencias antiguas y hardware dedicado.',
              },
              {
                title: 'Cumplimiento normativo',
                desc: 'Sistemas actuales se adaptan a normas modernas de seguridad y protección de datos.',
              },
              {
                title: 'Visibilidad y control',
                desc: 'Accede a dashboards, reportes y métricas que antes eran imposibles.',
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

      {/* ESTRATEGIA DE MIGRACIÓN */}
      <section className="bg-[#131313] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-10">
            ¿Cómo migramos sin caos?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-gray-300">
            {[
              'Auditoría técnica',
              'Mapeo de dependencias',
              'Diseño modular progresivo',
              'Pruebas espejo antes de cortar',
            ].map((fase, i) => (
              <div key={i} className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-white font-semibold mb-2">Fase {i + 1}</h3>
                <p>{fase}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS REALES */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-yellow-400">Donde transformamos sin apagar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                empresa: 'Compañía logística',
                resultado: 'Migración completa de ERP Cobol a microservicios sin detener operaciones ni despachos.',
              },
              {
                empresa: 'Sector salud',
                resultado: 'Reescritura segura de sistema de turnos en PHP heredado hacia un API moderna con React.',
              },
              {
                empresa: 'Empresa gubernamental',
                resultado: 'Sistema de reportes migrado desde Visual Basic a app web cloud-ready sin perder histórico.',
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

      {/* CTA */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Moderniza sin parar tu negocio</h2>
        <p className="mb-8 text-gray-400">Migramos sistemas críticos con continuidad total y sin sorpresas.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Agenda diagnóstico gratuito
          </a>
          <a href="/devops" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Ver soluciones DevOps
          </a>
        </div>
      </section>
    </div>
  )
}

export default MigracionesPage

'use client'

import React from 'react'

const AnalisisDatosPage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="py-32 px-8 bg-[#0d0d0d] text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            Decisiones que <span className="text-yellow-400">tienen datos detrás</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Analizamos, estructuramos y visualizamos los datos para que entiendas qué está pasando, por qué, y qué deberías hacer.
          </p>
        </div>
      </section>

      {/* ¿POR QUÉ ANALIZAR DATOS? */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-10">
            ¿Por qué analizar tus datos?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Porque los datos ya los tienes: ventas, usuarios, visitas, campañas, procesos... pero si no los analizas, estás operando a ciegas.
            El análisis de datos convierte información cruda en decisiones estratégicas.
          </p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-[#0e0e0e] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-14">
            Lo que puedes lograr con análisis de datos
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                title: 'Detectar oportunidades',
                desc: 'Encuentra patrones de venta, hábitos de usuarios y nichos no atendidos.',
              },
              {
                title: 'Reducir costos',
                desc: 'Identifica cuellos de botella, desperdicio de recursos y procesos ineficientes.',
              },
              {
                title: 'Mejorar la conversión',
                desc: 'Analiza funnels y toma decisiones en base al comportamiento real.',
              },
              {
                title: 'Monitorear operaciones',
                desc: 'Visualiza en tiempo real métricas clave, desde ventas hasta soporte.',
              },
              {
                title: 'Anticipar riesgos',
                desc: 'Predecimos comportamientos anómalos o problemas antes de que exploten.',
              },
              {
                title: 'Tomar decisiones basadas en hechos',
                desc: 'Deja de suponer y empieza a actuar con evidencia concreta.',
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

      {/* STACK DE HERRAMIENTAS */}
      <section className="bg-[#131313] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-10">
            Herramientas que usamos en análisis de datos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-300">
            {[
              'Python',
              'Pandas',
              'Metabase',
              'Google BigQuery',
              'Looker Studio',
              'Power BI',
              'Grafana',
              'Supabase',
            ].map((tool, i) => (
              <div key={i} className="bg-[#181818] py-4 px-2 border border-yellow-500/10 hover:bg-[#1e1e1e]">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS REALES */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-yellow-400">Empresas que ahora ven con claridad</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                empresa: 'Startup logística',
                resultado: 'Identificó zonas con mayor retorno usando dashboards interactivos en tiempo real.',
              },
              {
                empresa: 'Plataforma educativa',
                resultado: 'Aumentó un 30% la retención tras analizar rutas de usuarios y rediseñar flujos.',
              },
              {
                empresa: 'Retail físico + online',
                resultado: 'Sincronizó datos de sucursales físicas y ecommerce para análisis de demanda unificado.',
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
        <h2 className="text-2xl font-bold mb-4">Tus datos ya tienen respuestas. Solo hay que hacer las preguntas correctas.</h2>
        <p className="mb-8 text-gray-400">Analizamos tu operación con ojos nuevos y herramientas reales.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Empezar análisis de datos
          </a>
          <a href="/saas" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Optimizar mi plataforma
          </a>
        </div>
      </section>
    </div>
  )
}

export default AnalisisDatosPage

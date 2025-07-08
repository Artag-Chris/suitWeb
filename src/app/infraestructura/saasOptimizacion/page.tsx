'use client'

import React from 'react'

const SaaSPage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="py-32 px-8 bg-[#0d0d0d] text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            SaaS que <span className="text-yellow-400">rinde</span>, crece y se disfruta
          </h1>
          <p className="text-gray-400 text-lg">
            Optimizamos tu plataforma como un producto: más rápida, más barata de operar y lista para escalar con tu negocio.
          </p>
        </div>
      </section>

      {/* ¿QUÉ ES OPTIMIZAR UN SAAS? */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-10">
            ¿Qué significa optimizar un SaaS?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            No se trata solo de que funcione. Se trata de que funcione bien: con menos latencia, menos gasto, mejor conversión, más retención y código que evoluciona contigo.
          </p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-[#0e0e0e] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-14">
            Beneficios directos para tu producto
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                title: 'Velocidad de carga',
                desc: 'Mejoramos la arquitectura y los assets para reducir tiempos críticos.',
              },
              {
                title: 'Menos costos en cloud',
                desc: 'Auditamos y optimizamos uso de recursos, escalado, bases y cachés.',
              },
              {
                title: 'Menor churn',
                desc: 'Corregimos puntos de fricción en UX y flujos que generan fuga de usuarios.',
              },
              {
                title: 'Escalabilidad real',
                desc: 'Migramos a arquitecturas modulares listas para crecer sin reescribir.',
              },
              {
                title: 'Control de métricas',
                desc: 'Implementamos eventos clave, analíticas, funnels y métricas de retención.',
              },
              {
                title: 'Mejor experiencia móvil',
                desc: 'UI y performance optimizada para dispositivos y conexiones reales.',
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

      {/* STACK TÉCNICO */}
      <section className="bg-[#131313] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-10">Tecnologías que optimizamos</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-300">
            {[
              'Next.js',
              'React',
              'Node.js',
              'PostgreSQL',
              'MongoDB',
              'Vercel',
              'Firebase',
              'Stripe',
            ].map((tech, i) => (
              <div key={i} className="bg-[#181818] py-4 px-2 border border-yellow-500/10 hover:bg-[#1e1e1e]">
                {tech}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE OPTIMIZACIÓN */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-yellow-400">Casos donde SaaS dejó de sufrir</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                empresa: 'Plataforma educativa',
                resultado: 'Redujimos los costos de cloud un 40% con arquitectura serverless.',
              },
              {
                empresa: 'SaaS financiero',
                resultado: 'Mejoramos la velocidad un 65% y duplicamos la retención mensual.',
              },
              {
                empresa: 'Startup B2B',
                resultado: 'Reestructuramos el backend para soportar 10x más usuarios sin downtime.',
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

      {/* CTA FINAL */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Tu SaaS no necesita más features. Necesita optimización.</h2>
        <p className="mb-8 text-gray-400">Mejoramos lo que ya tienes. Hacemos que rinda mejor. Mucho mejor.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Optimizar mi plataforma
          </a>
          <a href="/legacy" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Ver migraciones legacy
          </a>
        </div>
      </section>
    </div>
  )
}

export default SaaSPage

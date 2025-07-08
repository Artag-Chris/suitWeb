'use client'

import React from 'react'

const CloudPage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="py-32 px-8 bg-[#0d0d0d] text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            Tu infraestructura en la <span className="text-yellow-400">nube híbrida</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Máxima flexibilidad, seguridad y control. Combina lo mejor del mundo privado y público con arquitectura pensada para escalar sin límites.
          </p>
        </div>
      </section>

      {/* ¿QUÉ ES UNA NUBE HÍBRIDA? */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-12">
            ¿Qué es una nube híbrida?
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            Es una arquitectura que conecta recursos locales (on-premise), nube privada y nube pública de forma inteligente.
            Así, puedes decidir qué se ejecuta dónde, optimizando rendimiento, costos y seguridad. Es el puente entre control total y escalabilidad infinita.
          </p>
        </div>
      </section>

      {/* BENEFICIOS CLAVE */}
      <section className="bg-[#0e0e0e] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-14">
            Beneficios reales para tu operación
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                title: 'Flexibilidad total',
                desc: 'Ejecuta cargas sensibles en privado y escálalas en público según demanda.',
              },
              {
                title: 'Ahorro inteligente',
                desc: 'Evita sobredimensionar servidores. Usa recursos según uso real.',
              },
              {
                title: 'Seguridad reforzada',
                desc: 'Controlas el acceso, los entornos críticos y los datos sensibles.',
              },
              {
                title: 'Alta disponibilidad',
                desc: 'Redundancia automática y tolerancia a fallos con respaldo en múltiples entornos.',
              },
              {
                title: 'Despliegue ágil',
                desc: 'Integra CI/CD en múltiples entornos sin reescribir arquitectura.',
              },
              {
                title: 'Cumplimiento normativo',
                desc: 'Alineado con estándares como GDPR, ISO27001 o políticas locales de datos.',
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

      {/* COMPARACIÓN */}
      <section className="bg-[#131313] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-10">
            ¿Por qué no solo nube pública o privada?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-gray-300">
            {[
              {
                label: 'Nube Pública',
                items: ['Bajo costo inicial', 'Alta escalabilidad', 'Menor control'],
              },
              {
                label: 'Nube Privada',
                items: ['Alto control y seguridad', 'Costo elevado', 'Poca flexibilidad'],
              },
              {
                label: 'Nube Híbrida',
                items: ['Balance ideal', 'Control estratégico', 'Escalabilidad bajo demanda'],
              },
            ].map((col, i) => (
              <div key={i} className="border-l-4 border-yellow-500 pl-4">
                <h3 className="text-white font-semibold mb-2">{col.label}</h3>
                <ul className="list-disc list-inside text-sm">
                  {col.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-yellow-400">¿Dónde implementamos nube híbrida?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                empresa: 'Empresa de salud',
                resultado: 'Hospedaje privado de historiales + app pública para pacientes.',
              },
              {
                empresa: 'Fintech regional',
                resultado: 'Plataforma en AWS + servidor privado con cifrado local de datos.',
              },
              {
                empresa: 'Educación en línea',
                resultado: 'Nube privada para contenido y pública para streaming a escala global.',
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
        <h2 className="text-2xl font-bold mb-4">Construimos tu nube ideal. Híbrida. Segura. Escalable.</h2>
        <p className="mb-8 text-gray-400">Nuestra arquitectura híbrida te da el poder de crecer sin comprometer nada.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Agenda una consultoría
          </a>
          <a href="/analiticas" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Ver cómo lo medimos
          </a>
        </div>
      </section>
    </div>
  )
}

export default CloudPage

'use client'

import React from 'react'

const AnaliticasPage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO con enfoque emocional */}
      <section className="py-32 px-8 bg-[#0d0d0d] text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            Verlo <span className="text-yellow-400">todo</span> te da el control
          </h1>
          <p className="text-gray-400 text-lg">
            Las analíticas convierten el caos en claridad. Te permiten actuar con inteligencia y dormir tranquilo.
          </p>
        </div>
      </section>

      {/* Bloques de ventajas */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-14">
            ¿Por qué las analíticas son clave?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-300">
            {[
              {
                title: 'Anticipación',
                desc: 'Detecta cuellos de botella, baja de rendimiento o errores antes de que escalen.',
              },
              {
                title: 'Mejores decisiones',
                desc: 'Decidir con datos elimina suposiciones. Planes más sólidos y resultados medibles.',
              },
              {
                title: 'Seguridad real',
                desc: 'Audita accesos, flujos de información y puntos críticos del sistema en tiempo real.',
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

      {/* Visualización tipo dashboard simplificada */}
      <section className="bg-[#0e0e0e] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-12">
            Tu negocio como un tablero de control
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-left text-gray-300">
            {[
              { label: 'Tasa de conversión', value: '18.4%' },
              { label: 'Clientes activos', value: '230' },
              { label: 'Tickets abiertos', value: '12' },
              { label: 'Errores críticos', value: '0' },
            ].map((item, i) => (
              <div key={i} className="bg-[#181818] p-5 border-l-4 border-yellow-500">
                <h3 className="text-sm text-gray-400 mb-1">{item.label}</h3>
                <p className="text-2xl font-bold text-white">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Historias o casos de uso */}
      <section className="bg-[#131313] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-yellow-400">Donde los datos cambiaron el rumbo</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                empresa: 'Tienda ecommerce',
                resultado: 'Detectó un abandono masivo por paso de pago roto y recuperó 22% en ventas.',
              },
              {
                empresa: 'Plataforma educativa',
                resultado: 'Analizó el uso por módulo y reestructuró el curso más vendido para duplicar la retención.',
              },
              {
                empresa: 'Consultoría empresarial',
                resultado: 'Usó patrones de actividad para identificar clientes inactivos y reactivarlos con éxito.',
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

      {/* CTA potente y emocional */}
      <section className="bg-black text-white py-16 text-center">
        <h2 className="text-2xl font-bold mb-4">Los datos no mienten. Y te protegen.</h2>
        <p className="mb-8 text-gray-400">Con nuestras analíticas personalizadas, tu negocio deja de ser una caja negra.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Ver mis datos ahora
          </a>
          <a href="/recursos" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Volver a recursos
          </a>
        </div>
      </section>
    </div>
  )
}

export default AnaliticasPage

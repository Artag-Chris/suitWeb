'use client'

import React from 'react'

const MachineLearningPage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="py-32 px-8 bg-[#0d0d0d] text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            Machine Learning <span className="text-yellow-400">para decisiones más inteligentes</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Modelos que aprenden de tus datos para predecir, automatizar y detectar patrones invisibles a simple vista.
          </p>
        </div>
      </section>

      {/* ¿QUÉ ES MACHINE LEARNING? */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold text-yellow-400 mb-10">
            ¿Qué es Machine Learning?
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Es la capacidad de los sistemas para aprender de los datos, identificar patrones y tomar decisiones sin ser programados explícitamente. 
            Lo usamos para clasificar, predecir, recomendar o detectar.
          </p>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="bg-[#0e0e0e] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-14">
            Casos reales donde aplicamos Machine Learning
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                title: 'Detección de fraude',
                desc: 'Entrenamos modelos que detectan transacciones sospechosas en tiempo real.',
              },
              {
                title: 'Predicción de demanda',
                desc: 'Modelamos compras históricas para anticipar necesidades de stock y personal.',
              },
              {
                title: 'Clasificación automática',
                desc: 'Procesamos y clasificamos tickets, correos o documentos sin intervención humana.',
              },
              {
                title: 'Recomendaciones inteligentes',
                desc: 'Sistemas de recomendación personalizados para ecommerce o contenido.',
              },
              {
                title: 'Análisis de sentimientos',
                desc: 'Evaluamos opiniones de usuarios para medir percepción y satisfacción.',
              },
              {
                title: 'Optimización dinámica',
                desc: 'Algoritmos que ajustan precios, rutas o procesos según condiciones en tiempo real.',
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

      {/* STACK TECNOLÓGICO */}
      <section className="bg-[#131313] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-10">
            Tecnologías y frameworks que usamos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-sm text-gray-300">
            {[
              'Python',
              'scikit-learn',
              'TensorFlow',
              'PyTorch',
              'Pandas',
              'Jupyter',
              'Google Vertex AI',
              'AWS Sagemaker',
            ].map((tool, i) => (
              <div key={i} className="bg-[#181818] py-4 px-2 border border-yellow-500/10 hover:bg-[#1e1e1e]">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMPACTO EN NEGOCIOS */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-yellow-400">El impacto de aplicar ML en empresas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                empresa: 'Banca digital',
                resultado: 'Redujo en un 80% las revisiones manuales gracias a modelos predictivos de riesgo.',
              },
              {
                empresa: 'Comercio electrónico',
                resultado: 'Aumentó 45% el ticket promedio con motores de recomendación personalizados.',
              },
              {
                empresa: 'Logística',
                resultado: 'Optimizó rutas y redujo costos operativos al predecir carga y tráfico por zona.',
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
        <h2 className="text-2xl font-bold mb-4">Deja que tus datos aprendan por ti</h2>
        <p className="mb-8 text-gray-400">Creamos modelos de Machine Learning que impactan tu negocio desde el primer entrenamiento.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Aplicar ML en mi empresa
          </a>
          <a href="/analisis" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Ver análisis de datos
          </a>
        </div>
      </section>
    </div>
  )
}

export default MachineLearningPage

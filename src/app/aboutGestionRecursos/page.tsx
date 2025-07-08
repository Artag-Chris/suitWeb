'use client'

import React from 'react'

const RecursosPage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO VISUAL Y CATEGÓRICO */}
      <section className="py-32 px-8 bg-[#0c0c0c] text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            Gestiona <span className="text-yellow-400">recursos</span> como un sistema operativo
          </h1>
          <p className="text-gray-400 text-lg">
            Equipos, tiempo, dinero, tecnología. Cuando todo está bien asignado, la empresa avanza con precisión.
          </p>
        </div>
      </section>

      {/* BLOQUES DE RECURSOS */}
      <section className="bg-[#121212] py-24 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-12 text-yellow-400">¿Qué recursos gestionamos?</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 text-left">
            {[
              { title: 'Humanos', desc: 'Asigna talento según capacidad, tiempo y prioridad.' },
              { title: 'Tiempo', desc: 'Automatiza asignaciones, horarios y disponibilidad.' },
              { title: 'Tecnología', desc: 'Monitorea uso de APIs, servicios y herramientas clave.' },
              { title: 'Dinero', desc: 'Controla presupuestos y costos por tarea o unidad.' }
            ].map((item, i) => (
              <div key={i} className="bg-[#181818] p-6 border border-yellow-500/20 hover:bg-[#1e1e1e] transition">
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* COMPARATIVA: DESORDEN VS GESTIÓN */}
      <section className="bg-[#0e0e0e] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-10">Cuando no se gestionan recursos...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 text-left">
            <div className="border-l-4 border-red-500 pl-6">
              <h3 className="text-white font-semibold mb-2">Desorden</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Duplicación de tareas</li>
                <li>Sobre carga de personal</li>
                <li>Uso ineficiente de presupuesto</li>
                <li>Desalineación entre áreas</li>
              </ul>
            </div>
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-white font-semibold mb-2">Gestión inteligente</h3>
              <ul className="list-disc list-inside text-gray-400">
                <li>Asignación dinámica por prioridades</li>
                <li>Reportes en tiempo real</li>
                <li>Presupuesto optimizado</li>
                <li>Colaboración fluida entre equipos</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CASOS DE APLICACIÓN */}
      <section className="bg-[#131313] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-yellow-400">Donde la gestión hizo escalar</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                empresa: 'Startup de logística',
                resultado: 'Reorganizó rutas y turnos, ahorrando un 30% de costos mensuales.',
              },
              {
                empresa: 'Agencia creativa',
                resultado: 'Usó APIs para saber carga real por proyecto y reasignar personal automáticamente.',
              },
              {
                empresa: 'Consultora legal',
                resultado: 'Control de tiempos facturables mejoró 40% la rentabilidad por cliente.',
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
        <h2 className="text-2xl font-bold mb-4">No es control. Es visión de futuro.</h2>
        <p className="mb-8 text-gray-400">Gestionar recursos no es frenar, es acelerar con inteligencia.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Implementar gestión inteligente
          </a>
          <a href="/clientes" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Ver cómo gestionamos clientes
          </a>
        </div>
      </section>
    </div>
  )
}

export default RecursosPage

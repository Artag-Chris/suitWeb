'use client'

import React from 'react'

const DevOpsPage = () => {
  return (
    <div className="bg-[#0b0b0b] text-white min-h-screen font-sans">
      {/* HERO */}
      <section className="py-32 px-8 bg-[#0d0d0d] text-center">
        <div className="max-w-5xl mx-auto">
          <h1 className="text-4xl font-extrabold leading-tight mb-6">
            DevOps: <span className="text-yellow-400">velocidad</span> sin sacrificar calidad
          </h1>
          <p className="text-gray-400 text-lg">
            Integra desarrollo, operaciones y automatización para lanzar más rápido, con menos errores y más confianza.
          </p>
        </div>
      </section>

      {/* ¿QUÉ ES DEVOPS? */}
      <section className="bg-[#121212] py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-yellow-400 text-center mb-12">
            ¿Qué es DevOps?
          </h2>
          <p className="text-gray-300 text-center max-w-3xl mx-auto">
            DevOps es la combinación de prácticas, herramientas y cultura para automatizar y optimizar los procesos entre desarrollo y operaciones.
            Su objetivo: entregar software confiable y de forma continua.
          </p>
        </div>
      </section>

      {/* BENEFICIOS */}
      <section className="bg-[#0e0e0e] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-14">
            DevOps cambia las reglas del juego
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                title: 'Despliegues rápidos y seguros',
                desc: 'Entrega continua (CI/CD) con rollback automáticos en segundos.',
              },
              {
                title: 'Menos errores en producción',
                desc: 'Automatización de pruebas, análisis estático y validaciones en cada commit.',
              },
              {
                title: 'Escalabilidad sin fricción',
                desc: 'Infraestructura como código (IaC) y entornos replicables.',
              },
              {
                title: 'Colaboración real',
                desc: 'Menos tickets, más flujo. Desarrollo y operaciones trabajan en un mismo ritmo.',
              },
              {
                title: 'Visibilidad total',
                desc: 'Monitoreo continuo, alertas automáticas y dashboards en tiempo real.',
              },
              {
                title: 'Tiempo de recuperación reducido',
                desc: 'Cuando algo falla, se detecta y se corrige en minutos, no en días.',
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
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-2xl font-bold text-yellow-400 mb-12">
            Tecnologías que usamos
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-gray-300 text-sm">
            {[
              'GitHub Actions',
              'Docker',
              'Kubernetes',
              'Terraform',
              'Jenkins',
              'Prometheus',
              'Grafana',
              'Ansible',
            ].map((tool, i) => (
              <div key={i} className="bg-[#181818] py-4 px-2 border border-yellow-500/10 hover:bg-[#1e1e1e]">
                {tool}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CASOS DE USO */}
      <section className="bg-[#0d0d0d] py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-14 text-yellow-400">Cómo DevOps mejora equipos reales</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left text-gray-300">
            {[
              {
                empresa: 'Ecommerce de alto tráfico',
                resultado: 'Pasó de 1 despliegue semanal a 10 diarios sin afectar disponibilidad.',
              },
              {
                empresa: 'Startup fintech',
                resultado: 'Automatizó validaciones, disminuyendo errores humanos en un 70%.',
              },
              {
                empresa: 'Corporativo B2B',
                resultado: 'Redujo tiempos de recuperación por incidentes críticos a menos de 5 min.',
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
        <h2 className="text-2xl font-bold mb-4">Automatiza. Escala. Entrega mejor.</h2>
        <p className="mb-8 text-gray-400">Implementamos pipelines DevOps que se ajustan a tu flujo, equipo y objetivos.</p>
        <div className="flex justify-center gap-4">
          <a href="#contacto" className="bg-yellow-500 hover:bg-yellow-600 text-black px-6 py-3 font-semibold transition">
            Quiero DevOps en mi empresa
          </a>
          <a href="/cloud" className="border border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 transition">
            Ver infraestructura en la nube
          </a>
        </div>
      </section>
    </div>
  )
}

export default DevOpsPage

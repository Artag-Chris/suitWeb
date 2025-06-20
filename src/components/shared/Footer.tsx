import React from 'react'

function Footer() {
  return (
    <>
      <footer className="bg-black text-white py-24 px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-16">
            <div className="space-y-8">
              <span className="text-3xl font-bold tracking-tight">FINOVA</span>
              <p className="text-gray-400 font-light leading-relaxed">
                Soluciones tecnológicas que impulsan el crecimiento de tu negocio.
              </p>
            </div>
            <div className="space-y-8">
              <h4 className="text-xl font-semibold tracking-wide">Servicios</h4>
              <div className="space-y-4 text-gray-400 font-light">
                <div>Desarrollo Web</div>
                <div>Bases de Datos</div>
                <div>Hosting Seguro</div>
                <div>Consultoría Tech</div>
              </div>
            </div>
            <div className="space-y-8">
              <h4 className="text-xl font-semibold tracking-wide">Empresa</h4>
              <div className="space-y-4 text-gray-400 font-light">
                <div>Sobre Nosotros</div>
                <div>Equipo</div>
                <div>Casos de Éxito</div>
                <div>Blog</div>
              </div>
            </div>
            <div className="space-y-8">
              <h4 className="text-xl font-semibold tracking-wide">Contacto</h4>
              <div className="space-y-4 text-gray-400 font-light">
                <div>hello@finova.tech</div>
                <div>+1 (555) 123-4567</div>
                <div>LinkedIn</div>
                <div>GitHub</div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-20 pt-12 text-center text-gray-400 font-light">
            <p>&copy; {new Date().getFullYear()} Finova Tech. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
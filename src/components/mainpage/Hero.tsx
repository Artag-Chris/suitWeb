"use client"
import { ArrowRight } from "lucide-react"
import { useRef, Suspense } from "react"
import InteractiveVideoManager from "../shared/video/InteractiveVideoManager"
import ParticleBackground from "../microComponents/ParticleBackground"

function Hero() {
  const heroRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)

  return (
    <>
      <section
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative overflow-hidden bg-black"
      >
        <ParticleBackground />
        {/* Punto de referencia PARA EL NAVBAR */}
        <div className="absolute top-0 h-[50vh] w-full pointer-events-none z-30" />

        {/* Canvas para el fondo animado estilo James Bond */}
        <canvas ref={canvasRef} className="absolute inset-0 w-full h-full z-0" aria-hidden="true" />

        {/* Efecto de luz pulsante */}
        <div className="absolute inset-0 z-1 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="animate-pulse-slow w-64 h-64 rounded-full bg-gradient-to-r from-[#d4af3780] to-[#0d47a180] blur-[100px] opacity-30"></div>
          </div>
        </div>

        {/* Patrón sutil de fibra de carbono */}
        <div className="absolute inset-0 z-2 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4MCIgaGVpZ2h0PSI4MCIgdmlld0JveD0iMCAwIDgwIDgwIj48cmVjdCB3aWR0aD0iODAiIGhlaWdodD0iODAiIGZpbGw9IiMwMDAiLz48cGF0aCBkPSJNMCAwaDQwdjQwSDB6TTQwIDQwaDQwdjQwSDQweiIgZmlsbC1vcGFjaXR5PSIuMDQiIGZpbGw9IiNmZmYiLz48L3N2Zz4=')]"></div>

        {/* Gradientes sutiles para agregar profundidad */}
        <div className="absolute inset-0 z-5">
          <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#d4af3705] to-transparent"></div>
          <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-[#0d47a105] to-transparent"></div>
          <div className="absolute top-0 left-0 w-1/3 h-full bg-gradient-to-r from-[#d4af3708] to-transparent"></div>
          <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#0d47a108] to-transparent"></div>
        </div>

        <div className="max-w-7xl mx-auto text-center relative z-10 px-8">
          <div className="space-y-16">
            <div className="space-y-12">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-white">
                <span className="block font-light">Transformamos</span>
                <span className="block mt-4 bg-clip-text text-transparent bg-gradient-to-r from-[#d4af37] via-[#c0c0c0] to-[#d4af37]">
                  visiones en realidades
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-300 leading-relaxed max-w-4xl mx-auto font-light tracking-wide">
                Convierte tus ideas en herramientas que transforman. Creamos soluciones digitales personalizadas que te ahorran tiempo, eliminan cuellos de botella y aceleran tu crecimiento. Si puedes soñarlo, podemos desarrollarlo
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {/* Botón principal estilo referencia */}
              <button className="group relative px-8 py-4 bg-gradient-to-r from-[#d4af37] to-[#b8860b] text-black font-bold rounded-lg text-lg hover:shadow-2xl hover:shadow-[#d4af37]/50 transition-all duration-300 transform hover:scale-105 overflow-hidden">
                <span className="relative z-10 flex items-center justify-center">
                  Iniciar Proyecto
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-slate-600/20 to-slate-500/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>

              {/* Botón secundario estilo referencia */}
              <button className="group px-8 py-4 border-2 border-[#d4af37]/50 text-[#d4af37] font-semibold rounded-lg text-lg hover:bg-[#d4af37]/10 transition-all duration-300 flex items-center justify-center relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center text-white">
                  Ver Servicios
                  <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
                </span>
                <div className="absolute inset-0 bg-white/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </button>
            </div>
          </div>

        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#d4af37]/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#d4af37] rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
        <Suspense
          fallback={
            <div className="absolute inset-0 flex items-center justify-center z-10">
              <span className="text-white">Cargando video...</span>
            </div>
          }
        >
          <InteractiveVideoManager position="middle-left" />
        </Suspense>
      </section>
    </>
  )
}

export default Hero

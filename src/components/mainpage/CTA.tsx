import { ArrowRight } from 'lucide-react'
import React from 'react'
import { Button } from '../ui/button'

function CTA() {
    return (
        <>
            <section className="py-40 px-8  backdrop-blur-md">
                <div className="max-w-5xl mx-auto text-center">
                    <div className="space-y-16">
                        <h2 className="text-6xl font-bold tracking-tight text-white">Transformamos ideas en realidad digital</h2>
                        <p className="text-xl text-gray-600 leading-relaxed font-light max-w-3xl mx-auto">
                            Cada línea de código, cada decisión de diseño, cada detalle técnico está pensado para impulsar el
                            crecimiento de tu negocio.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-8 justify-center">
                            <Button className="bg-black text-white font-semibold px-16 py-6 text-lg hover:bg-gray-800 transition-all duration-300">
                                Comenzar Proyecto
                                <ArrowRight className="w-5 h-5 ml-4" />
                            </Button>
                            <Button
                                variant="outline"
                                className="border-gray-300 text-gray-700 hover:text-black hover:border-black px-16 py-6 text-lg bg-white transition-all duration-300"
                            >
                                Agendar Consulta
                            </Button>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default CTA
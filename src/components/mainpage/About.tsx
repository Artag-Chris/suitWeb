import React from 'react'
import { Button } from '../ui/button'

function About() {
    return (
        <>
            <section id="nosotros" className="py-40 px-8 bg-black text-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-24 items-center">
                        <div className="space-y-12">
                            <div className="space-y-8">
                                <h2 className="text-6xl font-bold tracking-tight">Nosotros</h2>
                                <p className="text-xl text-gray-300 leading-relaxed font-light">
                                    Somos profesionales apasionados por la tecnología, comprometidos con la excelencia y dedicados a
                                    transformar ideas en soluciones digitales excepcionales.
                                </p>
                            </div>
                            <div className="space-y-8">
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold text-white">Experiencia</h4>
                                    <p className="text-gray-300 font-light leading-relaxed">
                                        Más de 10 años desarrollando soluciones tecnológicas para empresas de todos los tamaños.
                                    </p>
                                </div>
                                <div className="space-y-4">
                                    <h4 className="text-2xl font-semibold text-white">Compromiso</h4>
                                    <p className="text-gray-300 font-light leading-relaxed">
                                        Cada proyecto es único y merece nuestra atención completa y dedicación profesional.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="bg-gray-900 p-16 text-center">
                            <div className="space-y-8">
                                <h3 className="text-4xl font-bold text-white">¿Listo para comenzar?</h3>
                                <p className="text-gray-300 font-light text-lg">
                                    Conversemos sobre tu proyecto y descubre cómo podemos ayudarte.
                                </p>
                                <Button className="bg-white text-black font-semibold px-12 py-4 text-lg hover:bg-gray-100 transition-all duration-300">
                                    Contactar Ahora
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default About
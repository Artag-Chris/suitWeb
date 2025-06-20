import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'

function Navbar() {
    return (
        <>
            {/* Header */}
            <header className="border-b border-gray-200 bg-white/95 backdrop-blur-sm fixed w-full z-50">
                <div className="max-w-7xl mx-auto px-8 py-6">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center">
                            <span className="text-3xl font-bold tracking-tight text-black">FINOVA</span>
                        </div>
                        <nav className="hidden md:flex items-center space-x-16">
                            <Link
                                href="#inicio"
                                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium tracking-wide"
                            >
                                Inicio
                            </Link>
                            <Link
                                href="#servicios"
                                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium tracking-wide"
                            >
                                Servicios
                            </Link>
                            <Link
                                href="#nosotros"
                                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium tracking-wide"
                            >
                                Nosotros
                            </Link>
                            <Link
                                href="#contacto"
                                className="text-gray-600 hover:text-black transition-colors duration-300 font-medium tracking-wide"
                            >
                                Contacto
                            </Link>
                        </nav>
                        <Button className="bg-black text-white font-semibold px-8 py-3 hover:bg-gray-800 transition-all duration-300">
                            Comenzar Proyecto
                        </Button>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar
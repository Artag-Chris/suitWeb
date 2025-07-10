'use client'
import React, { useState } from 'react';
import { Button } from '../ui/button';
import { teamMembers } from '@/interfaces/about/aboutUsInterAnddata';
import Image from 'next/image';

function About() {
    const [activeMember, setActiveMember] = useState<number | null>(null);

    return (
        <section id="nosotros" className="py-40 px-8  text-white relative overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#0d0d0d] to-transparent z-0"></div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#0d0d0d] to-transparent z-0"></div>
            <div className="absolute top-1/3 right-0 w-64 h-64 rounded-full bg-[#00C2B5] blur-[100px] opacity-10 z-0"></div>

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="text-center mb-24">
                    <h2 className="text-6xl font-bold tracking-tight mb-6">Equipo de Élite</h2>
                    <div className="h-1 w-32 bg-[#00C2B5] mx-auto mb-8"></div>
                    <p className="text-xl text-gray-300 leading-relaxed max-w-3xl mx-auto">
                        Especialistas de primer nivel combinando tecnología sofisticada con ejecución impecable
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] border border-gray-800 rounded-xl p-8 transform transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl cursor-pointer"
                            style={{ boxShadow: `0 10px 30px -15px ${member.color}20` }}
                            onClick={() => setActiveMember(index)}
                        >
                            <div className="flex items-center mb-6">
                                <div
                                    className="relative rounded-full w-16 h-16 flex items-center justify-center mr-4 overflow-hidden border-2"
                                    style={{ borderColor: member.color }}
                                >
                                    <Image
                                        src={member.avatar}
                                        alt={member.name}
                                        fill
                                        className="object-cover"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <p
                                        className="font-light italic"
                                        style={{ color: member.color }}
                                    >
                                        {member.title}
                                    </p>
                                </div>
                            </div>
                            <p className="text-gray-300 border-t border-gray-800 pt-5">
                                {member.description}
                            </p>
                            <div className="flex mt-6">
                                <div className="w-3 h-3 rounded-full bg-green-500 mr-2 animate-pulse"></div>
                                <span className="text-xs text-gray-400">Disponible para nuevos proyectos</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="bg-gradient-to-r from-[#00C2B5] to-[#007a70] rounded-xl p-10 max-w-4xl mx-auto relative overflow-hidden">
                    <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-white opacity-5"></div>
                    <div className="flex flex-col md:flex-row items-center justify-between relative z-10">
                        <div className="text-center md:text-left mb-8 md:mb-0">
                            <h3 className="text-3xl font-bold mb-2">¿Listo para comenzar?</h3>
                            <p className="text-gray-800 font-light">
                                Conversemos sobre tu proyecto y descubre cómo podemos ayudarte.
                            </p>
                        </div>
                        <Button className="bg-black text-white font-semibold px-12 py-6 text-lg hover:bg-gray-900 transition-all duration-300 border border-gray-700">
                            Contactar Ahora
                        </Button>
                    </div>
                </div>
            </div>

            {/* Member Detail Modal */}
            {activeMember !== null && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
                    onClick={() => setActiveMember(null)}
                >
                    <div
                        className="bg-gradient-to-br from-[#0d0d0d] to-[#1a1a1a] border border-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-8">
                            <div className="flex justify-between items-start mb-8">
                                <div className="flex items-center">
                                    <div
                                        className="relative rounded-full w-24 h-24 flex items-center justify-center mr-6 overflow-hidden border-2"
                                        style={{ borderColor: teamMembers[activeMember].color }}
                                    >

                                        <Image
                                            src={teamMembers[activeMember].avatar}
                                            alt={teamMembers[activeMember].name}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50"></div>
                                    </div>
                                    <div>
                                        <h2 className="text-3xl font-bold">{teamMembers[activeMember].name}</h2>
                                        <p
                                            className="text-xl font-light italic"
                                            style={{ color: teamMembers[activeMember].color }}
                                        >
                                            {teamMembers[activeMember].title}
                                        </p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setActiveMember(null)}
                                    className="text-gray-500 hover:text-white text-3xl"
                                >
                                    &times;
                                </button>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                                <div>
                                    <h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">
                                        Biografía Profesional
                                    </h3>
                                    <p className="text-gray-300 leading-relaxed">
                                        {teamMembers[activeMember].bio}
                                    </p>
                                </div>

                                <div>
                                    <h3 className="text-xl font-semibold mb-4 border-b border-gray-800 pb-2">
                                        Especialidades Técnicas
                                    </h3>
                                    <div className="flex flex-wrap gap-3">
                                        {teamMembers[activeMember].skills.map((skill, index) => (
                                            <span
                                                key={index}
                                                className="px-4 py-2 bg-gray-900 rounded-full text-sm"
                                                style={{
                                                    border: `1px solid ${teamMembers[activeMember].color}20`,
                                                    color: teamMembers[activeMember].color
                                                }}
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl font-semibold mt-8 mb-4 border-b border-gray-800 pb-2">
                                        Certificaciones
                                    </h3>
                                    <ul className="text-gray-300 space-y-2">
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#00C2B5] mr-3"></span>
                                            {teamMembers[activeMember].title} Professional
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#00C2B5] mr-3"></span>
                                            Cloud Security Specialist
                                        </li>
                                        <li className="flex items-center">
                                            <span className="w-2 h-2 rounded-full bg-[#00C2B5] mr-3"></span>
                                            Advanced Architecture Design
                                        </li>
                                    </ul>
                                </div>
                            </div>

                            <div className="mt-10 pt-6 border-t border-gray-800 flex justify-end">
                                <Button
                                    className="bg-[#00C2B5] text-white font-semibold px-8 py-4 hover:bg-[#00a99e] transition-colors"
                                >
                                    Contactar a {teamMembers[activeMember].name.split(' ')[0]}
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default About;
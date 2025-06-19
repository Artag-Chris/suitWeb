"use client"

import { Brain, Code2, Database, Shield } from "lucide-react"
import type React from "react"
import { useEffect, useState } from "react"

const Team: React.FC = () => {
  const [activeMembers, setActiveMembers] = useState<number[]>([])

  const teamMembers = [
    {
      name: "Alex Chen",
      role: "AI Architecture Lead",
      avatar: "🤖",
      status: "Optimizing neural networks",
      commits: 47,
      icon: Brain,
      specialty: "Machine Learning & AI Systems",
    },
    {
      name: "Sarah Kim",
      role: "Full-Stack Ninja",
      avatar: "👩‍💻",
      status: "Deploying microservices",
      commits: 32,
      icon: Code2,
      specialty: "React, Node.js & Cloud Architecture",
    },
    {
      name: "Marcus Torres",
      role: "DevOps Master",
      avatar: "⚡",
      status: "Scaling infrastructure",
      commits: 28,
      icon: Database,
      specialty: "Kubernetes, Docker & CI/CD",
    },
    {
      name: "Elena Volkov",
      role: "Security Expert",
      avatar: "🛡️",
      status: "Securing endpoints",
      commits: 19,
      icon: Shield,
      specialty: "Cybersecurity & Penetration Testing",
    },
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveMembers((prev) => {
        const newActive = [...prev]
        const randomIndex = Math.floor(Math.random() * teamMembers.length)

        if (newActive.includes(randomIndex)) {
          return newActive.filter((i) => i !== randomIndex)
        } else {
          return [...newActive, randomIndex].slice(-2) // Keep max 2 active
        }
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Meet Our <span className="text-primary-accent text-neon">Digital</span> Architects
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            AI-enhanced developers working 24/7 to bring your vision to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => {
            const isActive = activeMembers.includes(index)
            const IconComponent = member.icon

            return (
              <div
                key={member.name}
                className={`glass-card p-6 text-center transition-all duration-500 ${
                  isActive ? "animate-pulse-glow scale-105" : ""
                }`}
              >
                {/* Avatar with neural animation */}
                <div className="relative mb-6">
                  <div
                    className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-primary-accent to-primary-purple flex items-center justify-center text-4xl transition-all duration-300 ${
                      isActive ? "animate-hologram" : ""
                    }`}
                  >
                    {member.avatar}
                  </div>

                  {/* Neural network overlay */}
                  {isActive && (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-32 h-32 border-2 border-primary-cyber/30 rounded-full animate-ping"></div>
                      <div className="absolute w-28 h-28 border border-primary-accent/50 rounded-full animate-spin"></div>
                    </div>
                  )}
                </div>

                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-primary-accent font-semibold mb-4">{member.role}</p>

                {/* Real-time activity */}
                <div className="mb-4">
                  <div
                    className={`flex items-center justify-center space-x-2 mb-2 ${
                      isActive ? "text-primary-cyber" : "text-text-secondary"
                    }`}
                  >
                    <div
                      className={`w-2 h-2 rounded-full ${
                        isActive ? "bg-primary-cyber animate-pulse" : "bg-text-secondary"
                      }`}
                    ></div>
                    <span className="text-sm">{member.status}</span>
                  </div>

                  <div className="flex items-center justify-center space-x-4 text-sm">
                    <span className="text-text-secondary">
                      <IconComponent className="w-4 h-4 inline mr-1" />
                      {member.commits} commits today
                    </span>
                  </div>
                </div>

                {/* Specialty */}
                <div className="text-xs text-text-secondary bg-primary-dark/50 rounded-lg p-3">{member.specialty}</div>

                {/* Neural activity indicator */}
                <div className="mt-4 h-2 bg-primary-dark rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r from-primary-accent to-primary-cyber transition-all duration-1000 ${
                      isActive ? "w-full" : "w-3/4"
                    }`}
                    style={{
                      animation: isActive ? "pulse 1s ease-in-out infinite" : "none",
                    }}
                  ></div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Team Stats */}
        <div className="mt-16 glass-card p-8 max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-3xl font-bold text-primary-cyber mb-2">500+</div>
              <div className="text-text-secondary">Projects Delivered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-accent mb-2">15</div>
              <div className="text-text-secondary">Years Combined</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-purple mb-2">24/7</div>
              <div className="text-text-secondary">AI Assistance</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-primary-cyber mb-2">∞</div>
              <div className="text-text-secondary">Possibilities</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Team

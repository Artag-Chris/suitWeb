"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { Code, Zap, Globe } from "lucide-react"
import ParticleSystem from "../effects/particle-system"

const Hero: React.FC = () => {
  const [currentCode, setCurrentCode] = useState(0)

  const codeSnippets = [
    'deployProject({ client: "Future Corp", tech: ["AI", "Web3"] })',
    'optimizePerformance({ latency: "99.9%", uptime: "100%" })',
    'scaleInfrastructure({ traffic: "10x", response: "instant" })',
  ]

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCode((prev) => (prev + 1) % codeSnippets.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center gradient-bg overflow-hidden">
      <ParticleSystem />

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          <div className="mb-8">
            <h1 className="text-6xl md:text-8xl font-bold mb-6 animate-neon-pulse">
              We Build
              <span className="block text-primary-accent text-neon">Digital DNA</span>
            </h1>
            <p className="text-xl md:text-2xl text-text-secondary mb-8 animate-float">
              Transforming ideas into intelligent, scalable digital ecosystems
            </p>
          </div>

          <div className="mb-12">
            <div className="code-block max-w-2xl mx-auto mb-8">
              <div className="flex items-center mb-2">
                <div className="flex space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <span className="ml-4 text-text-secondary text-sm">console.log()</span>
              </div>
              <div className="text-primary-cyber font-code">{codeSnippets[currentCode]}</div>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6 mb-16">
            <button className="neon-btn group">
              <span className="flex items-center">
                <Zap className="w-5 h-5 mr-2" />
                Launch Project
              </span>
            </button>
            <button className="glass-card px-8 py-4 hover:bg-primary-surface/80">
              <span className="flex items-center text-text-primary">
                <Code className="w-5 h-5 mr-2" />
                View Tech Stack
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-6 holographic-border">
              <Globe className="w-12 h-12 text-primary-accent mb-4 mx-auto animate-pulse-glow" />
              <h3 className="text-xl font-bold mb-2">Global Infrastructure</h3>
              <p className="text-text-secondary">99.9% uptime across 15 data centers worldwide</p>
            </div>
            <div className="glass-card p-6 holographic-border">
              <Code className="w-12 h-12 text-primary-purple mb-4 mx-auto animate-pulse-glow" />
              <h3 className="text-xl font-bold mb-2">AI-Powered Development</h3>
              <p className="text-text-secondary">Machine learning optimizes every line of code</p>
            </div>
            <div className="glass-card p-6 holographic-border">
              <Zap className="w-12 h-12 text-primary-cyber mb-4 mx-auto animate-pulse-glow" />
              <h3 className="text-xl font-bold mb-2">Lightning Fast</h3>
              <p className="text-text-secondary">Sub-100ms response times guaranteed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

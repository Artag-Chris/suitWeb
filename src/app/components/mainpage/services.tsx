"use client"

import type React from "react"
import { useState } from "react"
import { Globe, Smartphone, Database, Shield, Brain, Cloud } from "lucide-react"

const Services: React.FC = () => {
  const [activeService, setActiveService] = useState<number | null>(null)

  const services = [
    {
      icon: Globe,
      title: "Web Development",
      description: "Full-stack web applications with cutting-edge technologies",
      features: ["React/Next.js", "Node.js/Python", "Real-time features", "PWA capabilities"],
      color: "primary-accent",
      demo: "Interactive UI components with micro-animations",
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description: "Native and cross-platform mobile solutions",
      features: ["React Native", "Flutter", "iOS/Android", "Cross-platform"],
      color: "primary-purple",
      demo: "Responsive design that adapts to any screen",
    },
    {
      icon: Cloud,
      title: "Cloud Hosting",
      description: "Scalable cloud infrastructure and deployment",
      features: ["AWS/Azure/GCP", "Auto-scaling", "Load balancing", "99.9% uptime"],
      color: "primary-cyber",
      demo: "Global CDN with edge computing capabilities",
    },
    {
      icon: Brain,
      title: "AI Integration",
      description: "Machine learning and AI-powered features",
      features: ["Natural Language Processing", "Computer Vision", "Predictive Analytics", "Automation"],
      color: "primary-accent",
      demo: "Smart algorithms that learn from your data",
    },
    {
      icon: Shield,
      title: "Cybersecurity",
      description: "Enterprise-grade security solutions",
      features: ["Penetration Testing", "Compliance", "Threat Detection", "Data Encryption"],
      color: "primary-purple",
      demo: "Multi-layered security protocols in action",
    },
    {
      icon: Database,
      title: "Data Solutions",
      description: "Big data processing and analytics platforms",
      features: ["Data Warehousing", "Real-time Analytics", "Machine Learning", "Visualization"],
      color: "primary-cyber",
      demo: "Real-time data processing and insights",
    },
  ]

  return (
    <section className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Our 
            <span className="block text-[#00E0FF] font-bold" style={{ textShadow: "0 0 20px #00E0FF" }}>
              Digital
            </span>
             Services
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            End-to-end solutions powered by artificial intelligence and cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {services.map((service, index) => {
            const IconComponent = service.icon
            const isActive = activeService === index

            return (
              <div
                key={service.title}
                className={`glass-card p-8 cursor-pointer transition-all duration-500 group ${
                  isActive ? "scale-105 animate-pulse-glow" : ""
                }`}
                onMouseEnter={() => setActiveService(index)}
                onMouseLeave={() => setActiveService(null)}
              >
                {/* Service Icon */}
                <div className="mb-6">
                  <div
                    className={`w-16 h-16 rounded-lg bg-gradient-to-r from-primary-accent to-primary-purple/50 flex items-center justify-center mb-4 group-hover:animate-hologram`}
                  >
                    <IconComponent className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{service.title}</h3>
                  <p className="text-text-secondary mb-6">{service.description}</p>
                </div>

                {/* Features List */}
                <div className="space-y-3 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <div className={`w-2 h-2 rounded-full bg-primary-accent animate-pulse`}></div>
                      <span className="text-sm text-text-secondary">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Interactive Demo Hint */}
                {isActive && (
                  <div className="border-t border-primary-accent/20 pt-4 animate-float">
                    <div className="code-block text-xs">
                      <span className="text-primary-cyber">// Live Demo:</span>
                      <br />
                      <span className="text-text-secondary">{service.demo}</span>
                    </div>
                  </div>
                )}

                {/* Hover Effect Indicator */}
                <div className="mt-6">
                  <button className="w-full py-3 border border-primary-accent/30 rounded-lg text-primary-accent font-semibold transition-all duration-300 hover:bg-primary-accent hover:text-primary-dark">
                    Explore Service
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Timeline */}
        <div className="mt-20">
          <h3 className="text-3xl font-bold text-center mb-12">
            Our <span className="text-primary-accent">Development</span> Process
          </h3>

          <div className="flex flex-col md:flex-row justify-between items-center max-w-5xl mx-auto">
            {[
              { step: "01", title: "Discovery", desc: "AI-powered requirement analysis" },
              { step: "02", title: "Design", desc: "Futuristic UI/UX prototyping" },
              { step: "03", title: "Develop", desc: "Agile development with CI/CD" },
              { step: "04", title: "Deploy", desc: "Cloud deployment with monitoring" },
              { step: "05", title: "Optimize", desc: "Continuous AI-driven improvements" },
            ].map((phase, index) => (
              <div key={phase.step} className="flex flex-col items-center mb-8 md:mb-0">
                <div className="glass-card w-20 h-20 rounded-full flex items-center justify-center mb-4 animate-pulse-glow">
                  <span className="text-2xl font-bold text-primary-accent">{phase.step}</span>
                </div>
                <h4 className="text-lg font-bold mb-2">{phase.title}</h4>
                <p className="text-sm text-text-secondary text-center max-w-32">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services

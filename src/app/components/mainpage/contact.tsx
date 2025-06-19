"use client"

import type React from "react"
import { useState } from "react"
import { Send, MessageCircle, Phone, Mail, MapPin, Zap } from "lucide-react"

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "web-development",
    budget: "$10k-50k",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      alert("Message sent! Our AI will analyze your requirements and get back to you within 24 hours.")
    }, 2000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section className="py-24 gradient-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold mb-6">
            Ready to 
            <span className="block text-[#00E0FF] font-bold" style={{ textShadow: "0 0 20px #00E0FF" }}>
              Transform
              </span>
             Your Idea?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto">
            {"Let's build something extraordinary together. Our AI will analyze your project requirements instantly."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-2">Start Your Project</h3>
              <p className="text-text-secondary">Fill out the form and our AI will create a custom proposal for you.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Your Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-accent/30 rounded-lg focus:border-primary-accent focus:outline-none transition-colors"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-accent/30 rounded-lg focus:border-primary-accent focus:outline-none transition-colors"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold mb-2">Project Type</label>
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-accent/30 rounded-lg focus:border-primary-accent focus:outline-none transition-colors"
                  >
                    <option value="web-development">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="ai-integration">AI Integration</option>
                    <option value="cloud-hosting">Cloud Hosting</option>
                    <option value="full-stack">Full Stack Solution</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold mb-2">Budget Range</label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-accent/30 rounded-lg focus:border-primary-accent focus:outline-none transition-colors"
                  >
                    <option value="$5k-10k">$5k - $10k</option>
                    <option value="$10k-50k">$10k - $50k</option>
                    <option value="$50k-100k">$50k - $100k</option>
                    <option value="$100k+">$100k+</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">Project Description</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 bg-primary-dark/50 border border-primary-accent/30 rounded-lg focus:border-primary-accent focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your vision, goals, and any specific requirements..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`neon-btn w-full ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
              >
                <span className="flex items-center justify-center">
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin w-5 h-5 border-2 border-primary-dark border-t-transparent rounded-full mr-2"></div>
                      AI Processing...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Launch Project
                    </>
                  )}
                </span>
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Get In Touch</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-accent/20 rounded-lg flex items-center justify-center">
                    <Mail className="w-6 h-6 text-primary-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-text-secondary">hello@digitallab.dev</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-purple/20 rounded-lg flex items-center justify-center">
                    <Phone className="w-6 h-6 text-primary-purple" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-text-secondary">+1 (555) 123-TECH</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-primary-cyber/20 rounded-lg flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary-cyber" />
                  </div>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-text-secondary">Silicon Valley, CA</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-6">
              <h3 className="text-xl font-bold mb-4">Why Choose Us?</h3>
              <div className="space-y-4">
                {[
                  { icon: Zap, text: "Lightning-fast development cycles" },
                  { icon: MessageCircle, text: "24/7 AI-powered support" },
                  { icon: Phone, text: "Direct access to senior developers" },
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <item.icon className="w-5 h-5 text-primary-accent" />
                    <span className="text-text-secondary">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="code-block">
              <div className="text-primary-cyber font-code text-sm">
                <span className="text-text-secondary">// Response Time</span>
                <br />
                {'console.log("Average response: < 2 hours");'}
                <br />
                <span className="text-text-secondary">// Success Rate</span>
                <br />
                {'console.log("Project completion: 98.7%");'}
                <br />
                <span className="text-text-secondary">// Client Satisfaction</span>
                <br />
                {'console.log("Rating: ★★★★★ (4.9/5.0)");'}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact

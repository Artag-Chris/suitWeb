"use client"

import type React from "react"
import { Github, Twitter, Linkedin, Globe, Code, Zap } from "lucide-react"

const Footer: React.FC = () => {
  return (
    <footer className="py-16 bg-primary-dark border-t border-primary-accent/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-primary-accent to-primary-purple rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">Digital Lab</h3>
                <p className="text-primary-accent text-sm">Building Digital DNA</p>
              </div>
            </div>
            <p className="text-text-secondary mb-6 max-w-md">
              We transform ideas into intelligent, scalable digital ecosystems using cutting-edge technology and
              AI-powered solutions.
            </p>
            <div className="flex space-x-4">
              {[Github, Twitter, Linkedin, Globe].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="w-10 h-10 bg-primary-surface-60 rounded-lg flex items-center justify-center hover:bg-primary-accent/20 transition-colors group"
                >
                  <Icon className="w-5 h-5 text-text-secondary group-hover:text-primary-accent transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {["Web Development", "Mobile Apps", "AI Integration", "Cloud Hosting", "DevOps", "Cybersecurity"].map(
                (service) => (
                  <li key={service}>
                    <a href="#" className="text-text-secondary hover:text-primary-accent transition-colors">
                      {service}
                    </a>
                  </li>
                ),
              )}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-lg font-bold mb-6">Company</h4>
            <ul className="space-y-3">
              {["About Us", "Our Team", "Careers", "Blog", "Contact", "Privacy Policy"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-text-secondary hover:text-primary-accent transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="glass-card p-6 mb-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div>
              <div className="text-2xl font-bold text-primary-cyber mb-1">500+</div>
              <div className="text-sm text-text-secondary">Projects Completed</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-accent mb-1">99.9%</div>
              <div className="text-sm text-text-secondary">Uptime SLA</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-purple mb-1">24/7</div>
              <div className="text-sm text-text-secondary">AI Support</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary-cyber mb-1">15+</div>
              <div className="text-sm text-text-secondary">Countries Served</div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-primary-accent/20">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <p className="text-text-secondary">© 2025 Digital Lab. All rights reserved.</p>
          </div>

          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2 text-sm">
              <div className="w-2 h-2 bg-primary-cyber rounded-full animate-pulse"></div>
              <span className="text-text-secondary">All systems operational</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-4 h-4 text-primary-accent" />
              <span className="text-sm text-text-secondary">Powered by AI</span>
            </div>
          </div>
        </div>

        {/* Mini Code Terminal */}
        <div className="mt-8">
          <div className="code-block max-w-md">
            <div className="text-primary-cyber font-code text-xs">
              <span className="text-text-secondary">// Ready to build the future?</span>
              <br />
              <span className="text-primary-accent">digitalLab</span>.initialize({`{`}
              <br />
              &nbsp;&nbsp;innovation: <span className="text-primary-cyber">true</span>,<br />
              &nbsp;&nbsp;ai: <span className="text-primary-cyber">enabled</span>,<br />
              &nbsp;&nbsp;future: <span className="text-primary-cyber">"unlimited"</span>
              <br />
              {`}`});
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer

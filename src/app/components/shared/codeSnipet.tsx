// components/ui/simple-code-snippet.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
   Cpu, Rocket, Brain, LockKeyhole, BarChart, 
 
} from 'lucide-react';

interface CodeSnippet {
  icon: React.ReactNode;
  lines: string[];
}

const SimpleCodeSnippet: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const snippets: CodeSnippet[] = [
    {
      icon: <Cpu className="w-6 h-6 text-[#00E0FF]" />,
      lines: [
        "optimizePerformance((",
        "  latency: \"99.9%\",",
        "  uptime: \"100%\"",
        "))"
      ]
    },
    {
      icon: <Rocket className="w-6 h-6 text-[#FF00FF]" />,
      lines: [
        "deploySolution((",
        "  infrastructure: \"global\",",
        "  scaling: \"auto\"",
        "))"
      ]
    },
    {
      icon: <Brain className="w-6 h-6 text-[#00FF9D]" />,
      lines: [
        "aiEnhancement((",
        "  algorithms: \"advanced\",",
        "  efficiency: \"max\"",
        "))"
      ]
    },
    {
      icon: <LockKeyhole className="w-6 h-6 text-[#FFD600]" />,
      lines: [
        "securityProtocol((",
        "  encryption: \"AES-256\",",
        "  threatDetection: \"real-time\"",
        "))"
      ]
    },
    {
      icon: <BarChart className="w-6 h-6 text-[#00E0FF]" />,
      lines: [
        "dataAnalytics((",
        "  processing: \"real-time\",",
        "  insights: \"predictive\"",
        "))"
      ]
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prev => (prev + 1) % snippets.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);

  const currentSnippet = snippets[currentIndex];

  return (
    <div className="mb-10 p-4 glass-card rounded-lg border border-primary-accent/30">
      <div className="flex items-start">
        <motion.div
          key={`icon-${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-[#00E0FF]/20 p-2 rounded-lg mr-4 flex-shrink-0"
        >
          {currentSnippet.icon}
        </motion.div>
        
        <div className="overflow-hidden">
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="font-mono text-primary-cyber"
          >
            {currentSnippet.lines.map((line, index) => (
              <div key={index}>{line}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default SimpleCodeSnippet;
'use client';
import React from 'react';
import { 
  FaReact, 
  FaNodeJs, 
  FaPython,
  FaAws
} from 'react-icons/fa';
import { 
  SiTensorflow,
  SiDocker,
  SiKubernetes,
  SiGraphql,
  SiTypescript,
  SiMongodb
} from 'react-icons/si';

export const TechCarousel = () => {
  // Define technology items
 const technologies = [
    { 
      name: "React", 
      icon: <FaReact />, 
      color: "#61DAFB",
      bg: "rgba(97, 218, 251, 0.1)"
    },
    { 
      name: "Node.js", 
      icon: <FaNodeJs />, 
      color: "#8CC84B",
      bg: "rgba(140, 200, 75, 0.1)"
    },
    { 
      name: "Python", 
      icon: <FaPython />, 
      color: "#3776AB",
      bg: "rgba(55, 118, 171, 0.1)"
    },
    { 
      name: "TensorFlow", 
      icon: <SiTensorflow />, 
      color: "#FF6F00",
      bg: "rgba(255, 111, 0, 0.1)"
    },
    { 
      name: "AWS", 
      icon: <FaAws />, 
      color: "#FF9900",
      bg: "rgba(255, 153, 0, 0.1)"
    },
    { 
      name: "Docker", 
      icon: <SiDocker />, 
      color: "#2496ED",
      bg: "rgba(36, 150, 237, 0.1)"
    },
    { 
      name: "Kubernetes", 
      icon: <SiKubernetes />, 
      color: "#326CE5",
      bg: "rgba(50, 108, 229, 0.1)"
    },
    { 
      name: "GraphQL", 
      icon: <SiGraphql />, 
      color: "#E535AB",
      bg: "rgba(229, 53, 171, 0.1)"
    },
    { 
      name: "TypeScript", 
      icon: <SiTypescript />, 
      color: "#3178C6",
      bg: "rgba(49, 120, 198, 0.1)"
    },
    { 
      name: "MongoDB", 
      icon: <SiMongodb />, 
      color: "#47A248",
      bg: "rgba(71, 162, 72, 0.1)"
    },
  ];

  // Duplicate items for seamless looping
  const techItems = [...technologies, ...technologies];

 return (
    <div className="relative w-full overflow-hidden py-8">
      {/* Fade effects on sides */}
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-[#1E1E1E] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-[#1E1E1E] to-transparent z-10 pointer-events-none"></div>
      
      {/* Marquee container */}
      <div className="animate-marquee whitespace-nowrap flex w-max">
        {techItems.map((tech, index) => (
          <div 
            key={`${tech.name}-${index}`}
            className="inline-flex flex-col items-center justify-center mx-8 min-w-[140px] group"
          >
            <div 
              className="w-16 h-16 rounded-full flex items-center justify-center mb-3 transition-all duration-300 group-hover:scale-110"
              style={{ 
                backgroundColor: tech.bg,
                border: `1px solid ${tech.color}20`
              }}
            >
              <div 
                className="text-3xl transition-all duration-300 group-hover:scale-125"
                style={{ color: tech.color }}
              >
                {tech.icon}
              </div>
            </div>
            <span 
              className="text-white font-medium text-base transition-all duration-300 group-hover:text-[#d4af3780]"
            >
              {tech.name}
            </span>
          </div>
        ))}
      </div>
      
      {/* CSS for animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
      `}</style>
    </div>
  );
};
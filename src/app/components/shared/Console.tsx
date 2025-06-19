import { Globe, Code, Zap } from "lucide-react";

export const ConsoleComponent: React.FC<{ currentCode: string }> = ({ currentCode }) => {
  return (
    <div className="glass-card p-6 rounded-xl border border-primary-accent/30 shadow-xl h-full">
      <div className="flex items-center mb-4">
        <div className="flex space-x-2">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <span className="ml-4 text-text-secondary text-sm">console.log()</span>
      </div>
      
      <div className="text-primary-cyber font-code bg-black/30 backdrop-blur-lg p-4 rounded-lg border border-primary-accent/30 mb-6">
        {currentCode}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="glass-card p-6 holographic-border">
          <div className="flex items-center">
            <Globe className="w-6 h-6 text-primary-accent mr-3" />
            <h3 className="text-lg font-bold">Global Infrastructure</h3>
          </div>
          <p className="text-text-secondary mt-2 text-sm">
            99.9% uptime across 15 data centers worldwide
          </p>
        </div>
        
        <div className="glass-card p-6 holographic-border">
          <div className="flex items-center">
            <Code className="w-6 h-6 text-primary-purple mr-3" />
            <h3 className="text-lg font-bold">AI-Powered</h3>
          </div>
          <p className="text-text-secondary mt-2 text-sm">
            Machine learning optimizes every line of code
          </p>
        </div>
        
        <div className="glass-card p-6 holographic-border">
          <div className="flex items-center">
            <Zap className="w-6 h-6 text-primary-cyber mr-3" />
            <h3 className="text-lg font-bold">Lightning Fast</h3>
          </div>
          <p className="text-text-secondary mt-2 text-sm">
            Sub-100ms response times guaranteed
          </p>
        </div>
      </div>
    </div>
  );
};
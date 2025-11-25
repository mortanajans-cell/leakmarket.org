import React from 'react';
import { FEATURES } from '../constants';

const Features: React.FC = () => {
  return (
    <div id="database" className="py-24 bg-black border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <h2 className="text-3xl font-bold text-white mb-2 font-mono">ALTYAPI ÖZELLİKLERİ</h2>
           <div className="h-1 w-20 bg-cyber-green shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <div key={idx} className="p-6 bg-zinc-900/20 border border-zinc-800 hover:border-cyber-green/50 transition-colors group relative overflow-hidden">
                <div className="absolute inset-0 bg-cyber-green/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                
                <div className="relative z-10">
                  <div className="h-12 w-12 bg-zinc-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-black transition-colors border border-zinc-700 group-hover:border-cyber-green">
                    <Icon className="text-zinc-300 group-hover:text-cyber-green transition-colors" size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-white mb-3 font-mono group-hover:text-cyber-green transition-colors">{feature.title}</h3>
                  <p className="text-zinc-500 text-sm leading-relaxed font-mono">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
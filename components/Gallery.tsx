import React, { useState } from 'react';
import { Eye, Lock, FileJson, ShieldAlert } from 'lucide-react';
import { GALLERY_IMAGES } from '../constants';

const Gallery: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <div id="evidence" className="py-24 bg-dark-bg border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
           <div>
             <h2 className="text-3xl font-bold text-white mb-2 font-mono">VERİ KANITLARI</h2>
             <div className="h-1 w-20 bg-cyber-green shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>
             <p className="text-zinc-500 mt-4 text-sm max-w-xl">
               Aşağıdaki görseller sistemimizde barındırılan 440TB verinin sadece küçük bir örneğidir. 
               Ödeme sonrası tüm kök dizinlere erişim açılır.
             </p>
           </div>
           <div className="text-right hidden md:block border border-zinc-800 p-4 bg-black/50">
             <div className="flex items-center gap-2 justify-end mb-1">
                <ShieldAlert size={14} className="text-yellow-500" />
                <p className="text-xs font-mono text-zinc-400">SON GÜNCELLEME</p>
             </div>
             <p className="text-sm font-mono text-white">BUGÜN 04:00 UTC</p>
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GALLERY_IMAGES.map((img) => (
            <div 
              key={img.id}
              className="relative group aspect-video bg-black border border-zinc-800 overflow-hidden cursor-crosshair hover:border-cyber-green/50 transition-colors"
              onMouseEnter={() => setHoveredId(img.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              {/* Image with filters to look like a screen capture */}
              <img 
                src={img.url} 
                alt={img.title} 
                className={`w-full h-full object-cover transition-all duration-500 opacity-50 grayscale group-hover:opacity-30 group-hover:scale-105`}
              />
              
              {/* CRT Scanline Effect Overlay */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] z-10 pointer-events-none bg-[length:100%_4px,6px_100%]"></div>

              {/* Data Info Overlay */}
              <div className="absolute inset-0 p-4 flex flex-col justify-between z-20">
                <div className="flex justify-between items-start">
                  <span className="bg-black/90 text-cyber-green text-xs font-mono px-2 py-1 border border-zinc-800 shadow-lg">
                    {img.size}
                  </span>
                  {hoveredId !== img.id && <Lock className="text-zinc-600 w-4 h-4" />}
                  {hoveredId === img.id && <Eye className="text-cyber-green w-4 h-4 animate-pulse" />}
                </div>
                
                <div className="translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                   <div className="bg-black/90 p-3 border-l-2 border-cyber-green backdrop-blur-sm shadow-xl">
                      <h4 className="text-white font-mono text-sm truncate flex items-center gap-2">
                        <FileJson size={14} className="text-zinc-400" />
                        {img.title}
                      </h4>
                      <p className="text-zinc-500 text-[10px] font-mono mt-1 uppercase">Sızdırılma Tarihi: {img.date}</p>
                   </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-8 text-center bg-zinc-900/30 py-3 border border-zinc-800 border-dashed">
           <p className="text-zinc-500 font-mono text-xs md:text-sm">
             [+] ROOT DİZİNİNDE 14,204 EK KLASÖR MEVCUT
           </p>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
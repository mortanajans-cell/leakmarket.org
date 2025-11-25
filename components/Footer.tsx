import React from 'react';
import { Send } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-black border-t border-zinc-900 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div>
          <span className="text-white font-mono font-bold tracking-tighter text-lg">
            LEAK<span className="text-zinc-600">MARKET</span>
          </span>
          <p className="text-zinc-600 text-xs font-mono mt-2 max-w-xs">
            Sunulan içerik sadece eğitim ve güvenlik araştırması amaçlıdır.
            Sistem hiçbir IP adresini loglamaz ve kayıt tutmaz.
          </p>
        </div>
        
        <div className="flex gap-6 text-zinc-500 text-sm font-mono items-center">
          <a href="#" className="hover:text-white transition-colors">TOR MIRROR</a>
          <a href="#" className="hover:text-white transition-colors">PGP ANAHTARI</a>
          <a href="https://t.me/torleakmarket" target="_blank" rel="noreferrer" className="flex items-center gap-2 text-cyber-green hover:text-white transition-colors">
            <Send size={14} />
            @torleakmarket
          </a>
        </div>
        
        <div className="flex items-center gap-2 border border-zinc-800 px-3 py-1 rounded bg-zinc-900/50">
          <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
          <span className="text-zinc-500 text-xs font-mono">SERVER: STABİL</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
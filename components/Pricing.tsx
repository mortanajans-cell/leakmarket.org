import React from 'react';
import { Bitcoin, ShieldCheck, Download, AlertOctagon, Zap, Send, Clock } from 'lucide-react';

const Pricing: React.FC = () => {
  return (
    <div id="access" className="py-24 bg-zinc-950 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyber-green/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-black border border-zinc-800 rounded-sm overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          
          {/* Header */}
          <div className="bg-zinc-900/50 p-8 border-b border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white font-mono">LIFETIME ACCESS KEY</h2>
              <p className="text-zinc-500 text-sm">440TB bulut arşivine sınırsız root erişimi</p>
            </div>
            <div className="flex flex-col items-end">
              <div className="flex items-center gap-2 mb-1">
                 <Clock size={16} className="text-red-500 animate-pulse" />
                 <span className="text-red-500 font-mono font-bold text-sm">SON 2 KONTENJAN</span>
              </div>
              <div className="flex items-center gap-3 bg-red-900/10 border border-red-900/30 px-4 py-2 rounded">
                <AlertOctagon className="text-red-500 w-5 h-5" />
                <span className="text-red-400 text-xs font-bold tracking-wider">İNDİRİM OCAK AYINA KADAR</span>
              </div>
            </div>
          </div>

          {/* Body */}
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            
            {/* Left: Features List */}
            <div className="space-y-6">
              <h3 className="text-white font-bold mb-4 font-mono">PAKET İÇERİĞİ:</h3>
              <div className="space-y-4">
                {[
                  'Anında İndirme Linkleri (Direkt HTTP/FTP)', 
                  'Hız Limiti Yok (1Gbit Port)', 
                  'Devlet & Askeri Sızıntılar Dahil', 
                  'Anonim Kripto Ödeme', 
                  'Özel Telegram Grubu Erişimi',
                  'Sızdırılmış Shell & Exploit Arşivi'
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-cyber-green/10 flex items-center justify-center border border-cyber-green/20">
                      <ShieldCheck className="w-3 h-3 text-cyber-green" />
                    </div>
                    <span className="text-zinc-300 font-mono text-sm">{item}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-zinc-900">
                <p className="text-[10px] font-bold text-zinc-500 mb-3 tracking-widest">KABUL EDİLEN COINLER</p>
                <div className="flex gap-4">
                  <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
                    <Bitcoin size={16} className="text-orange-500" /> <span className="text-xs font-mono">BTC</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
                    <div className="w-4 h-4 rounded-full border border-orange-500 flex items-center justify-center text-[8px] font-bold text-orange-500">M</div> <span className="text-xs font-mono">XMR</span>
                  </div>
                  <div className="flex items-center gap-2 text-zinc-400 bg-zinc-900 px-3 py-1 rounded border border-zinc-800">
                    <div className="w-4 h-4 rounded-full border border-green-500 flex items-center justify-center text-[8px] font-bold text-green-500">T</div> <span className="text-xs font-mono">USDT</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Price Card */}
            <div className="bg-zinc-900/50 p-8 rounded-xl border border-zinc-800 text-center relative group">
              <div className="absolute inset-0 bg-cyber-green/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl"></div>
              
              <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-cyber-green text-black text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-green-500/20 animate-bounce">
                 %66 İNDİRİM
              </div>

              <p className="text-zinc-600 text-xl line-through font-mono mb-2">$15,000</p>
              <div className="flex items-center justify-center gap-2 mb-2">
                 <span className="text-6xl font-bold text-white tracking-tighter">$5,000</span>
              </div>
              <p className="text-cyber-green text-xs font-mono mb-8 flex items-center justify-center gap-2">
                <Zap size={12} className="fill-current" />
                OCAK AYI SONUNDA KAPANIYOR
              </p>

              <a 
                href="https://t.me/torleakmarket" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-cyber-green hover:bg-green-400 text-black font-bold py-4 px-6 rounded-sm flex items-center justify-center gap-2 transition-all hover:shadow-[0_0_20px_rgba(0,255,65,0.4)] group mb-4"
              >
                <Download size={20} className="group-hover:animate-bounce" />
                SATIN AL & İNDİR
              </a>

               <a 
                href="https://t.me/torleakmarket" 
                target="_blank" 
                rel="noreferrer"
                className="w-full bg-[#0088cc] hover:bg-[#0077b5] text-white font-bold py-3 px-6 rounded-sm flex items-center justify-center gap-2 transition-all"
              >
                <Send size={16} />
                @torleakmarket
              </a>
              
              <div className="mt-4 bg-black/30 p-3 rounded border border-zinc-800/50">
                 <p className="text-zinc-500 text-[10px] font-mono">
                   * Sistem kapanmadan yerinizi ayırtın.
                   <br/>
                   * Ödeme sonrası otomatik teslimat.
                 </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
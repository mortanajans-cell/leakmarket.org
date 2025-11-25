import React from 'react';
import { Network, Skull, Scale, AlertTriangle, TrendingUp, LockKeyhole } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const WholesaleInfo: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div className="py-24 bg-zinc-950 border-t border-zinc-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-20 pointer-events-none">
        <div className="absolute top-10 left-10 w-64 h-64 bg-red-900/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-64 h-64 bg-blue-900/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Warning Banner */}
        <div className="flex items-center justify-center gap-3 bg-red-900/10 border border-red-900/30 p-4 mb-16 rounded-sm">
          <AlertTriangle className="text-red-500 animate-pulse" size={24} />
          <p className="text-red-400 font-mono text-sm md:text-base font-bold tracking-wider">
            {t('wholesale_warning')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: The Narrative */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-mono leading-tight">
                {t('wholesale_title')}
              </h2>
              <div className="h-1 w-24 bg-cyber-red mb-8"></div>
            </div>

            <div className="prose prose-invert">
              <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-6">
                {t('wholesale_text_1')}
              </p>
              
              <p className="text-zinc-400 font-mono text-sm leading-relaxed mb-6">
                 {t('wholesale_text_2')}
              </p>

              <div className="bg-zinc-900/50 border-l-4 border-cyber-green p-4 my-6">
                <p className="text-white font-bold font-mono text-sm">
                  "SQL DUMP / RANSOMWARE LEAK / APT SOURCE"
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
               <div className="flex items-center gap-3 bg-black/40 p-4 border border-zinc-800 rounded hover:border-red-500/50 transition-colors">
                 <Skull className="text-cyber-red" size={24} />
                 <div>
                   <p className="text-xs text-zinc-500 font-mono">SOURCE</p>
                   <p className="text-sm text-white font-bold">Ransomware & APT</p>
                 </div>
               </div>
               <div className="flex items-center gap-3 bg-black/40 p-4 border border-zinc-800 rounded hover:border-blue-500/50 transition-colors">
                 <Network className="text-blue-500" size={24} />
                 <div>
                   <p className="text-xs text-zinc-500 font-mono">MODEL</p>
                   <p className="text-sm text-white font-bold">Wholesale</p>
                 </div>
               </div>
            </div>
          </div>

          {/* Right Column: Value Proposition & FOMO */}
          <div className="relative">
            {/* Value Card */}
            <div className="bg-gradient-to-b from-zinc-900 to-black border border-zinc-800 p-8 rounded-sm shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Scale size={120} className="text-white" />
              </div>

              <h3 className="text-xl font-bold text-white mb-8 font-mono flex items-center gap-2">
                <TrendingUp className="text-cyber-green" />
                {t('price_market_val')}
              </h3>

              <div className="space-y-6">
                {/* Market Price */}
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4 opacity-50">
                  <div>
                    <p className="text-xs text-zinc-500 font-mono mb-1">GLOBAL MARKET VALUE</p>
                    <p className="text-sm text-zinc-400">Total single file retail price</p>
                  </div>
                  <div className="text-right">
                    <p className="text-2xl font-mono text-zinc-400 line-through decoration-red-500 decoration-2">
                      $200,000+
                    </p>
                  </div>
                </div>

                {/* Our Price */}
                <div className="flex justify-between items-end border-b border-zinc-800 pb-4">
                  <div>
                    <p className="text-xs text-cyber-green font-bold font-mono mb-1">{t('price_our_val')}</p>
                    <p className="text-sm text-zinc-300">Lifetime Full Access</p>
                  </div>
                  <div className="text-right">
                    <p className="text-4xl font-bold font-mono text-white animate-pulse">
                      $5,000
                    </p>
                  </div>
                </div>
              </div>

              {/* FOMO Action Area */}
              <div className="mt-8 pt-6 border-t border-zinc-800 text-center">
                 <p className="text-xs text-red-500 font-bold font-mono mb-2 uppercase animate-pulse">
                   ! {t('price_fomo')} !
                 </p>
                 <a href="#access" className="block w-full bg-white hover:bg-zinc-200 text-black font-bold font-mono py-3 rounded-sm transition-colors shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                   BUY NOW
                 </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WholesaleInfo;
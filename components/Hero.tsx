import React from 'react';
import { HardDrive, Users, ExternalLink, Globe, Shield, Database, Lock } from 'lucide-react';
import { STATS } from '../constants';
import { useLanguage } from '../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();

  return (
    <div id="system" className="relative pt-36 pb-20 overflow-hidden min-h-screen flex flex-col justify-center">
      {/* Background Matrix-like effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-zinc-900 via-dark-bg to-black z-0 pointer-events-none"></div>
      
      {/* Hexagon Grid Background Overlay */}
      <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#1a1a1a 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="text-center mb-16">
          
          {/* Top Badge */}
          <div className="inline-flex items-center justify-center gap-3 px-4 py-1.5 mb-8 border border-cyber-green/30 rounded bg-cyber-green/5 animate-pulse backdrop-blur-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-ping"></span>
            <span className="text-cyber-green font-mono text-xs tracking-[0.2em] uppercase font-bold">
              {t('hero_badge')}
            </span>
          </div>
          
          {/* Main Title */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-sans font-black text-white tracking-tighter mb-6 leading-[0.9]">
            LEAK <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-green via-white to-zinc-500 animate-glitch inline-block">
              MARKET
            </span>
          </h1>

          {/* Tags */}
          <div className="flex flex-wrap justify-center gap-2 md:gap-4 mb-8 opacity-80">
            {[
              { label: 'APT_SOURCE', icon: Shield },
              { label: 'RANSOMWARE_ARCHIVES', icon: Lock },
              { label: 'GOV_MIL_INTEL', icon: Database },
              { label: 'NO_LOGS', icon: Globe }
            ].map((tag, i) => (
              <div key={i} className="flex items-center gap-2 bg-zinc-900/80 border border-zinc-700 text-zinc-400 text-[10px] md:text-xs px-3 py-1.5 font-mono rounded-sm">
                <tag.icon size={12} className="text-cyber-green" />
                {tag.label}
              </div>
            ))}
          </div>
          
          {/* Enhanced Description */}
          <div className="max-w-4xl mx-auto relative">
             <div className="absolute -inset-4 bg-black/50 blur-xl -z-10 rounded-full"></div>
             <p className="text-lg md:text-2xl text-zinc-300 font-mono leading-relaxed mb-2 font-bold">
               {t('hero_subtitle')}
             </p>
             <p className="text-sm md:text-lg text-zinc-500 font-mono max-w-3xl mx-auto leading-relaxed">
               <span className="text-white">440TB</span> {t('hero_desc')}
               <br className="hidden md:block" />
               <span className="text-cyber-green">{t('hero_desc_2')}</span>
             </p>
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-4">
             <a href="https://t.me/torleakmarket" target="_blank" rel="noreferrer" className="w-full md:w-auto bg-cyber-green text-black font-bold font-mono px-8 py-4 rounded-sm hover:bg-white hover:shadow-[0_0_30px_rgba(0,255,65,0.6)] transition-all flex items-center justify-center gap-3 group relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500 skew-x-12"></div>
                <span className="relative z-10">{t('cta_access')}</span>
                <ExternalLink size={20} className="group-hover:rotate-45 transition-transform relative z-10" />
             </a>
             <div className="hidden md:flex items-center gap-2 text-xs font-mono text-zinc-500 px-4">
               <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
               {t('cta_seller')}: @torleakmarket
             </div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <div className="bg-panel-bg border border-zinc-800 p-6 rounded-sm relative overflow-hidden group hover:border-zinc-600 transition-all cursor-default backdrop-blur-sm bg-opacity-90">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
               <Globe size={64} className="text-blue-500 rotate-12" />
             </div>
             <p className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider flex items-center gap-2">
               <span className="w-1 h-4 bg-blue-500"></span>
               {t('stat_coverage')}
             </p>
             <p className="text-4xl lg:text-5xl font-bold font-sans tracking-tighter text-blue-400">
               +60
             </p>
             <div className="mt-3 inline-block px-2 py-0.5 bg-zinc-900 border border-zinc-700 rounded text-zinc-300 text-xs font-mono font-bold">
               CN, RU, IR, PK, SY
             </div>
          </div>

          <div className="bg-panel-bg border border-zinc-800 p-6 rounded-sm relative overflow-hidden group hover:border-zinc-600 transition-all cursor-default backdrop-blur-sm bg-opacity-90">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
               <HardDrive size={64} className="text-cyber-green rotate-12" />
             </div>
             <p className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider flex items-center gap-2">
               <span className="w-1 h-4 bg-cyber-green"></span>
               {t('stat_archive')}
             </p>
             <p className="text-4xl lg:text-5xl font-bold font-sans tracking-tighter text-cyber-green">
               440 TB
             </p>
          </div>

          <div className="bg-panel-bg border border-zinc-800 p-6 rounded-sm relative overflow-hidden group hover:border-zinc-600 transition-all cursor-default backdrop-blur-sm bg-opacity-90">
             <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity duration-500">
               <Users size={64} className="text-cyber-red rotate-12" />
             </div>
             <p className="text-xs font-mono text-zinc-500 mb-2 uppercase tracking-wider flex items-center gap-2">
               <span className="w-1 h-4 bg-cyber-red"></span>
               {t('stat_members')}
             </p>
             <p className="text-4xl lg:text-5xl font-bold font-sans tracking-tighter text-cyber-red">
               8 / 10
             </p>
             <div className="mt-3 inline-block px-2 py-0.5 bg-zinc-900 border border-zinc-700 rounded text-zinc-300 text-xs font-mono font-bold">
               {t('stat_spots')}
             </div>
          </div>
        </div>

        {/* Capacity Bar */}
        <div className="max-w-xl mx-auto bg-zinc-900/50 border border-zinc-800 p-6 rounded-sm backdrop-blur-sm">
          <div className="flex justify-between text-xs font-mono text-zinc-400 mb-2">
            <span>{t('cap_capacity')}</span>
            <span className="text-cyber-red font-bold">{t('cap_full')}</span>
          </div>
          <div className="h-3 w-full bg-black rounded-sm overflow-hidden border border-zinc-800">
            <div className="h-full bg-gradient-to-r from-cyber-green via-yellow-500 to-cyber-red w-[80%] relative shadow-[0_0_15px_rgba(255,0,0,0.5)]">
               <div className="absolute inset-0 bg-white/20 animate-[shimmer_2s_infinite]"></div>
            </div>
          </div>
          <p className="text-center text-xs font-mono text-zinc-500 mt-3 flex items-center justify-center gap-2">
            <span className="w-2 h-2 bg-cyber-red rounded-full animate-ping"></span>
            {t('cap_warning')}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
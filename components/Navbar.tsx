import React, { useState } from 'react';
import { Terminal, Globe, ChevronDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types';

const Navbar: React.FC = () => {
  const { language, setLanguage, t, dir } = useLanguage();
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);

  const languages: Language[] = ['TR', 'EN', 'ES', 'RU', 'AR'];

  return (
    <nav className="fixed top-0 left-0 w-full z-40 bg-dark-bg/90 backdrop-blur-md border-b border-zinc-800" dir="ltr">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          
          {/* Logo */}
          <div className="flex items-center gap-2 group cursor-pointer">
            <Terminal className="text-cyber-green w-6 h-6 group-hover:animate-glitch" />
            <span className="text-white font-mono font-bold tracking-tighter text-xl">
              LEAK<span className="text-zinc-500 group-hover:text-cyber-green transition-colors">MARKET</span>
            </span>
          </div>
          
          {/* Navigation Links */}
          <div className="hidden md:block">
            <div className={`ml-10 flex items-baseline space-x-8 ${dir === 'rtl' ? 'flex-row-reverse space-x-reverse' : ''}`}>
              <a href="#system" className="text-zinc-400 hover:text-cyber-green hover:bg-zinc-900 px-3 py-2 rounded-md text-sm font-mono font-medium transition-colors duration-200">{t('nav_system')}</a>
              <a href="#catalog" className="text-zinc-400 hover:text-cyber-green hover:bg-zinc-900 px-3 py-2 rounded-md text-sm font-mono font-medium transition-colors duration-200">{t('nav_catalog')}</a>
              <a href="#evidence" className="text-zinc-400 hover:text-cyber-green hover:bg-zinc-900 px-3 py-2 rounded-md text-sm font-mono font-medium transition-colors duration-200">{t('nav_evidence')}</a>
              <a href="#references" className="text-zinc-400 hover:text-cyber-green hover:bg-zinc-900 px-3 py-2 rounded-md text-sm font-mono font-medium transition-colors duration-200">{t('nav_refs')}</a>
              <a href="#access" className="text-zinc-400 hover:text-cyber-green hover:bg-zinc-900 px-3 py-2 rounded-md text-sm font-mono font-medium transition-colors duration-200">{t('nav_access')}</a>
            </div>
          </div>
          
          {/* Right Side: Language & Status */}
          <div className="flex items-center gap-4">
            
            {/* Language Selector */}
            <div className="relative">
              <button 
                onClick={() => setIsLangMenuOpen(!isLangMenuOpen)}
                className="flex items-center gap-2 text-zinc-400 hover:text-white bg-zinc-900/50 px-3 py-1.5 rounded-sm border border-zinc-800 transition-colors font-mono text-sm"
              >
                <Globe size={14} />
                <span>{language}</span>
                <ChevronDown size={12} className={`transition-transform ${isLangMenuOpen ? 'rotate-180' : ''}`} />
              </button>

              {isLangMenuOpen && (
                <div className="absolute right-0 mt-2 w-32 bg-black border border-zinc-800 rounded-sm shadow-xl z-50">
                   {languages.map((lang) => (
                     <button
                        key={lang}
                        onClick={() => {
                          setLanguage(lang);
                          setIsLangMenuOpen(false);
                        }}
                        className={`w-full text-left px-4 py-2 text-sm font-mono hover:bg-zinc-900 transition-colors flex items-center justify-between ${language === lang ? 'text-cyber-green' : 'text-zinc-400'}`}
                     >
                       <span>{lang}</span>
                       {language === lang && <div className="w-1.5 h-1.5 rounded-full bg-cyber-green"></div>}
                     </button>
                   ))}
                </div>
              )}
            </div>

            {/* Status Indicator */}
            <div className="hidden sm:flex items-center gap-2 border border-zinc-800 px-3 py-1 rounded-sm bg-black/50">
               <div className="h-2 w-2 rounded-full bg-cyber-green animate-pulse-fast"></div>
               <span className="text-xs font-mono text-zinc-400">{t('system_online')}</span>
            </div>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
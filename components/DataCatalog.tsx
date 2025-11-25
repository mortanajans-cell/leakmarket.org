import React, { useState, useEffect } from 'react';
import { DATA_CATEGORIES } from '../constants';
import { Database, Globe, Lock, Terminal, ShieldAlert, FileCode, Server, Map } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

const REGIONS = [
  { code: 'CN', name: 'CHINA', count: '940 M+', percent: 30, priority: 'high' },
  { code: 'RU', name: 'RUSSIA', count: '820 M+', percent: 25, priority: 'high' },
  { code: 'IR', name: 'IRAN', count: '650 M+', percent: 20, priority: 'high' },
  { code: 'PK', name: 'PAKISTAN', count: '320 M+', percent: 10, priority: 'standard' },
  { code: 'SY', name: 'SYRIA', count: '180 M+', percent: 8, priority: 'standard' },
  { code: 'TR', name: 'TURKEY', count: '150 M+', percent: 5, priority: 'standard' },
  { code: 'IL', name: 'ISRAEL', count: '120 M+', percent: 2, priority: 'standard' },
];

const HIGH_VALUE_LEAKS = [
  { name: 'SHANGHAI_POLICE_DB_FULL.sql', date: '2023-11', size: '23 TB', source: 'GOV.CN' },
  { name: 'IRAN_ATOMIC_ENERGY_EMAILS.pst', date: '2024-01', size: '120 GB', source: 'GOV.IR' },
  { name: 'NADRA_PAKISTAN_CITIZEN_DB.csv', date: '2023-12', size: '8 TB', source: 'GOV.PK' },
  { name: 'SYRIAN_TELECOM_LOGS_FULL.json', date: '2023-10', size: '450 GB', source: 'ISP.SY' },
  { name: 'YANDEX_INTERNAL_REPO_LEAK.git', date: '2023-RU', size: '44 GB', source: 'TECH.RU' },
  { name: 'QODS_FORCE_PAYROLL_DATA.xlsx', date: '2023-09', size: '4 GB', source: 'MIL.IR' },
  { name: 'WECHAT_USER_BEHAVIOR_LOGS.log', date: '2023-12', size: '250 GB', source: 'APP.CN' },
];

const DataCatalog: React.FC = () => {
  const [activeRegion, setActiveRegion] = useState<string>('CN');
  const [terminalLines, setTerminalLines] = useState<string[]>([]);
  const { t } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      const operations = ['INDEXING', 'DECRYPTING', 'UPLOADING', 'VERIFYING'];
      const files = ['tehran_power_grid.xml', 'beijing_cctv_logs.db', 'damascus_mil_net.config', 'karachi_port_auth.sql'];
      const randomOp = operations[Math.floor(Math.random() * operations.length)];
      const randomFile = files[Math.floor(Math.random() * files.length)];
      const timestamp = new Date().toLocaleTimeString('en-US', { hour12: false });
      
      const newLine = `[${timestamp}] ${randomOp} >> /mnt/raid0/${randomFile}... OK`;
      
      setTerminalLines(prev => [newLine, ...prev].slice(0, 8));
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="catalog" className="py-24 bg-panel-bg border-t border-zinc-900 relative overflow-hidden">
      {/* Background World Map Effect (Simulated) */}
      <div className="absolute inset-0 opacity-5 pointer-events-none" 
           style={{ backgroundImage: 'radial-gradient(circle at center, #ff003c 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
               <Globe className="text-cyber-red animate-pulse" size={20} />
               <span className="text-cyber-red font-mono text-xs tracking-[0.2em]">EASTERN BLOC INTELLIGENCE</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white font-mono leading-none">
              {t('catalog_title')}<br />
              <span className="text-zinc-600">{t('catalog_subtitle')}</span>
            </h2>
          </div>
          <div className="bg-black border border-zinc-800 p-4 rounded-sm max-w-md w-full">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-2 mb-2">
              <span className="text-xs font-mono text-zinc-400">{t('catalog_stream')}</span>
              <div className="w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
            </div>
            <div className="font-mono text-[10px] text-green-500/80 space-y-1 h-24 overflow-hidden flex flex-col-reverse">
              {terminalLines.map((line, i) => (
                <div key={i} className="opacity-80 hover:opacity-100">{line}</div>
              ))}
            </div>
          </div>
        </div>

        {/* Region Stats Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-2 mb-16">
          {REGIONS.map((region) => (
            <div 
              key={region.code} 
              onMouseEnter={() => setActiveRegion(region.code)}
              className={`p-3 rounded border cursor-crosshair transition-all ${
                activeRegion === region.code 
                  ? 'bg-zinc-900 border-cyber-red/50' 
                  : 'bg-black/50 border-zinc-800 hover:border-zinc-600'
              } ${region.priority === 'high' ? 'ring-1 ring-red-900/30' : ''}`}
            >
              <div className="flex justify-between items-center mb-1">
                <span className={`text-xs font-bold font-mono ${activeRegion === region.code ? 'text-white' : 'text-zinc-500'}`}>
                  {region.name}
                </span>
                {activeRegion === region.code && <Map size={12} className="text-cyber-red" />}
              </div>
              <div className={`text-sm font-mono font-bold ${region.priority === 'high' ? 'text-white' : 'text-zinc-400'}`}>
                {region.count}
              </div>
              <div className="w-full bg-zinc-800 h-1 mt-2 rounded-full overflow-hidden">
                <div 
                  className={`h-full ${region.priority === 'high' ? 'bg-cyber-red shadow-[0_0_10px_rgba(255,0,60,0.5)]' : 'bg-zinc-600'}`} 
                  style={{ width: `${region.percent}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Categories (Left - 2 Cols) */}
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {DATA_CATEGORIES.map((category, idx) => {
              const Icon = category.icon;
              // Map categories to translations based on index or title (simplified for this example)
              let transTitle = category.title;
              if (idx === 0) transTitle = t('cat_gov');
              if (idx === 1) transTitle = t('cat_fin');
              if (idx === 2) transTitle = t('cat_corp');
              if (idx === 3) transTitle = t('cat_id');

              return (
                <div key={idx} className="bg-black border border-zinc-800 p-6 rounded-sm hover:border-zinc-500 transition-all group relative overflow-hidden">
                  <div className={`absolute top-0 left-0 w-1 h-full ${category.color.replace('text-', 'bg-')} opacity-50`}></div>
                  
                  <div className="flex items-center gap-3 mb-6">
                    <Icon className={`w-6 h-6 ${category.color}`} />
                    <h3 className="text-lg font-bold font-mono text-white tracking-tight">
                      {transTitle}
                    </h3>
                  </div>
                  
                  <ul className="space-y-4">
                    {category.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 group/item">
                        <span className="mt-1.5 w-1 h-1 rounded-full bg-zinc-600 group-hover/item:bg-cyber-green transition-colors"></span>
                        <div>
                           <span className="text-sm text-zinc-400 font-mono group-hover/item:text-white transition-colors block">
                             {item}
                           </span>
                        </div>
                      </li>
                    ))}
                  </ul>

                  <div className="mt-6 pt-4 border-t border-zinc-900 flex items-center justify-between text-[10px] font-mono text-zinc-500">
                    <span>FORMAT: SQL, JSON, CSV</span>
                    <span className="flex items-center gap-1">
                      <Lock size={10} /> ENCRYPTED
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Featured / High Value (Right - 1 Col) */}
          <div className="lg:col-span-1">
            <div className="bg-zinc-900/20 border border-zinc-800 h-full rounded-sm p-6 relative">
              <div className="flex items-center gap-2 mb-6 text-red-500">
                <ShieldAlert size={20} />
                <h3 className="font-bold font-mono tracking-widest text-sm">HIGH_VALUE_TARGETS</h3>
              </div>

              <div className="space-y-3">
                {HIGH_VALUE_LEAKS.map((leak, i) => (
                  <div key={i} className="bg-black/80 border border-zinc-800 p-3 hover:border-red-500/30 transition-colors group cursor-not-allowed">
                    <div className="flex justify-between items-start mb-1">
                       <div className="flex items-center gap-2">
                          <FileCode size={14} className="text-zinc-600 group-hover:text-cyber-green" />
                          <span className="text-xs font-mono text-zinc-300 font-bold truncate max-w-[150px]">{leak.name}</span>
                       </div>
                       <span className="text-[10px] bg-red-900/20 text-red-500 px-1 rounded border border-red-900/30">
                         {leak.source}
                       </span>
                    </div>
                    <div className="flex justify-between items-center mt-2 pl-6">
                       <span className="text-[10px] text-zinc-600 font-mono">{leak.date}</span>
                       <span className="text-xs font-bold text-white font-mono">{leak.size}</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 bg-yellow-900/10 border border-yellow-900/30 p-3 rounded">
                <p className="text-[10px] text-yellow-500 font-mono leading-relaxed">
                  <span className="font-bold">[!] ROOT:</span> Access restricted to premium members only.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Info Strip */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 md:gap-8 border-t border-zinc-800 pt-8">
           <div className="flex items-center gap-2 text-zinc-500">
              <Server size={14} />
              <span className="text-xs font-mono">TOTAL RECORDS: +85 B</span>
           </div>
           <div className="flex items-center gap-2 text-zinc-500">
              <Database size={14} />
              <span className="text-xs font-mono">DB COUNT: 14,204</span>
           </div>
           <div className="flex items-center gap-2 text-zinc-500">
              <Lock size={14} />
              <span className="text-xs font-mono">SOURCE: PRIVATE</span>
           </div>
        </div>
      </div>
    </div>
  );
};

export default DataCatalog;
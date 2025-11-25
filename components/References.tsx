import React from 'react';
import { REFERENCES } from '../constants';
import { MessageSquare, CheckCircle, User, Hash } from 'lucide-react';

const References: React.FC = () => {
  return (
    <div id="references" className="py-24 bg-black relative border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
           <h2 className="text-3xl font-bold text-white mb-2 font-mono">REFERANSLAR & İŞLEM KANITLARI</h2>
           <div className="h-1 w-20 bg-cyber-green shadow-[0_0_10px_rgba(0,255,65,0.5)]"></div>
           <p className="text-zinc-500 mt-4 text-sm">
             Onaylanmış son blockchain işlemleri ve üye geri bildirimleri.
           </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {REFERENCES.map((ref, idx) => (
            <div key={idx} className="bg-zinc-900/30 border border-zinc-800 p-6 rounded-sm relative group hover:border-zinc-700 transition-all">
              {/* Header */}
              <div className="flex justify-between items-start mb-4 pb-4 border-b border-zinc-800 border-dashed">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-zinc-800 rounded flex items-center justify-center border border-zinc-700">
                    <User className="text-zinc-400" size={20} />
                  </div>
                  <div>
                    <p className="text-cyber-green font-mono text-sm font-bold tracking-wide">{ref.user}</p>
                    <p className="text-zinc-600 text-xs">{ref.date}</p>
                  </div>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-white font-mono font-bold">{ref.amount}</span>
                  <div className="flex items-center gap-1 mt-1">
                    <CheckCircle size={12} className="text-cyber-green" />
                    <span className="text-[10px] text-cyber-green font-mono tracking-wider">{ref.status}</span>
                  </div>
                </div>
              </div>

              {/* Comment */}
              <div className="mb-4">
                 <p className="text-zinc-300 font-mono text-sm leading-relaxed">
                   "{ref.comment}"
                 </p>
              </div>

              {/* Proof ID */}
              <div className="bg-black/50 p-2 rounded border border-zinc-800 flex items-center justify-between group-hover:border-zinc-600 transition-colors">
                 <div className="flex items-center gap-2 text-zinc-500">
                    <Hash size={12} />
                    <span className="text-[10px] font-mono">TX_PROOF_ID:</span>
                 </div>
                 <span className="text-[10px] font-mono text-zinc-400 font-bold bg-zinc-900 px-2 py-0.5 rounded">
                   {ref.proofId}
                 </span>
              </div>
            </div>
          ))}
        </div>

        {/* Fake Terminal Input */}
        <div className="mt-8 bg-black border border-zinc-800 p-4 font-mono text-xs text-zinc-500 flex items-center gap-2 opacity-50">
           <span className="text-cyber-green">root@leakmarket:~$</span>
           <span className="animate-pulse">tail -f /var/log/transactions.log</span>
        </div>
      </div>
    </div>
  );
};

export default References;
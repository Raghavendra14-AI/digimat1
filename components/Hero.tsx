import React from 'react';
import { Button } from './Button';
import { ArrowRight, CheckCircle2, TrendingUp } from 'lucide-react';

interface HeroProps {
  onBookCall: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onBookCall }) => {
  return (
    <section id="problem" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 transform origin-top-right translate-x-32 z-0" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Content */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-yellow-100/50 border border-brand-yellow/30 rounded-full mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-darkYellow animate-pulse" />
              <span className="text-xs font-bold text-brand-darkYellow uppercase tracking-wide">
                B2B System Integrators
              </span>
            </div>
            
            <h1 className="text-4xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.1] mb-6">
              Stop Random Acts of <span className="relative">
                AI.
                <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow -z-10" viewBox="0 0 100 10" preserveAspectRatio="none">
                  <path d="M0 5 Q 50 10 100 5" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.6"/>
                </svg>
              </span>
              <br />
              Start Building <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-600">
                Growth Engines.
              </span>
            </h1>

            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Your team is drowning in manual workflows while agile competitors accelerate. 
              Disconnected tools and simple chatbots aren't enough. 
              <strong>Digimatrion</strong> builds the <strong>LSA Engine</strong>: 
              complete AI infrastructure that integrates automation, agents, and intelligence for measurable ROI.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button onClick={onBookCall} className="h-14 px-8 text-base shadow-lg shadow-yellow-400/20">
                Book AI Discovery Call <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>

            <div className="flex items-center gap-8 text-sm text-slate-500 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-darkYellow" />
                <span>No "Hype"</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-darkYellow" />
                <span>Enterprise Grade</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-brand-darkYellow" />
                <span>Full Integration</span>
              </div>
            </div>
          </div>

          {/* Visual abstract representation of chaos vs order */}
          <div className="relative">
             <div className="aspect-square relative bg-slate-900 rounded-2xl p-8 shadow-2xl overflow-hidden flex flex-col justify-between group">
                {/* Decorative Grid */}
                <div className="absolute inset-0 opacity-20" 
                     style={{backgroundImage: 'radial-gradient(#94a3b8 1px, transparent 1px)', backgroundSize: '24px 24px'}}>
                </div>
                
                <div className="relative z-10">
                  <div className="flex justify-between items-start mb-8">
                    <div className="p-3 bg-white/10 backdrop-blur rounded-lg border border-white/20">
                      <TrendingUp className="text-brand-yellow w-8 h-8" />
                    </div>
                    <div className="text-right">
                      <p className="text-slate-400 text-xs uppercase tracking-wider mb-1">Efficiency Gain</p>
                      <p className="text-3xl font-bold text-white">+400%</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-4 p-4 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
                        <div className={`w-2 h-2 rounded-full ${i === 1 ? 'bg-green-400' : i === 2 ? 'bg-brand-yellow' : 'bg-blue-400'}`} />
                        <div className="h-2 bg-slate-700 rounded w-1/3" />
                        <div className="h-2 bg-slate-700 rounded w-1/4 ml-auto" />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="relative z-10 pt-8 border-t border-white/10 mt-8">
                  <p className="text-brand-yellow font-mono text-sm mb-2">> System Status: OPTIMIZED</p>
                  <p className="text-slate-400 text-sm">Deploying multi-layer intelligence agents...</p>
                </div>
             </div>
             
             {/* Floating Badge */}
             <div className="absolute -bottom-6 -left-6 bg-white p-4 shadow-xl rounded-lg border border-slate-100 flex items-center gap-4 max-w-xs">
               <div className="bg-slate-100 p-2 rounded-full">
                 <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
               </div>
               <div>
                 <p className="text-xs text-slate-500 font-semibold uppercase">Live System</p>
                 <p className="text-sm font-bold text-slate-900">4 Layer Stack Active</p>
               </div>
             </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};
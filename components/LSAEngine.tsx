import React from 'react';
import { Bot, Zap, BrainCircuit, BarChart3, ArrowDown } from 'lucide-react';
import { EngineLayer } from '../types';

export const LSAEngine: React.FC = () => {
  const layers: EngineLayer[] = [
    {
      title: 'Layer 1: Automation',
      subtitle: 'The Foundation',
      features: ['API Integrations', 'Data Cleaning Pipelines', 'Trigger-Action Workflows'],
      icon: <Zap className="w-8 h-8 text-brand-black" />
    },
    {
      title: 'Layer 2: AI Agents',
      subtitle: 'The Workforce',
      features: ['Customer Support Agents', 'Research Analysts', 'Outreach Coordinators'],
      icon: <Bot className="w-8 h-8 text-brand-black" />
    },
    {
      title: 'Layer 3: Intelligence',
      subtitle: 'The Brain',
      features: ['Predictive Analytics', 'Contextual Decision Making', 'Multi-Model Routing'],
      icon: <BrainCircuit className="w-8 h-8 text-brand-black" />
    },
    {
      title: 'Layer 4: Optimization',
      subtitle: 'The Growth',
      features: ['Continuous Learning Loops', 'A/B Testing Prompts', 'ROI Dashboarding'],
      icon: <BarChart3 className="w-8 h-8 text-brand-black" />
    }
  ];

  return (
    <section id="engine" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <h2 className="text-sm font-bold text-brand-darkYellow uppercase tracking-widest mb-3">
            The Solution
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            The LSA Engine: <br/> A Multi-Tier Growth Infrastructure
          </h3>
          <p className="text-slate-600 text-lg">
            We don't sell tools. We install a complete operating system for your business growth. 
            From the foundational data pipes to high-level strategic optimization.
          </p>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-slate-200 -translate-x-1/2 z-0" />

          <div className="space-y-12 relative z-10">
            {layers.map((layer, idx) => (
              <div key={idx} className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-16 ${idx % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                
                {/* Visual Half */}
                <div className="flex-1 flex justify-center lg:justify-end w-full">
                    {/* Just empty div for spacing on one side to center content around line */}
                    <div className={`hidden lg:block w-full ${idx % 2 !== 0 ? 'order-2' : ''}`} />
                    
                    <div className={`w-16 h-16 rounded-2xl bg-brand-yellow flex items-center justify-center shadow-lg lg:absolute left-1/2 -translate-x-1/2 border-4 border-slate-50`}>
                      {layer.icon}
                    </div>
                </div>

                {/* Content Half */}
                <div className="flex-1 w-full">
                  <div className={`bg-white p-8 rounded-xl shadow-sm border border-slate-100 hover:shadow-md transition-shadow duration-300 ${idx % 2 !== 0 ? 'lg:text-right' : ''}`}>
                    <div className={`flex flex-col ${idx % 2 !== 0 ? 'lg:items-end' : ''}`}>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">{layer.subtitle}</span>
                      <h4 className="text-xl font-bold text-slate-900 mb-4">{layer.title}</h4>
                      <ul className={`space-y-2 ${idx % 2 !== 0 ? 'lg:items-end' : ''} flex flex-col`}>
                        {layer.features.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-center gap-2 text-slate-600">
                             {idx % 2 === 0 && <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />}
                             {feat}
                             {idx % 2 !== 0 && <span className="w-1.5 h-1.5 bg-brand-yellow rounded-full" />}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-12">
             <div className="flex flex-col items-center gap-2 text-slate-400">
                <ArrowDown className="animate-bounce" />
                <span className="text-xs font-medium uppercase tracking-widest">Incredible Growth</span>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};
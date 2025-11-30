import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import { FAQItem } from '../types';

export const FAQ: React.FC = () => {
  const items: FAQItem[] = [
    {
      question: "How is this different from buying a standard AI tool?",
      answer: "We don't sell a SaaS subscription; we build custom infrastructure. Standard tools are 'one-size-fits-all'. The LSA Engine is bespoke to your specific workflows, data structures, and business goals, ensuring deep integration rather than surface-level automation."
    },
    {
      question: "Is my data safe? Do you train models on it?",
      answer: "Your data privacy is paramount. We architect systems where your data remains within your controlled environment. We explicitly configure API calls to ensure data is not used for model training by third-party providers unless you specifically authorize it for fine-tuning."
    },
    {
      question: "How long does implementation take?",
      answer: "A typical LSA Engine deployment takes 4-8 weeks. Week 1-2 is Discovery & Mapping, Week 3-5 is Building & Integration, and Week 6-8 is Testing & Handover. We prioritize 'speed to value', often launching the Automation Layer first for immediate wins."
    },
    {
      question: "Do we need an internal technical team?",
      answer: "No. Digimatrion handles the heavy lifting. However, for long-term success, we provide training and SOPs for a 'System Owner' on your side—usually an Operations Manager—to handle basic oversight."
    },
    {
      question: "What is the ROI timeframe?",
      answer: "Most clients see operational break-even within 3 months through saved labor hours alone. Revenue-generating ROI (from the Intelligence & Optimization layers) typically matures by month 6 as the system gathers enough data to make high-value decisions."
    }
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 bg-slate-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-slate-900 text-center mb-12">
          Common Questions
        </h2>
        
        <div className="space-y-4">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-lg border border-slate-200 overflow-hidden">
              <button 
                className="w-full flex items-center justify-between p-6 text-left focus:outline-none"
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              >
                <span className="font-semibold text-slate-900 pr-8">{item.question}</span>
                {openIndex === idx ? (
                  <Minus className="text-brand-yellow flex-shrink-0" />
                ) : (
                  <Plus className="text-slate-400 flex-shrink-0" />
                )}
              </button>
              
              <div 
                className={`transition-all duration-300 ease-in-out ${
                  openIndex === idx ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                  {item.answer}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
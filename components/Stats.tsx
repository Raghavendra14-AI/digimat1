import React from 'react';

export const Stats: React.FC = () => {
  const stats = [
    { value: '40hrs+', label: 'Weekly Saved', desc: 'Per senior employee via automation' },
    { value: '3x', label: 'Lead Velocity', desc: 'Increase in qualified pipeline speed' },
    { value: '12mo', label: 'Future Proof', desc: 'Architecture built for next-gen models' },
    { value: '0%', label: 'Data Leakage', desc: 'Enterprise-grade security protocols' },
  ];

  return (
    <section className="bg-brand-black text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-12 text-center md:text-left divide-y md:divide-y-0 md:divide-x divide-slate-800">
          {stats.map((stat, idx) => (
            <div key={idx} className={`pt-8 md:pt-0 ${idx > 0 ? 'md:pl-12' : ''} ${idx % 2 !== 0 ? 'pl-0' : ''}`}>
              <div className="text-4xl lg:text-5xl font-bold text-brand-yellow mb-2">
                {stat.value}
              </div>
              <div className="text-lg font-semibold text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-slate-400 leading-tight">
                {stat.desc}
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 pt-12 border-t border-slate-800 text-center">
          <p className="text-slate-400 text-sm uppercase tracking-widest mb-6">Trusted by innovators in</p>
          <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale">
            {/* Simple Text Logos for industry representation */}
            <span className="text-xl font-bold text-white">HealthTech Systems</span>
            <span className="text-xl font-bold text-white">EduGlobal</span>
            <span className="text-xl font-bold text-white">CreatorScale</span>
            <span className="text-xl font-bold text-white">NextCorp B2B</span>
          </div>
        </div>
      </div>
    </section>
  );
};
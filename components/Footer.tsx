import React from 'react';
import { Cpu } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-black text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex items-center gap-2">
            <div className="text-brand-yellow">
              <Cpu size={24} />
            </div>
            <span className="text-lg font-bold text-white tracking-tight">
              DIGIMATRION
            </span>
          </div>
          
          <div className="text-sm">
            &copy; {new Date().getFullYear()} Digimatrion AI Consultancy. All rights reserved.
          </div>
          
          <div className="flex gap-6 text-sm">
             <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
             <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
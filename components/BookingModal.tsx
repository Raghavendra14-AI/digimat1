import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { ModalProps } from '../types';

export const BookingModal: React.FC<ModalProps> = ({ isOpen, onClose }) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/80 backdrop-blur-sm transition-opacity" 
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Modal Content */}
      <div className="relative w-full max-w-4xl bg-white shadow-2xl rounded-lg overflow-hidden flex flex-col h-[80vh] sm:h-[650px] animate-fade-in-up">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-100 bg-slate-50">
          <h3 className="text-lg font-bold text-slate-900 uppercase tracking-wide">
            Strategy Session
          </h3>
          <button 
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-600 hover:bg-slate-100 rounded-full transition-colors"
          >
            <X size={20} />
          </button>
        </div>

        {/* Iframe Container */}
        <div className="flex-1 w-full h-full bg-white relative">
           <iframe 
            src="https://cal.com/raghu14/30min" 
            className="w-full h-full border-none"
            title="Book a call"
           />
        </div>
      </div>
    </div>
  );
};
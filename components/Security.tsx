import React from 'react';
import { ShieldCheck, Lock, Server, FileCheck } from 'lucide-react';

export const Security: React.FC = () => {
  return (
    <section id="security" className="py-20 bg-white border-y border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-3xl font-bold text-slate-900 mb-6">
              Enterprise-Grade <br/> Security & Governance
            </h3>
            <p className="text-slate-600 text-lg mb-8">
              We understand that B2B data is sensitive. The LSA Engine is designed with a security-first architecture, ensuring your proprietary data never trains public models without consent.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: ShieldCheck, title: "Zero-Retention Architecture", desc: "Data is processed transiently where possible." },
                { icon: Lock, title: "Role-Based Access Control", desc: "Granular permissions for your internal teams." },
                { icon: FileCheck, title: "Compliance Ready", desc: "Workflows built to align with GDPR & HIPAA standards." }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <item.icon className="w-6 h-6 text-brand-darkYellow" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900">{item.title}</h4>
                    <p className="text-sm text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-slate-50 p-8 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 mb-6 flex items-center gap-2">
              <Server size={20} />
              Seamless Integration
            </h4>
            <div className="grid grid-cols-2 gap-4">
              {['Salesforce', 'HubSpot', 'Slack', 'Microsoft 365', 'Notion', 'Custom SQL'].map((tool) => (
                <div key={tool} className="flex items-center justify-center p-4 bg-white rounded-lg border border-slate-200 shadow-sm text-slate-600 font-medium text-sm">
                  {tool}
                </div>
              ))}
            </div>
            <p className="text-xs text-center text-slate-400 mt-6">
              *We build custom connectors for legacy ERP systems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
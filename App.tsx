import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { LSAEngine } from './components/LSAEngine';
import { Security } from './components/Security';
import { FAQ } from './components/FAQ';
import { Footer } from './components/Footer';
import { BookingModal } from './components/BookingModal';
import { Button } from './components/Button';
import { ArrowRight } from 'lucide-react';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-brand-yellow selection:text-brand-black">
      <Header onBookCall={openModal} />
      
      <main className="flex-grow">
        <Hero onBookCall={openModal} />
        <Stats />
        <LSAEngine />
        <Security />
        <FAQ />

        {/* Final CTA Section */}
        <section className="py-24 bg-brand-black text-center relative overflow-hidden">
           <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#facc15_1px,transparent_1px)] [background-size:16px_16px]"></div>
           <div className="max-w-4xl mx-auto px-4 relative z-10">
             <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
               Ready to Transform Operations?
             </h2>
             <p className="text-xl text-slate-400 mb-10 max-w-2xl mx-auto">
               Stop guessing. Start building systems. Schedule your strategy session to see if the LSA Engine fits your infrastructure.
             </p>
             <Button onClick={openModal} className="h-16 px-10 text-lg">
               Book AI Discovery Call <ArrowRight className="ml-2" />
             </Button>
           </div>
        </section>
      </main>

      <Footer />
      
      <BookingModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
}

export default App;
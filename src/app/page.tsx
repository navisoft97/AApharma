import React from 'react';
import Navbar from '@/components/ui/Navbar';
import Hero from '@/components/ui/Hero';
import PartnerLogos from '@/components/ui/PartnerLogos';
import ServicesGrid from '@/components/ui/ServicesGrid';
import Consultation from '@/components/ui/Consultation';
import CorporateProcurement from '@/components/ui/CorporateProcurement';
import CallToAction from '@/components/ui/CallToAction';
import Footer from '@/components/ui/Footer';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/content';

export default function Home() {
  return (
    <>
      {/* Structural layout shell using semantic HTML */}
      <Navbar />
      
      <main className="flex-1">
        {/* Visual sections matching image_af06c9.jpg */}
        <Hero />
        <PartnerLogos />
        <ServicesGrid />
        <Consultation />
        <CorporateProcurement />
        <CallToAction />
      </main>

      <Footer />

      {/* Floating sticky Chat on WhatsApp action */}
      <div className="fixed bottom-6 right-6 z-50">
        <a
          href={siteConfig.trustBanner.whatsappFloat.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full bg-accent px-5 py-3.5 text-xs font-black text-white shadow-2xl hover:bg-accent-hover transition-all hover:-translate-y-0.5 active:translate-y-0 hover:scale-105 shadow-accent/30"
        >
          <MessageCircle className="h-4.5 w-4.5 fill-white text-accent" />
          {siteConfig.trustBanner.whatsappFloat.label}
        </a>
      </div>
    </>
  );
}


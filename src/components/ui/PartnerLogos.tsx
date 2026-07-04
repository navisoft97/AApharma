'use client';

import React from 'react';
import { MessageCircle } from 'lucide-react';
import { siteConfig } from '@/config/content';

export default function PartnerLogos() {
  return (
    <section className="bg-white border-y border-slate-200/60 py-8 relative z-10 shadow-xs">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-6">
        <div className="flex flex-col gap-6 items-center justify-center">
          
          {/* Grayscale partner logos list */}
          <div className="w-full text-center">
            <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-4">
              {siteConfig.trustBanner.label}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-12 md:gap-16">
              {siteConfig.trustBanner.partners.map((partner) => (
                <div
                  key={partner.name}
                  className="font-sans font-black tracking-widest text-slate-400/80 text-sm sm:text-base cursor-default select-none transition-all hover:text-slate-700/90"
                >
                  {partner.name}
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

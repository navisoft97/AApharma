'use client';

import React from 'react';
import { siteConfig } from '@/config/content';

export default function PartnerLogos() {
  // Duplicate partners list to create an infinite loop effect
  const marqueePartners = [
    ...siteConfig.trustBanner.partners,
    ...siteConfig.trustBanner.partners,
    ...siteConfig.trustBanner.partners,
    ...siteConfig.trustBanner.partners,
  ];

  const renderLogo = (name: string) => {
    switch (name.toUpperCase()) {
      case "ABBOTT":
        return (
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 100 100" className="h-6.5 w-6.5 text-sky-500 fill-none stroke-current stroke-[10] stroke-round shrink-0">
              <path d="M20 70 C20 40, 40 20, 60 20 C80 20, 80 50, 50 50 C30 50, 30 80, 50 80 C70 80, 80 70, 80 60" />
            </svg>
            <span className="font-sans font-extrabold tracking-tight text-slate-800 text-base sm:text-lg">Abbott</span>
          </div>
        );
      case "PFIZER":
        return (
          <svg viewBox="0 0 110 40" className="h-7 w-20 shrink-0">
            <ellipse cx="55" cy="20" rx="50" ry="18" className="fill-blue-600" />
            <text x="55" y="25" textAnchor="middle" className="fill-white font-sans font-extrabold italic tracking-tighter text-[15px]">Pfizer</text>
          </svg>
        );
      case "GSK":
        return (
          <svg viewBox="0 0 70 40" className="h-7 w-12 shrink-0">
            <path d="M10 4 h50 c4 0, 8 4, 8 8 v14 c0 10, -15 10, -25 10 c-10 0, -25 0, -33 -10 v-14 c0 -4, 4 -8 8 -8 Z" className="fill-orange-600" />
            <text x="35" y="26" textAnchor="middle" className="fill-white font-sans font-black text-[18px] lowercase tracking-tight">gsk</text>
          </svg>
        );
      case "CIPLA":
        return (
          <div className="flex items-center gap-1.5">
            <svg viewBox="0 0 30 30" className="h-5 w-5 shrink-0">
              <polygon points="5,5 25,5 15,25" className="fill-red-600" />
            </svg>
            <span className="font-sans font-black tracking-wide text-blue-900 text-base sm:text-lg">Cipla</span>
          </div>
        );
      case "SUN PHARMA":
        return (
          <div className="flex items-center gap-2">
            <svg viewBox="0 0 30 30" className="h-6 w-6 shrink-0">
              <circle cx="15" cy="15" r="7" className="fill-amber-500" />
              <path d="M15 3 v4 M15 23 v4 M3 15 h4 M23 15 h4" className="stroke-amber-500 stroke-2" />
              <path d="M6.5 6.5 l3 3 M20.5 20.5 l3 3 M6.5 23.5 l3 -3 M20.5 9.5 l3 -3" className="stroke-amber-500 stroke-2" />
            </svg>
            <span className="font-sans font-black text-slate-800 text-sm sm:text-base tracking-tight">
              <span className="text-amber-600">SUN</span> PHARMA
            </span>
          </div>
        );
      default:
        return <span className="font-sans font-black text-slate-400">{name}</span>;
    }
  };

  return (
    <section className="bg-white border-y border-slate-200/60 py-8 relative z-10 shadow-xs">
      <div className="w-full text-center">
        <p className="text-[10px] font-bold tracking-wider text-slate-400 uppercase mb-6 px-4">
          {siteConfig.trustBanner.label}
        </p>
        
        {/* Scrolling container with gradient masks */}
        <div className="relative w-full overflow-hidden marquee-mask py-2">
          <div className="animate-marquee flex gap-16 sm:gap-20 md:gap-28 items-center">
            {marqueePartners.map((partner, index) => (
              <div
                key={`${partner.name}-${index}`}
                className="partner-logo-grayscale shrink-0 transition-all hover:scale-105 select-none"
              >
                {renderLogo(partner.name)}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

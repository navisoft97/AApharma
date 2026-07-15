'use client';

import React from 'react';
import { ChevronRight, Mail } from 'lucide-react';
import { siteConfig } from '@/config/content';

export default function CorporateProcurement() {

  return (
    <section id="corporate" className="py-16 md:py-24 bg-slate-50/50">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-8">
        
        {/* Section Header & RFQ Button */}
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between mb-12">
          <div>
            <p className="text-2xs font-bold tracking-wider text-primary uppercase mb-2">
              {siteConfig.corporateSection.category}
            </p>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              {siteConfig.corporateSection.title}
            </h2>
          </div>
          
          <div className="shrink-0">
            <a
              href={siteConfig.corporateSection.ctaButton.href}
              className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-xs font-bold text-white shadow-md shadow-primary/20 hover:bg-primary-hover transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail className="h-4 w-4" />
              {siteConfig.corporateSection.ctaButton.label}
            </a>
          </div>
        </div>

        {/* Aggregate list containers */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {siteConfig.corporateSection.offerings.map((offering, idx) => (
            <a
              key={offering.title}
              href={offering.href}
              className="flex items-center justify-between rounded-xl bg-white p-5 premium-card-shadow hover:-translate-y-1 hover:translate-x-0 group"
            >
              <div className="flex items-center gap-4">
                
                {/* Thumbnail Image */}
                <div className="relative h-20 w-28 shrink-0 overflow-hidden rounded-lg border border-slate-100 shadow-sm">
                  <img
                    src={offering.image}
                    alt={offering.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/20 via-transparent to-transparent opacity-80" />
                </div>

                {/* Offering Title & Description */}
                <div>
                  <h3 className="text-sm font-bold text-secondary group-hover:text-primary transition-colors">
                    {offering.title}
                  </h3>
                  <p className="text-2xs text-slate-500 leading-relaxed mt-1">{offering.desc}</p>
                </div>

              </div>

              {/* Interactive Chevron indicator */}
              <div className="flex justify-end shrink-0 pl-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-50 border border-slate-150 text-slate-400 group-hover:bg-primary/5 group-hover:text-primary transition-colors">
                  <ChevronRight className="h-4.5 w-4.5 transition-transform group-hover:translate-x-0.5" />
                </div>
              </div>

            </a>
          ))}
        </div>

      </div>
    </section>
  );
}

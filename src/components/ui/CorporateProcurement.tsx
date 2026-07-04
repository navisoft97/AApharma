'use client';

import React from 'react';
import { ChevronRight, Mail, ClipboardList, Briefcase, Heart, PlusCircle } from 'lucide-react';
import { siteConfig } from '@/config/content';

export default function CorporateProcurement() {
  // Render specific icons or mini placeholders for each offering
  const renderIcon = (index: number) => {
    switch (index) {
      case 0:
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-red-50 text-red-500 border border-red-100/50 shadow-2xs">
            <PlusCircle className="h-5.5 w-5.5" />
          </div>
        );
      case 1:
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-sky-50 text-primary border border-sky-100/50 shadow-2xs">
            <ClipboardList className="h-5.5 w-5.5" />
          </div>
        );
      case 2:
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-emerald-50 text-accent border border-emerald-100/50 shadow-2xs">
            <Briefcase className="h-5.5 w-5.5" />
          </div>
        );
      case 3:
        return (
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-amber-50 text-amber-500 border border-amber-100/50 shadow-2xs">
            <Heart className="h-5.5 w-5.5" />
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <section id="corporate" className="py-16 md:py-24 bg-slate-50/50">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-6">
        
        {/* Section Header & RFQ Button */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
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
        <div className="space-y-4">
          {siteConfig.corporateSection.offerings.map((offering, idx) => (
            <a
              key={offering.title}
              href={offering.href}
              className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl bg-white p-4 premium-card-shadow hover:translate-x-1 hover:translate-y-0 group"
            >
              <div className="flex items-start gap-4">
                
                {/* Micro logo placeholder/icon */}
                <div className="mt-0.5 shrink-0">
                  {renderIcon(idx)}
                </div>

                {/* Offering Title & Description */}
                <div>
                  <h3 className="text-sm font-bold text-secondary flex flex-wrap items-center gap-2">
                    {offering.title}
                    <span className="inline-flex items-center rounded-full bg-slate-100 px-2.5 py-0.5 text-4xs font-bold text-slate-500 border border-slate-250">
                      {offering.tag1}
                    </span>
                    <span className="inline-flex items-center rounded-full bg-primary/10 px-2.5 py-0.5 text-4xs font-bold text-primary border border-primary/20">
                      {offering.tag2}
                    </span>
                  </h3>
                  <p className="text-2xs text-slate-500 leading-relaxed mt-1">{offering.desc}</p>
                </div>

              </div>

              {/* Interactive Chevron indicator */}
              <div className="flex justify-end pt-3 sm:pt-0 shrink-0">
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

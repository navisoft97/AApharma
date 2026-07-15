'use client';

import React from 'react';
import { ArrowRight, Activity, Pill, HeartPulse, Stethoscope, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/content';

export default function ServicesGrid() {
  // Render clean, dynamic CSS/SVG medical graphics in place of empty images
  const renderGraphic = (id: string) => {
    switch (id) {
      case 'prescription-medicines':
        return (
          <div className="relative h-36 w-full overflow-hidden rounded-xl border border-slate-100 shadow-inner">
            <img
              src="/prescription-medicines.jpg"
              alt="Prescription Medicines"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1 rounded-md bg-white/95 px-2 py-0.5 text-[9px] text-primary font-black uppercase tracking-wider shadow-sm border border-slate-100/50 backdrop-blur-xs">
              <Sparkles className="h-3 w-3 fill-primary/10" /> Fully Stocked
            </div>
          </div>
        );
      case 'health-screenings':
        return (
          <div className="relative h-36 w-full overflow-hidden rounded-xl border border-slate-100 shadow-inner">
            <img
              src="/health-screenings.jpg"
              alt="Health Screenings"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1 rounded-md bg-white/95 px-2 py-0.5 text-[9px] text-accent font-black uppercase tracking-wider shadow-sm border border-slate-100/50 backdrop-blur-xs">
              <Sparkles className="h-3 w-3 fill-accent/10" /> Fast Reports
            </div>
          </div>
        );
      case 'otc-essentials':
        return (
          <div className="relative h-36 w-full overflow-hidden rounded-xl border border-slate-100 shadow-inner">
            <img
              src="/otc-essentials.jpg"
              alt="OTC Essentials"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1 rounded-md bg-white/95 px-2 py-0.5 text-[9px] text-amber-600 font-black uppercase tracking-wider shadow-sm border border-slate-100/50 backdrop-blur-xs">
              <Sparkles className="h-3 w-3 fill-amber-500/10" /> Daily Wellness
            </div>
          </div>
        );
      case 'medical-devices':
        return (
          <div className="relative h-36 w-full overflow-hidden rounded-xl border border-slate-100 shadow-inner">
            <img
              src="/medical-devices.jpg"
              alt="Medical Devices"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-80" />
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1 rounded-md bg-white/95 px-2 py-0.5 text-[9px] text-indigo-600 font-black uppercase tracking-wider shadow-sm border border-slate-100/50 backdrop-blur-xs">
              <Sparkles className="h-3 w-3 fill-indigo-500/10" /> Calibrated
            </div>
          </div>
        );
      default:
        return (
          <div className="flex h-36 w-full items-center justify-center rounded-xl bg-slate-100 text-slate-400 text-xs">
            Image Placeholder
          </div>
        );
    }
  };

  return (
    <section id="retail" className="py-16 md:py-24 bg-slate-50/50">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-8">
        
        {/* Section Header with Quick Checkup Badge */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-2xs font-bold tracking-wider text-primary uppercase mb-2">
              {siteConfig.retailSection.category}
            </p>
            <h2 className="font-sans text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
              {siteConfig.retailSection.title}
            </h2>
          </div>
          
          {/* Quick Checkup Box */}
          <div className="max-w-sm rounded-xl border border-sky-100 bg-sky-50/70 p-4 shadow-2xs">
            <h4 className="text-xs font-extrabold text-primary flex items-center gap-1.5 mb-1">
              <Activity className="h-4.5 w-4.5" />
              {siteConfig.retailSection.quickCheckup.title}
            </h4>
            <p className="text-2xs text-slate-600 leading-relaxed font-medium">
              {siteConfig.retailSection.quickCheckup.desc}
            </p>
          </div>
        </div>

        {/* 4-Column Services Cards Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {siteConfig.retailSection.services.map((service) => (
            <div
              key={service.id}
              className="flex flex-col rounded-2xl bg-white p-4 premium-card-shadow group"
            >
              {/* Top Graphic Placeholder */}
              <div className="mb-4">
                {renderGraphic(service.id)}
              </div>

              {/* Title & Description */}
              <div className="flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-base font-bold text-secondary mb-1.5">{service.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed mb-4">{service.desc}</p>
                </div>

                {/* Enquire CTA link */}
                <a
                  href={service.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-xs font-extrabold text-primary hover:text-primary-hover group w-fit transition-colors"
                >
                  {service.linkText}
                  <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                </a>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

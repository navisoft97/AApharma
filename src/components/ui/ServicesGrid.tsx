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
          <div className="relative flex h-36 w-full items-center justify-center rounded-xl bg-sky-50 overflow-hidden border border-sky-100/50">
            <div className="absolute inset-0 bg-radial-gradient from-sky-200/30 to-transparent" />
            <div className="relative flex items-center justify-center gap-2">
              <div className="flex h-16 w-10 items-center justify-center rounded-lg bg-primary text-white shadow-md transform -rotate-12">
                <Pill className="h-6 w-6" />
              </div>
              <div className="flex h-12 w-10 items-center justify-center rounded-lg bg-accent text-white shadow-md transform rotate-12">
                <span className="text-sm font-bold">Rx</span>
              </div>
            </div>
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-3xs text-primary font-bold">
              <Sparkles className="h-3 w-3" /> Fully Stocked
            </div>
          </div>
        );
      case 'health-screenings':
        return (
          <div className="relative flex h-36 w-full items-center justify-center rounded-xl bg-emerald-50 overflow-hidden border border-emerald-100/50">
            <div className="absolute inset-0 bg-radial-gradient from-emerald-200/30 to-transparent" />
            <div className="relative flex items-center justify-center">
              <div className="flex h-16 w-14 flex-col rounded-lg bg-white p-2.5 shadow-md border border-slate-100">
                <div className="h-2 w-full bg-slate-200 rounded-full mb-1.5" />
                <div className="h-1.5 w-[70%] bg-accent rounded-full mb-1" />
                <div className="h-1.5 w-[85%] bg-slate-200 rounded-full mb-1" />
                <div className="h-1.5 w-[50%] bg-primary rounded-full" />
              </div>
              <div className="absolute -bottom-1 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white shadow-md">
                <HeartPulse className="h-4.5 w-4.5" />
              </div>
            </div>
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-3xs text-accent font-bold">
              <Sparkles className="h-3 w-3" /> Fast Reports
            </div>
          </div>
        );
      case 'otc-essentials':
        return (
          <div className="relative flex h-36 w-full items-center justify-center rounded-xl bg-amber-50 overflow-hidden border border-amber-100/50">
            <div className="absolute inset-0 bg-radial-gradient from-amber-200/30 to-transparent" />
            <div className="relative flex items-center justify-center gap-1.5">
              <div className="h-12 w-12 rounded-xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-amber-500 font-bold">
                C
              </div>
              <div className="h-10 w-10 rounded-xl bg-amber-500 text-white shadow-sm flex items-center justify-center font-bold">
                D3
              </div>
              <div className="h-8 w-8 rounded-xl bg-amber-100 text-amber-800 flex items-center justify-center text-xs font-bold">
                Zn
              </div>
            </div>
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-3xs text-amber-600 font-bold">
              <Sparkles className="h-3 w-3" /> Daily Wellness
            </div>
          </div>
        );
      case 'medical-devices':
        return (
          <div className="relative flex h-36 w-full items-center justify-center rounded-xl bg-indigo-50 overflow-hidden border border-indigo-100/50">
            <div className="absolute inset-0 bg-radial-gradient from-indigo-200/30 to-transparent" />
            <div className="relative flex flex-col items-center justify-center rounded-lg bg-white p-2.5 shadow-md border border-slate-100 w-24">
              <div className="flex items-center justify-between w-full mb-1">
                <span className="text-[10px] font-extrabold text-indigo-600">SYS</span>
                <span className="text-[10px] font-bold text-slate-800">120 mmHg</span>
              </div>
              <div className="w-full bg-slate-100 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-500 h-full w-[80%]" />
              </div>
              <div className="flex items-center justify-between w-full mt-1.5">
                <Stethoscope className="h-3.5 w-3.5 text-indigo-500" />
                <span className="text-[9px] font-black text-slate-400">PULSE: 72</span>
              </div>
            </div>
            <div className="absolute bottom-2.5 right-3 flex items-center gap-1 text-3xs text-indigo-600 font-bold">
              <Sparkles className="h-3 w-3" /> Calibrated
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
      <div className="mx-auto max-w-[1440px] px-4 lg:px-6">
        
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
              className="flex flex-col rounded-2xl bg-white p-4 premium-card-shadow"
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

'use client';

import React from 'react';
import { Calendar, Award, CheckCircle2, ShieldCheck, Stethoscope } from 'lucide-react';
import { siteConfig } from '@/config/content';

export default function Consultation() {
  return (
    <section id="clinic" className="py-16 md:py-24 bg-white">
      <div className="mx-auto max-w-[1440px] px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Details & Book Action */}
          <div className="flex flex-col space-y-6 lg:col-span-6">
            <div>
              <p className="text-2xs font-bold tracking-wider text-primary uppercase mb-2">
                {siteConfig.consultationSection.category}
              </p>
              <h2 className="font-sans text-3xl font-extrabold tracking-tight text-secondary sm:text-4xl">
                {siteConfig.consultationSection.title}
              </h2>
            </div>
            
            <p className="text-sm leading-relaxed text-slate-555 max-w-xl">
              {siteConfig.consultationSection.desc}
            </p>

            {/* Structured Specifications Bullet Items */}
            <div className="space-y-4 pt-2">
              
              {/* Doctor Availability Item */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-50 text-primary border border-sky-100/50">
                  <Calendar className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary">
                    {siteConfig.consultationSection.bullets[0].title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {siteConfig.consultationSection.bullets[0].desc}
                  </p>
                </div>
              </div>

              {/* Fitness Certificates Item */}
              <div className="flex gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-50 text-accent border border-emerald-100/50">
                  <Award className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary">
                    {siteConfig.consultationSection.bullets[1].title}
                  </h4>
                  <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                    {siteConfig.consultationSection.bullets[1].desc}
                  </p>
                </div>
              </div>

            </div>

            {/* Action button */}
            <div className="pt-4">
              <a
                href={siteConfig.consultationSection.ctaButton.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-primary-hover transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Stethoscope className="h-4.5 w-4.5" />
                {siteConfig.consultationSection.ctaButton.label}
              </a>
            </div>

          </div>

          {/* Right Column: Graphic mockup with badge overlay */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative w-full max-w-md h-[340px] rounded-2xl bg-gradient-to-tr from-slate-100 to-sky-50/50 border border-slate-200/50 shadow-xl flex items-center justify-center p-6 overflow-hidden">
              
              {/* Decorative backgrounds */}
              <div className="absolute top-0 right-0 h-40 w-40 rounded-full bg-sky-200/10 blur-xl" />
              <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-emerald-200/10 blur-xl" />
              
              {/* Premium Stethoscope/Medical graphic panel mockup */}
              <div className="relative flex flex-col items-center text-center max-w-xs space-y-4">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white text-primary shadow-lg border border-slate-100/80">
                  <Stethoscope className="h-10 w-10 text-primary animate-pulse" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-secondary">Diagnostic Consultations</h4>
                  <p className="text-2xs text-slate-500 leading-normal mt-1.5">
                    Licensed clinic workspace equipped for blood pressure, blood glucose audits, and corporate physical testing.
                  </p>
                </div>
                <div className="flex items-center gap-1 bg-white border border-slate-100 rounded-full px-3 py-1 shadow-2xs">
                  <ShieldCheck className="h-4 w-4 text-primary" />
                  <span className="text-3xs font-extrabold text-slate-600">WHO Standards Compliant</span>
                </div>
              </div>

              {/* Verified Provider Checkmark Badge */}
              <div className="absolute bottom-4 left-4 right-4 bg-white rounded-xl border border-slate-200/80 p-3 shadow-xl flex items-center gap-3">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-accent text-white shadow-sm">
                  <CheckCircle2 className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="text-2xs font-black text-secondary uppercase tracking-wider">
                    {siteConfig.consultationSection.doctorCard.badge}
                  </h4>
                  <p className="text-3xs font-semibold text-slate-500">
                    {siteConfig.consultationSection.doctorCard.subBadge}
                  </p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

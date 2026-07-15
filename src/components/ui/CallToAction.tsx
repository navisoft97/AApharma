'use client';

import React from 'react';
import { Mail } from 'lucide-react';
import { siteConfig } from '@/config/content';

export default function CallToAction() {
  return (
    <section className="py-12 bg-white">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-8">
        
        {/* Full-width colored card anchor */}
        <div className="rounded-3xl bg-primary p-6 md:p-10 shadow-xl border border-primary-hover flex flex-col md:flex-row md:items-center md:justify-between gap-6 relative overflow-hidden">
          
          {/* Subtle light background circles for design flair */}
          <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-white/5" />
          <div className="absolute -bottom-16 -left-16 h-44 w-44 rounded-full bg-white/5" />
          
          <div className="space-y-2 relative z-10">
            <h3 className="font-sans text-2xl font-black tracking-tight text-white sm:text-3xl">
              {siteConfig.ctaBanner.title}
            </h3>
            <p className="text-sm text-sky-100 max-w-xl">
              {siteConfig.ctaBanner.desc}
            </p>
          </div>

          <div className="shrink-0 relative z-10">
            <a
              href={siteConfig.ctaBanner.ctaButton.href}
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 text-sm font-bold text-primary shadow-lg shadow-black/10 hover:bg-sky-50 transition-all hover:-translate-y-0.5 active:translate-y-0"
            >
              <Mail className="h-4.5 w-4.5" />
              {siteConfig.ctaBanner.ctaButton.label}
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}

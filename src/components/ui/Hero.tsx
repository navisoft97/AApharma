'use client';

import React from 'react';
import { MessageSquareCode, Send, ShieldCheck, Heart, User, CheckCircle2, Sparkles } from 'lucide-react';
import { siteConfig } from '@/config/content';

export default function Hero() {
  return (
    <section className="relative overflow-hidden hero-gradient pb-20 pt-12 md:pb-28 md:pt-20">
      
      {/* Subtle Background Glows */}
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute top-1/3 right-1/4 h-96 w-96 rounded-full bg-accent/5 blur-3xl" />

      <div className="mx-auto max-w-[1440px] px-4 lg:px-6">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Headline and CTAs */}
          <div className="flex flex-col space-y-6 lg:col-span-6">
            
            {/* Small Community Badge */}
            <div className="inline-flex w-fit items-center gap-1.5 rounded-full bg-white px-3.5 py-1 text-xs font-bold text-primary border border-slate-200/80 shadow-2xs">
              <span className="flex h-2 w-2 items-center justify-center rounded-full bg-accent animate-pulse" />
              {siteConfig.hero.badge}
            </div>

            {/* H1 Title */}
            <h1 className="font-sans text-4xl font-extrabold tracking-tight text-secondary sm:text-5xl lg:text-6xl lg:leading-tight">
              Retail Pharmacy <br className="hidden sm:inline" />
              <span className="text-primary font-black">&amp; Corporate</span> <br />
              Healthcare
            </h1>

            {/* Description */}
            <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
              {siteConfig.hero.description}
            </p>

            {/* Dual CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center pt-2">
              <a
                href={siteConfig.hero.ctaWhatsApp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2.5 rounded-xl bg-accent px-6 py-4 text-sm font-bold text-white shadow-md shadow-accent/20 hover:bg-accent-hover transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <MessageSquareCode className="h-5 w-5" />
                {siteConfig.hero.ctaWhatsApp.label}
              </a>
              <a
                href={siteConfig.hero.ctaCorporate.href}
                className="flex items-center justify-center gap-2.5 rounded-xl bg-primary px-6 py-4 text-sm font-bold text-white shadow-md shadow-primary/20 hover:bg-primary-hover transition-all hover:-translate-y-0.5 active:translate-y-0"
              >
                <Send className="h-5 w-5" />
                {siteConfig.hero.ctaCorporate.label}
              </a>
            </div>

          </div>

          {/* Right Column: Premium Dashboard / Mockup Card with Floating Stats */}
          <div className="relative lg:col-span-6 flex justify-center">
            
            {/* The Main UI Mockup Panel Card */}
            <div className="relative w-full max-w-lg rounded-2xl border border-slate-200/60 bg-white p-5 shadow-2xl">
              
              {/* Mockup Header */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-3 w-3 rounded-full bg-red-400" />
                  <div className="h-3 w-3 rounded-full bg-yellow-400" />
                  <div className="h-3 w-3 rounded-full bg-green-400" />
                </div>
                <div className="flex items-center gap-1.5 rounded-full bg-accent/15 px-2.5 py-0.5 text-2xs font-semibold text-accent">
                  <Sparkles className="h-3 w-3" />
                  On-Demand Healthcare
                </div>
              </div>

              {/* Mockup Panel Content */}
              <div className="space-y-4">
                
                {/* Doctor Active card */}
                <div className="flex items-center justify-between rounded-xl bg-slate-50 p-3.5 border border-slate-100">
                  <div className="flex items-center gap-3">
                    <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50 text-accent font-bold">
                      <User className="h-5 w-5 text-accent" />
                      <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full bg-accent border-2 border-white" />
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-secondary">In-House General Physician</h4>
                      <p className="text-3xs text-slate-500">Dr. Rahul K., MBBS, MD (On-Duty)</p>
                    </div>
                  </div>
                  <span className="rounded-md bg-accent/10 px-2 py-0.5 text-3xs font-extrabold text-accent">
                    AVAILABLE
                  </span>
                </div>

                {/* Services list in mockup */}
                <div>
                  <h5 className="text-2xs font-bold uppercase tracking-wider text-slate-400 mb-2">Walk-In Retail Pharmacy</h5>
                  <div className="grid grid-cols-2 gap-2.5">
                    
                    <div className="rounded-lg border border-slate-150 p-2.5 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        <span className="text-3xs font-extrabold text-secondary">Prescriptions</span>
                      </div>
                      <p className="text-4xs text-slate-500 leading-normal">Fast, verified dispensing</p>
                    </div>

                    <div className="rounded-lg border border-slate-150 p-2.5 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        <span className="text-3xs font-extrabold text-secondary">OTC Essentials</span>
                      </div>
                      <p className="text-4xs text-slate-500 leading-normal">24/7 medicine availability</p>
                    </div>

                    <div className="rounded-lg border border-slate-150 p-2.5 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        <span className="text-3xs font-extrabold text-secondary">Diagnostic Tests</span>
                      </div>
                      <p className="text-4xs text-slate-500 leading-normal">Fast report turnaround</p>
                    </div>

                    <div className="rounded-lg border border-slate-150 p-2.5 hover:bg-slate-50 transition-colors">
                      <div className="flex items-center gap-1.5 mb-1">
                        <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                        <span className="text-3xs font-extrabold text-secondary">Health Screenings</span>
                      </div>
                      <p className="text-4xs text-slate-500 leading-normal">Blood sugar, BP, & BMI</p>
                    </div>

                  </div>
                </div>

                {/* Micro operational card */}
                <div className="rounded-xl bg-primary/5 p-3.5 border border-primary/10 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Heart className="h-4.5 w-4.5 text-primary animate-pulse" />
                    <div>
                      <h4 className="text-3xs font-bold text-secondary">Drug License Audited</h4>
                      <p className="text-4xs text-slate-500">100% genuine wholesale batch traceability</p>
                    </div>
                  </div>
                  <ShieldCheck className="h-4.5 w-4.5 text-primary" />
                </div>

              </div>

              {/* Floating Bottom Metrics Overlay Panel */}
              <div className="absolute -bottom-8 left-1/2 w-[92%] -translate-x-1/2 rounded-xl bg-primary shadow-xl divide-x divide-white/10 flex py-3.5 justify-around text-center border border-primary-hover">
                {siteConfig.hero.stats.map((stat, i) => (
                  <div key={i} className="flex-1 px-2">
                    <p className="text-lg font-black text-white leading-none tracking-tight sm:text-xl">{stat.value}</p>
                    <p className="text-4xs font-bold text-sky-200 tracking-wider uppercase mt-1">{stat.label}</p>
                  </div>
                ))}
              </div>

            </div>

          </div>

        </div>
      </div>
      
    </section>
  );
}

'use client';

import React from 'react';
import { Activity } from 'lucide-react';
import { siteConfig } from '@/config/content';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 md:px-12 lg:px-8">

        {/* Brand Logo & Tag */}
        <div className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/20">
            <Activity className="h-6 w-6" />
          </div>
          <div>
            <div className="flex items-center gap-1.5">
              <span className="font-sans text-lg font-bold tracking-tight text-secondary">
                {siteConfig.logoText}
              </span>
            </div>
            <p className="text-2xs leading-3 text-slate-500 font-medium">{siteConfig.logoSubtext}</p>
          </div>
        </div>

        {/* Middle Status Badge (Desktop only) */}
        <div className="hidden lg:flex items-center gap-1.5 rounded-full bg-sky-50/60 px-3.5 py-1.5 text-xs font-semibold text-primary border border-sky-100">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          {siteConfig.tagline}
        </div>

        {/* Navigation Links & Action Badge */}
        <div className="flex items-center gap-6 md:gap-8">
          <nav className="hidden md:flex items-center gap-6">
            {siteConfig.navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/bill-gen"
              className="text-sm font-bold text-primary hover:text-primary-hover hover:underline transition-colors"
            >
              Bill Generator
            </a>
          </nav>

        </div>

      </div>
    </header>
  );
}

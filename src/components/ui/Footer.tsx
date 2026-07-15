'use client';

import React from 'react';
import { Activity, ShieldAlert } from 'lucide-react';
import { siteConfig } from '@/config/content';

export default function Footer() {
  return (
    <footer id="about" className="bg-footer-bg text-slate-400 pt-16 pb-8 border-t border-slate-900">
      <div className="mx-auto max-w-[1440px] px-6 md:px-12 lg:px-8">

        {/* Three-Column Grid */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-8 pb-12 border-b border-slate-800">

          {/* Column 1: Logo, Brand details & Operating Hours */}
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary text-white shadow-md shadow-primary/20">
                <Activity className="h-5.5 w-5.5" />
              </div>
              <div>
                <span className="font-sans text-base font-bold tracking-tight text-white block">
                  {siteConfig.name}
                </span>
                <p className="text-3xs leading-3 text-slate-500 font-medium">{siteConfig.logoSubtext}</p>
              </div>
            </div>

            {/* Operating Hours Table */}
            <div className="space-y-2.5">
              <h4 className="text-3xs font-extrabold text-white uppercase tracking-wider">
                {siteConfig.footer.operatingHours.title}
              </h4>
              <div className="divide-y divide-slate-800 text-2xs font-semibold">
                {siteConfig.footer.operatingHours.schedule.map((item, i) => (
                  <div key={i} className="flex justify-between py-1.5 first:pt-0 last:pb-0">
                    <span className="text-slate-400">{item.days}</span>
                    <span className="text-white">{item.hours}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Column 2: Google Maps Embed Card & Full Address */}
          <div className="space-y-4">

            {/* Interactive Google Map Embed */}
            <div className="relative h-44 w-full rounded-2xl bg-slate-900 border border-slate-800 overflow-hidden group hover:border-primary/50 transition-colors shadow-inner">
              <iframe
                title="Google Maps Location - A&A Pharma Bommasandra"
                src="https://maps.google.com/maps?q=12.8227108,77.6864084&t=&z=15&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0 grayscale opacity-85 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
              <a
                href={siteConfig.contact.address.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-3 right-3 bg-slate-950/80 hover:bg-slate-900 text-white border border-slate-800 rounded-lg px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider transition-all hover:scale-105"
              >
                Open in Maps
              </a>
            </div>

            {/* Address Credentials */}
            <a 
              href={siteConfig.contact.address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-2xs font-semibold leading-relaxed hover:text-slate-300 transition-colors group/addr"
            >
              <p className="text-white font-bold group-hover/addr:text-primary transition-colors">{siteConfig.contact.address.name}</p>
              <p className="text-slate-400 mt-0.5">{siteConfig.contact.address.street}</p>
              <p className="text-slate-500">{siteConfig.contact.address.cityStateZip}</p>
            </a>

          </div>

          {/* Column 3: Licenses & Registrations Registry */}
          <div className="space-y-4">
            <h4 className="text-3xs font-extrabold text-white uppercase tracking-wider">
              {siteConfig.footer.licenses.title}
            </h4>
            <div className="divide-y divide-slate-800 text-2xs font-semibold">
              {siteConfig.footer.licenses.list.map((license, i) => (
                <div key={i} className="flex justify-between py-2 first:pt-0 last:pb-0">
                  <span className="text-slate-400">{license.label}</span>
                  <span className="text-white text-right font-mono">{license.value}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Delivery & Safety Warning Alert Container */}
        <div className="mt-8 rounded-2xl border border-amber-900/30 bg-amber-950/15 p-4 flex gap-3.5 items-start text-amber-500/90 leading-relaxed shadow-sm">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-amber-950/30 border border-amber-900/50 text-amber-500 mt-0.5">
            <ShieldAlert className="h-5 w-5" />
          </div>
          <div>
            <h4 className="text-2xs font-black uppercase tracking-wider mb-1 text-amber-400">
              {siteConfig.footer.disclaimer.title}
            </h4>
            <p className="text-3xs font-medium text-amber-600/80 leading-normal">
              {siteConfig.footer.disclaimer.text}
            </p>
          </div>
        </div>

        {/* Footer Bottom copyright bar */}
        <div className="mt-8 pt-6 border-t border-slate-900 text-center">
          <p className="text-[10px] font-bold text-slate-600 uppercase tracking-widest">
            {siteConfig.footer.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}

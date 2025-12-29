"use client";

import React from "react";

const About = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black px-4 py-24 flex items-center md:px-10">
      {/* Background Decor - Ambient Lighting */}
      <div className="pointer-events-none absolute top-1/4 -right-20 -z-10 h-150 w-150 rounded-full bg-blue-600/5 blur-[160px]" />
      <div className="pointer-events-none absolute bottom-0 -left-20 -z-10 h-150 w-150 rounded-full bg-indigo-600/5 blur-[160px]" />

      <div className="mx-auto max-w-7xl w-full">
        <div className="grid gap-16 lg:grid-cols-12 lg:items-center">
          
          {/* KOLOM KIRI: TEKS & STORY */}
          <div className="lg:col-span-7 space-y-12 order-2 lg:order-1">
            <header className="space-y-4">
              <div className="flex items-center gap-4">
                <p className="text-[10px] font-bold text-blue-500 uppercase tracking-[0.5em]">
                  The Identity
                </p>
                <span className="h-px flex-1 max-w-12 bg-blue-500/30" />
              </div>
              
              <h2 className="text-6xl font-black tracking-tighter text-white md:text-8xl leading-[0.8] uppercase">
                Digital <br /> 
                <span className="bg-linear-to-r from-blue-400 to-indigo-500 bg-clip-text text-transparent italic">Alchemist.</span>
              </h2>
            </header>

            <div className="space-y-8">
              <p className="text-2xl md:text-3xl leading-tight text-white/90 font-light max-w-2xl">
                Menjembatani celah antara <span className="text-blue-400 font-medium">imajinasi</span> dan realitas digital melalui kode yang presisi.
              </p>
              
              <div className="h-px w-full bg-linear-to-r from-white/10 to-transparent" />

              <p className="text-sm md:text-base leading-relaxed text-gray-500 max-w-xl">
                Saya Saipul, seorang pengembang yang berbasis di Indonesia dengan obsesi pada detail visual. Saya tidak hanya membangun situs web; saya menciptakan pengalaman digital yang berkesan, cepat, dan intuitif bagi pengguna di seluruh dunia.
              </p>
            </div>

            {/* Services/Focus - Elegan & Minimalis */}
            <div className="flex flex-wrap gap-8 md:gap-16">
              <div className="group">
                <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest transition-colors group-hover:text-blue-400">01. Interaction</p>
                <p className="mt-1 text-sm text-white/80 font-medium uppercase">Creative Frontend</p>
              </div>
              <div className="group">
                <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest transition-colors group-hover:text-blue-400">02. Architecture</p>
                <p className="mt-1 text-sm text-white/80 font-medium uppercase">Scalable Web App</p>
              </div>
              <div className="group">
                <p className="text-[9px] font-bold text-gray-600 uppercase tracking-widest transition-colors group-hover:text-blue-400">03. Branding</p>
                <p className="mt-1 text-sm text-white/80 font-medium uppercase">Visual Identity</p>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: FOTO PROFIL (High-End Frame) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative">
              {/* Efek Cahaya Belakang Foto */}
              <div className="absolute -inset-1 bg-linear-to-tr from-blue-500/20 to-purple-500/20 rounded-3xl blur-2xl opacity-50 transition-opacity duration-700 group-hover:opacity-100" />
              
              <div className="relative group overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-2 backdrop-blur-3xl">
                {/* Container Foto */}
                <div className="relative h-96 w-72 md:h-120 md:w-90 overflow-hidden rounded-xl bg-gray-950 shadow-inner">
                  <img 
                    src="/img/MY.jpg" 
                    alt="Saipul Profile" 
                    className="h-full w-full object-cover transition-all duration-1000 group-hover:scale-105 group-hover:rotate-1"
                  />
                  {/* Overlay Gradasi Tipis */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
                  
                  {/* Floating ID Card Info (Hanya muncul di Desktop) */}
                  <div className="absolute bottom-6 left-6 hidden md:block">
                    <p className="text-[8px] font-bold text-blue-500 uppercase tracking-widest">Dev Status</p>
                    <div className="flex items-center gap-2">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-green-500" />
                      <p className="text-[10px] font-bold text-white uppercase">Available for Hire</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Elemen Dekoratif: Floating Text */}
              <div className="absolute -top-6 -left-6 h-20 w-20 border-t border-l border-blue-500/30" />
              <div className="absolute -bottom-6 -right-6 h-20 w-20 border-b border-r border-blue-500/30" />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
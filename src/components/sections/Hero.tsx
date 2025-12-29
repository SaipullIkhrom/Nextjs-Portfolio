"use client";

import { useEffect, useState } from "react";
import React from "react";
import Folder from "@/components/reactbits/Folder";

const Hero = () => {
  // State untuk menangani Hydration Mismatch
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const folderData = [
    { 
      title: "CODING", 
      desc: "Aku hobi coding karena suka memecahkan masalah, belajar logika, membangun aplikasi, dan berkreasi dengan teknologi setiap hari secara kreatif online.", 
      img: "/img/Coding.png" 
    },
    { 
      title: "Mancing", 
      desc: "Aku hobi mancing karena menikmati ketenangan alam, menunggu ikan, belajar kesabaran, merawat alat, dan menikmati hasil setiap hari bersama teman.", 
      img: "/img/Mancing.jpg" 
    },
    { 
      title: "Games", 
      desc: "Aku hobi game karena melatih strategi, refleks, kerja tim, bersenang-senang, mengisi waktu luang, dan menantang diri sendiri setiap hari online.", 
      img: "/img/ML.jpg" 
    },
  ];

  // Mencegah konten interaktif dirender di server side
  if (!mounted) {
    return <section className="min-h-screen bg-black" />;
  }

  return (
    <section className="relative flex min-h-screen items-center justify-center bg-black px-6 pt-20 overflow-hidden">
      {/* Background Glow - Tanpa Yellow Line (v4 spacing) */}
      <div className="pointer-events-none absolute top-1/2 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/5 blur-[120px]" />

      <div className="flex w-full max-w-6xl flex-col items-center justify-between gap-12 md:flex-row">
        
        {/* Sisi Kiri: Foto Profil & Judul */}
        <div className="flex flex-1 flex-col items-start animate-in fade-in slide-in-from-left duration-1000">
          <div className="group relative aspect-3/4 w-full max-w-80 overflow-hidden rounded-2xl border border-blue-500/30 bg-blue-500/10 p-1 shadow-2xl transition-all duration-500 hover:border-blue-500/60">
            
            <img 
              src="/img/MY.jpg" 
              alt="Saipul Profile" 
              className="h-full w-full rounded-xl object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
            />

            {/* Efek Kaca Tailwind v4 */}
            <div className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-linear-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />

            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
          </div>
          
          <div className="mt-8">
            <h1 className="bg-linear-to-r from-white to-blue-500 bg-clip-text text-6xl font-black tracking-tighter text-transparent md:text-8xl">
              SaipulDev
            </h1>
            <div className="flex items-center gap-4 mt-2">
              <span className="h-px w-10 bg-blue-500" />
              <p className="text-xs font-medium tracking-[0.4em] uppercase text-blue-400">
                Creative Developer / 2025
              </p>
            </div>
          </div>
        </div>

        {/* Sisi Kanan: Folder Journey */}
        <div className="flex flex-1 items-center justify-center animate-in fade-in zoom-in duration-1000 delay-200">
          <div className="relative">
            <Folder 
              items={folderData} 
              size={3.2} 
              color="#3b82f6" 
              className="mx-auto"
            />
            {/* Animasi teks petunjuk */}
            <div className="absolute -bottom-32 left-1/2 w-full -translate-x-1/2 text-center">
              <p className="text-[10px] font-bold tracking-[0.3em] text-gray-500 uppercase animate-pulse">
                Click folder to explore
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
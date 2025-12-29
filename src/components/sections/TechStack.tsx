"use client";
import React from "react";

const TechStack = () => {
  const skills = [
    "Next.js", "React", "TypeScript", "Tailwind CSS", 
    "Framer Motion", "Node.js", "Prisma", "PostgreSQL"
  ];

  return (
    <section className="bg-black py-20 overflow-hidden border-y border-white/5">
      <div className="flex flex-col gap-10">
        <h2 className="text-center text-[10px] tracking-[0.6em] text-blue-500/50 uppercase font-medium">
          Tech Stack & Tools
        </h2>
        
        <div className="relative flex w-full overflow-hidden">
          {/* Masking Gradient Kiri & Kanan */}
          <div className="absolute inset-y-0 left-0 z-10 w-24 bg-linear-to-r from-black to-transparent" />
          <div className="absolute inset-y-0 right-0 z-10 w-24 bg-linear-to-l from-black to-transparent" />

          {/* Wrapper Animasi */}
          <div className="flex animate-infinite-scroll whitespace-nowrap py-4">
            {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
              <div 
                key={index} 
                className="group mx-10 flex items-center gap-4 cursor-default"
              >
                {/* Simbol Hash dengan transisi warna */}
                <span className="text-3xl md:text-5xl font-bold text-blue-500/20 group-hover:text-blue-400 transition-all duration-300">
                  #
                </span>
                
                {/* Nama Skill dengan Efek Glow saat Hover */}
                <span className="text-3xl md:text-5xl font-bold text-white/20 transition-all duration-500 group-hover:text-white group-hover:text-glow-blue group-hover:scale-110">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
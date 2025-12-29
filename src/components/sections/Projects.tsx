"use client";

import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const projectsData = [
  {
    title: "EcoHarvest Connect",
    description: "Platform e-commerce revolusioner untuk petani lokal, menghubungkan produsen dengan konsumen.",
    techStack: ["React", "Next.js"],
    image: "/img/Coding.png",
  },
  {
    title: "AuraUI Design",
    description: "Kumpulan komponen UI yang konsisten untuk mempercepat pengembangan frontend.",
    techStack: ["Tailwind", "GSAP"],
    image: "/img/Mancing.jpg",
  },
  {
    title: "Real-time Chat",
    description: "Aplikasi obrolan real-time dengan WebSockets dan notifikasi instan.",
    techStack: ["Socket.io", "Node.js"],
    image: "/img/ML.jpg",
  },
  {
    title: "Quantum Blog",
    description: "Mesin blog performa tinggi dengan fitur SEO dan editor kaya teks.",
    techStack: ["Astro", "MDX"],
    image: "/img/Coding.png",
  },
  {
    title: "Fitness Tracker",
    description: "Aplikasi pelacak kebugaran dengan visualisasi data interaktif.",
    techStack: ["Vue.js", "Firebase"],
    image: "/img/Mancing.jpg",
  },
  {
    title: "VoiceID.dev",
    description: "Sistem otentikasi suara berbasis AI untuk keamanan berlapis.",
    techStack: ["Python", "React"],
    image: "/img/ML.jpg",
  },
];

const Projects = () => {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black px-4 py-32 md:px-6">
      {/* Background Decor - Menggunakan variabel spacing v4 */}
      <div className="pointer-events-none absolute top-0 left-1/2 -z-10 h-125 w-125 -translate-x-1/2 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="mx-auto max-w-6xl">
        <div className="mb-20 space-y-4 text-center">
          <h2 className="text-5xl font-black tracking-tighter text-white md:text-8xl uppercase leading-none">
            Selected <span className="text-blue-500 italic">Works</span>
          </h2>
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-blue-500/50" />
            <p className="text-[10px] font-bold tracking-[0.4em] text-gray-500 uppercase">
              Innovation & Excellence
            </p>
            <span className="h-px w-8 bg-blue-500/50" />
          </div>
        </div>

        {/* Grid 2 kolom di mobile, 3 di desktop */}
        <div className="grid grid-cols-2 gap-4 md:gap-8 lg:grid-cols-3">
          {projectsData.map((project, index) => (
            <div
              key={index}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/5 bg-white/5 p-3 backdrop-blur-xl transition-all duration-500 hover:border-blue-500/40 hover:bg-white/10 md:p-5"
            >
              {/* Image Container dengan efek Overlay */}
              <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-gray-950 md:aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover opacity-80 transition-all duration-700 group-hover:scale-110 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>

              {/* Content */}
              <div className="mt-4 flex flex-1 flex-col space-y-2 md:mt-6">
                <div className="flex items-start justify-between">
                  <h3 className="text-sm font-bold text-white transition-colors group-hover:text-blue-400 md:text-xl">
                    {project.title}
                  </h3>
                  <GoArrowUpRight className="hidden text-xl text-gray-500 transition-all group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-blue-500 md:block" />
                </div>
                
                <p className="hidden text-xs leading-relaxed text-gray-500 line-clamp-2 md:block md:text-sm">
                  {project.description}
                </p>

                {/* Tech Tags dengan style lebih minimalis */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-md border border-white/5 bg-white/5 px-2 py-0.5 text-[8px] font-semibold text-gray-400 uppercase tracking-wider md:text-[10px]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Shine Effect Overlay */}
              <div className="pointer-events-none absolute inset-0 z-20 -translate-x-full bg-linear-to-r from-transparent via-white/5 to-transparent transition-transform duration-1000 ease-in-out group-hover:translate-x-full" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
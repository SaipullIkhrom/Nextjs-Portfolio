"use client";

import React, { useMemo } from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import TechStack from "@/components/sections/TechStack";
import Projects from "@/components/sections/Projects";
import Footer from "@/components/sections/Footer";
import CardNav, { CardNavItem } from "@/components/reactbits/CardNav";
import { LogoLoop, LogoItem } from "@/components/ui/LogoLoop";
import {
  VscHome,
  VscArchive,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

export default function Home() {
  const navItems: CardNavItem[] = useMemo(
    () => [
      {
        label: "Start",
        bgColor: "#1e1e1e",
        textColor: "#ffffff",
        links: [
          { label: "Home", href: "#home", ariaLabel: "Go to Home" },
          { label: "About", href: "#about", ariaLabel: "Go to About Me" },
        ],
      },
      {
        label: "Works",
        bgColor: "#3b82f6",
        textColor: "#ffffff",
        links: [
          { label: "Project", href: "#projects", ariaLabel: "Go to Projects" },
        ],
      },
      {
        label: "Contact",
        bgColor: "#ffffff",
        textColor: "#000000",
        links: [
          {
            label: "Github",
            href: "https://github.com/SaipullIkhrom",
            ariaLabel: "Github",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            label: "Instagram",
            href: "https://www.instagram.com/saipulikhromm/",
            ariaLabel: "Instagram",
            target: "_blank",
            rel: "noopener noreferrer",
          },
          {
            label: "WhatsApp",
            href: "https://wa.me/6289604210396",
            ariaLabel: "WhatsApp",
            target: "_blank",
            rel: "noopener noreferrer",
          },
        ],
      },
    ],
    []
  );

  const textLogos: LogoItem[] = useMemo(
    () => [
      {
        node: (
          <span className="font-black uppercase tracking-tighter text-white/10 hover:text-blue-500 transition-colors">
            Creative
          </span>
        ),
      },
      {
        node: (
          <span className="font-black uppercase tracking-tighter text-white/10 hover:text-blue-500 transition-colors">
            Innovation
          </span>
        ),
      },
      {
        node: (
          <span className="font-black uppercase tracking-tighter text-white/10 hover:text-blue-500 transition-colors">
            Performance
          </span>
        ),
      },
      {
        node: (
          <span className="font-black uppercase tracking-tighter text-white/10 hover:text-blue-500 transition-colors">
            Scalable
          </span>
        ),
      },
      {
        node: (
          <span className="font-black uppercase tracking-tighter text-white/10 hover:text-blue-500 transition-colors">
            Excellence
          </span>
        ),
      },
      {
        node: (
          <span className="font-black uppercase tracking-tighter text-white/10 hover:text-blue-500 transition-colors">
            Saipul.Dev
          </span>
        ),
      },
    ],
    []
  );

  // Animasi yang dioptimalkan untuk GPU (Hardware Acceleration)
  const ultraSmoothAnim = (
    direction: "left" | "right"
  ): HTMLMotionProps<"div"> => ({
    initial: {
      opacity: 0,
      x: direction === "left" ? -50 : 50,
      y: 20,
      scale: 0.98,
      filter: "blur(8px)",
    },
    whileInView: {
      opacity: 1,
      x: 0,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
    },
    viewport: { once: false, amount: 0.15 },
    transition: {
      type: "spring",
      stiffness: 35,
      damping: 20,
      mass: 1,
      restDelta: 0.001,
    },
    style: { willChange: "transform, opacity, filter" },
  });

  return (
    <main className="bg-black scroll-smooth overflow-x-hidden antialiased">
      {/* Navigation */}
      <CardNav logo="/img/MY.jpg" items={navItems} />

      {/* Hero Section */}
      <motion.div id="home" {...ultraSmoothAnim("left")}>
        <Hero />
      </motion.div>

      {/* About Section */}
      <motion.div
        id="about"
        {...ultraSmoothAnim("right")}
        className="relative z-10"
      >
        <About />
      </motion.div>

      {/* Tech Stack Section */}
      <motion.div {...ultraSmoothAnim("left")}>
        <TechStack />
      </motion.div>

      {/* Projects Section */}
      <motion.div id="projects" {...ultraSmoothAnim("right")}>
        <Projects />
      </motion.div>

      {/* Logo Loop / Running Text Divider */}
      <motion.div
        className="border-y border-white/5 bg-zinc-950/20 py-20 overflow-hidden"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        style={{ willChange: "transform, opacity" }}
      >
        <LogoLoop
          logos={textLogos}
          speed={100}
          direction="left"
          logoHeight={60}
          gap={80}
          scaleOnHover
          fadeOut
          fadeOutColor="#000000"
        />
      </motion.div>

      {/* Footer Section */}
      <Footer />
    </main>
  );
}

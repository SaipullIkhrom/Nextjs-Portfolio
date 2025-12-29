"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { 
  Github, 
  Instagram, 
  MessageCircle, 
  Mail, 
  MapPin, 
  Globe, 
  ChevronRight,
  ArrowUpRight,
  ShieldCheck
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const ultraSmoothAnim: HTMLMotionProps<"div"> = {
    initial: { 
      opacity: 0, 
      y: 40, 
      scale: 0.98, 
      filter: "blur(8px)" 
    },
    whileInView: { 
      opacity: 1, 
      y: 0, 
      scale: 1, 
      filter: "blur(0px)" 
    },
    viewport: { once: false, amount: 0.15 },
    transition: {
      type: "spring",
      stiffness: 35,
      damping: 20,
      mass: 1,
      duration: 1.5
    },
    style: { willChange: "transform, opacity, filter" }
  };

  const socialLinks = [
    { name: "Github", href: "https://github.com/saipul", icon: <Github size={20} />, hover: "hover:text-white hover:border-white/50" },
    { name: "Instagram", href: "https://instagram.com/saipul", icon: <Instagram size={20} />, hover: "hover:text-pink-500 hover:border-pink-500/50" },
    { name: "WhatsApp", href: "https://wa.me/628123456789", icon: <MessageCircle size={20} />, hover: "hover:text-green-500 hover:border-green-500/50" },
  ];

  return (
    <footer className="relative bg-black text-zinc-500 pt-32 pb-12 overflow-hidden border-t border-white/5 antialiased">
      
      {/* Efek Cahaya Dekoratif */}
      <div 
        className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 rounded-full bg-blue-600/10 blur-[120px] pointer-events-none" 
        style={{ width: '500px', height: '500px' }}
      />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Konten Utama */}
        <motion.div {...ultraSmoothAnim} className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-24">
          <div className="lg:col-span-4 space-y-8">
            <div className="space-y-4">
              <h3 className="text-white text-3xl font-bold tracking-tighter">
                SAIPUL<span className="text-blue-500">.</span>DEV
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 max-w-sm">
                A passionate developer dedicated to creating high-performance web applications 
                with exceptional user experiences.
              </p>
            </div>
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => (
                <a key={social.name} href={social.href} className={`group flex items-center justify-center w-11 h-11 rounded-xl bg-zinc-900/50 border border-white/5 transition-all duration-500 ${social.hover}`}>
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-12">
              {["Sitemap", "Resources", "Legal"].map((title) => (
                <div key={title} className="space-y-6">
                  <h4 className="text-white font-semibold text-xs uppercase tracking-[0.2em]">{title}</h4>
                  <ul className="space-y-4">
                    {["Home", "About", "Projects", "Contact"].map((item) => (
                      <li key={item}>
                        <a href="#" className="group flex items-center gap-2 text-sm transition-colors hover:text-white">
                          <ChevronRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-300 text-blue-500" />
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Kartu Kontak */}
        <motion.div 
          {...ultraSmoothAnim}
          transition={{ ...ultraSmoothAnim.transition as any, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-24"
        >
          {[
            { icon: <Mail className="text-blue-500" />, label: "Email Me", val: "hello@saipul.dev" },
            { icon: <MapPin className="text-blue-500" />, label: "Location", val: "Jakarta, Indonesia" },
            { icon: <ShieldCheck className="text-blue-500" />, label: "Available", val: "Freelance & Full-time" }
          ].map((card, i) => (
            <div key={i} className="p-8 rounded-2xl bg-zinc-900/30 border border-white/5 hover:border-white/10 transition-colors">
              <div className="mb-4">{card.icon}</div>
              <p className="text-xs uppercase tracking-widest text-zinc-600 mb-1">{card.label}</p>
              <p className="text-white font-medium">{card.val}</p>
            </div>
          ))}
        </motion.div>

        {/* Teks Besar */}
        <div className="relative pt-20 pb-12 border-t border-white/5">
          <motion.div
            initial={{ opacity: 0, y: 100, filter: "blur(20px)" }}
            whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: false }}
            className="text-center overflow-hidden"
          >
            <h2 className="text-[14vw] font-black leading-none tracking-[1vw] text-zinc-900 uppercase pointer-events-none hover:text-white transition-all duration-1000">
              SAIPUL
            </h2>
          </motion.div>
        </div>

        {/* Bar Bawah */}
        <motion.div 
          {...ultraSmoothAnim}
          className="pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <p className="text-[10px] tracking-widest uppercase text-zinc-600">
            © {currentYear} Personal Portfolio — Made with Precision
          </p>
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-[10px] uppercase tracking-widest text-zinc-600">System Status: Optimal</span>
            </div>
            <button 
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-3 rounded-full bg-white text-black hover:bg-blue-500 hover:text-white transition-all duration-300"
            >
              <ArrowUpRight size={20} />
            </button>
          </div>
        </motion.div>

      </div>
      <div className="h-12" />
    </footer>
  );
};

export default Footer;
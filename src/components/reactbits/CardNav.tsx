"use client";

import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { GoArrowUpRight } from 'react-icons/go';

type CardNavLink = {
  label: string;
  href: string;
  ariaLabel: string;
};

export type CardNavItem = {
  label: string;
  bgColor: string;
  textColor: string;
  links: CardNavLink[];
};

export interface CardNavProps {
  logo: string;
  items: CardNavItem[];
}

const CardNav: React.FC<CardNavProps> = ({ logo, items = [] }) => {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useLayoutEffect(() => {
    if (!navRef.current) return;

    gsap.set(navRef.current, { height: 60 });
    gsap.set(cardsRef.current, { y: 20, opacity: 0 });

    const tl = gsap.timeline({ paused: true })
      .to(navRef.current, { height: "auto", duration: 0.4, ease: "power3.out" })
      .to(cardsRef.current, { y: 0, opacity: 1, stagger: 0.1, duration: 0.3 }, "-=0.2");

    tlRef.current = tl;
    return () => { tl.kill(); };
  }, [items]);

  const toggleMenu = () => {
    if (!tlRef.current) return;
    if (!isOpen) {
      setIsOpen(true);
      tlRef.current.play();
    } else {
      tlRef.current.reverse().eventCallback("onReverseComplete", () => setIsOpen(false));
    }
  };

  return (
    <div className="fixed top-6 left-1/2 z-50 w-[90%] max-w-2xl -translate-x-1/2">
      <nav 
        ref={navRef}
        className="overflow-hidden rounded-2xl border border-white/10 bg-black shadow-2xl"
      >
        <div className="flex h-15 items-center justify-between px-6">
          <button onClick={toggleMenu} className="flex flex-col gap-1.5 focus:outline-hidden">
            <div className={`h-0.5 w-6 bg-blue-500 transition-all ${isOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <div className={`h-0.5 w-6 bg-blue-500 ${isOpen ? 'opacity-0' : ''}`} />
            <div className={`h-0.5 w-6 bg-blue-500 transition-all ${isOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </button>
          
          <img src={logo} alt="Logo" className="h-6 rounded-full opacity-80" />
          
          <div className="h-8 w-8 rounded-full bg-blue-500/10 border border-blue-500/20" />
        </div>

        <div className={`grid grid-cols-1 gap-2 p-2 md:grid-cols-3 ${isOpen ? 'block' : 'hidden'}`}>
          {items.map((item, i) => (
            <div 
              key={i} 
              ref={el => { if(el) cardsRef.current[i] = el; }}
              className="flex flex-col gap-4 rounded-xl p-4 transition-all hover:brightness-110"
              style={{ backgroundColor: item.bgColor, color: item.textColor }}
            >
              <p className="text-lg font-bold">{item.label}</p>
              <div className="flex flex-col gap-1">
                {item.links.map((link, j) => (
                  <a key={j} href={link.href} className="flex items-center gap-1 text-xs opacity-70 hover:opacity-100">
                    <GoArrowUpRight /> {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default CardNav;
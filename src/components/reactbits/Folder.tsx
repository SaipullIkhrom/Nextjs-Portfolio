"use client";
import React, { useState } from "react";

interface FolderProps {
  color?: string;
  size?: number;
  items?: { title: string; desc: string; img: string }[];
  className?: string;
}

const Folder: React.FC<FolderProps> = ({
  color = "#3b82f6",
  size = 1,
  items = [],
  className = "",
}) => {
  const [open, setOpen] = useState(false);
  const [activeIdx, setActiveIdx] = useState<number | null>(null);

  const handleFolderClick = () => {
    setOpen(!open);
    setActiveIdx(null);
  };

  const handlePaperClick = (e: React.MouseEvent, index: number) => {
    e.stopPropagation();
    if (!open) setOpen(true);
    else setActiveIdx(activeIdx === index ? null : index);
  };

  return (
    <div
      className={`relative flex items-center justify-center transition-transform duration-500 ${className}`}
      style={{
        transform: `scale(var(--folder-scale, ${size}))`,
      }}
    >
      <style jsx>{`
        div {
          --folder-scale: ${size * 0.6};
        }
        @media (min-width: 768px) {
          div {
            --folder-scale: ${size};
          }
        }
      `}</style>

      <div
        className="group relative h-20 w-28 cursor-pointer transition-transform duration-500"
        onClick={handleFolderClick}
        style={{ transform: open ? "translateY(-10px)" : "none" }}
      >
        {/* Back Cover */}
        <div className="absolute inset-0 rounded-lg bg-blue-900/40 shadow-inner">
          <div className="absolute -top-2 left-0 h-3 w-8 rounded-t-md bg-blue-900/40" />
        </div>

        {/* Papers */}
        {items.map((item, i) => {
          const isActive = activeIdx === i;
          return (
            <div
              key={i}
              onClick={(e) => handlePaperClick(e, i)}
              className={`absolute left-1/2 bottom-2 w-[85%] origin-bottom transition-all duration-500 ease-out
    ${!open ? "h-[70%] -translate-x-1/2 opacity-0" : "h-[90%] opacity-100"}
    ${isActive ? "z-50 shadow-2xl" : "z-20"}
  `}
              style={{
                backgroundColor: "white",
                borderRadius: "4px",
                height: isActive ? "150%" : undefined,
                width: isActive ? "130%" : undefined,
                transform: isActive
                  ? "translate(-50%, -10%) scale(1)"
                  : open
                  ? `translate(${
                      i === 0 ? "-110%" : i === 1 ? "-50%" : "10%"
                    }, ${i === 2 ? "-10%" : "-5%"}) rotate(${
                      i === 0 ? "-10deg" : i === 1 ? "0deg" : "10deg"
                    })`
                  : undefined,
              }}
            >
              <div className="flex h-full flex-col p-1 overflow-hidden">
                <img
                  src={item.img}
                  className="h-[60%] w-full rounded-sm object-cover object-top"
                  alt={item.title}
                />
                <div
                  className={`transition-opacity duration-300 ${
                    isActive ? "mt-1.5 opacity-100" : "opacity-0"
                  }`}
                >
                  <p className="text-[6px] md:text-[7px] font-bold text-black leading-tight truncate">
                    {item.title}
                  </p>
                  <p className="text-[4px] md:text-[5px] text-gray-500 leading-tight line-clamp-2">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          );
        })}

        {/* Front Cover */}
        <div
          className="absolute inset-0 z-30 transition-all duration-500"
          style={{
            backgroundColor: color,
            borderRadius: "4px 8px 8px 8px",
            transform: open
              ? "perspective(1000px) rotateX(-30deg) scaleY(0.7)"
              : "none",
            transformOrigin: "bottom",
          }}
        />
      </div>
    </div>
  );
};

export default Folder;

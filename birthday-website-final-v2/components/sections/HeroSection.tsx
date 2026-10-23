"use client";

import React from "react";
import MarqueeAlongSvgPath from "../LineCmp";

const path =
  "M1 209.434C58.5872 255.935 387.926 325.938 482.583 209.434C600.905 63.8051 525.516 -43.2211 427.332 19.9613C329.149 83.1436 352.902 242.723 515.041 267.302C644.752 286.966 943.56 181.94 995 156.5";

// Local photos from /public/ref — resolve to /ref/*.jpg at runtime.
const imgs = [
  { src: "/ref/heart.jpg" },
  { src: "/ref/girl.jpg" },
  { src: "/ref/girl2.jpg" },
  { src: "/ref/girl3.jpg" },
  { src: "/ref/girl4.jpg" },
  { src: "/ref/girl5.jpg" },
  { src: "/ref/girl6.jpg" },
  { src: "/ref/girl7.jpg" },
  { src: "/ref/girl8.jpg" },
  { src: "/ref/girl9.jpg" },
  { src: "/ref/girl10.jpg" },
  { src: "/ref/girl11.jpg" },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden flex min-h-screen w-full flex-col overflow-x-hidden bg-[#FAFAF7]">
      <style jsx global>{`
        @import url("https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,300..800&family=Work+Sans:wght@400;500&family=JetBrains+Mono:wght@400;500&display=swap");

        .hero-display {
          font-family: "Bricolage Grotesque", sans-serif;
        }
        .hero-body {
          font-family: "Work Sans", sans-serif;
        }
        .hero-mono {
          font-family: "JetBrains Mono", monospace;
        }

        .hero-title { position: relative; z-index: 2; display: flex; flex-direction: column; align-items: center; gap: 0.18em; width: 100%; font-weight: 800; line-height: 0.95; text-transform: uppercase; }
        .hero-line { display: block; max-width: 100%; text-align: center; font-weight: 800; letter-spacing: -0.01em; background-size: 220% 100%; -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent; color: transparent; filter: drop-shadow(0 2px 0 rgba(120,30,60,0.22)) drop-shadow(0 8px 18px rgba(214,60,110,0.28)); opacity: 0; animation: heroIn 1.3s cubic-bezier(.2,.8,.2,1) forwards, heroShine 7s ease-in-out 1.4s infinite; }
        .hero-line-1 { font-size: clamp(2.6rem, 14vw, 9rem); background-image: linear-gradient(100deg, #14140F 0%, #7a1d3d 30%, #e0457b 50%, #7a1d3d 70%, #14140F 100%); animation-delay: 0.1s, 1.4s; }
        .hero-line-b { animation-delay: 0.45s, 1.7s; }
        .hero-line-2 { font-size: clamp(2.6rem, 14vw, 9rem); background-image: linear-gradient(100deg, #b8862f 0%, #f59e0b 30%, #ff6f9c 50%, #f59e0b 70%, #b8862f 100%); animation-delay: 0.8s, 2s; }
        .hero-fx { position: absolute; inset: 0; pointer-events: none; overflow: hidden; z-index: 1; }
        .hero-float { position: absolute; bottom: -24px; opacity: 0; color: #ff6f9c; animation-name: heroRise; animation-timing-function: ease-in; animation-iteration-count: infinite; }
        .hero-spark { color: #f5b942; text-shadow: 0 0 8px rgba(245,185,66,0.9); }
        .hero-heart { text-shadow: 0 0 8px rgba(255,111,156,0.7); }
        @keyframes heroIn { from { opacity: 0; transform: translateY(26px) scale(0.96); filter: blur(10px) drop-shadow(0 0 0 transparent); } to { opacity: 1; transform: none; } }
        @keyframes heroShine { 0%, 100% { background-position: 100% 0; } 50% { background-position: 0% 0; } }
        @keyframes heroRise { 0% { opacity: 0; transform: translateY(0) scale(0.7); } 15% { opacity: 0.85; } 100% { opacity: 0; transform: translateY(-62vh) translateX(18px) scale(1.1); } }
        @media (prefers-reduced-motion: reduce) { .hero-line { animation: none; opacity: 1; } .hero-float { display: none; } }
      `}</style>

      {/* Top row: quiet date stamp, nothing else competing for attention */}
      <div className="hero-mono flex items-center justify-between px-8 pt-8 text-[11px] uppercase tracking-[0.25em] text-[#8A8A80] sm:px-14">
        <span>Oct 24</span>
        {/* <span>One more lap</span> */}
      </div>

      {/* Headline — centered in the upper half, generous but not stretched to fill the screen */}
      <div className="flex flex-col items-center px-4 pt-16 sm:px-14 sm:pt-20">
        <h1 className="hero-title hero-display text-center" aria-label="HAPPIEE BIRTHDAYY NENUUU">
          <span className="hero-line hero-line-1">HAPPIEE</span>
          <span className="hero-line hero-line-1 hero-line-b">BIRTHDAYY</span>
          <span className="hero-line hero-line-2">NENUUU</span>
        </h1>
        <div className="hero-fx" aria-hidden="true">
          {Array.from({ length: 14 }).map((_, i) => (
            <span key={i} className={`hero-float ${i % 3 === 0 ? "hero-spark" : "hero-heart"}`}
              style={{ left: `${6 + ((i * 53) % 88)}%`, animationDelay: `${(i * 0.7) % 5}s`, animationDuration: `${6 + (i % 5)}s`, fontSize: `${10 + (i % 4) * 4}px` }}>
              {i % 3 === 0 ? "✦" : "♥"}
            </span>
          ))}
        </div>
        <div className="mt-6 h-px w-16 bg-[#9C7A3F]" />
        <p className="hero-body mt-6 max-w-sm text-center text-base leading-relaxed text-[#4A4A42]">
         May this year bring you closer to everything you're chasing.
        </p>
      </div>

      {/* The trail — moved up under the headline, full-bleed edge to edge, tilted */}
      <div className=" absolute top-50 left-1/2 mt-0 w-screen -rotate-10 -translate-x-1/2 ">
        <MarqueeAlongSvgPath
          path={path}
          viewBox="0 0 996 330"
          width="100%"
          height="300"
          baseVelocity={5}
          slowdownOnHover={true}
          draggable={true}
          repeat={2}
          dragSensitivity={0.08}
          dragVelocityDecay={0.98}
          slowDownFactor={0.05}
          slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
          className="w-full h-full"
          responsive
          grabCursor
        >
          {imgs.map((img, i) => (
            <div
              key={i}
              className="h-14 w-14 overflow-hidden border border-[#14140F]/15 bg-[#14140F]/5 transition-transform duration-300 ease-out hover:scale-105"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={img.src}
                alt={`Memory ${i + 1}`}
                className="h-full w-full object-cover grayscale transition-[filter] duration-300 ease-out hover:grayscale-0"
                draggable={false}
              />
            </div>
          ))}
        </MarqueeAlongSvgPath>
      </div>

      {/* Remaining space stays quiet on purpose — a hairline and a small mark, nothing more */}
      <div className="mt-auto flex items-center justify-between px-8 pb-8 sm:px-14">
        <div className="h-px flex-1 bg-[#14140F]/10" />
        <span className="hero-mono px-4 text-[10px] uppercase tracking-[0.25em] text-[#8A8A80]">
          Made for you
        </span>
      </div>
    </section>
  );
};

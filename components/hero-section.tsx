"use client";

import { motion } from "framer-motion";
import { aboutYou, marketingHeadlines } from "@/lib/data";
import { ArrowDown, MapPin } from "lucide-react";
import ActionButton from "./action-button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Subtle background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-accent/5 blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Two-column layout */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_minmax(260px,380px)] gap-0 md:gap-12 lg:gap-16 items-end max-w-6xl mx-auto">

          {/* ── LEFT: text content ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="space-y-7 text-left pb-16 md:pb-24"
          >
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass glow-sm"
            >
              <MapPin className="w-3.5 h-3.5 text-primary" />
              <span className="text-xs font-medium tracking-wide text-foreground/80 uppercase">
                {aboutYou.location}
              </span>
            </motion.div>

            {/* Name */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.45 }}
              className="text-sm font-semibold tracking-[0.2em] uppercase text-primary"
            >
              {aboutYou.name}
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.55 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.08]"
            >
              <span className="text-gradient">{marketingHeadlines.mainHeadline}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="text-base md:text-lg text-foreground/60 max-w-md text-pretty leading-relaxed font-medium tracking-wide"
            >
              {marketingHeadlines.subHeadline}
            </motion.p>

            {/* Divider */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ delay: 0.38, duration: 0.5 }}
              className="w-16 h-px bg-primary/50 origin-left"
            />

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.42, duration: 0.5 }}
              className="flex flex-wrap items-end gap-8"
            >
              <div className="space-y-0.5">
                <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">{aboutYou.yearsOfExperience}</p>
                <p className="text-xs text-foreground/50 uppercase tracking-widest">Doświadczenie</p>
              </div>
              <div className="w-px h-10 bg-border hidden md:block" />
              <div className="space-y-0.5">
                <p className="text-3xl md:text-4xl font-bold text-foreground tabular-nums">10+</p>
                <p className="text-xs text-foreground/50 uppercase tracking-widest">Projektów</p>
              </div>
              <div className="w-px h-10 bg-border hidden md:block" />
              <div className="space-y-0.5">
                <p className="text-3xl md:text-4xl font-bold text-foreground">Full</p>
                <p className="text-xs text-foreground/50 uppercase tracking-widest">Stack</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.52, duration: 0.5 }}
            >
              <ActionButton actionText="Hire me" />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: sketch photo — proportional to hero, with theme tint ── */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.18, duration: 0.75, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end self-end"
          >
            {/* Soft glow under the figure */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-56 h-20 bg-primary/25 blur-3xl rounded-full pointer-events-none" />

            {/* Photo wrapper — fixed proportional height tied to viewport */}
            <div className="relative w-[260px] md:w-[300px] lg:w-[340px] xl:w-[380px] h-[360px] md:h-[420px] lg:h-[480px] xl:h-[540px] select-none">
              <img
                src="/me/profilowe2.png"
                alt="Szymon Góral"
                className="absolute inset-0 w-full h-full object-contain object-bottom drop-shadow-2xl"
                draggable={false}
              />
              {/* Theme-aware blue tint overlay:
                  light mode → multiply blends deep-blue over the sketch highlights
                  dark  mode → screen softly adds cyan glow into the sketch shadows  */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background: "hsl(var(--primary) / 0.18)",
                  mixBlendMode: "multiply",
                }}
              />
              <div
                className="absolute inset-0 pointer-events-none dark:block hidden"
                style={{
                  background: "hsl(var(--primary) / 0.22)",
                  mixBlendMode: "screen",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.65 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          className="flex flex-col items-center gap-2 text-foreground/40"
        >
          <span className="text-[10px] uppercase tracking-[0.25em]">Scroll</span>
          <ArrowDown className="w-3.5 h-3.5" />
        </motion.div>
      </motion.div>
    </section>
  );
}

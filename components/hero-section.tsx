"use client";

import { motion } from "framer-motion";
import { aboutYou, marketingHeadlines } from "@/lib/data";
import { ArrowDown, Sparkles } from "lucide-react";
import ActionButton from "./action-button";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Decorative rotating shapes */}
      <div className="absolute bottom-32 left-10 md:left-20 pointer-events-none">
        <motion.div
          className="w-16 h-16 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30"
          animate={{ rotate: [360, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Two-column layout: text left, photo right */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-6 items-center">

          {/* ── LEFT: text content ── */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 text-left"
          >
            {/* Location badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-sm"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-foreground">
                {aboutYou.location}
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.5 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-balance leading-tight"
            >
              <span className="text-gradient">{marketingHeadlines.mainHeadline}</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.25, duration: 0.5 }}
              className="text-lg md:text-xl text-foreground/80 max-w-lg text-pretty"
            >
              {marketingHeadlines.subHeadline}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.5 }}
              className="flex flex-wrap gap-8"
            >
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">{aboutYou.yearsOfExperience}</p>
                <p className="text-sm text-foreground/70">Experience</p>
              </div>
              <div className="w-px bg-border hidden md:block" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
                <p className="text-sm text-foreground/70">Projects</p>
              </div>
              <div className="w-px bg-border hidden md:block" />
              <div>
                <p className="text-3xl md:text-4xl font-bold text-primary">Full</p>
                <p className="text-sm text-foreground/70">Stack</p>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45, duration: 0.5 }}
            >
              <ActionButton actionText="Hire me" />
            </motion.div>
          </motion.div>

          {/* ── RIGHT: photo embedded into heading area ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.7, ease: "easeOut" }}
            className="relative flex justify-center md:justify-end"
          >
            {/* Glow halo behind the photo */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-primary/30 via-accent/20 to-transparent blur-3xl scale-110 pointer-events-none" />

            {/* Photo itself — clipped to a slightly irregular shape so it "bleeds" into text */}
            <div
              className="relative w-64 h-80 md:w-80 md:h-[26rem] lg:w-96 lg:h-[30rem] rounded-[2.5rem] overflow-hidden glow"
              style={{
                clipPath:
                  "polygon(0% 5%, 5% 0%, 95% 0%, 100% 5%, 100% 90%, 92% 100%, 8% 100%, 0% 90%)",
              }}
            >
              <img
                src="/me/profilowe1.jpeg"
                alt="Szymon Góral"
                className="w-full h-full object-cover object-top"
              />
              {/* Subtle overlay that blends photo edges into the background */}
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
            </div>

            {/* Decorative ring offset from photo — reinforces "embedded in text" feel */}
            <motion.div
              className="absolute -top-4 -right-4 w-20 h-20 md:w-28 md:h-28 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30 -z-10"
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-foreground/70"
        >
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <ArrowDown className="w-4 h-4" />
        </motion.div>
      </motion.div>
    </section>
  );
}

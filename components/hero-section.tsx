"use client";

import { motion } from "framer-motion";
import { aboutYou, marketingHeadlines } from "@/lib/data";
import { ArrowDown, Sparkles } from "lucide-react";
import ActionButton from "./action-button";

export default function HeroSection() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Decorative 3D elements */}
      <div className="absolute top-20 right-10 md:right-32 perspective-1000">
        <motion.div
          className="w-20 h-20 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/30"
          animate={{
            rotateY: [0, 360],
            rotateX: [0, 15, 0, -15, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>
      
      <div className="absolute bottom-32 left-10 md:left-20 perspective-1000">
        <motion.div
          className="w-16 h-16 md:w-24 md:h-24 rounded-xl bg-gradient-to-br from-accent/20 to-primary/20 border border-accent/30"
          animate={{
            rotateY: [360, 0],
            rotateZ: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{ transformStyle: "preserve-3d" }}
        />
      </div>

      <div className="container mx-auto px-6 py-20 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass glow-sm"
          >
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-muted-foreground">
              {aboutYou.location}
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance"
          >
            <span className="text-gradient">{marketingHeadlines.mainHeadline}</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto text-pretty"
          >
            {marketingHeadlines.subHeadline}
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="flex flex-wrap justify-center gap-8 pt-8"
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">{aboutYou.yearsOfExperience}</p>
              <p className="text-sm text-muted-foreground">Experience</p>
            </div>
            <div className="w-px bg-border hidden md:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">10+</p>
              <p className="text-sm text-muted-foreground">Projects</p>
            </div>
            <div className="w-px bg-border hidden md:block" />
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-primary">Full</p>
              <p className="text-sm text-muted-foreground">Stack</p>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="pt-8"
          >
            <ActionButton actionText="Hire me" />
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <ArrowDown className="w-4 h-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

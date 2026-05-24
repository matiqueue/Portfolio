"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutYou } from "@/lib/data";
import { MapPin, Mail, Code2, Layers, Cpu, Globe } from "lucide-react";

const interests = [
  { icon: Code2, label: "Open Source", desc: "Aktywny contributor na GitHubie" },
  { icon: Layers, label: "Full-Stack", desc: "Frontend i backend w jednym" },
  { icon: Cpu, label: "AI & Automatyzacja", desc: "Uczenie maszynowe w praktyce" },
  { icon: Globe, label: "Web Performance", desc: "Szybkie, dostępne interfejsy" },
];

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="space-y-10 max-w-5xl mx-auto">

          {/* Label */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="block text-primary font-mono text-sm uppercase tracking-widest"
          >
            About Me
          </motion.span>

          {/* Heading */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight -mt-4"
          >
            {aboutYou.name}
          </motion.h2>

          {/* Main description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-lg leading-relaxed -mt-4"
          >
            Jestem fullstack developerem z Olkusza, specjalizującym się w tworzeniu nowoczesnych aplikacji webowych. Pracuję głównie z Next.js, TypeScript i MongoDB — lubię budować zarówno intuicyjne interfejsy, jak i solidne backendy.
          </motion.p>

          {/* Second paragraph */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.48, duration: 0.6 }}
            className="text-muted-foreground leading-relaxed -mt-2"
          >
            Programuję od 2021 roku — zacząłem od podstaw web developmentu, a dziś realizuję komercyjne projekty dla klientów i rozwijam własne narzędzia open source. Uczę się w Technikum Programistycznym im. Antoniego Kocjana w Olkuszu, gdzie zdobywam solidne podstawy algorytmiki i inżynierii oprogramowania.
          </motion.p>

          {/* Interests grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.56, duration: 0.6 }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-3 -mt-2"
          >
            {interests.map(({ icon: Icon, label, desc }, i) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.6 + i * 0.07, duration: 0.5 }}
                className="glass rounded-xl p-4 flex flex-col gap-2 glow-sm"
              >
                <Icon className="w-5 h-5 text-primary" />
                <p className="text-sm font-semibold leading-tight">{label}</p>
                <p className="text-xs text-muted-foreground leading-snug">{desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Stats row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.72, duration: 0.6 }}
            className="flex flex-wrap gap-4 -mt-2"
          >
            <div className="glass rounded-xl px-6 py-4 glow-sm">
              <p className="text-2xl font-bold text-primary">{aboutYou.yearsOfExperience}</p>
              <p className="text-sm text-muted-foreground">Doświadczenie</p>
            </div>
            <div className="glass rounded-xl px-6 py-4 glow-sm">
              <p className="text-2xl font-bold text-primary">4+</p>
              <p className="text-sm text-muted-foreground">Projektów publicznych</p>
            </div>
            <div className="glass rounded-xl px-6 py-4 glow-sm">
              <p className="text-2xl font-bold text-primary">3</p>
              <p className="text-sm text-muted-foreground">Klientów komercyjnych</p>
            </div>
            <div className="glass rounded-xl px-6 py-4 glow-sm">
              <p className="text-2xl font-bold text-primary">Otwarty</p>
              <p className="text-sm text-muted-foreground">Na współpracę</p>
            </div>
          </motion.div>

          {/* Contact links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.82, duration: 0.6 }}
            className="flex flex-wrap items-center gap-5 pt-2 text-sm text-muted-foreground -mt-2"
          >
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-primary flex-shrink-0" />
              {aboutYou.location}
            </span>
            <a
              href={`mailto:${aboutYou.email}`}
              className="flex items-center gap-2 hover:text-primary transition-colors"
            >
              <Mail className="w-4 h-4 text-primary flex-shrink-0" />
              {aboutYou.email}
            </a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

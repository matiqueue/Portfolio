"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutYou } from "@/lib/data";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto space-y-6">
          <motion.span
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.2 }}
            className="block text-primary font-mono text-sm uppercase tracking-widest"
          >
            About Me
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight"
          >
            {aboutYou.name}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-muted-foreground text-lg leading-relaxed"
          >
            {aboutYou.description}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <div className="glass rounded-xl px-6 py-4 glow-sm">
              <p className="text-2xl font-bold text-primary">{aboutYou.yearsOfExperience}</p>
              <p className="text-sm text-muted-foreground">Experience</p>
            </div>
            <div className="glass rounded-xl px-6 py-4 glow-sm">
              <p className="text-2xl font-bold text-primary">{aboutYou.location}</p>
              <p className="text-sm text-muted-foreground">Location</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

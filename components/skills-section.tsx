"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiNodedotjs,
  SiTailwindcss,
  SiRedux,
  SiFlutter,
  SiHtml5,
  SiCss3,
  SiExpress,
  SiMongodb,
  SiHeroku,
  SiGit,
  SiPrisma,
  SiBootstrap,
} from "react-icons/si";

const skillsData = [
  { icon: SiTypescript, text: "TypeScript" },
  { icon: SiJavascript, text: "JavaScript" },
  { icon: SiReact, text: "React" },
  { icon: SiNextdotjs, text: "Next" },
  { icon: SiTailwindcss, text: "Tailwind" },
  { icon: SiRedux, text: "Redux" },
  { icon: SiFlutter, text: "Flutter" },
  { icon: SiHtml5, text: "HTML5" },
  { icon: SiCss3, text: "CSS3" },
  { icon: SiNodedotjs, text: "Node" },
  { icon: SiExpress, text: "Express" },
  { icon: SiMongodb, text: "MongoDB" },
  { icon: SiHeroku, text: "Heroku" },
  { icon: SiGit, text: "Git" },
  { icon: SiPrisma, text: "Prisma" },
  { icon: SiBootstrap, text: "Bootstrap" },
];

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="skills" className="py-20 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            Tech Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Technologies I Work With
          </h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {skillsData.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div
                key={skill.text}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 12,
                  delay: index * 0.05,
                }}
                whileHover={{ 
                  scale: 1.1, 
                  y: -5,
                  transition: { type: "spring", stiffness: 400 }
                }}
                whileTap={{ scale: 0.95 }}
                className="group"
              >
                <div className="glass rounded-xl px-5 py-3 flex items-center gap-3 cursor-default transition-all duration-300 group-hover:glow group-hover:border-primary/50">
                  {Icon && <Icon className="w-5 h-5 text-primary transition-transform duration-300 group-hover:scale-110" />}
                  <span className="font-medium text-sm">{skill.text}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* 3D floating skill orbs decoration */}
        <div className="absolute top-10 left-10 perspective-1000 hidden lg:block">
          <motion.div
            animate={{
              y: [0, -20, 0],
              rotateZ: [0, 5, 0, -5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-12 h-12 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-sm"
          />
        </div>
        <div className="absolute bottom-10 right-10 perspective-1000 hidden lg:block">
          <motion.div
            animate={{
              y: [0, 20, 0],
              rotateZ: [0, -5, 0, 5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-16 h-16 rounded-full bg-gradient-to-br from-accent/30 to-primary/30 blur-sm"
          />
        </div>
      </div>
    </section>
  );
}

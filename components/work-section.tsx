"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { workExperiences, WorkExperience } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Calendar, Building2, GitBranch, ChevronRight } from "lucide-react";

interface WorkCardProps {
  experience: WorkExperience;
  index: number;
  isLast: boolean;
  total: number;
}

function WorkCard({ experience, index, isLast, total }: WorkCardProps) {
  const isEven = index % 2 === 0;

  return (
    <div className="relative">
      {/* Timeline Branch Structure */}
      <div className="flex items-stretch">
        {/* Left side content (for even indices on desktop) */}
        <div className={`hidden md:flex flex-1 ${isEven ? 'justify-end pr-8' : 'justify-end pr-8 opacity-0 pointer-events-none'}`}>
          {isEven && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className="max-w-md w-full"
            >
              <WorkCardContent experience={experience} index={index} alignRight />
            </motion.div>
          )}
        </div>

        {/* Center Timeline */}
        <div className="relative flex flex-col items-center">
          {/* Top connector line */}
          {index > 0 && (
            <div className="w-0.5 h-8 bg-gradient-to-b from-primary/30 to-primary" />
          )}
          
          {/* Branch Node */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1, type: "spring" }}
            className="relative z-10"
          >
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center glow">
              <GitBranch className="w-5 h-5 text-primary-foreground" />
            </div>
            {/* Pulse effect */}
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/30"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 0, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>

          {/* Bottom connector line */}
          {!isLast && (
            <div className="w-0.5 flex-1 min-h-[2rem] bg-gradient-to-b from-primary to-primary/30" />
          )}

          {/* Horizontal branch connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
            className={`absolute top-[calc(50%-2rem)] h-0.5 w-8 bg-gradient-to-r from-primary to-primary/50 
              ${isEven ? 'right-full origin-right hidden md:block' : 'left-full origin-left hidden md:block'}`}
          />
          
          {/* Mobile horizontal connector - always on right */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.15 + 0.2 }}
            className="absolute top-6 left-full h-0.5 w-8 bg-gradient-to-r from-primary to-primary/50 origin-left md:hidden"
          />
        </div>

        {/* Right side content (for odd indices on desktop, all on mobile) */}
        <div className={`flex-1 pl-8 ${!isEven ? '' : 'md:opacity-0 md:pointer-events-none'}`}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
            className="max-w-md w-full"
          >
            <WorkCardContent experience={experience} index={index} alignRight={false} />
          </motion.div>
        </div>
      </div>

      {/* Mobile layout */}
      <div className="md:hidden absolute left-20 top-0">
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6, delay: index * 0.15 }}
        >
          {/* Content shown via the flex layout above */}
        </motion.div>
      </div>
    </div>
  );
}

interface WorkCardContentProps {
  experience: WorkExperience;
  index: number;
  alignRight?: boolean;
}

function WorkCardContent({ experience, index, alignRight }: WorkCardContentProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -5 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className="glass rounded-2xl p-6 relative overflow-hidden group"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative z-10">
        {/* Header with date badge */}
        <div className={`flex items-start gap-4 mb-4 ${alignRight ? 'flex-row-reverse text-right' : ''}`}>
          <motion.div
            whileHover={{ rotateY: 15 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="perspective-1000 flex-shrink-0"
          >
            <Avatar className="w-14 h-14 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
              <AvatarImage src={experience.logo} />
              <AvatarFallback className="bg-primary/10 text-primary">
                <Building2 className="w-7 h-7" />
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex-1 min-w-0">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-mono mb-2">
              <Calendar className="w-3 h-3" />
              {experience.years}
            </div>
            <h3 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
              {experience.company}
            </h3>
            <p className="text-sm text-primary font-medium flex items-center gap-1">
              <ChevronRight className="w-3 h-3" />
              {experience.position}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className={`text-muted-foreground leading-relaxed text-sm ${alignRight ? 'text-right' : ''}`}>
          {experience.description}
        </p>

        {/* Skills/Technologies badges could go here */}
        <div className={`flex flex-wrap gap-2 mt-4 ${alignRight ? 'justify-end' : ''}`}>
          {["Web Development", "Frontend", "Backend"].map((skill) => (
            <span
              key={skill}
              className="px-2 py-1 text-xs rounded-md bg-secondary text-secondary-foreground"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Decorative corner */}
      <div className={`absolute top-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${alignRight ? 'left-0 rounded-bl-full bg-gradient-to-br' : 'right-0'}`} />
    </motion.div>
  );
}

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            Experience
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Work History
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Moja sciezka zawodowa - od pierwszych projektow do zaawansowanych rozwiazan webowych
          </p>
        </motion.div>

        {/* Timeline Tree */}
        <div className="max-w-4xl mx-auto">
          {/* Start indicator */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono">
              Poczatek kariery
            </div>
          </motion.div>

          {/* Work experiences */}
          <div className="space-y-0">
            {workExperiences.map((experience, index) => (
              <WorkCard
                key={experience.company}
                experience={experience}
                index={index}
                isLast={index === workExperiences.length - 1}
                total={workExperiences.length}
              />
            ))}
          </div>

          {/* End indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mt-8"
          >
            <div className="flex flex-col items-center gap-2">
              <div className="w-0.5 h-8 bg-gradient-to-b from-primary/30 to-transparent" />
              <div className="px-4 py-2 rounded-full bg-accent/10 border border-accent/30 text-accent text-sm font-mono">
                Obecnie
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

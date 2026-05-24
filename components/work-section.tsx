"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { workExperiences, WorkExperience } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Calendar, Building2 } from "lucide-react";

interface WorkCardProps {
  experience: WorkExperience;
  index: number;
  isLast: boolean;
}

function WorkCard({ experience, index, isLast }: WorkCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      className="relative"
    >
      {/* Timeline connector */}
      {!isLast && (
        <div className="absolute left-6 top-16 bottom-0 w-px bg-gradient-to-b from-primary/50 to-transparent hidden md:block" />
      )}

      <motion.div
        whileHover={{ scale: 1.02, y: -5 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="glass rounded-2xl p-6 md:p-8 relative overflow-hidden group"
      >
        {/* Hover glow */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative z-10">
          <div className="flex flex-col md:flex-row md:items-start gap-4 md:gap-6">
            {/* Avatar with 3D effect */}
            <motion.div
              whileHover={{ rotateY: 15 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="perspective-1000"
            >
              <Avatar className="w-12 h-12 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
                <AvatarImage src={experience.logo} />
                <AvatarFallback className="bg-primary/10 text-primary">
                  <Building2 className="w-6 h-6" />
                </AvatarFallback>
              </Avatar>
            </motion.div>

            <div className="flex-1 space-y-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold tracking-tight group-hover:text-primary transition-colors">
                    {experience.company}
                  </h3>
                  <p className="text-sm text-primary font-medium">{experience.position}</p>
                </div>
                
                <div className="flex items-center gap-2 text-muted-foreground">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-mono">{experience.years}</span>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed">
                {experience.description}
              </p>
            </div>
          </div>
        </div>

        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </motion.div>
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
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {workExperiences.map((experience, index) => (
            <WorkCard
              key={experience.company}
              experience={experience}
              index={index}
              isLast={index === workExperiences.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

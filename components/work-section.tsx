"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { workExperiences } from "@/lib/data";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import {
  Calendar,
  Building2,
  GitBranch,
  ChevronRight,
  GraduationCap,
  FolderGit2,
  ExternalLink,
  Briefcase,
  Github,
  Terminal,
  Server,
  Bike,
  Code,
} from "lucide-react";
import { SiChessdotcom } from "react-icons/si";

type WorkType = "school" | "project" | "job";
type IconType = "school" | "github" | "console" | "server" | "chess" | "bike" | "code";

interface WorkCardProps {
  experience: (typeof workExperiences)[number];
  index: number;
  isLast: boolean;
}

function getAvatarIcon(iconType?: IconType) {
  switch (iconType) {
    case "school":
      return <GraduationCap className="w-6 h-6" />;
    case "github":
      return <Github className="w-6 h-6" />;
    case "console":
      return <Terminal className="w-6 h-6" />;
    case "server":
      return <Server className="w-6 h-6" />;
    case "chess":
      return <SiChessdotcom className="w-6 h-6" />;
    case "bike":
      return <Bike className="w-6 h-6" />;
    case "code":
      return <Code className="w-6 h-6" />;
    default:
      return <Building2 className="w-6 h-6" />;
  }
}

function getNodeIcon(type: WorkType) {
  if (type === "school") return <GraduationCap className="w-5 h-5 text-primary-foreground" />;
  if (type === "project") return <FolderGit2 className="w-5 h-5 text-primary-foreground" />;
  return <GitBranch className="w-5 h-5 text-primary-foreground" />;
}

function getNodeColor(type: WorkType) {
  if (type === "school") return "from-violet-500 to-violet-700";
  if (type === "project") return "from-emerald-500 to-emerald-700";
  return "from-primary to-accent";
}

function getTypeBadge(type: WorkType) {
  if (type === "school") return { label: "Edukacja", color: "bg-violet-500/10 text-violet-500 border-violet-500/20" };
  if (type === "project") return { label: "Projekt", color: "bg-emerald-500/10 text-emerald-600 border-emerald-500/20" };
  return { label: "Praca", color: "bg-primary/10 text-primary border-primary/20" };
}

function WorkCardContent({
  experience,
  index,
  alignRight,
}: {
  experience: (typeof workExperiences)[number];
  index: number;
  alignRight?: boolean;
}) {
  const type = experience.type as WorkType;
  const badge = getTypeBadge(type);
  const iconType = experience.iconType as IconType | undefined;

  return (
    <motion.div
      whileHover={{ scale: 1.02, y: -4 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      className="glass rounded-2xl p-5 relative overflow-hidden group"
    >
      {/* Hover glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

      <div className="relative z-10">
        {/* Type badge + date */}
        <div className={`flex items-center gap-2 mb-3 ${alignRight ? "justify-end" : ""}`}>
          <span
            className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${badge.color}`}
          >
            {badge.label}
          </span>
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-muted text-muted-foreground text-xs font-mono border border-border/50">
            <Calendar className="w-3 h-3" />
            {experience.years}
          </span>
        </div>

        {/* Header */}
        <div className={`flex items-start gap-3 mb-3 ${alignRight ? "flex-row-reverse text-right" : ""}`}>
          <motion.div
            whileHover={{ rotateY: 15 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="flex-shrink-0"
          >
            <Avatar className="w-12 h-12 ring-2 ring-primary/20 ring-offset-2 ring-offset-background">
              <AvatarImage src={experience.logo} />
              <AvatarFallback className="bg-primary/10 text-primary">
                {getAvatarIcon(iconType)}
              </AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold tracking-tight group-hover:text-primary transition-colors leading-tight">
              {experience.company}
            </h3>
            <p className="text-sm text-primary font-medium flex items-center gap-1 mt-0.5">
              <ChevronRight className="w-3 h-3 flex-shrink-0" />
              {experience.position}
            </p>
          </div>
        </div>

        {/* Description */}
        <p className={`text-muted-foreground leading-relaxed text-sm ${alignRight ? "text-right" : ""}`}>
          {experience.description}
        </p>

        {/* Skills */}
        {experience.skills && (
          <div className={`flex flex-wrap gap-1.5 mt-3 ${alignRight ? "justify-end" : ""}`}>
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="px-2 py-0.5 text-xs rounded-md bg-secondary text-secondary-foreground border border-border/50"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Project link */}
        {experience.link && (
          <div className={`mt-3 ${alignRight ? "text-right" : ""}`}>
            <a
              href={experience.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-primary font-medium hover:underline"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              Zobacz na GitHub
            </a>
          </div>
        )}
      </div>

      {/* Decorative corner */}
      <div
        className={`absolute top-0 w-16 h-16 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${
          alignRight ? "left-0 rounded-bl-full bg-gradient-to-br" : "right-0"
        }`}
      />
    </motion.div>
  );
}

function WorkCard({ experience, index, isLast }: WorkCardProps) {
  const isEven = index % 2 === 0;
  const type = experience.type as WorkType;
  const nodeColor = getNodeColor(type);
  const nodeIcon = getNodeIcon(type);

  return (
    <div className="relative">
      <div className="flex items-stretch">
        {/* Left side (even indices on desktop) */}
        <div
          className={`hidden md:flex flex-1 justify-end pr-8 ${isEven ? "" : "opacity-0 pointer-events-none"}`}
        >
          {isEven && (
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="max-w-md w-full"
            >
              <WorkCardContent experience={experience} index={index} alignRight />
            </motion.div>
          )}
        </div>

        {/* Center timeline */}
        <div className="relative flex flex-col items-center">
          {index > 0 && (
            <div className="w-0.5 h-8 bg-gradient-to-b from-primary/30 to-primary" />
          )}

          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1, type: "spring" }}
            className="relative z-10"
          >
            <div
              className={`w-12 h-12 rounded-full bg-gradient-to-br ${nodeColor} flex items-center justify-center glow`}
            >
              {nodeIcon}
            </div>
            <motion.div
              className="absolute inset-0 rounded-full bg-primary/20"
              animate={{ scale: [1, 1.5, 1], opacity: [0.4, 0, 0.4] }}
              transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
            />
          </motion.div>

          {!isLast && (
            <div className="w-0.5 flex-1 min-h-[2rem] bg-gradient-to-b from-primary to-primary/30" />
          )}

          {/* Horizontal connector — desktop */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.12 + 0.2 }}
            className={`absolute top-[calc(50%-2rem)] h-0.5 w-8 bg-gradient-to-r from-primary to-primary/40 hidden md:block ${
              isEven ? "right-full origin-right" : "left-full origin-left"
            }`}
          />

          {/* Mobile horizontal connector */}
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: index * 0.12 + 0.2 }}
            className="absolute top-6 left-full h-0.5 w-8 bg-gradient-to-r from-primary to-primary/40 origin-left md:hidden"
          />
        </div>

        {/* Right side (odd indices on desktop, all on mobile) */}
        <div className={`flex-1 pl-8 ${!isEven ? "" : "md:opacity-0 md:pointer-events-none"}`}>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.55, delay: index * 0.12 }}
            className="max-w-md w-full"
          >
            <WorkCardContent experience={experience} index={index} alignRight={false} />
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="work" className="py-32 relative" ref={ref}>
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
            Moja sciezka — od szkoly przez pierwsze projekty az po komercyjne realizacje
          </p>

          {/* Legend */}
          <div className="flex flex-wrap items-center justify-center gap-4 mt-6">
            {[
              { color: "bg-violet-500", label: "Edukacja" },
              { color: "bg-emerald-500", label: "Projekt" },
              { color: "bg-primary", label: "Praca" },
            ].map(({ color, label }) => (
              <span key={label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className={`w-2.5 h-2.5 rounded-full ${color}`} />
                {label}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Start */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex justify-center mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-primary/10 border border-primary/30 text-primary text-sm font-mono flex items-center gap-2">
              <Briefcase className="w-3.5 h-3.5" />
              Poczatek
            </div>
          </motion.div>

          <div className="space-y-0">
            {workExperiences.map((experience, index) => (
              <WorkCard
                key={`${experience.company}-${index}`}
                experience={experience}
                index={index}
                isLast={index === workExperiences.length - 1}
              />
            ))}
          </div>

          {/* End */}
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

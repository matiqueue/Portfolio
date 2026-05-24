"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { projects, Project } from "@/lib/data";
import { ExternalLink, Github, Star, GitFork, Code2, ArrowUpRight, Calendar } from "lucide-react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

function ProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group perspective-1000 h-full"
    >
      <motion.div
        animate={{
          rotateY: isHovered ? 3 : 0,
          rotateX: isHovered ? -3 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative glass rounded-2xl h-full overflow-hidden flex flex-col"
        style={{ transformStyle: "preserve-3d" }}
      >
        {/* Project Preview Header */}
        <div className="relative h-40 bg-gradient-to-br from-primary/10 via-secondary to-accent/10 overflow-hidden">
          {/* Code pattern background */}
          <div className="absolute inset-0 opacity-20">
            <div className="absolute inset-0 grid grid-cols-6 gap-2 p-4">
              {[...Array(18)].map((_, i) => (
                <motion.div
                  key={i}
                  className="h-2 rounded-full bg-primary/30"
                  style={{ width: `${30 + Math.random() * 70}%` }}
                  animate={isHovered ? { opacity: [0.3, 0.6, 0.3] } : {}}
                  transition={{ duration: 1.5, delay: i * 0.05, repeat: Infinity }}
                />
              ))}
            </div>
          </div>
          
          {/* Emoji icon */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              animate={isHovered ? { scale: 1.2, rotate: [0, 5, -5, 0] } : { scale: 1 }}
              transition={{ duration: 0.4 }}
              className="text-6xl filter drop-shadow-lg"
            >
              {project.emoji}
            </motion.div>
          </div>

          {/* GitHub badge */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute top-4 right-4"
          >
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-background/80 backdrop-blur-sm border border-border/50 text-xs font-medium hover:bg-background transition-colors"
              onClick={(e) => e.stopPropagation()}
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
          </motion.div>

          {/* Hover overlay */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent"
            animate={{ opacity: isHovered ? 1 : 0 }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Content */}
        <div className="relative z-10 p-6 flex-1 flex flex-col">
          {/* Title */}
          <div className="flex items-start justify-between gap-4 mb-3">
            <h3 className="text-xl font-bold tracking-tight group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <motion.div
              animate={{
                x: isHovered ? 3 : 0,
                y: isHovered ? -3 : 0,
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0" />
            </motion.div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground leading-relaxed text-sm flex-1">
            {project.description}
          </p>

          {/* Tech tags */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mt-4 mb-4">
              {project.technologies.slice(0, 4).map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 text-xs rounded-md bg-primary/10 text-primary font-medium"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 4 && (
                <span className="px-2 py-1 text-xs rounded-md bg-muted text-muted-foreground">
                  +{project.technologies.length - 4}
                </span>
              )}
            </div>
          )}

          {/* Stats & Link */}
          <div className="flex items-center justify-between pt-4 border-t border-border/50 mt-auto">
            <div className="flex items-center gap-4 text-muted-foreground text-sm">
              {project.stars !== undefined && (
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4" />
                  {project.stars}
                </span>
              )}
              {project.forks !== undefined && (
                <span className="flex items-center gap-1">
                  <GitFork className="w-4 h-4" />
                  {project.forks}
                </span>
              )}
              {project.language && (
                <span className="flex items-center gap-1">
                  <Code2 className="w-4 h-4" />
                  {project.language}
                </span>
              )}
            </div>
            
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-primary font-medium text-sm hover:underline"
              onClick={(e) => e.stopPropagation()}
            >
              <ExternalLink className="w-4 h-4" />
              <span>Zobacz</span>
            </a>
          </div>
        </div>

        {/* Glow effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 rounded-2xl pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

// Featured project card (larger)
function FeaturedProjectCard({ project, index }: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group perspective-1000 col-span-full lg:col-span-2"
    >
      <motion.div
        animate={{
          scale: isHovered ? 1.01 : 1,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative glass rounded-2xl overflow-hidden"
      >
        <div className="flex flex-col md:flex-row">
          {/* Left: Preview */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto bg-gradient-to-br from-primary/10 via-secondary to-accent/10">
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                animate={isHovered ? { scale: 1.1, rotate: [0, 5, -5, 0] } : { scale: 1 }}
                transition={{ duration: 0.4 }}
                className="text-8xl filter drop-shadow-lg"
              >
                {project.emoji}
              </motion.div>
            </div>
            
            {/* Featured badge */}
            <div className="absolute top-4 left-4">
              <span className="px-3 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider">
                Featured
              </span>
            </div>
          </div>

          {/* Right: Content */}
          <div className="p-8 md:w-1/2 flex flex-col justify-center">
            <div className="flex items-center gap-2 mb-4">
              <Github className="w-5 h-5 text-muted-foreground" />
              <span className="text-sm text-muted-foreground font-mono">matiqueue/{project.title.toLowerCase().replace(/\s+/g, '-')}</span>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight group-hover:text-primary transition-colors mb-4">
              {project.title}
            </h3>

            <p className="text-muted-foreground leading-relaxed mb-6">
              {project.description}
            </p>

            {project.technologies && (
              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 text-sm rounded-lg bg-primary/10 text-primary font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            <div className="flex items-center gap-6">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Github className="w-5 h-5" />
                Zobacz na GitHub
              </a>
              
              <div className="flex items-center gap-4 text-muted-foreground">
                {project.stars !== undefined && (
                  <span className="flex items-center gap-1">
                    <Star className="w-4 h-4" />
                    {project.stars}
                  </span>
                )}
                {project.forks !== undefined && (
                  <span className="flex items-center gap-1">
                    <GitFork className="w-4 h-4" />
                    {project.forks}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5 opacity-0 rounded-2xl pointer-events-none"
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        />
      </motion.div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const featuredProject = projects[0];
  const otherProjects = projects.slice(1);

  return (
    <section id="projects" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground mt-4 max-w-xl mx-auto">
            Wybrane projekty z mojego GitHuba - od platform gamingowych po narzedzia developerskie
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* Featured project */}
          <FeaturedProjectCard project={featuredProject} index={0} />
          
          {/* Other projects */}
          {otherProjects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 1} />
          ))}
        </div>

        {/* View all on GitHub */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex justify-center mt-12"
        >
          <a
            href="https://github.com/matiqueue"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl glass border-primary/30 text-foreground font-medium hover:bg-primary/10 transition-colors group"
          >
            <Github className="w-5 h-5" />
            Zobacz wszystkie projekty
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}

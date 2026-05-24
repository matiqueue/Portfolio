"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutYou } from "@/lib/data";
import { Mail, Send, Github, Linkedin, Twitter, ArrowUpRight } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, href: "https://github.com/matiqueue", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-20 relative" ref={ref}>
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Let&apos;s Work Together
          </h2>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Main content - no card, clean layout */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center space-y-10"
          >
            {/* Icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={isInView ? { scale: 1 } : {}}
              transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
              className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
            >
              <Mail className="w-10 h-10 text-primary-foreground" />
            </motion.div>

            {/* Text */}
            <div className="space-y-4">
              <p className="text-foreground/70 text-lg max-w-lg mx-auto">
                Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
              </p>
            </div>

            {/* Email button */}
            <motion.a
              href={`mailto:${aboutYou.email}`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all hover:shadow-lg hover:shadow-primary/25"
            >
              <Send className="w-5 h-5" />
              {aboutYou.email}
              <ArrowUpRight className="w-5 h-5" />
            </motion.a>

            {/* Divider */}
            <div className="flex items-center justify-center gap-4 pt-6">
              <div className="h-px w-16 bg-border" />
              <span className="text-xs text-foreground/50 uppercase tracking-widest">or connect</span>
              <div className="h-px w-16 bg-border" />
            </div>

            {/* Social links - horizontal row */}
            <div className="flex items-center justify-center gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    whileHover={{ scale: 1.1, y: -3 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border/50 hover:border-primary/50 transition-colors group"
                  >
                    <Icon className="w-5 h-5 text-foreground/60 group-hover:text-primary transition-colors" />
                    <span className="text-sm text-foreground/70 group-hover:text-foreground transition-colors">
                      {social.label}
                    </span>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

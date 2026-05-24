"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutYou } from "@/lib/data";
import { Mail, Send, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const socialLinks = [
    { icon: Github, href: "https://github.com/matiqueue", label: "GitHub" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Twitter, href: "#", label: "Twitter" },
  ];

  return (
    <section id="contact" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-primary font-mono text-sm uppercase tracking-widest">
            Contact
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mt-4">
            Let&apos;s Work Together
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <div className="glass rounded-3xl p-8 md:p-12 text-center relative overflow-hidden glow">
            {/* Background decoration */}
            <div className="absolute top-0 left-0 w-full h-full">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-[100px]" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full blur-[100px]" />
            </div>

            <div className="relative z-10 space-y-8">
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.4, type: "spring", stiffness: 200 }}
                className="w-20 h-20 mx-auto rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center"
              >
                <Mail className="w-10 h-10 text-primary-foreground" />
              </motion.div>

              <div className="space-y-4">
                <p className="text-muted-foreground text-lg">
                  Have a project in mind? Let&apos;s discuss how I can help bring your ideas to life.
                </p>
                
                <motion.a
                  href={`mailto:${aboutYou.email}`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-3 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg transition-all hover:glow"
                >
                  <Send className="w-5 h-5" />
                  {aboutYou.email}
                </motion.a>
              </div>

              {/* Social links */}
              <div className="flex items-center justify-center gap-4 pt-4">
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
                      className="p-3 glass rounded-xl hover:border-primary/50 transition-colors"
                    >
                      <Icon className="w-5 h-5 text-muted-foreground hover:text-primary transition-colors" />
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

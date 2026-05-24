"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";

interface ActionButtonProps {
  actionText: string;
}

export default function ActionButton({ actionText }: ActionButtonProps) {
  const router = useRouter();

  function navigateTo(href: string) {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
  }

  return (
    <motion.button
      onClick={() => navigateTo("#contact")}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="group relative inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg overflow-hidden transition-all"
    >
      {/* Animated background */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-primary via-accent to-primary"
        animate={{
          x: ["-100%", "100%"],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{ opacity: 0.3 }}
      />
      
      {/* Glow effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute inset-0 bg-primary blur-xl" style={{ opacity: 0.4 }} />
      </div>

      <Sparkles className="w-5 h-5 relative z-10" />
      <span className="relative z-10">{actionText}</span>
    </motion.button>
  );
}

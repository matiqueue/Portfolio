"use client";

import { motion } from "framer-motion";
import { logoText } from "@/lib/data";

interface LogoProps {
  onClick: () => void;
}

export default function Logo({ onClick }: LogoProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer relative group"
    >
      <div className="relative px-4 py-2 rounded-xl glass border-primary/20 hover:border-primary/50 transition-all duration-300">
        {/* Glow on hover */}
        <div className="absolute inset-0 bg-primary/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm" />
        
        <span className="relative z-10 font-mono font-bold text-sm text-gradient">
          {logoText}
        </span>
      </div>
    </motion.div>
  );
}

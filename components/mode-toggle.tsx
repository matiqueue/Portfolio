"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

export function ModeToggle() {
  const { setTheme, theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  if (!mounted) {
    return (
      <div className="glass border-0 rounded-full p-1 flex items-center gap-1">
        <div className="w-8 h-8 rounded-full" />
        <div className="w-8 h-8 rounded-full" />
      </div>
    );
  }

  const isDark = theme === "dark";

  return (
    <div className="glass border-0 rounded-full p-1 flex items-center gap-1 relative">
      {/* Background indicator */}
      <motion.div
        className="absolute w-8 h-8 rounded-full bg-primary/20"
        animate={{
          x: isDark ? 36 : 0,
        }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      />
      
      {/* Light button */}
      <button
        onClick={() => setTheme("light")}
        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          !isDark ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Light mode"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key="sun"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Sun className="h-4 w-4" />
          </motion.div>
        </AnimatePresence>
      </button>

      {/* Dark button */}
      <button
        onClick={() => setTheme("dark")}
        className={`relative z-10 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
          isDark ? "text-primary" : "text-muted-foreground hover:text-foreground"
        }`}
        aria-label="Dark mode"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key="moon"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.15 }}
          >
            <Moon className="h-4 w-4" />
          </motion.div>
        </AnimatePresence>
      </button>
    </div>
  );
}

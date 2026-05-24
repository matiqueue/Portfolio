"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    const handleLoad = () => {
      setProgress(100);
      setTimeout(() => setIsLoading(false), 500);
    };

    if (document.readyState === "complete") {
      setTimeout(handleLoad, 800);
    } else {
      window.addEventListener("load", handleLoad);
    }

    const timeout = setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      window.removeEventListener("load", handleLoad);
      clearTimeout(timeout);
    };
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-background"
        >
          <div className="relative flex flex-col items-center gap-8">
            {/* Animated Logo/Spinner */}
            <div className="relative">
              <motion.div
                className="w-20 h-20 rounded-2xl border-2 border-primary/30"
                animate={{
                  rotate: 360,
                  borderColor: ["hsl(var(--primary) / 0.3)", "hsl(var(--primary))", "hsl(var(--primary) / 0.3)"],
                }}
                transition={{
                  rotate: { duration: 3, repeat: Infinity, ease: "linear" },
                  borderColor: { duration: 1.5, repeat: Infinity, ease: "easeInOut" },
                }}
              />
              <motion.div
                className="absolute inset-2 rounded-xl border-2 border-accent/30"
                animate={{
                  rotate: -360,
                  borderColor: ["hsl(var(--accent) / 0.3)", "hsl(var(--accent))", "hsl(var(--accent) / 0.3)"],
                }}
                transition={{
                  rotate: { duration: 2, repeat: Infinity, ease: "linear" },
                  borderColor: { duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
                }}
              />
              <motion.div
                className="absolute inset-4 rounded-lg bg-gradient-to-br from-primary to-accent"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Loading Text */}
            <div className="flex flex-col items-center gap-4">
              <motion.p
                className="text-lg font-medium text-foreground"
                animate={{ opacity: [0.5, 1, 0.5] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                Ladowanie...
              </motion.p>

              {/* Progress Bar */}
              <div className="w-48 h-1 bg-muted rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${Math.min(progress, 100)}%` }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              <p className="text-sm text-muted-foreground font-mono">
                {Math.min(Math.round(progress), 100)}%
              </p>
            </div>
          </div>

          {/* Background decoration */}
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

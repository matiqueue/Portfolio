"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "./ui/button";
import Logo from "./logo";
import { ModeToggle } from "./mode-toggle";
import { Home, Briefcase, Mail, Presentation, User, Code, Menu, X } from "lucide-react";
import { useRouter } from "next/navigation";

const navItems = [
  { icon: Home, label: "Home", href: "#home" },
  { icon: User, label: "About", href: "#about" },
  { icon: Code, label: "Skills", href: "#skills" },
  { icon: Presentation, label: "Projects", href: "#projects" },
  { icon: Briefcase, label: "Work", href: "#work" },
  { icon: Mail, label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const router = useRouter();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Detect active section
      const sections = navItems.map(item => item.href.replace("#", ""));
      for (const section of sections.reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function navigateTo(href: string) {
    if (href.startsWith("#")) {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push(href);
    }
    setIsMobileMenuOpen(false);
  }

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
      >
        <div className="container mx-auto px-6">
          <motion.div
            className={`flex items-center justify-between rounded-2xl transition-all duration-300 ${
              isScrolled
                ? "glass-strong px-6 py-3 glow-sm"
                : "px-4 py-2"
            }`}
          >
            {/* Logo */}
            <Logo onClick={() => navigateTo("#home")} />

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.button
                    key={item.label}
                    onClick={() => navigateTo(item.href)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                      isActive
                        ? "text-primary"
                        : "text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="activeNav"
                        className="absolute inset-0 bg-primary/10 rounded-xl"
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                      />
                    )}
                    <Icon className="w-4 h-4 relative z-10" />
                    <span className="relative z-10">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>

            {/* Right side - Theme toggle & Mobile menu */}
            <div className="flex items-center gap-3">
              <ModeToggle />
              
              {/* Mobile menu button */}
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </Button>
            </div>
          </motion.div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-0 top-20 z-40 md:hidden px-6"
          >
            <div className="glass-strong rounded-2xl p-4 space-y-2 glow">
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.replace("#", "");
                return (
                  <motion.button
                    key={item.label}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    onClick={() => navigateTo(item.href)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left transition-colors ${
                      isActive
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    }`}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 z-30 bg-background/80 backdrop-blur-sm md:hidden"
          />
        )}
      </AnimatePresence>
    </>
  );
}

"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import SkillsSection from "@/components/skills-section";
import ProjectsSection from "@/components/projects-section";
import WorkSection from "@/components/work-section";
import ContactSection from "@/components/contact-section";
import { LoadingScreen } from "@/components/loading-screen";

export default function Home() {
  return (
    <div className="relative">
      <LoadingScreen />
      <Navbar />
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <WorkSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

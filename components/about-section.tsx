"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { aboutYou } from "@/lib/data";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import * as React from "react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  return (
    <section id="about" className="py-32 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Image carousel with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -50, rotateY: -15 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="perspective-1000 order-2 md:order-1"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-accent/20 to-primary/20 rounded-3xl blur-2xl opacity-50" />
              <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-md mx-auto relative"
                onMouseEnter={plugin.current.stop}
                onMouseLeave={plugin.current.reset}
              >
                <CarouselContent>
                  {[
                    "me/profilowe1.jpeg",
                    "me/profilowe2.jpeg",
                    "me/profilowe3.jpeg",
                  ].map((image, index) => (
                    <CarouselItem key={index}>
                      <motion.div 
                        className="p-2"
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300 }}
                      >
                        <Card className="overflow-hidden glass border-0 glow">
                          <CardContent className="p-0">
                            <img
                              className="w-full aspect-square object-cover rounded-xl"
                              src={image}
                              alt={`Profile ${index + 1}`}
                            />
                          </CardContent>
                        </Card>
                      </motion.div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="left-2 glass border-0" />
                <CarouselNext className="right-2 glass border-0" />
              </Carousel>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="space-y-6 order-1 md:order-2"
          >
            <motion.span
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.4 }}
              className="text-primary font-mono text-sm uppercase tracking-widest"
            >
              About Me
            </motion.span>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-3xl md:text-4xl font-bold tracking-tight"
            >
              {aboutYou.name}
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-muted-foreground text-lg leading-relaxed"
            >
              {aboutYou.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >
              <div className="glass rounded-xl px-6 py-4 glow-sm">
                <p className="text-2xl font-bold text-primary">{aboutYou.yearsOfExperience}</p>
                <p className="text-sm text-muted-foreground">Experience</p>
              </div>
              <div className="glass rounded-xl px-6 py-4 glow-sm">
                <p className="text-2xl font-bold text-primary">{aboutYou.location}</p>
                <p className="text-sm text-muted-foreground">Location</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

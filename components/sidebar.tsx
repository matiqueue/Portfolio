"use client";
import * as React from "react";
import Autoplay from "embla-carousel-autoplay";
import { useMediaQuery } from "@react-hook/media-query"; // import hook

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { aboutYou } from "@/lib/data";

export default function Sidebar() {
  const plugin = React.useRef(
    Autoplay({ delay: 4000, stopOnInteraction: false })
  );

  // Hook to check device width
  const isMobile = useMediaQuery("(max-width: 640px)");

  // Conditionally set container width based on device width
  const containerClass = isMobile ? "w-full" : "w-full max-w-xl";

  // Conditionally render carousel based on device width
  const carousel = !isMobile ? (
    <div className="w-full max-w-xs">
      {/* Render carousel conditionally */}

      <Carousel
        plugins={[plugin.current]}
        className="w-full "
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
              <div className="p-1">
                <Card>
                  <CardContent className="flex items-center justify-center p-4 ">
                    <img
                      className="rounded-xl"
                      src={image}
                      alt={`Profilowe ${index + 1}`}
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  ) : null;

  return (
    <div className="flex flex-col space-y-2 pr-4 ">
      <div
        className={`rounded-xl border bg-card text-card-foreground shadow p-4 h-fit static md:static top-24 ${containerClass}`}
      >
        <p className="font-semibold leading-none tracking-tight">
          {aboutYou.name}
        </p>
        <div className="py-1"></div>
        <p className="text-sm text-muted-foreground tracking-tight">
          {aboutYou.description}
        </p>
      </div>
      <div className="my-2"></div>
      {carousel}
    </div>
  );
}

"use client";

import { SectionHeading, SectionWrapper } from "@/components/site";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "../ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { useRef } from "react";

export default function TestimonialsSection() {
  const plugin = useRef(Autoplay({
    delay: 3000,
    stopOnInteraction: true,
    stopOnMouseEnter: true,
  }));

  return (
    <SectionWrapper>
      <SectionHeading
        heading="Khách hàng nói gì về dịch vụ"
        subHeading="Hàng nghìn người đã cải thiện sức khỏe với GOWA FOOD"
      />

      {/* carousel */}
      <Carousel
        opts={{
          loop: true,
        }}
        plugins={[plugin.current]}
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
      >
        <CarouselContent>
          <CarouselItem className="basis-1/3">
            <div className="w-full flex items-center justify-center size-12 bg-secondary">
              Xin chao cac con vo hehehe
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <div className="w-full flex items-center justify-center size-12 bg-secondary">
              Xin chao cac con vo hehehe
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <div className="w-full flex items-center justify-center size-12 bg-secondary">
              Xin chao cac con vo hehehe
            </div>
          </CarouselItem>
          <CarouselItem className="basis-1/3">
            <div className="w-full flex items-center justify-center size-12 bg-secondary">
              Xin chao cac con vo hehehe
            </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </SectionWrapper>
  )
}

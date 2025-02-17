
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const testimonials = [
  {
    quote: "I can't even imagine going back to a time before GRIN.",
    role: "Former Senior Marketing Manager at Hopster",
    bgColor: "bg-gray-800",
    textColor: "text-white"
  },
  {
    stats: {
      title: "Uber",
      labels: ["Slay", "Serve"],
      image: "https://placehold.co/300x400"
    },
    bgColor: "bg-gray-900",
    textColor: "text-white"
  },
  {
    stats: {
      title: "IN LESS THAN 2 YEARS",
      metrics: [
        { value: "~300", label: "active creators per season" },
        { value: "8,000+", label: "pieces of creator content" },
        { value: "12.9m+", label: "impressions" }
      ]
    },
    bgColor: "bg-gray-800",
    textColor: "text-white"
  },
  {
    image: "https://placehold.co/300x400",
    bgColor: "bg-gray-900",
    textColor: "text-white"
  },
  {
    quote: "I can honestly say that GRIN has been my saving grace.",
    author: "Ethan Frame",
    role: "Influencer Marketing Manager",
    bgColor: "bg-gray-800",
    textColor: "text-white"
  }
];

export function WhoWeHelpSection() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const plugin = Autoplay({ delay: 3000, stopOnInteraction: true });

  return (
    <section className="py-24 bg-gray-950">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          Who we help
        </motion.h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
            skipSnaps: false,
            slidesToScroll: isMobile ? 1 : 3,
          }}
          plugins={[plugin]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[...testimonials, ...testimonials].map((item, index) => (
              <CarouselItem key={index} className={`pl-4 ${isMobile ? 'basis-full' : 'basis-1/3'}`}>
                <Card className={`h-[400px] ${item.bgColor} ${item.textColor} p-6 flex flex-col justify-between overflow-hidden relative rounded-xl transition-transform hover:scale-105`}>
                  {item.quote && (
                    <>
                      <p className="text-2xl font-bold">{item.quote}</p>
                      {item.role && <p className="text-sm mt-4">{item.role}</p>}
                      {item.author && (
                        <div className="mt-4">
                          <p className="font-bold">{item.author}</p>
                          <p className="text-sm">{item.role}</p>
                        </div>
                      )}
                    </>
                  )}
                  {item.stats && (
                    <div className="h-full flex flex-col">
                      <h3 className="text-xl font-bold mb-4">{item.stats.title}</h3>
                      {item.stats.labels && (
                        <div className="flex gap-2">
                          {item.stats.labels.map((label, i) => (
                            <span key={i} className="bg-white text-black px-3 py-1 rounded-full text-sm">
                              {label}
                            </span>
                          ))}
                        </div>
                      )}
                      {item.stats.metrics && (
                        <div className="space-y-4">
                          {item.stats.metrics.map((metric, i) => (
                            <div key={i}>
                              <p className="text-3xl font-bold">{metric.value}</p>
                              <p className="text-sm">{metric.label}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                  {item.image && (
                    <div className="absolute inset-0">
                      <img src={item.image} alt="" className="w-full h-full object-cover" />
                    </div>
                  )}
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
}

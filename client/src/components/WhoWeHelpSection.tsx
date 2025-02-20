
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";

const testimonials = [
  {
    stats: {
      title: "GROWTH IN 3 MONTHS",
      metrics: [
        { value: "850+", label: "influencer collaborations" },
        { value: "45M+", label: "total engagement" },
        { value: "3.2x", label: "ROI increase" }
      ]
    },
    bgColor: "bg-[#FF80BF]",
    textColor: "text-black"
  },
  {
    quote: "NOVA has transformed our digital marketing strategy completely.",
    role: "Marketing Director at TechFlow",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=50&h=50&fit=crop",
    bgColor: "bg-blue-900",
    textColor: "text-white"
  },
  {
    stats: {
      title: "StreamVibe",
      labels: ["Creator", "Innovation"],
      image: "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=300&h=400&fit=crop"
    },
    bgColor: "bg-gray-900",
    textColor: "text-white"
  },
  {
    stats: {
      title: "SUCCESS IN 6 MONTHS",
      metrics: [
        { value: "500+", label: "active creators monthly" },
        { value: "15,000+", label: "content pieces created" },
        { value: "25m+", label: "total reach" }
      ]
    },
    bgColor: "bg-[#E8FF81]",
    textColor: "text-black"
  },
  {
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=300&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=30&fit=crop",
    bgColor: "bg-gray-800",
    textColor: "text-white"
  },
  {
    quote: "The AI-powered analytics have given us unprecedented insights.",
    author: "Sarah Chen",
    role: "Growth Lead at FutureScale",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=30&fit=crop",
    bgColor: "bg-[#98E7FF]",
    textColor: "text-black"
  },
  {
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=300&h=400&fit=crop",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=30&fit=crop",
    bgColor: "bg-gray-800",
    textColor: "text-white"
  },
  {
    quote: "NOVA's platform has revolutionized our creator partnerships.",
    author: "Michael Torres",
    role: "Creative Director at PixelPerfect",
    logo: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=30&fit=crop",
    bgColor: "bg-[#98E7FF]",
    textColor: "text-black"
  }
];

export function WhoWeHelpSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <section className="py-24 bg-black">
      <div className="px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-center mb-16 text-white"
        >
          Who we help
        </motion.h2>

        <div className="relative">
          <div className="overflow-x-auto pb-8 scrollbar-hide cursor-grab active:cursor-grabbing">
            <div className="flex space-x-4 w-max select-none">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-[250px] carousel-item"
                  onMouseEnter={() => setActiveSlide(index)}
                >
                  <Card className={`h-[400px] ${item.bgColor} ${item.textColor} p-6 flex flex-col justify-between overflow-hidden relative rounded-xl transition-transform duration-300 hover:scale-[1.02]`}>
                    {item.logo && (
                      <div className="absolute top-6 right-6">
                        <img src={item.logo} alt="Logo" className="h-8" />
                      </div>
                    )}
                    {item.quote && (
                      <>
                        <p className="text-2xl font-bold leading-tight">{item.quote}</p>
                        {item.role && <p className="text-sm mt-4 opacity-80">{item.role}</p>}
                        {item.author && (
                          <div className="mt-4">
                            <p className="font-bold">{item.author}</p>
                            <p className="text-sm opacity-80">{item.role}</p>
                          </div>
                        )}
                      </>
                    )}
                    {item.stats && (
                      <div className="h-full flex flex-col">
                        <h3 className="text-xl font-bold mb-4">{item.stats.title}</h3>
                        {item.stats.labels && (
                          <div className="flex gap-2 mb-6">
                            {item.stats.labels.map((label, i) => (
                              <span key={i} className="bg-white text-black px-4 py-1 rounded-full text-sm font-medium">
                                {label}
                              </span>
                            ))}
                          </div>
                        )}
                        {item.stats.metrics && (
                          <div className="space-y-6">
                            {item.stats.metrics.map((metric, i) => (
                              <div key={i}>
                                <p className="text-3xl font-bold">{metric.value}</p>
                                <p className="text-sm opacity-80">{metric.label}</p>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                    {item.image && (
                      <>
                        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60 z-10" />
                        <div className="absolute inset-0">
                          <img src={item.image} alt="" className="w-full h-full object-cover" />
                        </div>
                      </>
                    )}
                    <div className="absolute bottom-6 right-6 z-20">
                      <span className="text-sm underline">Read the case study →</span>
                    </div>
                  </Card>
                </div>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors ${
                  activeSlide === index ? "bg-white" : "bg-gray-600"
                }`}
                onClick={() => {
                  const elements = document.querySelectorAll('.carousel-item');
                  elements[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
                  setActiveSlide(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

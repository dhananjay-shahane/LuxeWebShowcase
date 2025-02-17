
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Card } from "./ui/card";

const testimonials = [
  {
    quote: "I can't even imagine going back to a time before GRIN.",
    role: "Former Senior Marketing Manager at Hopster",
    logo: "https://placehold.co/50x50",
    bgColor: "bg-blue-900",
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
    bgColor: "bg-[#E8FF81]",
    textColor: "text-black"
  },
  {
    image: "https://placehold.co/300x400",
    logo: "https://placehold.co/120x30",
    bgColor: "bg-gray-800",
    textColor: "text-white"
  },
  {
    quote: "I can honestly say that GRIN has been my saving grace.",
    author: "Ethan Frame",
    role: "Influencer Marketing Manager at MVMT",
    logo: "https://placehold.co/120x30",
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

        <div className="relative">
          <div className="overflow-x-auto pb-8 scrollbar-hide">
            <div className="flex space-x-4 w-max">
              {testimonials.map((item, index) => (
                <div
                  key={index}
                  className="w-[350px]"
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
                      <div className="absolute inset-0">
                        <img src={item.image} alt="" className="w-full h-full object-cover" />
                      </div>
                    )}
                    <div className="absolute bottom-6 right-6">
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
                  const element = document.querySelector(`.w-[350px]:nth-child(${index + 1})`);
                  element?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'start' });
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

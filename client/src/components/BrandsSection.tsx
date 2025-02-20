import { motion, useScroll, useTransform } from "framer-motion";
import { SiTiktok, SiInstagram } from "react-icons/si";
import { useRef } from "react";

// Reusable animation configurations
const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
    scale: 0.95,
    rotate: -3,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    scale: 1,
    rotate: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8,
    },
  },
};

const stackVariants = {
  offscreen: { scale: 0.95, opacity: 0 },
  onscreen: { 
    scale: 1,
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
      when: "beforeChildren"
    }
  }
};

export function BrandsSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const cards = [
    { bg: "#e1ff80", title: "Discover and recruit brand champions." },
    { bg: "#ffd580", title: "Manage relationships at scale." },
    { bg: "#80ffea", title: "Measure real business impact." },
    { bg: "#ff80eb", title: "Automate workflows seamlessly." },
  ];

  return (
    <section ref={containerRef} className="py-12 bg-black text-white max-w-7xl mx-auto">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "0px 0px -300px 0px" }}
          transition={{ duration: 0.6, type: "spring" }}
          className="text-center mb-8 md:mb-12 px-4"
        >
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold mb-4 md:mb-6">
            AI Solutions. <span className="text-yellow-200">🤖</span>{" "}
            Smart Business. <span className="text-yellow-300">🚀</span>
          </h2>
          <p className="text-sm sm:text-md md:text-md text-gray-300 max-w-4xl mx-auto">
            NOVA is the cutting-edge AI platform powering tomorrow's innovative businesses. Ready to revolutionize your workflow?
          </p>
        </motion.div>

        {/* Animated Cards Container */}
        <motion.div 
          className="relative space-y-8"
          variants={stackVariants}
          initial="offscreen"
          whileInView="onscreen"
          viewport={{ once: true, margin: "0px 0px -100px 0px" }}
        >
          {cards.map((card, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              className="rounded-3xl p-4 sm:p-6 md:p-8 text-black relative overflow-hidden"
              style={{ backgroundColor: card.bg }}
              transition={{
                delay: index * 0.1,
                type: "spring",
                stiffness: 100,
                damping: 20
              }}
            >
              <div className="flex flex-col lg:grid text-white lg:grid-cols-2 gap-4 sm:gap-6 items-start">
                <div className="w-full">
                  <h3 className="text-lg sm:text-2xl md:text-4xl mb-2 md:mb-3 text-black">
                    {card.title}
                  </h3>
                  <p className="text-lg md:text-xl text-black max-w-prose">
                    Unlock the industry's most comprehensive influencer discovery solution. The Creator Discovery Suite has five powerful tools designed to help you uncover, then recruit the perfect partners for your brand.
                  </p>
                </div>

                {/* Animated Demo Block */}
                <motion.div 
                  className="relative w-full"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4, type: "spring" }}
                >
                  <div className="bg-teal-600 rounded-xl p-3 sm:p-4 md:p-6 shadow-xl">
                    {/* Search Header */}
                    <div className="flex items-center gap-4 mb-6 flex-wrap">
                      <div className="flex-1">
                        <div className="bg-white rounded-lg px-3 sm:px-4 py-2 sm:py-3 flex items-center gap-2 sm:gap-3 text-sm sm:text-base">
                          <span className="text-gray-400">#festivals</span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <SiTiktok className="text-2xl text-white" />
                        <SiInstagram className="text-2xl text-white" />
                      </div>
                    </div>

                    {/* Creator Cards */}
                    <div className="space-y-3">
                      {[
                        { name: "Maribelle", type: "Travel • Fitness • Fashion • Beauty", stats: { followers: "80.7K", engagement: "6.7%", posts: "9K" } },
                        { name: "Van Holmes", type: "Welcome to my world!", stats: { followers: "80.7K", engagement: "6.7%", posts: "9K" } },
                      ].map((creator, i) => (
                        <motion.div 
                          key={creator.name}
                          initial={{ opacity: 0, x: 20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          whileHover={{ scale: 1.02 }}
                          viewport={{ once: true }}
                          transition={{ 
                            duration: 0.4, 
                            delay: 0.4 + (i * 0.1),
                            type: "spring",
                            stiffness: 300
                          }}
                          className="bg-white/10 hover:bg-white/20 rounded-lg p-4 flex items-center gap-4 cursor-pointer"
                        >
                          <div className="w-12 h-12 bg-white/20 rounded-full flex-shrink-0" />
                          <div className="flex-1 min-w-0">
                            <div className="text-white font-medium text-lg">{creator.name}</div>
                            <div className="text-white/60 text-sm">{creator.type}</div>
                          </div>
                          <div className="flex gap-6 text-white">
                            <span>{creator.stats.followers}</span>
                            <span>{creator.stats.engagement}</span>
                            <span>{creator.stats.posts}</span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                  <div className="absolute -inset-4 bg-teal-400/20 blur-3xl -z-10" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
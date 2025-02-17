import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";
import { Eye, Link2 } from "lucide-react";
import { useRef } from "react";

export function ShoppingSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section className="py-24 bg-[#1a237e] text-white" ref={containerRef}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            The way people shop <br />
            has changed. <span className="text-[#e1ff80]">Has your marketing?</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Reach new audiences and inspire purchases by partnering with content creators.
          </p>
        </motion.div>

        {/* Timeline Content */}
        <div className="max-w-5xl mx-auto">
          {/* Timeline Line Container */}
          <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-white/10">
            <motion.div 
              className="absolute top-0 left-0 w-full bg-white"
              style={{ 
                height: "100%",
                scaleY,
                transformOrigin: "top" 
              }}
            />
          </div>

          {/* Discovery Step */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative mb-24"
          >
            <div className="ml-16">
              <div className="flex items-start gap-6 mb-16">
                {/* Step Icon */}
                <motion.div 
                  className="absolute left-0 flex items-center justify-center w-12 h-12 bg-[#e1ff80] rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.2 }}
                >
                  <Eye className="w-6 h-6 text-black" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">DISCOVERY</h3>
                    <h4 className="text-4xl font-bold mb-6">
                      Introduce your brand.
                    </h4>
                    <p className="text-gray-300 mb-8 max-w-lg">
                      Social media is the #1 source for product discovery for Gen Z and Millennials. Get in front of new audiences by partnering with brand-aligned creators your audience trusts.
                    </p>
                  </motion.div>

                  {/* Social Post Mockup */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="relative max-w-sm"
                  >
                    <div className="bg-black rounded-2xl overflow-hidden shadow-xl">
                      <div className="aspect-[9/16] relative bg-gray-900">
                        <img 
                          src="https://images.unsplash.com/photo-1600185365483-26d7a4cc7519"
                          alt="Creator Content"
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute bottom-4 right-4 flex gap-2">
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                            <Eye className="w-4 h-4" /> 4,578
                          </span>
                          <span className="bg-white/20 px-3 py-1 rounded-full text-sm flex items-center gap-1">
                            <Link2 className="w-4 h-4" /> 1,009
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute -right-4 -top-4 flex gap-2">
                      <div className="w-8 h-8 bg-[#00f2ea] rounded-full flex items-center justify-center">
                        <SiTiktok className="w-4 h-4 text-black" />
                      </div>
                      <div className="w-8 h-8 bg-[#e1306c] rounded-full flex items-center justify-center">
                        <SiInstagram className="w-4 h-4 text-white" />
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Consideration Step */}
              <div className="flex items-start gap-6">
                {/* Step Icon */}
                <motion.div 
                  className="absolute left-0 flex items-center justify-center w-12 h-12 bg-[#e1ff80] rounded-full"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, delay: 0.4 }}
                >
                  <Eye className="w-6 h-6 text-black" />
                </motion.div>

                {/* Content */}
                <div className="flex-1">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                  >
                    <h3 className="text-2xl font-bold mb-4">CONSIDERATION</h3>
                    <h4 className="text-4xl font-bold mb-6">
                      Showcase your products.
                    </h4>
                    <p className="text-gray-300 mb-8 max-w-lg">
                      Consumers want to see something in action before they buy it. Creators bring your products to life through styling tutorials, product reviews, day-in-the-life content, and more.
                    </p>
                  </motion.div>

                  {/* Product Showcase Mockup */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    className="relative max-w-sm"
                  >
                    <div className="bg-white rounded-2xl overflow-hidden shadow-xl p-4">
                      <div className="aspect-[4/5] relative bg-gray-100 rounded-xl">
                        <img 
                          src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f"
                          alt="Product Showcase"
                          className="w-full h-full object-cover rounded-xl"
                        />
                        <div className="absolute top-4 right-4">
                          <div className="bg-[#e1ff80] text-black px-3 py-1 rounded-full text-sm font-medium">
                            ★★★★★
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
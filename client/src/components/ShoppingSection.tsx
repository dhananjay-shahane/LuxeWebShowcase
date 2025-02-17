import { motion } from "framer-motion";
import { SiTiktok, SiInstagram, SiYoutube } from "react-icons/si";

export function ShoppingSection() {
  return (
    <section className="py-24 bg-[#1a237e] text-white">
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
          {/* Discovery Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-24"
          >
            <div className="flex items-start gap-6">
              {/* Left Content */}
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-[#e1ff80] rounded-full flex items-center justify-center">
                    <span className="text-black font-bold">1</span>
                  </div>
                  <h3 className="text-2xl font-bold">DISCOVERY</h3>
                </div>
                <p className="text-lg mb-6">
                  Introduce your brand.
                </p>
                <p className="text-gray-300">
                  Social media is the #1 source for product discovery for Gen Z and Millennials. Get in front of new audiences by partnering with brand-aligned creators your audience trusts.
                </p>
              </div>

              {/* Right Content - Social Media Mockup */}
              <div className="flex-1">
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="relative"
                >
                  {/* Social Media Post Mockup */}
                  <div className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl">
                    <div className="p-4 flex items-center gap-4">
                      <div className="flex gap-2">
                        <SiTiktok className="text-2xl" />
                        <SiInstagram className="text-2xl" />
                        <SiYoutube className="text-2xl text-red-500" />
                      </div>
                    </div>
                    <div className="aspect-video bg-gray-800 relative">
                      <div className="absolute bottom-4 right-4 flex gap-2">
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">4,578</span>
                        <span className="bg-white/20 px-3 py-1 rounded-full text-sm">1,009</span>
                      </div>
                    </div>
                  </div>

                  {/* Glow Effect */}
                  <div className="absolute -inset-4 bg-blue-500/20 blur-3xl -z-10" />
                </motion.div>
              </div>
            </div>
          </motion.div>

          {/* Connect Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute left-6 top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#e1ff80] to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

import { motion } from "framer-motion";
import { SiTiktok, SiInstagram } from "react-icons/si";

export function BrandsSection() {
  return (
    <section className="py-24 bg-black text-white">
      {/* Main Content */}
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Powering Brands. <span className="text-yellow-200">✨</span>{" "}
            Empowering Creators. <span className="text-yellow-300">💪</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
            GRIN is the software behind today's most iconic creator programs. Are you ready to take your partnerships to the next level?
          </p>
        </motion.div>

        {/* Feature Block */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-[#e1ff80] rounded-3xl p-12 text-black"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <motion.h3 
                className="text-4xl font-bold mb-6"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Discover and recruit<br />
                brand champions.
              </motion.h3>
              <motion.p 
                className="text-lg text-gray-700"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                Unlock the industry's most comprehensive influencer discovery solution. The Creator Discovery Suite has five powerful tools designed to help you uncover, then recruit the perfect partners for your brand.
              </motion.p>
            </div>

            {/* Creator Search Demo */}
            <div className="relative">
              <motion.div 
                className="bg-teal-600 rounded-xl p-6 shadow-xl"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-1 bg-white/10 rounded-full px-4 py-2 text-white">
                    <div className="flex items-center gap-2">
                      <span>Creator Search</span>
                      <span className="text-white/60">|</span>
                      <span className="text-white/60">#filters</span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <SiTiktok className="text-2xl text-white" />
                    <SiInstagram className="text-2xl text-white" />
                  </div>
                </div>

                {/* Creator Cards */}
                <div className="space-y-3">
                  {[1, 2, 3].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: 0.6 + (i * 0.1) }}
                      className="bg-white/5 rounded-lg p-4 flex items-center gap-4"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-full" />
                      <div className="flex-1">
                        <div className="h-2 w-24 bg-white/20 rounded-full" />
                        <div className="h-2 w-32 bg-white/10 rounded-full mt-2" />
                      </div>
                      <div className="flex gap-3">
                        <div className="text-white/80">80.7K</div>
                        <div className="text-white/80">6.7%</div>
                        <div className="text-white/80">9K</div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <div className="absolute -inset-4 bg-teal-400/20 blur-3xl -z-10" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

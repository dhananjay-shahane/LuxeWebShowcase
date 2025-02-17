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
          className="bg-[#e1ff80] rounded-3xl p-12 text-black relative overflow-hidden"
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
                {/* Search Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="flex-1">
                    <div className="bg-white rounded-lg px-4 py-3 flex items-center gap-3">
                      <span>Creator Search</span>
                      <span className="text-gray-400">|</span>
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
                    { name: "Maribelle", type: "Travel • Fitness • Fashion • Beauty" },
                    { name: "Van Holmes", type: "Welcome to my world!" },
                    { name: "Timeless Trinity", type: "Model | Mentor | Mom | Grandma" },
                    { name: "Shae Hall", type: "Beauty, My life, Self improvement" }
                  ].map((creator, i) => (
                    <motion.div 
                      key={creator.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: 0.6 + (i * 0.1),
                        type: "spring",
                        stiffness: 300
                      }}
                      className="bg-white/5 hover:bg-white/10 rounded-lg p-4 flex items-center gap-4 cursor-pointer group"
                    >
                      <div className="w-10 h-10 bg-white/10 rounded-full" />
                      <div className="flex-1 min-w-0">
                        <div className="text-white font-medium truncate">{creator.name}</div>
                        <div className="text-white/60 text-sm truncate">{creator.type}</div>
                      </div>
                      <div className="flex gap-4 text-white/80">
                        <span>80.7K</span>
                        <span>6.7%</span>
                        <span>9K</span>
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

import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function ReadyToStartSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="container mx-auto px-4">
        <div className="max-w-[1200px] mx-auto relative overflow-hidden rounded-3xl">
          {/* Background Video */}
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="absolute inset-0 w-full h-full object-cover"
          >
            <source src="https://grin.co/wp-content/uploads/2024/07/Creators-Hero-Desktop.webm" type="video/mp4" />
          </video>

          {/* Content */}
          <div className="relative z-10 min-h-[400px] flex flex-col items-center justify-center p-16 text-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-8"
            >
              Ready to harness the power of<br />Influence?
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Button 
                size="lg" 
                className="bg-[#E8FF81] hover:bg-[#E8FF81]/90 text-black rounded-full px-8 py-6 text-lg font-semibold"
              >
                Get a demo
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

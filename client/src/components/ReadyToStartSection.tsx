
import { motion } from "framer-motion";
import { Button } from "./ui/button";

export function ReadyToStartSection() {
  return (
    <section className="py-24 bg-black relative">
      <div className="px-4">
        <div className="mx-auto relative overflow-hidden h-[80vh] flex justify-center items-center">
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
          <div className="relative z-10 min-h-[400px] flex flex-col items-center justify-center md:p-[120px] p-[50px]  text-center border-yellow-200 border-2 rounded-[2rem]">
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
                className="absolute bottom-[-27px] left-1/2 transform -translate-x-1/2  bg-[#E8FF81] hover:bg-[#E8FF81]/90 text-black rounded-[2rem] px-16 py-8 text-lg font-medium transition-transform duration-300 hover:scale-105"
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

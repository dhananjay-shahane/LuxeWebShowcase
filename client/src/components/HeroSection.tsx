import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedText } from "./ui/animated-text";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Video */}
      <video 
        autoPlay 
        loop 
        muted 
        playsInline 
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="https://grin.co/wp-content/uploads/2024/07/Creators-Hero-Desktop.webm" type="video/mp4" />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/10 to-background/10" />

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6">
            <AnimatedText>Grow your</AnimatedText>
            <span className="text-primary block mt-2">
              <AnimatedText>community.</AnimatedText>
            </span>
          </h1>

          <motion.p 
            className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-8 px-4 sm:px-0"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get more than just influencer marketing software.
            Build and scale a world-class creator program with GRIN.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Button size="lg" className="text-lg px-8">
              Free demo awaits
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AnimatedText } from "./ui/animated-text";

export function HeroSection() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div 
        className="absolute inset-0 z-0" 
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1695148831053-77e3568234f9')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/80" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 pt-20 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <AnimatedText>Grow your</AnimatedText>
            <span className="text-primary block mt-2">
              <AnimatedText>community.</AnimatedText>
            </span>
          </h1>

          <motion.p 
            className="text-xl md:text-2xl text-muted-foreground mb-8"
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

        {/* Studio Image */}
        <motion.div
          className="mt-16 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <img 
            src="https://images.unsplash.com/photo-1624717369155-2b748ce8f0ff"
            alt="Creator Studio"
            className="rounded-lg shadow-2xl mx-auto"
          />
          
          {/* Neon Effect */}
          <div className="absolute -inset-4 bg-primary/20 blur-3xl -z-10" />
        </motion.div>
      </div>
    </div>
  );
}

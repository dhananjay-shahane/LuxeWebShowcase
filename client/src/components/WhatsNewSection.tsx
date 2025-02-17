
import { motion } from "framer-motion";
import { Button } from "./ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import AutoPlay from "embla-carousel-autoplay";

const articles = [
  {
    title: "Brand Reputation Part 1: Online Reputation Management for Businesses in 2024",
    image: "https://placehold.co/600x400",
    bgColor: "bg-[#ff6b4a]"
  },
  {
    title: "15 Creative Instagram Story Ideas to Try Out in 2024",
    image: "https://placehold.co/600x400",
    bgColor: "bg-[#e879f9]"
  },
  {
    title: "The Complete Guide to Micro Influencer Marketing",
    image: "https://placehold.co/600x400",
    bgColor: "bg-[#93c5fd]"
  }
];

export function WhatsNewSection() {
  const plugin = AutoPlay({ delay: 3000, stopOnInteraction: false });

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            What's <span className="text-[#98ff63]">new</span> at GRIN?
          </h2>
        </motion.div>

        <div className="max-w-[1200px] mx-auto">
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            plugins={[plugin]}
            className="relative"
          >
            <CarouselContent>
              {articles.map((article, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className="p-2"
                  >
                    <div className={`${article.bgColor} rounded-2xl overflow-hidden h-[400px] flex flex-col`}>
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6 flex flex-col justify-between flex-grow">
                        <h3 className="text-xl font-bold text-white mb-4">
                          {article.title}
                        </h3>
                        <Button 
                          variant="outline" 
                          className="text-white border-white hover:bg-white/20 w-full"
                          onClick={() => window.open(`/blog/${article.title.toLowerCase().replace(/\s+/g, '-')}`, '_blank')}
                        >
                          Read more
                        </Button>
                      </div>
                    </div>
                  </motion.div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-0 -translate-x-12 hover:bg-white hover:text-black" />
            <CarouselNext className="absolute right-0 translate-x-12 hover:bg-white hover:text-black" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

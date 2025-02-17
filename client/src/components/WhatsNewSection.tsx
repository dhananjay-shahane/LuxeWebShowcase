
import { motion } from "framer-motion";
import { Button } from "./ui/button";

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

        <div className="relative">
          <div className="flex space-x-6 overflow-x-auto pb-8 scrollbar-hide">
            {articles.map((article, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="min-w-[350px] flex-shrink-0"
              >
                <div className={`${article.bgColor} rounded-2xl overflow-hidden`}>
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-4">
                      {article.title}
                    </h3>
                    <Button variant="outline" className="text-white border-white hover:bg-white/20">
                      Read more
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 bg-white rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6"/>
            </svg>
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 bg-white rounded-full p-2">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

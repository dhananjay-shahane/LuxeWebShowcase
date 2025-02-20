
import { motion } from "framer-motion";
import { SiTiktok, SiInstagram } from "react-icons/si";
import { MdAdd } from "react-icons/md";
import { Card } from "./ui/card";

const cards = [
  {
    title: "Content Engagement",
    stats: [
      { value: "$1.6M", label: "Revenue" },
      { value: "19,748%", label: "Revenue ROI" },
      { value: "179.8K", label: "Conversions" },
      { value: "$3.79K", label: "Avg. Revenue Per Post" },
    ],
    highlight: {
      title: "Bicoastal Collection Campaign",
      revenue: "$42,780",
      roi: "183%",
      conversions: "962"
    }
  },
  {
    title: "Campaign Overview",
    campaign: {
      code: "Sunny20",
      paid: "$2,475",
      title: "Fall Collection",
      subtitle: "Unseen Hero"
    }
  },
  {
    title: "Activations",
    items: [
      { title: "Around the World", status: "In Progress", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21" },
      { title: "Tropical Sunshine", status: "Draft", image: "https://images.unsplash.com/photo-1506929562872-bb421503ef21" }
    ],
    actions: [
      "Custom Activation",
      "Product Gifting",
      "Product Promotion",
      "Recurring Partnership",
      "Evergreen Campaign"
    ]
  }
];

export function BrandsSection() {
  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold text-center mb-16 text-white"
        >
          Smart Analytics Dashboard
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Content Engagement Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-full lg:col-span-2"
          >
            <Card className="p-6 bg-gradient-to-br from-[#e1ff80] to-[#98E7FF]">
              <h3 className="text-2xl font-bold mb-6">Content Engagement</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {cards[0].stats.map((stat, i) => (
                  <div key={i} className="bg-white/20 p-4 rounded-lg backdrop-blur-sm">
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-sm opacity-70">{stat.label}</div>
                  </div>
                ))}
              </div>
              <div className="bg-white/90 p-6 rounded-xl">
                <div className="flex justify-between items-center mb-4">
                  <h4 className="text-xl font-semibold">{cards[0].highlight.title}</h4>
                  <div className="bg-teal-500 text-white px-4 py-2 rounded-lg">
                    ROI {cards[0].highlight.roi}
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <div className="text-sm opacity-70">REVENUE</div>
                    <div className="text-2xl font-bold">{cards[0].highlight.revenue}</div>
                  </div>
                  <div>
                    <div className="text-sm opacity-70">TOTAL CONVERSIONS</div>
                    <div className="text-2xl font-bold">{cards[0].highlight.conversions}</div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>

          {/* Campaign Overview Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1"
          >
            <Card className="p-6 bg-gradient-to-br from-purple-600 to-pink-500 text-white">
              <div className="bg-[#98FF80]/20 px-4 py-2 rounded-lg inline-block mb-4">
                <span className="text-[#98FF80] font-semibold">PAID</span>
                <div className="text-2xl font-bold text-white">{cards[1].campaign.paid}</div>
              </div>
              <div className="bg-white/10 rounded-xl p-6 backdrop-blur-sm">
                <h4 className="text-sm opacity-70">Your Code: {cards[1].campaign.code}</h4>
                <div className="text-xl font-bold mt-2">{cards[1].campaign.title}</div>
                <p className="opacity-70">{cards[1].campaign.subtitle}</p>
                <button className="mt-4 bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg w-full">
                  Continue
                </button>
              </div>
            </Card>
          </motion.div>

          {/* Activations Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-full"
          >
            <Card className="p-6 bg-gradient-to-r from-teal-500 to-cyan-400">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-white">Activations</h3>
                <button className="bg-white/20 hover:bg-white/30 transition-colors px-4 py-2 rounded-lg text-white">
                  Manage
                </button>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  {cards[2].items.map((item, i) => (
                    <div key={i} className="bg-white/10 rounded-lg p-4 flex gap-4 items-center">
                      <img src={item.image} alt="" className="w-16 h-16 rounded-lg object-cover" />
                      <div>
                        <h4 className="font-semibold text-white">{item.title}</h4>
                        <p className="text-sm text-white/70">{item.status}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="bg-white/10 rounded-lg p-6">
                  <h4 className="text-xl font-bold text-white mb-4">Create Activation</h4>
                  <div className="space-y-3">
                    {cards[2].actions.map((action, i) => (
                      <button
                        key={i}
                        className="w-full flex items-center gap-3 bg-white/10 hover:bg-white/20 transition-colors px-4 py-3 rounded-lg text-white text-left"
                      >
                        <MdAdd className="text-xl" />
                        {action}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

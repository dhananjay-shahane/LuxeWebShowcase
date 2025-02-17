import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { SiGmail, SiMailchimp, SiWindows, SiShopify, SiAmazon, SiWoocommerce, SiPaypal, SiSlack, SiDropbox } from 'react-icons/si';

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

export function IntegrateSection() {
  return (
    <section className="bg-[#1a1f6f] text-white py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Integrate with{" "}
            <span className="relative inline-block">
              <span className="text-[#c2ff8d]">everything</span>
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#c2ff8d]"></span>
            </span>
          </h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300">
            No more bouncing between social platforms, ecommerce software, and email
            inboxes. GRIN brings everything you need to run your program under one roof.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6"
        >
          <motion.div variants={item}>
            <Card className="bg-white rounded-2xl h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-black mb-4">Email</h3>
                <p className="text-gray-600 mb-8">
                  Manage all creator comms in GRIN. Use ready-made email templates,
                  automate sequences, and track every click, open, and reply.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <SiGmail className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <SiMailchimp className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <SiWindows className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-white rounded-2xl h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-black mb-4">Ecommerce</h3>
                <p className="text-gray-600 mb-8">
                  Ship products to creators, create and manage discount codes, pay
                  commission on sales, create co-branded landing pages and so much more.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <SiShopify className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <SiAmazon className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <SiWoocommerce className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div variants={item}>
            <Card className="bg-white rounded-2xl h-full">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-black mb-4">
                  Workflow Efficiency
                </h3>
                <p className="text-gray-600 mb-8">
                  Pay creators via PayPal, manage all your contacts via DocuSign, sync
                  content to all your external drives, and get Slack notifications.
                </p>
                <div className="grid grid-cols-3 gap-4">
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <SiPaypal className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <SiSlack className="w-8 h-8 text-gray-600" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center">
                    <SiDropbox className="w-8 h-8 text-gray-600" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <Button size="lg" className="bg-[#ff6b4a] hover:bg-[#ff6b4a]/90 text-white rounded-full px-8 py-6 text-lg">
            Explore integrations
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
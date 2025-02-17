import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

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
                  <div className="w-16 h-16 bg-gray-100 rounded-xl p-2">
                    <img src="https://www.gstatic.com/images/branding/product/1x/gmail_48dp.png" alt="Gmail" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl p-2">
                    <img src="https://cdn-images.mailchimp.com/monkey_rewards/MC_MonkeyReward_15.png" alt="Mailchimp" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl p-2">
                    <img src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RE1Mu3b" alt="Outlook" className="w-full h-full object-contain" />
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
                  <div className="w-16 h-16 bg-gray-100 rounded-xl p-2">
                    <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/brand-assets/shopify-logo-primary-logo-456baa801ee66a0a435671082365958316831c9960c480451dd0330bcdae304f.svg" alt="Shopify" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl p-2">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png" alt="Amazon" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl p-2">
                    <img src="https://woocommerce.com/wp-content/themes/woo/images/logo-woocommerce.svg" alt="WooCommerce" className="w-full h-full object-contain" />
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
                  <div className="w-16 h-16 bg-gray-100 rounded-xl p-2">
                    <img src="https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg" alt="PayPal" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl p-2">
                    <img src="https://a.slack-edge.com/80588/marketing/img/icons/icon_slack_hash_colored.png" alt="Slack" className="w-full h-full object-contain" />
                  </div>
                  <div className="w-16 h-16 bg-gray-100 rounded-xl p-2">
                    <img src="https://aem.dropbox.com/cms/content/dam/dropbox/www/en-us/branding/dropbox-logo@2x.jpg" alt="Dropbox" className="w-full h-full object-contain" />
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
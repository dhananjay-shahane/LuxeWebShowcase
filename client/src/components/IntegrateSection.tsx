
import { Card, CardContent } from "./ui/card"

export function IntegrateSection() {
  return (
    <section className="bg-[#1a1f6f] text-white py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold mb-6 text-center">
          Integrate with <span className="text-[#c2ff8d] relative">everything
            <span className="absolute bottom-0 left-0 w-full h-1 bg-[#c2ff8d]"></span>
          </span>
        </h2>
        <p className="text-center text-lg mb-12 max-w-3xl mx-auto">
          No more bouncing between social platforms, ecommerce software, and email inboxes. GRIN brings everything you need to run your program under one roof.
        </p>
        
        <div className="flex flex-col md:flex-row gap-6">
          <Card className="flex-1 bg-white text-black p-6 rounded-xl">
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-600">
                Manage all creator comms in GRIN. Use ready-made email templates, automate sequences, and track every click, open, and reply.
              </p>
              <div className="flex gap-4 mt-4">
                {/* Placeholder boxes for email platform logos */}
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 bg-white text-black p-6 rounded-xl">
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold">Ecommerce</h3>
              <p className="text-gray-600">
                Ship products to creators, create and manage discount codes, pay commission on sales, create co-branded landing pages and so much more.
              </p>
              <div className="flex gap-4 mt-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>

          <Card className="flex-1 bg-white text-black p-6 rounded-xl">
            <CardContent className="space-y-4">
              <h3 className="text-xl font-semibold">Workflow Efficiency</h3>
              <p className="text-gray-600">
                Pay creators via PayPal, manage all your contacts via DocuSign, sync content to all your external drives, and get Slack notifications.
              </p>
              <div className="flex gap-4 mt-4">
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
                <div className="w-12 h-12 bg-gray-100 rounded-lg"></div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

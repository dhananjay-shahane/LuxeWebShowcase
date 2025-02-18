
import { Button } from "./ui/button";
import { SiLinkedin, SiTiktok, SiPinterest, SiYoutube } from "react-icons/si";

export function Footer() {
  return (
    <footer className="bg-black text-white py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between gap-8">
          {/* Left section with logo and demo button */}
          <div className="flex flex-col gap-4">
            {/* <img src="/logo.svg" alt="GRIN" className="h-8" /> */}
            
            <Button variant="outline" className="rounded-full border-white text-white hover:bg-white hover:text-black w-fit">
              See how it works
              <span className="ml-2 text-lg">→</span>
              <span className="text-xs ml-2 opacity-70">Watch 3-min Demo</span>
            </Button>
            <p className="text-sm text-white/60 mt-auto">© Grin Technologies Inc 2023. All rights reserved</p>
          </div>

          {/* Navigation Links */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 lg:w-2/3">
            {/* Platform Section */}
            <div>
              <h3 className="font-bold mb-4 text-sm">PLATFORM</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Contact Sales</Button></li>
                <li><span className="text-xs text-white/70">(866) 879-1732</span></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Platform Login</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Platform Status</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Request Demo</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Customer Support</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">G2</Button></li>
              </ul>
            </div>

            {/* Company Section */}
            <div>
              <h3 className="font-bold mb-4 text-sm">COMPANY</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Community</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Careers</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">GRIN Help</Button></li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h3 className="font-bold mb-4 text-sm">LEGAL & POLICIES</h3>
              <ul className="space-y-2">
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">GRIN Trust Center</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Terms of Service</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Privacy Policies</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Privacy Request</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Cookie Notice</Button></li>
                <li><Button variant="link" className="text-white/70 hover:text-white p-0 h-auto text-sm font-normal">Creator Terms of Service</Button></li>
              </ul>
            </div>

            {/* Follow Us Section */}
            <div>
              <h3 className="font-bold mb-4 text-sm">FOLLOW US</h3>
              <div className="flex gap-2 flex-wrap">
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20">
                  <SiLinkedin className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20">
                  <SiTiktok className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20">
                  <SiPinterest className="h-4 w-4" />
                </Button>
                <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-white/10 hover:bg-white/20">
                  <SiYoutube className="h-4 w-4" />
                </Button>
              </div>
              <div className="mt-4">
                {/*  image  */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

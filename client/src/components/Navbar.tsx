import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { NavigationMenu, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const platformItems = [
  { title: "Creator Discovery", description: "Find and connect with creators" },
  { title: "Content Management", description: "Manage your content strategy" },
  { title: "Relationship Management", description: "Build lasting partnerships" },
  { title: "Reporting & Analytics", description: "Track campaign performance" },
  { title: "Influencer Gifting", description: "Streamline product seeding" },
  { title: "Creator Payments", description: "Automate creator compensation" }
];

export function Navbar() {
  return (
    <motion.header 
      className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b border-border"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <a href="/" className="text-2xl font-bold">
            GRIN
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 hover:text-primary transition-colors">
                    Platform
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[600px] p-6 grid grid-cols-2 gap-4">
                      {platformItems.map((item) => (
                        <div key={item.title} className="p-4 hover:bg-accent rounded-lg transition-colors">
                          <h3 className="text-sm font-medium">{item.title}</h3>
                          <p className="text-sm text-muted-foreground">{item.description}</p>
                        </div>
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 hover:text-primary transition-colors">
                    Solutions
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[400px] p-6">
                      <div className="grid gap-4">
                        <div className="p-4 hover:bg-accent rounded-lg transition-colors">
                          <h3 className="text-sm font-medium">Community</h3>
                          <p className="text-sm text-muted-foreground">Build and engage with your creator community</p>
                        </div>
                        <div className="p-4 hover:bg-accent rounded-lg transition-colors">
                          <h3 className="text-sm font-medium">Integrations</h3>
                          <p className="text-sm text-muted-foreground">Connect with your favorite tools</p>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 hover:text-primary transition-colors">
                    Customers
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 hover:text-primary transition-colors">
                    Resources
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="px-4 py-2 hover:text-primary transition-colors">
                    Company
                  </NavigationMenuTrigger>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden lg:inline-flex">Login</Button>
          <Button className="hidden lg:inline-flex">Get a demo</Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-80">
              <div className="flex flex-col gap-4 mt-8">
                <Button variant="ghost" className="justify-start">Platform</Button>
                <Button variant="ghost" className="justify-start">Solutions</Button>
                <Button variant="ghost" className="justify-start">Customers</Button>
                <Button variant="ghost" className="justify-start">Resources</Button>
                <Button variant="ghost" className="justify-start">Company</Button>
                <div className="mt-4">
                  <Button variant="ghost" className="w-full justify-start">Login</Button>
                  <Button className="w-full mt-2">Get a demo</Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
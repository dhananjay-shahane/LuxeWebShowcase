import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import { Menu } from "lucide-react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { useState } from "react";

const platformItems = [
  { title: "Creator Discovery", description: "Find and connect with creators" },
  { title: "Content Management", description: "Manage your content strategy" },
  {
    title: "Relationship Management",
    description: "Build lasting partnerships",
  },
  { title: "Reporting & Analytics", description: "Track campaign performance" },
  { title: "Influencer Gifting", description: "Streamline product seeding" },
  { title: "Creator Payments", description: "Automate creator compensation" },
];

export function Navbar() {
  const [hidden, setHidden] = useState(false);
  const { scrollY } = useScroll();
  let lastScrollY = 0;

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > lastScrollY && latest > 150) {
      setHidden(true);
    } else {
      setHidden(false);
    }
    lastScrollY = latest;
  });

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full mt-4 z-50 ",
        "transition-all duration-300"
      )}
      initial={{ y: 0 }}
      animate={{ y: hidden ? -100 : 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="container bg-background/80 backdrop-blur-sm max-w-7xl mx-auto h-25 flex items-center justify-between border rounded-full px-3 sm:px-4 py-4 sm:py-6 mx-2 sm:mx-auto">
        {/* logo section */}
        <a href="/" className="text-2xl font-bold">
          NOVA
        </a>

        {/* nav menu  */}
        {/* Desktop Navigation - Only visible on large screens */}
        <div className="hidden lg:block">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 hover:text-primary transition-colors">
                  Platform
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div
                    className="w-[600px] p-6 grid grid-cols-2 gap-4"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    {platformItems.map((item) => (
                      <div
                        key={item.title}
                        className="p-4 hover:bg-accent rounded-lg transition-colors"
                      >
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {item.description}
                        </p>
                      </div>
                    ))}
                  </motion.div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="px-4 py-2 hover:text-primary transition-colors">
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <motion.div
                    className="w-[400px] p-6"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="grid gap-4">
                      <div className="p-4 hover:bg-accent rounded-lg transition-colors">
                        <h3 className="text-sm font-medium">Community</h3>
                        <p className="text-sm text-muted-foreground">
                          Build and engage with your creator community
                        </p>
                      </div>
                      <div className="p-4 hover:bg-accent rounded-lg transition-colors">
                        <h3 className="text-sm font-medium">Integrations</h3>
                        <p className="text-sm text-muted-foreground">
                          Connect with your favorite tools
                        </p>
                      </div>
                    </div>
                  </motion.div>
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

        <div className="flex items-center gap-4">
          {/* Desktop buttons - Only visible on large screens */}
          <Button variant="ghost" className="hidden lg:inline-flex">
            Login
          </Button>
          <Button className="hidden lg:inline-flex rounded-full">
            Get a demo
          </Button>

          {/* Mobile Menu - Only visible on small screens */}
          <Sheet>
            <SheetTrigger asChild className="lg:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-4 mt-8">
                <motion.div
                  className="space-y-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, staggerChildren: 0.1 }}
                >
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg"
                  >
                    Platform
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg"
                  >
                    Solutions
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg"
                  >
                    Customers
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg"
                  >
                    Resources
                  </Button>
                  <Button
                    variant="ghost"
                    className="w-full justify-start text-lg"
                  >
                    Company
                  </Button>
                </motion.div>

                <div className="mt-8 space-y-4">
                  <Button variant="ghost" className="w-full justify-start">
                    Login
                  </Button>
                  <Button className="w-full rounded-full">Get a demo</Button>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}

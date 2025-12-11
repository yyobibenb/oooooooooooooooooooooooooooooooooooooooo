import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Gem } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navItems = [
  { label: "Главная", href: "#" },
  { label: "Курсы", href: "#courses" },
  { label: "Галерея", href: "#gallery" },
  { label: "Преподаватель", href: "#instructor" },
  { label: "Контакты", href: "#contact" }
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    if (href === "#") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.querySelector(href);
      element?.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-black/95 backdrop-blur-xl border-b border-yellow-600/20"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20">
            <button
              onClick={() => scrollToSection("#")}
              className="flex items-center gap-2 hover-elevate px-3 py-2 transition-all"
              data-testid="button-logo"
            >
              <Gem className="w-5 h-5 text-yellow-600" strokeWidth={1} />
              <span className="font-serif text-base font-light text-white tracking-[0.1em] uppercase" style={{ fontWeight: 300 }}>
                Vitaliy Sankov
              </span>
            </button>

            <div className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-xs font-light text-white/60 hover:text-yellow-600 transition-all relative group uppercase tracking-[0.15em]"
                  data-testid={`link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-px bg-yellow-600 transition-all duration-300 group-hover:w-full" />
                </button>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden text-white hover:text-yellow-600"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-20 left-0 right-0 bottom-0 z-[100] bg-black/98 backdrop-blur-xl border-b border-yellow-600/20 md:hidden"
          >
            <div className="px-4 py-6 space-y-2">
              {navItems.map((item) => (
                <div
                  key={item.label}
                  role="button"
                  tabIndex={0}
                  onClick={() => {
                    scrollToSection(item.href);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      scrollToSection(item.href);
                    }
                  }}
                  className="block w-full text-left px-4 py-5 text-base font-light text-white/80 active:text-yellow-600 active:bg-yellow-600/10 hover:text-yellow-600 transition-colors uppercase tracking-[0.15em] cursor-pointer select-none"
                  data-testid={`mobile-link-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Gem } from "lucide-react";
import ringImage from "@assets/generated_images/Luxury_diamond_ring_black_background_dcdb1e0b.png";

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-black">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 via-transparent to-yellow-600/20" />
      </div>
      
      <div className="absolute top-0 left-0 w-32 h-32 border-l border-t border-yellow-600/20" />
      <div className="absolute top-0 right-0 w-32 h-32 border-r border-t border-yellow-600/20" />
      <div className="absolute bottom-0 left-0 w-32 h-32 border-l border-b border-yellow-600/20" />
      <div className="absolute bottom-0 right-0 w-32 h-32 border-r border-b border-yellow-600/20" />
      
      <div className="relative h-full w-full flex flex-col lg:flex-row items-center justify-center px-4 md:px-8 max-w-7xl mx-auto gap-12 lg:gap-20 pt-48 pb-24 md:pt-20 md:pb-0">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 text-center lg:text-left z-10"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="mb-6 inline-block"
          >
            <Gem className="w-10 h-10 text-yellow-600 mx-auto lg:mx-0" strokeWidth={1} />
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="font-serif text-4xl md:text-6xl lg:text-7xl font-light tracking-tight text-white mb-6 leading-[1.1]"
            style={{ fontWeight: 300 }}
          >
            VITALIY SANKOV
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-24 h-px bg-gradient-to-r from-yellow-600 to-transparent mb-8 mx-auto lg:mx-0"
          />
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className="text-base md:text-lg font-light leading-relaxed text-white/70 mb-12 max-w-xl mx-auto lg:mx-0"
            style={{ letterSpacing: '0.08em' }}
          >
            МАСТЕРСКАЯ ИЗЫСКАННЫХ УКРАШЕНИЙ
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
          >
            <Button
              size="lg"
              className="group px-12 py-6 text-xs uppercase tracking-[0.2em] bg-transparent text-yellow-600 border border-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-500 font-light"
              data-testid="button-hero-cta"
              onClick={() => {
                document.getElementById('courses')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <span className="mr-3">Наши Курсы</span>
              <ArrowRight className="w-4 h-4 inline-block transition-transform group-hover:translate-x-1" strokeWidth={1} />
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50, rotate: -5 }}
          animate={{ opacity: 1, x: 0, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut", delay: 0.3 }}
          className="flex-1 relative z-10 max-w-lg w-full"
        >
          <motion.div
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 2, 0]
            }}
            transition={{ 
              duration: 6, 
              repeat: Infinity, 
              ease: "easeInOut" 
            }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-600/20 to-transparent blur-3xl" />
            
            <div className="relative border border-yellow-600/30 p-2 bg-black/40 backdrop-blur-sm">
              <img
                src={ringImage}
                alt="Luxury Diamond Ring"
                className="w-full h-auto"
              />
              
              <div className="absolute top-4 right-4 w-12 h-12 border border-yellow-600/50 rotate-45" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border border-yellow-600/30 rotate-45" />
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.5 }}
            className="absolute -top-8 -left-8 w-16 h-16 border border-yellow-600/20 rotate-45"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.7 }}
            className="absolute -bottom-8 -right-8 w-20 h-20 border border-yellow-600/20 rotate-45"
          />
        </motion.div>
      </div>
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowRight className="w-6 h-6 text-yellow-600/40 rotate-90" strokeWidth={1} />
        </motion.div>
      </motion.div>
    </section>
  );
}

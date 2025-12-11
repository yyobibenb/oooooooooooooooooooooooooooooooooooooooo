import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Gem, Award, Users } from "lucide-react";

const features = [
  {
    icon: Gem,
    title: "Премиум Качество",
    description: "Работа с драгоценными металлами"
  },
  {
    icon: Users,
    title: "Малые Группы",
    description: "Индивидуальный подход"
  }
];

export default function IntroSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-4 md:px-8 bg-black overflow-hidden border-t border-yellow-600/10">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/5 via-transparent to-transparent" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-24"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-[0.1em] text-white mb-8 uppercase" style={{ fontWeight: 300 }}>
            Ювелирное Мастерство
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-8" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-2xl mx-auto">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.15, ease: "easeOut" }}
              className="text-center group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-yellow-600/30 rotate-45 transition-all duration-500 group-hover:border-yellow-600/60">
                <feature.icon className="w-6 h-6 text-yellow-600 -rotate-45" strokeWidth={1} />
              </div>
              <h3 className="font-serif text-lg md:text-xl font-light mb-3 text-white tracking-[0.1em] uppercase" style={{ fontWeight: 300 }}>
                {feature.title}
              </h3>
              <p className="text-xs leading-relaxed text-white/50 uppercase tracking-[0.1em]">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

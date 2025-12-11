import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, BookOpen, Users } from "lucide-react";
import instructorImage from "@assets/image_2025-11-29_15-50-28_1764520627475.png";

const achievements = [
  "Более 25 лет опыта в ювелирном деле"
];

const specializations = [
  { icon: Award, text: "Авторский дизайн" },
  { icon: BookOpen, text: "Классические техники" },
  { icon: Users, text: "Индивидуальное наставничество" }
];

export default function InstructorSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section ref={ref} className="relative py-32 px-4 md:px-8 bg-black overflow-hidden border-t border-yellow-600/10">
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-[0.1em] text-white mb-6 uppercase" style={{ fontWeight: 300 }}>
            Мастер-Преподаватель
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <div className="relative border border-yellow-600/20 p-2 bg-black">
              <div className="overflow-hidden max-h-[600px]">
                <img
                  src={instructorImage}
                  alt="Виталий Саньков"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div className="absolute top-4 right-4 w-12 h-12 border border-yellow-600/40 rotate-45" />
              <div className="absolute bottom-4 left-4 w-8 h-8 border border-yellow-600/30 rotate-45" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-10"
          >
            <div>
              <h3 className="font-serif text-3xl md:text-4xl font-light text-white mb-3 tracking-wide uppercase" style={{ fontWeight: 300 }}>
                Виталий Саньков
              </h3>
              <p className="text-xs text-white/40 uppercase tracking-[0.2em] mb-8">
                Заслуженный мастер ювелирного искусства
              </p>
              
              <div className="h-px bg-gradient-to-r from-yellow-600/50 to-transparent mb-8" />
              
              <p className="text-sm leading-relaxed text-white/60 mb-6 uppercase tracking-[0.1em]" style={{ letterSpacing: '0.05em' }}>
                25 лет опыта в создании уникальных украшений. 
                Сочетание традиционных техник с современными инновациями.
              </p>
            </div>

            <div>
              <h4 className="font-serif text-xl font-light text-white mb-6 tracking-wide uppercase" style={{ fontWeight: 300 }}>
                Достижения
              </h4>
              <ul className="space-y-4">
                {achievements.slice(0, 3).map((achievement, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-1.5 h-1.5 rotate-45 bg-yellow-600 mt-2 flex-shrink-0" />
                    <span className="text-xs text-white/50 uppercase tracking-[0.1em]">{achievement}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <div className="grid grid-cols-3 gap-6">
                {specializations.map((spec, index) => (
                  <div key={index} className="flex flex-col items-center text-center">
                    <div className="w-12 h-12 border border-yellow-600/30 rotate-45 flex items-center justify-center mb-3 transition-all duration-500 hover:border-yellow-600/60">
                      <spec.icon className="w-5 h-5 text-yellow-600 -rotate-45" strokeWidth={1} />
                    </div>
                    <span className="text-xs text-white/40 uppercase tracking-[0.1em]">{spec.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

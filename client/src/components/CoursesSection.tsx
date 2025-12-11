import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ChevronDown } from "lucide-react";
import ring3d1 from "@assets/image_2025-11-29_15-45-14_1764525345532.png";
import ring3d2 from "@assets/image_2025-11-29_15-47-53_1764525374409.png";
import ring3d3 from "@assets/image_2025-11-29_15-48-39_1764525394336.png";
import bracelet3d from "@assets/image_2025-11-29_15-49-10_1764525405103.png";

const courses = [
  {
    title: "Ручное изготовление ювелирных изделий",
    image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=800&auto=format&fit=crop",
    description: "Освойте традиционные техники ювелирного мастерства. Научитесь работать с драгоценными металлами, создавать уникальные украшения вручную. Курс включает работу с золотом, серебром, пайку, полировку и закрепку камней.",
    gallery: null
  },
  {
    title: "3D моделирование ювелирных изделий",
    image: ring3d2,
    description: "Современные технологии в ювелирном деле. Обучение работе в профессиональных программах для 3D моделирования украшений. Создание точных моделей для последующей печати и литья.",
    gallery: [ring3d1, ring3d2, ring3d3, bracelet3d]
  },
  {
    title: "Мастер классы по изготовлению ювелирных изделий",
    image: "https://images.unsplash.com/photo-1506630448388-4e683c67ddb0?w=800&auto=format&fit=crop",
    description: "Интенсивные практические занятия для тех, кто хочет попробовать себя в ювелирном деле. Создайте своё первое украшение под руководством мастера за один день.",
    gallery: null
  }
];

export default function CoursesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleCourse = (index: number) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="courses" ref={ref} className="relative py-32 px-4 md:px-8 bg-black overflow-hidden border-t border-yellow-600/10">
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/5 via-transparent to-transparent" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-[0.1em] text-white mb-6 uppercase" style={{ fontWeight: 300 }}>
            Наши Курсы
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto mb-6" />
          <p className="text-sm text-white/60 uppercase tracking-[0.15em]">
            Обучение дневное и вечернее
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <motion.div
              key={course.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
              className="group cursor-pointer"
              data-testid={`card-course-${index}`}
              onClick={() => toggleCourse(index)}
            >
              <div className="relative bg-black border border-yellow-600/20 overflow-hidden transition-all duration-500 hover:border-yellow-600/60 hover:shadow-2xl hover:shadow-yellow-600/10">
                <div className="aspect-[3/4] overflow-hidden relative bg-black">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent z-10" />
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-full object-contain opacity-90 transition-all duration-700 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 relative z-20 bg-black border-t border-yellow-600/10">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-serif text-lg md:text-xl font-light text-white tracking-wide leading-tight uppercase" style={{ fontWeight: 300 }}>
                      {course.title}
                    </h3>
                    <ChevronDown 
                      className={`w-5 h-5 text-yellow-600 transition-transform duration-300 flex-shrink-0 ${expandedIndex === index ? 'rotate-180' : ''}`}
                    />
                  </div>
                  
                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <p className="text-sm text-white/60 mt-4 leading-relaxed normal-case tracking-normal">
                          {course.description}
                        </p>
                        {course.gallery && (
                          <div className="grid grid-cols-2 gap-2 mt-4">
                            {course.gallery.map((img, imgIndex) => (
                              <div key={imgIndex} className="aspect-square overflow-hidden border border-yellow-600/20">
                                <img
                                  src={img}
                                  alt={`3D модель ${imgIndex + 1}`}
                                  className="w-full h-full object-contain bg-white/5"
                                />
                              </div>
                            ))}
                          </div>
                        )}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
                
                <div className="absolute top-4 right-4 w-8 h-8 border border-yellow-600/30 rotate-45 transition-all duration-500 group-hover:border-yellow-600/80 group-hover:rotate-90 z-30" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

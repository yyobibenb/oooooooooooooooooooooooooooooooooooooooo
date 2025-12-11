import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
} from "@/components/ui/dialog";
import img1 from "@assets/P6030092_1764525697453.JPG?url";
import img2 from "@assets/PC060224_1764525708346.JPG?url";
import img3 from "@assets/PC060225_1764526067001.JPG?url";
import img4 from "@assets/P2060772_1764526079721.JPG?url";
import img5 from "@assets/P2060784_1764526108801.JPG?url";
import img6 from "@assets/P2060797_1764526130959.JPG?url";
import img7 from "@assets/P2060817_1764526147631.JPG?url";
import img8 from "@assets/P6030014_1764526161767.JPG?url";

const galleryItems = [
  {
    id: 1,
    image: img1,
    title: "Комплект с Аметистами",
    category: "Комплекты"
  },
  {
    id: 2,
    image: img2,
    title: "Филигранные Серьги с Цепью",
    category: "Серьги"
  },
  {
    id: 3,
    image: img3,
    title: "Кулон с Агатом",
    category: "Кулоны"
  },
  {
    id: 4,
    image: img4,
    title: "Филигранное Колье",
    category: "Колье"
  },
  {
    id: 5,
    image: img5,
    title: "Золотое Колье с Камнями",
    category: "Колье"
  },
  {
    id: 6,
    image: img6,
    title: "Серебряный Браслет",
    category: "Браслеты"
  },
  {
    id: 7,
    image: img7,
    title: "Коллекция Подвесок",
    category: "Подвески"
  },
  {
    id: 8,
    image: img8,
    title: "Филигранное Колье Бабочка",
    category: "Колье"
  }
];

export default function GallerySection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null);

  return (
    <>
      <section ref={ref} className="relative py-32 px-4 md:px-8 bg-black overflow-hidden border-t border-yellow-600/10">
        <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/5 via-transparent to-transparent" />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-center mb-20"
          >
            <h2 className="font-serif text-4xl md:text-5xl font-light tracking-[0.1em] text-white mb-6 uppercase" style={{ fontWeight: 300 }}>
              Работы Студентов
            </h2>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1, ease: "easeOut" }}
                className="group cursor-pointer"
                onClick={() => setSelectedItem(item)}
                data-testid={`gallery-item-${item.id}`}
              >
                <div className="relative bg-black border border-yellow-600/20 overflow-hidden transition-all duration-500 hover:border-yellow-600/60 hover:shadow-2xl hover:shadow-yellow-600/10">
                  <div className="aspect-square overflow-hidden relative bg-black">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60" />
                  </div>
                  
                  <div className="p-5 bg-black border-t border-yellow-600/10">
                    <h3 className="font-serif text-lg font-light text-white mb-1 tracking-wide uppercase" style={{ fontWeight: 300 }}>
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/40 uppercase tracking-[0.15em]">{item.category}</p>
                  </div>
                  
                  <div className="absolute top-3 right-3 w-6 h-6 border border-yellow-600/30 rotate-45 transition-all duration-500 group-hover:border-yellow-600/80 group-hover:rotate-90" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Dialog open={!!selectedItem} onOpenChange={() => setSelectedItem(null)}>
        <DialogContent className="max-w-3xl bg-black border-yellow-600/30">
          <DialogTitle className="sr-only">
            {selectedItem?.title}
          </DialogTitle>
          {selectedItem && (
            <div className="space-y-4">
              <img
                src={selectedItem.image}
                alt={selectedItem.title}
                className="w-full rounded-sm"
              />
              <div className="text-center">
                <h3 className="font-serif text-3xl font-light text-white mb-2 uppercase tracking-wide">
                  {selectedItem.title}
                </h3>
                <p className="text-sm text-white/40 mt-1 uppercase tracking-[0.15em]">
                  {selectedItem.category}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail } from "lucide-react";
import { SiWhatsapp, SiTelegram } from "react-icons/si";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    toast({
      title: "Сообщение отправлено",
      description: "Мы свяжемся с вами в ближайшее время",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section ref={ref} className="relative py-32 px-4 md:px-8 bg-black overflow-hidden border-t border-yellow-600/10">
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-20"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-light tracking-[0.1em] text-white mb-6 uppercase" style={{ fontWeight: 300 }}>
            Контакты
          </h2>
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-yellow-600 to-transparent mx-auto" />
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <form onSubmit={handleSubmit} className="space-y-8 p-10 bg-black border border-yellow-600/20">
              <div className="space-y-3">
                <Label htmlFor="name" className="text-xs font-light uppercase tracking-[0.2em] text-white/50">
                  Имя
                </Label>
                <Input
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  data-testid="input-name"
                  className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-yellow-600 bg-transparent text-white border-yellow-600/20 placeholder:text-white/20"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="email" className="text-xs font-light uppercase tracking-[0.2em] text-white/50">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  data-testid="input-email"
                  className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-yellow-600 bg-transparent text-white border-yellow-600/20 placeholder:text-white/20"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="phone" className="text-xs font-light uppercase tracking-[0.2em] text-white/50">
                  Телефон
                </Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  data-testid="input-phone"
                  className="border-b border-t-0 border-l-0 border-r-0 rounded-none px-0 focus-visible:ring-0 focus-visible:border-yellow-600 bg-transparent text-white border-yellow-600/20 placeholder:text-white/20"
                />
              </div>
              
              <div className="space-y-3">
                <Label htmlFor="message" className="text-xs font-light uppercase tracking-[0.2em] text-white/50">
                  Сообщение
                </Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={5}
                  data-testid="input-message"
                  className="resize-none border-b border-t-0 border-l-0 border-r-0 rounded-none focus-visible:ring-0 focus-visible:border-yellow-600 bg-transparent text-white border-yellow-600/20 placeholder:text-white/20"
                />
              </div>
              
              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-transparent text-yellow-600 border border-yellow-600 hover:bg-yellow-600 hover:text-black transition-all duration-500 uppercase tracking-[0.2em] text-xs font-light" 
                data-testid="button-submit"
              >
                Отправить
              </Button>
            </form>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="border-l border-yellow-600/20 pl-6">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" strokeWidth={1} />
                <div>
                  <h3 className="font-serif text-xs font-light text-white/50 mb-1 uppercase tracking-[0.2em]">
                    Адрес
                  </h3>
                  <p className="text-base text-white uppercase tracking-[0.05em]">
                    Симферополь, Чехова 51
                  </p>
                </div>
              </div>
            </div>

            <div className="border-l border-yellow-600/20 pl-6">
              <div className="flex items-start gap-4">
                <Phone className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" strokeWidth={1} />
                <div>
                  <h3 className="font-serif text-xs font-light text-white/50 mb-1 uppercase tracking-[0.2em]">
                    Телефон
                  </h3>
                  <p className="text-base text-white tracking-[0.05em] mb-2">
                    +7 978 831 19 59
                  </p>
                  <div className="flex items-center gap-4">
                    <a 
                      href="https://wa.me/79788311959" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-white/50 hover:text-green-500 transition-colors"
                      data-testid="link-whatsapp"
                    >
                      <SiWhatsapp className="w-4 h-4" />
                      <span>WhatsApp</span>
                    </a>
                    <a 
                      href="https://t.me/+79788311959" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-xs text-white/50 hover:text-blue-400 transition-colors"
                      data-testid="link-telegram"
                    >
                      <SiTelegram className="w-4 h-4" />
                      <span>Telegram</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-l border-yellow-600/20 pl-6">
              <div className="flex items-start gap-4">
                <Mail className="w-5 h-5 text-yellow-600 mt-1 flex-shrink-0" strokeWidth={1} />
                <div>
                  <h3 className="font-serif text-xs font-light text-white/50 mb-1 uppercase tracking-[0.2em]">
                    Email
                  </h3>
                  <a 
                    href="mailto:san-vitaliy@mail.ru" 
                    className="text-base text-white hover:text-yellow-600 transition-colors"
                    data-testid="link-email"
                  >
                    san-vitaliy@mail.ru
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <div className="aspect-video overflow-hidden bg-black border border-yellow-600/20">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2671.8387047878543!2d34.10067131556793!3d44.94832097909829!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40eb5df96c15de57%3A0x2c8c5c8c3c8c8c8c!2z0YPQuy4g0KfQtdGF0L7QstCwLCA1MSwg0KHQuNC80YTQtdGA0L7Qv9C-0LvRjCwg0KDQtdGB0L_Rg9Cx0LvQuNC60LAg0JrRgNGL0Lw!5e0!3m2!1sru!2s!4v1635789012345!5m2!1sru!2s"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'grayscale(100%) invert(92%) contrast(83%)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Карта расположения - Симферополь, Чехова 51"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

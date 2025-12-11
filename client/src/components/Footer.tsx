import { Gem, Mail, Phone, MapPin } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-black border-t border-yellow-600/20 py-20 px-4 md:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-yellow-600/5 via-transparent to-transparent" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16 mb-16">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Gem className="w-5 h-5 text-yellow-600" strokeWidth={1} />
              <span className="font-serif text-base font-light text-white tracking-[0.1em] uppercase" style={{ fontWeight: 300 }}>
                Vitaliy Sankov
              </span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed tracking-[0.15em]">
              Виталий Саньков
            </p>
          </div>

          <div>
            <h3 className="font-serif text-xs font-light text-white/50 mb-6 uppercase tracking-[0.2em]">
              Навигация
            </h3>
            <ul className="space-y-3">
              {[
                { label: "Курсы", id: "courses" },
                { label: "Галерея", id: "gallery" },
                { label: "Преподаватель", id: "instructor" },
                { label: "Контакты", id: "contact" }
              ].map((item) => (
                <li key={item.id}>
                  <button
                    type="button"
                    onTouchEnd={(e) => {
                      e.preventDefault();
                      const element = document.getElementById(item.id);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    onClick={() => {
                      const element = document.getElementById(item.id);
                      element?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="text-sm text-white/50 hover:text-yellow-600 active:text-yellow-600 transition-colors uppercase tracking-[0.15em] py-2 touch-manipulation cursor-pointer"
                    data-testid={`footer-link-${item.id}`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-serif text-xs font-light text-white/50 mb-6 uppercase tracking-[0.2em]">
              Контакты
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-xs text-white/50">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-600" strokeWidth={1} />
                <span className="uppercase tracking-[0.1em]">Симферополь, Чехова 51</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-white/50">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-600" strokeWidth={1} />
                <span className="uppercase tracking-[0.1em]">+7 978 831 19 59</span>
              </li>
              <li className="flex items-start gap-3 text-xs text-white/50">
                <Mail className="w-4 h-4 mt-0.5 flex-shrink-0 text-yellow-600" strokeWidth={1} />
                <span>san-vitaliy@mail.ru</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-yellow-600/10 text-center">
          <p className="text-xs text-white/30 uppercase tracking-[0.2em]">
            © {currentYear} Vitaliy Sankov
          </p>
        </div>
      </div>
    </footer>
  );
}

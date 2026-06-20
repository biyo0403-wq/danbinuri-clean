import Container from "@/components/ui/Container";
import { serviceMenu, siteConfig } from "@/lib/data";
import { PhoneCall } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <Container>
        {/* 상단: 로고 + 전화 + CTA */}
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-extrabold text-blue-700">
            {siteConfig.name}
          </a>

          <div className="flex items-center gap-5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden sm:flex items-center gap-2 text-blue-700"
            >
              <PhoneCall className="w-5 h-5" />
              <span className="text-xl font-extrabold tracking-tight">{siteConfig.phone}</span>
            </a>
            <a
              href="#quote"
              className="inline-flex items-center px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              간편 견적
            </a>
          </div>
        </div>

        {/* 하단: 서비스 메가메뉴 */}
        <nav className="hidden lg:flex items-stretch border-t border-slate-100">
          {serviceMenu.map((cat) => (
            <div key={cat.label} className="group relative">
              <button className="px-5 py-3 text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
                {cat.label}
              </button>
              {/* 드롭다운 */}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute left-0 top-full z-50 min-w-44 bg-white border border-slate-200 rounded-b-lg shadow-lg py-2">
                {cat.items.map((item) => (
                  <a
                    key={item}
                    href="#services"
                    className="block px-5 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors whitespace-nowrap"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </Container>
    </header>
  );
}

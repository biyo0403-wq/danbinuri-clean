import Container from "@/components/ui/Container";
import { familySites, utilNav, siteConfig } from "@/lib/data";

export default function TopBar() {
  return (
    <div className="hidden md:block bg-slate-50 border-b border-slate-100 text-xs text-slate-500">
      <Container>
        <div className="flex items-center justify-between h-9">
          <div className="flex items-center gap-3">
            <span className="text-slate-400">패밀리 사이트</span>
            {familySites.map((site) => (
              <a key={site} href="#" className="hover:text-blue-600 transition-colors">
                {site}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-4">
            {utilNav.map((nav) => (
              <a key={nav.href} href={nav.href} className="hover:text-blue-600 transition-colors">
                {nav.label}
              </a>
            ))}
            <span className="text-slate-300">|</span>
            <span className="text-slate-400">{siteConfig.hours}</span>
          </div>
        </div>
      </Container>
    </div>
  );
}

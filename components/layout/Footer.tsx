import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/data";

const snsLinks = ["유튜브", "페이스북", "인스타그램", "네이버", "블로그", "카카오톡"];
const legalLinks = [
  { label: "이용약관", href: "#" },
  { label: "개인정보처리방침", href: "/privacy" },
  { label: "파트너지원", href: "#" },
  { label: "고객지원", href: "#" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-400">
      <Container className="py-12">
        {/* 약관 링크 */}
        <div className="flex flex-wrap gap-x-5 gap-y-2 text-sm border-b border-slate-700 pb-5">
          {legalLinks.map((link) => (
            <a key={link.label} href={link.href} className="hover:text-white transition-colors">
              {link.label}
            </a>
          ))}
        </div>

        <div className="mt-6 grid md:grid-cols-3 gap-8">
          <div>
            <p className="text-white font-bold text-lg">{siteConfig.name}</p>
            <p className="mt-2 text-sm">{siteConfig.tagline}</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {snsLinks.map((sns) => (
                <a
                  key={sns}
                  href="#"
                  className="px-2.5 py-1 rounded bg-slate-800 text-xs hover:bg-slate-700 transition-colors"
                >
                  {sns}
                </a>
              ))}
            </div>
          </div>

          <div className="text-sm space-y-1 md:col-span-2">
            <p>대표자 {siteConfig.ceo} · 전화 {siteConfig.phone}</p>
            <p>이메일 {siteConfig.email}</p>
            <p>주소 {siteConfig.address}</p>
            <p>사업자등록번호 {siteConfig.businessNumber}</p>
            <p>통신판매업 신고 {siteConfig.mailOrderNumber}</p>
          </div>
        </div>

        <div className="mt-8 border-t border-slate-700 pt-5 text-xs">
          {siteConfig.copyright}
        </div>
      </Container>
    </footer>
  );
}

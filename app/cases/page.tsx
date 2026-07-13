import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { airconCases, stoneCases, siteConfig, type CaseItem } from "@/lib/data";
import { MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: `시공사례 | ${siteConfig.name}`,
  description: "에어컨·공조기·석재 유지관리 시공사례를 확인하세요.",
};

function CaseGrid({ cases }: { cases: CaseItem[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {cases.map((c) => (
        <div
          key={c.title}
          className="rounded-2xl overflow-hidden bg-white border border-slate-100 shadow-sm"
        >
          <SmartImage src={c.image} alt={c.title} className="aspect-[4/3]" label="시공 이미지 준비 중" />
          <div className="p-5">
            <h3 className="font-bold text-slate-900">{c.title}</h3>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
            <p className="mt-3 flex items-center gap-1 text-xs text-slate-400">
              <MapPin className="w-3.5 h-3.5" />
              {c.location}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default function CasesPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Container className="py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">
              Portfolio
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">시공사례</h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              단비누리가 직접 시공한 현장을 확인하세요.
            </p>
          </div>
        </Container>

        {/* 에어컨 시공사례 */}
        <section className="bg-white">
          <Container className="pb-16 lg:pb-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-6 w-1.5 rounded-full bg-blue-600" />
              <h2 className="text-2xl font-extrabold text-slate-900">에어컨 시공사례</h2>
            </div>
            <CaseGrid cases={airconCases} />
          </Container>
        </section>

        {/* 석재보수 시공사례 */}
        <section className="bg-slate-50">
          <Container className="py-16 lg:py-20">
            <div className="flex items-center gap-3 mb-8">
              <span className="h-6 w-1.5 rounded-full bg-orange-500" />
              <h2 className="text-2xl font-extrabold text-slate-900">석재보수 시공사례</h2>
            </div>
            <CaseGrid cases={stoneCases} />
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Container from "@/components/ui/Container";
import { servicePages, subServicePages, siteConfig } from "@/lib/data";
import { Check, MessageSquare, MapPin, Wrench, BadgeCheck } from "lucide-react";

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const svc = servicePages.find((s) => s.slug === params.slug);
  if (!svc) return {};
  return {
    title: `${svc.fullTitle} | ${siteConfig.name}`,
    description: svc.heroDesc,
  };
}

const processSteps = [
  { icon: MessageSquare, label: "상담·견적", desc: "전화 또는 온라인으로 문의" },
  { icon: MapPin, label: "현장 확인", desc: "전문가 방문 후 현장 점검" },
  { icon: Wrench, label: "시공 진행", desc: "검증된 공정으로 전문 시공" },
  { icon: BadgeCheck, label: "완료·사후관리", desc: "품질 확인 및 AS 보장" },
];

export default function ServicePage({ params }: { params: { slug: string } }) {
  const svc = servicePages.find((s) => s.slug === params.slug);
  if (!svc) notFound();

  return (
    <>
      <Header />
      <main>
        {/* 히어로 */}
        <section
          className="flex items-center justify-center text-white"
          style={{
            background: svc.gradient,
            minHeight: "480px",
          }}
        >
          <div className="text-center px-6 py-20 max-w-3xl mx-auto">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-white/20">
              {svc.tag}
            </span>
            <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight">
              {svc.fullTitle}
            </h1>
            <p className="mt-5 text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
              {svc.heroDesc}
            </p>
            <a
              href={siteConfig.quoteFormUrl || "#quote"}
              target={siteConfig.quoteFormUrl ? "_blank" : undefined}
              rel={siteConfig.quoteFormUrl ? "noopener noreferrer" : undefined}
              className="mt-8 inline-flex items-center px-8 py-3.5 rounded-md bg-white text-slate-900 font-bold text-sm hover:bg-white/90 transition-colors"
            >
              견적 문의하기
            </a>
          </div>
        </section>

        {/* 세부 서비스 바로가기 */}
        {(() => {
          const siblings = subServicePages.filter((s) => s.category === svc!.slug);
          if (siblings.length === 0) return null;
          return (
            <section className="bg-white border-b border-slate-100">
              <Container className="py-10">
                <p className="text-sm font-bold tracking-widest uppercase text-blue-600 mb-5">
                  세부 서비스
                </p>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {siblings.map((sib) => (
                    <a
                      key={sib.slug}
                      href={`/services/${svc!.slug}/${sib.slug}`}
                      className="block rounded-xl border border-slate-200 px-4 py-4 text-center text-sm font-semibold text-slate-700 hover:border-blue-400 hover:text-blue-700 hover:bg-blue-50 transition-colors"
                    >
                      {sib.navLabel}
                    </a>
                  ))}
                </div>
              </Container>
            </section>
          );
        })()}

        {/* 서비스 소개 + 특징 */}
        <section className="bg-white">
          <Container className="py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <span className="text-sm font-bold tracking-widest uppercase text-blue-600">
                  About Service
                </span>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 leading-tight">
                  {svc.fullTitle}란?
                </h2>
                <div className="mt-4 w-12 h-1 bg-blue-500" />
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">{svc.longDesc}</p>

                {/* 포함 서비스 */}
                <div className="mt-8">
                  <p className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">
                    포함 서비스
                  </p>
                  <ul className="space-y-2">
                    {svc.items.map((item) => (
                      <li key={item} className="flex items-center gap-3 text-slate-700">
                        <Check className="w-5 h-5 text-blue-600 shrink-0" />
                        <span className="font-medium">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* 특징 4개 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {svc.features.map((feat, i) => (
                  <div
                    key={i}
                    className="p-6 rounded-xl border border-slate-100 bg-slate-50 hover:border-blue-200 hover:bg-blue-50 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                      <span className="text-sm font-extrabold text-blue-700">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-bold text-slate-900">{feat.title}</h3>
                    <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">{feat.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </section>

        {/* 시공 프로세스 */}
        <section className="bg-slate-50">
          <Container className="py-20">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-sm font-bold tracking-widest uppercase text-blue-600">
                Process
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
                시공 진행 과정
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {processSteps.map((step, i) => {
                const Icon = step.icon;
                return (
                  <div key={i} className="relative text-center">
                    {/* 연결선 */}
                    {i < processSteps.length - 1 && (
                      <div className="hidden lg:block absolute top-9 left-[calc(50%+2.5rem)] w-[calc(100%-5rem)] h-px bg-slate-300" />
                    )}
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-blue-100 text-blue-700 mb-4 relative z-10">
                      <Icon className="w-7 h-7" />
                    </div>
                    <div className="absolute top-0 right-[calc(50%-2.5rem)] w-5 h-5 rounded-full bg-blue-700 text-white text-xs font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                    <h3 className="font-bold text-slate-900">{step.label}</h3>
                    <p className="mt-1 text-sm text-slate-500">{step.desc}</p>
                  </div>
                );
              })}
            </div>
          </Container>
        </section>

        {/* 하단 CTA 배너 */}
        <section className="bg-slate-900 text-white">
          <Container className="py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              {svc.fullTitle}, 지금 바로 문의하세요
            </h2>
            <p className="mt-3 text-slate-400">
              전문 상담팀이 빠르게 안내해 드립니다. 평일 10:00 ~ 18:00
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`tel:${siteConfig.phone}`}
                className="inline-flex items-center px-8 py-3.5 rounded-md bg-blue-600 text-white font-bold hover:bg-blue-700 transition-colors"
              >
                {siteConfig.phone} 전화 상담
              </a>
              <a
                href={siteConfig.quoteFormUrl || "#quote"}
                target={siteConfig.quoteFormUrl ? "_blank" : undefined}
                rel={siteConfig.quoteFormUrl ? "noopener noreferrer" : undefined}
                className="inline-flex items-center px-8 py-3.5 rounded-md border border-white/30 text-white font-bold hover:bg-white/10 transition-colors"
              >
                온라인 견적 신청
              </a>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Container from "@/components/ui/Container";
import BeforeAfterSlider from "@/components/ui/BeforeAfterSlider";
import {
  subServicePages,
  servicePages,
  serviceReasons,
  serviceSolutions,
  serviceProcess,
  siteConfig,
} from "@/lib/data";
import {
  AlertCircle,
  Check,
  ChevronRight,
  MessageSquare,
  MapPin,
  Wrench,
  BadgeCheck,
} from "lucide-react";

export function generateStaticParams() {
  return subServicePages.map((s) => ({ slug: s.category, service: s.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string; service: string };
}): Metadata {
  const sub = subServicePages.find(
    (s) => s.category === params.slug && s.slug === params.service
  );
  const parent = servicePages.find((s) => s.slug === params.slug);
  if (!sub || !parent) return {};
  return {
    title: `${sub.heroTitle} | ${siteConfig.name}`,
    description: sub.heroDesc,
  };
}

const processSteps = [
  { icon: MessageSquare, label: "상담·견적", desc: "전화 또는 온라인으로 문의" },
  { icon: MapPin, label: "현장 확인", desc: "전문가 방문 후 현장 점검" },
  { icon: Wrench, label: "시공 진행", desc: "검증된 공정으로 전문 시공" },
  { icon: BadgeCheck, label: "완료·사후관리", desc: "품질 확인 및 AS 보장" },
];

export default function SubServicePage({
  params,
}: {
  params: { slug: string; service: string };
}) {
  const sub = subServicePages.find(
    (s) => s.category === params.slug && s.slug === params.service
  );
  const parent = servicePages.find((s) => s.slug === params.slug);
  if (!sub || !parent) notFound();

  const siblings = subServicePages.filter((s) => s.category === params.slug);
  const reasons = serviceReasons[params.slug] ?? [];
  const solutions = serviceSolutions[params.slug] ?? [];
  const detailedProcess = serviceProcess[params.slug];

  return (
    <>
      <Header />
      <main>
        {/* ── 히어로 (care1 스타일: 어두운 배경 + 우측 이미지, 좌우 여백 적용) ── */}
        <section className="bg-white pt-6 pb-6 lg:pt-10 lg:pb-10">
          <Container>
            <div
              className="relative rounded-2xl bg-slate-950 text-white overflow-hidden"
              style={{ minHeight: "440px" }}
            >
              {/* 우측 이미지 영역 */}
              <div className="absolute inset-0 flex">
                <div className="hidden lg:block lg:w-[45%]" />
                <div className="flex-1 relative bg-slate-700">
                  {sub.heroImage ? (
                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{ backgroundImage: `url(${sub.heroImage})` }}
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-slate-500 text-sm">시공 이미지 준비 중</span>
                    </div>
                  )}
                </div>
              </div>
              {/* 좌→우 그라디언트 오버레이 */}
              <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-950/95 lg:via-slate-950/80 to-transparent" />

              {/* 콘텐츠 */}
              <div className="relative z-10 flex flex-col" style={{ minHeight: "440px" }}>
                {/* 브레드크럼 */}
                <div className="pt-8 px-5 sm:px-8 lg:px-12">
                  <div className="flex justify-end items-center gap-1 text-xs text-slate-400">
                    <span>{parent.navLabel}</span>
                    <ChevronRight className="w-3 h-3" />
                    <span className="text-white font-semibold">{sub.navLabel}</span>
                  </div>
                </div>

                {/* 본문 텍스트 */}
                <div className="pt-6 pb-0 px-5 sm:px-8 lg:px-12 flex-1">
                  <p className="text-sm font-bold tracking-widest uppercase text-blue-400">
                    {parent.tag}
                  </p>
                  <h1 className="mt-3 text-4xl sm:text-5xl font-extrabold leading-tight max-w-lg">
                    {sub.heroTitle}
                  </h1>
                  <p className="mt-4 text-slate-300 text-lg max-w-md leading-relaxed">
                    {sub.heroDesc}
                  </p>

                  <div className="mt-8 flex flex-wrap gap-3">
                    <a
                      href={`tel:${siteConfig.phone}`}
                      className="rounded-full bg-blue-600 text-white px-7 py-3 font-bold text-sm hover:bg-blue-700 transition-colors"
                    >
                      상담 문의하기
                    </a>
                    <a
                      href="/reserve"
                      className="rounded-full border border-white/40 text-white px-7 py-3 font-bold text-sm hover:bg-white/10 transition-colors"
                    >
                      지금 예약하기
                    </a>
                  </div>
                </div>

                {/* 하단 탭바 */}
                <div className="mt-10 border-t border-white/10">
                  <div className="px-5 sm:px-8 lg:px-12">
                    <nav>
                      <ul className="flex gap-6 overflow-x-auto py-4">
                        {siblings.map((sib) => {
                          const isActive = sib.slug === params.service;
                          return (
                            <li key={sib.slug} className="shrink-0">
                              <a
                                href={`/services/${params.slug}/${sib.slug}`}
                                className={`block pb-1 text-sm font-semibold transition-colors border-b-2 ${
                                  isActive
                                    ? "text-white border-blue-500"
                                    : "text-slate-400 border-transparent hover:text-white hover:border-slate-400"
                                }`}
                              >
                                {sib.navLabel}
                              </a>
                            </li>
                          );
                        })}
                      </ul>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* 고민 카드 */}
        <section className="bg-slate-50">
          <Container className="py-16">
            <div className="text-center mb-10">
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                혹시 이런 고민 중이세요?
              </h2>
            </div>
            <div className="grid sm:grid-cols-3 gap-6">
              {sub.painPoints.map((pt, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-slate-100 shadow-sm"
                >
                  <div className="flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-orange-500 shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-slate-900">{pt.title}</p>
                      <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                        {pt.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 서비스 소개 */}
        <section className="bg-white">
          <Container className="py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <span className="text-sm font-bold tracking-widest uppercase text-blue-600">
                  About
                </span>
                <h2 className="mt-3 text-3xl font-extrabold text-slate-900 leading-tight">
                  {sub.heroTitle}
                </h2>
                <div className="mt-4 w-12 h-1 bg-blue-500" />
                <p className="mt-6 text-lg text-slate-600 leading-relaxed">
                  {sub.intro}
                </p>
              </div>
              {sub.beforeImage && sub.afterImage ? (
                <BeforeAfterSlider
                  beforeImage={sub.beforeImage}
                  afterImage={sub.afterImage}
                  className="aspect-[4/3]"
                />
              ) : (
                <div className="rounded-2xl bg-slate-200 aspect-[4/3] flex items-center justify-center">
                  <span className="text-slate-400 text-sm">시공 이미지 준비 중</span>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* 왜 단비누리? */}
        <section className="bg-slate-50">
          <Container className="py-20">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-sm font-bold tracking-widest uppercase text-blue-600">
                Why 단비누리
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
                단비누리를 선택해야 하는 이유
              </h2>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {reasons.map((r, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-6 border border-slate-100"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <span className="text-sm font-extrabold text-blue-700">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-bold text-slate-900">{r.title}</h3>
                  <p className="mt-1.5 text-sm text-slate-500 leading-relaxed">
                    {r.desc}
                  </p>
                </div>
              ))}
            </div>
          </Container>
        </section>

        {/* 솔루션 포인트 */}
        <section className="bg-white">
          <Container className="py-20">
            <div className="text-center max-w-xl mx-auto mb-12">
              <span className="text-sm font-bold tracking-widest uppercase text-blue-600">
                Solution
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
                단비누리의 해결 방법
              </h2>
            </div>
            <div className="space-y-6 max-w-3xl mx-auto">
              {solutions.map((sol, i) => (
                <div
                  key={i}
                  className="flex gap-5 p-6 rounded-xl border border-slate-100 bg-slate-50"
                >
                  <Check className="w-6 h-6 text-blue-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900">{sol.title}</h3>
                    <p className="mt-1.5 text-slate-600 leading-relaxed">{sol.desc}</p>
                  </div>
                </div>
              ))}
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
            {detailedProcess ? (
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
                {detailedProcess.map((step, i) => (
                  <div
                    key={i}
                    className="rounded-xl overflow-hidden bg-white border border-slate-200 shadow-sm"
                  >
                    <div className="relative aspect-[4/3] bg-slate-100">
                      <div
                        className="absolute inset-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${step.image})` }}
                      />
                    </div>
                    <div className="p-5">
                      <span className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-blue-600 text-white font-bold text-sm">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="mt-3 font-bold text-slate-900">{step.label}</p>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {processSteps.map((step, i) => {
                  const Icon = step.icon;
                  return (
                    <div key={i} className="relative text-center">
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
            )}
          </Container>
        </section>

        {/* 하단 CTA */}
        <section className="bg-slate-900 text-white">
          <Container className="py-16 text-center">
            <h2 className="text-2xl sm:text-3xl font-extrabold">
              {sub.heroTitle}, 지금 바로 문의하세요
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
                href="/inquiry"
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

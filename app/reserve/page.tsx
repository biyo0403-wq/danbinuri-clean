import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Container from "@/components/ui/Container";
import ReservationForm from "@/components/sections/ReservationForm";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `방문 예약 | ${siteConfig.name}`,
  description: "원하시는 날짜와 시간에 맞춰 에어컨·석재보수 시공 방문을 예약하세요.",
};

const steps = [
  { step: "01", title: "예약 신청", desc: "원하시는 서비스·날짜·시간대를 남겨주세요." },
  { step: "02", title: "예약 확정", desc: "담당자가 연락드려 방문 일정을 확정합니다." },
  { step: "03", title: "방문 시공", desc: "예약된 날짜에 전문팀이 방문해 시공합니다." },
  { step: "04", title: "완료·사후관리", desc: "품질 확인 후 사후관리까지 책임집니다." },
];

export default function ReservePage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        <Container className="py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">
              Reservation
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">방문 예약</h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              원하시는 날짜와 시간대를 선택하시면, 담당자가 확인 후 일정을 확정해 드립니다.
              <br className="hidden sm:block" />
              가격이 먼저 궁금하시다면{" "}
              <a href="/inquiry" className="text-blue-600 font-semibold underline">
                견적문의
              </a>
              를 이용해 주세요.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            {/* 폼 */}
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
              <ReservationForm />
            </div>

            {/* 예약 절차 안내 */}
            <aside className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8">
              <h2 className="text-lg font-bold">예약은 이렇게 진행돼요</h2>
              <ol className="mt-6 space-y-6">
                {steps.map((s) => (
                  <li key={s.step} className="flex gap-4">
                    <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-600 text-sm font-extrabold">
                      {s.step}
                    </span>
                    <div>
                      <p className="font-semibold">{s.title}</p>
                      <p className="mt-1 text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="text-sm text-slate-400">전화 예약도 가능합니다</p>
                <a href={`tel:${siteConfig.phone}`} className="mt-1 block text-xl font-extrabold">
                  {siteConfig.phone}
                </a>
                <p className="mt-1 text-xs text-slate-500">{siteConfig.hours}</p>
              </div>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

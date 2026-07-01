import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Container from "@/components/ui/Container";
import QnaBoard from "@/components/sections/QnaBoard";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `고객문의 | ${siteConfig.name}`,
  description: "궁금한 점을 문의하고, 자주 묻는 질문에서 답을 빠르게 확인하세요.",
};

export default function QnaPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        {/* 상단: 문의 게시판 */}
        <section className="bg-white">
          <Container className="py-16 lg:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">
                Q&amp;A
              </span>
              <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">고객문의</h1>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                서비스에 대해 궁금한 점을 남겨주세요. 전문 상담팀이 확인 후 답변해 드립니다.
              </p>
            </div>
            <div className="max-w-4xl mx-auto">
              <QnaBoard />
            </div>
          </Container>
        </section>

        {/* 하단: 자주 묻는 질문 */}
        <section className="bg-slate-50">
          <Container className="py-16 lg:py-20">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">
                FAQ
              </span>
              <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">
                자주 묻는 질문
              </h2>
              <p className="mt-4 text-slate-600 leading-relaxed">
                문의 전에 아래 내용을 먼저 확인하시면 더 빠르게 해결할 수 있어요.
              </p>
            </div>
            <FaqAccordion />
          </Container>
        </section>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

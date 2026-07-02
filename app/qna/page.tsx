import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Container from "@/components/ui/Container";
import QnaBoard from "@/components/sections/QnaBoard";
import FaqAccordion from "@/components/sections/FaqAccordion";
import { siteConfig, type QnaListItem } from "@/lib/data";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const metadata: Metadata = {
  title: `고객문의 | ${siteConfig.name}`,
  description: "궁금한 점을 문의하고, 자주 묻는 질문에서 답을 빠르게 확인하세요.",
};

// 항상 최신 글 목록을 보여주도록 정적/조회 캐시를 모두 끕니다.
export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

async function getPosts(): Promise<QnaListItem[]> {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("qna_posts")
      .select("id, title, author, answer, created_at")
      .order("created_at", { ascending: false });
    if (error || !data) return [];
    return data.map((p) => {
      const d = new Date(p.created_at);
      const date = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
        d.getDate()
      ).padStart(2, "0")}`;
      return {
        id: p.id,
        title: p.title,
        author: p.author,
        date,
        answered: !!p.answer,
      };
    });
  } catch {
    // 환경변수 미설정 등으로 조회 실패 시 빈 목록으로 안전하게 표시
    return [];
  }
}

export default async function QnaPage() {
  const posts = await getPosts();
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
              <QnaBoard posts={posts} />
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

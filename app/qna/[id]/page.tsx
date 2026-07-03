import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Container from "@/components/ui/Container";
import QnaDetail from "@/components/sections/QnaDetail";
import { siteConfig } from "@/lib/data";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export const dynamic = "force-dynamic";
export const fetchCache = "force-no-store";

export const metadata: Metadata = {
  title: `문의 상세 | ${siteConfig.name}`,
};

async function getPostHeader(id: number) {
  try {
    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("qna_posts")
      .select("id, title, author, answer, created_at")
      .eq("id", id)
      .single();
    if (error || !data) return null;
    return data;
  } catch {
    return null;
  }
}

export default async function QnaDetailPage({ params }: { params: { id: string } }) {
  const id = Number(params.id);
  if (!Number.isInteger(id)) notFound();

  const post = await getPostHeader(id);
  if (!post) notFound();

  const d = new Date(post.created_at);
  const date = `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
    d.getDate()
  ).padStart(2, "0")}`;

  return (
    <>
      <Header />
      <main className="bg-white">
        <Container className="py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">Q&amp;A</span>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-slate-900">고객문의</h2>
          </div>
          <QnaDetail
            id={post.id}
            title={post.title}
            author={post.author}
            date={date}
            answered={!!post.answer}
          />
        </Container>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

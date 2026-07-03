import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

// 비밀번호를 확인하고, 맞으면 글 내용과 관리자 답변을 돌려줍니다.
export async function POST(req: Request, { params }: { params: { id: string } }) {
  try {
    const id = Number(params.id);
    if (!Number.isInteger(id)) {
      return NextResponse.json({ error: "잘못된 접근입니다." }, { status: 400 });
    }

    const body = await req.json();
    const password = String(body.password ?? "");
    if (!password) {
      return NextResponse.json({ error: "비밀번호를 입력해 주세요." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { data, error } = await supabase
      .from("qna_posts")
      .select("content, answer, answered_at, password_hash")
      .eq("id", id)
      .single();

    if (error || !data) {
      return NextResponse.json({ error: "글을 찾을 수 없습니다." }, { status: 404 });
    }

    const ok = await bcrypt.compare(password, data.password_hash);
    if (!ok) {
      return NextResponse.json({ error: "비밀번호가 일치하지 않습니다." }, { status: 401 });
    }

    // 비밀번호 해시는 절대 반환하지 않음
    return NextResponse.json({
      ok: true,
      content: data.content,
      answer: data.answer,
      answered_at: data.answered_at,
    });
  } catch (err) {
    console.error("[qna verify] failed:", err);
    return NextResponse.json({ error: "확인 중 오류가 발생했습니다." }, { status: 500 });
  }
}

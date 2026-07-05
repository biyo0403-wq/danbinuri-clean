import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { fieldStr, isBot } from "@/lib/formGuards";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 허니팟에 걸린 봇은 저장하지 않고 성공한 척 응답
    if (isBot(body)) return NextResponse.json({ ok: true });

    const title = fieldStr(body.title, 200);
    const author = fieldStr(body.author, 50);
    const content = fieldStr(body.content, 2000);
    const password = String(body.password ?? "");

    if (!title || !author || !content || !password) {
      return NextResponse.json(
        { error: "제목·작성자·내용·비밀번호를 모두 입력해 주세요." },
        { status: 400 }
      );
    }
    if (password.length < 4 || password.length > 64) {
      return NextResponse.json({ error: "비밀번호는 4~64자로 입력해 주세요." }, { status: 400 });
    }

    // 원문 비밀번호는 저장하지 않고 해시만 저장
    const password_hash = await bcrypt.hash(password, 10);

    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("qna_posts")
      .insert({ title, author, content, password_hash });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[qna] insert failed:", err);
    return NextResponse.json({ error: "등록 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." }, { status: 500 });
  }
}

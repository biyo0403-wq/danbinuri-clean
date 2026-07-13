import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { fieldStr, isBot } from "@/lib/formGuards";
import { inquiryServices } from "@/lib/data";
import { sendAdminNotification, toHtmlParagraph } from "@/lib/resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 허니팟에 걸린 봇은 저장하지 않고 성공한 척 응답
    if (isBot(body)) return NextResponse.json({ ok: true });

    const name = fieldStr(body.name, 50);
    const phone = fieldStr(body.phone, 30);
    const service = fieldStr(body.service, 50);
    const message = fieldStr(body.message, 2000);
    const email = fieldStr(body.email, 100) || null;

    if (!name || !phone || !service || !message) {
      return NextResponse.json({ error: "필수 항목을 모두 입력해 주세요." }, { status: 400 });
    }
    if (!inquiryServices.includes(service)) {
      return NextResponse.json({ error: "서비스 항목을 다시 선택해 주세요." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("inquiries")
      .insert({ name, phone, email, service, message });

    if (error) throw error;

    await sendAdminNotification(
      `[견적문의] ${name}님의 문의가 접수되었습니다`,
      `
        <h2>새 견적문의가 접수되었습니다</h2>
        <p><b>이름:</b> ${toHtmlParagraph(name)}</p>
        <p><b>연락처:</b> ${toHtmlParagraph(phone)}</p>
        ${email ? `<p><b>이메일:</b> ${toHtmlParagraph(email)}</p>` : ""}
        <p><b>서비스:</b> ${toHtmlParagraph(service)}</p>
        <p><b>문의 내용:</b><br/>${toHtmlParagraph(message)}</p>
      `
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry] insert failed:", err);
    return NextResponse.json({ error: "접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." }, { status: 500 });
  }
}

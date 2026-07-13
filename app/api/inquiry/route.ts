import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";
import { fieldStr, isBot } from "@/lib/formGuards";
import { servicePages, subServicePages } from "@/lib/data";
import { sendAdminNotification, toHtmlParagraph } from "@/lib/resend";

const validCategories = [...servicePages.map((s) => s.slug), "other"];

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 허니팟에 걸린 봇은 저장하지 않고 성공한 척 응답
    if (isBot(body)) return NextResponse.json({ ok: true });

    const name = fieldStr(body.name, 50);
    const phone = fieldStr(body.phone, 30);
    const email = fieldStr(body.email, 100) || null;
    const address = fieldStr(body.address, 200);
    const preferred_date = fieldStr(body.preferred_date, 10) || null;
    const message = fieldStr(body.message, 2000);
    const category = fieldStr(body.category, 20);
    const subServiceLabel = fieldStr(body.subService, 50);

    if (!name || !phone || !address || !message) {
      return NextResponse.json({ error: "필수 항목을 모두 입력해 주세요." }, { status: 400 });
    }
    if (preferred_date) {
      if (!/^\d{4}-\d{2}-\d{2}$/.test(preferred_date)) {
        return NextResponse.json({ error: "희망 날짜를 다시 선택해 주세요." }, { status: 400 });
      }
      const today = new Date().toISOString().slice(0, 10);
      if (preferred_date < today) {
        return NextResponse.json({ error: "지난 날짜는 선택할 수 없습니다." }, { status: 400 });
      }
    }
    if (!validCategories.includes(category)) {
      return NextResponse.json({ error: "문의 서비스를 선택해 주세요." }, { status: 400 });
    }

    // 서버에서 카테고리/세부서비스 조합을 다시 검증해 최종 표시 문구를 만듦
    // (클라이언트가 보낸 조합 문자열을 그대로 믿지 않음)
    let service: string;
    if (category === "other") {
      service = "기타 문의";
    } else {
      const parent = servicePages.find((s) => s.slug === category);
      const sub = subServicePages.find(
        (s) => s.category === category && s.navLabel === subServiceLabel
      );
      if (!parent || !sub) {
        return NextResponse.json({ error: "세부 서비스를 선택해 주세요." }, { status: 400 });
      }
      service = `${parent.navLabel} - ${sub.navLabel}`;
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("inquiries")
      .insert({ name, phone, email, service, address, preferred_date, message });

    if (error) throw error;

    await sendAdminNotification(
      `[견적문의] ${name}님의 문의가 접수되었습니다`,
      `
        <h2>새 견적문의가 접수되었습니다</h2>
        <p><b>이름:</b> ${toHtmlParagraph(name)}</p>
        <p><b>연락처:</b> ${toHtmlParagraph(phone)}</p>
        ${email ? `<p><b>이메일:</b> ${toHtmlParagraph(email)}</p>` : ""}
        <p><b>주소:</b> ${toHtmlParagraph(address)}</p>
        ${preferred_date ? `<p><b>희망 날짜:</b> ${toHtmlParagraph(preferred_date)}</p>` : ""}
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

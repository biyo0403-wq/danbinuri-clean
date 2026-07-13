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
    const preferred_date = fieldStr(body.preferred_date, 10);
    const time_slot = fieldStr(body.time_slot, 30);
    const address = fieldStr(body.address, 200);
    const note = fieldStr(body.note, 1000) || null;

    if (!name || !phone || !service || !preferred_date || !time_slot || !address) {
      return NextResponse.json({ error: "필수 항목을 모두 입력해 주세요." }, { status: 400 });
    }
    if (!inquiryServices.includes(service)) {
      return NextResponse.json({ error: "서비스 항목을 다시 선택해 주세요." }, { status: 400 });
    }
    if (!/^\d{4}-\d{2}-\d{2}$/.test(preferred_date)) {
      return NextResponse.json({ error: "희망 방문일을 다시 선택해 주세요." }, { status: 400 });
    }
    // 지난 날짜 예약 차단 (ISO 날짜 문자열은 사전순 비교 가능)
    const today = new Date().toISOString().slice(0, 10);
    if (preferred_date < today) {
      return NextResponse.json({ error: "지난 날짜는 예약할 수 없습니다." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("reservations")
      .insert({ name, phone, service, preferred_date, time_slot, address, note });

    if (error) throw error;

    await sendAdminNotification(
      `[방문예약] ${name}님의 예약이 접수되었습니다`,
      `
        <h2>새 방문예약이 접수되었습니다</h2>
        <p><b>이름:</b> ${toHtmlParagraph(name)}</p>
        <p><b>연락처:</b> ${toHtmlParagraph(phone)}</p>
        <p><b>서비스:</b> ${toHtmlParagraph(service)}</p>
        <p><b>희망 방문일:</b> ${toHtmlParagraph(preferred_date)}</p>
        <p><b>희망 시간대:</b> ${toHtmlParagraph(time_slot)}</p>
        <p><b>방문 주소:</b> ${toHtmlParagraph(address)}</p>
        ${note ? `<p><b>요청 사항:</b><br/>${toHtmlParagraph(note)}</p>` : ""}
      `
    );

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[reservation] insert failed:", err);
    return NextResponse.json({ error: "접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." }, { status: 500 });
  }
}

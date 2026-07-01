import { NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabaseAdmin";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const name = String(body.name ?? "").trim();
    const phone = String(body.phone ?? "").trim();
    const service = String(body.service ?? "").trim();
    const message = String(body.message ?? "").trim();
    const email = String(body.email ?? "").trim() || null;

    if (!name || !phone || !service || !message) {
      return NextResponse.json({ error: "필수 항목을 모두 입력해 주세요." }, { status: 400 });
    }

    const supabase = getSupabaseAdmin();
    const { error } = await supabase
      .from("inquiries")
      .insert({ name, phone, email, service, message });

    if (error) throw error;

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[inquiry] insert failed:", err);
    return NextResponse.json({ error: "접수 중 오류가 발생했습니다. 잠시 후 다시 시도해 주세요." }, { status: 500 });
  }
}

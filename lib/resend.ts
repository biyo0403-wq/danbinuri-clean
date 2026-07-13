import { Resend } from "resend";
import { siteConfig } from "@/lib/data";

let cached: Resend | null = null;

function getResend(): Resend {
  if (cached) return cached;
  const key = process.env.RESEND_API_KEY;
  if (!key) throw new Error("RESEND_API_KEY가 설정되지 않았습니다.");
  cached = new Resend(key);
  return cached;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

/** 줄바꿈을 <br/>로 바꾸면서 HTML 특수문자를 이스케이프합니다. */
export function toHtmlParagraph(value: string): string {
  return escapeHtml(value).replace(/\n/g, "<br/>");
}

/**
 * 관리자(siteConfig.quoteEmail)에게 알림 메일을 보냅니다.
 * 이메일은 부가 알림 기능이라, 발송에 실패해도 예외를 던지지 않고 콘솔에만 기록합니다.
 * (DB 저장이 우선이며, 메일 실패로 폼 제출 자체가 실패하면 안 됩니다.)
 */
export async function sendAdminNotification(subject: string, html: string) {
  try {
    const resend = getResend();
    const { error } = await resend.emails.send({
      from: "단비누리 웹사이트 <noreply@danbinuri.kr>",
      to: siteConfig.quoteEmail,
      subject,
      html,
    });
    if (error) console.error("[resend] send failed:", error);
  } catch (err) {
    console.error("[resend] send failed:", err);
  }
}

import { siteConfig } from "@/lib/data";
import { PhoneCall, FileText } from "lucide-react";

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3">
      {/* 전화 문의 */}
      <a
        href={`tel:${siteConfig.phone}`}
        className="group flex items-center gap-2 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800 transition-colors pl-4 pr-5 py-3"
        aria-label="전화 문의"
      >
        <PhoneCall className="w-5 h-5 shrink-0" />
        <span className="text-sm font-bold">전화 문의</span>
      </a>

      {/* 견적 신청 */}
      <a
        href="#quote"
        className="group flex items-center gap-2 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-colors pl-4 pr-5 py-3"
        aria-label="견적 신청"
      >
        <FileText className="w-5 h-5 shrink-0" />
        <span className="text-sm font-bold">견적 신청</span>
      </a>

      {/* 카카오 채널을 개설하면 아래 주석을 풀고 링크만 넣으세요.
      <a
        href="https://pf.kakao.com/_채널아이디"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-yellow-400 text-slate-900 shadow-lg hover:bg-yellow-300 transition-colors pl-4 pr-5 py-3"
        aria-label="카카오톡 상담"
      >
        <span className="text-sm font-bold">카톡 상담</span>
      </a>
      */}
    </div>
  );
}

import { siteConfig } from "@/lib/data";
import { PhoneCall, FileText } from "lucide-react";

function KakaoIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className={className}>
      <path d="M12 3C6.48 3 2 6.48 2 10.77c0 2.74 1.83 5.15 4.6 6.52-.2.72-.73 2.62-.84 3.03-.13.5.18.5.39.36.16-.11 2.6-1.77 3.66-2.49.71.1 1.44.16 2.19.16 5.52 0 10-3.48 10-7.77S17.52 3 12 3z" />
    </svg>
  );
}

export default function FloatingCTA() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3">
      <a
        href={`tel:${siteConfig.phone}`}
        className="flex items-center gap-2 rounded-full bg-blue-700 text-white shadow-lg hover:bg-blue-800 transition-colors pl-4 pr-5 py-3"
        aria-label="전화 상담"
      >
        <PhoneCall className="w-5 h-5 shrink-0" />
        <span className="text-sm font-bold">전화 상담</span>
      </a>
      <a
        href={`${siteConfig.kakaoUrl}/chat`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 rounded-full bg-[#FEE500] text-[#3C1E1E] shadow-lg hover:bg-[#f5dc00] transition-colors pl-4 pr-5 py-3"
        aria-label="카카오톡 상담"
      >
        <KakaoIcon className="w-5 h-5 shrink-0" />
        <span className="text-sm font-bold">카카오톡 상담</span>
      </a>
      <a
        href="/inquiry"
        className="flex items-center gap-2 rounded-full bg-orange-500 text-white shadow-lg hover:bg-orange-600 transition-colors pl-4 pr-5 py-3"
        aria-label="상담 문의"
      >
        <FileText className="w-5 h-5 shrink-0" />
        <span className="text-sm font-bold">상담 문의</span>
      </a>
    </div>
  );
}

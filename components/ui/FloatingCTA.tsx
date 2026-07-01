import { siteConfig } from "@/lib/data";
import { PhoneCall, FileText } from "lucide-react";

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

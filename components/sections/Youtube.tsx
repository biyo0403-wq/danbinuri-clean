import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { mainVideo, subVideos } from "@/lib/data";
import { PlayCircle } from "lucide-react";

export default function Youtube() {
  return (
    <section className="bg-slate-50">
      <Container className="py-16">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">영상으로 만나는 우리</h2>
            <p className="mt-2 text-slate-500">생생한 시공 현장을 영상으로 확인하세요.</p>
          </div>
          <a href="#" className="hidden sm:inline-flex items-center gap-1.5 text-sm font-semibold text-blue-700">
            <PlayCircle className="w-5 h-5" /> 채널 바로가기
          </a>
        </div>

        <div className="mt-8 grid lg:grid-cols-2 gap-6">
          {/* 메인 영상 */}
          <SmartImage src={mainVideo.image} alt={mainVideo.title} label={mainVideo.title} className="aspect-video" />

          {/* 협찬 영상 3개 */}
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-1 gap-4">
            {subVideos.map((v) => (
              <div key={v.title} className="flex items-center gap-4">
                <SmartImage src={v.image} alt={v.title} label="영상" className="aspect-video w-40 shrink-0" />
                <p className="text-sm font-medium text-slate-700">{v.title}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}

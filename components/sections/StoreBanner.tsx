import Container from "@/components/ui/Container";
import { MapPin } from "lucide-react";

export default function StoreBanner() {
  return (
    <section className="bg-white">
      <Container className="py-10">
        <div className="rounded-xl bg-slate-900 text-white px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10">
              <MapPin className="w-6 h-6" />
            </span>
            <div>
              <h3 className="text-xl font-bold">오프라인 매장 안내</h3>
              <p className="mt-1 text-sm text-slate-300">가까운 매장에서 상담받아 보세요.</p>
            </div>
          </div>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-md bg-white text-slate-900 font-semibold hover:bg-slate-100 transition-colors"
          >
            매장 찾기
          </a>
        </div>
      </Container>
    </section>
  );
}

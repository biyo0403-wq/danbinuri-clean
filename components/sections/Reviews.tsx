import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { bestReviews, liveReviews } from "@/lib/data";
import { Star } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="bg-white">
      <Container className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">고객 후기</h2>
          <p className="mt-3 text-slate-500">고객님들이 직접 남겨주신 생생한 후기입니다.</p>
        </div>

        {/* 베스트 후기 9개 (이미지 카드) */}
        <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
          {bestReviews.map((review) => (
            <SmartImage
              key={review.title}
              src={review.image}
              alt={review.title}
              label={review.title}
              className="aspect-square shadow-card"
            />
          ))}
        </div>

        {/* 실시간 후기 (텍스트 리스트) */}
        <div className="mt-12">
          <h3 className="text-lg font-bold text-slate-900">실시간 후기</h3>
          <ul className="mt-4 divide-y divide-slate-100 border-y border-slate-100">
            {liveReviews.map((review, i) => (
              <li key={i} className="flex items-center gap-4 py-4">
                <span className="inline-flex items-center gap-1 text-orange-500 shrink-0">
                  <Star className="w-4 h-4 fill-orange-500" />
                  <span className="text-sm font-semibold">5.0</span>
                </span>
                <p className="text-sm text-slate-700 flex-1">
                  {review.text}
                </p>
                <span className="hidden sm:block text-xs text-slate-400 shrink-0">
                  {review.name} · {review.service}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}

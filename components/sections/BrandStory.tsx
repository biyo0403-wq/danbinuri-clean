import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";

export default function BrandStory() {
  return (
    <section className="bg-slate-50">
      <Container className="py-16">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <SmartImage src="/images/brand-story.jpg" alt="브랜드 스토리" className="aspect-video" />
          <div>
            <p className="text-sm font-semibold text-blue-700">BRAND STORY</p>
            <h2 className="mt-2 text-2xl lg:text-3xl font-bold text-slate-900">
              표준이 곧 신뢰입니다
            </h2>
            <p className="mt-4 text-slate-600 leading-relaxed">
              누가 방문하든 동일한 품질을 받을 수 있도록, 모든 과정을 매뉴얼로
              표준화했습니다. 정직한 견적과 책임 시공으로 고객과의 약속을 지킵니다.
            </p>
            <a
              href="#"
              className="mt-6 inline-flex items-center px-5 py-2.5 rounded-md border border-blue-700 text-blue-700 font-semibold text-sm hover:bg-blue-50 transition-colors"
            >
              블로그에서 더 보기
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

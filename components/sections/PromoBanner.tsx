import Container from "@/components/ui/Container";

export default function PromoBanner() {
  return (
    <section className="bg-white">
      <Container className="py-10">
        <div className="rounded-xl bg-gradient-to-r from-orange-500 to-orange-400 text-white px-8 py-10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="text-sm font-semibold opacity-90">이달의 추천 서비스</p>
            <h3 className="mt-1 text-2xl font-bold">지금 예약하면 추가 혜택까지</h3>
          </div>
          <a
            href="#quote"
            className="inline-flex items-center px-6 py-3 rounded-md bg-white text-orange-600 font-semibold hover:bg-orange-50 transition-colors"
          >
            혜택 확인하기
          </a>
        </div>
      </Container>
    </section>
  );
}

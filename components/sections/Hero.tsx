import Container from "@/components/ui/Container";
import { heroCtas, featuredIcons } from "@/lib/data";

export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-700 to-blue-600 text-white">
      <Container className="py-20 lg:py-24 text-center">
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/15">
          공공기관·기업 시설관리 용역 전문
        </span>
        <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold leading-tight">
          에어컨부터 석재 바닥까지,
          <br />
          시설관리 전부 맡기세요
        </h1>
        <p className="mt-5 text-lg text-blue-100">
          에어컨 살균세척·설치 &nbsp;|&nbsp; 석재 바닥폴리싱·보수
          <br />
          한 번의 문의로 시설관리의 모든 것을 해결합니다.
        </p>

        <div className="mt-8 flex flex-wrap justify-center gap-3">
          {heroCtas.map((cta) => (
            <a
              key={cta.href}
              href={cta.href}
              className={
                cta.primary
                  ? "inline-flex items-center px-6 py-3 rounded-md bg-orange-500 font-semibold hover:bg-orange-600 transition-colors"
                  : "inline-flex items-center px-6 py-3 rounded-md bg-white text-blue-700 font-semibold hover:bg-blue-50 transition-colors"
              }
            >
              {cta.label}
            </a>
          ))}
        </div>

        {/* 서비스 카테고리 4개 바로가기 */}
        <div className="mt-14 grid grid-cols-2 sm:grid-cols-5 gap-4 max-w-3xl mx-auto">
          {featuredIcons.map((item) => {
            const Icon = item.icon;
            return (
              <a
                key={item.label}
                href="#services"
                className="flex flex-col items-center gap-2 rounded-lg bg-white/10 py-5 hover:bg-white/20 transition-colors"
              >
                <Icon className="w-8 h-8" />
                <span className="text-sm font-medium">{item.label}</span>
              </a>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

import { brandStory } from "@/lib/data";

export default function Story() {
  return (
    <section className="bg-slate-50">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 왼쪽: 비주얼 카드 */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-2xl w-full aspect-[4/3] flex items-end p-8"
              style={{
                background: "linear-gradient(135deg, #1e3a8a 0%, #0ea5e9 100%)",
              }}
            >
              {brandStory.image && (
                <>
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${brandStory.image})` }}
                  />
                  <div className="absolute inset-0 bg-black/40" />
                </>
              )}
              <p className="relative z-10 text-white text-2xl lg:text-3xl font-extrabold leading-snug">
                &ldquo;믿고 맡기는<br />공간 관리&rdquo;
              </p>
            </div>
            {/* 장식 카드 */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-card p-5 hidden sm:block">
              <p className="text-3xl font-extrabold text-blue-700">단비누리</p>
              <p className="mt-1 text-sm text-slate-500">시설관리 전문기업</p>
            </div>
          </div>

          {/* 오른쪽: 스토리 텍스트 */}
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-blue-600">
              {brandStory.label}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {brandStory.title}
            </h2>
            <div className="mt-6 w-16 h-1 bg-blue-500" />
            <div className="mt-8 space-y-5">
              {brandStory.paragraphs.map((p, i) => (
                <p key={i} className="text-lg text-slate-600 leading-relaxed">
                  {p}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

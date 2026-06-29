import { brandMission } from "@/lib/data";

export default function Mission() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-orange-500">
              {brandMission.label}
            </span>
            <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.25] whitespace-pre-line">
              {brandMission.title}
            </h2>
            <p className="mt-5 text-base sm:text-lg font-medium text-slate-400">
              {brandMission.en}
            </p>
            <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">
              {brandMission.desc}
            </p>
          </div>

          <div className="relative rounded-2xl overflow-hidden bg-slate-200 aspect-[4/3]">
            {brandMission.image ? (
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${brandMission.image})` }}
              />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-slate-400 text-sm">이미지 준비 중</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

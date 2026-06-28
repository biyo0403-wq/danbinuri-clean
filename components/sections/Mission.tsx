import { brandMission } from "@/lib/data";

export default function Mission() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl">
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
      </div>
    </section>
  );
}

import { brandVision } from "@/lib/data";

export default function Vision() {
  return (
    <section id="about" className="bg-slate-50">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="max-w-4xl">
          <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">
            {brandVision.label}
          </span>
          <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 leading-[1.25] whitespace-pre-line">
            {brandVision.title}
          </h2>
          <p className="mt-5 text-base sm:text-lg font-medium text-slate-400">
            {brandVision.en}
          </p>
          <p className="mt-8 text-lg text-slate-600 leading-relaxed max-w-2xl">
            {brandVision.desc}
          </p>
        </div>
      </div>
    </section>
  );
}

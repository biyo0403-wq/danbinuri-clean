import { brandVision } from "@/lib/data";

export default function Vision() {
  return (
    <section id="about" className="bg-slate-900 text-white">
      <div className="max-w-content mx-auto px-5 sm:px-8 lg:px-12 py-24 lg:py-32">
        <div className="max-w-3xl">
          <span className="text-sm font-bold tracking-widest uppercase text-blue-400">
            {brandVision.label}
          </span>
          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight">
            {brandVision.title}
          </h2>
          <div className="mt-6 w-16 h-1 bg-blue-500" />
          <p className="mt-8 text-lg text-slate-300 leading-relaxed max-w-2xl">
            {brandVision.desc}
          </p>
        </div>
      </div>
    </section>
  );
}

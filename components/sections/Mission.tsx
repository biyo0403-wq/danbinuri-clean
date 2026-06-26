import { brandMission, serviceDetails } from "@/lib/data";

export default function Mission() {
  return (
    <section className="bg-white">
      <div className="max-w-content mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 왼쪽: 텍스트 */}
          <div>
            <span className="text-sm font-bold tracking-widest uppercase text-orange-500">
              {brandMission.label}
            </span>
            <h2 className="mt-4 text-3xl sm:text-4xl font-extrabold text-slate-900 leading-tight">
              {brandMission.title}
            </h2>
            <div className="mt-6 w-16 h-1 bg-orange-400" />
            <p className="mt-8 text-lg text-slate-600 leading-relaxed">
              {brandMission.desc}
            </p>
          </div>

          {/* 오른쪽: 서비스 목록 */}
          <div className="grid grid-cols-2 gap-4">
            {serviceDetails.map((svc) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.title}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-100"
                >
                  <span className="inline-flex items-center justify-center w-10 h-10 rounded-lg bg-blue-100 text-blue-700 shrink-0">
                    <Icon className="w-5 h-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">{svc.title}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

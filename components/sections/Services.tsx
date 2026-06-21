import Container from "@/components/ui/Container";
import { serviceDetails } from "@/lib/data";
import { Check } from "lucide-react";

export default function Services() {
  return (
    <section id="services" className="bg-white scroll-mt-20">
      <Container className="py-16 lg:py-20">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">전문 서비스</h2>
          <p className="mt-3 text-slate-500">
            바닥부터 배관까지, 시설관리에 필요한 모든 서비스를 한 곳에서 제공합니다.
          </p>
        </div>

        <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {serviceDetails.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.title}
                className="flex flex-col rounded-xl border border-slate-100 bg-white shadow-card p-7 hover:-translate-y-1 hover:shadow-lg transition-all"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-xl bg-blue-100 text-blue-700">
                  <Icon className="w-7 h-7" />
                </span>
                <h3 className="mt-5 text-lg font-bold text-slate-900">{svc.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{svc.desc}</p>

                <ul className="mt-5 space-y-2 flex-1">
                  {svc.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-700">
                      <Check className="w-4 h-4 text-blue-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>

                <a
                  href="#quote"
                  className="mt-6 inline-flex items-center justify-center w-full px-4 py-2.5 rounded-md border border-blue-700 text-blue-700 text-sm font-semibold hover:bg-blue-700 hover:text-white transition-colors"
                >
                  견적 문의
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

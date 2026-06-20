import Container from "@/components/ui/Container";
import { inquiryOptions } from "@/lib/data";

export default function InquiryOptions() {
  return (
    <section id="quote" className="bg-white">
      <Container className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">편한 방법으로 문의하세요</h2>
          <p className="mt-3 text-slate-500">원하시는 방식으로 빠르게 도와드리겠습니다.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {inquiryOptions.map((opt) => {
            const Icon = opt.icon;
            return (
              <div
                key={opt.title}
                className="rounded-lg border border-slate-100 shadow-card p-8 text-center flex flex-col items-center"
              >
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-700">
                  <Icon className="w-7 h-7" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{opt.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed flex-1">{opt.desc}</p>
                <a
                  href={opt.href}
                  className="mt-5 inline-flex items-center px-6 py-2.5 rounded-md bg-blue-700 text-white text-sm font-semibold hover:bg-blue-800 transition-colors"
                >
                  {opt.cta}
                </a>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

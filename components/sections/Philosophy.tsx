import Container from "@/components/ui/Container";
import { philosophies } from "@/lib/data";

export default function Philosophy() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">기업 철학 &amp; 브랜드 가치</h2>
          <p className="mt-3 text-slate-500">우리가 일하는 기준입니다.</p>
        </div>

        <div className="mt-10 grid md:grid-cols-2 gap-6">
          {philosophies.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="rounded-lg border border-slate-100 shadow-card p-8">
                <span className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 text-blue-700">
                  <Icon className="w-6 h-6" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-slate-900">{item.title}</h3>
                <p className="mt-2 text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

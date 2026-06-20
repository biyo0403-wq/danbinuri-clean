import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { brands } from "@/lib/data";

export default function Brands() {
  return (
    <section className="bg-slate-50">
      <Container className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">함께하는 브랜드</h2>
          <p className="mt-3 text-slate-500">하나의 그룹, 다양한 전문 서비스를 만나보세요.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {brands.map((brand) => (
            <a
              key={brand.name}
              href="#"
              className="group rounded-lg overflow-hidden border border-slate-100 bg-white shadow-card hover:-translate-y-1 transition-transform"
            >
              <SmartImage src={brand.image} alt={brand.name} className="aspect-video" />
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-700">{brand.name}</h3>
                <p className="mt-1 text-sm text-slate-500">{brand.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

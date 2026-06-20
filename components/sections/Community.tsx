import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { communityCards } from "@/lib/data";

export default function Community() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <div className="grid sm:grid-cols-3 gap-6">
          {communityCards.map((card) => (
            <a
              key={card.title}
              href="#"
              className="group rounded-lg overflow-hidden border border-slate-100 shadow-card hover:-translate-y-1 transition-transform"
            >
              <SmartImage src={card.image} alt={card.title} className="aspect-video" />
              <div className="p-5">
                <h3 className="font-semibold text-slate-900 group-hover:text-blue-700">
                  {card.title}
                </h3>
                <p className="mt-1.5 text-sm text-slate-500">{card.desc}</p>
              </div>
            </a>
          ))}
        </div>
      </Container>
    </section>
  );
}

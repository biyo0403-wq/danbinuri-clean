import Container from "@/components/ui/Container";
import { achievements } from "@/lib/data";

export default function Achievements() {
  return (
    <section className="bg-slate-50 border-y border-slate-100">
      <Container className="py-12">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {achievements.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.label} className="flex flex-col items-center text-center gap-3">
                <span className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-blue-100 text-blue-700">
                  <Icon className="w-7 h-7" />
                </span>
                <span className="text-sm font-medium text-slate-700">{item.label}</span>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

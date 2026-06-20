import Container from "@/components/ui/Container";
import { costCompare } from "@/lib/data";

export default function CostCompare() {
  return (
    <section className="bg-slate-50">
      <Container className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">합리적인 비용</h2>
          <p className="mt-3 text-slate-500">불필요한 중간 비용 없이 더 합리적입니다.</p>
        </div>

        <div className="mt-10 max-w-xl mx-auto space-y-5">
          {costCompare.map((row) => (
            <div key={row.label}>
              <div className="flex items-center justify-between text-sm font-medium text-slate-700">
                <span>{row.label}</span>
                <span>{row.value}</span>
              </div>
              <div className="mt-2 h-6 rounded-md bg-slate-200 overflow-hidden">
                <div
                  className={
                    "h-full rounded-md " + (row.highlight ? "bg-blue-700" : "bg-slate-400")
                  }
                  style={{ width: `${row.value}%` }}
                />
              </div>
            </div>
          ))}
        </div>
        <p className="mt-6 text-center text-xs text-slate-400">
          ※ 그래프 수치는 예시이며 실제 비용은 현장에 따라 달라집니다.
        </p>
      </Container>
    </section>
  );
}

import Container from "@/components/ui/Container";
import { teamStats, totalCustomers, satisfaction } from "@/lib/data";

export default function Stats() {
  return (
    <section className="bg-blue-700 text-white">
      <Container className="py-16">
        <div className="text-center">
          <h2 className="text-2xl lg:text-3xl font-bold">숫자로 보는 신뢰</h2>
          <p className="mt-3 text-blue-100">누적 고객 {totalCustomers}명이 선택했습니다.</p>
        </div>

        <div className="mt-10 grid grid-cols-2 lg:grid-cols-4 gap-6">
          {teamStats.map((team) => (
            <div key={team.label} className="rounded-lg bg-white/10 py-8 text-center">
              <p className="text-3xl font-extrabold">{team.value}</p>
              <p className="mt-1 text-sm text-blue-100">{team.label}</p>
            </div>
          ))}
        </div>

        {/* 만족도 그래프 */}
        <div className="mt-10 max-w-2xl mx-auto">
          <div className="flex items-center justify-between text-sm font-medium">
            <span>고객 만족도</span>
            <span>{satisfaction}%</span>
          </div>
          <div className="mt-2 h-3 rounded-full bg-white/20 overflow-hidden">
            <div
              className="h-full rounded-full bg-orange-400"
              style={{ width: `${satisfaction}%` }}
            />
          </div>
        </div>
      </Container>
    </section>
  );
}

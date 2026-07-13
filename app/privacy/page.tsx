import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Container from "@/components/ui/Container";
import { siteConfig } from "@/lib/data";

export const metadata: Metadata = {
  title: `개인정보처리방침 | ${siteConfig.name}`,
  description: `${siteConfig.name} 개인정보처리방침`,
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-bold text-slate-900">{title}</h2>
      <div className="mt-3 text-sm leading-relaxed text-slate-600 space-y-2">{children}</div>
    </section>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className="bg-white">
        <Container className="py-16 max-w-3xl">
          <h1 className="text-2xl lg:text-3xl font-bold text-slate-900">개인정보처리방침</h1>
          <p className="mt-3 text-sm text-slate-500">
            {siteConfig.name}(이하 &lsquo;회사&rsquo;)은 이용자의 개인정보를 중요하게 생각하며,
            「개인정보 보호법」 등 관련 법령을 준수합니다.
          </p>

          <Section title="1. 수집하는 개인정보 항목">
            <p>회사는 견적 상담을 위해 아래의 개인정보를 수집합니다.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>필수 항목: 성함, 연락처, 현장 주소</li>
              <li>선택 항목: 이메일, 희망 날짜(방문·시공 희망일), 요청 사항, 문의 내용</li>
            </ul>
          </Section>

          <Section title="2. 개인정보의 수집 및 이용 목적">
            <p>수집한 개인정보는 다음의 목적으로만 이용됩니다.</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>견적 문의 접수 및 상담 회신</li>
              <li>서비스 안내 및 일정 조율</li>
            </ul>
          </Section>

          <Section title="3. 개인정보의 보유 및 이용 기간">
            <p>
              수집된 개인정보는 상담·견적 처리 완료 후 지체 없이 파기합니다. 단, 관계 법령에 따라
              보존할 필요가 있는 경우 해당 기간 동안 보관합니다.
            </p>
          </Section>

          <Section title="4. 개인정보의 제3자 제공">
            <p>
              회사는 이용자의 개인정보를 본 방침에서 고지한 범위를 넘어 외부에 제공하지 않습니다.
              다만 법령에 근거하거나 수사기관의 적법한 요청이 있는 경우는 예외로 합니다.
            </p>
          </Section>

          <Section title="5. 개인정보의 처리 위탁">
            <p>
              회사는 원활한 상담 처리를 위해 견적 문의 내용을 이메일로 전달받아 처리합니다. 별도의
              외부 위탁 처리가 발생하는 경우 본 방침을 통해 사전에 고지합니다.
            </p>
          </Section>

          <Section title="6. 이용자의 권리">
            <p>
              이용자는 언제든지 본인의 개인정보 열람·정정·삭제·처리정지를 요청할 수 있으며, 회사는
              지체 없이 필요한 조치를 취합니다.
            </p>
          </Section>

          <Section title="7. 개인정보 보호책임자 및 문의">
            <ul className="list-disc pl-5 space-y-1">
              <li>책임자: {siteConfig.ceo}</li>
              <li>연락처: {siteConfig.phone}</li>
              <li>이메일: {siteConfig.quoteEmail}</li>
            </ul>
          </Section>

          <Section title="8. 고지의 의무">
            <p>
              본 개인정보처리방침은 관련 법령 및 회사 정책에 따라 변경될 수 있으며, 변경 시 본
              페이지를 통해 공지합니다.
            </p>
          </Section>

          <p className="mt-10 text-xs text-slate-400">시행일: 2026년 6월 21일</p>
        </Container>
      </main>
      <Footer />
    </>
  );
}

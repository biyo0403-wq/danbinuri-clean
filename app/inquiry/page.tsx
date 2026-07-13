import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import FloatingCTA from "@/components/ui/FloatingCTA";
import Container from "@/components/ui/Container";
import InquiryForm from "@/components/sections/InquiryForm";
import { siteConfig } from "@/lib/data";
import { Phone, Mail, Clock, MapPin } from "lucide-react";

export const metadata: Metadata = {
  title: `견적문의 | ${siteConfig.name}`,
  description: "에어컨·공조기·석재 유지관리 견적을 문의하세요. 전문 상담팀이 빠르게 안내해 드립니다.",
};

const contactItems = [
  { icon: Phone, label: "전화 상담", value: siteConfig.phone, href: `tel:${siteConfig.phone}` },
  { icon: Mail, label: "이메일", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Clock, label: "운영 시간", value: siteConfig.hours },
  { icon: MapPin, label: "오시는 길", value: siteConfig.address },
];

export default function InquiryPage() {
  return (
    <>
      <Header />
      <main className="bg-slate-50">
        <Container className="py-16 lg:py-20">
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-sm font-bold tracking-[0.2em] uppercase text-blue-600">
              Inquiry
            </span>
            <h1 className="mt-3 text-3xl sm:text-4xl font-extrabold text-slate-900">견적문의</h1>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              에어컨·공조기부터 석재 유지관리까지, 궁금한 점을 남겨주시면
              <br className="hidden sm:block" />
              전문 상담팀이 빠르고 정확하게 안내해 드립니다.
            </p>
          </div>

          <div className="mt-12 grid lg:grid-cols-[1fr_360px] gap-8 items-start">
            {/* 폼 */}
            <div className="rounded-2xl bg-white border border-slate-100 shadow-sm p-6 sm:p-8">
              <InquiryForm />
            </div>

            {/* 연락처 안내 */}
            <aside className="rounded-2xl bg-slate-900 text-white p-6 sm:p-8">
              <h2 className="text-lg font-bold">바로 연결되는 상담 채널</h2>
              <p className="mt-2 text-sm text-slate-400">
                온라인 접수가 어려우시면 아래로 바로 문의하세요.
              </p>
              <ul className="mt-6 space-y-5">
                {contactItems.map((item) => {
                  const Icon = item.icon;
                  const content = (
                    <div className="flex items-start gap-3">
                      <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-white/10 text-blue-300">
                        <Icon className="w-5 h-5" />
                      </span>
                      <div>
                        <p className="text-xs text-slate-400">{item.label}</p>
                        <p className="mt-0.5 font-semibold">{item.value}</p>
                      </div>
                    </div>
                  );
                  return (
                    <li key={item.label}>
                      {item.href ? (
                        <a href={item.href} className="block hover:opacity-80 transition-opacity">
                          {content}
                        </a>
                      ) : (
                        content
                      )}
                    </li>
                  );
                })}
              </ul>
            </aside>
          </div>
        </Container>
      </main>
      <Footer />
      <FloatingCTA />
    </>
  );
}

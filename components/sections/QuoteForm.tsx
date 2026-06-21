"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { serviceMenu, siteConfig } from "@/lib/data";

const serviceLabels = serviceMenu.map((c) => c.label);

const inputClass =
  "w-full rounded-md border border-slate-300 px-4 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-100 transition-colors";

export default function QuoteForm() {
  const [services, setServices] = useState<string[]>([]);
  const [agreed, setAgreed] = useState(false);

  function toggleService(label: string) {
    setServices((prev) =>
      prev.includes(label) ? prev.filter((s) => s !== label) : [...prev, label]
    );
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!agreed) {
      alert("개인정보 수집·이용에 동의해 주세요.");
      return;
    }
    const form = e.currentTarget;
    const data = new FormData(form);

    const get = (k: string) => (data.get(k) as string)?.trim() || "-";

    const body = [
      `■ 담당자 성함: ${get("name")}`,
      `■ 연락처: ${get("phone")}`,
      `■ 기관·업체명: ${get("company")}`,
      `■ 문의 서비스: ${services.length ? services.join(", ") : "-"}`,
      `■ 현장 위치(지역): ${get("location")}`,
      `■ 현장 규모(평수): ${get("size")}`,
      `■ 희망 일정: ${get("schedule")}`,
      ``,
      `■ 추가 문의 내용:`,
      get("message"),
    ].join("\n");

    const subject = `[견적문의] ${get("name")} / ${
      services.length ? services.join(", ") : "서비스 미선택"
    }`;

    window.location.href = `mailto:${siteConfig.quoteEmail}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }

  // 구글폼 링크가 설정되어 있으면 구글폼을 임베드합니다.
  if (siteConfig.quoteFormUrl) {
    return (
      <section id="quote" className="bg-slate-50">
        <Container className="py-16">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">온라인 견적 신청</h2>
            <p className="mt-3 text-slate-500">
              아래 양식을 작성해 주시면 빠르게 견적을 안내해 드리겠습니다.
            </p>
          </div>
          <div className="mt-10 max-w-3xl mx-auto rounded-lg overflow-hidden border border-slate-200 bg-white shadow-card">
            <iframe
              src={siteConfig.quoteFormUrl}
              title="견적 신청서"
              className="w-full"
              style={{ height: 1200 }}
              loading="lazy"
            >
              로딩 중…
            </iframe>
          </div>
        </Container>
      </section>
    );
  }

  // 기본: 사이트 자체 견적 폼 (제출 시 이메일로 접수)
  return (
    <section id="quote" className="bg-slate-50">
      <Container className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">온라인 견적 신청</h2>
          <p className="mt-3 text-slate-500">
            아래 양식을 작성해 주시면 빠르게 견적을 안내해 드리겠습니다.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 max-w-3xl mx-auto rounded-lg border border-slate-200 bg-white shadow-card p-6 sm:p-8 space-y-5"
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                담당자 성함 <span className="text-red-500">*</span>
              </label>
              <input name="name" required placeholder="홍길동" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                연락처 <span className="text-red-500">*</span>
              </label>
              <input
                name="phone"
                required
                inputMode="tel"
                placeholder="010-0000-0000"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              기관·업체명
            </label>
            <input name="company" placeholder="(개인 고객은 비워두셔도 됩니다)" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">
              문의 서비스 <span className="text-red-500">*</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {serviceLabels.map((label) => {
                const active = services.includes(label);
                return (
                  <button
                    type="button"
                    key={label}
                    onClick={() => toggleService(label)}
                    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
                      active
                        ? "bg-blue-700 border-blue-700 text-white"
                        : "bg-white border-slate-300 text-slate-600 hover:border-blue-400"
                    }`}
                  >
                    {label}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                현장 위치(지역) <span className="text-red-500">*</span>
              </label>
              <input name="location" required placeholder="예) 서울 강남구" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                현장 규모(평수)
              </label>
              <input name="size" placeholder="예) 30평" className={inputClass} />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              희망 일정
            </label>
            <input name="schedule" placeholder="예) 6월 말, 가능한 빠르게 등" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              추가 문의 내용
            </label>
            <textarea
              name="message"
              rows={4}
              placeholder="현장 상황이나 요청 사항을 자유롭게 적어주세요."
              className={`${inputClass} resize-none`}
            />
          </div>

          <div className="rounded-md bg-slate-50 border border-slate-200 p-4">
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 w-4 h-4 shrink-0 accent-blue-700"
              />
              <span className="text-sm text-slate-700 leading-relaxed">
                <span className="font-semibold text-slate-900">개인정보 수집·이용에 동의합니다.</span>{" "}
                <span className="text-slate-500">
                  (수집 항목: 성함·연락처 등 입력 정보 / 목적: 견적 상담 및 회신 / 보유기간: 상담 완료 후 즉시 파기)
                </span>{" "}
                <a
                  href="/privacy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-700 underline underline-offset-2"
                >
                  자세히 보기
                </a>
              </span>
            </label>
          </div>

          <button
            type="submit"
            disabled={!agreed}
            className="w-full rounded-md bg-blue-700 text-white text-base font-bold py-3.5 hover:bg-blue-800 transition-colors disabled:bg-slate-300 disabled:cursor-not-allowed"
          >
            견적 신청하기
          </button>
          <p className="text-center text-xs text-slate-400">
            신청하기를 누르면 작성하신 내용이 담당자에게 전달됩니다.
          </p>
        </form>
      </Container>
    </section>
  );
}

"use client";

import { useState } from "react";
import { subServicePages, siteConfig } from "@/lib/data";

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition";

const categoryOptions = [
  { slug: "aircon", label: "에어컨" },
  { slug: "hvac", label: "공조기" },
  { slug: "stone", label: "석재보수" },
  { slug: "other", label: "기타" },
];

type Status = "idle" | "loading" | "success" | "error";

function pillClass(active: boolean) {
  return active
    ? "rounded-full border-2 border-blue-600 bg-blue-50 px-4 py-2 text-sm font-bold text-blue-700 transition-colors"
    : "rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-600 hover:border-blue-400 hover:text-blue-600 transition-colors";
}

export default function InquiryForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");
  const [category, setCategory] = useState<string | null>(null);
  const [subService, setSubService] = useState<string | null>(null);

  const subOptions = category && category !== "other" ? subServicePages.filter((s) => s.category === category) : [];

  function selectCategory(slug: string) {
    setCategory(slug);
    setSubService(null);
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    if (!category) {
      setStatus("error");
      setErrorMsg("문의 서비스를 선택해 주세요.");
      return;
    }
    if (category !== "other" && !subService) {
      setStatus("error");
      setErrorMsg("세부 서비스를 선택해 주세요.");
      return;
    }

    const form = e.currentTarget;
    const payload: Record<string, unknown> = Object.fromEntries(new FormData(form).entries());
    payload.category = category;
    payload.subService = subService ?? "";

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "접수에 실패했습니다.");
      }
      setStatus("success");
      form.reset();
      setCategory(null);
      setSubService(null);
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "접수에 실패했습니다.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 px-5 py-8 text-center">
        <p className="text-lg font-bold text-green-800">견적 문의가 접수되었습니다.</p>
        <p className="mt-2 text-sm text-green-700">
          담당자가 확인 후 빠르게 연락드리겠습니다. 급하시면{" "}
          <a href={`tel:${siteConfig.phone}`} className="font-bold underline">
            {siteConfig.phone}
          </a>{" "}
          로 문의해 주세요.
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="mt-5 rounded-lg border border-green-300 bg-white px-5 py-2.5 text-sm font-bold text-green-700 hover:bg-green-50 transition-colors"
        >
          추가 문의하기
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* 스팸 봇 차단용 숨김 필드 (사람에게는 보이지 않음) */}
      <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            이름 <span className="text-orange-500">*</span>
          </label>
          <input name="name" type="text" required maxLength={50} placeholder="성함을 입력해 주세요" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            연락처 <span className="text-orange-500">*</span>
          </label>
          <input name="phone" type="tel" required maxLength={30} placeholder="010-0000-0000" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">이메일</label>
        <input name="email" type="email" maxLength={100} placeholder="example@email.com (선택)" className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          주소 <span className="text-orange-500">*</span>
        </label>
        <input name="address" type="text" required maxLength={200} placeholder="시공이 필요한 현장 주소" className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">희망 날짜</label>
        <input name="preferred_date" type="date" className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-2">
          문의 서비스 <span className="text-orange-500">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {categoryOptions.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => selectCategory(c.slug)}
              className={pillClass(category === c.slug)}
            >
              {c.label}
            </button>
          ))}
        </div>

        {subOptions.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2 rounded-xl bg-slate-50 border border-slate-100 p-3">
            {subOptions.map((s) => (
              <button
                key={s.slug}
                type="button"
                onClick={() => setSubService(s.navLabel)}
                className={pillClass(subService === s.navLabel)}
              >
                {s.navLabel}
              </button>
            ))}
          </div>
        )}
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          문의 내용 <span className="text-orange-500">*</span>
        </label>
        <textarea
          name="message"
          required
          rows={5}
          maxLength={2000}
          placeholder="현장 규모, 원하시는 일정 등을 남겨주시면 더 정확한 견적을 안내해 드립니다."
          className={`${inputClass} resize-none`}
        />
      </div>

      <label className="flex items-start gap-2 text-sm text-slate-600">
        <input type="checkbox" required className="mt-1 h-4 w-4 rounded border-slate-300 text-blue-600" />
        <span>
          <a href="/privacy" className="text-blue-600 underline">
            개인정보 수집·이용
          </a>
          에 동의합니다. (필수)
        </span>
      </label>

      {status === "error" && (
        <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="w-full rounded-lg bg-blue-600 text-white font-bold py-3.5 hover:bg-blue-700 transition-colors disabled:opacity-60"
      >
        {status === "loading" ? "접수 중…" : "견적 문의하기"}
      </button>
    </form>
  );
}

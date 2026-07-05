"use client";

import { useState } from "react";
import { inquiryServices, siteConfig } from "@/lib/data";

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition";

const timeSlots = ["오전 (09~12시)", "오후 (12~15시)", "오후 (15~18시)", "시간 협의"];

type Status = "idle" | "loading" | "success" | "error";

export default function ReservationForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/reservation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "예약 접수에 실패했습니다.");
      }
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "예약 접수에 실패했습니다.");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-lg bg-green-50 border border-green-200 px-5 py-8 text-center">
        <p className="text-lg font-bold text-green-800">방문 예약이 접수되었습니다.</p>
        <p className="mt-2 text-sm text-green-700">
          담당자가 확인 후 방문 일정을 확정해 연락드리겠습니다. 급하시면{" "}
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
          추가 예약하기
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
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          예약 서비스 <span className="text-orange-500">*</span>
        </label>
        <select name="service" required defaultValue="" className={inputClass}>
          <option value="" disabled>
            서비스를 선택해 주세요
          </option>
          {inquiryServices.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            희망 방문일 <span className="text-orange-500">*</span>
          </label>
          <input name="preferred_date" type="date" required className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            희망 시간대 <span className="text-orange-500">*</span>
          </label>
          <select name="time_slot" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              시간대를 선택해 주세요
            </option>
            {timeSlots.map((t) => (
              <option key={t} value={t}>
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          방문 주소 <span className="text-orange-500">*</span>
        </label>
        <input name="address" type="text" required maxLength={200} placeholder="시공이 필요한 현장 주소" className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">요청 사항</label>
        <textarea
          name="note"
          rows={4}
          maxLength={1000}
          placeholder="현장 규모, 특이사항, 추가로 원하시는 점을 남겨주세요. (선택)"
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
        {status === "loading" ? "접수 중…" : "방문 예약 신청"}
      </button>
    </form>
  );
}

"use client";

import { useState } from "react";
import { inquiryServices, siteConfig } from "@/lib/data";

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition";

const timeSlots = ["오전 (09~12시)", "오후 (12~15시)", "오후 (15~18시)", "시간 협의"];

export default function ReservationForm() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    // TODO: Supabase 연동 후 실제 예약 접수·저장 처리 (현재는 UI만)
    setSubmitted(true);
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="rounded-lg bg-blue-50 border border-blue-100 px-4 py-3 text-sm text-blue-800">
        방문 예약 기능은 준비 중입니다. 지금은{" "}
        <a href={`tel:${siteConfig.phone}`} className="font-bold underline">
          {siteConfig.phone}
        </a>{" "}
        로 예약을 도와드립니다.
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            이름 <span className="text-orange-500">*</span>
          </label>
          <input type="text" required placeholder="성함을 입력해 주세요" className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            연락처 <span className="text-orange-500">*</span>
          </label>
          <input type="tel" required placeholder="010-0000-0000" className={inputClass} />
        </div>
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">
          예약 서비스 <span className="text-orange-500">*</span>
        </label>
        <select required defaultValue="" className={inputClass}>
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
          <input type="date" required className={inputClass} />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1.5">
            희망 시간대 <span className="text-orange-500">*</span>
          </label>
          <select required defaultValue="" className={inputClass}>
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
        <input type="text" required placeholder="시공이 필요한 현장 주소" className={inputClass} />
      </div>

      <div>
        <label className="block text-sm font-semibold text-slate-700 mb-1.5">요청 사항</label>
        <textarea
          rows={4}
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

      {submitted && (
        <div className="rounded-lg bg-green-50 border border-green-200 px-4 py-3 text-sm text-green-800">
          예약 접수 기능은 곧 오픈됩니다. 지금은 전화{" "}
          <a href={`tel:${siteConfig.phone}`} className="font-bold underline">
            {siteConfig.phone}
          </a>{" "}
          로 예약을 도와드립니다.
        </div>
      )}

      <button
        type="submit"
        className="w-full rounded-lg bg-blue-600 text-white font-bold py-3.5 hover:bg-blue-700 transition-colors"
      >
        방문 예약 신청
      </button>
    </form>
  );
}

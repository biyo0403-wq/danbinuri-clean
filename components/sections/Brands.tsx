"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import SmartImage from "@/components/ui/SmartImage";
import { brands } from "@/lib/data";

export default function Brands() {
  const [comingSoon, setComingSoon] = useState<string | null>(null);

  const cardClass =
    "group block w-full text-left rounded-lg overflow-hidden border border-slate-100 bg-white shadow-card hover:-translate-y-1 transition-transform";

  return (
    <section className="bg-slate-50">
      <Container className="py-16">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-2xl lg:text-3xl font-bold text-slate-900">함께하는 브랜드</h2>
          <p className="mt-3 text-slate-500">하나의 그룹, 다양한 전문 서비스를 만나보세요.</p>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {brands.map((brand) => {
            const inner = (
              <>
                <SmartImage src={brand.image} alt={brand.name} className="aspect-video" />
                <div className="p-5">
                  <h3 className="font-semibold text-slate-900 group-hover:text-blue-700">{brand.name}</h3>
                  <p className="mt-1 text-sm text-slate-500">{brand.desc}</p>
                </div>
              </>
            );

            return brand.href ? (
              <a
                key={brand.name}
                href={brand.href}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                {inner}
              </a>
            ) : (
              <button
                key={brand.name}
                type="button"
                onClick={() => setComingSoon(brand.name)}
                className={cardClass}
              >
                {inner}
              </button>
            );
          })}
        </div>
      </Container>

      {/* 준비 중 팝업 */}
      {comingSoon && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4"
          onClick={() => setComingSoon(null)}
        >
          <div
            className="w-full max-w-sm rounded-2xl bg-white p-8 text-center shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="text-lg font-bold text-slate-900">{comingSoon}은 준비 중입니다</p>
            <p className="mt-2 text-sm text-slate-500">
              오픈 준비 중인 서비스입니다. 조금만 기다려 주세요.
            </p>
            <button
              type="button"
              onClick={() => setComingSoon(null)}
              className="mt-6 w-full rounded-lg bg-blue-600 py-3 text-sm font-bold text-white hover:bg-blue-700 transition-colors"
            >
              확인
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

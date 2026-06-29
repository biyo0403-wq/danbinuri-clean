"use client";

import { useState, useEffect, useCallback } from "react";
import { heroSlides } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "@/components/ui/Container";

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % heroSlides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [paused, next]);

  return (
    <section className="bg-white pt-6 pb-6 lg:pt-10 lg:pb-10">
      <Container>
        <div
          className="relative overflow-hidden rounded-2xl"
          style={{ minHeight: "600px", height: "80vh", maxHeight: "900px" }}
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* 슬라이드 트랙 */}
          <div
            className="flex h-full transition-transform duration-700 ease-in-out"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {heroSlides.map((slide, i) => (
              <div
                key={i}
                className="relative w-full h-full shrink-0 flex items-center justify-center"
                style={{ background: slide.gradient }}
              >
                {/* 배경 사진 (파일이 없으면 위 그라데이션이 그대로 보임) */}
                {slide.image && (
                  <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${slide.image})` }}
                  />
                )}

                {/* 배경 장식 원 (사진이 없을 때만 표시) */}
                {!slide.image && (
                  <>
                    <div
                      className="absolute right-[-10%] top-[-20%] rounded-full opacity-10"
                      style={{ width: "60vw", height: "60vw", background: "white" }}
                    />
                    <div
                      className="absolute left-[-5%] bottom-[-15%] rounded-full opacity-5"
                      style={{ width: "40vw", height: "40vw", background: "white" }}
                    />
                  </>
                )}

                {/* 가독성 오버레이 (흰 글자가 잘 보이도록 어둡게) */}
                <div className="absolute inset-0 bg-black/45" />

                {/* 텍스트 */}
                <div className="relative z-10 text-center text-white px-6 max-w-3xl mx-auto">
                  <span className="inline-block text-sm font-semibold tracking-widest uppercase mb-4 px-4 py-1.5 rounded-full bg-white/20">
                    {slide.tag}
                  </span>
                  <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight whitespace-pre-line">
                    {slide.heading}
                  </h1>
                  <p className="mt-5 text-base sm:text-lg text-white/80 max-w-xl mx-auto leading-relaxed">
                    {slide.sub}
                  </p>
                  <a
                    href="#quote"
                    className="mt-8 inline-flex items-center px-8 py-3.5 rounded-md bg-white text-slate-900 font-bold text-sm hover:bg-white/90 transition-colors"
                  >
                    {slide.cta}
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* 이전/다음 버튼 */}
          <button
            onClick={prev}
            aria-label="이전 슬라이드"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={next}
            aria-label="다음 슬라이드"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 hover:bg-white/40 flex items-center justify-center text-white transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* 닷 인디케이터 */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {heroSlides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                aria-label={`슬라이드 ${i + 1}`}
                className={`rounded-full transition-all duration-300 ${
                  i === current
                    ? "w-7 h-2.5 bg-white"
                    : "w-2.5 h-2.5 bg-white/40 hover:bg-white/70"
                }`}
              />
            ))}
          </div>

          {/* 슬라이드 번호 */}
          <div className="absolute bottom-6 right-6 z-20 text-white/60 text-sm font-medium tabular-nums">
            {String(current + 1).padStart(2, "0")} / {String(heroSlides.length).padStart(2, "0")}
          </div>
        </div>
      </Container>
    </section>
  );
}

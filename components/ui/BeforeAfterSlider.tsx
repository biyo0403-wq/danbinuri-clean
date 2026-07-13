"use client";

import { useState } from "react";
import { ArrowLeftRight } from "lucide-react";

interface BeforeAfterSliderProps {
  /** 시공 전 이미지 경로. 예: "/images/stone-repair-before.jpg" */
  beforeImage: string;
  /** 시공 후 이미지 경로. 예: "/images/stone-repair-after.jpg" */
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  /** 비율/크기 등 바깥 박스 클래스 */
  className?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
  className = "aspect-[4/3]",
}: BeforeAfterSliderProps) {
  const [position, setPosition] = useState(50);
  const [broken, setBroken] = useState(false);

  if (broken) {
    return (
      <div
        className={`relative overflow-hidden rounded-2xl bg-slate-200 flex items-center justify-center ${className}`}
      >
        <span className="text-slate-400 text-sm">시공 이미지 준비 중</span>
      </div>
    );
  }

  return (
    <div className={`relative overflow-hidden rounded-2xl select-none ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={afterImage}
        alt={afterLabel}
        draggable={false}
        onError={() => setBroken(true)}
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div
        className="absolute inset-0 h-full w-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      >
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={beforeImage}
          alt={beforeLabel}
          draggable={false}
          onError={() => setBroken(true)}
          className="h-full w-full object-cover"
        />
      </div>

      <span className="absolute top-3 left-3 z-10 rounded-md bg-black/60 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
        {beforeLabel}
      </span>
      <span className="absolute top-3 right-3 z-10 rounded-md bg-black/60 px-2.5 py-1 text-xs font-bold tracking-wide text-white">
        {afterLabel}
      </span>

      <div
        className="absolute inset-y-0 z-10 w-0.5 bg-white/90 pointer-events-none"
        style={{ left: `${position}%` }}
      >
        <div className="absolute top-1/2 left-1/2 flex h-10 w-10 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-lg">
          <ArrowLeftRight className="h-4 w-4 text-slate-700" />
        </div>
      </div>

      <input
        type="range"
        min={0}
        max={100}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-label="시공 전후 비교 슬라이더"
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
      />
    </div>
  );
}

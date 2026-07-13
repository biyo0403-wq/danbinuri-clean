"use client";

import { useState } from "react";

interface SmartImageProps {
  /** 예: "/images/hero-1.jpg" — public/images 폴더에 같은 이름 파일을 넣으면 자동 표시됩니다. */
  src?: string;
  alt?: string;
  /** 비율/크기 등 바깥 박스 클래스 (예: "aspect-video", "aspect-square") */
  className?: string;
  /** placeholder 안내 문구 */
  label?: string;
}

/**
 * 이미지가 아직 없으면 회색 placeholder 박스를 보여주고,
 * public 폴더에 해당 이미지 파일이 들어오면 자동으로 사진으로 바뀝니다.
 */
export default function SmartImage({
  src,
  alt = "",
  className = "aspect-video",
  label = "이미지 영역",
}: SmartImageProps) {
  const [errored, setErrored] = useState(false);
  const showPlaceholder = !src || errored;

  return (
    <div className={`relative overflow-hidden rounded-lg bg-slate-100 ${className}`}>
      {showPlaceholder ? (
        <div className="absolute inset-0 flex items-center justify-center text-sm text-slate-400">
          {label}
        </div>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={src}
          alt={alt}
          onError={() => setErrored(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}
    </div>
  );
}

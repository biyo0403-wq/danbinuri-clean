"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { mainNav, certBadges } from "@/lib/data";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <Container>
        <div className="flex items-center justify-between h-16 gap-6">
          {/* 로고 + 인증마크 */}
          <div className="flex items-center gap-3 shrink-0">
            <a href="/" className="text-2xl font-extrabold text-blue-700">
              단비누리
            </a>
            <div className="flex items-center gap-1.5">
              {certBadges.map((badge) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  key={badge.label}
                  src={badge.image}
                  alt={badge.label}
                  title={badge.label}
                  className="h-8 w-8 sm:h-9 sm:w-9 rounded-full border border-slate-200 bg-white object-contain p-0.5"
                />
              ))}
            </div>
          </div>

          {/* PC 네비게이션 */}
          <nav className="hidden lg:flex items-center gap-7 flex-1">
            {mainNav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[15px] font-semibold text-slate-700 hover:text-blue-700 transition-colors whitespace-nowrap"
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* 우측: 햄버거 버튼 (모바일·태블릿 전용) */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="메뉴 열기"
              aria-expanded={open}
              className="lg:hidden inline-flex items-center justify-center w-10 h-10 -mr-2 rounded-md text-slate-700 hover:bg-slate-100 transition-colors"
            >
              {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </Container>

      {/* 모바일 메뉴 패널 */}
      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white">
          <Container className="py-3">
            <ul>
              {mainNav.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-3 text-[15px] font-semibold text-slate-700 hover:text-blue-700 border-b border-slate-50 transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

          </Container>
        </div>
      )}
    </header>
  );
}

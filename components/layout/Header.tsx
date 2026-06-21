"use client";

import { useState } from "react";
import Container from "@/components/ui/Container";
import { serviceMenu, siteConfig } from "@/lib/data";
import { PhoneCall, Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200 shadow-sm">
      <Container>
        {/* 상단: 로고 + 전화 + CTA + 햄버거 */}
        <div className="flex items-center justify-between h-16">
          <a href="#" className="text-2xl font-extrabold text-blue-700">
            {siteConfig.name}
          </a>

          <div className="flex items-center gap-3 sm:gap-5">
            <a
              href={`tel:${siteConfig.phone}`}
              className="hidden sm:flex items-center gap-2 text-blue-700"
            >
              <PhoneCall className="w-5 h-5" />
              <span className="text-xl font-extrabold tracking-tight">{siteConfig.phone}</span>
            </a>
            <a
              href="#quote"
              className="inline-flex items-center px-4 py-2 rounded-md bg-orange-500 text-white text-sm font-semibold hover:bg-orange-600 transition-colors"
            >
              간편 견적
            </a>

            {/* 햄버거 버튼 (모바일·태블릿 전용) */}
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

        {/* 하단: 서비스 메가메뉴 (PC 전용) */}
        <nav className="hidden lg:flex items-stretch border-t border-slate-100">
          {serviceMenu.map((cat) => (
            <div key={cat.label} className="group relative">
              <button className="px-5 py-3 text-sm font-semibold text-slate-700 group-hover:text-blue-700 transition-colors">
                {cat.label}
              </button>
              {/* 드롭다운 */}
              <div className="invisible opacity-0 group-hover:visible group-hover:opacity-100 transition-opacity absolute left-0 top-full z-50 min-w-44 bg-white border border-slate-200 rounded-b-lg shadow-lg py-2">
                {cat.items.map((item) => (
                  <a
                    key={item}
                    href="#services"
                    className="block px-5 py-2 text-sm text-slate-600 hover:bg-blue-50 hover:text-blue-700 transition-colors whitespace-nowrap"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
      </Container>

      {/* 모바일 메뉴 패널 */}
      {open && (
        <div className="lg:hidden border-t border-slate-100 bg-white max-h-[70vh] overflow-y-auto">
          <Container className="py-4">
            {/* 모바일 전화 (상단에 안 보이던 화면용) */}
            <a
              href={`tel:${siteConfig.phone}`}
              className="sm:hidden flex items-center gap-2 text-blue-700 font-bold pb-3 mb-2 border-b border-slate-100"
            >
              <PhoneCall className="w-5 h-5" />
              <span className="text-lg">{siteConfig.phone}</span>
            </a>

            <ul className="space-y-5">
              {serviceMenu.map((cat) => (
                <li key={cat.label}>
                  <p className="text-sm font-bold text-slate-900">{cat.label}</p>
                  <div className="mt-2 flex flex-wrap gap-x-4 gap-y-2">
                    {cat.items.map((item) => (
                      <a
                        key={item}
                        href="#services"
                        onClick={() => setOpen(false)}
                        className="text-sm text-slate-600 hover:text-blue-700 transition-colors"
                      >
                        {item}
                      </a>
                    ))}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href="#quote"
              onClick={() => setOpen(false)}
              className="mt-6 flex items-center justify-center w-full px-4 py-3 rounded-md bg-orange-500 text-white text-sm font-bold hover:bg-orange-600 transition-colors"
            >
              간편 견적 신청
            </a>
          </Container>
        </div>
      )}
    </header>
  );
}

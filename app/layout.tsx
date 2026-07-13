import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.danbiservice.co.kr"),
  title: "단비누리 | 에어컨·공조기·석재 유지관리 전문",
  description:
    "에어컨 필터·세척 관리와 설치·유지보수, 공조기 내부 세척·필터·핀코일 관리, 대리석 바닥·외벽 석재 유지관리까지. 검증된 전문 인력과 표준화된 공정으로 서울·수도권 시설관리를 책임지는 단비누리입니다.",
  keywords: [
    "에어컨 살균세척",
    "에어컨 청소",
    "에어컨 설치",
    "시스템에어컨 세척",
    "공조기 세척",
    "공조기 필터 관리",
    "AHU 세척",
    "핀코일 세척",
    "대리석 연마 광택",
    "대리석 보수",
    "석재 유지관리",
    "단비누리",
  ],
  openGraph: {
    title: "단비누리 | 에어컨·공조기·석재 유지관리 전문",
    description:
      "에어컨·공조기·석재 유지관리 전문. 서울·수도권 시설관리를 책임집니다.",
    siteName: "단비누리",
    locale: "ko_KR",
    type: "website",
  },
  verification: {
    other: {
      "naver-site-verification": "e02b5766d361540fec9baa3837322a21620ab44f",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className="font-sans text-slate-800 bg-white antialiased">{children}</body>
    </html>
  );
}

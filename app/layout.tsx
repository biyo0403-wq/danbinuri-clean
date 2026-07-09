import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://www.danbiservice.co.kr"),
  title: "단비누리 | 에어컨 살균세척·석재보수 전문",
  description:
    "에어컨 분해 살균세척·설치, 대리석 줄눈 시공·연마 광택·보수까지. 검증된 전문 인력과 표준화된 공정으로 서울·수도권 시설관리를 책임지는 단비누리입니다.",
  keywords: [
    "에어컨 살균세척",
    "에어컨 청소",
    "에어컨 설치",
    "시스템에어컨 세척",
    "대리석 줄눈 시공",
    "대리석 연마 광택",
    "석재보수",
    "단비누리",
  ],
  openGraph: {
    title: "단비누리 | 에어컨 살균세척·석재보수 전문",
    description:
      "에어컨 분해 살균세척·설치, 대리석 줄눈·연마·광택·보수 전문. 서울·수도권 시설관리를 책임집니다.",
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

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "단비누리 | 표준화된 청소 서비스",
  description: "간편청소·전문청소·특수청소·가전청소·예방시공·방역까지, 표준화된 청소 서비스 전문 브랜드",
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

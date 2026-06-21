import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  ShieldCheck,
  Snowflake,
  PaintRoller,
  Wind,
  Award,
  Tv,
  Trophy,
  BadgeCheck,
  Layers,
  Droplets,
  PhoneCall,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";

// ── 사이트 공통 정보 (실제 회사 고유정보 아님 / 임시값) ──
export const siteConfig = {
  name: "단비누리",
  tagline: "바닥시공 · 대리석광택 · 에어컨 · 청소방역 · 배관청소 전문",
  phone: "1600-0000",
  hours: "평일 09:00 ~ 18:00 (주말·공휴일 휴무)",
  email: "contact@example.com",
  ceo: "대표자명",
  address: "주소를 입력하세요",
  businessNumber: "000-00-00000",
  mailOrderNumber: "제2026-서울-00000호",
  copyright: "© 2026 단비누리. All rights reserved.",
  // 견적 문의가 접수될 이메일 (사이트 자체 폼 사용 시)
  quoteEmail: "contact@example.com",
  // 구글폼을 만들면 여기에 임베드(iframe) 주소나 /viewform 링크를 넣으세요.
  // 값이 있으면 사이트 폼 대신 구글폼이 자동으로 표시됩니다. (비워두면 사이트 자체 폼 사용)
  quoteFormUrl: "",
};

// 상단 유틸 바 - 패밀리 사이트
export const familySites = ["의류몰", "사무용품몰", "산업용품몰"];

// 헤더 우측 간단 메뉴
export const utilNav = [
  { href: "#pricing", label: "가격안내" },
  { href: "#inquiry", label: "견적문의" },
  { href: "#support", label: "고객지원" },
];

// ── 메가메뉴: 서비스 4개 카테고리 ──
export interface MenuCategory {
  label: string;
  items: string[];
}

export const serviceMenu: MenuCategory[] = [
  {
    label: "바닥 세척·왁스 시공",
    items: ["바닥 세척", "왁스 시공", "우레탄 코팅", "에폭시 시공", "논슬립 처리"],
  },
  {
    label: "대리석 연마 광택",
    items: ["대리석 연마", "광택 시공", "크리스탈 코팅", "줄눈 처리", "오염 제거"],
  },
  {
    label: "에어컨 살균세척·설치",
    items: ["에어컨 살균세척", "신규 설치", "이전 설치", "시스템 에어컨", "수리·점검"],
  },
  {
    label: "청소·방역",
    items: ["사무실 청소", "입주 청소", "이사 청소", "방역·소독", "특수 청소"],
  },
  {
    label: "배관 청소",
    items: ["하수구 청소", "배수관 세척", "욕실 배관", "주방 배관", "고압 세척"],
  },
];

// ── 서비스 상세 (#services 섹션) ──
export interface ServiceDetail {
  icon: LucideIcon;
  title: string;
  desc: string;
  items: string[];
}

export const serviceDetails: ServiceDetail[] = [
  {
    icon: PaintRoller,
    title: "바닥 세척·왁스 시공",
    desc: "오래된 바닥의 찌든 때를 벗겨내고 왁스·코팅으로 광택과 내구성을 되살립니다.",
    items: ["바닥 세척", "왁스 시공", "우레탄 코팅", "에폭시 시공", "논슬립 처리"],
  },
  {
    icon: Layers,
    title: "대리석 연마 광택",
    desc: "마모되고 얼룩진 대리석을 연마·광택해 새것 같은 표면으로 복원합니다.",
    items: ["대리석 연마", "광택 시공", "크리스탈 코팅", "줄눈 처리", "오염 제거"],
  },
  {
    icon: Snowflake,
    title: "에어컨 살균세척·설치",
    desc: "분해 살균세척으로 냄새와 곰팡이를 제거하고, 신규·이전 설치까지 책임집니다.",
    items: ["에어컨 살균세척", "신규 설치", "이전 설치", "시스템 에어컨", "수리·점검"],
  },
  {
    icon: Sparkles,
    title: "청소·방역",
    desc: "입주·이사·사무실 청소부터 방역·소독까지, 공간을 위생적으로 관리합니다.",
    items: ["사무실 청소", "입주 청소", "이사 청소", "방역·소독", "특수 청소"],
  },
  {
    icon: Droplets,
    title: "배관 청소",
    desc: "고압 세척으로 막힌 배관과 하수구를 뚫고 악취·역류를 해결합니다.",
    items: ["하수구 청소", "배수관 세척", "욕실 배관", "주방 배관", "고압 세척"],
  },
];

// ── 히어로 CTA ──
export const heroCtas = [
  { href: "#reserve", label: "온라인 예약", primary: true },
  { href: "#quote", label: "간편 견적 신청", primary: false },
];

// ── 커뮤니티 안내 카드 ──
export interface CommunityCard {
  title: string;
  desc: string;
  image: string;
}

export const communityCards: CommunityCard[] = [
  { title: "블로그", desc: "청소 노하우와 시공 후기를 확인하세요.", image: "/images/community-blog.jpg" },
  { title: "이벤트 · 프로모션", desc: "진행 중인 할인과 혜택을 모았습니다.", image: "/images/community-event.jpg" },
  { title: "자주 묻는 질문", desc: "예약 전 궁금한 점을 빠르게 해결하세요.", image: "/images/community-faq.jpg" },
];

// ── 유튜브 섹션 (영상 자리) ──
export interface VideoItem {
  title: string;
  image: string;
}

export const mainVideo: VideoItem = { title: "브랜드 소개 영상", image: "/images/video-main.jpg" };
export const subVideos: VideoItem[] = [
  { title: "협찬 영상 1", image: "/images/video-1.jpg" },
  { title: "협찬 영상 2", image: "/images/video-2.jpg" },
  { title: "협찬 영상 3", image: "/images/video-3.jpg" },
];

// ── 뉴스 & 정보 (공지 + 인증 탭) ──
export const notices = [
  { date: "2026.06.10", title: "여름철 에어컨 청소 사전 예약 안내" },
  { date: "2026.05.28", title: "장마철 곰팡이 제거 시공 프로모션 안내" },
];

export interface CertBadge {
  label: string;
  image: string;
}

export const certBadges: CertBadge[] = [
  { label: "중소기업 확인", image: "/images/cert-sme.jpg" },
  { label: "창업기업 확인", image: "/images/cert-startup.jpg" },
  { label: "여성기업 확인", image: "/images/cert-women.jpg" },
];

// ── 실적 / 인증 아이콘 ──
export interface Achievement {
  icon: LucideIcon;
  label: string;
}

export const achievements: Achievement[] = [
  { icon: BadgeCheck, label: "주요 기관·기업 시공" },
  { icon: Tv, label: "방송 출연" },
  { icon: Trophy, label: "수상 이력" },
  { icon: Award, label: "중소기업 인증" },
  { icon: ShieldCheck, label: "품질 보증" },
];

// ── 고객 후기 ──
export interface BestReview {
  title: string;
  image: string;
}

export const bestReviews: BestReview[] = Array.from({ length: 9 }, (_, i) => ({
  title: `베스트 후기 ${i + 1}`,
  image: `/images/review-${i + 1}.jpg`,
}));

export const liveReviews = [
  { name: "김○○", service: "입주청소", text: "구석구석 꼼꼼하게 해주셔서 만족스러웠습니다." },
  { name: "이○○", service: "에어컨청소", text: "분해세척 후 냉방이 확실히 시원해졌어요." },
  { name: "박○○", service: "줄눈시공", text: "욕실이 새것처럼 깔끔해졌습니다." },
  { name: "최○○", service: "이사청소", text: "시간 약속 잘 지키고 응대도 친절했어요." },
  { name: "정○○", service: "곰팡이제거", text: "장마철 곰팡이가 싹 사라졌습니다." },
];

// ── 통계 데이터 ──
export interface TeamStat {
  label: string;
  value: string;
}

export const teamStats: TeamStat[] = [
  { label: "전문청소팀", value: "80팀+" },
  { label: "시공팀", value: "30팀+" },
  { label: "가전청소팀", value: "40팀+" },
  { label: "방역·소독팀", value: "20팀+" },
];

export const totalCustomers = "120,000+";
export const satisfaction = 97;

// ── 기업철학 & 브랜드 가치 ──
export interface Philosophy {
  icon: LucideIcon;
  title: string;
  desc: string;
}

export const philosophies: Philosophy[] = [
  {
    icon: ShieldCheck,
    title: "운영 철학",
    desc: "표준화된 매뉴얼과 검증된 전문 인력으로 어디서나 균일한 품질을 제공합니다.",
  },
  {
    icon: Sparkles,
    title: "브랜드 가치",
    desc: "정직한 견적과 책임 시공, 그리고 철저한 사후관리로 신뢰를 쌓습니다.",
  },
];

// ── 비용효과 비교 (그래프 값, 임시) ──
export const costCompare = [
  { label: "일반 플랫폼", value: 100, highlight: false },
  { label: "클린마스터", value: 72, highlight: true },
];

// ── 3가지 문의 옵션 ──
export interface InquiryOption {
  icon: LucideIcon;
  title: string;
  desc: string;
  cta: string;
  href: string;
}

export const inquiryOptions: InquiryOption[] = [
  { icon: PhoneCall, title: "간편 견적", desc: "간단한 정보만 남기면 빠르게 견적을 안내합니다.", cta: "견적 신청", href: "#quote" },
  { icon: CalendarCheck, title: "온라인 예약", desc: "원하는 날짜와 서비스를 직접 선택해 예약하세요.", cta: "예약하기", href: "#quote" },
  { icon: MessageSquare, title: "전화 상담", desc: "급하시면 전화로 바로 문의하세요.", cta: "전화하기", href: "tel:1600-0000" },
];

// ── 서비스 브랜드 소개 ──
export interface BrandItem {
  name: string;
  desc: string;
  image: string;
}

export const brands: BrandItem[] = [
  { name: "의류몰", desc: "단체복·유니폼·작업복 전문 쇼핑몰", image: "/images/brand-1.jpg" },
  { name: "사무용품몰", desc: "사무용품·소모품 전문 쇼핑몰", image: "/images/brand-2.jpg" },
  { name: "산업용품몰", desc: "산업·안전용품 전문 쇼핑몰", image: "/images/brand-3.jpg" },
];

// ── 대표 서비스 카테고리 아이콘 (Hero 바로가기 4개) ──
export const featuredIcons: { icon: LucideIcon; label: string }[] = [
  { icon: PaintRoller, label: "바닥 세척·왁스" },
  { icon: Layers, label: "대리석 연마·광택" },
  { icon: Snowflake, label: "에어컨 살균·설치" },
  { icon: Sparkles, label: "청소·방역" },
  { icon: Droplets, label: "배관 청소" },
];

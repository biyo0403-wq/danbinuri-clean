import type { LucideIcon } from "lucide-react";
import {
  Sparkles,
  ShieldCheck,
  Snowflake,
  Award,
  Tv,
  Trophy,
  BadgeCheck,
  Layers,
  PhoneCall,
  CalendarCheck,
  MessageSquare,
} from "lucide-react";

// ── 사이트 공통 정보 (실제 회사 고유정보 아님 / 임시값) ──
export const siteConfig = {
  name: "단비누리",
  tagline: "에어컨 살균세척 · 석재보수 전문",
  phone: "02-6448-7221",
  hours: "평일 10:00 ~ 18:00 (주말·공휴일 휴무)",
  email: "danbinuri25@naver.com",
  ceo: "이영기",
  address: "서울특별시 서초구 논현로11길 49, 2층 (양재동)",
  businessNumber: "490-81-03515",
  mailOrderNumber: "제2026-서울-00000호",
  copyright: "© 2026 단비누리. All rights reserved.",
  // 견적 문의가 접수될 이메일 (사이트 자체 폼 사용 시)
  quoteEmail: "danbinuri25@naver.com",
  // 구글폼을 만들면 여기에 임베드(iframe) 주소나 /viewform 링크를 넣으세요.
  // 값이 있으면 사이트 폼 대신 구글폼이 자동으로 표시됩니다. (비워두면 사이트 자체 폼 사용)
  quoteFormUrl:
    "https://docs.google.com/forms/d/e/1FAIpQLScAOM7_P70-Q5li8ovpTHFghZteJ4xemZzZpjW0BhA6iQQJtw/viewform?embedded=true",
};

// 상단 유틸 바 - 패밀리 사이트
export const familySites = ["의류몰", "사무용품몰", "산업용품몰"];

// 헤더 우측 간단 메뉴
export const utilNav = [
  { href: "#pricing", label: "가격안내" },
  { href: "#inquiry", label: "견적문의" },
  { href: "#support", label: "고객지원" },
];

// ── 헤더 메인 네비게이션 (표시 순서대로) ──
export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "회사소개", href: "/" },
  { label: "에어컨", href: "/services/aircon" },
  { label: "석재보수", href: "/services/stone" },
];

// ── 서비스 전용 페이지 데이터 ──
export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServicePageData {
  slug: string;
  navLabel: string;
  fullTitle: string;
  tag: string;
  heroDesc: string;
  longDesc: string;
  items: string[];
  gradient: string;
  features: ServiceFeature[];
}

export const servicePages: ServicePageData[] = [
  {
    slug: "aircon",
    navLabel: "에어컨",
    fullTitle: "에어컨 살균세척·설치",
    tag: "Air Conditioning",
    heroDesc: "분해 살균세척으로 냄새와 곰팡이를 완전히 제거합니다.",
    longDesc:
      "에어컨 내부에 쌓인 곰팡이·세균·먼지는 공기 오염의 주범입니다. 단비누리는 필터부터 열교환기까지 완전 분해 후 전문 약품으로 살균세척하여 깨끗하고 쾌적한 공기를 되찾아 드립니다.",
    items: ["에어컨 살균세척", "에어컨 설치", "보수·점검"],
    gradient: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)",
    features: [
      { title: "완전 분해 세척", desc: "필터·열교환기·팬까지 분해 후 전문 약품으로 살균" },
      { title: "곰팡이·세균 제거", desc: "검증된 살균 공정으로 위생적인 환경 조성" },
      { title: "설치 전문팀 보유", desc: "가정·사무실·공장 등 모든 환경 설치 가능" },
      { title: "AS 보장", desc: "시공 후 이상 발생 시 신속한 사후 처리" },
    ],
  },
  {
    slug: "stone",
    navLabel: "석재보수",
    fullTitle: "석재보수",
    tag: "Stone Care",
    heroDesc: "줄눈·연마·보수까지, 대리석을 새것처럼 되살립니다.",
    longDesc:
      "대리석 바닥은 관리 여하에 따라 수명과 품격이 크게 달라집니다. 단비누리는 줄눈 시공·연마 광택·보수 기술로 손상되고 흐려진 대리석을 본래의 깊은 광택과 평탄함으로 복원합니다.",
    items: ["대리석 줄눈 시공", "대리석 연마 광택", "대리석 보수"],
    gradient: "linear-gradient(135deg, #292524 0%, #78716c 100%)",
    features: [
      { title: "줄눈 방수·미관 복원", desc: "벌어지고 오염된 줄눈을 전용 재료로 재시공" },
      { title: "거울 같은 광택 복원", desc: "다이아몬드 패드 단계별 연마로 깊은 광택 구현" },
      { title: "손상 부위 원상 복구", desc: "깨짐·파임·균열을 전용 충전재로 메운 뒤 평탄 연마" },
      { title: "대리석 전문 기술력", desc: "10년 이상 대리석 시공 경력 보유팀" },
    ],
  },
];

// ── 서비스별 공통 이유 4개 (세부 페이지 공유) ──
export const serviceReasons: Record<string, ServiceFeature[]> = {
  aircon: [
    { title: "완전 분해 살균세척", desc: "외부 케이스부터 열교환기까지 분해 후 전문 약품으로 살균" },
    { title: "냉방 효율 회복 보장", desc: "막힌 필터·열교환기 세척으로 냉방 성능 되살림" },
    { title: "설치·이전·AS 원스톱", desc: "설치부터 사후 관리까지 한 팀이 책임" },
    { title: "공인 기술 인력 투입", desc: "전기기사·냉동기사 자격 보유 전문팀 시공" },
  ],
  stone: [
    { title: "줄눈 시공 전문", desc: "벌어지고 오염된 줄눈을 전용 재료로 깔끔하게 재시공" },
    { title: "다이아몬드 연마 장비 보유", desc: "최신 장비로 거울 같은 광택 구현" },
    { title: "손상 보수 전문", desc: "깨짐·파임·균열을 전용 충전재로 자연스럽게 복구" },
    { title: "줄눈·연마·보수 원스톱", desc: "줄눈부터 광택·보수까지 한 팀이 책임 시공" },
  ],
};

export const serviceSolutions: Record<string, ServiceFeature[]> = {
  aircon: [
    { title: "POINT 01 — 현장 상태 진단 후 맞춤 공정 설계", desc: "에어컨 종류·사용 환경·오염도에 따라 세척 강도와 약품을 달리 적용합니다." },
    { title: "POINT 02 — 검증된 살균제로 세균·곰팡이 제거", desc: "식약처 인증 살균제를 사용해 안전하고 확실하게 제거합니다." },
    { title: "POINT 03 — 시공 후 작동 확인까지 완료", desc: "세척·설치 완료 후 정상 작동 여부를 현장에서 직접 확인하고 마무리합니다." },
  ],
  stone: [
    { title: "POINT 01 — 대리석 상태 진단 후 공정 설계", desc: "줄눈·표면·손상 상태를 확인한 뒤 줄눈 시공·연마·보수 공정을 설계합니다." },
    { title: "POINT 02 — 줄눈 재시공·단계별 연마·보수", desc: "줄눈 재시공과 단계별 연마, 전용 충전재 보수로 미관과 광택을 함께 복원합니다." },
    { title: "POINT 03 — 시공 후 광택·평탄도 확인까지 완료", desc: "완료 후 광택과 표면 평탄도를 직접 확인하고 마무리합니다." },
  ],
};

// ── 시공 진행 과정 (사진+번호 카드형) — 카테고리별로 있을 때만 표시, 없으면 기존 4단계 아이콘형으로 대체 ──
export interface ProcessStep {
  image: string;
  label: string;
}

export const serviceProcess: Record<string, ProcessStep[]> = {
  aircon: [
    { image: "/images/aircon-process-1.jpg", label: "기기 작동 및 고장진단" },
    { image: "/images/aircon-process-2.jpg", label: "실내기 완전 분해" },
    { image: "/images/aircon-process-3.jpg", label: "열교환기 고압세척" },
    { image: "/images/aircon-process-4.jpg", label: "부품 세척" },
    { image: "/images/aircon-process-5.jpg", label: "건조 작업" },
    { image: "/images/aircon-process-6.jpg", label: "실내기 재조립" },
    { image: "/images/aircon-process-7.jpg", label: "실외기 사이클 진단·점검" },
    { image: "/images/aircon-process-8.jpg", label: "작동 테스트 및 최종점검" },
  ],
};

// ── 서비스 세부 페이지 (25개) ──
export interface SubServicePage {
  category: string;
  slug: string;
  navLabel: string;
  heroTitle: string;
  heroDesc: string;
  intro: string;
  painPoints: Array<{ title: string; desc: string }>;
  /** 히어로 배경 우측에 들어가는 이미지 */
  heroImage?: string;
  /** 시공 전/후 비교 슬라이더용 이미지 (둘 다 있을 때만 슬라이더 표시) */
  beforeImage?: string;
  afterImage?: string;
}

export const subServicePages: SubServicePage[] = [
  // ── 에어컨 ──
  {
    category: "aircon", slug: "wash", navLabel: "에어컨 살균세척",
    heroTitle: "에어컨 살균세척",
    heroDesc: "보이지 않는 세균과 곰팡이까지, 완전 분해 살균으로 해결합니다",
    intro: "에어컨 내부는 습기와 먼지가 쌓여 세균·곰팡이의 온상이 됩니다. 단비누리는 필터부터 열교환기·팬까지 완전 분해 후 전문 살균제로 깨끗이 세척합니다.",
    painPoints: [
      { title: "에어컨을 켜면 퀴퀴한 냄새가 나요", desc: "내부 곰팡이와 세균이 원인, 완전 분해 살균으로 해결" },
      { title: "청소를 맡겼는데 냄새가 또 나요", desc: "표면만 닦는 청소는 한계, 분해 후 내부까지 살균" },
      { title: "가족이 에어컨 바람에 기침·알레르기를 해요", desc: "세균·곰팡이 포자 완전 제거로 안전한 실내 공기" },
    ],
    heroImage: "/images/aircon-wash-hero.jpg",
  },
  {
    category: "aircon", slug: "install", navLabel: "에어컨 설치",
    heroTitle: "에어컨 설치",
    heroDesc: "신규 설치부터 이전 설치까지, 안전하고 깔끔하게 시공합니다",
    intro: "에어컨 설치는 배관 위치, 실외기 공간, 전기 용량을 꼼꼼히 확인해야 합니다. 단비누리 설치 전문팀이 신규 설치는 물론 기존 에어컨 이전 설치까지 냉매 손실 없이 최적의 위치에 안전하게 시공합니다.",
    painPoints: [
      { title: "어떤 제품·용량이 맞는지 모르겠어요", desc: "현장 측정 후 공간에 맞는 최적 용량·위치 추천" },
      { title: "이전 중 냉매가 새거나 고장날까 봐요", desc: "냉매 회수 후 재충전, 전문 장비로 안전하게 이전" },
      { title: "전기·배관·벽 마감이 지저분할까 불안해요", desc: "유자격 전기·냉동기사 투입, 최소 시공으로 깔끔 마감" },
    ],
    heroImage: "/images/aircon-install-hero.jpg",
    beforeImage: "/images/aircon-install-before.jpg",
    afterImage: "/images/aircon-install-after.jpg",
  },
  {
    category: "aircon", slug: "repair", navLabel: "보수·점검",
    heroTitle: "에어컨 보수·점검",
    heroDesc: "이상 증상 빠른 진단, 당일 수리까지",
    intro: "에어컨이 갑자기 멈추거나 냉방이 약해지면 냉매 부족, 팬 불량, 센서 이상 등 다양한 원인이 있습니다. 단비누리가 정확히 진단하고 빠르게 보수·점검합니다.",
    painPoints: [
      { title: "에어컨이 갑자기 작동을 안 해요", desc: "원인 진단부터 수리까지 당일 처리" },
      { title: "냉방은 되는데 효율이 많이 떨어졌어요", desc: "냉매·필터·센서 정밀 점검 후 수리" },
      { title: "수리비가 얼마나 나올지 몰라 불안해요", desc: "진단 후 견적 먼저, 동의 후 수리 진행" },
    ],
    heroImage: "/images/aircon-repair-hero.jpg",
  },
  // ── 석재보수 ──
  {
    category: "stone", slug: "grout", navLabel: "대리석 줄눈 시공",
    heroTitle: "대리석 줄눈 시공",
    heroDesc: "벌어지고 오염된 줄눈을 새것처럼, 방수·미관 동시 복원",
    intro: "대리석 사이 줄눈이 깨지거나 벌어지면 물이 스며들고 미관도 해칩니다. 단비누리는 손상된 줄눈을 제거하고 전용 재료로 재시공해 방수와 마감을 동시에 살립니다.",
    painPoints: [
      { title: "줄눈이 벌어지고 깨져 물이 스며들어요", desc: "기존 줄눈 제거 후 전용 재료로 재시공해 방수 복원" },
      { title: "줄눈이 시커멓게 오염돼 지저분해요", desc: "오염 줄눈 제거 후 깨끗한 색으로 새로 시공" },
      { title: "부분 보수가 너무 티가 날까 걱정돼요", desc: "주변 대리석 톤에 맞춰 자연스럽게 마감" },
    ],
    heroImage: "/images/stone-grout-hero.jpg",
    beforeImage: "/images/stone-grout-before.jpg",
    afterImage: "/images/stone-grout-after.jpg",
  },
  {
    category: "stone", slug: "polish", navLabel: "대리석 연마 광택",
    heroTitle: "대리석 연마 광택",
    heroDesc: "흐려진 대리석을 단계별 연마·광택해 거울 같은 표면으로",
    intro: "대리석은 시간이 지나면 광택을 잃고 흐려집니다. 단비누리는 다이아몬드 패드로 단계별 연마한 뒤 광택 작업을 진행해 본래의 깊은 광택을 되살립니다.",
    painPoints: [
      { title: "대리석이 흐릿하고 광택이 사라졌어요", desc: "단계별 연마·광택으로 거울 같은 표면 복원" },
      { title: "사람이 많이 다녀 통로만 닳아 얼룩져요", desc: "바닥 전체 균일 연마로 광택 차이 제거" },
      { title: "왁스칠은 금방 벗겨져 다시 흐려져요", desc: "왁스가 아닌 대리석 자체 연마로 광택 오래 유지" },
    ],
    heroImage: "/images/stone-polish-hero.jpg",
    beforeImage: "/images/stone-polish-before.jpg",
    afterImage: "/images/stone-polish-after.jpg",
  },
  {
    category: "stone", slug: "repair", navLabel: "대리석 보수",
    heroTitle: "대리석 보수",
    heroDesc: "깨짐·파임·균열까지, 손상된 대리석을 원상 복구합니다",
    intro: "대리석의 크랙, 파임, 들뜸은 방치하면 점점 커집니다. 단비누리는 손상 부위를 전용 충전재로 메우고 주변과 자연스럽게 연마해 티 나지 않게 복구합니다.",
    painPoints: [
      { title: "대리석이 깨지거나 파였어요", desc: "전용 충전재로 메운 뒤 평탄하게 연마" },
      { title: "들뜨고 균열이 생겨 점점 커져요", desc: "손상 부위 보강 후 주변과 단차 없이 복구" },
      { title: "부분 보수 자국이 너무 티가 나요", desc: "주변과 동일하게 연마·광택해 자연스럽게 마감" },
    ],
    heroImage: "/images/stone-repair-hero.jpg",
    beforeImage: "/images/stone-repair-before.jpg",
    afterImage: "/images/stone-repair-after.jpg",
  },
];

// ── 메가메뉴: 서비스 4개 카테고리 ──
export interface MenuCategory {
  label: string;
  items: string[];
}

export const serviceMenu: MenuCategory[] = [
  {
    label: "석재보수",
    items: ["대리석 줄눈 시공", "대리석 연마 광택", "대리석 보수"],
  },
  {
    label: "에어컨 살균세척·설치",
    items: ["에어컨 살균세척", "에어컨 설치", "보수·점검"],
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
    icon: Snowflake,
    title: "에어컨 살균세척·설치",
    desc: "분해 살균세척으로 냄새와 곰팡이를 제거하고, 설치·보수·점검까지 책임집니다.",
    items: ["에어컨 살균세척", "에어컨 설치", "보수·점검"],
  },
  {
    icon: Layers,
    title: "석재보수",
    desc: "줄눈 시공·연마 광택·보수로 손상된 대리석을 새것 같은 표면으로 복원합니다.",
    items: ["대리석 줄눈 시공", "대리석 연마 광택", "대리석 보수"],
  },
];

// ── 히어로 슬라이더 (6칸) ──
export interface HeroSlide {
  tag: string;
  heading: string;
  sub: string;
  gradient: string;
  image?: string;
  cta: string;
}

export const heroSlides: HeroSlide[] = [
  {
    tag: "시설관리 전문기업",
    heading: "전문가의 손길로\n완벽하게 케어합니다",
    sub: "단비누리와 함께 공간의 가치를 높이세요.",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
    image: "/images/hero-1.jpg",
    cta: "견적 문의하기",
  },
  {
    tag: "에어컨 살균세척·설치",
    heading: "쾌적한 공기\n에어컨 살균세척",
    sub: "분해 살균세척으로 냄새와 곰팡이를 완전히 제거합니다.",
    gradient: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)",
    image: "/images/hero-2.jpg",
    cta: "견적 문의하기",
  },
  {
    tag: "석재보수",
    heading: "새것 같은 대리석\n줄눈·연마·보수 시공",
    sub: "줄눈부터 광택·보수까지 대리석을 본래 모습으로 복원합니다.",
    gradient: "linear-gradient(135deg, #292524 0%, #78716c 100%)",
    image: "/images/hero-3.jpg",
    cta: "견적 문의하기",
  },
];

// ── 브랜드 스토리 ──
export const brandVision = {
  label: "Our Vision",
  title: "공간의 질을\n최상의 기준으로 케어합니다",
  en: "We care for the quality of your space at the highest standard.",
  desc: "단비누리는 전문화된 시설관리 서비스로 모든 공간이 언제나 최상의 상태를 유지할 수 있도록 책임집니다. 표준화된 공정과 검증된 전문 인력으로 어디서나 균일한 품질을 제공합니다.",
  image: "/images/vision.jpg",
};

export const brandMission = {
  label: "Our Mission",
  title: "통합 솔루션으로\n고객의 공간을 지속적으로 케어합니다",
  en: "We continuously care for your space with all-in-one solutions.",
  desc: "에어컨 살균세척부터 석재보수까지 — 검증된 전문 공정으로 고객의 공간을 책임집니다. 고객이 본업에 집중할 수 있도록, 공간 관리는 단비누리에 맡기세요.",
  image: "/images/mission.jpg",
};

export const brandStory = {
  label: "Our Story",
  title: "믿고 맡기는 공간 관리, 단비누리",
  image: "/images/story.jpg",
  paragraphs: [
    "단비누리는 고객이 믿고 맡길 수 있는 공간 관리를 약속합니다. 에어컨 살균세척부터 대리석 줄눈·연마·보수까지, 검증된 전문 인력과 표준화된 공정으로 보이지 않는 위생과 보이는 품격을 함께 책임집니다.",
    "공공기관과 기업 현장에서 쌓아온 경험을 바탕으로, 어디서나 한결같은 품질을 제공합니다. 시공으로 끝나지 않고 사후까지 책임지는 자세 — 고객의 공간을 내 공간처럼 대하는 마음이 단비누리가 신뢰받는 이유입니다.",
  ],
};

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
  { name: "김○○", service: "대리석 보수", text: "깨지고 파였던 현관 바닥이 감쪽같이 복구됐습니다." },
  { name: "이○○", service: "에어컨 살균세척", text: "분해세척 후 냉방이 확실히 시원해졌어요." },
  { name: "박○○", service: "대리석 연마 광택", text: "흐려졌던 로비 바닥이 거울처럼 광이 살아났어요." },
  { name: "최○○", service: "에어컨 설치", text: "이사하면서 재설치했는데 성능 그대로네요." },
  { name: "정○○", service: "에어컨 살균세척", text: "장마철 묵은 곰팡이 냄새가 싹 사라졌습니다." },
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
  { label: "석재보수팀", value: "20팀+" },
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
  { icon: Snowflake, label: "에어컨 살균·설치" },
  { icon: Layers, label: "석재보수" },
];

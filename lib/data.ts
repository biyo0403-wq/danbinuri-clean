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
  { label: "회사소개", href: "#about" },
  { label: "에어컨", href: "/services/aircon" },
  { label: "바닥청소왁싱", href: "/services/floor" },
  { label: "대리석 코팅연마", href: "/services/marble" },
  { label: "청소방역", href: "/services/cleaning" },
  { label: "배관청소", href: "/services/pipe" },
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
    items: ["에어컨 살균세척", "신규 설치", "이전 설치", "시스템 에어컨", "수리·점검"],
    gradient: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)",
    features: [
      { title: "완전 분해 세척", desc: "필터·열교환기·팬까지 분해 후 전문 약품으로 살균" },
      { title: "곰팡이·세균 제거", desc: "검증된 살균 공정으로 위생적인 환경 조성" },
      { title: "설치 전문팀 보유", desc: "가정·사무실·공장 등 모든 환경 설치 가능" },
      { title: "AS 보장", desc: "시공 후 이상 발생 시 신속한 사후 처리" },
    ],
  },
  {
    slug: "floor",
    navLabel: "바닥청소왁싱",
    fullTitle: "바닥 세척·왁스 시공",
    tag: "Floor Care",
    heroDesc: "오래된 바닥의 찌든 때를 벗겨내고 광택과 내구성을 되살립니다.",
    longDesc:
      "바닥은 공간의 첫인상을 결정합니다. 단비누리의 바닥 전문팀은 묵은 때를 완전 제거한 뒤 왁스·코팅 처리로 광택과 내구성을 동시에 높입니다.",
    items: ["바닥 세척", "왁스 시공", "우레탄 코팅", "에폭시 시공", "논슬립 처리"],
    gradient: "linear-gradient(135deg, #c2410c 0%, #f97316 100%)",
    features: [
      { title: "전 소재 대응", desc: "대리석·타일·원목·PVC 등 모든 바닥재 시공 가능" },
      { title: "묵은 때 완전 제거", desc: "전문 장비와 약품으로 찌든 오염 완벽 제거" },
      { title: "광택·내구성 강화", desc: "왁스·우레탄·에폭시 코팅으로 수명 연장" },
      { title: "논슬립 처리", desc: "미끄럼 방지 시공으로 안전한 공간 조성" },
    ],
  },
  {
    slug: "marble",
    navLabel: "대리석 코팅연마",
    fullTitle: "대리석 코팅·연마",
    tag: "Marble Care",
    heroDesc: "마모된 대리석을 연마·광택해 새것 같은 표면으로 복원합니다.",
    longDesc:
      "대리석은 관리 여하에 따라 수명이 크게 달라집니다. 단비누리는 연마·광택 기술로 스크래치와 오염을 제거하고, 크리스탈 코팅으로 영구적인 광택을 유지시켜 드립니다.",
    items: ["대리석 연마", "광택 시공", "크리스탈 코팅", "줄눈 처리", "오염 제거"],
    gradient: "linear-gradient(135deg, #292524 0%, #78716c 100%)",
    features: [
      { title: "스크래치 완전 제거", desc: "다이아몬드 연마석으로 흠집과 오염 제거" },
      { title: "크리스탈 코팅", desc: "고광택 크리스탈 코팅으로 반영구 보호" },
      { title: "줄눈 복원", desc: "변색·오염된 줄눈을 깨끗하게 복원" },
      { title: "전문 기술력", desc: "10년 이상 대리석 전문 경력 보유팀" },
    ],
  },
  {
    slug: "cleaning",
    navLabel: "청소방역",
    fullTitle: "청소·방역",
    tag: "Cleaning & Disinfection",
    heroDesc: "입주부터 사무실까지, 위생적인 공간을 만들어드립니다.",
    longDesc:
      "단비누리의 청소·방역 서비스는 단순 청소를 넘어 세균과 바이러스까지 제거합니다. 전문 장비와 친환경 약품으로 가정·사무실·공공시설 어디서나 안전한 공간을 조성합니다.",
    items: ["사무실 청소", "입주 청소", "이사 청소", "방역·소독", "특수 청소"],
    gradient: "linear-gradient(135deg, #14532d 0%, #16a34a 100%)",
    features: [
      { title: "친환경 약품 사용", desc: "인체에 무해한 친환경 인증 약품만 사용" },
      { title: "전문 장비 보유", desc: "고압 세척기·전동 청소 장비로 꼼꼼하게" },
      { title: "방역·소독 전문", desc: "바이러스·세균·곰팡이 방역 인증 업체" },
      { title: "입주·이사 청소", desc: "이사 전후 꼼꼼한 청소로 깨끗한 시작" },
    ],
  },
  {
    slug: "pipe",
    navLabel: "배관청소",
    fullTitle: "배관 청소",
    tag: "Pipe Cleaning",
    heroDesc: "고압 세척으로 막힌 배관과 악취·역류를 완전히 해결합니다.",
    longDesc:
      "오래된 배관 속 이물질과 기름때는 악취와 역류의 원인입니다. 단비누리는 고압 제트 장비로 배관 내부를 완전히 세척하여 깨끗하고 원활한 수류를 되찾아 드립니다.",
    items: ["하수구 청소", "배수관 세척", "욕실 배관", "주방 배관", "고압 세척"],
    gradient: "linear-gradient(135deg, #134e4a 0%, #0d9488 100%)",
    features: [
      { title: "고압 제트 세척", desc: "전문 고압 장비로 배관 내부 완전 세척" },
      { title: "악취·역류 해결", desc: "막힘 원인 제거로 근본적인 해결" },
      { title: "욕실·주방 전문", desc: "욕실·주방·하수구 등 모든 배관 대응" },
      { title: "신속 출동", desc: "긴급 막힘 발생 시 빠른 현장 출동" },
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
  floor: [
    { title: "모든 바닥재 대응", desc: "타일·대리석·원목·PVC 등 재질 무관 시공" },
    { title: "전문 장비로 완전 제거", desc: "일반 청소로는 안 되는 묵은 때 기계 박리" },
    { title: "코팅별 맞춤 제안", desc: "현장 상태에 맞는 왁스·우레탄·에폭시 선택" },
    { title: "시공 후 광택 보장", desc: "완료 후 광택 미달 시 재시공 보장" },
  ],
  marble: [
    { title: "다이아몬드 연마 장비 보유", desc: "최신 다이아몬드 연마석으로 스크래치 제거" },
    { title: "크리스탈 코팅 전문", desc: "반영구 코팅으로 광택·오염 방지 동시 해결" },
    { title: "줄눈 복원 병행", desc: "오염·변색된 줄눈까지 함께 깔끔하게 복원" },
    { title: "재질별 맞춤 공정", desc: "대리석 종류별 적합한 약품·연마 단계 적용" },
  ],
  cleaning: [
    { title: "친환경 인증 약품", desc: "어린이·반려동물도 안전한 친환경 인증 약품만 사용" },
    { title: "전문 청소 장비 보유", desc: "업무용 고압 청소기·전동 장비로 꼼꼼한 시공" },
    { title: "방역 전문 인력", desc: "소독업 등록 업체, 교육 이수 전문 방역팀 운영" },
    { title: "당일 완료 가능", desc: "규모에 따라 당일 완료로 빠른 업무 복귀 지원" },
  ],
  pipe: [
    { title: "고압 제트 장비 직접 보유", desc: "배관 규모·오염도에 맞는 고압 장비 보유" },
    { title: "악취·역류 근본 해결", desc: "표면 처리 아닌 막힘 원인부터 제거" },
    { title: "모든 종류 배관 대응", desc: "욕실·주방·하수구 등 전 배관 시공 경험" },
    { title: "진단 후 견적 제시", desc: "현장 확인 후 명확한 견적, 추가 비용 없음" },
  ],
};

export const serviceSolutions: Record<string, ServiceFeature[]> = {
  aircon: [
    { title: "POINT 01 — 현장 상태 진단 후 맞춤 공정 설계", desc: "에어컨 종류·사용 환경·오염도에 따라 세척 강도와 약품을 달리 적용합니다." },
    { title: "POINT 02 — 검증된 살균제로 세균·곰팡이 제거", desc: "식약처 인증 살균제를 사용해 안전하고 확실하게 제거합니다." },
    { title: "POINT 03 — 시공 후 작동 확인까지 완료", desc: "세척·설치 완료 후 정상 작동 여부를 현장에서 직접 확인하고 마무리합니다." },
  ],
  floor: [
    { title: "POINT 01 — 바닥재 상태 진단 후 공정 설계", desc: "바닥재 종류와 오염 상태를 확인한 뒤 최적의 세척·코팅 공정을 선택합니다." },
    { title: "POINT 02 — 전문 박리제·연마 장비로 완전 제거", desc: "세월이 쌓인 왁스층과 오염을 기계 박리로 완전히 걷어냅니다." },
    { title: "POINT 03 — 코팅 후 광택·내구성 보증", desc: "시공 완료 후 광택 미달 시 재시공, 만족 보장을 원칙으로 합니다." },
  ],
  marble: [
    { title: "POINT 01 — 대리석 종류별 맞춤 연마 공정", desc: "천연·인조 대리석 재질에 따라 연마 단계와 약품을 달리 적용합니다." },
    { title: "POINT 02 — 다이아몬드 그릿 단계별 연마", desc: "단계별 연마로 스크래치와 오염을 순차적으로 제거합니다." },
    { title: "POINT 03 — 크리스탈 코팅으로 반영구 광택 유지", desc: "연마 완료 후 크리스탈 코팅을 적용해 광택을 오래 유지합니다." },
  ],
  cleaning: [
    { title: "POINT 01 — 공간별·오염별 맞춤 청소 계획", desc: "사무실·주방·화장실 등 공간 특성에 맞는 청소 공정을 별도 설계합니다." },
    { title: "POINT 02 — 친환경 고효율 약품으로 안전하게", desc: "화학 자극 없이 세균과 오염을 효과적으로 제거하는 약품을 사용합니다." },
    { title: "POINT 03 — 청소 완료 체크리스트로 품질 보증", desc: "모든 구역 완료 후 체크리스트로 확인하고 결과를 보고합니다." },
  ],
  pipe: [
    { title: "POINT 01 — 배관 상태 정밀 진단 후 시공", desc: "막힘 위치·원인을 파악한 뒤 적합한 장비와 공법을 선택합니다." },
    { title: "POINT 02 — 고압 제트로 이물질 완전 제거", desc: "일반 세척으로 불가능한 묵은 기름때와 이물질도 완전히 제거합니다." },
    { title: "POINT 03 — 시공 후 수류 정상 여부 확인", desc: "완료 후 실제 수류 테스트로 막힘 해결 여부를 현장에서 확인합니다." },
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
  },
  {
    category: "aircon", slug: "new-install", navLabel: "신규 설치",
    heroTitle: "에어컨 신규 설치",
    heroDesc: "배관 설계부터 전기 연결까지, 안전하고 깔끔하게 설치합니다",
    intro: "에어컨 신규 설치는 배관 위치, 실외기 공간, 전기 용량을 꼼꼼히 확인해야 합니다. 단비누리 설치 전문팀이 최적의 위치에 안전하게 시공합니다.",
    painPoints: [
      { title: "어떤 제품·용량이 맞는지 모르겠어요", desc: "현장 측정 후 공간에 맞는 최적 용량·위치 추천" },
      { title: "설치 후 벽 구멍이 크게 나는 게 걱정돼요", desc: "최소 시공으로 깔끔한 마감 처리" },
      { title: "전기·배관 문제가 생길까 불안해요", desc: "유자격 전기기사 + 냉동기사 자격 보유팀 투입" },
    ],
  },
  {
    category: "aircon", slug: "move-install", navLabel: "이전 설치",
    heroTitle: "에어컨 이전 설치",
    heroDesc: "기존 에어컨을 새 공간에, 냉매 손실 없이 안전하게 이전합니다",
    intro: "이전 설치는 냉매 회수·재충전, 배관 신설, 기존 구멍 마감까지 꼼꼼한 작업이 필요합니다. 단비누리는 성능 저하 없이 새 공간에 깔끔하게 재설치합니다.",
    painPoints: [
      { title: "이전 중 냉매가 새거나 고장날까 봐요", desc: "냉매 회수 후 재충전, 전문 장비로 안전 이전" },
      { title: "이전하면 에어컨 수명이 줄어드나요?", desc: "전문팀 정밀 시공으로 성능 그대로 유지" },
      { title: "기존 구멍 마감이 지저분하게 남을까요?", desc: "이전 후 기존 구멍 깔끔하게 마감 포함" },
    ],
  },
  {
    category: "aircon", slug: "system", navLabel: "시스템 에어컨",
    heroTitle: "시스템 에어컨",
    heroDesc: "대형 공간도 균일한 냉난방, 천장형 시스템 에어컨 설치·관리",
    intro: "사무실·상업시설 등 넓은 공간에는 스탠드형보다 천장 매립형 시스템 에어컨이 효율적입니다. 단비누리는 설계부터 설치·유지관리까지 원스톱으로 제공합니다.",
    painPoints: [
      { title: "넓은 사무실에 냉방이 고르지 않아요", desc: "천장형 시스템으로 공간 전체 균일 냉방" },
      { title: "스탠드 에어컨이 공간을 너무 차지해요", desc: "천장 매립형으로 공간 활용도 극대화" },
      { title: "여러 대 에어컨 관리가 너무 번거로워요", desc: "중앙 통합 제어로 효율적인 관리" },
    ],
  },
  {
    category: "aircon", slug: "repair", navLabel: "수리·점검",
    heroTitle: "에어컨 수리·점검",
    heroDesc: "이상 증상 빠른 진단, 당일 수리까지",
    intro: "에어컨이 갑자기 멈추거나 냉방이 약해지면 냉매 부족, 팬 불량, 센서 이상 등 다양한 원인이 있습니다. 단비누리가 정확히 진단하고 빠르게 수리합니다.",
    painPoints: [
      { title: "에어컨이 갑자기 작동을 안 해요", desc: "원인 진단부터 수리까지 당일 처리" },
      { title: "냉방은 되는데 효율이 많이 떨어졌어요", desc: "냉매·필터·센서 정밀 점검 후 수리" },
      { title: "수리비가 얼마나 나올지 몰라 불안해요", desc: "진단 후 견적 먼저, 동의 후 수리 진행" },
    ],
  },
  // ── 바닥청소왁싱 ──
  {
    category: "floor", slug: "wash", navLabel: "바닥 세척",
    heroTitle: "바닥 세척",
    heroDesc: "걸레질로는 안 되는 묵은 오염, 전문 장비로 완전히 제거합니다",
    intro: "오래된 왁스층과 찌든 오염은 일반 청소로는 제거가 불가능합니다. 단비누리는 전문 박리제와 세척 장비로 바닥의 묵은 때를 완전히 걷어냅니다.",
    painPoints: [
      { title: "걸레질·청소기로는 오염이 안 빠져요", desc: "전문 세척제와 기계로 찌든 때 완전 제거" },
      { title: "오랫동안 쌓인 왁스층이 황변했어요", desc: "박리 세척으로 묵은 왁스층 완전 제거" },
      { title: "바닥이 너무 지저분해 손님 맞기 민망해요", desc: "전문 세척 후 새것 같은 바닥으로 복원" },
    ],
  },
  {
    category: "floor", slug: "wax", navLabel: "왁스 시공",
    heroTitle: "왁스 시공",
    heroDesc: "세척 후 왁스 코팅으로 광택과 오염 방지막을 함께 만듭니다",
    intro: "왁스 시공은 바닥에 보호막을 형성해 광택을 높이고 오염을 차단합니다. 균일한 두께로 도포해야 얼룩 없이 오래 지속됩니다.",
    painPoints: [
      { title: "세척 후 바닥이 금방 다시 오염돼요", desc: "왁스 코팅으로 오염 방지막 형성" },
      { title: "바닥 광택이 없어 공간이 칙칙해 보여요", desc: "왁스 시공 후 광택으로 공간이 밝아짐" },
      { title: "왁스를 직접 발랐더니 얼룩이 생겼어요", desc: "전문 도포 장비로 균일한 두께 시공" },
    ],
  },
  {
    category: "floor", slug: "urethane", navLabel: "우레탄 코팅",
    heroTitle: "우레탄 코팅",
    heroDesc: "높은 내구성이 필요한 공간, 우레탄 코팅으로 수명을 늘립니다",
    intro: "유동 인구가 많거나 무거운 장비가 다니는 공간은 일반 왁스로는 부족합니다. 우레탄 코팅은 내마모·내화학성이 뛰어나 바닥 수명을 크게 연장합니다.",
    painPoints: [
      { title: "왁스가 금방 닳아 재시공이 자주 필요해요", desc: "우레탄 코팅으로 내구성 대폭 향상" },
      { title: "유동 인구가 많아 바닥이 빨리 닳아요", desc: "내마모 우레탄으로 수명 연장" },
      { title: "화학약품 사용 공간이라 바닥이 쉽게 손상돼요", desc: "내화학성 우레탄으로 바닥 보호" },
    ],
  },
  {
    category: "floor", slug: "epoxy", navLabel: "에폭시 시공",
    heroTitle: "에폭시 시공",
    heroDesc: "공장·창고·주차장, 내구성이 최우선인 공간을 위한 바닥 솔루션",
    intro: "에폭시는 콘크리트 바닥의 먼지 발생을 막고 내화학성·내마모성을 높이는 산업용 코팅재입니다. 청결과 안전을 동시에 요구하는 공간에 적합합니다.",
    painPoints: [
      { title: "공장·창고 바닥 먼지가 너무 많아요", desc: "에폭시로 바닥 표면 완전 밀봉" },
      { title: "바닥 균열·파임이 있어 안전이 걱정돼요", desc: "에폭시 충전 후 평탄화 시공" },
      { title: "바닥이 미끄러워 작업자 사고가 걱정돼요", desc: "논슬립 에폭시로 미끄럼 방지" },
    ],
  },
  {
    category: "floor", slug: "nonslip", navLabel: "논슬립 처리",
    heroTitle: "논슬립 처리",
    heroDesc: "미끄럼 사고를 막는 논슬립 코팅·테이프 시공",
    intro: "계단·복도·욕실 등 물기가 있는 공간의 미끄럼 사고는 논슬립 처리로 예방할 수 있습니다. 안전 기준에 맞는 논슬립 코팅·테이프·필름을 제공합니다.",
    painPoints: [
      { title: "비 오는 날 계단·복도가 너무 미끄러워요", desc: "논슬립 처리로 미끄럼 사고 예방" },
      { title: "어린이·노인 시설이라 미끄럼이 특히 걱정돼요", desc: "안전 기준에 맞는 논슬립 시공" },
      { title: "기존 미끄럼 방지 테이프가 너무 지저분해요", desc: "깔끔한 논슬립 코팅으로 교체" },
    ],
  },
  // ── 대리석 코팅연마 ──
  {
    category: "marble", slug: "grind", navLabel: "대리석 연마",
    heroTitle: "대리석 연마",
    heroDesc: "다이아몬드 연마석으로 스크래치를 없애고 본래 표면을 되찾습니다",
    intro: "대리석 표면의 스크래치와 흐릿함은 다이아몬드 연마 장비로만 완전히 제거할 수 있습니다. 단비누리는 그릿 단계별 연마로 매끄러운 표면을 복원합니다.",
    painPoints: [
      { title: "대리석 표면에 스크래치가 많이 생겼어요", desc: "다이아몬드 연마로 스크래치 완전 제거" },
      { title: "오래된 대리석이 흐릿하고 광택이 없어요", desc: "연마 후 본래 대리석 광택 복원" },
      { title: "관리 업체마다 방법이 달라 믿기 어려워요", desc: "표준화된 연마 공정으로 일관된 품질" },
    ],
  },
  {
    category: "marble", slug: "polish", navLabel: "광택 시공",
    heroTitle: "광택 시공",
    heroDesc: "연마 후 전문 광택제로 대리석 본연의 윤기를 완성합니다",
    intro: "연마만으로는 오래가지 않습니다. 전문 광택제를 균일하게 도포해야 광택이 오래 유지됩니다. 단비누리는 공간 전체의 대리석 광택을 균일하게 완성합니다.",
    painPoints: [
      { title: "연마는 했는데 광택이 오래가지 않아요", desc: "광택제 시공으로 광택 지속 기간 연장" },
      { title: "공간 고급스러움을 더 높이고 싶어요", desc: "전문 광택 시공으로 고급 인테리어 완성" },
      { title: "바닥·계단·기둥 대리석 광택이 제각각이에요", desc: "공간 전체 균일한 광택 시공" },
    ],
  },
  {
    category: "marble", slug: "crystal", navLabel: "크리스탈 코팅",
    heroTitle: "크리스탈 코팅",
    heroDesc: "반영구적인 오염 방지막으로 대리석을 오래 보호합니다",
    intro: "크리스탈 코팅은 대리석 표면에 유리막을 형성해 광택을 유지하면서 오염과 스크래치로부터 보호합니다. 자주 광택을 맡기는 비용과 수고를 줄여드립니다.",
    painPoints: [
      { title: "광택 시공 후에도 오염이 금방 생겨요", desc: "크리스탈 코팅으로 오염 방지막 형성" },
      { title: "자주 광택을 맡기는 비용이 부담돼요", desc: "코팅으로 광택 유지 기간 대폭 연장" },
      { title: "대리석이 오염에 너무 취약해요", desc: "크리스탈 코팅으로 반영구 보호" },
    ],
  },
  {
    category: "marble", slug: "grout", navLabel: "줄눈 처리",
    heroTitle: "줄눈 처리",
    heroDesc: "변색·오염된 줄눈을 깨끗하게 복원하고 방균·방수 처리합니다",
    intro: "줄눈은 타일·대리석 사이 틈을 채우는 부분으로, 오염되면 전체 공간이 지저분해 보입니다. 기존 줄눈을 제거하고 방균·방수 기능의 새 줄눈으로 복원합니다.",
    painPoints: [
      { title: "줄눈이 검게 변색돼 바닥이 지저분해요", desc: "줄눈 제거 후 새 줄눈으로 깔끔하게 복원" },
      { title: "줄눈에 곰팡이가 계속 생겨요", desc: "방균 줄눈 시공으로 곰팡이 재발 방지" },
      { title: "줄눈 틈이 벌어져 물이 스며들어요", desc: "방수 줄눈 처리로 누수 차단" },
    ],
  },
  {
    category: "marble", slug: "stain", navLabel: "오염 제거",
    heroTitle: "오염 제거",
    heroDesc: "커피·녹·기름 등 일반 청소로 지워지지 않는 얼룩을 전문 약품으로 제거합니다",
    intro: "대리석은 강한 산성·알칼리 약품에 손상되기 쉽습니다. 단비누리는 대리석 전용 약품으로 재질 손상 없이 얼룩만 안전하게 제거합니다.",
    painPoints: [
      { title: "커피·음료 얼룩이 지워지지 않아요", desc: "대리석 전용 약품으로 깊은 오염 제거" },
      { title: "대리석이 녹·철분에 오염됐어요", desc: "철분 제거제로 녹 얼룩 깔끔하게 제거" },
      { title: "강한 약품을 써서 대리석이 손상됐어요", desc: "전문 약품으로 손상 없이 오염만 제거" },
    ],
  },
  // ── 청소방역 ──
  {
    category: "cleaning", slug: "office", navLabel: "사무실 청소",
    heroTitle: "사무실 청소",
    heroDesc: "직원이 아닌 전문팀이 청소, 업무 효율과 위생을 함께 높입니다",
    intro: "사무실 청소는 책상·PC 주변, 화장실, 주방 등 공간별로 오염 특성이 다릅니다. 단비누리는 구역별 맞춤 청소로 일관된 위생 환경을 만들어 드립니다.",
    painPoints: [
      { title: "믿을 만한 정기 청소 업체를 찾기 어려워요", desc: "계약 후 담당 팀 고정, 꼼꼼한 정기 관리" },
      { title: "직원이 직접 청소해 업무 효율이 떨어져요", desc: "전문팀에 맡기고 직원은 본업에 집중" },
      { title: "화장실·주방이 항상 위생 문제예요", desc: "청소 취약 구역 중점 관리로 위생 유지" },
    ],
  },
  {
    category: "cleaning", slug: "movein", navLabel: "입주 청소",
    heroTitle: "입주 청소",
    heroDesc: "새집의 공사 먼지·냄새를 완전히 제거하고 깨끗하게 시작합니다",
    intro: "신축·인테리어 후 공간에는 시멘트 먼지, 자재 냄새, 도장 찌꺼기가 남습니다. 입주 전 전문 청소로 안전하고 쾌적한 환경을 만들어 드립니다.",
    painPoints: [
      { title: "새집인데 미세먼지·자재 냄새가 심해요", desc: "입주 청소로 공사 먼지·냄새 완전 제거" },
      { title: "구석구석까지 직접 청소하기 너무 힘들어요", desc: "전문팀이 모든 구역 꼼꼼하게 청소" },
      { title: "이사 일정에 맞춰 빨리 끝내야 해요", desc: "일정에 맞춰 당일 완료 서비스" },
    ],
  },
  {
    category: "cleaning", slug: "moveout", navLabel: "이사 청소",
    heroTitle: "이사 청소",
    heroDesc: "이사 후 남은 오염을 깔끔하게 정리합니다",
    intro: "이사 후 공간은 가전·가구를 옮기면서 생긴 자국, 숨어 있던 먼지 등 다양한 오염이 드러납니다. 단비누리가 이사 후 공간 전체를 말끔하게 청소합니다.",
    painPoints: [
      { title: "이사 후 공간이 엉망이라 청소할 엄두가 안 나요", desc: "이사 후 발생한 오염 전부 청소" },
      { title: "보증금 반환 때 청소 상태로 분쟁이 생길까 봐요", desc: "꼼꼼한 이사 청소로 분쟁 예방" },
      { title: "냉장고 뒤·세탁기 아래 등 손이 안 닿는 곳이 걱정돼요", desc: "가전 이동 후 숨은 오염까지 청소" },
    ],
  },
  {
    category: "cleaning", slug: "disinfect", navLabel: "방역·소독",
    heroTitle: "방역·소독",
    heroDesc: "세균·바이러스까지 제거하는 전문 방역 서비스",
    intro: "방역은 단순 살충을 넘어 공기 중 바이러스·세균까지 제거하는 작업입니다. 소독업 등록 전문팀이 약품 종류·유효기간을 명확히 안내하며 시공합니다.",
    painPoints: [
      { title: "감기·독감이 사무실에 자꾸 퍼져요", desc: "바이러스 방역으로 전파 차단" },
      { title: "외부 방문객이 많아 위생이 걱정돼요", desc: "정기 방역으로 위생 안전 공간 유지" },
      { title: "방역 효과가 얼마나 지속되는지 모르겠어요", desc: "사용 약품·유효기간 명확히 안내" },
    ],
  },
  {
    category: "cleaning", slug: "special", navLabel: "특수 청소",
    heroTitle: "특수 청소",
    heroDesc: "화재·수해·쓰레기 집 등 일반 청소로 불가능한 극한 오염을 해결합니다",
    intro: "화재 그을음, 침수 피해, 장기 방치 공간은 일반 청소 업체가 대응하기 어렵습니다. 특수 장비와 훈련된 인력으로 어떤 상황이든 깨끗하게 복원합니다.",
    painPoints: [
      { title: "화재·수해로 일반 청소가 불가능해요", desc: "특수 장비로 극심한 오염 완전 제거" },
      { title: "오랫동안 방치돼 쓰레기가 가득 찼어요", desc: "폐기물 처리부터 청소까지 원스톱" },
      { title: "냄새가 너무 심해 들어가기도 힘들어요", desc: "탈취·살균 처리로 완전한 공간 복원" },
    ],
  },
  // ── 배관청소 ──
  {
    category: "pipe", slug: "drain", navLabel: "하수구 청소",
    heroTitle: "하수구 청소",
    heroDesc: "하수구 악취와 역류, 원인부터 완전히 제거합니다",
    intro: "하수구 악취와 역류는 이물질 누적이 원인입니다. 단비누리는 고압 세척으로 막힌 부분을 완전히 뚫고 악취 발생 원인까지 제거합니다.",
    painPoints: [
      { title: "하수구에서 악취가 계속 올라와요", desc: "막힌 곳 제거와 함께 악취 원인까지 해결" },
      { title: "물이 잘 안 내려가고 역류해요", desc: "고압 세척으로 막힘 완전 해결" },
      { title: "뚫어도 자꾸 또 막혀요", desc: "임시방편 아닌 근본 원인부터 제거" },
    ],
  },
  {
    category: "pipe", slug: "pipe-wash", navLabel: "배수관 세척",
    heroTitle: "배수관 세척",
    heroDesc: "기름때·이물질로 좁아진 배관, 고압 세척으로 원래대로 복원합니다",
    intro: "배수관 내부에 쌓인 기름때와 이물질은 서서히 배수 흐름을 방해합니다. 정기적인 고압 세척으로 배관이 완전히 막히기 전에 예방적으로 관리합니다.",
    painPoints: [
      { title: "배수가 느려지고 냄새가 나기 시작했어요", desc: "초기 오염 단계에서 세척으로 예방" },
      { title: "기름때가 쌓여 배관이 좁아진 것 같아요", desc: "고압 제트로 기름때 완전 제거" },
      { title: "오래된 건물이라 배관 상태가 걱정돼요", desc: "진단 후 상태에 맞는 세척 공정 적용" },
    ],
  },
  {
    category: "pipe", slug: "bathroom", navLabel: "욕실 배관",
    heroTitle: "욕실 배관 청소",
    heroDesc: "욕조·세면대·변기, 욕실 전체 배관을 깔끔하게 세척합니다",
    intro: "욕실 배관은 머리카락, 비누 찌꺼기, 세면 용품 잔여물이 쌓입니다. 단비누리는 욕실 전체 배관을 점검하고 막힌 곳을 모두 세척합니다.",
    painPoints: [
      { title: "욕조·세면대 물이 천천히 빠져요", desc: "머리카락·비누 찌꺼기 제거로 배수 정상화" },
      { title: "욕실에서 하수 냄새가 올라와요", desc: "트랩·배관 세척으로 냄새 원인 제거" },
      { title: "변기 물이 잘 안 내려가요", desc: "변기 막힘 전문 처리로 완전 해결" },
    ],
  },
  {
    category: "pipe", slug: "kitchen", navLabel: "주방 배관",
    heroTitle: "주방 배관 청소",
    heroDesc: "음식물·기름 찌꺼기로 막힌 주방 배관, 쾌적하게 복원합니다",
    intro: "주방 배관은 기름과 음식물 찌꺼기가 쌓여 막히기 가장 쉬운 공간입니다. 특히 식당·구내식당은 정기 세척이 필수입니다.",
    painPoints: [
      { title: "싱크대 물이 잘 안 빠지고 냄새가 나요", desc: "음식물·기름 찌꺼기 제거로 쾌적한 주방" },
      { title: "배관에서 기름 냄새가 심해요", desc: "기름때 완전 제거로 냄새 차단" },
      { title: "식당인데 배관 막힘이 자꾸 반복돼요", desc: "정기 세척 계약으로 재발 방지" },
    ],
  },
  {
    category: "pipe", slug: "highpress", navLabel: "고압 세척",
    heroTitle: "고압 세척",
    heroDesc: "일반 세척 한계를 넘는 강력한 고압 제트 세척",
    intro: "심하게 막힌 배관, 오래 방치된 하수관, 대형 시설 배관망은 일반 세척으로는 해결이 어렵습니다. 단비누리의 고압 제트 장비가 강력하게 해결합니다.",
    painPoints: [
      { title: "기존 세척으로는 막힘이 해결이 안 됐어요", desc: "고압 제트로 일반 세척 한계 초월" },
      { title: "오래 방치돼 배관 내부가 심하게 막혔어요", desc: "고압 파워로 완전 관통 세척" },
      { title: "넓은 시설 전체 배관을 한번에 세척하고 싶어요", desc: "대형 고압 장비로 대규모 시설 한번에 처리" },
    ],
  },
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

// ── 히어로 슬라이더 (6칸) ──
export interface HeroSlide {
  tag: string;
  heading: string;
  sub: string;
  gradient: string;
  cta: string;
}

export const heroSlides: HeroSlide[] = [
  {
    tag: "시설관리 전문기업",
    heading: "바닥부터 배관까지\n시설관리 전부 맡기세요",
    sub: "단비누리와 함께 공간의 가치를 높이세요.",
    gradient: "linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 100%)",
    cta: "견적 문의하기",
  },
  {
    tag: "에어컨 살균세척·설치",
    heading: "쾌적한 공기\n에어컨 살균세척",
    sub: "분해 살균세척으로 냄새와 곰팡이를 완전히 제거합니다.",
    gradient: "linear-gradient(135deg, #0369a1 0%, #0ea5e9 100%)",
    cta: "견적 문의하기",
  },
  {
    tag: "바닥 세척·왁스 시공",
    heading: "광채 나는 바닥\n바닥청소왁싱",
    sub: "오래된 바닥의 찌든 때를 벗겨내고 광택을 되살립니다.",
    gradient: "linear-gradient(135deg, #c2410c 0%, #f97316 100%)",
    cta: "견적 문의하기",
  },
  {
    tag: "대리석 코팅·연마",
    heading: "새것 같은 대리석\n코팅연마 시공",
    sub: "마모된 대리석을 연마·광택해 완벽하게 복원합니다.",
    gradient: "linear-gradient(135deg, #292524 0%, #78716c 100%)",
    cta: "견적 문의하기",
  },
  {
    tag: "청소·방역",
    heading: "깨끗하고 안전한 공간\n청소·방역 서비스",
    sub: "입주부터 사무실까지, 위생적인 공간을 만들어드립니다.",
    gradient: "linear-gradient(135deg, #14532d 0%, #16a34a 100%)",
    cta: "견적 문의하기",
  },
  {
    tag: "배관 청소",
    heading: "막힘 없는 배관\n고압 배관청소",
    sub: "고압 세척으로 막힌 배관과 악취·역류를 해결합니다.",
    gradient: "linear-gradient(135deg, #134e4a 0%, #0d9488 100%)",
    cta: "견적 문의하기",
  },
];

// ── 브랜드 스토리 ──
export const brandVision = {
  label: "Vision",
  title: "공간의 질을 최상의 기준으로 케어합니다",
  desc: "단비누리는 전문화된 시설관리 서비스로 모든 공간이 언제나 최상의 상태를 유지할 수 있도록 책임집니다. 표준화된 공정과 검증된 전문 인력으로 어디서나 균일한 품질을 제공합니다.",
};

export const brandMission = {
  label: "Mission",
  title: "통합 솔루션으로 고객의 공간을 지속적으로 케어",
  desc: "바닥 세척부터 에어컨 살균, 대리석 연마, 방역, 배관 청소까지 — 한 회사에서 모든 시설관리를 해결합니다. 고객이 본업에 집중할 수 있도록, 공간 관리는 단비누리에 맡기세요.",
};

export const brandStory = {
  label: "Our Story",
  title: "깨끗한 공간이 곧 삶의 질",
  paragraphs: [
    "단비누리는 '깨끗한 공간이 사람의 삶을 바꾼다'는 신념에서 출발했습니다. 단순한 청소를 넘어, 공간의 위생과 기능을 함께 책임지는 종합 시설관리 기업으로 성장해왔습니다.",
    "공공기관과 기업 시설을 수없이 관리하며 쌓아온 경험과 노하우를 바탕으로, 지금도 매일 더 나은 서비스를 위해 전진합니다. 고객의 공간에 내 집처럼 정성을 다하는 것 — 그것이 단비누리의 일하는 방식입니다.",
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

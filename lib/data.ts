// ── 사이트 공통 정보 (실제 회사 고유정보 아님 / 임시값) ──
export const siteConfig = {
  name: "단비누리",
  tagline: "에어컨 살균세척 · 석재보수 전문",
  phone: "02-6448-7221",
  hours: "평일 10:00 ~ 18:00 (주말·공휴일 휴무)",
  email: "danbinuri25@danbinuri.kr",
  ceo: "이영기",
  address: "서울특별시 서초구 논현로11길 49, 2층 (양재동)",
  businessNumber: "490-81-03515",
  copyright: "© 2026 단비누리. All rights reserved.",
  // 견적 문의가 접수될 이메일 (사이트 자체 폼 사용 시)
  quoteEmail: "danbinuri25@danbinuri.kr",
  // 견적 문의는 사이트 자체 페이지(/inquiry)로 연결됩니다.
  // (구글폼으로 되돌리려면 아래 주석의 주소를 quoteFormUrl 값에 넣으세요.)
  // "https://docs.google.com/forms/d/e/1FAIpQLScAOM7_P70-Q5li8ovpTHFghZteJ4xemZzZpjW0BhA6iQQJtw/viewform?embedded=true"
  quoteFormUrl: "",
};

// 상단 유틸 바 - 패밀리 사이트
export const familySites = ["의류몰", "사무용품몰", "산업용품몰"];

// 헤더 우측 간단 메뉴
export const utilNav = [
  { href: "/inquiry", label: "견적문의" },
  { href: "/qna", label: "고객지원" },
];

// ── 헤더 메인 네비게이션 (표시 순서대로) ──
export interface NavItem {
  label: string;
  href: string;
}

export const mainNav: NavItem[] = [
  { label: "회사소개", href: "/" },
  { label: "에어컨", href: "/services/aircon" },
  { label: "공조기", href: "/services/hvac" },
  { label: "석재보수", href: "/services/stone" },
  { label: "시공사례", href: "/cases" },
  { label: "고객문의", href: "/qna" },
];

// ── 서비스 전용 페이지 데이터 ──
export interface ServiceFeature {
  title: string;
  desc: string;
}

export interface ServicePageData {
  slug: string;
  navLabel: string;
  tag: string;
}

export const servicePages: ServicePageData[] = [
  { slug: "aircon", navLabel: "에어컨 유지관리", tag: "Air Conditioning Care" },
  { slug: "hvac", navLabel: "공조기 유지관리", tag: "Air Handling Unit Care" },
  { slug: "stone", navLabel: "석재 유지관리", tag: "Stone Care" },
];

// ── 서비스별 공통 이유 4개 (세부 페이지 공유) ──
export const serviceReasons: Record<string, ServiceFeature[]> = {
  aircon: [
    { title: "완전 분해 살균세척", desc: "외부 케이스부터 열교환기까지 분해 후 전문 약품으로 살균" },
    { title: "냉방 효율 회복 보장", desc: "막힌 필터·열교환기 세척으로 냉방 성능 되살림" },
    { title: "설치·이전·AS 원스톱", desc: "설치부터 사후 관리까지 한 팀이 책임" },
    { title: "공인 기술 인력 투입", desc: "전기기사·냉동기사 자격 보유 전문팀 시공" },
  ],
  hvac: [
    { title: "AHU 내부 완전 세척", desc: "패널 내부부터 송풍팬까지 꼼꼼히 세척해 환기 성능 회복" },
    { title: "필터·핀코일 통합 관리", desc: "필터 교체부터 핀코일 세척까지 한 팀이 책임 관리" },
    { title: "정기 점검 이력 관리", desc: "점검·세척 주기와 이력을 기록해 체계적으로 관리" },
    { title: "건물 전체 일괄 관리", desc: "여러 대의 공조기도 일괄 점검·세척으로 효율적으로 관리" },
  ],
  stone: [
    { title: "바닥·외벽 통합 관리", desc: "바닥 연마부터 외벽 세척·발수까지 한 팀이 책임 관리" },
    { title: "다이아몬드 연마 장비 보유", desc: "최신 장비로 거울 같은 광택 구현" },
    { title: "파손 보수·줄눈 전문", desc: "깨짐·파임·균열과 벌어진 줄눈을 전용 재료로 복구" },
    { title: "오염 방지 코팅 관리", desc: "침투성 코팅으로 오염물 침투를 예방하고 깨끗함을 오래 유지" },
  ],
};

export const serviceSolutions: Record<string, ServiceFeature[]> = {
  aircon: [
    { title: "POINT 01 — 현장 상태 진단 후 맞춤 공정 설계", desc: "에어컨 종류·사용 환경·오염도에 따라 세척 강도와 약품을 달리 적용합니다." },
    { title: "POINT 02 — 검증된 살균제로 세균·곰팡이 제거", desc: "식약처 인증 살균제를 사용해 안전하고 확실하게 제거합니다." },
    { title: "POINT 03 — 시공 후 작동 확인까지 완료", desc: "세척·설치 완료 후 정상 작동 여부를 현장에서 직접 확인하고 마무리합니다." },
  ],
  hvac: [
    { title: "POINT 01 — 공조기 상태 진단 후 공정 설계", desc: "내부 오염도·필터 상태·핀코일 상태를 확인한 뒤 세척·관리 공정을 설계합니다." },
    { title: "POINT 02 — 내부 세척·필터·핀코일 통합 관리", desc: "내부 세척과 필터 교체, 핀코일 세척을 함께 진행해 환기 효율을 종합적으로 회복합니다." },
    { title: "POINT 03 — 시공 후 환기 성능 확인까지 완료", desc: "완료 후 송풍량과 환기 성능을 직접 확인하고 마무리합니다." },
  ],
  stone: [
    { title: "POINT 01 — 석재 상태 진단 후 관리 공정 설계", desc: "바닥·외벽 상태와 손상 정도를 확인한 뒤 맞춤 관리 공정을 설계합니다." },
    { title: "POINT 02 — 연마·세척·보수·코팅 통합 시공", desc: "연마 광택, 외벽 세척·발수, 파손 보수·줄눈, 오염 방지 코팅을 상황에 맞게 진행합니다." },
    { title: "POINT 03 — 시공 후 상태 확인까지 완료", desc: "완료 후 광택·표면 상태를 직접 확인하고 마무리합니다." },
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

// ── 서비스 세부 페이지 ──
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
  // ── 에어컨 유지관리 ──
  {
    category: "aircon", slug: "filter-wash", navLabel: "필터·세척 관리",
    heroTitle: "에어컨 필터·세척 관리",
    heroDesc: "필터 청소부터 완전 분해 살균세척까지, 정기 관리로 쾌적한 공기를 유지합니다",
    intro: "에어컨 필터에 쌓인 먼지와 내부 곰팡이는 방치하면 냉방 효율 저하와 실내 공기 오염으로 이어집니다. 단비누리는 필터 세척부터 완전 분해 살균세척까지 정기적인 관리로 쾌적한 상태를 유지합니다.",
    painPoints: [
      { title: "필터 청소를 언제 해야 할지 모르겠어요", desc: "사용 환경에 맞춘 정기 점검·세척 주기를 제안해 드립니다" },
      { title: "에어컨을 켜면 퀴퀴한 냄새가 나요", desc: "내부 곰팡이와 세균이 원인, 완전 분해 살균으로 해결" },
      { title: "청소를 맡겼는데 냄새가 또 나요", desc: "표면만 닦는 청소는 한계, 분해 후 내부까지 살균" },
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
    category: "aircon", slug: "maintenance", navLabel: "유지보수",
    heroTitle: "에어컨 유지보수",
    heroDesc: "이상 증상 빠른 진단부터 정기 점검까지, 안정적인 사용을 책임집니다",
    intro: "에어컨이 갑자기 멈추거나 냉방이 약해지면 냉매 부족, 팬 불량, 센서 이상 등 다양한 원인이 있습니다. 단비누리는 정확한 진단과 정기 점검으로 고장을 미리 예방하고 빠르게 조치합니다.",
    painPoints: [
      { title: "에어컨이 갑자기 작동을 안 해요", desc: "원인 진단부터 수리까지 당일 처리" },
      { title: "냉방은 되는데 효율이 많이 떨어졌어요", desc: "냉매·필터·센서 정밀 점검 후 수리" },
      { title: "수리비가 얼마나 나올지 몰라 불안해요", desc: "진단 후 견적 먼저, 동의 후 수리 진행" },
    ],
    heroImage: "/images/aircon-repair-hero.jpg",
  },
  // ── 공조기 유지관리 ──
  {
    category: "hvac", slug: "clean", navLabel: "내부 세척",
    heroTitle: "공조기 내부 세척",
    heroDesc: "공조기 내부에 쌓인 먼지와 오염물을 완전 세척해 환기 성능을 되살립니다",
    intro: "건물 공조기(AHU) 내부는 장기간 사용하면 먼지, 오염물, 미생물이 쌓여 실내 공기질을 악화시킵니다. 단비누리는 내부 패널부터 송풍 팬까지 꼼꼼히 세척해 환기 성능과 위생을 함께 회복시킵니다.",
    painPoints: [
      { title: "환기구에서 먼지 냄새가 나요", desc: "공조기 내부 오염이 원인, 완전 세척으로 냄새 제거" },
      { title: "공조기 청소를 언제 했는지 기억이 안 나요", desc: "정기 점검·세척 주기를 제안하고 이력을 관리해 드립니다" },
      { title: "여러 대를 한 번에 관리하고 싶어요", desc: "건물 전체 공조기를 일괄 점검·세척, 효율적인 관리 가능" },
    ],
  },
  {
    category: "hvac", slug: "filter", navLabel: "필터 관리",
    heroTitle: "공조기 필터 관리",
    heroDesc: "막힌 필터를 정기 교체·세척해 환기 효율과 공기질을 지킵니다",
    intro: "공조기 필터가 먼지로 막히면 송풍량이 줄고 전력 소모가 늘어납니다. 단비누리는 필터 상태를 점검해 세척 또는 교체 시기를 정확히 안내하고, 최적의 환기 효율을 유지합니다.",
    painPoints: [
      { title: "필터 교체 시기를 놓쳐 환기가 잘 안 돼요", desc: "정기 점검으로 교체·세척 시기를 미리 안내해 드립니다" },
      { title: "필터 종류가 많아 뭘 써야 할지 모르겠어요", desc: "공조기 사양에 맞는 최적의 필터를 선정해 드립니다" },
      { title: "필터 관리 후에도 먼지가 계속 나와요", desc: "필터뿐 아니라 내부 전체 오염까지 함께 점검·관리" },
    ],
  },
  {
    category: "hvac", slug: "fin-coil", navLabel: "핀코일 관리",
    heroTitle: "공조기 핀코일 관리",
    heroDesc: "핀코일에 쌓인 먼지와 오염을 세척해 냉난방 효율을 회복합니다",
    intro: "공조기 핀코일(열교환 코일)에 먼지와 이물질이 쌓이면 열교환 효율이 떨어지고 냉난방 성능이 저하됩니다. 단비누리는 전용 장비로 핀코일을 손상 없이 세척해 본래의 효율을 되살립니다.",
    painPoints: [
      { title: "냉난방 효율이 예전 같지 않아요", desc: "핀코일 오염이 주요 원인, 전용 세척으로 효율 회복" },
      { title: "핀코일이 손상될까 걱정돼요", desc: "핀 손상 없는 전용 장비와 세척 공정으로 안전하게 시공" },
      { title: "관리 이력을 남기고 싶어요", desc: "점검·세척 이력을 기록해 체계적인 관리를 도와드립니다" },
    ],
  },
  // ── 석재 유지관리 ──
  {
    category: "stone", slug: "floor-care", navLabel: "바닥 석재 유지 관리",
    heroTitle: "바닥 석재 유지 관리",
    heroDesc: "흐려진 대리석 바닥을 단계별 연마·광택해 거울 같은 표면으로 유지합니다",
    intro: "대리석 바닥은 시간이 지나면 광택을 잃고 흐려집니다. 단비누리는 다이아몬드 패드로 단계별 연마한 뒤 광택 작업을 진행해 본래의 깊은 광택을 되살리고 꾸준히 유지 관리합니다.",
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
    category: "stone", slug: "facade-wash", navLabel: "외벽 세척 및 발수 작업",
    heroTitle: "외벽 세척 및 발수 작업",
    heroDesc: "오염된 석재 외벽을 세척하고 발수 코팅으로 오염과 백화 현상을 예방합니다",
    intro: "석재 외벽은 시간이 지나면 오염물과 이끼가 쌓이고, 수분 침투로 백화 현상이 발생할 수 있습니다. 단비누리는 전용 세척으로 외벽을 깨끗하게 되살리고, 발수 코팅으로 오염과 수분 침투를 예방합니다.",
    painPoints: [
      { title: "외벽에 검은 오염과 이끼가 껴 지저분해요", desc: "전용 세척제로 오염물을 제거해 깨끗한 외관을 되살립니다" },
      { title: "비만 오면 벽에 하얀 얼룩(백화)이 생겨요", desc: "발수 코팅으로 수분 침투를 막아 백화 현상을 예방합니다" },
      { title: "세척 후에도 금방 다시 오염돼요", desc: "발수 작업을 함께 진행해 오염 재발을 줄입니다" },
    ],
  },
  {
    category: "stone", slug: "repair-grout", navLabel: "파손 보수 및 줄눈관리",
    heroTitle: "석재 파손 보수 및 줄눈관리",
    heroDesc: "깨짐·파임·균열과 벌어진 줄눈까지, 손상된 석재를 원상 복구합니다",
    intro: "석재의 크랙, 파임, 들뜸과 벌어지거나 오염된 줄눈은 방치하면 점점 커지고 물이 스며들 수 있습니다. 단비누리는 손상 부위를 전용 충전재로 메우고 줄눈을 재시공해 미관과 방수를 함께 복원합니다.",
    painPoints: [
      { title: "대리석이 깨지거나 파였어요", desc: "전용 충전재로 메운 뒤 평탄하게 연마" },
      { title: "줄눈이 벌어지고 깨져 물이 스며들어요", desc: "기존 줄눈 제거 후 전용 재료로 재시공해 방수 복원" },
      { title: "부분 보수 자국이 너무 티가 나요", desc: "주변과 동일하게 연마·광택해 자연스럽게 마감" },
    ],
    heroImage: "/images/stone-repair-hero.jpg",
    beforeImage: "/images/stone-repair-before.jpg",
    afterImage: "/images/stone-repair-after.jpg",
  },
  {
    category: "stone", slug: "stain-prevention", navLabel: "오염 방지 관리",
    heroTitle: "석재 오염 방지 관리",
    heroDesc: "오염물 침투를 막는 코팅 관리로 석재의 깨끗한 상태를 오래 유지합니다",
    intro: "대리석은 다공성 재질이라 오염물이 스며들면 얼룩이 남기 쉽습니다. 단비누리는 침투성 코팅제로 표면을 보호해 오염물이 스며들기 전에 닦아낼 수 있도록 관리합니다.",
    painPoints: [
      { title: "커피나 음료를 흘리면 얼룩이 잘 안 빠져요", desc: "침투성 코팅으로 오염물이 스며들기 전에 표면에서 닦아낼 수 있게 보호합니다" },
      { title: "통행량이 많아 자꾸 더러워져요", desc: "정기 코팅 관리로 오염 저항력을 유지합니다" },
      { title: "코팅이 얼마나 유지되는지 궁금해요", desc: "시공 환경에 맞는 코팅 주기를 안내하고 재시공해 드립니다" },
    ],
  },
];

// ── 히어로 슬라이더 ──
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

// ── 뉴스 & 정보 (인증 탭) ──
export interface CertBadge {
  label: string;
  image: string;
}

export const certBadges: CertBadge[] = [
  { label: "중소기업 확인", image: "/images/cert-sme.jpg" },
  { label: "창업기업 확인", image: "/images/cert-startup.jpg" },
  { label: "여성기업 확인", image: "/images/cert-women.jpg" },
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

// ── 견적문의 폼: 서비스 선택 항목 ──
export const inquiryServices = [
  "에어컨 필터·세척 관리",
  "에어컨 설치",
  "에어컨 유지보수",
  "공조기 내부 세척",
  "공조기 필터 관리",
  "공조기 핀코일 관리",
  "바닥 석재 유지 관리",
  "석재 외벽 세척 및 발수 작업",
  "석재 파손 보수 및 줄눈관리",
  "석재 오염 방지 관리",
  "기타 문의",
];

// ── 자주 묻는 질문 (FAQ) ──
export interface FaqItem {
  category: string;
  q: string;
  a: string;
}

export const faqs: FaqItem[] = [
  {
    category: "에어컨",
    q: "에어컨 살균세척은 얼마나 자주 하는 게 좋나요?",
    a: "가정용은 사용이 많은 여름철 전 연 1회, 사무실·상가처럼 가동 시간이 긴 곳은 연 2회를 권장합니다. 곰팡이·냄새가 이미 있다면 계절과 관계없이 세척을 권합니다.",
  },
  {
    category: "에어컨",
    q: "세척 시간은 얼마나 걸리나요?",
    a: "벽걸이형 1대 기준 약 1~1.5시간, 스탠드형·천장형(시스템)은 구조상 2시간 이상 소요될 수 있습니다. 대수와 오염도에 따라 달라집니다.",
  },
  {
    category: "에어컨",
    q: "청소를 맡겼는데 냄새가 또 나요. 뭐가 다른가요?",
    a: "표면만 닦는 청소와 달리, 단비누리는 필터·열교환기·송풍팬까지 완전 분해 후 전문 살균제로 세척합니다. 냄새의 원인인 내부 곰팡이까지 제거해 재발이 크게 줄어듭니다.",
  },
  {
    category: "석재보수",
    q: "연마·광택 작업 중에도 매장이나 사무실을 이용할 수 있나요?",
    a: "구역을 나눠 시공해 영업·업무에 지장이 최소화되도록 협의해 드립니다. 야간·주말 시공도 상담 가능합니다.",
  },
  {
    category: "석재보수",
    q: "대리석 광택은 얼마나 유지되나요?",
    a: "쉽게 벗겨지는 왁스칠이 아니라 대리석 자체를 단계별로 연마하는 방식이라 광택이 오래 유지됩니다. 통행량이 많은 곳은 주기적 관리 시공을 안내드립니다.",
  },
  {
    category: "석재보수",
    q: "깨지거나 파인 부분만 부분 보수도 되나요?",
    a: "네, 손상 부위만 전용 충전재로 메운 뒤 주변과 자연스럽게 연마·광택해 티가 나지 않게 복구합니다.",
  },
  {
    category: "공통",
    q: "견적 비용은 어떻게 확인하나요?",
    a: "전화 또는 견적문의 페이지에 현장 정보를 남겨주시면 유선 또는 방문 견적을 안내해 드립니다. 진단 후 견적에 동의하시면 시공을 진행합니다.",
  },
  {
    category: "공통",
    q: "시공 후 AS(사후관리)가 되나요?",
    a: "시공 항목별로 사후 점검과 보증을 제공합니다. 이상이 발생하면 신속하게 조치해 드립니다.",
  },
  {
    category: "공통",
    q: "어느 지역까지 출장 가능한가요?",
    a: "서울·수도권을 중심으로 시공하며, 그 외 지역은 문의 시 일정과 함께 안내해 드립니다.",
  },
];

// ── Q&A 게시판: 목록에 표시할 글 한 건의 형태 (실제 데이터는 Supabase에서 조회) ──
export interface QnaListItem {
  id: number;
  title: string;
  author: string;
  date: string;
  answered: boolean;
}

// ── 시공사례 (에어컨 / 석재보수) ──
export interface CaseItem {
  title: string;
  location: string;
  desc: string;
  image: string;
}

export const airconCases: CaseItem[] = [
  { title: "사무실 시스템에어컨 살균세척", location: "서울 강남구", desc: "천장형 4way 6대 완전 분해 살균세척", image: "/images/case-aircon-1.jpg" },
  { title: "가정용 벽걸이·스탠드 세척", location: "경기 성남시", desc: "여름철 사용 전 곰팡이·냄새 완전 제거", image: "/images/case-aircon-2.jpg" },
  { title: "상가 에어컨 신규 설치", location: "서울 송파구", desc: "매장 규모에 맞춘 용량 산정 후 설치", image: "/images/case-aircon-3.jpg" },
];

export const stoneCases: CaseItem[] = [
  { title: "호텔 로비 대리석 연마 광택", location: "서울 중구", desc: "통행량 많은 로비 바닥 전체 균일 연마", image: "/images/case-stone-1.jpg" },
  { title: "아파트 현관 줄눈 재시공", location: "경기 용인시", desc: "벌어진 줄눈 제거 후 방수·미관 복원", image: "/images/case-stone-2.jpg" },
  { title: "매장 대리석 파손 보수", location: "서울 서초구", desc: "깨짐·파임 부위 충전재 보수 후 광택", image: "/images/case-stone-3.jpg" },
];

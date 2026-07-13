-- ─────────────────────────────────────────────────────────────
-- 단비누리 (에어컨/석재보수) 사이트 DB 스키마
-- Supabase 대시보드 > SQL Editor 에 붙여넣고 [Run] 하세요.
-- 표 3개(견적문의 / 방문예약 / 고객문의 게시판) + 보안(RLS) 설정.
-- ─────────────────────────────────────────────────────────────

-- 1) 견적문의 (InquiryForm)
create table if not exists public.inquiries (
  id             bigint generated always as identity primary key,
  name           text not null,           -- 이름
  phone          text not null,           -- 연락처
  email          text,                    -- 이메일(선택)
  service        text not null,           -- 문의 서비스 (카테고리 - 세부서비스, 또는 "기타 문의")
  address        text,                    -- 주소(선택)
  preferred_date date,                    -- 희망 날짜(선택)
  message        text not null,           -- 문의 내용
  status         text not null default '신규',  -- 신규 / 확인 / 완료
  created_at     timestamptz not null default now()
);

-- 2) 방문예약 (ReservationForm)
create table if not exists public.reservations (
  id             bigint generated always as identity primary key,
  name           text not null,        -- 이름
  phone          text not null,        -- 연락처
  service        text not null,        -- 예약 서비스
  preferred_date date not null,        -- 희망 방문일
  time_slot      text not null,        -- 희망 시간대
  address        text not null,        -- 방문 주소
  note           text,                 -- 요청 사항(선택)
  status         text not null default '신규',  -- 신규 / 확인 / 완료
  created_at     timestamptz not null default now()
);

-- 3) 고객문의 게시판 (비회원 + 글 비밀번호)
create table if not exists public.qna_posts (
  id            bigint generated always as identity primary key,  -- 게시판 번호
  title         text not null,         -- 제목
  author        text not null,         -- 작성자
  content       text not null,         -- 질문 내용
  password_hash text not null,         -- 글 비밀번호(해시). 원문 비번은 저장하지 않음
  answer        text,                  -- 관리자 답변 (비어 있으면 '답변대기')
  answered_at   timestamptz,           -- 답변 등록 시각
  created_at    timestamptz not null default now()
);

-- 최신순 목록 조회용 인덱스
create index if not exists inquiries_created_idx    on public.inquiries (created_at desc);
create index if not exists reservations_created_idx on public.reservations (created_at desc);
create index if not exists qna_posts_created_idx    on public.qna_posts (created_at desc);

-- ── 마이그레이션: 이미 inquiries 표를 만든 적이 있다면 아래 2줄만 실행하세요 ──
-- (address/preferred_date 컬럼을 나중에 추가한 경우. 이미 있으면 안전하게 무시됩니다)
alter table public.inquiries add column if not exists address text;
alter table public.inquiries add column if not exists preferred_date date;

-- ── 보안: Row Level Security(RLS) 켜기 ──
-- 정책을 따로 만들지 않으면, 브라우저에 노출되는 공개키(anon)로는 이 표들에
-- 접근할 수 없습니다. 사이트는 Next.js 서버(서비스 롤 키)를 통해서만 읽고 쓰므로
-- 방문자가 남의 문의·연락처를 열람할 수 없어 가장 안전합니다.
alter table public.inquiries    enable row level security;
alter table public.reservations enable row level security;
alter table public.qna_posts    enable row level security;

import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * 서버 전용 Supabase 클라이언트.
 * service_role 키를 사용하므로 반드시 서버(라우트 핸들러/서버 컴포넌트)에서만 import 하세요.
 * 절대 클라이언트 컴포넌트("use client")에서 import 하면 안 됩니다.
 */
let cached: SupabaseClient | null = null;

export function getSupabaseAdmin(): SupabaseClient {
  if (cached) return cached;

  const url = process.env.SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;

  if (!url || !key) {
    throw new Error(
      "Supabase 환경변수가 없습니다. .env.local 에 SUPABASE_URL 과 SUPABASE_SERVICE_ROLE_KEY 를 설정하세요."
    );
  }

  cached = createClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
  return cached;
}

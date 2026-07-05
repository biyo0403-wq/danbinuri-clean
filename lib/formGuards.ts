/**
 * 폼 제출 공통 방어 유틸 (서버 전용)
 */

/** 문자열로 정리하고 최대 길이로 자릅니다. */
export function fieldStr(value: unknown, max: number): string {
  return String(value ?? "")
    .trim()
    .slice(0, max);
}

/**
 * 허니팟 검사: 사람 눈에는 보이지 않는 "website" 필드가
 * 채워져 있으면 봇 제출로 간주합니다.
 */
export function isBot(body: Record<string, unknown>): boolean {
  return Boolean(String(body.website ?? "").trim());
}

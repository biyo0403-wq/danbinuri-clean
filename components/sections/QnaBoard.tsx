"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { QnaListItem } from "@/lib/data";
import { PenLine, Lock, X } from "lucide-react";

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition";

export default function QnaBoard({ posts }: { posts: QnaListItem[] }) {
  const router = useRouter();
  const [writing, setWriting] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const payload = Object.fromEntries(new FormData(form).entries());

    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch("/api/qna", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "등록에 실패했습니다.");
      }
      form.reset();
      setWriting(false);
      setStatus("idle");
      router.refresh(); // 목록 새로고침
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "등록에 실패했습니다.");
    }
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-slate-500">
          총 <span className="font-bold text-slate-800">{posts.length}</span>건의 문의
        </p>
        {!writing && (
          <button
            type="button"
            onClick={() => setWriting(true)}
            className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 text-white text-sm font-bold px-4 py-2.5 hover:bg-blue-700 transition-colors"
          >
            <PenLine className="w-4 h-4" />
            글쓰기
          </button>
        )}
      </div>

      {/* 글쓰기 폼 */}
      {writing && (
        <form
          onSubmit={handleSubmit}
          className="mb-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 space-y-4"
        >
          <div className="flex items-center justify-between">
            <h3 className="font-bold text-slate-900">문의 글쓰기</h3>
            <button
              type="button"
              onClick={() => {
                setWriting(false);
                setStatus("idle");
              }}
              aria-label="닫기"
              className="text-slate-400 hover:text-slate-700"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                작성자 <span className="text-orange-500">*</span>
              </label>
              <input name="author" type="text" required placeholder="이름 또는 닉네임" className={inputClass} />
            </div>
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-1.5">
                비밀번호 <span className="text-orange-500">*</span>
              </label>
              <input
                name="password"
                type="password"
                required
                minLength={4}
                placeholder="4자 이상 (글 확인·삭제 시 사용)"
                className={inputClass}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              제목 <span className="text-orange-500">*</span>
            </label>
            <input name="title" type="text" required placeholder="문의 제목을 입력해 주세요" className={inputClass} />
          </div>

          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-1.5">
              내용 <span className="text-orange-500">*</span>
            </label>
            <textarea
              name="content"
              required
              rows={5}
              placeholder="문의하실 내용을 자세히 남겨주세요."
              className={`${inputClass} resize-none`}
            />
          </div>

          {status === "error" && (
            <div className="rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
              {errorMsg}
            </div>
          )}

          <div className="flex justify-end gap-2">
            <button
              type="button"
              onClick={() => {
                setWriting(false);
                setStatus("idle");
              }}
              className="rounded-lg border border-slate-300 bg-white px-5 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-100 transition-colors"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={status === "loading"}
              className="rounded-lg bg-blue-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-blue-700 transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "등록 중…" : "등록하기"}
            </button>
          </div>
        </form>
      )}

      {/* 게시판 테이블 */}
      <div className="border-t-2 border-slate-800">
        <div className="hidden sm:grid grid-cols-[70px_1fr_120px_120px] gap-4 px-4 py-3 text-sm font-bold text-slate-500 border-b border-slate-200">
          <span className="text-center">번호</span>
          <span>제목</span>
          <span className="text-center">작성자</span>
          <span className="text-center">작성일</span>
        </div>

        {posts.length === 0 ? (
          <div className="px-4 py-16 text-center text-slate-400">
            등록된 문의가 없습니다. 첫 질문을 남겨보세요.
          </div>
        ) : (
          <ul className="divide-y divide-slate-100">
            {posts.map((post) => (
              <li
                key={post.id}
                className="grid grid-cols-1 sm:grid-cols-[70px_1fr_120px_120px] gap-1 sm:gap-4 px-4 py-4 hover:bg-slate-50 transition-colors"
              >
                <span className="hidden sm:block text-center text-slate-400">{post.id}</span>
                <span className="flex items-center gap-2 font-medium text-slate-800">
                  <Lock className="w-3.5 h-3.5 shrink-0 text-slate-300" />
                  <span className="truncate">{post.title}</span>
                  {post.answered ? (
                    <span className="shrink-0 rounded bg-blue-50 px-1.5 py-0.5 text-xs font-bold text-blue-600">
                      답변완료
                    </span>
                  ) : (
                    <span className="shrink-0 rounded bg-slate-100 px-1.5 py-0.5 text-xs font-bold text-slate-500">
                      답변대기
                    </span>
                  )}
                </span>
                <span className="text-slate-500 text-sm sm:text-center">{post.author}</span>
                <span className="text-slate-400 text-sm sm:text-center">{post.date}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { Lock, MessageSquareReply } from "lucide-react";

interface Props {
  id: number;
  title: string;
  author: string;
  date: string;
  answered: boolean;
}

const inputClass =
  "w-full rounded-lg border border-slate-300 px-4 py-3 text-slate-800 placeholder:text-slate-400 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-100 transition";

export default function QnaDetail({ id, title, author, date, answered }: Props) {
  const [unlocked, setUnlocked] = useState(false);
  const [content, setContent] = useState("");
  const [answer, setAnswer] = useState<string | null>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const password = String(new FormData(e.currentTarget).get("password") ?? "");
    setStatus("loading");
    setErrorMsg("");
    try {
      const res = await fetch(`/api/qna/${id}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });
      const data = await res.json().catch(() => ({}));
      if (!res.ok) throw new Error(data.error || "확인에 실패했습니다.");
      setContent(data.content ?? "");
      setAnswer(data.answer ?? null);
      setUnlocked(true);
      setStatus("idle");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "확인에 실패했습니다.");
    }
  }

  return (
    <div className="max-w-3xl mx-auto">
      {/* 제목 영역 */}
      <div className="border-t-2 border-slate-800 pt-6">
        <div className="flex items-start gap-2">
          <Lock className="w-4 h-4 mt-1 shrink-0 text-slate-400" />
          <h1 className="text-xl sm:text-2xl font-extrabold text-slate-900">{title}</h1>
        </div>
        <div className="mt-3 flex items-center gap-3 text-sm text-slate-500">
          <span>{author}</span>
          <span className="text-slate-300">|</span>
          <span>{date}</span>
          <span className="text-slate-300">|</span>
          {answered ? (
            <span className="rounded bg-blue-50 px-1.5 py-0.5 text-xs font-bold text-blue-600">답변완료</span>
          ) : (
            <span className="rounded bg-slate-100 px-1.5 py-0.5 text-xs font-bold text-slate-500">답변대기</span>
          )}
        </div>
      </div>

      <div className="mt-6 border-t border-slate-200 pt-8">
        {!unlocked ? (
          // 비밀번호 확인 폼
          <form onSubmit={handleSubmit} className="max-w-sm mx-auto text-center">
            <Lock className="w-8 h-8 mx-auto text-slate-300" />
            <p className="mt-3 font-semibold text-slate-700">비밀글입니다</p>
            <p className="mt-1 text-sm text-slate-500">
              글 작성 시 입력한 비밀번호를 입력하면
              <br />
              문의 내용과 답변을 확인할 수 있습니다.
            </p>
            <input
              name="password"
              type="password"
              required
              placeholder="비밀번호"
              className={`${inputClass} mt-5 text-center`}
            />
            {status === "error" && (
              <p className="mt-2 text-sm text-red-600">{errorMsg}</p>
            )}
            <button
              type="submit"
              disabled={status === "loading"}
              className="mt-4 w-full rounded-lg bg-blue-600 text-white font-bold py-3 hover:bg-blue-700 transition-colors disabled:opacity-60"
            >
              {status === "loading" ? "확인 중…" : "확인"}
            </button>
          </form>
        ) : (
          // 내용 + 답변
          <div>
            <div className="whitespace-pre-wrap text-slate-700 leading-relaxed min-h-[120px]">
              {content}
            </div>

            <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <div className="flex items-center gap-2 text-blue-700 font-bold">
                <MessageSquareReply className="w-5 h-5" />
                단비누리 답변
              </div>
              {answer ? (
                <p className="mt-3 whitespace-pre-wrap text-slate-700 leading-relaxed">{answer}</p>
              ) : (
                <p className="mt-3 text-sm text-slate-500">
                  아직 답변이 등록되지 않았습니다. 확인 후 신속히 답변드리겠습니다.
                </p>
              )}
            </div>
          </div>
        )}
      </div>

      <div className="mt-8 text-center">
        <Link
          href="/qna"
          className="inline-flex items-center rounded-lg border border-slate-300 px-6 py-2.5 text-sm font-bold text-slate-600 hover:bg-slate-50 transition-colors"
        >
          목록으로
        </Link>
      </div>
    </div>
  );
}

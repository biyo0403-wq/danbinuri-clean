"use client";

import { useState } from "react";
import { qnaPosts } from "@/lib/data";
import { PenLine, Lock } from "lucide-react";

export default function QnaBoard() {
  const [notice, setNotice] = useState(false);

  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <p className="text-sm text-slate-500">
          총 <span className="font-bold text-slate-800">{qnaPosts.length}</span>건의 문의
        </p>
        <button
          type="button"
          onClick={() => setNotice(true)}
          className="inline-flex items-center gap-1.5 rounded-lg bg-blue-600 text-white text-sm font-bold px-4 py-2.5 hover:bg-blue-700 transition-colors"
        >
          <PenLine className="w-4 h-4" />
          글쓰기
        </button>
      </div>

      {notice && (
        <div className="mb-4 rounded-lg bg-amber-50 border border-amber-200 px-4 py-3 text-sm text-amber-800">
          게시판 글쓰기 기능은 준비 중입니다. 곧 오픈됩니다.
        </div>
      )}

      {/* 게시판 테이블 */}
      <div className="border-t-2 border-slate-800">
        {/* 헤더 (데스크탑) */}
        <div className="hidden sm:grid grid-cols-[70px_1fr_120px_120px] gap-4 px-4 py-3 text-sm font-bold text-slate-500 border-b border-slate-200">
          <span className="text-center">번호</span>
          <span>제목</span>
          <span className="text-center">작성자</span>
          <span className="text-center">작성일</span>
        </div>

        <ul className="divide-y divide-slate-100">
          {qnaPosts.map((post) => (
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
      </div>
    </div>
  );
}

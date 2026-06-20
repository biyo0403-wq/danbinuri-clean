"use client";

import { useState } from "react";
import { certBadges } from "@/lib/data";
import Container from "@/components/ui/Container";

function CertCircle({ src, alt, label }: { src: string; alt: string; label: string }) {
  const [errored, setErrored] = useState(false);

  return (
    <div className="flex flex-col items-center gap-3">
      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-slate-100 shadow-card bg-white flex items-center justify-center">
        {!errored ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={src}
            alt={alt}
            onError={() => setErrored(true)}
            className="w-full h-full object-contain p-2"
          />
        ) : (
          <span className="text-xs text-slate-400 text-center px-2">{label}</span>
        )}
      </div>
      <p className="text-sm font-medium text-slate-700 text-center">{label}</p>
    </div>
  );
}

export default function News() {
  return (
    <section className="bg-white">
      <Container className="py-16">
        <h2 className="text-2xl font-bold text-slate-900">인증</h2>
        <div className="mt-8 flex flex-wrap gap-10">
          {certBadges.map((badge) => (
            <CertCircle
              key={badge.label}
              src={badge.image}
              alt={badge.label}
              label={badge.label}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}

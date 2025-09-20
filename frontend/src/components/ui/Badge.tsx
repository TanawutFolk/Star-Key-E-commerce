import React from "react";

type Tone = "sky" | "pink" | "amber" | "violet" | "emerald";

export default function Badge({
  children,
  tone = "sky",
}: {
  children: React.ReactNode;
  tone?: Tone;
}) {
  const map: Record<Tone, string> = {
    sky: "bg-sky-100 text-sky-700 border-sky-200",
    pink: "bg-pink-100 text-pink-700 border-pink-200",
    amber: "bg-amber-100 text-amber-700 border-amber-200",
    violet: "bg-violet-100 text-violet-700 border-violet-200",
    emerald: "bg-emerald-100 text-emerald-700 border-emerald-200",
  };
  return (
    <span
      className={`inline-flex items-center gap-1 rounded-full border px-2 py-0.5 text-xs font-medium ${map[tone]}`}
    >
      {children}
    </span>
  );
}

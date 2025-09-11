import React from "react";
import { Link } from "react-router-dom";

type ButtonProps = {
  as?: "button" | "link";
  to?: string;
  onClick?: () => void;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "ghost" | "subtle" | "outline" | "success";
  icon?: React.ComponentType<{ className?: string }>;
  disabled?: boolean;
};

export default function Button({
  as = "button",
  to,
  onClick,
  children,
  className = "",
  variant = "primary",
  icon: Icon,
  disabled,
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-2 text-sm font-semibold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2";
  const variants: Record<NonNullable<ButtonProps["variant"]>, string> = {
    primary: "bg-zinc-900 text-white hover:bg-zinc-800 focus:ring-zinc-400",
    ghost: "bg-transparent text-zinc-900 hover:bg-zinc-100 focus:ring-zinc-300",
    subtle: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200 focus:ring-zinc-300",
    outline:
      "bg-white border border-zinc-300 text-zinc-900 hover:bg-zinc-50 focus:ring-zinc-300",
    success:
      "bg-emerald-600 text-white hover:bg-emerald-500 focus:ring-emerald-300",
  };
  const cls = `${base} ${variants[variant]} ${className}`;
  if (as === "link" && to) {
    return (
      <Link to={to} className={cls} onClick={onClick}>
        {Icon ? <Icon className="h-4 w-4" /> : null}
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} onClick={onClick} disabled={disabled}>
      {Icon ? <Icon className="h-4 w-4" /> : null}
      {children}
    </button>
  );
}

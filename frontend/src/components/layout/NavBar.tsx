import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ShoppingCart, Gamepad2, LogIn, UserPlus, Search } from "lucide-react";
import Button from "../ui/Button";
import Container from "./Container";

export default function NavBar() {
  const [q, setQ] = useState("");
  const nav = useNavigate();
  const location = useLocation();
  const cartCount = 2; // mock
  return (
    <header className="sticky top-0 z-40 w-full border-b border-zinc-200 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <Container>
        <div className="flex h-16 items-center justify-between gap-3">
          <Link to="/" className="group flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-zinc-900 text-white shadow-sm">
              <Gamepad2 className="h-5 w-5" />
            </div>
            <div className="text-xl font-black tracking-tight">
              Star
              <span className="text-zinc-500 group-hover:text-zinc-700 transition">
                key
              </span>
            </div>
          </Link>
          <div className="hidden flex-1 items-center justify-center md:flex">
            <div className="relative w-full max-w-xl">
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                onKeyDown={(e) =>
                  e.key === "Enter" &&
                  nav(`/products?q=${encodeURIComponent(q)}`)
                }
                placeholder="ค้นหาเกม / คีย์เกม / แพลตฟอร์ม..."
                className="w-full rounded-2xl border border-zinc-300 bg-white px-4 py-2.5 pr-10 text-sm outline-none transition focus:ring-2 focus:ring-zinc-300"
              />
              <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
            </div>
          </div>
          <div className="flex items-center gap-2">
            {location.pathname !== "/login" && (
              <Button
                as="link"
                to="/login"
                variant="ghost"
                icon={LogIn}
                className="hidden sm:inline-flex"
              >
                เข้าสู่ระบบ
              </Button>
            )}
            {location.pathname !== "/register" && (
              <Button
                as="link"
                to="/register"
                variant="subtle"
                icon={UserPlus}
                className="hidden sm:inline-flex"
              >
                สมัครสมาชิก
              </Button>
            )}
            <Button as="link" to="/cart" variant="outline" icon={ShoppingCart}>
              ตะกร้า{" "}
              {cartCount > 0 && (
                <span className="ml-1 rounded-full bg-zinc-900 px-2 py-0.5 text-xs text-white">
                  {cartCount}
                </span>
              )}
            </Button>
          </div>
        </div>
      </Container>
    </header>
  );
}

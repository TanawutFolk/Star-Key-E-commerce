import React from "react";
import Container from "../components/layout/Container";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { Card, CardBody } from "../components/ui/Card";
import { Sparkles, ShieldCheck, MonitorPlay, ChevronRight } from "lucide-react";
import ProductGrid from "../components/product/ProductGrid";
import { PRODUCTS } from "../data/products";

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden">
        <Container>
          <div className="relative z-10 grid gap-10 py-12 sm:py-20 md:grid-cols-2 md:items-center">
            <div>
              <Badge tone="violet">
                <Sparkles className="h-3.5 w-3.5" /> โปรโมชันเปิดร้าน
              </Badge>
              <h1 className="mt-3 text-3xl font-black tracking-tight sm:text-4xl md:text-5xl">
                คีย์เกมแท้ ราคาดี ส่งไว{" "}
                <span className="text-zinc-500">พร้อมเล่นทันที</span>
              </h1>
              <p className="mt-3 max-w-xl text-zinc-600">
                เลือกซื้อเกมโปรดของคุณในราคาพิเศษ
                พร้อมระบบส่งคีย์อัตโนมัติหลังชำระเงิน มั่นใจ ปลอดภัย 100%.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-3">
                <Button
                  as="link"
                  to="/products"
                  variant="primary"
                  icon={ChevronRight}
                >
                  เริ่มช้อปเลย
                </Button>
                <Button
                  as="link"
                  to="/how-it-works"
                  variant="ghost"
                  icon={MonitorPlay}
                >
                  วิธีการซื้อคีย์
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-sm text-zinc-600">
                <ShieldCheck className="h-4 w-4" /> รับประกันคีย์ใช้งานได้ ภายใน
                7 วัน
              </div>
            </div>
            <Card className="relative overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1511512578047-dfb367046420?q=80&w=1600&auto=format&fit=crop"
                className="h-64 w-full object-cover sm:h-80 md:h-full"
                alt="gaming"
              />
            </Card>
          </div>
        </Container>
        <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(45rem_45rem_at_0%_0%,#d4d4d8_10%,transparent_40%),radial-gradient(40rem_40rem_at_100%_100%,#e4e4e7_10%,transparent_40%)] opacity-60" />
      </section>

      <Container>
        <section className="mt-12">
          <div className="mb-4 flex items-end justify-between">
            <div>
              <h2 className="text-2xl font-black tracking-tight">
                สินค้ายอดนิยม
              </h2>
              <p className="text-sm text-zinc-600">รวมดีลร้อนแรงประจำสัปดาห์</p>
            </div>
            <Button as="link" to="/products" variant="ghost">
              ดูทั้งหมด
            </Button>
          </div>
          <ProductGrid products={PRODUCTS} />
        </section>

        <section className="mt-16">
          <Card>
            <CardBody className="grid gap-8 md:grid-cols-2 md:items-center">
              <div>
                <div className="mb-2 inline-flex items-center gap-2 text-sm text-zinc-600">
                  <ShieldCheck className="h-4 w-4" /> ทำไมต้อง Starkey?
                </div>
                <h3 className="text-2xl font-black">
                  ส่งคีย์อัตโนมัติ รวดเร็ว ปลอดภัย
                </h3>
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-zinc-600">
                  <li>ส่งคีย์ทันทีหลังชำระเงิน</li>
                  <li>การันตีคีย์แท้ 100% พร้อมซัพพอร์ต</li>
                  <li>รองรับชำระเงินหลายช่องทาง</li>
                </ul>
              </div>
              <img
                src="https://images.unsplash.com/photo-1579965342575-16428a7c8881?q=80&w=1600&auto=format&fit=crop"
                className="h-56 w-full rounded-xl object-cover"
              />
            </CardBody>
          </Card>
        </section>
      </Container>
    </main>
  );
}

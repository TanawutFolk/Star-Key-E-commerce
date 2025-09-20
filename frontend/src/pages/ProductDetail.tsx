import React from "react";
import { useLocation, Navigate } from "react-router-dom";
import Container from "../components/layout/Container";
import { Card } from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import { Star } from "lucide-react";
import { PRODUCTS } from "../data/products";

export default function ProductDetail() {
  const { pathname } = useLocation();
  const id = Number(pathname.split("/").pop());
  const p = PRODUCTS.find((x) => x.id === id);
  if (!p) return <Navigate to="/products" replace />;
  return (
    <main className="py-10">
      <Container>
        <div className="grid gap-8 md:grid-cols-2">
          <Card>
            <img
              src={p.cover}
              className="h-80 w-full rounded-2xl object-cover"
            />
          </Card>
          <div>
            <Badge tone="sky">{p.platform}</Badge>
            <h1 className="mt-2 text-3xl font-black">{p.title}</h1>
            <div className="mt-1 flex items-center gap-2 text-sm text-zinc-600">
              <Star className="h-4 w-4 fill-yellow-400" /> {p.rating.toFixed(1)}{" "}
              • {p.tag}
            </div>
            <div className="mt-4 text-3xl font-extrabold">
              ฿{p.price.toLocaleString()}
            </div>
            <p className="mt-3 text-sm text-zinc-600">
              คีย์เกมเวอร์ชันดิจิทัลสำหรับเปิดใช้งานบน Steam โซน Global
              ใช้งานได้ทันทีหลังชำระเงิน
            </p>
            <div className="mt-6 flex gap-3">
              <Button variant="primary">เพิ่มลงตะกร้า</Button>
              <Button variant="outline">ซื้อทันที</Button>
            </div>
            <div className="mt-8 space-y-3 text-sm text-zinc-700">
              <div className="font-semibold">สิ่งที่จะได้รับ</div>
              <ul className="list-disc pl-5 text-zinc-600">
                <li>Digital Activation Key</li>
                <li>ลิงก์ขั้นตอนการ Redeem</li>
                <li>ใบเสร็จรับเงิน</li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}

import React from "react";
import Container from "../components/layout/Container";
import { Card, CardBody } from "../components/ui/Card";
import { ReceiptText } from "lucide-react";
import { PRODUCTS } from "../data/products";

export default function Orders() {
  return (
    <main className="py-10">
      <Container>
        <div className="mb-6 flex items-center gap-3">
          <ReceiptText className="h-6 w-6" />
          <h1 className="text-2xl font-black">คำสั่งซื้อ</h1>
        </div>
        <Card>
          <CardBody>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="rounded-xl border border-zinc-200 p-4 text-sm"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold">ORDER#{1000 + i}</span>
                    <span className="text-zinc-500">ชำระแล้ว</span>
                  </div>
                  <div className="mt-2 text-zinc-600">
                    รวม 2 รายการ — ฿
                    {(PRODUCTS[0].price + PRODUCTS[1].price).toLocaleString()}
                  </div>
                  <button className="mt-3 w-full rounded-xl border border-zinc-300 px-3 py-2 text-sm">
                    ดูรายละเอียด / รับคีย์
                  </button>
                </div>
              ))}
            </div>
          </CardBody>
        </Card>
      </Container>
    </main>
  );
}

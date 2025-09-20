import React from "react";
import Container from "../components/layout/Container";
import { Card, CardBody } from "../components/ui/Card";
import Button from "../components/ui/Button";
import { PRODUCTS } from "../data/products";

export default function Cart() {
  return (
    <main className="py-10">
      <Container>
        <h1 className="mb-6 text-2xl font-black">ตะกร้าสินค้า</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardBody>
              <div className="space-y-4">
                {PRODUCTS.slice(0, 2).map((p) => (
                  <div key={p.id} className="flex items-center gap-4">
                    <img
                      src={p.cover}
                      className="h-16 w-28 rounded-lg object-cover"
                    />
                    <div className="flex-1">
                      <div className="font-semibold">{p.title}</div>
                      <div className="text-xs text-zinc-500">{p.platform}</div>
                    </div>
                    <div className="font-semibold">
                      ฿{p.price.toLocaleString()}
                    </div>
                  </div>
                ))}
              </div>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <div className="mb-3 text-lg font-bold">สรุปคำสั่งซื้อ</div>
              <div className="flex justify-between text-sm text-zinc-600">
                <span>ยอดรวม</span>
                <span>
                  ฿{(PRODUCTS[0].price + PRODUCTS[1].price).toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between text-sm text-zinc-600">
                <span>ส่วนลด</span>
                <span>- ฿0</span>
              </div>
              <div className="mt-3 flex justify-between text-base font-bold">
                <span>ยอดสุทธิ</span>
                <span>
                  ฿{(PRODUCTS[0].price + PRODUCTS[1].price).toLocaleString()}
                </span>
              </div>
              <Button
                as="link"
                to="/checkout"
                variant="success"
                className="mt-4 w-full"
              >
                ดำเนินการชำระเงิน
              </Button>
            </CardBody>
          </Card>
        </div>
      </Container>
    </main>
  );
}

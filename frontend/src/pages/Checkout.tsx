import React from "react";
import Container from "../components/layout/Container";
import { Card, CardBody } from "../components/ui/Card";
import Input from "../components/ui/input";
import Button from "../components/ui/Button";
import { PRODUCTS } from "../data/products";

export default function Checkout() {
  return (
    <main className="py-10">
      <Container>
        <h1 className="mb-6 text-2xl font-black">ชำระเงิน</h1>
        <div className="grid gap-6 md:grid-cols-3">
          <Card className="md:col-span-2">
            <CardBody className="space-y-4">
              <div>
                <div className="mb-2 font-semibold">วิธีชำระเงิน</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-300 p-3 text-sm">
                    <input type="radio" name="pm" defaultChecked />
                    บัตรเครดิต/เดบิต
                  </label>
                  <label className="flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-300 p-3 text-sm">
                    <input type="radio" name="pm" />
                    โอน/พร้อมเพย์
                  </label>
                </div>
              </div>
              <div>
                <div className="mb-2 font-semibold">รายละเอียดผู้รับคีย์</div>
                <div className="grid gap-3 sm:grid-cols-2">
                  <Input placeholder="อีเมลที่รับคีย์" type="email" />
                  <Input placeholder="เบอร์ติดต่อ (ไม่บังคับ)" />
                </div>
              </div>
              <Button variant="primary">ยืนยันการชำระเงิน</Button>
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
              <div className="mt-3 flex justify-between text-base font-bold">
                <span>ยอดสุทธิ</span>
                <span>
                  ฿{(PRODUCTS[0].price + PRODUCTS[1].price).toLocaleString()}
                </span>
              </div>
            </CardBody>
          </Card>
        </div>
      </Container>
    </main>
  );
}

import React from "react";
import Container from "../components/layout/Container";

export default function HowItWorks() {
  return (
    <main className="py-10">
      <Container>
        <h1 className="mb-4 text-2xl font-black">วิธีการซื้อคีย์</h1>
        <ol className="list-decimal space-y-2 pl-5 text-sm text-zinc-700">
          <li>เลือกเกมที่ต้องการ แล้วกด “ซื้อทันที” หรือ “หยิบใส่ตะกร้า”</li>
          <li>ชำระเงินผ่านช่องทางที่สะดวก</li>
          <li>รับคีย์อัตโนมัติที่หน้า “คำสั่งซื้อ” และทางอีเมล</li>
          <li>นำคีย์ไป Redeem บนแพลตฟอร์มที่ระบุ</li>
        </ol>
      </Container>
    </main>
  );
}

import React from "react";
import Container from "./Container";
import { ShieldCheck, CreditCard, ReceiptText } from "lucide-react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-zinc-200 bg-white">
      <Container>
        <div className="grid gap-10 py-12 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="mb-3 text-lg font-bold">เกี่ยวกับ Starkey</div>
            <p className="text-sm text-zinc-600">
              แพลตฟอร์มจำหน่ายคีย์เกมดิจิทัล ราคาดี ส่งไว ปลอดภัย พร้อมซัพพอร์ต
              24/7
            </p>
          </div>
          <div>
            <div className="mb-3 text-lg font-bold">ช่วยเหลือ</div>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <Link to="/faq" className="hover:text-zinc-900">
                  คำถามที่พบบ่อย
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-zinc-900">
                  ติดต่อฝ่ายซัพพอร์ต
                </Link>
              </li>
              <li>
                <Link to="/refund" className="hover:text-зinc-900">
                  นโยบายการคืนเงิน
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-lg font-bold">บัญชีของฉัน</div>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>
                <Link to="/profile" className="hover:text-zinc-900">
                  โปรไฟล์
                </Link>
              </li>
              <li>
                <Link to="/orders" className="hover:text-zinc-900">
                  คำสั่งซื้อ
                </Link>
              </li>
              <li>
                <Link to="/settings" className="hover:text-zinc-900">
                  การตั้งค่า
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="mb-3 text-lg font-bold">ปลอดภัย มั่นใจ</div>
            <div className="flex flex-col gap-2 text-sm text-zinc-600">
              <span className="inline-flex items-center gap-2">
                <ShieldCheck className="h-4 w-4" />
                คีย์แท้ 100%
              </span>
              <span className="inline-flex items-center gap-2">
                <CreditCard className="h-4 w-4" />
                รองรับหลายช่องทางการชำระเงิน
              </span>
              <span className="inline-flex items-center gap-2">
                <ReceiptText className="h-4 w-4" />
                ออกใบเสร็จอัตโนมัติ
              </span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between border-t border-zinc-200 py-6 text-sm text-zinc-500">
          <span>© {new Date().getFullYear()} Starkey Co., Ltd.</span>
          <span>Made with ❤️ in Thailand</span>
        </div>
      </Container>
    </footer>
  );
}

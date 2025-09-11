import React from "react";
import Container from "../components/layout/Container";

export default function FAQ() {
  return (
    <main className="py-10">
      <Container>
        <h1 className="mb-4 text-2xl font-black">คำถามที่พบบ่อย</h1>
        <div className="space-y-4 text-sm text-zinc-700">
          <details className="rounded-xl border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold">
              คีย์เป็นของแท้หรือไม่?
            </summary>
            <p className="mt-2 text-zinc-600">
              เรารับประกันคีย์แท้ 100% หากมีปัญหาติดต่อซัพพอร์ตได้ 24/7
            </p>
          </details>
          <details className="rounded-xl border border-zinc-200 p-4">
            <summary className="cursor-pointer font-semibold">
              ใช้เวลาในการส่งคีย์เท่าไหร่?
            </summary>
            <p className="mt-2 text-zinc-600">
              หลังชำระเงิน ระบบจะส่งคีย์อัตโนมัติทันที
            </p>
          </details>
        </div>
      </Container>
    </main>
  );
}

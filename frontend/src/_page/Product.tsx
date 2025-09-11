import React, { useMemo } from "react";
import { useLocation } from "react-router-dom";
import Container from "../components/layout/Container";
import ProductGrid from "../components/product/ProductGrid";
import { PRODUCTS } from "../data/products";

export default function Products() {
  const location = useLocation();
  const q = new URLSearchParams(location.search).get("q") || "";
  const filtered = useMemo(
    () =>
      PRODUCTS.filter((p) => p.title.toLowerCase().includes(q.toLowerCase())),
    [q]
  );
  return (
    <main className="py-10">
      <Container>
        <div className="mb-6 flex items-end justify-between">
          <div>
            <h1 className="text-2xl font-black">รายการสินค้า</h1>
            {q && <p className="text-sm text-zinc-600">ผลการค้นหา: “{q}”</p>}
          </div>
          <div className="flex items-center gap-2">
            <select className="rounded-xl border border-zinc-300 bg-white px-3 py-2 text-sm">
              <option>จัดเรียงโดย แนะนำ</option>
              <option>ราคาต่ำไปสูง</option>
              <option>ราคาสูงไปต่ำ</option>
              <option>เรตติ้งสูงสุด</option>
            </select>
          </div>
        </div>
        <ProductGrid products={filtered} />
      </Container>
    </main>
  );
}

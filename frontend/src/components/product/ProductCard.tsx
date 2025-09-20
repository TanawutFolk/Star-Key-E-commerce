import React from "react";
import { Link } from "react-router-dom";
import type { Product } from "../../types/product";

export default function ProductCard({ p }: { p: Product }) {
  return (
    <div className="rounded-2xl bg-white shadow hover:shadow-lg transition flex flex-col">
      {/* ครอบด้วย Link */}
      <Link to={`/products/${p.id}`} className="p-4 flex-1 flex flex-col">
        <img
          src={p.cover}
          alt={p.title}
          className="w-full h-40 object-cover rounded-lg mb-3"
        />
        <h3 className="text-lg font-semibold">{p.title}</h3>
        <p className="text-gray-500 text-sm">{p.platform}</p>
      </Link>

      {/* แถวล่าง */}
      <div className="p-4 pt-0 flex items-center justify-between">
        <span className="text-sky-600 font-bold">${p.price}</span>
        <button className="bg-sky-600 text-white text-sm px-3 py-1 rounded-lg hover:bg-sky-700">
          Buy
        </button>
      </div>
    </div>
  );
}

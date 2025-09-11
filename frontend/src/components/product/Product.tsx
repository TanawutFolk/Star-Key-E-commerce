import React from "react";
import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import type { Product } from "../../types/product";
import Badge from "../ui/Badge";
import Button from "../ui/Button";
import { Card, CardBody } from "../ui/Card";

export default function ProductCard({ p }: { p: Product }) {
  const nav = useNavigate();
  const tone =
    p.tag === "Hot"
      ? "amber"
      : p.tag === "Best"
      ? "emerald"
      : p.tag === "New"
      ? "violet"
      : "sky";
  return (
    <Card className="group transition-transform hover:-translate-y-0.5">
      <div className="relative">
        <img
          src={p.cover}
          alt={p.title}
          className="h-44 w-full rounded-t-2xl object-cover"
        />
        <div className="absolute left-3 top-3">
          <Badge tone={tone as any}>{p.tag}</Badge>
        </div>
      </div>
      <CardBody>
        <div className="flex min-h-14 items-start justify-between gap-3">
          <div>
            <h3 className="line-clamp-2 font-semibold leading-snug">
              {p.title}
            </h3>
            <p className="mt-1 text-xs text-zinc-500">{p.platform}</p>
          </div>
          <div className="text-right">
            <div className="text-lg font-black">
              ฿{p.price.toLocaleString()}
            </div>
            <div className="mt-0.5 flex items-center gap-1 text-xs text-zinc-500">
              <Star className="h-3.5 w-3.5 fill-yellow-400" />{" "}
              {p.rating.toFixed(1)}
            </div>
          </div>
        </div>
        <div className="mt-4 flex items-center gap-2">
          <Button variant="subtle" className="flex-1">
            หยิบใส่ตะกร้า
          </Button>
          <Button variant="outline" onClick={() => nav(`/products/${p.id}`)}>
            ดูรายละเอียด
          </Button>
        </div>
      </CardBody>
    </Card>
  );
}

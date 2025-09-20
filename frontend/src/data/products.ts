import type { Product } from "../types/product";

export const PRODUCTS: Product[] = Array.from({ length: 12 }).map((_, i) => ({
  id: i + 1,
  title: [
    "Elden Ring (PC) — Global Key",
    "Baldur's Gate 3 (PC) — Deluxe",
    "Cyberpunk 2077 (PC) — Phantom Liberty Bundle",
    "Hogwarts Legacy (PC) — Digital",
    "Forza Horizon 5 (PC) — Premium",
    "Resident Evil 4 Remake (PC)",
    "Monster Hunter: World (PC)",
    "Red Dead Redemption 2 (PC)",
    "Stardew Valley (PC)",
    "Sekiro: Shadows Die Twice (PC)",
    "Hades II (PC) — Early Access",
    "Palworld (PC) — Global Key",
  ][i],
  price: [1790, 2190, 1490, 1290, 1990, 1090, 690, 1690, 250, 1290, 890, 690][
    i
  ],
  rating: Number((Math.random() * 1.5 + 3.5).toFixed(1)),
  tag: ["Hot", "Best", "New", "Sale"][i % 4] as Product["tag"],
  platform: "PC (Steam)",
  cover: `https://picsum.photos/seed/starkey-${i}/640/360`,
}));

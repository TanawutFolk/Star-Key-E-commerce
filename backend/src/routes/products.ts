import { Router } from "express";
import { prisma } from "../db";
// Decimal can be passed as number|string; no need to construct Prisma.Decimal

const router = Router();

// GET /api/products
router.get("/", async (_req, res, next) => {
  try {
    const products = await prisma.product.findMany({
      include: { category: true },
      orderBy: { createdAt: "desc" },
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// POST /api/products
router.post("/", async (req, res, next) => {
  try {
    const { name, description, price, image, stock, categoryId } = req.body as {
      name?: string;
      description?: string;
      price?: number | string;
      image?: string;
      stock?: number;
      categoryId?: string;
    };

    if (!name || price == null || !categoryId) {
      return res
        .status(400)
        .json({ message: "name, price, categoryId are required" });
    }

    const created = await prisma.product.create({
      data: {
        name,
        description,
        // Prisma Decimal accepts number or string
        price: typeof price === "string" ? price : Number(price),
        image,
        stock: stock ?? 0,
        categoryId,
      },
    });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

export default router;

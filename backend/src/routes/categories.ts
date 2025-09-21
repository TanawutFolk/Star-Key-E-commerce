import { Router } from "express";
import { prisma } from "../db";

const router = Router();

// GET /api/categories
router.get("/", async (_req, res, next) => {
  try {
    const categories = await prisma.category.findMany({
      orderBy: { name: "asc" },
    });
    res.json(categories);
  } catch (err) {
    next(err);
  }
});

// POST /api/categories
router.post("/", async (req, res, next) => {
  try {
    const { name, slug } = req.body as { name?: string; slug?: string };
    if (!name || !slug) {
      return res.status(400).json({ message: "name and slug are required" });
    }
    const created = await prisma.category.create({ data: { name, slug } });
    res.status(201).json(created);
  } catch (err) {
    next(err);
  }
});

export default router;

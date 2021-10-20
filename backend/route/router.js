import express from "express";
import { getAllProducts, createProducts, getProductById, updateProducts, deleteProducts } from "../controller/productController.js";

// router initialize
const router = express.Router();
router.get("/", getAllProducts);
router.get("/:id", getProductById);
router.post("/", createProducts);
router.patch("/:id", updateProducts);
router.delete("/:id", deleteProducts);

export default router;

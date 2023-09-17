import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
} from "../controller/productController.js";

// Get all products
router.route("/").get(getProducts);

// Get products by id
router.route("/:id").get(getProductById);

export default router;

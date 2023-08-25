import express from "express";
import {
  createProduct,
  deleteProduct,
  getProduct,
  getSingleProduct,
  productPhoto,
  updateProduct,
} from "../controllers/productController.js";
import { isAdmin, requireSignIn } from "../middlewares/authMiddleware.js";
import formidable from "express-formidable";

const router = express.Router();

//routes
router.post(
  "/create-product",
  requireSignIn,
  isAdmin,
  formidable(),
  createProduct
);
//routes
router.put(
  "/update-product/:pid",
  requireSignIn,
  isAdmin,
  formidable(),
  updateProduct
);

//get products
router.get("/get-product", getProduct);

//single product
router.get("/get-product/:slug", getSingleProduct);

//get photo
router.get("/product-photo/:pid", productPhoto);

//delete rproduct
router.delete("/delete-product/:pid", deleteProduct);

export default router;

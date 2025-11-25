import { Router } from "express";
import { addProduct, deleteProduct, getProducts, updateProduct } from "../controllers/productController.js";
import { verifyAdmin, verifyUser } from "../middleware/authMiddleware.js";

import { createProductValidation, productUpdateValidation } from "../validations/productValidations.js";
import { validate } from "../middleware/validationMiddleware.js";


const productRoutes = Router({ mergeParams: true });

productRoutes.post(
  "/",
  verifyAdmin,
  validate(createProductValidation),
  addProduct
);

productRoutes.get("/", verifyUser, getProducts);

productRoutes.patch("/:id",verifyAdmin, validate(productUpdateValidation),updateProduct )

productRoutes.delete("/:id", verifyAdmin,deleteProduct)

export default productRoutes;

import { Router } from "express";
// import * as productsController from "../controllers/productsController.js";
import {
  getProducts,
  postProducts,
  listCategory,
  teste
} from "../controllers/productsController.js";
import validationProductSchema from "../middlewares/productsSchemaMiddleware.js";

const productsRouter = Router();

productsRouter.get("/products", getProducts);

// productsRouter.get("/products", teste);

productsRouter.post("/products", validationProductSchema, postProducts);

productsRouter.get("/categorys", listCategory);

export default productsRouter;

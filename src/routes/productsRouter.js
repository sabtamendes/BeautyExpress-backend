import { Router } from "express";
import * as productsController from "../controllers/productsController.js";
import {
  getProducts,
  postProducts,
  listCategory,
} from "../controllers/productsController.js";
import validationProductSchema from "../middlewares/productsSchemaMiddleware.js";

const productsRouter = Router();

// productsRouter.get("/products", async (request, response) => {
//   return await products.controller.listarProdutos(request, response);
// });

productsRouter.get("/products", getProducts);

productsRouter.post("/products", validationProductSchema, postProducts);

// productsRouter.get("/categorys", async (request, response) => {
//   return await products.controller.listarCategorias(request, response);
// });

productsRouter.get("/categorys", listCategory);

export default productsRouter;

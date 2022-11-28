import { Router } from "express";
import { saveRequest, listSales } from "../controllers/salesController.js";
import { saveOrderFiniched } from "../controllers/saveOrderFinishedController.js";
import tokenMiddleware from "../middlewares/tokenMiddleware.js";
import salesSchemaMiddleware from "../middlewares/salesMiddleware.js";

const salesRoutes = Router()


salesRoutes.get('/sales', listSales)

salesRoutes.post('/sales',tokenMiddleware, salesSchemaMiddleware, saveOrderFiniched);

salesRoutes.post('/salesorder', salesSchemaMiddleware,saveRequest)


export default salesRoutes
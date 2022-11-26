import { Router } from "express";
import salesMiddleware from '../middlewares/salesMiddleware.js';
import { saveRequest, listSales } from "../controllers/salesController.js";

const salesRoutes = Router()




salesRoutes.get('/sales', listSales)



salesRoutes.post('/salesorder', salesMiddleware,saveRequest)


export default salesRoutes
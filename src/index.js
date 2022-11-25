import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import productsRouter from "./routes/productsRouter.js";
import salesRoutes from './routes/salesRoutes.js'
dotenv.config();

const server = express();

server.use(express.json());
server.use(cors());
server.use(productsRouter, salesRoutes);

const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server running in port ${port}`));

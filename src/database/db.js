import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

const mongoClient = new MongoClient(process.env.MONGO_URI);

try {
  await mongoClient.connect();
  console.log("MongoDB Connected!");
} catch (err) {
  console.log(err);
}

const db = mongoClient.db("beautyexpress");

export const users = db.collection("users");
export const connection = db.collection("connection");
export const products = db.collection("products");
export const cart = db.collection("cart");
export const sales = db.collection("sales");

export default db;
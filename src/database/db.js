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
export const usersCollection = db.collection("users");
export const sessionsCollection = db.collection("connection");
export const transactionsCollection = db.collection("cart");
import { products } from "../database/db.js";

export async function getProducts(req, res) {
  try {
    const { category, productName } = req.query;

    let productsData = [];
    if (category) {
      productsData = await products.find({ category }).toArray();
    } else if (productName) {
      productsData = await products
        .find({ productName: { $regex: productName, $options: "i" } })
        .toArray();
    } else {
      productsData = await products.find().toArray();
    }
    return res.status(200).send(productsData);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error });
  }
}

export async function postProducts(req, res) {
  const body = req.body;
  console.log("body", body);

  try {
    await products.insertOne(body);

    res.sendStatus(201);
  } catch (error) {
    console.log(error);
    return res.status(500).send({ message: error });
  }
}

export async function listCategory(req, res) {
  try {
    const categorys = await products.distinct("category");
    return res.status(200).send(categorys);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error });
  }
}

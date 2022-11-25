import { products } from "../database/db.js";

export async function getProducts(req, res) {
  try {
    const { category, productName } = req.query;

    //console.log("query =", productName);
    let products = [];
    if (category) {
      products = await products.find({ category }).toArray();
    } else if (productName) {
      //   products = await products.find({ productName: productName });
      products = await products
        .find({ productName: { $regex: productName, $options: "i" } })
        .toArray();

      // db.products.find({productName: /.*malte.*/i})
    } else {
      products = await products.find().toArray();
    }
    return response.status(200).send(products);
  } catch (error) {
    console.error(error);
    return response.status(500).send({ message: error });
  }
}

export async function postProducts(req, res) {
  const body = req.body;
  // console.log("body", body);

  try {
    const products = await products.insertOne(body);

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

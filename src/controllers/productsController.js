import { products } from "../database/db.js";

export async function getProducts(req, res) {
  try {
    const { category, productName } = req.query;

    // console.log("query =", req.query);
    let products = [];
    if (category) {
      console.log("entrei aqui if");
      products = await products.find({ category }).toArray();
    } else if (productName) {
      console.log("entrei aqui else if");
      //   products = await products.find({ productName: productName });
      products = await products
        .find({ productName: { $regex: productName, $options: "i" } })
        .toArray();

      // db.products.find({productName: /.*malte.*/i})
    } else {
      console.log("entrei aqui else");
      products = await products.find().toArray();
    }
    return res.status(200).send(products);
    // return res.status(200).send(products);
  } catch (error) {
    console.error(error);
    return res.status(500).send({ message: error });
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

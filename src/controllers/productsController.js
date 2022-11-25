import { products } from "../database/db.js";

export function teste()
{
  console.log('entrei na teste')
  return
}

export async function getProducts(req, res) {

  try {
    const { category, productName } = req.query;

    // console.log("query =", req.query);
    // console.log('category =', category)
    // console.log('productName =', productName)

    let productsData = [];
    if (category) {
  
      // products = await products.find({ category }).toArray();
      productsData = await products.find({ category }).toArray();
    } else if (productName) {
      
      //   products = await products.find({ productName: productName });
      productsData = await products
        .find({ productName: { $regex: productName, $options: "i" } })
        .toArray();

      // db.products.find({productName: /.*malte.*/i})
    } else {
      
      productsData = await products.find().toArray();
    }
    return res.status(200).send(productsData);
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
    // const products = await products.insertOne(body);
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

import productSchema from "../schemas/productSchema.js";

export default function validationProductSchema(req, res, next) {
  try {
    const body = req.body;
    const { error } = productSchema.validate(body, { convert: false });

    if (error) {
      return res
        .status(422)
        .send({ message: error.details.map((e) => e.message) });
    }
    next();
  } catch (error) {
    console.error(error);
    return res.status(422).send({ message: error });
  }
}

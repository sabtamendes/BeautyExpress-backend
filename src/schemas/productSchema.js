import joi from "joi";

const productSchema = joi.object({
  productName: joi.string().required(),
  productUrl: joi.string().required(),
  category: joi.string().required(),
  unitaryValue: joi.number().precision(2).required(),
  stock: joi.number().required(),
});

export default productSchema;

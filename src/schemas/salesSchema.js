import joi from 'joi'

 const salesSchema = joi.object({
    iduser: joi.string().required(),
    date: joi.string().required(),
    paymentType: joi.valid('credito', 'debito', 'boleto', 'n'),
    status: joi.valid('P', 'V').required(),
    productsList: joi.array().items(joi.object({
        idProduct: joi.string().required(),
        quantity: joi.number().required(),
        unitaryValue: joi.number().precision(2).required()
    }))
    // paymentType: joi.valid('credito', 'debito', 'boleto', 'n'),
    // status: joi.valid('P', 'V').required()
    
})
export default salesSchema;
/*

products
productName
productUrl
category
unitaryValue
stock

rotas
GET /produtos
GET /produtos/{id}
POST /produtos

body
{
 productName: obrigatório
 productUrl: obrigatório
 category: obrigatório
 unitaryValue: obrigatório
 stock: obrigatório
}

*/
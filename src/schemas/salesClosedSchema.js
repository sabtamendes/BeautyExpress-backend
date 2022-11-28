import joi from 'joi'

export  const salesClosedSchema = joi.object({
    userId: joi.string().required(),
    date: joi.string().required(),
    paymentType: joi.valid('credito', 'debito', 'boleto', 'n'),
    status: joi.valid('P', 'V').required(),
    idProduct: joi.string().required(),
    quantity: joi.number().required(),
    unitaryValue: joi.number().precision(2).required()
})
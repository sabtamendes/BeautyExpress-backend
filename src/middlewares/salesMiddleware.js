import salesSchema from '../schemas/salesSchema.js'

export default function salesSchemaMiddleware(request, response, next){
    const body = request.body
    try {
        
        const { error } = salesSchema.validate(body, { convert:false })

        if(error) {
            return response.status(422).send({message: error.details.map( (e) => e.message)})
        }
        response.locals.user = body;
    } catch (error) {
        console.error(error)
        return response.status(422).send({message: error})
    }
    next()
}
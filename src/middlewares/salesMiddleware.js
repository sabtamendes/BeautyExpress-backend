import salesSchema from '../schemas/salesSchema.js'

export default function (request, response, next)
{
    try {
        const body = request.body
        const { error } = salesSchema.validate(body, { convert:false })

        if(error) {
            return response.status(422).send({message: error.details.map( (e) => e.message)})
        }
        next()
    } catch (error) {
        console.error(error)
        return response.status(422).send({message: error})
    }
}
import { sales } from "../database/db.js";


export async function listSales(request, response)
{
    try {
        
            productsData = await sales.find().toArray()

        
        return response.status(200).send(productsData)
    } catch (error) {
        console.error(error)
        return response.status(500).send({message: error})
    }
}

export async function saveRequest(request, response)
{
    const body = request.body

    try {
        const query = { $and:[{iduser: body.iduser}, {date: body.date} ]}
        const update = { $set: {productsList: body.productsList}}

        // esta opção define que se a query não encontrar registro segundo os critérios de query (where), o registro será inserido no banco de dados; caso
        //contrário, será excutado o update normalmente
        const options = {upsert: true} 

        //await sales.insertOne(body)
        await sales.updateOne(query, update, options)
        return response.sendStatus(200)
    } catch (error) {
        console.error(error)
        return response.status(500).send({message: error})
    }
}



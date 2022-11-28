import dayjs from "dayjs";

export async function saveOrderFiniched(res, req) {
    const user = req.locals.user;

    console.log(user)
    try {

        const addNewCar = {
            userId: user.token,
            date: dayjs().format("DD/MM/YYYY"),
            paymentType: user.paymentType,
            status: user.status,
            idProduct: user.idProduct,
            quantity: user.quantity,
            unitaryValue: user.unitaryValue
        }

        await sales.insertOne(addNewCar);

        res.senStatus(200);

    } catch (error) {
        console.error(error)
    }
}
import dayjs from "dayjs";

export async function saveOrderFiniched(res, req) {
    // const user = req.locals.user;
    const user = req.body.user;
    const car = req.body.car;
    const card = req.body.card;
    console.log(car)
    try {

        const addNewCar = {
            userId: user.userId,
            date: dayjs().format("DD/MM/YYYY"),
            paymentType: card.paymentType,
            status: "V",
            idProduct: car.idProduct,
            quantity: car.quantity,
            unitaryValue: car.unitaryValue
        }

        await sales.insertOne(addNewCar);

        res.senStatus(200);

    } catch (error) {
        console.error(error)
    }
}
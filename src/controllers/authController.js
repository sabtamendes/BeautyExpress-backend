import { users, connection } from "../database/db.js";
import bcrypt from "bcrypt";
import { v4 as uuidV4 } from "uuid";

export async function postSignUp(req, res) {
    const user = res.locals.user;
    console.log(user, "authController function postSignUp")

    const passwordEncrypted = bcrypt.hashSync(user.password, 10);
    // const confirmPasswordEncrypted = bcrypt.hashSync(user.confirmPassword, 10);

    try {

        await users.insertOne({ ...user, password: passwordEncrypted });

        res.sendStatus(201);

    } catch (error) {
        res.sendStatus(500).send(error);
    }
}

export async function postSignIn(req, res) {
    const user = res.locals.user;
    console.log(user, "authController function postSignIn")
    const token = uuidV4();
    try {

        //caso o usuário esteja logado
        // await cart.updateOne({ token: user.token }, { $set: { userId: user._id } });

        await connection.insertOne({ token, userId: user._id  });
console.log("AQUI")
        res.send({ name: user.name, token});

    } catch (error) {
        res.sendStatus(500);
    }
}
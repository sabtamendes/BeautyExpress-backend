import { users } from "../database/db.js";
import bcrypt from "bcrypt";


export async function postSignUp(req, res) {
    const user = res.locals.user;
    console.log(user, "authController function postSignUp")

    const passwordEncrypted = bcrypt.hashSync(user.password, 10);

    try {

        await users.insertOne({ ...user, password: passwordEncrypted });

        res.sendStatus(201);

    } catch (error) {
        res.sendStatus(500).send(error);
    }
}

export async function postSignIn(req, res) {
    const user = res.locals.user;
  
    try {
        res.send({ name: user.name, token: user.token });

    } catch (error) {
        res.sendStatus(500);
    }
}
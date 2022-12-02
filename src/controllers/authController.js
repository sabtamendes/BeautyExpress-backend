import { connection, users } from "../database/db.js";
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
    const { email, token } = res.locals.user;

    try {
        const user = await users.findOne({ email });
console.log(user, "LOGIN")
        res.send({ name: user.name, token, userId: user.userId  });

    } catch (error) {
        res.sendStatus(500);
    }
}

export async function loggingOut(req, res) {
    const user = res.locals.user;
    console.log(user, "LOGGING OUT");

    try {
        await connection.deleteOne({ token: user.token });

        res.sendStatus(200);
    } catch (error) {
        res.status(500).send({ error: error });
    }
}
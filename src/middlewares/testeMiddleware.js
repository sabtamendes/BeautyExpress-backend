import { users } from "../database/db.js";
import { signInSchema, signUpSchema } from "../schemas/users.schema.js";
import bcrypt from "bcrypt";

export async function signInSchemaValidation(req, res, next) {
    const user = req.body;

    const { error } = signInSchema.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    try {

        const userHasAnAccount = await users.findOne({ email });

        if (!userHasAnAccount) {
            return res.status(401).send({ message: "Usuário não existe" });
        }

        const isInAsession = await connection.findOne({ userId: token });

        if (isInAsession) {
            return res.status(401).send({ message: "Sua conta já está logada, tente novamente!" });
        }
        
    } catch (error) {
        res.sendStatus(500);
    }


    next();
}

export async function signUpSchemaValidation(req, res, next) {
    const user = req.body;

    const { error } = signUpSchema.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    try {

        const isEmailAllreadyInUse = await users.findOne({ email: user.email });

        if (isEmailAllreadyInUse) {
            return res.status(409).send({ message: "Este Email já está em uso!" });
        }

        res.locals.user = user;

    } catch (error) {
        res.sendStatus(500);

    }

    res.locals.signIn = user;

    next();
}
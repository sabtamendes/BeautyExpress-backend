import { users } from "../database/db.js";
import { signUpSchema } from "../schemas/userSchema.js";

export async function signUpValidation(req, res, next) {
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

    next();
}
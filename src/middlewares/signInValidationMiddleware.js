import { users, connection } from "../database/db.js";
import { signInSchema } from "../schemas/userSchema.js";
import bcrypt from "bcrypt";

export async function signInValidation(req, res, next) {
    
    const user = req.body;

    const { error } = signInSchema.validate(user, { abortEarly: false });

    if (error) {
        const errors = error.details.map((detail) => detail.message);
        return res.status(400).send(errors);
    }

    try {

        const userHasAnAccount = await users.findOne({ email : user.email });

        if (!userHasAnAccount) {
            return res.status(401).send({ message: "Usuário não existe" });
        }

        const isInAsession = await connection.findOne({ token: user.token});

        
        if (isInAsession) {
            return res.status(401).send({ message: "Sua conta já está logada!" });
        }

        const validPassword = bcrypt.compareSync(user.password, userHasAnAccount.password);
       
        if (!validPassword) {
            return res.sendStatus(401);
        }
        
        res.locals.user = user;
        
    } catch (error) {
        res.sendStatus(500);
    }


    next();
}
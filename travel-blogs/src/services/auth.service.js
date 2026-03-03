import { loginSchema, registerSchema } from '#validation/auth.validation';
import db from '#db';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const login = async (req) => {
        const payload = loginSchema.parse(req.body);
        const userData = await db.users.findFirst({
                where: {
                        email: payload.email,
                },
        });

        if (
                userData &&
                bcrypt.compareSync(payload.password, userData.password)
        ) {
                delete userData.password;
                const token = jwt.sign(userData, process.env.JWT_SECRET);
                return token;
        }

        // return payload;
};

export const register = async (req) => {
        const payload = registerSchema.parse(req.body);

        const salt = bcrypt.genSaltSync(10);
        const encryptedPass = bcrypt.hashSync(payload.password, salt);

        const response = await db.users.create({
                data: {
                        ...payload,
                        password: encryptedPass,
                },
        });
        delete response.password;
        return response;
};

import { Request, Response, NextFunction } from 'express';
import joi from 'joi';
import { LoginUser, RegisterUser } from '../controllers/auth';

export const filterRegister = async (req: Request, res: Response, next: NextFunction) => {

    const payload: RegisterUser = req.body;
    const schema = joi.object({
        email: joi.string()
        .email({minDomainSegments: 2, tlds: { allow: ['com', 'net', 'it'] }})
        .required(),

        first_name: joi.string()
        .min(4)
        .max(30)
        .required(),

        last_name: joi.string()
        .min(4)
        .max(40)
        .required(),

        password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,}$'))
        .required(),

    });

    try {

        const { error } = await schema.validateAsync(payload);
        if (!error) {
            next();
        } else throw new Error(error.message)
    } catch(error) {
        next(error);
    }
}

export const filterLogin = async (req: Request, res: Response, next: NextFunction) => {

    const payload: LoginUser = req.body;
    const schema = joi.object({
        email: joi.string()
        .email({minDomainSegments: 2, tlds: { allow: ['com', 'net', 'it'] }})
        .required(),

        password: joi.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{8,}$'))
        .required(),

    });

    try {

        const { error } = await schema.validateAsync(payload);
        if (!error) {
            next();
        } else throw new Error(error.message)
    } catch(error) {
        next(error);
    }
}
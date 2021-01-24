import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/auth';

interface IAuthController {
    signUpController: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}

export interface User {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}


class AuthController implements IAuthController {

    signUpController = async (req: Request, res: Response, next: NextFunction): Promise<void> => {

        const newUser: User = req.body;

        try {
            const [result, data]  = await AuthService.signUpService(newUser);

            if (!result) {
                throw new Error(data as string);
            } else {
                res.json({
                    data: {
                        action: 'Creating new user',
                        success: result,
                    }
                });
            }

        } catch (error) {
            next(error);
        }
    }
}


export default new AuthController();
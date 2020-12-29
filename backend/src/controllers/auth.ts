import { NextFunction, Request, Response } from 'express';
import { Query } from 'mysql';
import AuthService from '../services/auth';

interface IauthController {
    signUpController: (req: Request, res: Response) => Promise<void>;
}

export interface User {
    id: string;
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}


class AuthController implements IauthController {

    signUpController = async (req: Request, res: Response): Promise<void> => {

        const newUser: User = req.body;

        try {
            const result = await AuthService.signUpService(newUser);

        } catch (error) {
            
        }
    }
}


export default new AuthController();
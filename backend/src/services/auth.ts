import { Request, Response } from 'express';

interface IauthService {
    loginService: (_: Request, res: Response) => void;
}

class AuthService implements IauthService {

    loginService = (_: Request, res: Response): void => {
        res.json('works 2');
    }
}


export default new AuthService();
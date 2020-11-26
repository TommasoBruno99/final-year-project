import { Request, Response } from 'express';

interface IauthService {
    loginService: (req: Request, res: Response) => void;
}

class AuthService implements IauthService {

    loginService = (req: Request, res: Response): void => {
        res.json(req.body);
    }
}


export default new AuthService();
import { Request, Response } from 'express';

interface IauthService {
    loginService: (req: Request, res: Response) => void;
}

class AuthService implements IauthService {

    loginService = async (req: Request, res: Response): Promise<void> => {
        await res.json({data: req.body});
    }
}


export default new AuthService();
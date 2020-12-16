import { Request, Response } from 'express';

interface IauthController {
    loginController: (req: Request, res: Response) => void;
}

class AuthController implements IauthController {

    loginController = async (req: Request, res: Response): Promise<void> => {
        await res.json({data: req.body});
    }
}


export default new AuthController();
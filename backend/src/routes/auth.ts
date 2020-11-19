import { Router, Request, Response } from 'express';


const authRouter: Router = Router();

authRouter.get('/', (req: Request, res: Response) => {

    res.json('works');
});


export default authRouter;
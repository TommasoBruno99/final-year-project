import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

export const notFound = (req: Request, res: Response, next: NextFunction): void => {
    const notFoundError = new Error('Not Found');
    next(notFoundError);
}


export const errorHandling = (error: Error, req: Request, res: Response, next: NextFunction): void => {

    res.statusCode = error.message === 'Not Found' ? 404 : 500;
    res.json({
        data: {
            error: {
                status: res.statusCode,
                message: error.message,
                stack: process.env.MODE === 'development' ? error.stack : null
            }
        }
    });
}
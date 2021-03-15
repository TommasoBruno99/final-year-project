import { Request, Response, NextFunction } from "express";

export const notFound = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const notFoundError = new Error("Not Found");
  next(notFoundError);
};

export const errorHandling = (
  error: Error,
  req: Request,
  res: Response,
  _: NextFunction
): void => {
  const status = res.statusCode;
  res.status(status ? status : 500);
  res.json({
    data: {
      error: {
        status: res.statusCode,
        message: error.message,
        stack: process.env.MODE === "development" ? error.stack : null,
      },
    },
  });
};

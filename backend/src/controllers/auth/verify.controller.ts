import { NextFunction, Response, Request } from "express";
import jweb from "jsonwebtoken";

export const verifyController = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const token = req.headers.authentication;
    if (!token) throw new Error("Not verifed");
    else {
      const isVerified = await jweb.verify(
        token as string,
        process.env.JSON_TOKEN as jweb.Secret
      );

      if (isVerified) {
        res.json({
          data: {
            action: "Verifying user",
            sucess: true,
            user: isVerified,
            access_token: token,
          },
        });
      } else throw new Error("Not verified");
    }
  } catch (error) {
    res.statusCode = 401;
    next(error);
  }
};

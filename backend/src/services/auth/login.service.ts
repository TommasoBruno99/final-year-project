import bcrypt from "bcrypt";
import jweb from "jsonwebtoken";
import { prisma } from "../..";
import { LoginResponse, User } from "../../utils/interfaces/auth";

export const loginService = async (loginUser: User): Promise<LoginResponse> => {
  try {
    const resultQuery = await prisma.user.findUnique({
      where: {
        email: loginUser.email,
      },
    });

    if (resultQuery) {
      if (await bcrypt.compare(loginUser.password, resultQuery.password)) {
        const responseUser = {
          id: resultQuery.id,
          firstName: resultQuery.firstName,
          lastName: resultQuery.lastName,
          email: resultQuery.email,
          role: resultQuery.role,
          seniority: resultQuery.seniority,
          updatedAt: resultQuery.updatedAt,
        } as User;

        const token = process.env.JSON_TOKEN;
        const jsonwebtoken = await jweb.sign(
          responseUser,
          token as jweb.Secret,
          {
            expiresIn: "3h",
          }
        );

        return {
          success: true,
          user: responseUser,
          access_token: jsonwebtoken,
        };
      } else {
        throw new Error("Problem during login");
      }
    } else {
      throw new Error("Problem during login");
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

import { SignUpResponse, User } from "../../interfaces/auth";
import bcrypt from "bcrypt";
import { prisma } from "../../";

export const signUpService = async (newUser: User): Promise<SignUpResponse> => {
  try {
    const resultQuery = await prisma.user.findFirst({
      where: {
        email: newUser.email,
      },
    });

    if (resultQuery) {
      throw new Error("Email already in use");
    } else {
      const hash = await bcrypt.hash(newUser.password, 8);
      await prisma.user.create({
        data: {
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          password: hash,
          createdAt: new Date(),
          role: newUser.role,
        },
      });

      return {
        success: true,
      };
    }
  } catch (error) {
    return {
      success: false,
      error: error.message,
    };
  }
};

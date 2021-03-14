import bcrypt from "bcrypt";
import jweb from "jsonwebtoken";
import User from "../models/user";

class AuthService {
  signUpService = async (newUser: User): Promise<[boolean, string]> => {
    try {
      const resultQuery = await User.query()
        .select("email")
        .where("email", newUser.email);

      if (resultQuery) {
        throw new Error("Email already in use");
      } else {
        const hash = await bcrypt.hash(newUser.password, 8);
        await User.query().insert({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          password: hash,
          isAdmin: "no",
          lastLogin: new Date(),
        });

        return [true, ""];
      }
    } catch (error) {
      return [false, error.message];
    }
  };

  loginService = async (loginUser: User): Promise<[boolean, string]> => {
    try {
      const resultQuery = await User.query().findOne({
        email: loginUser.email,
      });

      if (resultQuery) {
        if (await bcrypt.compare(loginUser.password, resultQuery.password)) {
          const returnObj = {
            id: resultQuery.id,
            firstName: resultQuery.firstName,
            lastName: resultQuery.lastName,
            email: resultQuery.email,
            isAdmin: resultQuery.isAdmin,
            lastLogin: resultQuery.lastLogin,
          };

          const token = process.env.JSON_TOKEN;
          const jsonwebtoken = await jweb.sign(
            returnObj,
            token as jweb.Secret,
            {
              expiresIn: "3h",
            }
          );

          return [true, jsonwebtoken];
        } else {
          throw new Error("Problem during login");
        }
      } else {
        throw new Error("Problem during login");
      }
    } catch (error) {
      return [false, error.message];
    }
  };
}

export default new AuthService();

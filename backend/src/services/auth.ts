import { LoginUser, RegisterUser } from "../controllers/auth";
import AuthRepository from '../repositories/auth';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import jweb from 'jsonwebtoken';

interface IAuthService {
    signUpService: (newUser: RegisterUser) => void;
}

class AuthService implements IAuthService { 

    signUpService = async (newUser: RegisterUser): Promise<[Boolean, Object | String]> => {

        try {

            const resultQuery: RegisterUser[] = await AuthRepository.findUserEmail(newUser.email);
            
            if (resultQuery.length > 0) {
                
                throw new Error('Email already in use');
            } else { 

                const uniqueId: string = await v4();
                const hash = await bcrypt.hash(newUser.password, 8);
                await AuthRepository.insertNewUser(uniqueId, newUser.first_name, newUser.last_name, newUser.email, hash, false, new Date());
                
                return [true, {}];
            }

        } catch(error) {

            return [false, error.message];
        }
    }

    loginService = async (loginUser: LoginUser): Promise<[Boolean, Object | String]> => {

        try {

            const resultQuery: RegisterUser[] = await AuthRepository.findUserEmail(loginUser.email);

            if (resultQuery.length > 0) {

                if (await bcrypt.compare(loginUser.password, resultQuery[0].password)) {

                    const returnObj = {
                        id: resultQuery[0].id,
                        first_name: resultQuery[0].first_name,
                        last_name: resultQuery[0].last_name,
                        is_admin: resultQuery[0].is_admin,
                        last_login: resultQuery[0].last_login
                    }

                    const token = process.env.JSON_TOKEN;
                    const jsonwebtoken = await jweb.sign(returnObj, token as jweb.Secret, {
                        expiresIn: '3h'
                    });
                    
                    return [true, jsonwebtoken];
                } else {

                    throw new Error('Problem during login');
                }
            } else {

                throw new Error('Problem during login');
            }
            
        } catch(error) {
            
            return [false, error.message];
        }
    }
}

export default new AuthService();
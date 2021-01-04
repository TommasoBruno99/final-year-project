import { User } from "../controllers/auth";
import AuthRepository from '../repositories/auth';
import bcrypt from 'bcrypt';

interface IAuthService {
    signUpService: (newUser: User) => void;
    generateHashPassword: (rowPassword: string) => void;
}

class AuthService implements IAuthService { 

    signUpService = async (newUser: User): Promise<[Boolean, Object | String]> => {

        try {

            const resultQuery: User[] = await AuthRepository.findUsername(newUser.email);
            
            if (resultQuery.length > 0) {
                // User already exists
                throw new Error('User already exists');
            } else {

                // Generate hash of password
                const hash = await this.generateHashPassword(newUser.password);
                console.log(hash);

                return [true, hash];
            }

        } catch(error) {
            return [false, error.message];
        }
    }


    generateHashPassword = async (rowPassword: string): Promise<string> => {
        return await bcrypt.hash(rowPassword, 8);
    }
}

export default new AuthService();
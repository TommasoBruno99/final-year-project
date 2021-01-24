import { User } from "../controllers/auth";
import AuthRepository from '../repositories/auth';
import bcrypt from 'bcrypt';
import { v4 } from 'uuid';

interface IAuthService {
    signUpService: (newUser: User) => void;
}

class AuthService implements IAuthService { 

    signUpService = async (newUser: User): Promise<[Boolean, Object | String]> => {

        try {

            const resultQuery: User[] = await AuthRepository.findUserEmail(newUser.email);
            
            if (resultQuery.length > 0) {
                // User already exists
                throw new Error('Email already in use');
            } else { 

                // Generate unique id 
                const uniqueId: string = await v4();

                // Generate hash of password
                const hash = await bcrypt.hash(newUser.password, 8);

                await AuthRepository.insertNewUser(uniqueId, newUser.first_name, newUser.last_name, newUser.email, hash, false, new Date());

                return [true, {}];
            }

        } catch(error) {
            return [false, error.message];
        }
    }
}

export default new AuthService();
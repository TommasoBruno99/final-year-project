import { Query } from 'mysql';
import { User } from '../controllers/auth';
import connection from '../db/db';

interface IAuthRepository {
    findUsername: (email: string) => Promise<Array<User>>;
}

class AuthRepository implements IAuthRepository {

    findUsername = async (email: string): Promise<Array<User>> => {
        
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE first_name = ?', [email] ,(err, result) => {
                if (err) reject(err);
                return resolve(result);
            })
        });
    }
}

export default new AuthRepository();
import { User } from '../controllers/auth';
import connection from '../db/db';

interface IAuthRepository {
    findUserEmail: (email: string) => Promise<Array<User>>;
    insertNewUser: (id: string, first_name: string, last_name: string, email: string, password: string, isAdmin: boolean, last_login: Date) => Promise<void>;
}

class AuthRepository implements IAuthRepository {

    findUserEmail = async (email: string): Promise<Array<User>> => {
        
        return new Promise((resolve, reject) => {
            connection.query('SELECT * FROM user WHERE email = ?', [email], (err, result) => {
                if (err) reject(err);
                return resolve(result);
            })
        });
    }

    insertNewUser = async (id: string, first_name: string, last_name: string, email: string, password: string, isAdmin: boolean, last_login: Date): Promise<void> => {
        return new Promise((resolve, reject) => {
            connection.query('INSERT INTO user (id, first_name, last_name, email, password, is_admin, last_login) VALUES (?, ?, ?, ?, ?, ?, ?)', [id, first_name, last_name, email, password, isAdmin ? 'ye' : 'no', last_login], (err, result) => {
                if (err) reject(err);
                return resolve(result);
            })
        });
    }
}

export default new AuthRepository();
import { createConnection, Connection, MysqlError } from 'mysql';

const connection: Connection = createConnection({
    host: 'localhost',
    database: 'scheduling_project',
    user: 'root',
    password: 'password',
    port: 3306
});

connection.connect((error: MysqlError) => {
    if (error) throw error;
    else console.log('Connected succesfully to the database');
});

export default connection;
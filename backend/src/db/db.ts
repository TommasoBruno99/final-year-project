import mysqlDB from 'mysql';

const connection: mysqlDB.Connection = mysqlDB.createConnection({
    host: 'localhost',
    database: 'scheduling_project',
    user: 'root',
    password: 'password',
    port: 3306
});

connection.connect();

export default connection;
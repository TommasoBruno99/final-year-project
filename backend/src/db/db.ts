import { createConnection, Connection, MysqlError } from "mysql";
import { database_config } from "./settings";

const connection: Connection = createConnection(database_config);

connection.connect((error: MysqlError) => {
  if (error) throw error;
  else console.log("Connected succesfully to the database");
});

export default connection;

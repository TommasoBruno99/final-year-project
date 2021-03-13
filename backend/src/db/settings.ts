import { ConnectionConfig } from "mysql";

export const database_config: ConnectionConfig = {
  host: process.env.HOST,
  database: process.env.DATABASE_NAME,
  user: process.env.USERNAME,
  password: process.env.PASSWORD,
  // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
  port: parseInt(process.env.DATABASE_PORT!),
};

const knexConfig = {
  development: {
    client: "mysql",
    connection: {
      user: "root",
      password: "password",
      database: "final_project_db",
      port: 3306,
    },
  },
  migrations: { tableName: "knex_migrations", directory: "migrations" },
  seeds: { directory: "./seeds" },
};
export default knexConfig;

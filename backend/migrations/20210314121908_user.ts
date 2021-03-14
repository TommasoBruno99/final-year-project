import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  await knex.schema.dropTableIfExists("user");
  await knex.schema.createTable("user", (table: any) => {
    table.increments("id").primary();
    table.string("firstName").notNullable();
    table.string("lastName").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("isAdmin").notNullable();
    table.date("lastLogin").notNullable();
  });
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTableIfExists("user");
}

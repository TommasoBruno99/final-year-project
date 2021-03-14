import { Knex } from "knex";
import bcrypt from "bcrypt";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("user").del();

  // Inserts seed entries
  await knex("user").insert([
    {
      firstName: "admin",
      lastName: "admin",
      email: "admin@gmail.com",
      password: await bcrypt.hash("root", 8),
      isAdmin: "yes",
      lastLogin: new Date(),
    },
    {
      firstName: "tommaso",
      lastName: "bruno",
      email: "dadas@gmail.com",
      password: await bcrypt.hash("random999", 8),
      isAdmin: "no",
      lastLogin: new Date(),
    },
  ]);
}

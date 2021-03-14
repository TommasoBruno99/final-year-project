import { Model } from "objection";

export default class User extends Model {
  id!: number;
  firstName!: string;
  lastName!: string;
  email!: string;
  password!: string;
  isAdmin!: string;
  lastLogin!: Date;

  static tableName = "user";
  static jsonSchema = {
    type: "object",
    required: [
      "firstName",
      "lastName",
      "email",
      "password",
      "isAdmin",
      "lastLogin",
    ],
    properties: {
      id: { type: "integer" },
      firstName: { type: "string", minLength: 5, maxLength: 30 },
      lastName: { type: "string", minLength: 5, maxLength: 30 },
      isAdmin: { type: "string" },
      email: { type: "string" },
      password: { type: "string", minLength: 8 },
    },
  };
}

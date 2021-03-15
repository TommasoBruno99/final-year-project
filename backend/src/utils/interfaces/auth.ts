enum Role {
  USER = "USER",
  ADMIN = "ADMIN",
}

enum Seniority {
  JUNIOR = "JUNIOR",
  SENIOR = "SENIOR",
}

// Login
export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  role: Role;
  seniority: Seniority;
  createdAt: Date;
  updatedAt: Date;
}

export interface LoginResponse {
  success: boolean;
  user?: User;
  access_token?: string;
  error?: string;
}

// Sign up
export interface NewUser {
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  seniority: Seniority;
  createdAt: Date;
}

export interface SignUpResponse {
  success: boolean;
  error?: string;
}

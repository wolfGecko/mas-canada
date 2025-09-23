import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import PostgresAdapter from "@auth/pg-adapter";
import { Pool } from "pg";
import { authConfig } from "./auth.config";

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false }
});

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  adapter: PostgresAdapter(pool),
  providers: [
    Credentials({
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        // Simple hardcoded credentials for admin access
        // In production, you'd validate against a database
        if (username === "admin" && password === "maswrestling2024") {
          return {
            id: "1",
            name: "Admin",
            email: "admin@maswrestling.ca",
          };
        }

        return null;
      },
    }),
  ],
});

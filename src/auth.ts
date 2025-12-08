import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";

export const { auth, signIn, signOut, handlers } = NextAuth({
  ...authConfig,
  session: {
    strategy: "jwt", // Use JWT sessions for Credentials provider
  },
  providers: [
    Credentials({
      async authorize(credentials) {
        const { username, password } = credentials as {
          username: string;
          password: string;
        };

        // Validate credentials against environment variables
        const adminUsername = process.env.ADMIN_USERNAME;
        const adminPassword = process.env.ADMIN_PASSWORD;

        if (!adminUsername || !adminPassword) {
          console.error('Admin credentials not configured in environment variables');
          return null;
        }

        if (username === adminUsername && password === adminPassword) {
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

import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/admin/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      const isOnLoginPage = nextUrl.pathname === '/admin/login';

      // Allow access to login page
      if (isOnLoginPage) {
        return true;
      }

      // Protect all other /admin routes
      if (isOnAdmin) {
        return isLoggedIn;
      }

      // Allow all other routes
      return true;
    },
  },
  providers: [], // Add providers with an empty array for now
} satisfies NextAuthConfig;
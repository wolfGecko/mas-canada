import { auth } from "@/auth";

export default auth((req) => {
  const isLoggedIn = !!req.auth;
  const isOnAdmin = req.nextUrl.pathname.startsWith('/admin');
  const isOnLoginPage = req.nextUrl.pathname === '/admin/login';

  // Protect all /admin routes except /admin/login
  if (isOnAdmin && !isOnLoginPage && !isLoggedIn) {
    const loginUrl = new URL('/admin/login', req.url);
    return Response.redirect(loginUrl);
  }

  // Redirect logged-in users away from login page
  if (isOnLoginPage && isLoggedIn) {
    const adminUrl = new URL('/admin', req.url);
    return Response.redirect(adminUrl);
  }

  return;
});

export const config = {
  matcher: ['/admin/:path*'],
};

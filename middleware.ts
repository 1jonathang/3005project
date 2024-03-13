// next.js specific file
import authConfig from "./auth.config";
import NextAuth from "next-auth";

import {
  DEFAULT_LOGIN_REDIRECT,
  apiAuthPrefix,
  publicRoutes,
  authRoutes,
} from "@/routes";

const { auth } = NextAuth(authConfig);

// will be redirecting user to respective pages if they try to type in "https://3005project.vercel.app/dashboard" or something without logging in
export default auth((req) => {
  // want entire app to be protected by default
  // make every route protected, then we'll just pick like the landing page and maybe create a new page later to be accessible to not logged in users
  const { nextUrl } = req;
  const isLoggedIn = !!req.auth;

  const isApiAuthRoute = nextUrl.pathname.startsWith(apiAuthPrefix);
  // how we're gonna know if a user is trying to access a route that is public or auth
  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);

  // allow nextjs to handle the auth route correctly without protecting or doing anything with this route
  if (isApiAuthRoute) return;

  if (isAuthRoute) {
    // if user is on the login or sign up page, but is already logged in, then just redirect them to the default page
    if (isLoggedIn) {
      // need to also pass in nextUrl to create an absolute url, turns it into "localhost:3000/dashboard"
      return Response.redirect(new URL(DEFAULT_LOGIN_REDIRECT, nextUrl));
    }
    return;
  }

  // redirect user to login page if not logged in and on a protected route
  if (!isLoggedIn && !isPublicRoute) {

    return Response.redirect(new URL("/auth/login", nextUrl));
  }

  // allow every other route by default
  return;
});

// Optionally, don't invoke Middleware on some paths
// everything put in here will be used to invoke the middleware (auth  function above)
export const config = {
  // every route, except specific next static files and images are going to invoke the middleware
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};

// configuration file for nextauth

import NextAuth from "next-auth";
import authConfig from "./auth.config";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "./lib/db";
import { getUserById } from "./data/user";
import { User } from "@auth/core/types";
import { JWT } from "@auth/core/jwt";
import { UserRole } from "@prisma/client";

// declaring types for our user and token, so that we can pass in the role to the token later
declare module "@auth/core/types" {
  interface User {
    // for now a user on our app can be admin, trainer, or user
    role: UserRole;
  }

  interface Session {
    user: User;
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    role: UserRole;
  }
}

export const {
  handlers: { GET, POST },
  auth,
  signIn,
  signOut,
} = NextAuth({
  pages: {
    signIn: "/auth/login",
    //  when something goes wrong, redirect them to here
    error: "/auth/error",
  },
  // Callbacks are asynchronous functions you can use to control what happens when an action is performed.
  // best to use with jwt
  // play a critical role in asynchronous operations, such as network requests to validate tokens or retrieve user information
  // next auth uses the token to generate the session
  callbacks: {
    // here is where we control what should be returned to the client, we will then later pass it into the session to use throughout our app (e.g, the role and id of the user)
    async jwt({ token }) {
      // means we're logged out, so just return the token
      if (!token.sub) return token;

      // the token.sub is the id of our user
      const existingUser = await getUserById(token.sub);
      if (!existingUser) return token;

      // assigning the users role to the token of this sessions role
      token.role = existingUser.role;
      return token;
    },
    async session({ token, session }) {
      console.log({ sessionToken: token });
      // every single place where we use this session,we can always have access to the id and role of our user
      // now we can type "session.user." and the popup window will include the id and role
      if (token.sub && session.user) session.user.id = token.sub;
      if (token.role && session.user) session.user.role = token.role;

      return session;
    },
  },
  // creating an event to verify a users email that logged in with google or github, just setting the date in which login was succesfull
  events: {
    async linkAccount({ user }) {
      await db.user.update({
        where: { id: user.id },
        data: { emailVerified: new Date() },
      });
    },
  },
  adapter: PrismaAdapter(db),
  // json web token brrrrrrr
  session: { strategy: "jwt" },
  ...authConfig,
});

import { User } from "@prisma/client";
import { NextAuthConfig, Session } from "next-auth";
import { JWT } from "next-auth/jwt";

export const authConfig = {
  pages: {
    signIn: "/login",
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;

      const isOnDashboard = nextUrl.pathname.startsWith("/dashboard");

      if (isOnDashboard) {
        if (isLoggedIn) return true;
        return false;
      } else if (isLoggedIn) {
        return Response.redirect(new URL("/dashboard", nextUrl));
      }

      return true;
    },

    jwt({ token, user }) {
      if (user) {
        const currentUser = user as User;
        token.id = currentUser.id;
        token.name = currentUser.userName;
        token.picture = currentUser.avatar;
        token.sub = currentUser.id;
      }

      return token;
    },

    session({ session, token }: { session: Session; token?: JWT }) {
      if (session.user && token) {
        session.user.id = token.sub as string;
      }

      return session;
    },
  },
  providers: [],
} satisfies NextAuthConfig;

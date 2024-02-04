import NextAuth from "next-auth";
import { prisma } from "./app/lib/prisma";
import { authConfig } from "./auth.config";
import credentials from "next-auth/providers/credentials";
import { z } from "zod";
import bcrypt from "bcryptjs";

const getUser = async (email: string) => {
  try {
    return await prisma.user.findUnique({
      where: {
        email,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error getting user");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    credentials({
      async authorize(credentials) {
        const parsedCredentials = z
          .object({ email: z.string().email(), password: z.string().min(6) })
          .safeParse(credentials);

        if (parsedCredentials.success) {
          const { email, password } = parsedCredentials.data;
          const user = await getUser(email);

          if (!user) return null;
          const comparePassword = await bcrypt.compare(password, user.password);
          if (comparePassword) return user;
        }
        console.log("Invalid credentials");
        return null;
      },
    }),
  ],
});

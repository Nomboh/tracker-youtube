import { prisma } from "@/app/lib/prisma";

export async function GET() {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

// http://localhost:3000/api/dashboard

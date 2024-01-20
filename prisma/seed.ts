import { prisma } from "../app/lib/prisma";
import { orders, users, orderInfo } from "../app/lib/seed-data";
import bcrypt from "bcryptjs";

async function main() {
  await Promise.all(
    users.map(async user => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      await prisma.user.create({
        data: {
          ...user,
          password: hashedPassword,
        },
      });
    })
  );
  console.log(`Seeded ${users.length} users`);

  await Promise.all(
    orders.map(async order => {
      await prisma.order.create({
        data: {
          ...order,
        },
      });
    })
  );

  console.log(`Seeded ${orders.length} orders`);

  await Promise.all(
    orderInfo.map(async order => {
      await prisma.tracking.create({
        data: {
          ...order,
        },
      });
    })
  );

  console.log(`Seeded ${orderInfo.length} tracking info`);
}

main()
  .catch(e => console.error(e))
  .finally(async () => {
    await prisma.$disconnect();
  });

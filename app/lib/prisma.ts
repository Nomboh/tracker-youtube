import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";

// dynamic function and cached data  = Static rendering
// dynamic function and not cached data = Dynamic rendering
// no dynamic function and not cached data = Dynamic rendering
// no dynamic function and cached data = Dynamic rendering

export const prisma = new PrismaClient();

export async function getLastFiveOrders() {
  noStore();
  try {
    // await new Promise(resolve => setTimeout(resolve, 6000));
    return await prisma.order.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      take: 5,
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error getting last 5 orders");
  }
}

export async function getUser() {
  try {
    return await prisma.user.findMany();
  } catch (error) {
    console.log(error);
    throw new Error("Error getting user");
  }
}

export async function getChartData() {
  noStore();
  try {
    const chartData = await prisma.order.groupBy({
      by: ["status", "userId"],
      _count: {
        status: true,
      },
    });

    const transformData = chartData.reduce((result: any, item: any) => {
      const status = item.status.toLowerCase();

      const existingEntry = result.find(
        (entry: any) => entry.userId === item.userId
      );

      if (existingEntry) {
        existingEntry[status] =
          (existingEntry[status] || 0) + item._count.status;
      } else {
        const entry: any = { userId: item.userId };
        entry[status] = item._count.status;
        result.push(entry);
      }

      return result;
    }, []);

    return transformData;
  } catch (error) {
    console.log(error);
    throw new Error("Error getting card data");
  }
}

export async function getCardData() {
  noStore();
  try {
    const numberOfOderDelivered = await prisma.order.count({
      where: {
        status: "delivered",
      },
    });

    const numberOfOrderInTransit = await prisma.order.count({
      where: {
        status: {
          notIn: ["delivered", "pending"],
        },
      },
    });

    const numberOfOrderPending = await prisma.order.count({
      where: {
        status: "pending",
      },
    });

    return {
      numberOfOderDelivered,
      numberOfOrderInTransit,
      numberOfOrderPending,
    };
  } catch (error) {
    console.log(error);
    throw new Error("Error getting card data");
  }
}

export async function getOrders(page: number, search: string) {
  try {
    return await prisma.order.findMany({
      orderBy: {
        updatedAt: "desc",
      },
      skip: (page - 1) * 10,
      take: 10,
      where: {
        OR: [
          {
            productName: {
              contains: search,
            },
          },
          {
            status: {
              contains: search,
            },
          },
          {
            description: {
              contains: search,
            },
          },
        ],
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error getting orders");
  }
}

export async function getOrdersCount(search: string) {
  try {
    return await prisma.order.count({
      where: {
        OR: [
          {
            productName: {
              contains: search,
            },
          },
          {
            status: {
              contains: search,
            },
          },
          {
            description: {
              contains: search,
            },
          },
        ],
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error getting orders count");
  }
}

export async function getTrackingInfo(id: string) {
  try {
    return await prisma.tracking.findFirst({
      where: {
        orderId: id,
      },
      include: {
        order: true,
      },
    });
  } catch (error) {
    console.log(error);
    throw new Error("Error getting order by id");
  }
}

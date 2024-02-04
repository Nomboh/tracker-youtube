import React, { Suspense } from "react";
import { Metadata } from "next";
import { getOrdersCount } from "@/app/lib/prisma";
import Upbar from "@/app/ui/components/upbar";
import OrderLinks from "@/app/ui/orders/order-links";
import Pagination from "@/app/ui/orders/pagination";
import SearchOrders from "@/app/ui/orders/search-orders";
import Table from "@/app/ui/orders/table";
import { OrderListSkeleton } from "@/app/ui/skeletons";

export const metadata: Metadata = {
  title: "Orders",
  description: "Orders page for all orders",
};

async function Orders({
  searchParams,
}: {
  searchParams: {
    search: string;
    page: string;
  };
}) {
  const query = searchParams?.search || "";
  const page = Number(searchParams?.page) || 1;

  const ordersCount = await getOrdersCount(query);
  return (
    <div className=" w-full overflow-hidden h-full">
      <Upbar>
        <>
          <h2 className=" text-xl md:text-2xl font-bold text-indigo-100">
            Orders
          </h2>
          <div className="w-40 md:w-[800px] relative">
            <SearchOrders />
          </div>
        </>
      </Upbar>

      <OrderLinks />

      <Suspense fallback={<OrderListSkeleton />}>
        <Table query={query} page={page} />
      </Suspense>

      <Pagination orderCount={ordersCount} />
    </div>
  );
}

export default Orders;

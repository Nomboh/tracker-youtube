import { getOrders } from "@/app/lib/prisma";
import Upbar from "@/app/ui/components/upbar";
import SearchOrders from "@/app/ui/orders/search-orders";
import React from "react";

async function Orders() {
  const orders = await getOrders();
  console.log(orders);

  return (
    <main className=" w-full overflow-hidden h-full">
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
    </main>
  );
}

export default Orders;

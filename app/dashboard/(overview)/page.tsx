import React, { Suspense } from "react";
import Upbar from "../../ui/components/upbar";
import { CardWrapper } from "../../ui/dashboard/cards";
import LatestOrders from "../../ui/dashboard/latest-orders";
import DashUsers from "../../ui/dashboard/dash-users";
import OrderChat from "../../ui/dashboard/order-chart";
import { getChartData } from "../../lib/prisma";
import {
  CardWrapperSkeleton,
  LatestOrdersSkeleton,
  OrderDetailSkeleton,
} from "../../ui/skeletons";

async function Dashboard() {
  const chartData = await getChartData();
  return (
    <main className=" h-screen w-full overflow-auto">
      <Upbar>
        <p className=" cursor-pointer text-xl md:text-2xl text-indigo-100 font-bold">
          Dashboard
        </p>
      </Upbar>

      <div className="grid my-5 grid-cols-2 md:grid-cols-4 gap-6 lg:grid-cols-4">
        <Suspense fallback={<CardWrapperSkeleton />}>
          <CardWrapper />
        </Suspense>
      </div>

      <div className=" flex md:flex-col flex-col-reverse">
        <div className=" flex w-full md:overflow-hidden flex-col gap-5 md:flex-row items-start">
          <div className=" w-full md:w-1/2">
            <h1 className=" text-2xl mb-1">Latest Orders</h1>

            <Suspense fallback={<LatestOrdersSkeleton />}>
              <LatestOrders />
            </Suspense>
          </div>
          <div className=" w-full md:w-1/2">
            <h1 className=" text-2xl mb-1">All Users</h1>
            <Suspense fallback={<OrderDetailSkeleton />}>
              <DashUsers />
            </Suspense>
          </div>
        </div>
      </div>

      <div className=" w-full mt-8 h-[350px]">
        <h1 className=" text-2xl mb-2">Chart Section</h1>
        <Suspense fallback={<OrderDetailSkeleton />}>
          <OrderChat chartData={chartData} />
        </Suspense>
      </div>
    </main>
  );
}

export default Dashboard;

import React from "react";
import Upbar from "../ui/components/upbar";
import Cards from "../ui/dashboard/cards";
import LatestOrders from "../ui/dashboard/latest-orders";
import DashUsers from "../ui/dashboard/dash-users";
import OrderChat from "../ui/dashboard/order-chart";

function Dashboard() {
  return (
    <main className=" h-screen w-full overflow-auto">
      <Upbar>
        <p className=" cursor-pointer text-xl md:text-2xl text-indigo-100 font-bold">
          Dashboard
        </p>
      </Upbar>

      <div className="grid my-5 grid-cols-2 md:grid-cols-4 gap-6 lg:grid-cols-4">
        <Cards title="Pending" value="20" type="pending" />
        <Cards title="On the way" value="20" type="on the way" />
        <Cards title="Delivered" value="20" type="delivered" />
        <Cards title="Reviews" value="20" type="reviews" />
      </div>

      <div className=" flex md:flex-col flex-col-reverse">
        <div className=" flex w-full md:overflow-hidden flex-col gap-5 md:flex-row items-start">
          <div className=" w-full md:w-1/2">
            <h1 className=" text-2xl mb-1">Latest Orders</h1>
            <div className="">
              <LatestOrders />
            </div>
          </div>
          <div className=" w-full md:w-1/2">
            <h1 className=" text-2xl mb-1">All Users</h1>
            <DashUsers />
          </div>
        </div>
      </div>

      <div className=" w-full mt-8 h-[350px]">
        <h1 className=" text-2xl mb-2">Chart Section</h1>
        <OrderChat />
      </div>
    </main>
  );
}

export default Dashboard;

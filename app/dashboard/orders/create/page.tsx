import React from "react";
import Breadcrumb from "@/app/ui/components/breadcrumb";

import Upbar from "@/app/ui/components/upbar";
import OrderCreate from "@/app/ui/orders/order-create";
import { Metadata } from "next";
import { auth } from "@/auth";

export const metadata: Metadata = {
  title: "Create Order",
  description: "Create a new order for a customer",
};

async function CreateOrder() {
  const authUser = await auth();
  return (
    <main className="">
      <Upbar>
        <Breadcrumb
          breadcrumbs={[
            {
              label: "Orders",
              href: "/dashboard/orders",
            },
            {
              label: "Create Order",
              href: "/dashboard/orders/create",
              active: true,
            },
          ]}
        />
      </Upbar>

      <div className=" w-full">
        <h1 className=" text-2xl my-5 font-semibold text-gray-900"></h1>

        <OrderCreate id={authUser?.user?.id as string} />
      </div>
    </main>
  );
}

export default CreateOrder;

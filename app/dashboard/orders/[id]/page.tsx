import Breadcrumb from "@/app/ui/components/breadcrumb";
import Upbar from "@/app/ui/components/upbar";
import OrderEdit from "@/app/ui/orders/edit-order";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Edit Order",
  description: "Edit an existing order for a customer",
};

function EditOrder({
  params: { id },
  searchParams: { lat, lng },
}: {
  params: { id: string };
  searchParams: { lat: string; lng: string };
}) {
  console.log(lat, lng);
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
              label: "Edit Order",
              href: `/dashboard/orders/${id}`,
              active: true,
            },
          ]}
        />
      </Upbar>

      <div className=" w-full">
        <h1 className=" text-2xl my-5 font-semibold text-gray-900"></h1>

        <OrderEdit id={id} lat={lat} lng={lng} />
      </div>
    </main>
  );
}

export default EditOrder;

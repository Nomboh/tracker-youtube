import Breadcrumb from "@/app/ui/components/breadcrumb";
import Upbar from "@/app/ui/components/upbar";
import OrderEdit from "@/app/ui/orders/edit-order";
import { notFound } from "next/navigation";
import React from "react";

function EditOrder({
  params: { id },
  searchParams: { search },
}: {
  params: { id: string };
  searchParams: { search: string };
}) {
  if (id) {
    notFound();
  }
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

        <OrderEdit />
      </div>
    </main>
  );
}

export default EditOrder;

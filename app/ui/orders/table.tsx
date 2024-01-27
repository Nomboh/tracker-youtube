import { getOrders } from "@/app/lib/prisma";
import { formatDate } from "@/app/lib/utils";
import Image from "next/image";
import React from "react";
import OrderStatus from "../components/order-status";
import { DeleteOrder, TrackOrder, UpdateOrder } from "../buttons";

async function Table({ query, page }: { query: string; page: number }) {
  const orders = await getOrders(page, query);

  return (
    <div className=" w-full h-[75%] overflow-auto bg-indigo-200 rounded-md p-2">
      {/* desktop */}

      <div className=" h-full hidden md:block bg-white">
        <table className=" bg-indigo-200  w-full">
          <thead>
            <tr className=" border-b-2 border-indigo-300">
              <th className=" text-left px-6 py-4">Order Id</th>
              <th className=" text-left px-6 py-4">Product</th>
              <th className=" text-left px-6 py-4">Address</th>
              <th className=" text-left px-6 py-4">Price</th>
              <th className=" text-left px-6 py-4">Date</th>
              <th className=" text-left px-6 py-4">Status</th>
              <th className=" text-left px-6 py-4">
                <span className=" sr-only">Action</span>
              </th>
            </tr>
          </thead>
          <tbody className=" bg-white overflow-hidden rounded-md">
            {orders.map(order => (
              <tr key={order.id} className=" border-b-2 border-indigo-300">
                <td className=" px-6 py-3 whitespace-nowrap ">{order.id}</td>
                <td className=" px-6 py-3 whitespace-nowrap ">
                  <div className=" flex items-center">
                    <Image
                      src={order.productImage}
                      alt={"product image" + order.productName}
                      width={30}
                      height={30}
                      className=" rounded-full h-8 w-8 mr-3"
                    />
                    {order.productName.slice(0, 25) + "..."}
                  </div>
                </td>
                <td className=" px-6 py-3 whitespace-nowrap ">
                  {order.destination.slice(0, 28)}
                </td>
                <td className=" px-6 py-3 whitespace-nowrap ">{order.price}</td>
                <td className=" px-6 py-3 whitespace-nowrap ">
                  {formatDate(order.createdAt.toISOString())}
                </td>
                <td className=" px-6 py-3 whitespace-nowrap ">
                  <OrderStatus status={order.status} />
                </td>
                <td className=" flex items-center gap-3 px-6 py-3 whitespace-nowrap ">
                  <UpdateOrder id={order.id.toString()} />
                  <TrackOrder id={order.id.toString()} />
                  <DeleteOrder id={order.id.toString()} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* mobile devices */}

      <div className="flex flex-col md:hidden gap-3">
        {orders.map(order => (
          <div
            className=" rounded-md px-3 py-4 flex flex-col gap-2 bg-white"
            key={order.id}
          >
            <div className=" flex items-center">
              <Image
                src={order.productImage}
                alt={"product image" + order.productName}
                width={30}
                height={30}
                className=" rounded-full h-8 w-8 mr-3"
              />
              <span>{order.productName.slice(0, 25) + "..."}</span>
            </div>
            <div className=" flex items-center justify-between">
              <div className="">
                <p>{order.price}</p>
                <p>{formatDate(order.createdAt.toISOString())}</p>
                <p>{order.destination.slice(0, 25)}</p>
              </div>
              <OrderStatus status={order.status} />
              <div className=" flex items-center gap-3 ">
                <UpdateOrder id={order.id.toString()} />
                <TrackOrder id={order.id.toString()} />
                <DeleteOrder id={order.id.toString()} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Table;

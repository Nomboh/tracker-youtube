import React from "react";
import Upbar from "../ui/components/upbar";
import clsx from "clsx";

function OrderDetailSkeleton() {
  return (
    <div className="">
      <div className="w-full h-[300px] flex justify-between items-end">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className={clsx(
              "animate-pulse bg-gray-200 h-full w-[60px] mx-1",
              i === 0 && "h-1/2",
              i === 4 && "h-3/5",
              i === 6 && "h-1/5",
              i === 8 && "h-4/5"
            )}
          ></div>
        ))}
      </div>
      <div className="w-full mt-3 animate-pulse bg-gray-200 h-6 mb-32"></div>
    </div>
  );
}

function CardSkeleton() {
  return (
    <div className="rounded-xl bg-indigo-50 p-2 shadow-sm animate-pulse">
      <div className="flex p-4">
        <div className="h-6 w-6 text-gray-700 bg-gray-300 rounded-full"></div>
        <div className="ml-2 text-xl font-medium bg-gray-300 rounded-md w-24"></div>
      </div>
      <div className="truncate rounded-xl px-4 py-4 text-center text-2xl bg-gray-300"></div>
    </div>
  );
}

function CardWrapperSkeleton() {
  return (
    <>
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </>
  );
}

function LatestOrdersTableSkeleton() {
  return (
    <table className="hidden min-w-full text-gray-900 px-2 md:table">
      <thead className="rounded-lg text-left text-sm font-normal">
        <tr>
          <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
            Order Id
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Product
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Date
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Status
          </th>
        </tr>
      </thead>
      <tbody className="bg-white">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <tr key={index} className="w-full border-b py-3 text-sm">
              <td className="whitespace-nowrap px-3 py-3">
                <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
              </td>

              <td className="whitespace-nowrap py-3 pl-6 pr-3">
                <div className="flex items-center gap-3">
                  <div className="animate-pulse bg-gray-200 rounded-full h-8 w-8"></div>
                  <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                </div>
              </td>

              <td className="whitespace-nowrap px-3 py-3">
                <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
              </td>
              <td className="whitespace-nowrap px-3 py-3">
                <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
              </td>
            </tr>
          ))}
      </tbody>
    </table>
  );
}

function LatestOrdersMobile() {
  return (
    <div className="md:hidden w-full p-2 rounded-lg  bg-indigo-200">
      {Array(5)
        .fill(0)
        .map((_, index) => (
          <div key={index} className="mb-2 w-full rounded-md bg-white ">
            <div className="flex items-center justify-between pb-3">
              <div>
                <div className="mb-2 flex items-center">
                  <div className="animate-pulse bg-gray-200 rounded-full h-8 w-8 mr-2"></div>
                  <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                </div>
              </div>
            </div>
            <div className="flex w-full items-center justify-between">
              <div>
                <div className="animate-pulse mb-2 bg-gray-200 rounded w-24 h-4 text-xl font-medium"></div>
                <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
              </div>
              <div className=" rounded-full animate-pulse bg-gray-200 justify-end h-4 w-28 px-2 py-4 "></div>
            </div>
          </div>
        ))}
    </div>
  );
}

function LatestOrdersSkeleton() {
  return (
    <div className="rounded-lg bg-indigo-200">
      <LatestOrdersMobile />
      <LatestOrdersTableSkeleton />
    </div>
  );
}

function MapSkeleton() {
  return (
    <div className="bg-gray-300 w-full h-[350px] rounded-md overflow-hidden animate-pulse"></div>
  );
}

function OrderListSkeleton() {
  return (
    <div className="">
      <div className="rounded-lg h-[560px]  overflow-y-scroll md:hidden bg-indigo-200 p-2 md:pt-0">
        <div className="">
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <div key={index} className="mb-2 w-full rounded-md bg-white p-4">
                <div className="flex items-center justify-between border-b pb-4">
                  <div>
                    <div className="mb-2 flex items-center">
                      <div className="animate-pulse bg-gray-200 rounded-full h-8 w-8 mr-2"></div>
                      <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                    </div>
                    <div className="animate-pulse bg-gray-200 rounded w-24 h-4 text-sm text-gray-500"></div>
                  </div>
                  <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                </div>
                <div className="flex w-full items-center justify-between pt-4">
                  <div>
                    <div className="animate-pulse bg-gray-200 mb-1 rounded w-24 h-4 text-xl font-medium"></div>
                    <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                  </div>
                  <div className="flex justify-end gap-2">
                    <div className="animate-pulse bg-gray-200 rounded-md h-8 w-8"></div>
                    <div className="animate-pulse bg-gray-200 rounded-md h-8 w-8"></div>
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* desktop */}
      <table className="w-full divide-y hidden md:table divide-gray-200">
        <thead className="rounded-lg text-left text-sm font-normal">
          <tr>
            <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
              Order Id
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Product
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Address
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Order date
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Price
            </th>
            <th scope="col" className="px-3 py-5 font-medium">
              Status
            </th>
          </tr>
        </thead>
        <tbody>
          {Array(7)
            .fill(0)
            .map((_, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm">
                  <div className="animate-pulse bg-gray-200 rounded w-24 h-4"></div>
                </td>
                <td className="px-6 gap-4 flex items-center py-4 whitespace-nowrap text-right text-sm font-medium">
                  <div className="animate-pulse bg-gray-200 rounded-md h-8 w-8"></div>
                  <div className="animate-pulse bg-gray-200 rounded-md h-8 w-8"></div>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

function DashboardSkeleton() {
  return (
    <div className=" h-screen w-full flex flex-col gap-6 overflow-auto">
      <Upbar>
        <p className=" text-xl md:text-2xl text-indigo-100 font-bold ">
          Dashboard
        </p>
      </Upbar>
      <div className="grid grid-cols-2 gap-6 my md:grid-cols-4">
        <CardWrapperSkeleton />
      </div>

      <div className=" flex md:flex-col flex-col-reverse">
        <div className="flex w-full md:overflow-hidden h-[400px] flex-col gap-5 md:flex-row items-start">
          <div className=" w-full md:w-1/2  ">
            <div className="">
              <h1 className="text-2xl">Latest Orders</h1>
            </div>
            <LatestOrdersSkeleton />
          </div>
          <div className=" hidden md:block w-full md:w-1/2 h-[350px]">
            <div className="">
              <h1 className="text-2xl mb-2">Users</h1>
            </div>
            <div className=" h-full rounded-md overflow-hidden">
              <LatestOrdersSkeleton />
            </div>
          </div>
        </div>

        <div className=" ">
          <h1 className="text-2xl mb-2">Order details</h1>
          <OrderDetailSkeleton />
        </div>
      </div>
    </div>
  );
}

export {
  OrderDetailSkeleton,
  CardWrapperSkeleton,
  LatestOrdersSkeleton,
  MapSkeleton,
  OrderListSkeleton,
  DashboardSkeleton,
};

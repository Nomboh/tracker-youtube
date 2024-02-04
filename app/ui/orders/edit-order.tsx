import React from "react";
import Button from "../components/button";
import Link from "next/link";
import InputGroup from "../components/Input-group";
import { getTrackingInfo } from "@/app/lib/prisma";
import { notFound } from "next/navigation";
import PlacesSearch from "../components/places-search";
import { updateOrder } from "@/app/lib/actions";

async function OrderEdit({
  id,
  lat,
  lng,
}: {
  id: string;
  lat: string;
  lng: string;
}) {
  const orderInfo = await getTrackingInfo(id);

  const orderPayload = updateOrder.bind(null, id);

  if (!orderInfo) {
    notFound();
  }
  return (
    <form
      action={orderPayload}
      className=" rounded-md bg-indigo-200 w-full p-4 md:p-6"
    >
      <div className=" w-full flex items-center justify-between gap-6 flex-wrap">
        <InputGroup
          className=" w-[45%] [&>input]:bg-white sr-only"
          htmlFor="latitude"
          placeholder="latitude"
          type="text"
          readOnly
          value={lat ? lat : orderInfo?.latitude?.toString()}
        >
          Latitute
        </InputGroup>

        <InputGroup
          className=" w-[45%] [&>input]:bg-white sr-only"
          htmlFor="longitude"
          placeholder="longitude"
          type="text"
          readOnly
          value={lng ? lng : orderInfo?.longitude?.toString()}
        >
          Longitude
        </InputGroup>

        <PlacesSearch
          className=" w-[45%] [&>input]:bg-white"
          htmlFor="location"
          placeholder="enter package location"
          type="text"
          isEdit={true}
          defaultValue={orderInfo?.location || ""}
        >
          Current Location
        </PlacesSearch>

        <InputGroup
          className=" w-[45%] [&>input]:bg-white"
          htmlFor="arrivalTime"
          placeholder="enter arrival date and time"
          type="datetime-local"
          defaultValue={
            orderInfo?.arrivalTime?.toISOString().slice(0, 16) || ""
          }
        >
          Arrival Date and Time
        </InputGroup>

        <InputGroup
          className=" w-[45%] [&>input]:bg-white"
          htmlFor="courier"
          placeholder="enter courier name"
          type="text"
          defaultValue={orderInfo?.courier || ""}
        >
          Courier
        </InputGroup>

        <InputGroup
          className=" w-[45%] [&>input]:bg-white"
          htmlFor="couriersNumber"
          placeholder="enter courier number"
          type="text"
          defaultValue={orderInfo?.couriersNumber || ""}
        >
          Courier's Number
        </InputGroup>

        <fieldset className=" w-full">
          <legend className=" mb-2 block font-medium">
            {" "}
            Set the order status{" "}
          </legend>
          <div className=" rounded-md border border-gray-200 bg-white px-[14px] py-4">
            <div className=" flex gap-4 flex-wrap">
              <div className=" flex items-center">
                <input
                  type="radio"
                  id="pending"
                  name="status"
                  defaultChecked={orderInfo?.status === "pending"}
                  value={"pending"}
                  className=" h-4 w-4 focus:outline-none cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label htmlFor="pending" className=" px-3 cursor-pointer">
                  Pending{" "}
                </label>
              </div>

              <div className=" flex items-center">
                <input
                  type="radio"
                  id="shipped"
                  name="status"
                  defaultChecked={orderInfo?.status === "on the way"}
                  value={"on the way"}
                  className=" h-4 w-4 focus:outline-none cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label htmlFor="shipped" className=" px-3 cursor-pointer">
                  On the way{" "}
                </label>
              </div>

              <div className=" flex items-center">
                <input
                  type="radio"
                  id="delivered"
                  name="status"
                  defaultChecked={orderInfo?.status === "delivered"}
                  value={"delivered"}
                  className=" h-4 w-4 focus:outline-none cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"
                />
                <label htmlFor="delivered" className=" px-3 cursor-pointer">
                  Delivered{" "}
                </label>
              </div>
            </div>
          </div>
        </fieldset>

        <div className=" flex items-center gap-4">
          <Link
            className=" px-5 py-3 text-xl border-indigo-500 hover:border-indigo-300 border-4 rounded-lg text-indigo-100 bg-indigo-500"
            href="/dashboard/orders"
          >
            Cancel
          </Link>
          <Button
            className=" text-xl border-indigo-500 hover:border-indigo-300"
            type="submit"
          >
            Edit Order
          </Button>
        </div>
      </div>
    </form>
  );
}

export default OrderEdit;

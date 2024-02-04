import React from "react";
import dynamic from "next/dynamic";
import { Metadata } from "next";
import { getTrackingInfo } from "@/app/lib/prisma";
import { formatDate } from "@/app/lib/utils";
import Upbar from "@/app/ui/components/upbar";

import TrackingHistory from "@/app/ui/tracking/tracking-history";
import TrackingInput from "@/app/ui/tracking/tracking-input";

const TrackingMap = dynamic(() => import("@/app/ui/tracking/map"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Tracking",
  description: "Tracking page for packages and history",
};

async function Tracking({
  searchParams,
}: {
  searchParams?: { trackingNumber?: string };
}) {
  const trackingNumber = searchParams?.trackingNumber || "";
  const trackingInfo = await getTrackingInfo(trackingNumber);

  return (
    <main className=" h-full overflow-y-auto">
      <Upbar>
        <>
          <p className=" text-xl md:text-2xl font-bold text-indigo-100">
            Tracking
          </p>

          <div className=" w-40 md:w-[800px] relative">
            <TrackingInput />
          </div>
        </>
      </Upbar>

      {!trackingInfo ? (
        <div className=" flex justify-center items-center h-[500px]">
          <p className=" text-4xl text-indigo-500">No tracking info found</p>
        </div>
      ) : (
        <>
          <h1 className=" text-lg md:text-2xl font-bold mt-8">
            General Information
          </h1>

          <div className=" md:h-48 w-full  border-2 mt-2 flex flex-col md:flex-row items-start ">
            <div className=" md:w-1/2 w-full md:text-2xl flex flex-col gap-4  px-6 py-4">
              <div className="flex md:flex-row flex-col md:gap-5 gap-1 ">
                <div className=" w-56 text-left">
                  {trackingInfo.order?.status === "delivered"
                    ? "Delivered"
                    : "Arriving"}{" "}
                  On:
                </div>
                <p className=" flex-1 text-left font-bold">
                  {formatDate(trackingInfo?.arrivalTime.toISOString()!, true)}
                </p>
              </div>
              <div className="flex md:flex-row flex-col md:gap-5 gap-1 ">
                <div className=" w-56 text-left">Product Name:</div>
                <p className=" flex-1 text-left font-bold">
                  {trackingInfo.order?.productName}
                </p>
              </div>
              <div className="flex md:flex-row flex-col md:gap-5 gap-1 ">
                <div className=" w-56 text-left">Courier Name:</div>
                <p className=" flex-1 text-left font-bold">
                  {trackingInfo.courier}
                </p>
              </div>
            </div>

            {/* divider */}
            <div className="w-[2px] h-full bg-gray-200 hidden md:block"></div>

            <div className=" w-full md:w-1/2 md:text-2xl flex flex-col gap-4  px-6 py-4">
              <div className="flex md:gap-5 gap-1 flex-col md:flex-row ">
                <div className=" w-56 text-left">Recipient:</div>
                <p className=" flex-1 text-left font-bold">Nomboh Quentin</p>
              </div>
              <div className="flex md:gap-5 gap-1 flex-col md:flex-row ">
                <div className=" w-56 text-left">Dilivery Address:</div>
                <p className=" flex-1 text-left font-bold whitespace-normal">
                  {trackingInfo.order?.destination}
                </p>
              </div>
              <div className="flex md:gap-5 gap-1 flex-col md:flex-row ">
                <div className=" w-56 text-left">Delivery Request:</div>
                <p className=" flex-1 text-left font-bold whitespace-normal">
                  Leave in front of the door
                </p>
              </div>
            </div>
          </div>

          <h1 className=" text-lg md:text-2xl font-bold mt-8 mb-1">
            Tracking History
          </h1>

          <div className=" md:px-20">
            <TrackingHistory trackingInfo={trackingInfo} />
          </div>
          {trackingInfo.order?.status === "delivered" ||
          trackingInfo.location === "unknown" ? null : (
            <TrackingMap trackingInfo={trackingInfo} />
          )}
        </>
      )}
    </main>
  );
}

export default Tracking;

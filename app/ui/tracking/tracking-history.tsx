import {
  CircleStackIcon,
  HomeIcon,
  MapPinIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import { Tracking } from "@prisma/client";
import clsx from "clsx";
import React from "react";

const TimelineSteps = ({
  title,
  active,
  type,
  children,
}: {
  title: string;
  active: boolean;
  type: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={clsx(
        "flex-1 flex flex-col md:flex-row  items-center justify-center w-full ",
        {
          "flex-grow-0 ": type === "delivered",
        }
      )}
    >
      <div
        className={clsx(
          "md:w-24 md:h-24 w-16 h-16 text-gray-400  relative p-4 border-4 flex items-center rounded-full",
          {
            "border-indigo-400 !text-indigo-50 bg-indigo-400": active,
          }
        )}
      >
        {children}
        <div className=" absolute md:-bottom-14 w-64 left-1/2 md:-translate-x-1/2">
          <p
            className={clsx(
              " text-gray-400 text-md  md:text-2xl md:text-center text-left ml-10 md:ml-2 uppercase"
            )}
          >
            {title.split(",")[0]}
          </p>
        </div>
      </div>
      <div
        className={clsx(
          "flex-1 md:h-2 h-full w-2 md:w-full bg-gray-200",
          type === "delivered" ? "hidden" : ""
        )}
      ></div>
    </div>
  );
};

function TrackingHistory({ trackingInfo }: { trackingInfo: Tracking }) {
  const { location, status } = trackingInfo;
  console.log(location, status);

  const steps = [
    {
      title: "pending",
      active: status === "pending" && location === "unknown",
      Icon: CircleStackIcon,
    },

    {
      title: "in transit",
      active: status === "on the way" && location === "unknown",
      Icon: RocketLaunchIcon,
    },

    {
      title: location,
      active: status !== "delivered" && location !== "unknown",
      Icon: MapPinIcon,
    },

    {
      title: "delivered",
      active: status === "delivered",
      Icon: HomeIcon,
    },
  ];
  return (
    <div
      className={clsx(
        ` flex w-32 md:w-full h-[500px] md:h-fit flex-col md:flex-row items-center justify-between`
      )}
    >
      {steps.map((step, index) => (
        <TimelineSteps
          key={index}
          title={step.title!}
          active={step.active}
          type={step.title!}
        >
          <step.Icon />
        </TimelineSteps>
      ))}
    </div>
  );
}

export default TrackingHistory;

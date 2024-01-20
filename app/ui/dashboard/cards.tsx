import {
  ClockIcon,
  GiftIcon,
  PencilSquareIcon,
  RocketLaunchIcon,
} from "@heroicons/react/24/solid";
import React from "react";

const iconMap = {
  pending: ClockIcon,
  "on the way": RocketLaunchIcon,
  delivered: GiftIcon,
  reviews: PencilSquareIcon,
} as any;

function Cards({
  title,
  value,
  type,
}: {
  title: string;
  value: string | number;
  type: string;
}) {
  const Icon = iconMap[type];
  return (
    <div className=" rounded-xl bg-indigo-200 p-2 shadow-sm ">
      <div className=" flex p-4">
        {Icon ? <Icon className="h-6 w-6 text-indigo-300" /> : null}
        <p className=" ml-2 text-xl font-medium">{title}</p>
      </div>
      <p
        className={`truncate rounded-xl bg-white px-4 py-4 text-center text-2xl`}
      >
        {value}
      </p>
    </div>
  );
}

export default Cards;

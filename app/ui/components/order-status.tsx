import clsx from "clsx";
import React from "react";

function OrderStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(` inline-flex items-center rounded-full px-2 py-1`, {
        "bg-green-200 text-green-800": status === "delivered",
        "bg-yellow-200 text-yellow-800": status === "on the way",
        "bg-blue-200 text-blue-800": status === "pending",
      })}
    >
      {status}
    </span>
  );
}

export default OrderStatus;

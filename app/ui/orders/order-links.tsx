"use client";
import clsx from "clsx";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

function OrderLinks() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const status = searchParams.get("search") || "";

  const getLink = (status: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    params.set("search", status);
    return `${pathname}?${params.toString()}`;
  };
  return (
    <div className=" flex my-5 items-center gap-5 text-xl text-indigo-300">
      <Link
        href={getLink("")}
        className={clsx(`cursor-pointer`, {
          "text-indigo-500 underline": status === "",
          "text-indigo-300": status !== "",
        })}
      >
        All Orders
      </Link>

      <Link
        href={getLink("on the way")}
        className={clsx(`cursor-pointer`, {
          "text-indigo-500 underline": status === "on the way",
          "text-indigo-300": status !== "on the way",
        })}
      >
        On the Way
      </Link>

      <Link
        href={getLink("delivered")}
        className={clsx(`cursor-pointer`, {
          "text-indigo-500 underline": status === "delivered",
          "text-indigo-300": status !== "delivered",
        })}
      >
        Delivered
      </Link>

      <Link
        href={getLink("pending")}
        className={clsx(`cursor-pointer`, {
          "text-indigo-500 underline": status === "pending",
          "text-indigo-300": status !== "pending",
        })}
      >
        Pending
      </Link>
    </div>
  );
}

export default OrderLinks;

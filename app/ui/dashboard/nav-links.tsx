"use client";
import {
  HomeIcon,
  MapIcon,
  PlusCircleIcon,
  QueueListIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const links = [
  { name: "Dashboard", href: "/dashboard", icon: HomeIcon },
  { name: "Orders", href: "/dashboard/orders", icon: QueueListIcon },
  { name: "Tracking", href: "/dashboard/tracking", icon: MapIcon },
  {
    name: "Create Order",
    href: "/dashboard/orders/create",
    icon: PlusCircleIcon,
  },
];

function NavLinks() {
  const pathname = usePathname();
  return (
    <div className=" flex gap-3 flex-col items-start w-full mt-10">
      {links.map(link => (
        <Link
          key={link.name}
          href={link.href}
          className={clsx(
            ` flex h-16 w-full items-center rounded-md hover:bg-indigo-50 hover:pl-2 text-indigo-400 font-bold justify-start gap-2 cursor-pointer`,
            {
              "bg-indigo-50 pl-2": pathname === link.href,
            }
          )}
        >
          <link.icon className="w-6 h-6 block text-indigo-400" />
          <p className={clsx(`text-xl hidden md:block`)}>{link.name}</p>
        </Link>
      ))}
    </div>
  );
}

export default NavLinks;

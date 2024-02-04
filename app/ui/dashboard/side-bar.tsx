import { poppins } from "@/app/lib/font";
import {
  Cog6ToothIcon,
  ArrowLeftEndOnRectangleIcon,
} from "@heroicons/react/24/solid";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import NavLinks from "./nav-links";
import { auth, signOut } from "../../../auth";

async function Sidebar() {
  const authUser = await auth();

  return (
    <div className=" bg-indigo-500 w-full flex flex-col h-screen py-2 p-3">
      <Link
        className="hidden md:block text-4xl text-indigo-50 cursor-pointer"
        href="/"
      >
        <p className={clsx(`${poppins.className}`)}>Tracker</p>
      </Link>

      <NavLinks />

      <div className=" flex-grow"></div>

      <Link
        href="/settings"
        className=" h-16 hover:bg-indigo-50 hover:pl-2 rounded-md flex items-center gap-3"
      >
        <Cog6ToothIcon className=" text-indigo-400 h-6 w-6" />
        <p
          className={clsx(`text-xl text-indigo-400 font-bold hidden md:block`)}
        >
          Settings
        </p>
      </Link>

      <form
        action={async () => {
          "use server";

          await signOut();
        }}
        className=" h-16 hover:bg-indigo-50 hover:pl-2 rounded-md flex items-center gap-3"
      >
        <button className=" outline-none flex items-center gap-3 justify-start">
          <ArrowLeftEndOnRectangleIcon className=" text-indigo-400 h-6 w-6" />
          <p
            className={clsx(
              `text-xl text-indigo-400 font-bold hidden md:block`
            )}
          >
            logout
          </p>
        </button>
      </form>

      <div className=" cursor-pointer h-16 flex items-center gap-3">
        <Image
          className="rounded-full w-auto h-auto"
          width={30}
          height={30}
          alt={authUser?.user?.name!}
          src={authUser?.user?.image!}
        />
        <p
          className={clsx(`text-xl text-indigo-400 font-bold hidden md:block`)}
        >
          {authUser?.user?.name}
        </p>
      </div>
    </div>
  );
}

export default Sidebar;

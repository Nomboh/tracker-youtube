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

function Sidebar() {
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

      <form className=" h-16 hover:bg-indigo-50 hover:pl-2 rounded-md flex items-center gap-3">
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
          alt="profile picture"
          src={`https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`}
        />
        <p
          className={clsx(`text-xl text-indigo-400 font-bold hidden md:block`)}
        >
          Profile
        </p>
      </div>
    </div>
  );
}

export default Sidebar;

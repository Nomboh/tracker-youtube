import { BellIcon } from "@heroicons/react/24/solid";
import React from "react";

function Upbar({ children }: { children: React.ReactNode }) {
  return (
    <div className=" h-20 px-3 md:px-7 w-full flex items-center bg-indigo-500">
      <div className="flex-1 flex items-center justify-between">{children}</div>
      <div className=" ml-10 md:ml-28">
        <BellIcon className="h-10 w-10 text-white cursor-pointer" />
      </div>
    </div>
  );
}

export default Upbar;

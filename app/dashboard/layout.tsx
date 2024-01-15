import React from "react";
import Sidebar from "../ui/dashboard/side-bar";

type Props = {
  children: React.ReactNode;
};

function layout({ children }: Props) {
  return (
    <div className=" flex h-screen bg-white">
      <div className=" flex-none md:w-64 ">
        <Sidebar />
      </div>
      <div className=" flex-grow pl-2 md:pl-12">{children}</div>
    </div>
  );
}

export default layout;

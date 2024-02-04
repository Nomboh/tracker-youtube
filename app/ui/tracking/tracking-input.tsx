"use client";
import { debounce } from "@/app/lib/utils";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";

function TrackingInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const handleSearch = (searchTerm: string) => {
    const param = new URLSearchParams(searchParams);
    if (searchParams) {
      param.set("trackingNumber", searchTerm);
    } else {
      param.delete("trackingNumber");
    }

    replace(`${pathname}?${param.toString()}`);
  };

  const debouncedSearch = debounce(handleSearch, 300);
  return (
    <div className=" w-full">
      <label htmlFor="tracking" className="sr-only">
        Tracking
      </label>
      <input
        type="text"
        name="tracking"
        id="tracking"
        defaultValue={searchParams.get("trackingNumber")?.toString()}
        onChange={e => debouncedSearch(e.target.value)}
        placeholder="Put your tracking number here"
        className=" w-full h-10 px-5 py-3 text-xl placeholder-indigo-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-indigo-50 focus:ring-indigo-400"
      />
      <MagnifyingGlassIcon className=" w-6 h-6 absolute top-1/2 right-5 transform -translate-y-1/2 text-indigo-400" />
    </div>
  );
}

export default TrackingInput;

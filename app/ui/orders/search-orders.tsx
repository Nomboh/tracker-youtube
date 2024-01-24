import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import React from "react";

function SearchOrders() {
  return (
    <div className=" w-full">
      <label htmlFor="search" className="sr-only">
        Search
      </label>
      <input
        type="text"
        name="search"
        id="search"
        placeholder="Search for orders"
        className=" w-full h-10 px-5 py-3 text-xl placeholder-indigo-400 border border-gray-300 rounded-md focus:outline-none focus:ring-2 bg-indigo-50 focus:ring-indigo-400"
      />
      <MagnifyingGlassIcon className=" w-6 h-6 absolute top-1/2 right-5 transform -translate-y-1/2 text-indigo-400" />
    </div>
  );
}

export default SearchOrders;

import Link from "next/link";
import React from "react";

function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <h2 className=" text-6xl font-semibold">😢</h2>
      <h2 className="text-2xl my-3 font-semibold">404 Not Found</h2>
      <p>Could not find the requested order.</p>
      <Link
        href="/dashboard/orders"
        className="mt-4 rounded-md bg-indigo-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-400"
      >
        Go Back
      </Link>
    </main>
  );
}

export default NotFound;

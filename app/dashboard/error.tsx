"use client";
import React from "react";

function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <main className=" flex h-full flex-col items-center justify-center">
      <h1 className=" text-2xl font-bold text-red-500">
        Ooooppps somethin went wrong
      </h1>
      <p className=" text-red-500">{error.message}</p>
      <button
        onClick={reset}
        className=" px-4 py-2 rounded-md bg-indigo-500 text-white"
      >
        Reload
      </button>
    </main>
  );
}

export default Error;

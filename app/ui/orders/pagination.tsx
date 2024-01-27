"use client";
import React from "react";
import Button from "../components/button";
import { usePathname, useSearchParams, useRouter } from "next/navigation";

function Pagination({ orderCount }: { orderCount: number }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  const pageNum = Number(searchParams.get("page"));

  const totalPages = Math.ceil(orderCount / 10);

  const setPageParam = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    router.replace(`${pathname}?${params.toString()}`);
  };
  return (
    <div className=" flex items-center gap-6 mt-5">
      <Button
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={pageNum === 1}
        onClick={() => {
          if (pageNum === 1) return;
          setPageParam(pageNum - 1);
        }}
      >
        Previous
      </Button>
      <Button
        className="disabled:opacity-50 disabled:cursor-not-allowed"
        disabled={pageNum >= totalPages}
        onClick={() => {
          if (pageNum >= totalPages) return;
          setPageParam(pageNum + 1);
        }}
      >
        Next
      </Button>
    </div>
  );
}

export default Pagination;

"use client";
import React from "react";
import Button from "../components/button";
import Link from "next/link";
import InputGroup from "../components/Input-group";
import { createOrder } from "@/app/lib/actions";
import PlacesSearch from "../components/places-search";
import { useFormState, useFormStatus } from "react-dom";

function OrderCreate() {
  const [state, dispatch] = useFormState(createOrder, {
    errors: {},
    message: null,
  });

  const status = useFormStatus();

  return (
    <form
      action={dispatch}
      className=" rounded-md bg-indigo-200 w-full p-4 md:p-6"
    >
      <div className=" w-full flex items-center justify-between gap-6 flex-wrap">
        <InputGroup
          className=" w-[45%] [&>input]:bg-white"
          htmlFor="image"
          placeholder="product image"
          type="file"
          error={state?.errors?.productImage}
        >
          Product Image
        </InputGroup>

        <InputGroup
          className=" w-[45%] [&>input]:bg-white"
          htmlFor="productName"
          placeholder="product Name"
          type="text"
          error={state?.errors?.productName}
        >
          Product Name
        </InputGroup>

        <PlacesSearch
          className=" w-[45%] [&>input]:bg-white"
          htmlFor="destination"
          placeholder="enter your destination address"
          error={state?.errors?.destination}
        >
          Destination
        </PlacesSearch>

        <InputGroup
          className=" w-[45%] [&>input]:bg-white"
          htmlFor="price"
          placeholder="input product price"
          type="number"
          error={state?.errors?.price}
        >
          Product Price
        </InputGroup>

        <div className=" flex flex-col w-full gap-1">
          <label htmlFor="description">Description</label>

          <textarea
            name="description"
            id="description"
            rows={5}
            placeholder="product description"
            className=" outline-none focus:outline-indigo-200 focus:outline-2 block w-full rounded-md border border-gray-200 p-4 outline-2"
          ></textarea>
          {state?.errors?.description && (
            <p className=" text-red-500 text-sm">
              {state?.errors?.description[0]}
            </p>
          )}
        </div>

        <div className=" flex items-center gap-4">
          <Link
            className=" px-5 py-3 text-xl border-indigo-500 hover:border-indigo-300 border-4 rounded-lg text-indigo-100 bg-indigo-500"
            href="/dashboard/orders"
          >
            Cancel
          </Link>
          <Button
            className=" disabled:opacity-50 text-xl border-indigo-500 hover:border-indigo-300"
            type="submit"
            disabled={status.pending}
          >
            Create Order
          </Button>
        </div>
      </div>
    </form>
  );
}

export default OrderCreate;

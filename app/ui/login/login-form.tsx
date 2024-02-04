"use client";
import React from "react";
import InputGroup from "../components/Input-group";
import Button from "../components/button";
import { useFormState } from "react-dom";
import { authenticateUser } from "@/app/lib/actions";

function LoginForm() {
  const [errorState, dispatch] = useFormState(authenticateUser, undefined);
  return (
    <div className="relative z-50 w-[600px]">
      <form action={dispatch} className="space-y-4">
        <div className="flex-1 rounded-lg bg-gray-50 px-6 pb-4 pt-8">
          <h1 className={` mb-4 text-2xl`}>Login in to your account.</h1>

          <div className=" flex flex-col gap-5">
            <InputGroup
              htmlFor="email"
              placeholder="Enter your email"
              type="email"
            >
              Email
            </InputGroup>

            <InputGroup
              type="password"
              htmlFor="password"
              placeholder="Enter your password"
            >
              Password
            </InputGroup>
          </div>

          <Button className=" mt-4">Login</Button>
          {errorState && <div className=" text-red-500">{errorState}</div>}
        </div>
      </form>
    </div>
  );
}

export default LoginForm;

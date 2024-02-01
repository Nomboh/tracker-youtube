import clsx from "clsx";
import React from "react";

interface InputGroupProps extends React.InputHTMLAttributes<HTMLInputElement> {
  children: React.ReactNode;
  placeholder: string;
  htmlFor: string;
  className?: React.HTMLAttributes<HTMLDivElement>["className"];
  error?: string[] | undefined;
}

function InputGroup({
  children,
  placeholder,
  htmlFor,
  className,
  error,
  ...props
}: InputGroupProps) {
  return (
    <div className={clsx(` flex flex-col gap-2 ${className}`)}>
      <label htmlFor={htmlFor} className=" text-gray-900">
        {children}
      </label>
      <input
        className=" outline-none focus:outline-indigo-200 focus:outline-2 block w-full rounded-md border border-gray-200 p-4 outline-2"
        {...props}
        id={htmlFor}
        name={htmlFor}
        placeholder={placeholder}
      />
      {error && <p className=" text-red-500 text-sm">{error[0]}</p>}
    </div>
  );
}

export default InputGroup;

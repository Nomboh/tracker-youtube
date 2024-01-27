import clsx from "clsx";
import React from "react";
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

function Button({ children, className, ...rest }: ButtonProps) {
  return (
    <button
      {...rest}
      className={clsx(
        ` px-5 py-3 textxl border-indigo-400 hover:border-indigo-200 border-4 rounded-lg text-indigo-100 bg-indigo-500 `,
        className
      )}
    >
      {children}
    </button>
  );
}

export default Button;

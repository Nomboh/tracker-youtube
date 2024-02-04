import Image from "next/image";
import LoginForm from "../ui/login/login-form";
import Link from "next/link";
import clsx from "clsx";
import { poppins } from "../lib/font";

export default function LoginPage() {
  return (
    <main className="flex relative items-center justify-center overflow-hidden h-screen">
      <Image
        src="/hero.jpg"
        alt="Hero Image"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-screen object-cover"
      />

      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className=" mx-auto flex w-full max-w-[600px] flex-col ">
        <Link
          href="/"
          className={clsx(
            `text-6xl font-bold top-4 absolute text-gray-50 left-4 text-center ${poppins.className}`
          )}
        >
          Tracker
        </Link>
        <LoginForm />
      </div>
    </main>
  );
}

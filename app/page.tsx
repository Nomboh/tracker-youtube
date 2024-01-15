import Image from "next/image";
import { poppins } from "./lib/font";
import Hero from "../public/hero.jpg";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex h-screen relative  items-center justify-center overflow-hidden">
      <Image
        src={Hero}
        alt="hero image"
        quality={100}
        className="absolute inset-0  h-auto w-auto object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-70"></div>
      <p
        className={`${poppins.className} text-indigo-100 cursor-pointer font-bold text-6xl absolute top-4 left-4`}
      >
        Tracker
      </p>

      <div className=" relative z-10 w-[600px] text-indigo-100 text-center">
        <h1 className=" text-4xl font-bold mb-4">
          Elevate Your order experience
        </h1>

        <p className=" text-lg mb-6">
          Track, Trace and Triumph - Your orders, your control . Welcome to the
          Future of Seamless delivery monitoring.
        </p>
        <Link
          className="bg-indigo-100 text-xl text-indigo-500 px-6 py-3 rounded-full"
          href="/login"
        >
          Login
        </Link>
      </div>
    </main>
  );
}

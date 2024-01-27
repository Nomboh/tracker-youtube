import { MapIcon, PencilIcon, TrashIcon } from "@heroicons/react/24/solid";
import Link from "next/link";

export function UpdateOrder({ id }: { id: string }) {
  return (
    <Link
      className=" rounded-md border p-2 hover:bg-indigo-100"
      href={`/dashboard/orders/${id}`}
    >
      <PencilIcon className=" w-5" />
    </Link>
  );
}

export function TrackOrder({ id }: { id: string }) {
  return (
    <Link
      className=" rounded-md border p-2 hover:bg-indigo-100"
      href={`/dashboard/tracking?trackingNumber=${id}`}
    >
      <MapIcon className=" w-5" />
    </Link>
  );
}

export function DeleteOrder({ id }: { id: string }) {
  return (
    <form>
      <button className=" rounded-md border p-2 hover:bg-indigo-100">
        <span className=" sr-only">delete order</span>
        <TrashIcon className=" w-5" />
      </button>
    </form>
  );
}

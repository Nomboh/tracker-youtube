import clsx from "clsx";
import Link from "next/link";
import React from "react";

interface BreadcrumbProps {
  label: string;
  href: string;
  active?: boolean;
}

function Breadcrumb({ breadcrumbs }: { breadcrumbs: BreadcrumbProps[] }) {
  return (
    <nav aria-label="Breadcrumb" className="block">
      <ol className=" flex text-xl md:text-2xl">
        {breadcrumbs.map((breadcrumb, index) => {
          return (
            <li
              key={index}
              aria-current={breadcrumb.active}
              className={clsx(
                breadcrumb.active ? "text-indigo-100" : "text-indigo-400"
              )}
            >
              <Link href={breadcrumb.href}>{breadcrumb.label}</Link>
              {index < breadcrumbs.length - 1 && (
                <span className="text-indigo-300 mx-3">/</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default Breadcrumb;

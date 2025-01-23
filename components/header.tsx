import { NAVLINKS } from "@/constants/links";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="sticky flex items-center justify-between px-5 md:px-10 py-4 bg-zinc-100 bg-opacity-90 backdrop-blur-lg">
      <Link href="/" className="font-bold text-xl">
        Bookly
      </Link>

      <div className="flex gap-4 md:gap-8">
        {NAVLINKS.map(item => (
          <Link
            key={item.name}
            href={item.href}
            className="hover:bg-zinc-200 px-4 py-1 rounded-full"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

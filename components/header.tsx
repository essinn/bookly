import { NAVLINKS } from "@/constants/links";
import { BookOpenIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export const Header = () => {
  return (
    <div className="sticky flex items-center justify-between px-5 md:px-10 py-4 bg-zinc-100 bg-opacity-90 backdrop-blur-lg">
      <Link
        href="/"
        className="flex items-center justify-center gap-3 text-black hover:text-opacity-90 font-bold text-xl"
      >
        <BookOpenIcon size={24} />
        Bookly
      </Link>

      <div className="flex gap-3 md:gap-6">
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

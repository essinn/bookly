import { NAVLINKS } from "@/constants/links";
import { BookOpenIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { signoutAction, signupAction } from "@/lib/actions";
import { wixClient } from "@/lib/wix";

export const Header = () => {
  const isLoggedIn = wixClient.auth.loggedIn();
  return (
    <div className="sticky flex items-center justify-between px-5 md:px-10 py-4 bg-zinc-100 bg-opacity-90 backdrop-blur-lg">
      <Link
        href="/"
        className="flex items-center justify-center gap-3 text-black hover:text-opacity-90 font-bold text-xl"
      >
        <BookOpenIcon size={24} />
        Bookly
      </Link>

      <div className="flex items-center justify-center gap-3 md:gap-6">
        {NAVLINKS.map(item => (
          <Link key={item.name} href={item.href}>
            {item.name}
          </Link>
        ))}
        {isLoggedIn ? (
          <form action={signoutAction}>
            <Button variant="outline">Sign Out</Button>
          </form>
        ) : (
          <form action={signupAction}>
            <Button variant="outline">Sign In</Button>
          </form>
        )}
      </div>
    </div>
  );
};

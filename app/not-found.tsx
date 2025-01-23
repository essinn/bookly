import { ArrowLeftIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <div className="pb-24 pt-40">
      <div className="sm-px-6 min-h-full px-4 md:grid md:place-content-center">
        <div className="mx-auto max-w-max">
          <div className="sm:flex">
            <p className="text-4xl md:text-6xl font-bold tracking-tight text-muted-foreground sm:text-5xl md:border-r md:border-black md:pr-12">
              404
            </p>
            <div className="sm:ml-6">
              <div className="sm:pl-6">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tight sm:text-5xl">
                  Page not found
                </h1>
                <p className="pt-4 text-base text-muted-foreground">
                  Please check that your URL is correct.
                </p>
              </div>
              <div className="sm:border-1 pt-10 flex space-x-3 sm:border-transparent sm:pl-6">
                <Link
                  href=".."
                  className="inline-flex items-center gap-3 text-muted-foreground hover:text-black"
                >
                  <ArrowLeftIcon className="h-5 w-5" />
                  <span>Go back</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

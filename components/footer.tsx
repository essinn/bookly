import { GithubIcon, TwitterIcon } from "lucide-react";
import React from "react";

export const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="flex items-center md:justify-between flex-col md:flex-row gap-5 px-5 md:px-10 py-4">
      <div className="flex">
        <p>{year} Bookly &ndash; All Rights Reserved</p>
      </div>

      <div className="flex gap-4 items-center justify-center">
        <GithubIcon size={24} className="text-black" />
        <TwitterIcon size={24} className="text-black" />
      </div>
    </div>
  );
};

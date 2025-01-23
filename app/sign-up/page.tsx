"use client";
import React, { useEffect } from "react";
import { loginCallbackAction } from "./actions";
import { useRouter } from "next/navigation";

export const SigninCallback = () => {
  const router = useRouter();

  useEffect(() => {
    const url = window.location.href;

    loginCallbackAction(url).then(() => router.push("/"));
  }, []);

  return (
    <div className="flex gap-2 flex-col items-center justify-center py-20 ">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-white mx-auto mb-4"></div>
      <p className="font-bold text-black text-xl">Redirecting...</p>
    </div>
  );
};

export default SigninCallback;

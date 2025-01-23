"use server";

import { cookies } from "next/headers";
import { wixClient } from "./wix";
import { redirect } from "next/navigation";
import { revalidatePath } from "next/cache";

export async function signupAction() {
  const data = await (
    await wixClient
  ).auth.generateOAuthData(
    `${process.env.NEXT_PUBLIC_BASE_URL}/sign-up`,
    process.env.NEXT_PUBLIC_URL
  );
  (await cookies()).set("oauthRedirectData", JSON.stringify(data));
  const { authUrl } = await wixClient.auth.getAuthUrl(data);

  redirect(authUrl);
}

export async function signoutAction() {
  const client = wixClient;
  const { logoutUrl } = await client.auth.logout(process.env.NEXT_PUBLIC_URL!);
  (await cookies()).delete("session");
  revalidatePath("/");
  redirect(logoutUrl);
}

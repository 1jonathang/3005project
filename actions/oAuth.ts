import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

export const oAuthLogin = (p: string) => {
  signIn(p, {
    callbackUrl: DEFAULT_LOGIN_REDIRECT,
  });
};

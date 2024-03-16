"use client";

import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { oAuthLogin } from "@/actions/oAuth";

interface Props {
  socialMessage?: string;
}

const Social = ({ socialMessage }: Props) => {
  const onClick = (provider: "google" | "github") => {
    oAuthLogin(provider);
  };

  return (
    <div className="flex flex-col w-full gap-y-2 pt-6">
      <p className="text-muted-foreground text-sm">{socialMessage}</p>
      <div className="flex justify-between">
        <Button
          size="lg"
          className="w-1/2 rounded-none rounded-l-lg text-xs md:text-base"
          variant="outline"
          onClick={() => {
            onClick("google");
          }}
        >
          <FaGoogle className="h-5 w-5" />
        </Button>
        <Separator orientation="vertical" />
        <Button
          size="lg"
          className="w-1/2 rounded-none rounded-r-lg text-xs md:text-base"
          variant="outline"
          onClick={() => {
            onClick("github");
          }}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Social;

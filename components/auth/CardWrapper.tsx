"use client";

import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { Header } from "./header";
import Social from "./social";
import { BackButton } from "./BackButton";

type Props = {};

interface CardWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocial?: boolean;
}

export const CardWrapper = ({
  children,
  headerLabel,
  backButtonHref,
  backButtonLabel,
  showSocial,
}: CardWrapperProps) => {
  return (
    <Card className="w-[300px]">
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <CardFooter>
          <Social />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton href={backButtonHref} label={backButtonLabel} />
      </CardFooter>
    </Card>
    //  <div className="container mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
    //    <div className="flex flex-col space-y-2 text-center">
    //      <Card className="w-[300px]">
    //        <CardHeader>
    //          <CardTitle>Sign In</CardTitle>
    //          <CardDescription>
    //            Sign into{" "}
    //            <span className="font-bold text-green-600 dark:text-green-400">
    //              3005gym
    //            </span>{" "}
    //            with an existing account.
    //          </CardDescription>
    //        </CardHeader>
    //        <CardContent>
    //          <p className="text-start text-sm text-slate-400 mt-4">
    //            Sign in with credentials
    //          </p>

    //          <div className="relative mt-2">
    //            <div
    //              aria-hidden="true"
    //              className="absolute inset-0 flex items-center"
    //            >
    //              <span className="w-full border-t" />
    //            </div>
    //            <div className="relative flex justify-center text-xs">
    //              <span className="bg-background px-2 text-muted-foreground">
    //                or
    //              </span>
    //            </div>
    //          </div>
    //          <div className="mt-3">
    //            <Button variant={"secondary"}>Continue as admin</Button>
    //          </div>
    //        </CardContent>
    //      </Card>
    //    </div>
    //  </div>
  );
};

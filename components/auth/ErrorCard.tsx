import React from "react";
import { Card, CardFooter, CardHeader } from "../ui/card";
import { Header } from "./header";
import { BackButton } from "./BackButton";
import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import { CardWrapper } from "./CardWrapper";

type Props = {};

export const ErrorCard = (props: Props) => {
  return (
    <CardWrapper
      headerText="ERROR"
      headerLabel="Something went wrong bozo!"
      backButtonHref="/auth/login"
      backButtonLabel="Back to login"
    >
      <div className="w-full flex justify-center items-center">
        <ExclamationTriangleIcon className="w-4 h-4 text-destructive" />
      </div>
    </CardWrapper>
  );
};

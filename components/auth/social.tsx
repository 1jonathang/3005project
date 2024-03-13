"use client";

import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";
import { Separator } from "../ui/separator";

interface Props {
   socialMessage?: string;
};

const Social = ({socialMessage}: Props) => {
  return (
    <div className="flex flex-col w-full gap-y-2 pt-6">
      <p className="text-muted-foreground text-sm">{socialMessage}</p>
      <div className="flex justify-between">
        <Button
          size="lg"
          className="w-1/2 rounded-none rounded-l-lg text-xs md:text-base"
          variant="outline"
          onClick={() => {}}
        >
          <FaGoogle className="h-5 w-5" />
        </Button>
        <Separator orientation="vertical" />
        <Button
          size="lg"
          className="w-1/2 rounded-none rounded-r-lg text-xs md:text-base"
          variant="outline"
          onClick={() => {}}
        >
          <FaGithub className="h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default Social;

"use client";

import React from "react";
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Button } from "../ui/button";

interface Props {
   socialMessage?: string;
};

const Social = ({socialMessage}: Props) => {
  return (
    <div className="flex flex-col w-full gap-y-2 pt-6">
      <p className="text-muted-foreground text-sm">{socialMessage}</p>
      <div className="flex gap-x-2">
        <Button
          size="lg"
          className="w-full"
          variant="outline"
          onClick={() => {}}
        >
          <FaGoogle className="h-5 w-5" />
        </Button>
        <Button
          size="lg"
          className="w-full"
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

"use client";

import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

interface Props {
  href: string;
  label: string;
}

export const BackButton = ({ href, label }: Props) => {
  return (
    <Button variant="link" className="font-normal w-full text-muted-foreground" size="sm" asChild>
      <Link href={href}>{label}</Link>
    </Button>
  );
};

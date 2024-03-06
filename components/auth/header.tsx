import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  label: string;
}

export const Header = ({ label }: Props) => {
  return (
    <div className="q-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-2xl font-semibold">3005gym</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

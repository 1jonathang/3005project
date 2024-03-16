import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  label: string;
  text: string;
  type: "normal" | "error";
}

export const Header = ({ label, text, type }: Props) => {
  return (
    <div className="q-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className="text-2xl font-semibold">
        {type === "error" ? <span className="text-destructive">{text}</span> : text}
      </h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};

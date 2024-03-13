"use client";

import { logout } from "@/actions/logout";
import { useRouter } from "next/navigation";

interface SignOutButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect";
  asChild?: boolean;
}

export const SignOutButton = ({
  children,
  mode = "redirect",
  asChild,
}: SignOutButtonProps) => {
  const router = useRouter();

  const onClick = () => {
    logout()
  };

  if (mode === "modal") {
    return <span>todo implement modal</span>;
  }

  return (
    <span onClick={onClick} className="cursor-pointer">
      {children}
    </span>
  );
};

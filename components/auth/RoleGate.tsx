"use client";

import { useCurrentRole } from "@/hooks/use-current-role";
import { UserRole } from "@prisma/client";
import React, { ReactNode } from "react";
import { FormError } from "../FormError";

type Props = {
  children: ReactNode;
  allowedRole: UserRole;
};

export const RoleGate = ({ children, allowedRole }: Props) => {
  const role = useCurrentRole();
  if (role !== allowedRole) {
    return (
      <FormError message="You do not have permission to view this content." />
    );
  }
  return <>{children}</>;
};

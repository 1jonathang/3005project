"use server";

import { currRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";

export const admin = async () => {
  const role = await currRole();
  if (role === UserRole.ADMIN) {
    return { sucess: "Allowed server action" };
  }
  return { error: "Forbidden" };
};

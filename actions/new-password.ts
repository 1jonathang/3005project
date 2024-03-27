"use server";

import * as z from "zod";
import bcrypt from "bcryptjs";

import { NewPasswordSchema } from "@/schemas";
import { getUserByEmail } from "@/data/user";
import { db } from "@/lib/db";
import { currUser } from "@/lib/auth";

export const newPassword = async (
  values: z.infer<typeof NewPasswordSchema>
) => {
  const user = await currUser();
  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { password } = validatedFields.data;

  const hashedPassword = await bcrypt.hash(password, 10);

  await db.user.update({
    where: { id: user?.id },
    data: { password: hashedPassword },
  });

  return { success: "Password updated!" };
};

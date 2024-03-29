"use server";

import { auth } from "@/auth";
import { getUserByEmail } from "@/data/user";
import { currUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NewEmailSchema } from "@/schemas";
import * as z from "zod";

export const newEmail = async (values: z.infer<typeof NewEmailSchema>) => {
  const user = await currUser();
  const validatedFields = NewEmailSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email: newEmail } = validatedFields.data;

  const existingUser = await getUserByEmail(newEmail);

  if (existingUser) return { error: "Email already in use" };

  await db.user.update({
    where: { id: user?.id },
    data: { email: newEmail },
  });

  console.log({ newEmail: newEmail });

  return { success: "Email succesfully updated!" };
};

"use server";

import { currUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NewNameSchema } from "@/schemas";
import * as z from "zod";

export const newName = async (values: z.infer<typeof NewNameSchema>) => {
  const user = await currUser();
  const validatedFields = NewNameSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields!" };

  const { name: newName } = validatedFields.data;

  await db.user.update({
    where: { id: user?.id },
    data: { name: newName },
  });

  return { success: "Name succesfully updated!" };
};

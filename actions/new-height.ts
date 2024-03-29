"use server";

import { currUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NewHeightSchema } from "@/schemas";
import * as z from "zod";

export const newHeight = async (values: z.infer<typeof NewHeightSchema>) => {
  const user = await currUser();
  const validatedFields = NewHeightSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields! " };

  const { height: newHeight } = validatedFields.data;

  await db.user.update({
    where: { id: user?.id },
    data: { height: newHeight },
  });

  return { success: "Succesfully updated height!" };
};

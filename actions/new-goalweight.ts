"use server";

import { currUser } from "@/lib/auth";
import { db } from "@/lib/db";
import { NewWeightSchema } from "@/schemas";
import * as z from "zod";

export const newGoalWeight = async (
  values: z.infer<typeof NewWeightSchema>
) => {
  const user = await currUser();
  const validatedFields = NewWeightSchema.safeParse(values);

  if (!validatedFields.success) return { error: "Invalid fields! " };

  const { weight: newWeight } = validatedFields.data;

  await db.user.update({
    where: { id: user?.id },
    data: { goalWeight: newWeight },
  });

  return { success: "Succesfully updated goal weight!" };
};

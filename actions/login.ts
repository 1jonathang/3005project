// our server code will never be bundled with the client code
// this is the equivalent of an api route, came with next 14.0
"use server";

import { LoginSchema } from "@/schemas";
import * as z from "zod";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // validating login credentials on the backend where it's harder to manipulate than if we set this up on the front end
  // erm good swe practices
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) {
    return { error: "Invalid credentials." };
  }

  return { success: "Succesfully logged in!" };
};

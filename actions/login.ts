// our server code will never be bundled with the client code
// this is the equivalent of an api route, came with next 14.0
"use server";

import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { LoginSchema } from "@/schemas";
import * as z from "zod";
import { AuthError } from "next-auth";

export const login = async (values: z.infer<typeof LoginSchema>) => {
  // validating login credentials on the backend where it's harder to manipulate than if we set this up on the front end
  // erm good swe practices
  const validatedFields = LoginSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid credentials." };

  const { email, password } = validatedFields.data;
  // signing this user in with passed in fields, might work or not our middleware will handle this functionality
  try {
    await signIn("credentials", {
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (error) {
    if (error instanceof AuthError) {
      switch (error.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials." };
        default:
          return { error: "Something went wrong, even tho it should've :/" };
      }
    }

    // need to throw error or it wont redirect idk why but you have to put this
    throw error;
  }
};

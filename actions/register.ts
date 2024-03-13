"use server";

import { RegisterSchema } from "@/schemas";
import * as z from "zod";
import bcrypt from "bcryptjs";
import { db } from "@/lib/db";
import { getUserByEmail } from "@/data/user";

export const register = async (values: z.infer<typeof RegisterSchema>) => {
  // parsing in the values we get through our schema to see if it is valid, if not pass up error
  const validatedFields = RegisterSchema.safeParse(values);
  if (!validatedFields.success) return { error: "Invalid credentials." };

  // deconstructing the email username and passwd from the data that was just validated
  const { email, name, password } = validatedFields.data;
  // hashing the password with bcrypt library
  const hashedPassword = await bcrypt.hash(password, 10);

  // confirmiing that this email isn't taken, basically a sql query SELECT user FROM db WHERE email = email
  const existingUser = await getUserByEmail(email);

  // if we do find a user with that email, return the error to the front end where we'll update the error message with this error
  if (existingUser) return { error: "Email already in use." };

  // if this is new user, then create this user and add it to our database
  await db.user.create({
    data: {
      name,
      email,
      // using the hashedpassword instead of the actual password, never want to store plaintext password inside of databases
      password: hashedPassword,
    },
  });

  // finally sending up success message
  return { success: "Succesfully created account!" };
};

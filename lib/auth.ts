import { auth } from "@/auth";

// helper functions, these can be used in server components, server actions, and anything server-side, api calls
export const currUser = async () => {
  const session = await auth();
  return session?.user;
};

export const currRole = async () => {
  const session = await auth();
  return session?.user.role;
};

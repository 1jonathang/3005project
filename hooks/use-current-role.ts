import { useSession } from "next-auth/react";

// can be used in anything client-side
export const useCurrentRole = () => {
  const session = useSession();
  return session.data?.user.role;
};

export const useCurrentUser = () => {
  const session = useSession();
  return session.data?.user;
};

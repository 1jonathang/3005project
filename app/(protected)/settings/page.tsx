import React from "react";
import { auth, signOut } from "@/auth";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
    </div>
  );
};

export default page;

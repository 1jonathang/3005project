import React from "react";
import { auth, signOut } from "@/auth";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
      {JSON.stringify(session)}
    </div>
  );
};

export default page;

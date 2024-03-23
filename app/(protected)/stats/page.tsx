import { auth } from "@/auth";
import { UserInfo } from "@/components/UserInfo";
import { currUser } from "@/lib/auth";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const user = await currUser();
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
      <UserInfo user={user} label="black"/>
    </div>
  );
};

export default page;

import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import { UserInfo } from "@/components/UserInfo";
import { currUser } from "@/lib/auth";
import Link from "next/link";
import React from "react";

type Props = {};

const page = async (props: Props) => {
  const user = await currUser();
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
      <UserInfo user={user} label="black" />
      <Button className="mt-2">
        <Link href="/stats/edit">edit</Link>
      </Button>
    </div>
  );
};

export default page;

import { NewEmailForm } from "@/components/auth/NewEmailForm";
import { NewNameForm } from "@/components/auth/NewNameForm";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
      <NewNameForm />
    </div>
  );
};

export default page;

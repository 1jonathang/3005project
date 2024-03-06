import { LoginForm } from "@/components/auth/LoginForm";
import React from "react";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
      <LoginForm />
    </div>
  );
};

export default page;

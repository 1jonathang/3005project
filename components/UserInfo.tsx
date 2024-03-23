// agnostic component, not gonna declare if server or client component, depends on the parent
import { ExtendedUser } from "@/next-auth";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";

type Props = {
  user?: ExtendedUser;
  label: string;
};

export const UserInfo = ({ user, label }: Props) => {
  return (
    <Card className="w-[700px]">
      <CardHeader>
        <p className="text-2xl font-semibold text-center">{label}</p>
      </CardHeader>
      <CardContent className="shadow-none">
        <div className="flex flex-row items-center justify-between rounded-lg p-3">
          <p className="text-sm font-medium">ID</p>
          <p className="truncate font-mono text-sm text-muted-foreground">{user?.id}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3">
          <p className="text-sm font-medium">Name</p>
          <p className="truncate text-sm text-muted-foreground">{user?.name}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3">
          <p className="text-sm font-medium">Email</p>
          <p className="truncate text-sm text-muted-foreground">{user?.email}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-sm text-muted-foreground">{user?.role}</p>
        </div>
      </CardContent>
    </Card>
  );
};

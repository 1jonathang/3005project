// agnostic component, not gonna declare if server or client component, depends on the parent
import { ExtendedUser } from "@/next-auth";
import React from "react";
import { Card, CardContent, CardHeader } from "./ui/card";
import { Button } from "./ui/button";
import Link from "next/link";
import { MdEdit } from "react-icons/md";

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
        <div className="flex flex-row items-center justify-between rounded-lg p-3 group">
          <p className="text-sm font-medium">ID</p>

          <p className="truncate font-mono text-sm text-muted-foreground">
            {user?.id}
          </p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3 group">
          <p className="text-sm font-medium">Name</p>
          <div className="flex flex-row gap-x-2">
            <p className="truncate text-sm text-muted-foreground">
              {user?.name}
            </p>
            <div className="hidden group-hover:flex">
              <Link href="/stats/name">
                <MdEdit />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3 group">
          <p className="text-sm font-medium">Email</p>
          <div className="flex flex-row gap-x-2">
            <p className="truncate text-sm text-muted-foreground">
              {user?.email}
            </p>
            <div className="hidden group-hover:flex">
              <Link href="/stats/email">
                <MdEdit />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3">
          <p className="text-sm font-medium">Role</p>
          <p className="truncate text-sm text-muted-foreground">{user?.role}</p>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3 group">
          <p className="text-sm font-medium">Weight</p>
          <div className="flex flex-row gap-x-2">
            <p className="truncate text-sm text-muted-foreground">
              {user?.weight}lbs
            </p>
            <div className="hidden group-hover:flex">
              <Link href="/stats/weight">
                <MdEdit />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3 group">
          <p className="text-sm font-medium">Goal weight</p>
          <div className="flex flex-row gap-x-2">
            <p className="truncate text-sm text-muted-foreground">
              {user?.goalWeight}lbs
            </p>
            <div className="hidden group-hover:flex">
              <Link href="/stats/goal-weight">
                <MdEdit />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-row items-center justify-between rounded-lg p-3 group">
          <p className="text-sm font-medium">Height</p>
          <div className="flex flex-row gap-x-2">
            <p className="truncate text-sm text-muted-foreground">
              {user?.height}cm
            </p>
            <div className="hidden group-hover:flex">
              <Link href="/stats/height">
                <MdEdit />
              </Link>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

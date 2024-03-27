"use client";

import { RoleGate } from "@/components/auth/RoleGate";
import { FormSuccess } from "@/components/FormSuccess";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useCurrentRole } from "@/hooks/use-current-role";
import { currRole } from "@/lib/auth";
import { UserRole } from "@prisma/client";
import React from "react";
import { admin } from "@/actions/admin";

type Props = {};

const page = (props: Props) => {
  const onApiRouteClick = () => {
    fetch("/api/admin").then((response) => {
      if (response.ok) {
        toast.success("Allowed API route");
      } else {
        toast.error("Forbidden API route");
      }
    });
  };

  const onServerActionClick = () => {
    admin().then((data) => {
      if (data.error) {
        toast.error(data.error);
      } else {
        toast.success(data.sucess);
      }
    });
  };
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
      <Card className="w-[600px]">
        <CardHeader>
          <p className="text-2xl font-semibold text-center">Admin</p>
        </CardHeader>
        <CardContent className="spce-y-4">
          <RoleGate allowedRole={UserRole.ADMIN}>
            <FormSuccess message="You are allowed to see this content." />
          </RoleGate>
          <div className="flex flex-row items-center justify-between rounded-md p-3">
            <p className="text-sm font-md text-muted-foreground">
              Admin-only API route
            </p>
            <Button onClick={onApiRouteClick}>Test API</Button>
          </div>
          <div className="flex flex-row items-center justify-between rounded-md p-3">
            <p className="text-sm font-md text-muted-foreground">
              Admin-only server actions
            </p>
            <Button onClick={onServerActionClick}>Test server action</Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;

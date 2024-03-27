import React from "react";
import { auth, signOut } from "@/auth";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import TrainingSessions from "@/components/TrainingSessions";

type Props = {};

const page = async (props: Props) => {
  const session = await auth();
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2  -translate-y-1/2">
      <div className="flex flex-col gap-y-5">
        <div className="flex flex-row gap-x-3">
          <Button>
            <Link href="/stats">stats</Link>
          </Button>
          <Button>
            <Link href="/admin">admin panel</Link>
          </Button>
        </div>
        <Card className="md:w-[700px] sm:w-[300px]">
          <CardHeader>
            <p className="text-xl font-semibold">Current training sessions</p>
          </CardHeader>
          <CardContent className="flex flex-row gap-x-4">
            <TrainingSessions />
            <TrainingSessions />
            <TrainingSessions />
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default page;

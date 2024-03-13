"use client";

import { LogOut } from "lucide-react";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import Link from "next/link";
import { Button } from "./ui/button";
import { db } from "@/lib/db";

const UserNav = async () => {
  const user = await db.user;
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Button variant="ghost">My account</Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-white dark:text-slate-400 dark:bg-slate-900"
        align="end"
      >
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-1 leading-none">
            {/* {user.email && (
              <p className="w-[200px] truncate text-sm text-zinc-500">
                {user.email}
              </p>
            )} */}
            bomboclaat
          </div>
        </div>

        <DropdownMenuSeparator />

        {/* {user.role === "admin" ? (
          <DropdownMenuItem>
            <Link href="/admin">Admin dashboard</Link>
          </DropdownMenuItem>
        ) : null} */}

        <DropdownMenuItem className="text-red-600 cursor-pointer">
          Sign Out
          <LogOut className="w-4 h-4 ml-2" />
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserNav;

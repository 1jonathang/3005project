import Link from "next/link";
import React from "react";
import { ThemeToggle } from "./Themetoggle";
import UserNav from "./UserNav";
import { LoginButton } from "./auth/login-button";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

type Props = {};

const Navbar = async (props: Props) => {
  return (
    <div className="fixed inset-x-0 top-0 bg-white dark:bg-[#020817] z-[10] h-fit border-b border-zinc-300 dark:border-slate-500 py-3">
      <div className="flex items-center justify-between h-full gap-2 px-8 mx-auto max-w-7xl">
        <Link href="/" className="flex items-center gap-2">
          <p className="px-2 py-1 text-xl font-bold transition-all hover:-translate-y-[2px] md:block dark:text-slate-300">
            3005gym
          </p>
        </Link>
        <div className="flex item-center">
          <ThemeToggle className="mr-4" />
          <div className="flex items-center">
            <LoginButton>
              <Button variant={"secondary"}>
                Sign up
                <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
              </Button>
            </LoginButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

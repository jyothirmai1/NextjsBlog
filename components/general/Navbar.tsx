import Link from "next/link";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import {
  RegisterLink,
  LoginLink,
  LogoutLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";

async function Navbar() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();
  return (
    <nav>
      <div className="flex flex-row justify-between">
        <div className="flex justify-left items-center py-5">
          <Link href={"/"}>
            <div className="flex items-center gap-4">
              <h1 className="text-3xl font-semibold">
                Blog<span className=" text-blue-500">Next</span>
              </h1>
            </div>
          </Link>
          <div className="hidden sm:flex items-center gap-6 pl-10 text-xl hover:text-blue-500 transition-colors">
            <Link href={"/"}>Home</Link>
          </div>

          <div className="hidden sm:flex items-center gap-6 pl-10 text-xl hover:text-blue-500 transition-colors">
            <Link href={"/dashboard"}>Dashboard</Link>
          </div>
        </div>
        {user ? (<div className="flex justify-right items-center py-5">
          <span className="mr-6">Welcome, {user.given_name}</span>
          <LogoutLink className={`${buttonVariants({ variant: "default" })}`}>
            Logout
          </LogoutLink>
        </div>):(
        <div className="flex justify-right items-center py-5">
          <span className="mr-6">
            <LoginLink className={`${buttonVariants({ variant: "default" })}`}>
              Login
            </LoginLink>
          </span>

          <RegisterLink className={buttonVariants({ variant: "secondary" })}>
            Sign Up
          </RegisterLink>
        </div>)}
      </div>
    </nav>
  );
}

export default Navbar;

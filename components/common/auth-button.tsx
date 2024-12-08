"use client";

import { LogOut, UserIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";

const AuthButton = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && session.user ? (
        <div className="flex w-full items-center justify-between">
          <Link href="/profile">
            <div className="flex items-center gap-2.5">
              <UserIcon size={22} />
              <p>{session.user.name}</p>
            </div>
          </Link>
          <Link href="/api/auth/signout">
            <LogOut size={22} strokeWidth={1} />
          </Link>
        </div>
      ) : (
        <Link href="/api/auth/signin">
          <div className="flex items-center gap-2.5">
            <UserIcon size={22} />
            <p>Sign in</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default AuthButton;
// <Link href="/api/auth/signin">
//   <a className="flex items-center gap-2.5">
//     <UserIcon size={22} />
//     <p>Sign in</p>
//   </a>
// </Link>

"use client";

import { LogOut, UserIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";

const AuthButton = () => {
  const { data: session } = useSession();
  return (
    <>
      {session && session.user ? (
        <div className="flex w-full items-center justify-between p-2.5 pl-0">
          <Link href="/profile">
            <div className="flex items-center gap-2.5">
              <Image
                alt="avt"
                src={`${session.user.image}`}
                height={24}
                width={24}
                className="rounded-full object-cover"
              />
              <p>{session.user.name}</p>
            </div>
          </Link>
          <Link href="/api/auth/signout">
            <LogOut size={22} strokeWidth={1} />
          </Link>
        </div>
      ) : (
        <Link href="/api/auth/signin">
          <div className="flex items-center gap-2.5 p-2.5 pl-0">
            <UserIcon size={22} />
            <p>Sign in</p>
          </div>
        </Link>
      )}
    </>
  );
};

export default AuthButton;

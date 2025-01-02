"use client";

import { LogOut, UserIcon } from "lucide-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { Suspense } from "react";
import SkeletonImage from "../ui/skeleton-image";

const AuthButton = () => {
  const { data: session } = useSession();
  console.log(session?.id);
  return (
    <>
      {session && session.user ? (
        <div className="flex w-full items-center justify-between p-2.5 pl-0">
          <Suspense fallback={<div>Loading...</div>}>
            <Link href={`/user/${session?.id}`}>
              <div className="flex items-center gap-2.5">
                <div className="h-6 w-6">
                  <SkeletonImage
                    src={`${session.user.image}`}
                    height="24px"
                    width="24px"
                    className="aspect-square rounded-full object-cover"
                  />
                </div>
                <p>{session.user.name}</p>
              </div>
            </Link>
            <Link href="/api/auth/signout">
              <LogOut size={22} strokeWidth={1} />
            </Link>
          </Suspense>
        </div>
      ) : (
        <Link href="/api/auth/signin" className="w-full">
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

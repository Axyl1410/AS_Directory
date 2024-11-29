import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="w-full bg-white px-4">
      <div className="container flex h-[80px] items-center justify-between">
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={144} height={30} />
        </Link>
        <div className="flex items-center font-semibold text-black">
          {session && session.user ? (
            <div className="flex items-center gap-4">
              <p className="hidden xs:block">{session.user.name}</p>
              <form
                action={async () => {
                  "use server";
                  await signOut({ redirectTo: "/" });
                }}
              >
                <button className="text-primary" type="submit">
                  <p className="hidden xs:block">Sign Out</p>
                  <div className="xs:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-6 w-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h6a2 2 0 012 2v1"
                      />
                    </svg>
                  </div>
                </button>
              </form>
              <Link href={`/user/${session.user.name}`}>
                <Image
                  src={session.user.image || "/default-profile.jpg"}
                  alt="Profile"
                  width={36}
                  height={36}
                  className="rounded-full"
                />
              </Link>
            </div>
          ) : (
            <form
              action={async () => {
                "use server";
                await signIn("github");
              }}
            >
              <button type="submit">Sign In</button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

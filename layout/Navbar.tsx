import { auth, signIn, signOut } from "@/auth";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <div className="flex h-[80px] w-full items-center justify-between bg-white px-5 py-3">
      <Link href="/">
        <Image src="/logo.png" alt="Logo" width={144} height={30} />
      </Link>
      <div className="flex items-center font-semibold text-black">
        {session && session.user ? (
          <div className="flex items-center gap-5">
            <p>{session.user.name}</p>
            <form
              action={async () => {
                "use server";
                await signOut({ redirectTo: "/" });
              }}
            >
              <button className="text-red-600" type="submit">
                Sign Out
              </button>
            </form>
            <Image
              src={session.user.image || "/default-profile.png"}
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full"
            />
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
  );
};

export default Navbar;

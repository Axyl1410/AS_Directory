import { auth } from "@/auth";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = async () => {
  const session = await auth();
  return (
    <>
      <div className="fixed z-50 h-[66px] w-full border-b px-5 py-4">
        <div className="container flex w-full justify-between">
          <Link href="/">
            <Image
              src={"https://avatars.githubusercontent.com/axyl1410"}
              alt="logo"
              height={35}
              width={35}
              className="rounded-full object-cover shadow-sm"
            />
          </Link>
          <div className="flex h-[35px] w-10 cursor-pointer items-center justify-center rounded-lg border border-[#ededed] bg-[#ededed] transition-colors hover:border-sky-500 hover:shadow">
            <Menu size={18} />
          </div>
        </div>
      </div>
    </>
    // <div className="w-full bg-white px-4">
    //   <div className="container flex h-[80px] items-center justify-between">
    //     <Link href="/">
    //       <Image src="/logo.png" alt="Logo" width={144} height={30} />
    //     </Link>
    //     <div className="flex items-center font-semibold text-black">
    //       {session && session.user ? (
    //         <div className="flex items-center gap-4">
    //           <p className="hidden xs:block">{session.user.name}</p>
    //           <form
    //             action={async () => {
    //               "use server";
    //               await signOut({ redirectTo: "/" });
    //             }}
    //           >
    //             <button className="text-primary" type="submit">
    //               <p className="hidden xs:block">Sign Out</p>
    //               <div className="xs:hidden">
    //                 <LogOut size={20} />
    //               </div>
    //             </button>
    //           </form>
    //           <Link href={`/user/${session.user.name}`}>
    //             <Image
    //               src={session.user.image || "/default-profile.jpg"}
    //               alt="Profile"
    //               width={36}
    //               height={36}
    //               className="rounded-full"
    //             />
    //           </Link>
    //         </div>
    //       ) : (
    //         <form
    //           action={async () => {
    //             "use server";
    //             await signIn("github");
    //           }}
    //         >
    //           <button type="submit">Sign In</button>
    //         </form>
    //       )}
    //     </div>
    //   </div>
    // </div>
  );
};

export default Navbar;

"use client";

import Sidebar from "@/components/ui/sidebar";
import useToggle from "@/hooks/use-state-toggle";
import { Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = ({ session }: { session: any }) => {
  const sidebar = useToggle();

  return (
    <>
      <div className="bg-primary fixed z-50 h-[66px] w-full border-b px-5 py-4">
        <div className="container flex w-full justify-between">
          <Link href="/">
            <Image
              src={"https://avatars.githubusercontent.com/axyl1410"}
              alt="logo"
              height={35}
              width={35}
              className="rounded-full object-cover shadow"
            />
          </Link>
          <div
            className="flex h-[35px] w-10 cursor-pointer items-center justify-center rounded-lg border border-[#ededed] bg-[#ededed] shadow transition-colors hover:border-sky-500"
            onClick={sidebar.toggle}
          >
            <Menu size={18} />
          </div>
        </div>
      </div>
      <Sidebar isOpen={sidebar.isOpen} onClose={sidebar.close}>
        <div>a</div>
      </Sidebar>
    </>
  );
};

export default Navbar;

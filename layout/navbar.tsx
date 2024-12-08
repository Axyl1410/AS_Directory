"use client";

import AuthButton from "@/components/common/auth-button";
import ThemeSwitcher from "@/components/theme/theme-switcher";
import Sidebar from "@/components/ui/sidebar";
import useToggle from "@/hooks/use-state-toggle";
import { ArrowRight, Menu } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Navbar = () => {
  const sidebar = useToggle();

  return (
    <>
      <div className="fixed z-50 h-[66px] w-full border-b bg-primary px-5 py-4">
        <div className="container flex w-full justify-between">
          <Link href="/">
            <Image
              src={"https://avatars.githubusercontent.com/axyl1410"}
              alt="logo"
              height={35}
              width={35}
              className="rounded-full object-cover"
            />
          </Link>
          <div
            className="group relative flex h-[35px] w-10 cursor-pointer items-center justify-center rounded-lg border border-[#ededed] bg-[#ededed] transition-colors hover:border-sky-500"
            onClick={sidebar.toggle}
          >
            <span className="absolute inset-0 -z-10 h-full w-full rounded-lg bg-gradient-to-br from-purple-600 to-blue-500 filter transition-all duration-200 ease-out group-hover:blur-[8px]" />
            <span className="relative">
              <Menu size={18} />
            </span>
          </div>
        </div>
      </div>
      <Sidebar isOpen={sidebar.isOpen} onClose={sidebar.close}>
        <div className="flex w-full flex-col">
          {[
            {
              title: "Actions",
              content: (
                <div
                  className="flex items-center gap-3.5 p-2.5 pl-6 transition-colors hover:bg-[#ededed]"
                  onClick={sidebar.close}
                >
                  <ThemeSwitcher />
                </div>
              ),
            },
            {
              title: "Navigation",
              content: (
                <div
                  className="flex items-center p-2.5 pl-6 transition-colors hover:bg-[#ededed]"
                  onClick={sidebar.close}
                >
                  <Link href="/" className="w-full transition-all hover:pl-2">
                    <div className="flex items-center gap-2.5 text-[#4479e2]">
                      <ArrowRight size={22} strokeWidth={1} />
                      <p>Home</p>
                    </div>
                  </Link>
                </div>
              ),
            },
            {
              title: "Profile",
              content: (
                <div
                  className="flex w-full items-center p-2.5 pl-6 transition-colors hover:bg-[#ededed]"
                  onClick={sidebar.close}
                >
                  <AuthButton />
                </div>
              ),
            },
          ].map((section, index) => (
            <div key={index} className="flex flex-col">
              <p className="bg-[#ebeff8] p-2.5 pl-6 text-sm text-[#4f576c]">
                {section.title}
              </p>
              {section.content}
            </div>
          ))}
        </div>
      </Sidebar>
    </>
  );
};

export default Navbar;

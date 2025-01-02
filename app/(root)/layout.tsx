"use client";
import BackToTop from "@/components/common/back-to-top";
import Footer from "@/layout/footer";
import Navbar from "@/layout/navbar";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <>
      <Navbar />
      <div className="mb-[60px] pt-[66px]">
        <motion.div
          key={pathname}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="min-h-[calc(100vh-66px)] px-5"
        >
          <div className="container my-10">{children}</div>
        </motion.div>
      </div>
      <BackToTop />
      <Footer />
    </>
  );
}

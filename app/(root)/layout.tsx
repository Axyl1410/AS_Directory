import Navbar from "@/layout/navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Navbar />
      <div className="pt-[66px]">{children}</div>
    </>
  );
}

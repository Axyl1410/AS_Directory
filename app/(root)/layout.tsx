import ServerNavbar from "@/layout/server-navbar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <ServerNavbar />
      {children}
    </>
  );
}

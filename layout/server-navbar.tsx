import { auth } from "@/auth";
import Navbar from "./navbar";

const ServerNavbar = async () => {
  const session = await auth();
  return <Navbar session={session} />;
};

export default ServerNavbar;

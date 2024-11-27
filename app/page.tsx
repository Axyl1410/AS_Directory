import Hero from "@/layout/Hero";
import Navbar from "@/layout/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <div>
        <h1 className="text-red-500">Home</h1>
      </div>
    </>
  );
}

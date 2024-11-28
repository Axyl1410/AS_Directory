import Hero from "@/layout/Hero";
import Navbar from "@/layout/Navbar";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  return (
    <>
      <Navbar />
      <Hero query={query} />
      <div>
        <h1 className="text-red-500">Home</h1>
      </div>
    </>
  );
}

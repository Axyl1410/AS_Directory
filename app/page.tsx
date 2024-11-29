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
      <section className="container flex flex-col justify-center px-4 py-12">
        <div className="pb-12 text-[30px] font-semibold">
          {query ? (
            <h1>Search results for "{query}"</h1>
          ) : (
            <h1>Latest Blogs</h1>
          )}
        </div>
      </section>
    </>
  );
}

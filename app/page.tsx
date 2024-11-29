import Card from "@/components/Card";
import Hero from "@/layout/Hero";
import Navbar from "@/layout/Navbar";

interface Post {
  _createdAt: Date;
  views: number;
  author: { _id: number; name: string };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const posts = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "This is a description",
      image:
        "https://images.unsplash.com/photo-1731927321922-1df90db6a286?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      <Navbar />
      <Hero query={query} />
      <section className="px-4">
        <div className="container flex flex-col justify-center py-12">
          <div className="pb-12 text-[30px] font-semibold">
            {query ? (
              <h1>Search results for {query}</h1>
            ) : (
              <h1>Latest Blogs</h1>
            )}
          </div>
          <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {posts?.length > 0 ? (
              posts.map((post: Post) => <Card key={post._id} {...post} />)
            ) : (
              <p>No posts found</p>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

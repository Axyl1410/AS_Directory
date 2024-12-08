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
      image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 2,
      description: "This is a description",
      image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 3,
      description: "This is a description",
      image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 4,
      description: "This is a description",
      image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <>
      {/* <Hero query={query} />
      <section className="px-4">
        <div className="container flex flex-col justify-center py-8 sm:py-12">
          <div className="pb-8 text-[24px] font-semibold sm:pb-12 sm:text-[30px]">
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
      </section> */}
    </>
  );
}

import Card, { CardProps } from "@/components/ui/card";
import { client } from "@/sanity/lib/client";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

const BLOGS_QUERY = `*[_type == "blog" && defined(slug.current)] | order(publishedAt desc) {
  title,
  slug,
  view,
  description,
  category,
  image,
  pitch,
  _createdAt,
  author -> {
    _id,
    name,
    username,
    image
  }
}`;

const options = { next: { revalidate: 30 } };

export default async function Page() {
  const blogs = await client.fetch<CardProps[]>(BLOGS_QUERY, {}, options);

  return (
    <div className="min-h-screen px-5">
      <div className="container my-10 w-full">
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <p className="text-xl font-medium md:text-2xl">Recent Posts</p>
            <Link className="flex items-center hover:underline" href="/">
              <ArrowLeft size={16} />
              <p>Back</p>
            </Link>
          </div>
          {blogs.length === 0 ? (
            <div>No blog found</div>
          ) : (
            <Suspense fallback={<div>Loading...</div>}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {blogs.map((blog, _id) => (
                  <Card key={_id} {...blog} />
                ))}
              </div>
            </Suspense>
          )}
        </div>
      </div>
    </div>
  );
}

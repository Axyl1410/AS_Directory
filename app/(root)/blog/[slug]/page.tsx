import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";
import { Suspense } from "react";

const BLOG_QUERY = `*[_type == "blog" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function Page({ params }: { params: { slug: string } }) {
  // @ts-ignore
  const { slug } = params;
  const blog = await client.fetch<SanityDocument>(
    BLOG_QUERY,
    { slug },
    options,
  );

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <img alt="" src={blog.image} />
    </Suspense>
  );
}

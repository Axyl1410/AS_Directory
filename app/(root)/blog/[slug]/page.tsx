import { BlogProps } from "@/constant/blog";
import { client } from "@/sanity/lib/client";
import Image from "next/image";
import { Suspense } from "react";

const BLOG_QUERY = `*[_type == "blog" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await client.fetch<BlogProps>(BLOG_QUERY, { slug }, options);

  if (!blog) {
    return <div>Blog not found</div>;
  }

  const imageUrl = blog.image.trimStart();

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h1>{blog.title}</h1>
      <p>{blog.description}</p>
      <Image height={200} width={200} alt="" src={imageUrl} />
    </Suspense>
  );
}

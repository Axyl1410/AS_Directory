import { BlogProps } from "@/constant/model";
import { formatDate } from "@/lib/utils";
import { client } from "@/sanity/lib/client";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const BLOG_QUERY = `*[_type == "blog" && slug.current == $slug][0]{
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

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blog = await client.fetch<BlogProps>(BLOG_QUERY, { slug }, options);

  return (
    <>
      <div className="px-5">
        <div className="container my-10 flex w-full justify-center">
          <div className="lg:w-4/5">
            {!blog ? (
              <div>Blog not found</div>
            ) : (
              <Suspense fallback={<div>Loading...</div>}>
                <div className="flex flex-col gap-4">
                  <Link className="flex items-center hover:underline" href="/">
                    <ArrowLeft size={16} />
                    <p>Back</p>
                  </Link>
                  <div className="flex items-center gap-4">
                    <Image
                      src={blog.author.image}
                      alt={blog.author.username}
                      height={40}
                      width={40}
                      priority
                      className="aspect-square rounded-full"
                    />
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium">
                        {blog.author.name + blog.author.username}
                      </p>
                      <p className="text-xs text-neutral-500">
                        {formatDate(blog._createdAt)}
                      </p>
                    </div>
                  </div>
                  <p className="text-xl font-medium md:text-2xl">
                    {blog.title}
                  </p>
                  <div className="flex flex-col gap-4">
                    <p className="text-balance">{blog.description}</p>
                    <div className="flex w-full gap-4">
                      <Image
                        alt=""
                        fill
                        src={blog.image.trimStart()}
                        className="static aspect-video rounded-sm"
                      />
                    </div>
                    <p className="text-balance">{blog.pitch}</p>
                  </div>
                </div>
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

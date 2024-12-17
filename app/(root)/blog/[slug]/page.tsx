import { BlogProps } from "@/constant/model";
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

  return (
    <>
      {!blog ? (
        <div>Blog not found</div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
          <div className="px-5">
            <div className="container my-10 w-full">
              <div className="flex flex-col gap-4">
                <div className="flex w-full justify-center">
                  <div className="flex w-full items-center justify-between lg:w-4/5">
                    <p className="text-xl font-medium md:text-2xl">
                      {blog.title}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-4">
                  <div className="flex w-full justify-center">
                    <div className="flex flex-col gap-2 lg:w-4/5">
                      <p className="text-balance">{blog.description}</p>
                    </div>
                  </div>
                  <div className="flex w-full justify-center">
                    <div className="flex w-full gap-4 lg:w-4/5">
                      <Image
                        alt=""
                        fill
                        src={blog.image.trimStart()}
                        className="static aspect-video rounded-sm"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Suspense>
      )}
    </>
  );
}

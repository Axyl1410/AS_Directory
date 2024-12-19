import Card from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";
import { BlogProps } from "@/constant/model";
import Sidebar from "@/layout/sidebar";
import { client } from "@/sanity/lib/client";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

const BLOGS_QUERY = `*[_type == "blog" && defined(slug.current)] | order(publishedAt desc)[0...12] {
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

export default async function Home() {
  const blogs = await client.fetch<BlogProps[]>(BLOGS_QUERY, {}, options);
  console.log(blogs);

  return (
    <div className="px-5">
      <div className="container my-10 flex w-full grid-cols-[300px,1fr] flex-col-reverse gap-5 lg:grid">
        <Sidebar />
        <div className="font-medium text-text dark:text-text-dark">
          <p className="text-[24px] sm:text-[30px] lg:text-[46px]">
            Welcome to my Directory
            <span className="inline-block">
              <Image
                alt=""
                src="https://avatars.githubusercontent.com/axyl1410"
                width={30}
                height={30}
                className="mx-2.5 h-[20px] w-[20px] rounded-full md:h-[30px] md:w-[30px]"
                priority
              />
            </span>
            I&apos;m Alex and here I document our latest explorations.
          </p>

          <div className="mb-[100px] mt-8 flex gap-2 text-sm">
            <Link href="/blog">
              <div className="flex w-fit items-center gap-1 rounded-md bg-linkShade p-2 text-sm text-link dark:bg-nav-dark">
                <p>Gallery</p>
                <ArrowUpRight size={16} />
              </div>
            </Link>
            <LinkPreview url="https://nguyentruonggiang.id.vn">
              <div className="flex w-fit items-center rounded-md bg-linkShade p-2 text-sm text-link dark:bg-nav-dark">
                <p>About me</p>
                <ArrowUpRight size={16} />
              </div>
            </LinkPreview>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between">
              <p className="text-xl font-medium md:text-2xl">Recent Posts</p>
              <Link href="/blog">
                <p className="text-link hover:underline">See all</p>
              </Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog, _id) => (
                  <Card key={_id} {...blog} />
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
}

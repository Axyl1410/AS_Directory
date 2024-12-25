import Loading from "@/components/common/loading";
import Card from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";
import SkeletonImage from "@/components/ui/skeleton-image";
import Snow from "@/components/ui/snow";
import Sidebar from "@/layout/sidebar";
import { sanityFetch } from "@/sanity/lib/live";
import { BLOGS_QUERY } from "@/sanity/lib/queries";
import { CardProps } from "@/types/props";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function Home() {
  const { data: blogs } = await sanityFetch({ query: BLOGS_QUERY, params: {} });

  return (
    <>
      <div className="flex w-full grid-cols-[300px,1fr] flex-col-reverse gap-5 lg:grid">
        <Sidebar />
        <div className="font-medium text-text dark:text-text-dark">
          <div className="text-[24px] sm:text-[30px] lg:text-[46px]">
            Welcome to my Directory
            <span className="mx-2.5 inline-block">
              <SkeletonImage
                width="25px"
                height="25px"
                className="h-[25px] w-[25px] rounded-full"
                src="https://avatars.githubusercontent.com/axyl1410"
                isPriority
              />
            </span>
            I&apos;m Alex and here I document our latest explorations.
          </div>

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
            <div className="mb-4 flex w-full items-center justify-between border-b pb-4">
              <p className="text-xl font-medium md:text-2xl">Recent Posts</p>
              <Link href="/blog">
                <p className="text-link hover:underline">See all</p>
              </Link>
            </div>
            <Suspense fallback={<Loading />}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {blogs.map((blog: CardProps, _id: string) => (
                  <Card key={_id} {...blog} />
                ))}
              </div>
            </Suspense>
          </div>
        </div>
      </div>
      <Snow />
    </>
  );
}

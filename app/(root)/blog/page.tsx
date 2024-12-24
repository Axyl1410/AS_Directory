import Loading from "@/components/common/loading";
import Card from "@/components/ui/card";
import SearchForm from "@/components/ui/search-form";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_BLOGS_QUERY } from "@/sanity/lib/queries";
import { CardProps } from "@/types/props";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;
  const params = { search: query || null };

  const { data: blogs } = await sanityFetch({
    query: ALL_BLOGS_QUERY,
    params,
  });

  return (
    <>
      <div className="flex flex-col gap-4">
        <SearchForm query={query} type="blog" />
        <div className="mb-4 flex w-full items-center justify-between border-b pb-4">
          <p className="text-xl font-medium md:text-2xl">Recent Posts</p>
          <Link className="flex items-center hover:underline" href="/">
            <ArrowLeft size={16} />
            <p>Back</p>
          </Link>
        </div>
        {blogs.length === 0 ? (
          <div>No blog found</div>
        ) : (
          <Suspense fallback={<Loading />}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {blogs.map((blog: CardProps) => (
                <Card key={blog._id} {...blog} />
              ))}
            </div>
          </Suspense>
        )}
      </div>
    </>
  );
}

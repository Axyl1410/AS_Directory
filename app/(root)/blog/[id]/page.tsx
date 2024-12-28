import BackButton from "@/components/common/back-button";
import Loading from "@/components/common/loading";
import Remark from "@/components/common/remark";
import View from "@/components/common/view";
import SkeletonImage from "@/components/ui/skeleton-image";
import { formatDate } from "@/lib/utils";
import { sanityFetch } from "@/sanity/lib/live";
import { BLOG_BY_ID_QUERY } from "@/sanity/lib/queries";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: blog } = await sanityFetch({
    query: BLOG_BY_ID_QUERY,
    params: { id },
  });

  return (
    <div className="flex w-full justify-center">
      <div className="lg:w-4/5">
        {!blog ? (
          <div>Blog not found</div>
        ) : (
          <Suspense fallback={<Loading />}>
            <View id={id} />
            <div className="flex flex-col gap-4">
              <BackButton
                className="flex items-center hover:underline"
                href="/"
              >
                <ArrowLeft size={16} />
                <p>Back</p>
              </BackButton>
              <div className="flex items-center gap-4">
                <Link href={`/user/${blog.author?._id}`}>
                  <SkeletonImage
                    src={blog?.author?.image ?? ""}
                    height="40px"
                    width="40px"
                    className="aspect-square rounded-full"
                  />
                </Link>
                <div className="flex flex-col gap-1">
                  <Link href={`/user/${blog.author?._id}`}>
                    <p className="text-sm font-medium">
                      {blog.author?.name ?? ""}
                    </p>
                  </Link>
                  <p className="text-xs text-neutral-500">
                    {formatDate(blog._createdAt)}
                  </p>
                </div>
              </div>
              <p className="text-xl font-medium md:text-2xl">{blog.title}</p>
              <div className="flex flex-col gap-4">
                <p className="text-balance">{blog.description}</p>
                <div className="flex w-full justify-center gap-4">
                  <SkeletonImage
                    src={blog.image?.trimStart() ?? ""}
                    className="rounded-sm"
                  />
                </div>
                <Remark markdownContent={blog.pitch} />
              </div>
            </div>
          </Suspense>
        )}
      </div>
    </div>
  );
}

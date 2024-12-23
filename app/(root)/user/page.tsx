import Loading from "@/components/common/loading";
import BackButton from "@/components/ui/back-button";
import SkeletonImage from "@/components/ui/skeleton-image";
import { sanityFetch } from "@/sanity/lib/live";
import { ALL_AUTHORS_QUERY } from "@/sanity/lib/queries";
import { Author } from "@/types/types";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  const { data: authors } = await sanityFetch({
    query: ALL_AUTHORS_QUERY,
    params: {},
  });

  return (
    <>
      {authors.length === 0 ? (
        <div>No user found</div>
      ) : (
        <div className="flex flex-col gap-4">
          <div className="flex w-full items-center justify-between">
            <p className="text-xl font-medium md:text-2xl">All Users</p>
            <BackButton className="flex items-center hover:underline" href="/">
              <ArrowLeft size={16} />
              <p>Back</p>
            </BackButton>
          </div>
          <Suspense fallback={<Loading />}>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {authors.map((author: Author, _id: string) => (
                <Link
                  href={`/user/${author._id}`}
                  key={_id}
                  className="flex items-center gap-2 rounded-sm border border-border bg-background p-4 shadow dark:border-border-dark dark:bg-background-dark"
                >
                  <SkeletonImage
                    src={author?.image?.trimStart() || ""}
                    className="aspect-square rounded-full"
                    height="40px"
                    width="40px"
                  />
                  <p>{author.name}</p>
                </Link>
              ))}
            </div>
          </Suspense>
        </div>
      )}
    </>
  );
}

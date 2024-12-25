import Loading from "@/components/common/loading";
import BackButton from "@/components/ui/back-button";
import SkeletonImage from "@/components/ui/skeleton-image";
import UserPost from "@/components/ui/user-post";
import { sanityFetch } from "@/sanity/lib/live";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import { ArrowLeft } from "lucide-react";
import { Suspense } from "react";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const { data: author } = await sanityFetch({
    query: AUTHOR_BY_ID_QUERY,
    params: { id },
  });

  return (
    <div>
      <BackButton className="mb-4 flex items-center hover:underline" href="/">
        <ArrowLeft size={16} />
        <p>Back</p>
      </BackButton>
      {!author ? (
        <div>Author not found</div>
      ) : (
        <div className="grid items-start gap-4 md:flex">
          <div className="flex h-fit flex-col items-center gap-2 rounded-3xl border-2 border-b-4 border-r-4 border-black bg-sky-500 p-4 text-white md:w-1/3 lg:w-1/4">
            <div className="h-[120px] w-[120px]">
              <SkeletonImage
                src={author?.image?.trimStart() || ""}
                height="120px"
                width="120px"
                className="aspect-square rounded-full object-cover"
              />
            </div>
            <p className="text-md">{author.name}</p>
            <h1 className="text-xl font-bold">@{author.username}</h1>
            <p>{author.bio}</p>
          </div>
          <Suspense fallback={<Loading />}>
            <div className="md:w-2/3 lg:w-3/4">
              <UserPost id={id} />
            </div>
          </Suspense>
        </div>
      )}
    </div>
  );
}

import Loading from "@/components/common/loading";
import { sanityFetch } from "@/sanity/lib/live";
import { AUTHOR_BY_ID_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";
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
    <>
      {!author ? (
        <div>Author not found</div>
      ) : (
        <Suspense fallback={<Loading />}>
          <p>{author.username}</p>
          <p>{author.name}</p>
          <p>{author._id}</p>
          <Image
            alt=""
            src={author?.image?.trimStart() || ""}
            height={200}
            width={200}
          />
        </Suspense>
      )}
    </>
  );
}

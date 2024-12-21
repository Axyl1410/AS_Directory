import { client } from "@/sanity/lib/client";
import { Author } from "@/types/types";
import Image from "next/image";
import { Suspense } from "react";

const AUTHOR_QUERY = `*[_type == "author" && _id == $id][0]`;

const options = { next: { revalidate: 30 } };

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const author = await client.fetch<Author>(AUTHOR_QUERY, { id }, options);

  return (
    <>
      {!author ? (
        <div>Author not found</div>
      ) : (
        <Suspense fallback={<div>Loading...</div>}>
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

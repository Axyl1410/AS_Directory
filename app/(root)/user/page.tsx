import { sanityFetch } from "@/sanity/lib/live";
import { ALL_AUTHORS_QUERY } from "@/sanity/lib/queries";
import { Author } from "@/types/types";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Suspense } from "react";

export default async function Page() {
  const { data: authors } = await sanityFetch({
    query: ALL_AUTHORS_QUERY,
    params: {},
  });

  return (
    <div className="min-h-screen px-5">
      <div className="container my-10 w-full">
        {authors.length === 0 ? (
          <div>No user found</div>
        ) : (
          <div className="flex flex-col gap-4">
            <div className="flex w-full items-center justify-between">
              <p className="text-xl font-medium md:text-2xl">All Users</p>
              <Link className="flex items-center hover:underline" href={"/"}>
                <ArrowLeft size={16} />
                <p>Back</p>
              </Link>
            </div>
            <Suspense fallback={<div>Loading...</div>}>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {authors.map((author: Author, _id: string) => (
                  <div
                    key={_id}
                    className="flex items-center gap-2 rounded-sm border border-border bg-white p-4 shadow dark:border-border-dark dark:bg-background-dark"
                  >
                    <Image
                      alt=""
                      height={40}
                      width={40}
                      src={author?.image?.trimStart() || ""}
                      className="aspect-square rounded-full"
                    />
                    <div className="flex">
                      <p>{author.name}</p>
                      <p>{author.username}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Suspense>
          </div>
        )}
      </div>
    </div>
  );
}

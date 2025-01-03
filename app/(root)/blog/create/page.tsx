import { auth } from "@/auth";
import Loading from "@/components/common/loading";
import PostForm from "@/components/ui/post-form";
import { redirect } from "next/navigation";
import { Suspense } from "react";

export default async function Page() {
  const session = await auth();

  if (!session) redirect("/");

  return (
    <div className="flex w-full justify-center">
      <Suspense fallback={<Loading />}>
        <div className="w-full flex-col items-center gap-4 lg:w-4/5">
          <p className="pb-4 text-2xl font-bold">Submit your post</p>
          <PostForm />
        </div>
      </Suspense>
    </div>
  );
}

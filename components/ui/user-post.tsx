import { sanityFetch } from "@/sanity/lib/live";
import { BLOG_BY_AUTHOR_QUERY } from "@/sanity/lib/queries";
import { CardProps } from "@/types/props";
import { toast } from "sonner";
import Card from "./card";

const UserPost = async ({ id }: { id: string }) => {
  let blog = [];
  try {
    const { data } = await sanityFetch({
      query: BLOG_BY_AUTHOR_QUERY,
      params: { id },
    });
    blog = data;
  } catch (error) {
    toast.error(`Error fetching user posts: ${error}`);
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {blog.map((post: CardProps, _id: string) => (
        <Card key={_id} {...post} />
      ))}
    </div>
  );
};

export default UserPost;

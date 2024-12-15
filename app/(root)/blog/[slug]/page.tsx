import { client } from "@/sanity/lib/client";
import { SanityDocument } from "next-sanity";

const BLOG_QUERY = `*[_type == "blog" && slug.current == $slug][0]`;

const options = { next: { revalidate: 30 } };

export default function Page({ params }: { params: { slug: string } }) {
  return new Promise(async (resolve, reject) => {
    try {
      const { slug } = await params;
      const blog = await client.fetch<SanityDocument>(
        BLOG_QUERY,
        { slug },
        options,
      );

      if (!blog) {
        resolve(<div>Blog not found</div>);
        return;
      }

      resolve(
        <div>
          <h1>{blog.title}</h1>
          <p>{blog.decription}</p>
          <img alt="" src={blog.image} />
        </div>,
      );
    } catch (error) {
      reject(error);
    }
  });
}

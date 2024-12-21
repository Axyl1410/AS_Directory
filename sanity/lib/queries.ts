import { defineQuery } from "next-sanity";

export const BLOGS_QUERY = defineQuery(
  `*[_type == "blog" && defined(slug.current)] | order(publishedAt desc)[0...12] {
  _id,
  title,
  slug,
  view,
  description,
  category,
  image,
  pitch,
  _createdAt,
  author -> {
    _id,
    name,
    username,
    image
  }
}`,
);

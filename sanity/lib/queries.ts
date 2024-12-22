import { defineQuery } from "next-sanity";

// Common projections
const BLOG_PROJECTION = `{
  _id,
  title,
  slug,
  view,
  description,
  category,
  image,
  pitch,
  _createdAt,
  "author": author -> {
    _id,
    name,
    username,
    image
  }
}`;

const AUTHOR_PROJECTION = `{
  _id,
  name,
  username,
  image
}`;

// Blog queries
export const ALL_BLOGS_QUERY = defineQuery(
  `*[_type == "blog"]${BLOG_PROJECTION}`,
);

export const BLOGS_QUERY = defineQuery(
  `*[_type == "blog" && defined(slug.current)] | order(publishedAt desc)[0...12]${BLOG_PROJECTION}`,
);

export const BLOG_BY_ID_QUERY = defineQuery(
  `*[_type == "blog" && _id == $id][0]${BLOG_PROJECTION}`,
);

// Author queries
export const ALL_AUTHORS_QUERY = defineQuery(
  `*[_type == "author"]${AUTHOR_PROJECTION}`,
);

export const AUTHOR_BY_ID_QUERY = defineQuery(
  `*[_type == "author" && _id == $id][0]${AUTHOR_PROJECTION}`,
);

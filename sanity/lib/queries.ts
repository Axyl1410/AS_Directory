import { defineQuery } from "next-sanity";

//#region posts

export const ALL_BLOGS_QUERY = defineQuery(
  `*[_type == "blog"]{
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

export const BLOG_BY_ID_QUERY = defineQuery(
  `*[_type == "blog" && _id == $id][0]{
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

//#region author

export const ALL_AUTHORS_QUERY = defineQuery(
  `*[_type == "author"]{
  _id,
  username,
  name,
  image
}`,
);

export const AUTHOR_BY_ID_QUERY = defineQuery(
  `*[_type == "author" && _id == $id][0]`,
);

import { defineQuery } from "next-sanity";

// Common projections
const AUTHOR_PROJECTION = `{
  _id,
  name,
  username,
  image,
  bio
}`;

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
  "author": author -> ${AUTHOR_PROJECTION},
}`;

// Blog queries
export const ALL_BLOGS_QUERY = defineQuery(
  `*[_type == "blog" && !defined($search) || title match $search || category match $search || author -> name match $search]${BLOG_PROJECTION}`,
);

export const BLOGS_QUERY = defineQuery(
  `*[_type == "blog" && defined(slug.current)] | order(publishedAt desc)[0...12]${BLOG_PROJECTION}`,
);

export const BLOG_BY_ID_QUERY = defineQuery(
  `*[_type == "blog" && _id == $id][0]${BLOG_PROJECTION}`,
);

export const BLOG_BY_AUTHOR_QUERY = defineQuery(
  `*[_type == "blog" && author -> _id == $id]${BLOG_PROJECTION}`,
);

export const VIEW_BLOG_QUERY = defineQuery(
  `*[_type == "blog" && _id == $id]{
    view
  }`,
);

// Author queries
export const ALL_AUTHORS_QUERY = defineQuery(
  `*[_type == "author" && !defined($search) || username match $search || name match $search]${AUTHOR_PROJECTION}`,
);

export const AUTHOR_BY_ID_QUERY = defineQuery(
  `*[_type == "author" && _id == $id][0]${AUTHOR_PROJECTION}`,
);

export const AUTHOR_BY_GITHUB_ID_QUERY = defineQuery(
  `*[_type == "author" && id == $id][0]{
    _id,
    id,
    name,
    username,
    email,
    image,
    bio
  }`,
);

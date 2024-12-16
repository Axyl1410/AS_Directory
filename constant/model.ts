export interface Author {
  _id: string;
  name: string;
  username: string;
  image: string;
}

export interface BlogProps {
  _id: string;
  _createdAt: string;
  view: number;
  author: Author;
  description: string;
  image: string;
  category: string;
  title: string;
  pitch: string;
  slug: {
    current: string;
  };
}

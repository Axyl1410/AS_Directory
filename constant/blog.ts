export interface BlogProps {
  _id: string;
  _createdAt: string;
  views: number;
  author: { _id: number; name: string };
  description: string;
  image: string;
  category: string;
  title: string;
  pitch: string;
  slug: {
    current: string;
  };
}

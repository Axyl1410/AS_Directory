interface Post {
  _createdAt: Date;
  views: number;
  author: { _id: number; name: string };
  _id: number;
  description: string;
  image: string;
  category: string;
  title: string;
}

import Card from "@/components/ui/card";
import { LinkPreview } from "@/components/ui/link-preview";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  // {
  // searchParams,
  // }: {
  // searchParams: Promise<{ query?: string }>;
  // },
  // const query = (await searchParams).query;
  const posts: Post[] = [
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 1,
      description: "This is a description",
      image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 2,
      description: "This is a description",
      image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 3,
      description: "This is a description",
      image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
      category: "Robots",
      title: "We Robots",
    },
    {
      _createdAt: new Date(),
      views: 55,
      author: { _id: 1, name: "John Doe" },
      _id: 4,
      description: "This is a description",
      image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
      category: "Robots",
      title: "We Robots",
    },
  ];

  return (
    <div className="px-5">
      <div className="container my-10 flex w-full grid-cols-[300px,1fr] flex-col-reverse gap-5 lg:grid">
        <div className="top-6 z-10 flex h-full w-[300px] flex-col gap-4 lg:static">
          {[
            {
              title: "Getting Started",
              children: [
                {
                  title: "Introduction",
                  link: "/",
                },
              ],
            },
          ].map((section) => (
            <details key={section.title} open>
              <summary className="cursor-pointer font-semibold">
                {section.title}
              </summary>
              {section.children.map((child) => (
                <Link key={child.link} href={child.link}>
                  <p className="mt-2 w-fit rounded-md bg-linkShade p-2 text-sm text-link dark:bg-nav-dark">
                    {child.title}
                  </p>
                </Link>
              ))}
            </details>
          ))}
        </div>

        <div className="font-medium text-text dark:text-text-dark">
          <p className="text-[24px] sm:text-[30px] lg:text-[46px]">
            Welcome to my Directory
            <span className="inline-block">
              <Image
                alt=""
                src="https://avatars.githubusercontent.com/axyl1410"
                width={30}
                height={30}
                className="mx-2.5 h-[20px] w-[20px] rounded-full md:h-[30px] md:w-[30px]"
              />
            </span>
            I&apos;m Alex and here I document our latest explorations.
          </p>

          <div className="my-8 flex gap-2 text-sm">
            <div className="flex w-fit items-center gap-1 rounded-md bg-linkShade p-2 text-sm text-link dark:bg-nav-dark">
              <p>Gallery</p>
              <ArrowUpRight size={16} />
            </div>
            <LinkPreview url="https://nguyentruonggiang.id.vn">
              <div className="flex w-fit items-center rounded-md bg-linkShade p-2 text-sm text-link dark:bg-nav-dark">
                <p>About me</p>
                <ArrowUpRight size={16} />
              </div>
            </LinkPreview>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <Card key={post._id} {...post} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

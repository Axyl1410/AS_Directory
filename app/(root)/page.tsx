// interface Post {
//   _createdAt: Date;
//   views: number;
//   author: { _id: number; name: string };
//   _id: number;
//   description: string;
//   image: string;
//   category: string;
//   title: string;
// }

import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  // {
  // searchParams,
  // }: {
  // searchParams: Promise<{ query?: string }>;
  // },
  // const query = (await searchParams).query;
  // const posts = [
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "John Doe" },
  //     _id: 1,
  //     description: "This is a description",
  //     image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "John Doe" },
  //     _id: 2,
  //     description: "This is a description",
  //     image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "John Doe" },
  //     _id: 3,
  //     description: "This is a description",
  //     image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  //   {
  //     _createdAt: new Date(),
  //     views: 55,
  //     author: { _id: 1, name: "John Doe" },
  //     _id: 4,
  //     description: "This is a description",
  //     image: "https://nguyentruonggiang.id.vn/image/img1.jfif",
  //     category: "Robots",
  //     title: "We Robots",
  //   },
  // ];

  return (
    <div className="px-5">
      <div className="container my-10 flex w-full grid-cols-[300px,1fr] flex-col-reverse gap-5 lg:grid">
        <div className="top-6 z-10 flex h-full min-h-screen w-[300px] flex-col gap-4 lg:static">
          <details open>
            <summary className="cursor-pointer font-semibold">
              Getting Started
            </summary>
            <Link href="/">
              <p className="mt-2 w-fit rounded-md bg-linkShade p-2.5 text-sm text-link dark:bg-nav-dark">
                Introduction
              </p>
            </Link>
          </details>
        </div>
        <div className="text-[24px] font-medium text-text dark:text-text-dark lg:text-[46px]">
          <p>
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
        </div>
      </div>
    </div>
  );
}

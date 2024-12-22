import { formatDate } from "@/lib/utils";
import { CardProps } from "@/types/props";
import { Eye } from "lucide-react";
import Link from "next/link";
import React from "react";
import SkeletonImage from "./skeleton-image";

const Card: React.FC<CardProps> = ({
  _id,
  _createdAt,
  view,
  author,
  description,
  image,
  category,
  title,
  slug,
  ...props
}) => {
  return (
    <div
      key={_id}
      className="flex flex-col gap-4 rounded-3xl border-2 border-b-4 border-r-4 border-black bg-background p-4 font-work-sans text-text transition-colors dark:border-white dark:bg-background-dark dark:text-text-dark"
      {...props}
    >
      <div className="flex w-full items-center justify-between">
        <p className="rounded-full py-2.5 text-sm font-medium transition-colors duration-300 ease-in">
          {formatDate(_createdAt)}
        </p>
        <div className="flex items-center gap-1">
          <Eye className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
          <p className="text-sm font-medium">{view}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <Link href={`/user/${author?._id}`}>
            <p className="cursor-pointer text-sm font-medium hover:underline">
              {author?.name}
            </p>
          </Link>
          <Link href={`/blog/${_id}`}>
            <p className="cursor-pointer text-xl font-semibold hover:underline md:text-2xl">
              {title}
            </p>
          </Link>
        </div>
        <Link href={`/user/${author?._id}`}>
          <SkeletonImage
            src={author?.image ?? ""}
            width="40px"
            height="40px"
            className="aspect-square rounded-full object-cover"
          />
        </Link>
      </div>
      <Link href={`/blog/${_id}`}>
        <div className="pb-4 text-sm">{description}</div>
        <SkeletonImage
          className="aspect-video rounded-lg object-cover"
          height="150px"
          src={image ?? ""}
        />
      </Link>
      <div className="flex items-center justify-between">
        <p className="cursor-pointer text-sm font-medium hover:underline">
          {category}
        </p>
        <Link href={`/blog/${_id}`}>
          <button className="rounded-full border border-black bg-black px-4 py-2 text-sm text-white transition-colors duration-200 ease-out hover:bg-background hover:text-black">
            Details
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Card;

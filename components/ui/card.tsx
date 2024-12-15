import { formatDate } from "@/lib/utils";
import { Eye } from "lucide-react";
import SkeletonImage from "./skeleton-image";

interface Author {
  _id: number;
  name: string;
}

interface CardProps {
  _createdAt: Date;
  views: number;
  author: Author;
  description: string;
  image: string;
  category: string;
  title: string;
}

const Card = ({
  _createdAt,
  views,
  author,
  description,
  image,
  category,
  title,
}: CardProps) => {
  return (
    <div className="flex flex-col gap-4 rounded-3xl border-2 border-b-4 border-r-4 border-black bg-background p-4 font-work-sans text-text transition-colors dark:border-white dark:bg-background-dark dark:text-text-dark">
      <div className="flex w-full items-center justify-between">
        <p className="rounded-full py-2.5 text-sm font-medium transition-colors duration-300 ease-in">
          {formatDate(_createdAt)}
        </p>
        <div className="flex gap-1">
          <Eye className="h-5 w-5 md:h-6 md:w-6" strokeWidth={1.5} />
          <p className="text-sm font-medium">{views}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="cursor-pointer text-sm font-medium hover:underline">
            {author.name}
          </p>
          <p className="cursor-pointer text-xl font-semibold hover:underline md:text-2xl">
            {title}
          </p>
        </div>
        <SkeletonImage
          src={image}
          width="40px"
          height="40px"
          className="aspect-square rounded-full object-cover"
        />
      </div>
      <div className="text-sm">{description}</div>
      <SkeletonImage
        className="aspect-video rounded-lg object-cover"
        height="150px"
        src={image}
      />
      <div className="flex items-center justify-between">
        <p className="cursor-pointer text-sm font-medium hover:underline">
          {category}
        </p>
        <button className="rounded-full bg-black px-4 py-2 text-sm text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;

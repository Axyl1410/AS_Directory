import { formatDate } from "@/lib/utils";
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
    <div className="group flex flex-col gap-4 rounded-3xl border-4 border-b-8 border-r-8 border-black bg-white p-4 font-work-sans transition-colors hover:border-primary hover:bg-primary-100">
      <div className="flex w-full items-center justify-between">
        <p className="rounded-full bg-primary-100 p-2.5 font-medium transition-colors group-hover:bg-white">
          {formatDate(_createdAt)}
        </p>
        <div className="flex gap-1">
          <svg
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.03601 12.322C1.967 12.1146 1.967 11.8904 2.03601 11.683C3.42301 7.51 7.36001 4.5 12 4.5C16.638 4.5 20.573 7.507 21.963 11.678C22.033 11.885 22.033 12.109 21.963 12.317C20.577 16.49 16.64 19.5 12 19.5C7.36201 19.5 3.42601 16.493 2.03601 12.322Z"
              stroke="#EE2B69"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 12C15 12.7956 14.6839 13.5587 14.1213 14.1213C13.5587 14.6839 12.7956 15 12 15C11.2044 15 10.4413 14.6839 9.87868 14.1213C9.31607 13.5587 9 12.7956 9 12C9 11.2044 9.31607 10.4413 9.87868 9.87868C10.4413 9.31607 11.2044 9 12 9C12.7956 9 13.5587 9.31607 14.1213 9.87868C14.6839 10.4413 15 11.2044 15 12Z"
              stroke="#EE2B69"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="font-medium">{views}</p>
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <p className="font-medium">{author.name}</p>
          <p className="text-2xl font-semibold">{title}</p>
        </div>
        <SkeletonImage
          src={image}
          width="40px"
          height="40px"
          className="aspect-square rounded-full object-cover"
        />
      </div>
      <div>{description}</div>
      <SkeletonImage
        className="aspect-video rounded-lg object-cover"
        height="150px"
        src={image}
      />
      <div className="flex items-center justify-between">
        <p className="font-medium">{category}</p>
        <button className="rounded-full bg-black px-4 py-2 text-white">
          Details
        </button>
      </div>
    </div>
  );
};

export default Card;

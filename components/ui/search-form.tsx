"use client";

import { Search } from "lucide-react";
import Form from "next/form";

const SearchForm = ({
  query,
  type,
}: {
  query?: string;
  type: "author" | "blog";
}) => {
  return (
    <div className="mb-10 flex flex-col items-center gap-4">
      <div className="text-3xl font-bold md:text-4xl">
        {type == "blog" ? "Explore Blogs" : "Explore Authors"}
      </div>
      <p className="text-center">
        {type == "blog"
          ? "Discover blogs by topic, interest, or writing style."
          : "Connect with a community of talented bloggers and diverse content."}
      </p>
      <Form
        scroll={false}
        action={type == "blog" ? "/blog" : "/user"}
        className="search-form flex h-12 w-full items-center border pr-4"
      >
        <button
          type="submit"
          className="flex h-11 w-11 items-center justify-center rounded"
        >
          <Search size={20} strokeWidth={2} />
        </button>
        <div className="ml-4 flex h-full w-full items-center">
          <input
            placeholder="Search by title, category, author and more"
            className="h-full w-full bg-background outline-none dark:bg-background-dark"
            name="query"
            defaultValue={query}
          />
        </div>
      </Form>
    </div>
  );
};

export default SearchForm;

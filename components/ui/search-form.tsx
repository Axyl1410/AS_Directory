"use client";

import { Search, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Form from "next/form";
import Link from "next/link";
import React from "react";

type SearchFormProps = {
  query?: string;
  type: "author" | "blog";
};

const SearchForm: React.FC<SearchFormProps> = ({ query, type }) => {
  const resetForm = () => {
    const form = document.querySelector(".search-form") as HTMLFormElement;
    if (form) form.reset();
  };

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
        <div className="mx-4 flex h-full w-full items-center">
          <input
            placeholder="Search by title, category, author and more"
            className="h-full w-full bg-background outline-none dark:bg-background-dark"
            name="query"
            defaultValue={query}
          />
        </div>
        <AnimatePresence>
          {query && (
            <motion.button
              type="reset"
              onClick={resetForm}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex h-11 items-center justify-center rounded"
            >
              <Link href={type == "blog" ? "/blog" : "/user"}>
                <X size={20} strokeWidth={2} />
              </Link>
            </motion.button>
          )}
        </AnimatePresence>
      </Form>
    </div>
  );
};

export default SearchForm;

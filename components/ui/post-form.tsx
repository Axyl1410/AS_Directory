"use client";

// import useToggle from "@/hooks/use-state-toggle";
import MDEditor from "@uiw/react-md-editor";
import { useState } from "react";

const PostForm = () => {
  const [content, setContent] = useState<string>("");
  // const modal = useToggle();

  console.log(content);

  return (
    <form className="flex grid-cols-2 flex-col gap-2 text-gray-600 dark:text-text-dark sm:grid">
      <div className="sm:col-span-1">
        <label
          htmlFor="title"
          className="block text-sm/6 font-medium text-gray-900 dark:text-text-dark"
        >
          Title
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="title"
            id="title"
            placeholder="title post"
            className="block w-full rounded-md bg-background px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-background-dark sm:text-sm/6"
          />
        </div>
      </div>

      <div className="sm:col-span-1">
        <label
          htmlFor="title"
          className="block text-sm/6 font-medium text-gray-900 dark:text-text-dark"
        >
          Category
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="category"
            id="category"
            placeholder="category post (e.g. technology)"
            className="block w-full rounded-md bg-background px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-background-dark sm:text-sm/6"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="description"
          className="block text-sm/6 font-medium text-gray-900 dark:text-text-dark"
        >
          Description
        </label>
        <div className="mt-2">
          <textarea
            name="description"
            id="description"
            rows={3}
            className="block w-full rounded-md bg-background px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-background-dark sm:text-sm/6"
            defaultValue={""}
          />
        </div>
        <p className="mt-3 text-sm/6">Write a few description about post.</p>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="link"
          className="block text-sm/6 font-medium text-gray-900 dark:text-text-dark"
        >
          Image URL
        </label>
        <div className="mt-2">
          <input
            type="text"
            name="link"
            id="link"
            placeholder="URL"
            className="block w-full rounded-md bg-background px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 dark:bg-background-dark sm:text-sm/6"
          />
        </div>
      </div>

      <div className="col-span-full">
        <label
          htmlFor="pitch"
          className="mb-2 block text-sm/6 font-medium text-gray-900"
        >
          Content
        </label>

        <div data-color-mode="light" className="w-full">
          <MDEditor
            value={content}
            onChange={(value) => setContent(value as string)}
            id="pitch"
            preview="edit"
            height={320}
            style={{
              overflow: "hidden",
              width: "100%",
            }}
            textareaProps={{
              placeholder:
                "Briefly Describe your idea and what problem it solves",
            }}
            previewOptions={{
              disallowedElements: ["style"],
            }}
          />
        </div>
      </div>
    </form>
  );
};

export default PostForm;

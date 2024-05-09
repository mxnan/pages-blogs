import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { BlogPreview } from "@/lib/types";
import { getFormattedPublishedAt } from "@/lib/utils";

const BlogCard = ({ blog }: { blog: BlogPreview }) => {
  // use formatted time
  const formattedPublishedAt = getFormattedPublishedAt(blog.publishedAt);

  return (
    <>
      <Link
        key={blog.slug}
        className="min-h-36 p-4 rounded-xl border border-violet-200 dark:border-emerald-950"
        href={`/blog/${blog.slug}`}
      >
        <div className="w-full relative flex-1">
          <p className="mb-4   font-title font-bold uppercase tracking-wider">
            {blog.title}
          </p>
          <p className="max-w-xl">{blog.description}</p>

          <div className="mt-6 flex items-center gap-3 justify-end">
            <p className=" text-sm font-semibold tracking-tight">
              {formattedPublishedAt}
            </p>
            <Separator
              orientation="vertical"
              className="h-6 bg-violet-600 dark:bg-emerald-900"
            />
            <p className="text-stone-600 dark:text-stone-400 text-sm  font-semibold tracking-tight">
              {blog.readingtime}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BlogCard;

import React from "react";
import { Separator } from "../ui/separator";
import Link from "next/link";
import { BlogPreview } from "@/lib/types";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);

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
          <p className="mb-4  text-stone-600 dark:text-stone-400  font-title font-bold uppercase tracking-tight">
            {blog.title}
          </p>
          <p className="text-stone-600 dark:text-stone-400  tracking-tight">
            {blog.description}
          </p>

          <div className="mt-8 flex items-center gap-4 justify-end">
            <p className="text-stone-600 dark:text-stone-400 text-sm font-semibold tracking-tight">
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

//get formatted time
export const getFormattedPublishedAt = (publishedAt: string) => {
  const now = dayjs();
  const publishedAtDate = dayjs(publishedAt);

  const diffYears = now.diff(publishedAtDate, "year");
  const diffMonths = now.diff(publishedAtDate, "month");
  const diffWeeks = now.diff(publishedAtDate, "week");
  const diffDays = now.diff(publishedAtDate, "day");

  if (diffYears >= 1) {
    return `${diffYears} years ago`;
  } else if (diffMonths >= 1) {
    return `${diffMonths} months ago`;
  } else if (diffWeeks >= 1) {
    return `${diffWeeks} weeks ago`;
  } else if (diffDays >= 1 && diffDays < 7) {
    return `${diffDays} days ago`;
  } else {
    return publishedAtDate.format("MMMM D, YYYY");
  }
};

export default BlogCard;

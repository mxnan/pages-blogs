// components/SnippetCard.tsx

import React from "react";
import Link from "next/link";
import { SnippetPreview } from "@/lib/types";
import { Separator } from "./ui/separator";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
dayjs.extend(relativeTime);
const SnippetCard = ({ snippet }: { snippet: SnippetPreview }) => {
  // use formatted time
  const formattedPublishedAt = getFormattedPublishedAt(snippet.publishedAt);

  return (
    <>
      <Link
        key={snippet.slug}
        className="max-w-sm min-h-36 w-full p-4 rounded-xl border border-violet-200 dark:border-emerald-950"
        href={`/snippets/${snippet.slug}`}
      >
        <div className="w-full relative space-y-3 flex-1">
          <p className="mb-2  text-stone-600 dark:text-stone-400  font-title font-bold uppercase tracking-tight">
            {snippet.title}
          </p>
          <p className="text-stone-600 dark:text-stone-400  tracking-tight">
            {snippet.description}
          </p>
          <Separator
            orientation="horizontal"
            className=" bg-violet-600 dark:bg-emerald-900"
          />
          <div className=" flex items-center gap-4 justify-evenly">
            <p className="text-stone-600 dark:text-stone-400 text-sm font-semibold tracking-tight">
              {snippet.readingtime}
            </p>
            <Separator
              orientation="vertical"
              className="h-6 bg-violet-600 dark:bg-emerald-900"
            />
            <p className="text-stone-600 dark:text-stone-400 text-sm  font-semibold tracking-tight">
              {formattedPublishedAt}
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

export default SnippetCard;

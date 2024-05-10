// components/SnippetCard.tsx

import React from "react";
import Link from "next/link";
import { SnippetPreview } from "@/lib/types";
import { Separator } from "../ui/separator";
import { getFormattedPublishedAt } from "@/lib/utils";

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
          <p className="mb-2    font-title font-bold uppercase tracking-tight">
            {snippet.title}
          </p>
          <p className=" tracking-tight">
            {snippet.description}
          </p>
          <Separator
            orientation="horizontal"
            className=" "
          />
          <div className=" flex items-center gap-4 justify-evenly">
            <p className="text-stone-600 dark:text-stone-400 text-sm font-semibold tracking-tight">
              {snippet.readingtime}
            </p>
            <Separator
              orientation="vertical"
              className="h-6 "
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



export default SnippetCard;

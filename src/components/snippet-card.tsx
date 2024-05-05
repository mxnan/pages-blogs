// components/SnippetCard.tsx

import React from "react";
import Link from "next/link";
import { SnippetPreview } from "@/lib/types";

const SnippetCard = ({ snippet }: { snippet: SnippetPreview }) => {
  return (
    <>
      <Link
        key={snippet.slug}
        className="max-w-sm min-h-36 w-full p-4 rounded-xl border"
        href={`/snippets/${snippet.slug}`}
      >
        <div className="w-full relative space-y-4 flex-1">
          <p className=" text-violet-600 dark:text-amber-600 uppercase tracking-tight">
            {snippet.title}
          </p>
          <p className="text-stone-600 dark:text-stone-400 tracking-tight">
            {snippet.description}
          </p>
          <p className="text-stone-600 dark:text-stone-400 tracking-tight">
            {snippet.publishedAt}
          </p>
          <p className="text-stone-600 dark:text-stone-400 tracking-tight">
            {snippet.readingtime}
          </p>
        </div>
      </Link>
    </>
  );
};

export default SnippetCard;

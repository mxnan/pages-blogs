// components/SnippetCard.tsx

import React from "react";
import Link from "next/link";
import { SnippetPreview } from "@/lib/types";
import { Separator } from "./ui/separator";

const SnippetCard = ({ snippet }: { snippet: SnippetPreview }) => {
  return (
    <>
      <Link
        key={snippet.slug}
        className="max-w-sm min-h-36 w-full p-4 rounded-xl border"
        href={`/snippets/${snippet.slug}`}
      >
        <div className="w-full relative space-y-4 flex-1">
          <p className=" text-violet-600 dark:text-emerald-500 font-title font-bold uppercase tracking-tight">
            {snippet.title}
          </p>
          <p className="text-stone-600 dark:text-stone-400  tracking-tight">
            {snippet.description}
          </p>
          <div className="flex items-center gap-4">
            <p className="text-stone-600 dark:text-stone-400 text-sm font-semibold tracking-tight">
              {snippet.readingtime}
            </p>
            <Separator orientation="vertical" className="h-8" />
            <p className="text-stone-600 dark:text-stone-400 text-sm  font-semibold tracking-tight">
              {snippet.publishedAt}
            </p>
          </div>
        </div>
      </Link>
    </>
  );
};

export default SnippetCard;

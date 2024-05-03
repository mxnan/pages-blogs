// components/SnippetCard.tsx

import React from "react";
import Link from "next/link";
import { SnippetPreview } from "@/lib/types";

const SnippetCard = ({ snippet }: { snippet: SnippetPreview }) => {
  return (
    <>
      <Link
        key={snippet.slug}
        className="max-w-sm min-h-36 w-full p-4 rounded-lg border"
        href={`/snippet/${snippet.slug}`}
      >
        <div className="w-full space-y-2 ">
          <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
            {snippet.icon}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {snippet.title}
          </p>
          <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
            {snippet.description}
          </p>
        </div>
      </Link>
    </>
  );
};

export default SnippetCard;

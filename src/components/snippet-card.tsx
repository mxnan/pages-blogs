// components/SnippetCard.tsx

import React from "react";
import Link from "next/link";
import { Snippet } from "@/lib/types";

const SnippetCard = ({ snippets }: { snippets: Snippet[] }) => {
  return (
    <>
      {snippets.map((snippet) => (
        <Link
          key={snippet.slug}
          className="max-w-sm w-full rounded-lg border border-neutral-200 bg-white p-4 dark:border-neutral-700 dark:bg-neutral-800"
          href={`/snippet/${snippet.slug}`}
        >
          <div className="w-full space-y-2 ">
            <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
              {snippet.metadata.icon}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {snippet.metadata.title}
            </p>
            <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
              {snippet.metadata.description}
            </p>
          </div>
        </Link>
      ))}
    </>
  );
};

export default SnippetCard;

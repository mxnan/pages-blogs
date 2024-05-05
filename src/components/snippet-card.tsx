// components/SnippetCard.tsx

import React from "react";
import Link from "next/link";
import { SnippetPreview } from "@/lib/types";
import Image from "next/image";

const SnippetCard = ({ title, description, slug, icon }: SnippetPreview) => {
  return (
    <>
      <Link
        key={slug}
        className="max-w-sm min-h-36 w-full p-4 rounded-xl border"
        href={`/snippets/${slug}`}
      >
        <div className="w-full relative space-y-4 flex-1">
          <p className=" text-violet-600 dark:text-amber-600 uppercase tracking-tight">
            {title}
          </p>
          <p className="text-stone-600 dark:text-stone-400 tracking-tight">
            {description}
          </p>

          <Image
            src={`/icons/${icon}`}
            alt={title}
            width={32}
            height={32}
            className="rounded-xl border"
          />
        </div>
      </Link>
    </>
  );
};

export default SnippetCard;

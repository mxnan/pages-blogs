import Link from "next/link";
import React from "react";

export const A = (props: any) => {
  const { href, children, ...rest } = props;
  const isInternalLink = href && (href.startsWith("/") || href.startsWith("#"));
  if (isInternalLink) {
    return (
      <Link href={href} {...rest}>
        <a {...props} />
      </Link>
    );
  }

  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      className="no-underline px-3 border rounded-lg text-lg capitalize
       
       shadow shadow-violet-400 dark:shadow-emerald-900 "
      {...props}
    />
  );
};

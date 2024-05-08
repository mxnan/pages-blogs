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

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
};

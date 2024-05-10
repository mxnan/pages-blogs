import React from "react";

export default function CustomCode({
  children,
  ...props
}: {
  children?: React.ReactNode;
  props?: string;
}) {
  return (
    <>
      <code {...props}>{children}</code>
    </>
  );
}

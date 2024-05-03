import React from "react";

export default function Strong({ children }: { children?: React.ReactNode }) {
  return <strong className="font-semibold">{children}</strong>;
}

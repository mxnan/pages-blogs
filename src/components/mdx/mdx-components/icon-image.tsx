"use client";
import React from "react";
import Image from "next/image";

export default function IconImage({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={"mdx-hero-image mt-3 mb-4"}>
      <p>{src}</p>
      <p>{alt}</p>
    </div>
  );
}
